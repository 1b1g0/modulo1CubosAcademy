![](https://i.imgur.com/xG74tOh.png)

# Exercício 04

## Adicionando maior idade

1. Dado a lista de objetos abaixo, adicione uma nova propriedade chamada `maior_idade` para cada objeto da lista. A propriedade deverá receber um valor booleano de acordo com a propriedade `idade` de cada objeto. Caso a idade seja maior que 17, o valor deve ser `true`, caso contrário `false`.

```javascript
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
```

_Lembre-se que podemos percorrer a lista, de modo, que para cada objeto percorrido será atribuída uma nova propriedade, portanto, o resultado final para o exemplo acima, deverá ser como ilustrado abaixo:_

```javascript
[
    {
        "nome": "João",
        "idade": 25,
        "maior_idade": true
    },
    {
        "nome": "Ana",
        "idade": 18,
        "maior_idade": true
    },
    {
        "nome": "Beatriz",
        "idade": 15,
        "maior_idade": false
    },
    {
        "nome": "Carlos",
        "idade": 16,
        "maior_idade": false
    },
    {
        "nome": "Antonio",
        "idade": 32,
        "maior_idade": true
    }
]
```

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [🗸] Resolver o exercício revendo a aula se necessário
-   [🗸] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [🗸] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [🗸] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`
