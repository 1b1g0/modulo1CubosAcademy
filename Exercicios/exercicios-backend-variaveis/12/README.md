![](https://i.imgur.com/xG74tOh.png)

# Exercício 12

## Taxa de Juros

Faça um programa que calcula a taxa de juros que foi operada sobre um financiamento a partir do montate total que foi pago, do capital inicial que foi obtido como empréstimo e do tempo decorrido do financiamento.

A fórmula (e um exemplo) que calcula essa taxa segue abaixo:

$$ i = \frac{M}{C}^\frac{1}{n} - 1 $$

onde:

**i:** taxa de juros \
**M:** montante \
**C:** capital inicial (valor de dinheiro inicial) \
**n:** número de meses

#### Exemplo:

Digamos que pegou emprestado R$ 60.000,00 e após 24 meses tenha pago R$ 90.000,00 para encerrar sua dívida. Qual a taxa de juros mensal desse emprestimo?

Do enunciado acima temos:

**M:** 90000 \
**C:** 60000 \
**n:** 24

$$ i = \frac{90000}{60000}^\frac{1}{24} - 1 $$

$$ i = 0,01703 $$

$$ i = 1,703% ao mês $$

Imprima a taxa de juros com uma mensagem seguindo o formato a seguir (substituindo C, i, M e n por números):

"O seu financiamento de 60000 reais teve uma taxa de juros de 1,703%, pois após 24 meses você teve que pagar 90000 reais."

---

Preencha a checklist para finalizar o exercício:

- [🗸] Resolver o exercício revendo a aula se necessário
- [🗸] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [🗸] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [🗸] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `lógica` `módulo 1` `exercício de casa` `matemática` `nodeJS`
