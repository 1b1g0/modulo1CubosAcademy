![](https://i.imgur.com/xG74tOh.png)

# Exercício 07

## Casos de COVID-19

Suponha que você está trabalhando no Ministério da Saúde e está trabalhando num simulador de casos de COVID-19. Seu trabalho é fazer um programa que calcula qual será o total de pessoas infectadas a partir de 3 variáveis.

**Po =** a população incial de pessoas infectadas \
**X =** quantidade de pessoas para as quais um paciente infectado pode transmitir \
**t =** tempo percorrido

Para isso, utiliza-se a fórmula seguinte:

$$ P = Po \* x ^\frac{t}{7} $$

<!-- ![P = Po _ x ^\frac{t}{7}](https://i.imgur.com/xT7rwGh.png) -->

Ou seja, se:

**Po =** 1000 \
**x =** 4 \
**t =** 100

O seu sistema ira calcular quantas pessoas estarão infectadas após 100 dias, dado que inicialmente havia 1000 pessoas infectadas, cada uma delas transmitindo para outras 4 pessoas.

P será a quantidade de pessoas infectadas após decorrido o tempo t. Imprima na tela o valor de P para os dados informados acima.

#### Exemplo

Para uma situação em que os valores são:

**Po =** 1000 \
**x =** 4 \
**t =** 7

$$ P = 1000 \* 4 ^\frac{7}{7} $$

$$ P = 4000 $$

Isso significa que, após 7 dias, o total de pessoas infectadas será de 4000, uma vez que inicialmente existiam 1000 pessoas infectadas.

---

Preencha a checklist para finalizar o exercício:

- [🗸] Resolver o exercício revendo a aula se necessário
- [🗸] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [🗸] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [🗸] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `lógica` `módulo 1` `exercício de casa` `matemática` `nodeJS`
