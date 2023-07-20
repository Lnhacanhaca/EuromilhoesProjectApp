const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
require('./connect')
const Aposta = require('./model/aposta')

const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

//PUBLIC SETUP
app.use(express.static(path.join(__dirname, './public')))
app.set("views", path.join(__dirname, "./public"));
app.set("view engine", "html");
//*PUBLIC SETUP

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

/*
app.get("/", (req, res) => {
    res.send("index.html")
})
*/
app.post("/submeter-chave", async (req, res) => {
    console.log(req.body);
    const cond = req.body.numeros.split(' ').filter((str) => str !== '');
    console.log(cond);

    for (let k = 0; k < cond.length; k++) {
        
    }

    var concat = req.body.numeros + " " + req.body.estrelas
    const val = concat.split(' ').filter((str) => str !== '');
    Array.prototype.bool = function () {
        var i, j, length = this.length - 1;

        for (i = 0; i < length; i++)
            for (j = i + 1; j <= length; j++)
                if (this[i] === this[j]) return true;

        return false;
    }

    if (val.bool()) {
        res.send('12000i')
    } else {

        

        const submit = await Aposta.create({
            numeros: req.body.numeros,
            estrelas: req.body.estrelas,
            chave: req.body.numeros + " " + req.body.estrelas,
            data: new Date().toLocaleString()
        }).catch(e => {
            res.send('11000')
        })
        res.send({ ms: submit })
    }

})

app.get("/obter-chave", async (req, res) => {
    console.log(req.body);
    const submit = await Aposta.find()
    res.send({ ms: submit })
})

app.post("/excluir-chave", async (req, res) => {
    console.log(req.body);
    const result = await Aposta.deleteOne({ chave: req.body.key })

    res.send({ ms: result })
})

app.get("/gerar-chave", (req, res) => {

    function geradorNum() {
        var arr = []
        var result = ''

        for (let index = 1; index <= 50; index++) {
            arr.push(index)
        }

        for (let index = 0; index < 5; index++) {
            result += `${arr[(Math.floor(Math.random() * arr.length))]} `
        }


        const val = result.split(' ').filter((str) => str !== '');
        return { k: val, p: result }
    }


    function geradorStar() {
        var arr = []
        var result = ''

        for (let index = 1; index <= 12; index++) {
            arr.push(index)
        }

        for (let index = 0; index < 2; index++) {
            result += `${arr[(Math.floor(Math.random() * arr.length))]} `
        }

        console.log(result);
        const val = result.split(' ').filter((str) => str !== '')
        return { x: val, y: result }
    }

    res.send({ num: geradorNum(), star: geradorStar() })

})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});




