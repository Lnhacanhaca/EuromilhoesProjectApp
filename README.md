# EuromilhoesProjectApp

Descrição do tema: Geração de chave do euromilhões.

Pretende-se desenvolver um sistema que permita a um utilizador anónimo "registar" uma aposta (chave) para o sorteio do Euromilhões. Essa chave é constituída por 5 números + 2 estrelas e pode ser gerada aleatoriamente ou inserida manualmente.

Os números são inteiros, com valor entre 1 e 50, sem repetições, e as estrelas são 2, com valor entre 1 e 12, também sem repetição de valores.

A cada aposta (chave) gerada ou inserida manualmente, o sistema deve indicar ao utilizador se a combinação já foi usada alguma vez. Também permitirá ao utilizador "registar" a aposta em causa, guardando-a em base de dados.

O sistema apenas reconhece utilizadores anónimos e, na base de dados, apenas guarda as apostas (chaves) registadas.
