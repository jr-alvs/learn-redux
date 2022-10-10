# Estudos sobre Redux

### `Bibliotecas mais utilizadas`
- Redux: Mais utilizado no mercado.
- Context API: Utilizar quandos as informações observados **não são atualizadas** diversas vezes.
- Mobx: Utilizado quando o foco da aplicação é trabalhar com **observer**.
- Recoll: Trabalha com **atomos**, é bem recente no mercado e tem grande potencial.
- Zustand: Semelhante ao Recoll, criação de um **único estado**.
- Apollo e Relay: São bibliotecas que já **administram os estados da aplicação**.

### `Arquitetura Flux`
- O nome das Actions deve ser **sempre** o mais especifico possivel!
- As Actions são direcionadas ao Reducer.
- O Reducer é o estado global.
- Redux não é uma mão de via dupla, **não utiliza o await** para executar o processo.
- Connect é o responsavel por conectar o componente da aplicação com o Reducer.
- Os middlewares interceptem a informação entre a Action e o Reducer, podendo assim tratar a informação recebida para executar algo, por exemplo, fazer uma Request na API ou verificar algum dado.
- O middleware utilizado é o **Redux Saga**.

## `Fluxo do Redux`
# **Info List `->` Action `->` Reducer `->` Result**
# **Result `->` Reducer `->` Connect `->` Info List**

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).