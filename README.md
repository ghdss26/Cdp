# Sistema Cdp - Cadastro de Produtos

Projeto que tem como principio fazer cadastro de produtos

## Conhecimentos Adquiridos nesse projeto 

Integração de APIS - (Interface de Programação de Aplicação), onde foi feito uma arquitetura Monólito para receber na otimização da velocidade 
entre as requisições feitas pelo comando dos usuários. As APIS foram autenticadas através de Tokens que distribui por camadas de segurança 
a geração dos dados por rotas definidas em entidades. Essas informações são geradas pelo SGDB - Sistema de Gerenciamentos de banco de dados, vinda do 
pacote Controller que é responsavel por controlar o fluxo de cadastro, alteração, listagem e exclusão dos dados. Esse pacote vai esta atrelado as camadas
dos services que vai obter a finalidade de cadastrar, alterar, listar e excuir essas informações das tabelas e atributos vindas do banco e vai passar no 
pacote model que é responsavel por criar as entidades para constituir esses resultados de informações. 

Foi usado para o projeto o Dto que obtém a ideia de consistir basicamente, 
o agrupamento de conjunto de atributos em varias classes simples de forma a otimizar a comunicação.

## Tecnologia Utilizada para Back - End 

-[Java](https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR) 

-[JDBC](https://www.oracle.com/br/database/technologies/appdev/jdbc.html) 

-[Mysql](https://www.mysql.com/)

-[Jsp](https://www.ibm.com/docs/pt-br/rsas/7.5.0?topic=files-javaserver-pages-jsp-technology) 

-[Spring Boot](https://spring.io/projects/spring-boot) 

-[Insomnia](https://insomnia.rest/download) 

## Depedencias do Spring Boot 

-[Lombok](https://imasters.com.br/back-end/projeto-lombok-escrevendo-menos-codigo-em-java) 

-[Spring Dev Tools](https://www.javatpoint.com/spring-boot-devtools) 

-[Maven](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-devtools)

-[Versão 19](https://www.oracle.com/br/java/technologies/javase/jdk19-archive-downloads.html)

-[Spring Boot Start Web](https://www.javatpoint.com/spring-boot-starter-web)

## Tecnologia Utilizada para Front - End 

-[Angular](https://angular.io/) - versão 14 

## Pacotes para o Angular 

-[node](https://nodejs.org/en/download) 

-[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Depedências do Angular 

-[Axios](https://axios-http.com/ptbr/docs/intro) 

-[npm Bootstrap](https://www.npmjs.com/package/bootstrap)

## Material do Angular 

-[Angular Material](https://material.angular.io/)

## Rotas do Spring Boot - Cdp - Cadastro de Produtos

Precisa adicionar essas rotas no Postman, Insomnia ou Navegadores para ver os dados do back - end, vindas pelo banco de dados.

Entidade Produto - localhost:8050/produto 

## Informações sobre a Api do Sistema Wco 

```bash 
  
  $ Vai mostrar as todas as informações da API do Sistema, pelo banco de dados no programa Insomnia
```

## Baixar e visualizar o Projeto 

  ```bash 
  
  $ fazer um git clone do projeto pelo terminal, através - https://github.com/ghdss26/Cdp.git
  
  $ Obter o Eclipse ou intellij instalado na sua maquina
  
  $ Ter Instalado e configurado o My Sql Workbench 
  
  $ Obter Java Jre e Jdk na versão 11.0 para ver o funcionamento do projeto e Testar ele
  
  $ Obter sua conexão ativa no Banco de dados como servidor local 
  
  $ Possuir um programa Postman ou Insmonia para copiar e colar as rotas das entidades e ver o crud completo
 
```
## Como executar o projeto no Spring Boot no terminal ou vscode

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/ghdss26/cdp.git

# entrar na pasta do projeto cdp
cd cdp 
cd back-end 

# executar o projeto
./mvnw spring-boot:run
```
## Como executar o projeto no Angular no terminal ou vscode

```bash
# clonar repositório
git clone https://github.com/ghdss26/cdp.git

# entrar na pasta do projeto cdp
cd cdp 
cd front-end 

# executar o projeto
npm start run 

digitar no navegador: http://localhost/4200
```
