<h1 align="center">:computer: PipeBling Api :green_heart:</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/igor-gregori/">
    <img alt="Linkedin" src="https://img.shields.io/badge/-Igor%20Gregori-0e76a8?label=Linkedin&logo=linkedin&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/PipeBling/blob/main/LICENSE">
    <img alt="MIT license" src="https://img.shields.io/github/license/Igor-Gregori/PipeBling?color=A31F34&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/PipeBling/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/Igor-Gregori/PipeBling?color=EBEBEB&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/PipeBling/issues?q=is%3Aissue+is%3Aclosed">
    <img alt="GitHub closed issues" src="https://badgen.net/github/closed-issues/Igor-Gregori/PipeBling?color=EBEBEB&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/PipeBling/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/Igor-Gregori/PipeBling?color=yellow&style=flat-square"/>
  </a>
  <a href="https://github.com/Igor-Gregori/PipeBling">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Igor-Gregori/PipeBling?color=EBEBEB&style=flat-square"/>
  </a>
</p>

<p align="center">
  <a href="#page_facing_up-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagrama">Diagrama</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotina">Rotina</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-documentacao">Documentação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man-Desenvolvedor">Desenvolvedor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img src="./.github/preview.png" alt="Preview Test" width="100%" />  
</p>

## :page_facing_up: Descrição

Essa api tem o intuito de fazer uma integração simples entre o [CRM Pipedrive](https://www.pipedrive.com/pt) e o [ERP Bling](https://www.bling.com.br/home), registrando os Deals com status ganho ("won") do Pipedrive como pedido de vendas no Bling e também fazendo a consolidação dos dados das vendas em um banco orientado a documentos [MongoDB](https://www.mongodb.com/).

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Moment Timezone](https://momentjs.com/timezone/docs/)
- [Mongoose](https://mongoosejs.com/)
- [Node Schedule](https://www.npmjs.com/package/node-schedule)
- Para mais detalhes, veja o <kbd>[package.json](./package.json)</kbd>

## 🔶 Diagrama
O fluxo de consolidação de dados do PipeBling funciona dando início a uma requisição dos deals com status won (negócios fechados/ganhos) para o Pipedrive. O Pipebling filtra os deals e monta uma estrura que terá somente os deals com status won do dia atual e depois organiza e insere os pedidos no Bling e consolida os dados com a soma de todas as ordens no MongoDB, segue um diagrama exemplificando o processo:

<img src="./.github/diagramaPipeBling.png" alt="Diagrama da aplicação" />

## :recycle: Rotina
O PipeBling conta com um Mini Worker para automatizar a tarefa de consolidar os dados, utilizando a tecnologia [Node Schedule](https://www.npmjs.com/package/node-schedule), podemos definir uma rotina de processos a ser realizada na aplicação. O PipeBling já tem uma rotina padrão definida para consolidar os dados todo dia as 23:00.

Você pode ativar/desativar a rotina alterando a constante de ambiente "WORKER_ACTIVE".

Fique atento com a configuraçao de BASE_URL e WORK_IN_HOUR caso tenha problemas ao trabalhar com a rotina.

Não se preocupe com a chamada da rotina mais de uma vez, é verificado se a consolidação já foi realizada.

## :book: Documentação
Você pode conferir mais sobre os endpoints nessa simples e rápida documentação

- [PipeBling Documentation](https://ecstatic-einstein-0d6a85.netlify.app/)

Você também pode importar as chamadas dos endpoints clicando no botão "Run in Insomnia"

<img src="./.github/runInInsomnia.png" alt="Importar requisições para o insomnia" />

## :computer: Instalação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# Clone este repositório.
$ git clone https://github.com/Igor-Gregori/PipeBling

# Vá para a pasta Net-Promoter-Score-NLW
$ cd PipeBling

# Instale as dependências
$ yarn

# Execute aplicação
$ yarn dev

# O app vai está rodando na porta 3333
```
Agora através de algum client rest api como o [Insomnia](https://insomnia.rest/download) você poderá trabalhar com a api.


## :man: Desenvolvedor

<a href="https://github.com/Igor-Gregori">
 <img src="https://avatars.githubusercontent.com/u/60407257?v=4" width="80px;" alt="Igor Gregori" style="border-radius:50%"/>
  <br />
 <sub><b>Igor Gregori</b></sub>
</a>

Desenvolvido por <b>Igor Gregori</b> :metal::satisfied::+1: Entre em contato! :speech_balloon:

<a href="https://www.linkedin.com/in/igor-gregori/">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Igor%20Gregori-0e76a8?label=Linkedin&logo=linkedin&style=flat-square" >
</a>

## :closed_book: Licença

This project is [MIT](https://github.com/Igor-Gregori/moveit/blob/main/LICENSE) licensed.