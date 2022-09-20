App Temporizador de Estudos.

Neste projeto pude me aprofundar mais nas tecnologias React e TypeScript, aplicando um estudo teórico e prático com objetivo de consolidar e expandir meus conhecimentos.

![layout app temporizador de estudos](https://user-images.githubusercontent.com/99665225/191318703-7f34d41a-a869-45c4-a6e9-208b1c2c4bfe.png)

1- Sobre o React:</br>
2- Iniciando a Aplicação:</br>
3- Componentização:</br>
4- Estilizando com Sass e CSS Module:</br>
5- PROPS:</br>
6- STATE:</br>
7- Controlar campos de um Formulário com estados:</br>
8- Cronômetro e useEffect:</br>
9- Finalizando Tarefa:</br>


**<h1 align="center">Estudos sobre React com TypeScript</h1>**

React foi originalmente apresentado pelo Facebook. Ele é usado por grandes companhias e marcas mundo afora. Atua como uma biblioteca para o JavaScript. Mas ele também pode ser categorizado como um framework.

O React tem duas premissas principais:

A primeira delas é a componentização. É uma forma de simplificar estruturas da sua aplicação em pequenas partes que podem ser reutilizadas. Com ela podemos ter, por exemplo, diversos ícones, reaproveitando esses componentes e alterando somente as partes diferentes entre elas. Sendo assim, esses ícones podem ter os mesmos aspectos, as mesmas cores e os mesmos comportamentos, alterando somente aquilo que é necessário.

A segunda é o gerenciamento de estado. O React é declarativo ou "reativo", enquanto o Javascript normalmente é imperativo, que acaba interferindo na performance da aplicação.

O estado do componente não é uma simples variável, ele é gerenciado pelo React que determina a necessidade de cada componente ser renderizado novamente, ou seja, sempre que o nosso estado sofrer alguma alteração, nosso componente será montado novamente com as novas informações, em tempo-real.

Apesar do estado ser uma variável em nossa classe, não podemos alterar o estado da mesma forma que alteramos uma variável comum, isso porque o estado é imutável, ou seja, ele nunca deve ser alterado e sempre deve ser sobreposto.

Princípios SOLID em aplicações feitas com React:

[S]ingle Responsibility Principle (Princípio da Responsabilidade Única):
Criar componentes e funções com uma única utilidade.

[O]pen/Closed Principle (Princípio do Aberto/Fechado)
Entidades de software como classes, módulos, funções e etc, devem ser abertas para extensão, mas fechadas para modificação.

[L]iskov Substitution Principle (Princípio da Substituição de Liskov):
Os objetos em um programa devem ser substituídos por instâncias de seus subtipos, sem alterar a exatidão desse programa.

[I]nterface Segregation Principle (Princípio da Segregação de Interfaces):
Muitas interfaces específicas são melhores do que uma interface de uso geral.

[D]ependency Inversion Principle (Princípio da Inversão de Dependências):
Programe voltado para interface, não para implementação.

Saiba mais sobre: https://ntconsult.com.br/insights/aplicando-solid-no-react/

**<h1 align="center">Iniciando a Aplicação:</h1>**

**1ª ETAPA:**

Instalar o Node.JS e buscar na internet um pacote de gerenciamento para ele;
Nesse estudo foi utilizado o NPM. https://www.npmjs.com/;

Dentro do site NPM busque por “React Create App” e pesquise na documentação 
para saber os comandos que devem ser colocados no terminal para dar início a aplicação. https://create-react-app.dev/docs/getting-started/;


*Sobre o que é Node.JS e o Gerenciador NPM:

**NodeJS:**

Enquanto o JavaScript é usado como uma linguagem de desenvolvimento do lado do cliente, o Node.js cobre a programação do lado do servidor. Graças ao Node.js, o JavaScript se tornou uma linguagem de desenvolvimento completa para todos os fins.

O Node.js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário pode criar aplicações sem depender do browser para isso. Com alta capacidade de escalabilidade, boa flexibilidade, arquitetura e baixo custo, torna-se uma ótima opção para programação.

**NPM (Node Package Manager):**

É um poderoso gerenciador de pacotes que faz parte do Node.js. Trata-se de uma ferramenta crucial para realizar um desenvolvimento organizado e otimizado, pois permite instalar dependências em um projeto, mantê-las atualizadas e muito mais. 

Ele permite instalar, desinstalar e atualizar dependências em uma aplicação por meio de uma simples instrução na linha de comando. Sempre que um projeto é criado por meio do gerenciador, é adicionado um arquivo chamado package.json, que contém a relação dos pacotes instalados no ambiente. Assim, quando for preciso realizar alguma alteração, o NPM verifica esse arquivo e faz as atualizações necessárias de forma simples e rápida. 

O NPM conta com um repositório repleto de ferramentas de código aberto que podem ser utilizadas gratuitamente. Por esses motivos, é muito importante conhecer essa tecnologia.

**2ª ETAPA:**

Digitando os comandos no terminal para iniciar a aplicação.

![image1](https://user-images.githubusercontent.com/99665225/191321121-cf44b53f-0bf1-4a28-abd2-b406a1f7e5c8.png)

npx: É utilizado para executar um pacote, e não para baixá-lo. Se usarmos um comando como npm install, iremos instalar na máquina o pacote. Com o npx, apenas executaremos esse pacote a partir da nuvem.

 - --template typescript: Para inserir um template baseado em Typescript para nosso projeto.

 - --use-npm: para especificar que queremos usar o npm para gerenciar nosso pacote.

npm start: Por fim, dentro do terminal, entre na pasta criada para o novo projeto e execute o comando npm start.

![image2](https://user-images.githubusercontent.com/99665225/191321264-e991529c-3550-4a5e-b169-126fa0807adf.png)

Após a instalação, dentro do leitor de códigos, podemos observar diversas pastas e arquivos que foram adicionadas nessa aplicação. Em resumo será comentado alguns mais importantes e outros que serão removidos para poder iniciar o desenvolvimento do projeto.

“package.json” é padrão para qualquer projeto que utiliza o NPM, nele temos o nome do projeto, a versão, as dependências que está usando e se ele é privado ou não. Os scripts são os comandos que ele pode executar, como npm start, que se refere ao comando react-scripts start.

“package-lock.json” é um arquivo fechado que nunca vamos alterar. Normalmente quando instalamos alguma dependência ou coisas do tipo, todo o histórico é feito nesse arquivo.

“eslintConfig” são configurações de ESLint, uma forma de padronização(boas práticas) de código. Nesta seção temos react-app e react-app/jest, uma configuração de testes e etc. 
E também uma lista de alguns navegadores que suportam essa aplicação.

"node_modules" contém literalmente todos os pacotes que foram instalados no projeto. 
Mas não precisamos nos preocupar tanto, pois ele é gerenciado pelo NPM.

“.gitignore” é um arquivo do Git, referente a tudo que o Git irá ignorar quando fizermos commits. Por exemplo, os pacotes em "node_modules", os arquivos de debug e etc.

“tsconfig.json” possui algumas configurações de Typescript. 

“README.md” é a documentação da nossa aplicação.

"src" é a pasta principal do projeto, e é onde trabalhamos nosso código. 

“App.tsx” tem os códigos HTML da página, incluindo logos e o texto que será exibido na tela.

“index.css” possui as configurações de reset.

“index.tsx” importa e renderiza o nosso “App.tsx”

“react-app-env.d.ts” é um arquivo de descrição utilizado pelo Typescript.

**Removendo tudo que não será utilizado neste projeto.**

Nesse projeto removeremos os arquivos “App.css”, “App.test.tsx”, “logo.svg”, “reportWebVitals.ts” e “setupTests.ts”. 

Depois de deletarmos esses arquivos, um erro passará a ser exibido no navegador. 
Isso mostra duas das vantagens do create-react-app: 

A primeira vantagem é o Hot Reload, que automaticamente recarrega a página sempre que fazemos alterações no código. 

A Segunda vantagem é a tela de erro que nos mostra exatamente onde estão os problemas da aplicação.

E para finalizarmos essa etapa e corrigir o erro apresentado é necessário acessar os arquivos:

“index.tsx” para removermos a importação do arquivo “reportWebVitals” que foi deletado.

“App.tsx” para removermos a importação do “App.css” e do “logo”.  Também removeremos o <header>, mantendo somente uma <div> vazia.

Agora sim o projeto estará completamente pronto para ser iniciado.

**<h1 align="center">Componentização:</h1>**

Em uma aplicação React, é comum encontrar vários tipos de componentes distribuídos na aplicação, dentre os mais usados: componente de classe e componente funcional.

De modo prático, alguns componentes irão controlar o estado da aplicação e fazer chamadas em uma API externa para troca de dados, enquanto outros irão se preocupar apenas com a renderização desses dados para o usuário.

Para o React diferenciar seus componentes de um web-component, ele pede para que criemos um componente com a primeira letra maiúscula, assim ele consegue diferenciar.

Por exemplo  meuBotao  é um web-component e MeuBotao é um componente React.

**Class Components.**

Para criar nossos componentes foi adicionado uma pasta dentro da pasta “SRC”  chamada de “components”, seguido de outras pastas com seus nomes específicos para cada componente da aplicação. E dentro de cada pasta, criamos o arquivo “index.tsx”.

O primeiro componente deste estudo foi criado utilizando um método bem simples, porém tem sido cada vez menos utilizado pelos desenvolvedores, chamada-se class components.

![image3](https://user-images.githubusercontent.com/99665225/191321640-fe7b7075-aaed-4e99-809c-6a9243f6ffae.png)

Após importar o React, foi criado uma classe Botao que se estende de um componente React, tornando-se assim, um componente React. 

O Class Components tem uma função obrigatória que é a de renderizar com render( ) e retornar um HTML com return( ). Sendo assim, no return foi colocado um <button>.

Por fim, foi exportado essa classe na última linha, utilizando “export default Botao”

OBS: O return trabalha como um HTML, porém podemos escrever javaScript dentro dele.
Por isso é chamado no React de JSX. É uma extensão de sintaxe para JavaScript. 

O React não requer o uso do JSX. Porém, a maioria dos desenvolvedores acha prático como uma ajuda visual quando se está trabalhando dentro do código em JavaScript. 

O JSX permite ao React mostrar mensagens mais úteis de erro e aviso.
Para saber mais a respeito, confira na documentação abaixo:
https://pt-br.reactjs.org/docs/introducing-jsx.html

**Function Components.**

Para os próximos componentes deste estudo, ao invés de utilizar o Class Components, que era a forma mais antiga, será utilizado Function Component, que é o mais recomendado.

![image4](https://user-images.githubusercontent.com/99665225/191321700-d8d8b2d1-7c86-4e0e-9d29-6e6649031d33.png)

Sendo assim, foi aplicado uma function, seguido do nome do componente, neste caso Lista, e toda a sintaxe de uma função JavaScript.

Como a função não tem nenhuma tarefa obrigatória, como no ‘class component’, precisamos apenas retornar o "jsx". E para executar o JavaScript dentro de um componente sempre se aplica dentro das { }.

Essa é uma vantagem do "jsx", pois nos permite escrever Javascript dentro da estrutura HTML, que nesse caso foi aplicado a tag  <aside>. 

Também foi aplicado uma função .map, que faz o loop no array e retorna os valores de cada iteração.

E por fim o recurso de exportar, “export default Lista”.

**<h1 align="center">Estilizando com Sass e CSS Module:</h1>**

Existem 2 maneiras de estilizar no React:

In line Style: É a forma mais simples, mas não é a mais recomendada. 
Diferente do CSS, no React temos que colocar os atributos da classe dentro das chaves, 
e não pode usar “Hífens” entre as palavras, usando sempre a sintaxe “camelCase”.

É possível também, declarar variáveis para estilização, para chamá-las quando for especificar o atributo. Ou até mesmo renderizando a variável dentro da { } Javascript.

Podendo também trabalhar com condições true e false, criando possibilidades de variar os atributos de acordo com a interação do usuário.

Segue abaixo alguns métodos aplicados para estudo:

![image5](https://user-images.githubusercontent.com/99665225/191322061-d1c2f10d-ab29-4e22-8277-6ab6b58b5554.png)

![image6](https://user-images.githubusercontent.com/99665225/191322079-92596973-7cc0-4884-a3a1-f2832bac3c95.png)

**Estilizando com Sass no React:**

O SASS é uma linguagem de extensão do CSS. “Syntactically Awesome Style Sheets” 
(folhas de estilo com uma sintaxe incrível). A sua ideia é adicionar recursos especiais como variáveis, mixins, funções, operações e outras opções.

Primeiramente, é necessário instalar o Sass, que é o pré-processador CSS. 

No próprio site NPM, busque por Sass e entre em Usage, que mostrará como podemos instalar com o comando: npm install --save-dev sass. 

Após a instalação, confirme no arquivo package.json:
  "devDependencies": {
    "sass": "^1.54.5"
  }

O SASS fornece novas funcionalidades que agregam, facilitam e simplificam o processo de desenvolvimento web e acaba sendo uma ótima ferramenta, pois além dos recursos, possui uma sintaxe mais fácil de compreender.

**Estilizando com CSS Module:**

Os css-modules são arquivos css em que os classNames e animações são definidos localmente, isso significa que os estilos ali criados, só serão declarados dentro daquele escopo, e não globalmente, evitando conflitos entre estilos.

Para instalar basta acessar o site npm para analisar os comandos de acordo com as  necessidades do projeto. Neste estudo, como estamos praticando TypeScript então foi necessário um module compatível. 

npm install -D typescript-plugin-css-modules

Outro detalhe é a necessidade de informar a configuração Type Script que um novo plugin foi instalado. Então dentro do arquivo tsconfig.json inclua:

 "plugins": [{ "name": "typescript-plugin-css-modules" }]

![image7](https://user-images.githubusercontent.com/99665225/191322234-40986610-69b4-417e-a2c8-c5202ca172fa.png)

Link para saber mais:
https://www.npmjs.com/package/typescript-plugin-css-modules

A partir daqui é preciso fazer com que os arquivos de estilo tornem-se um módulo:
name.module.scss.

É necessário alterar seu import dos estilos como se fosse um objeto: 
import styles from './name.module.scss' 

E para a utilização dos classNames, ao invés de ser uma string, passará a ser uma variável JavaScript com uso das chaves e será da seguinte forma:
className={styles.container} 

![image8](https://user-images.githubusercontent.com/99665225/191322398-74ca8fc6-1f9d-458b-a9c0-e08b066b8198.png)

**<h1 align="center">PROPS:</h1>**

Conceitualmente, componentes são como funções JavaScript. 

Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React que descrevem o que deve aparecer na tela.

Props são como argumentos ou propriedades de uma função,  passados para componentes React, por meio de atributos HTML, são os valores que um componente recebe do ‘componente pai’. 

Também é uma forma externa, uma forma acima do componente, de mandarmos alguma informação para dentro do componente, para que ele realize algo solicitado. 

![image9](https://user-images.githubusercontent.com/99665225/191322492-7ae516b4-0596-4501-b818-d1dfbef1493f.png)

Após fazer a função do item com a PROPS temos que integrá-lo dentro do arquivo lista,
onde será declarado como parâmetro no elemento pai, a tag ul.

![image10](https://user-images.githubusercontent.com/99665225/191322621-951ac089-8aed-410d-9d52-00d19fa64be7.png)

Agora a Lista só tem a responsabilidade de fazer essa iteração, que é esse map, onde enviará cada tarefa para o componente Item. 

E o Item em si, só tem responsabilidade de renderizar esse item, somente essa parte do array de tarefas que ele precisa renderizar, conseguindo assim, desacoplar de forma correta.


***Sobre a propriedade Key:**

O React cria um DOM virtual em memória e só atualiza o DOM real quando algo dentro desse Virtual DOM realmente é alterado e atualizado. Para isso acontecer aplica-se a propriedade key para linkar o item no Virtual DOM no DOM real. 

Sendo assim, não vemos a props sendo passada para o componente Item, pois essa prop é algo interno no React.

A Key deve ser atribuída aos elementos dentro do array para dar uma identidade estável aos elementos. Ajudando o React a identificar quais itens sofreram alterações.

Saiba mais a respeito na documentação do React: https://pt-br.reactjs.org/docs/lists-and-keys.html#keys

**<h1 align="center">STATE:</h1>**

O state de um componente React é uma propriedade do componente onde colocamos dados que, quando mudados, devem causar uma nova renderização. Se deve causar mudança fica nos state, se não deve, não fica.

**State no function component:**

Geralmente declaramos uma variável “const nome = useState( )” que é a função disponibilizada pelo React para trabalharmos dentro de um function components. 
O useState precisa do estado e de uma função para mudar esse estado, não podemos apenas mudar na mão. 

O React em vez de exportar esse useState e o return dele ser simplesmente um estado, ele retorna um array onde o primeiro item é o próprio estado atual, ou seja, tarefas.

E o segundo item é uma função para podermos alterar esse estado. Chamada por convenção de “setNome”, ou seja, setTarefas.

Com essa função, o React consegue entender que algo mudou e se atualiza.

É muito comum chamarem essa função de Hook, então geralmente tudo que tiver um “use”  podemos associar a um Hook(gancho).

Declara-se a variável const e abre colchetes [ ]. O index zero deste array é o tarefas(estado atual) e o index 1 é a função para alterar este estado.

![image11](https://user-images.githubusercontent.com/99665225/191322807-5ae6a3c8-cd52-4caf-a8e1-cba222513c9b.png)

(Observe que ao declarar a função useState, o React automaticamente a importou acima.) 

Sendo assim, foi aplicado a propriedade “onClick”  com uma função setTarefas( ), que recebe um spread de tarefas e um novo objeto, que neste estudo, será uma nova tarefa.

Agora o React  atualiza o componente de maneira dinâmica, porque colocamos um novo item nessa lista e avisamos para ele.

![image12](https://user-images.githubusercontent.com/99665225/191322920-beb9cdeb-225e-4435-8610-415b2cf8f98d.png)

***Sobre Hooks:**

São funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida dos componentes funcionais. 

Hooks são funções JavaScript, mas eles impõe duas regras adicionais:

Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de loops, condições ou funções aninhadas.

Apenas chame Hooks de componentes funcionais. Não chame Hooks de funções JavaScript comuns.


Saiba mais sobre na documentação React: https://pt-br.reactjs.org/docs/hooks-overview.html#:~:text=Hooks%20s%C3%A3o%20fun%C3%A7%C3%B5es%20que%20permitem,voc%C3%AA%20use%20React%20sem%20classes.


***Sobre Spread:**

Spread syntax (Sintaxe de Espalhamento) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos ou elementos são esperados.

É muito importante para fazer atualizações em estados, pois quando queremos atualizar estados, é comum termos parte do estado que não será alterado

**State no class component:**

Dentro do arquivo do Formulário, ao contrário do function components onde utilizamos Hooks, no class components já temos um state junto. Para criarmos um state aqui dentro, devemos fazê-lo antes do “render( )”

Para acessar as informações inseridas no formulário, diferente do JavaScript, em que geralmente pegamos via DOM, aqui no React armazenamos esse valor e controlamos ele em algum lugar. 

Podemos pegá-lo quando quisermos e, por utilizar o state, sempre que mudarmos esse valor, o componente vai atualizar. 

Para fazer isso, é necessário deixar o componente com uma terminologia que chamamos de "controlado". 

Vamos colocar um state React dentro dele e sempre que essa informação mudar, ela vai para dentro de um valor no state.

![image13](https://user-images.githubusercontent.com/99665225/191323110-a98216b9-0efb-4620-861c-d7919aaf9c01.png)

Após criar a função de evento “adicionarTarefa”,  foi aplicado OnSubmit para que essa função adicione a tarefa. Porém, é necessário também, atrelar o escopo dessa função a outro escopo, utilizando a função bind( ). 

Pois diferente de um function component, o class component não consegue ler um escopo de fora sem essa função. Esse é um dos motivos de terem migrado para function component.

![image14](https://user-images.githubusercontent.com/99665225/191323170-6f9bdc28-f6b0-46d7-8aa6-8063156007a3.png)

Ainda dentro do Formulário é necessário aplicar “onChange” dentro do input, ele pega o evento com a arrow function e especifica melhor com this.setState( ) e altera a variável.

**Sobre a diferença entre Props e State:**

É importante ter um bom entendimento sobre a diferença entre esses dois conceitos, mas em resumo:

Props são variáveis passadas entre componentes ou recebida pelo componente pai. Devemos sempre lembrar que as props são valores estáticos, não podemos alterá-las.

State são variáveis que utilizamos para valores dinâmicos e de interação com o usuário. Utilizamos quando precisamos alterar o valor de algum estado dentro dela, assim o React reconhece essa mudança e se atualiza com uma nova renderização.

**<h1 align="center">Controlar campos de um Formulário com estados:</h1>**

Agora que os fundamentos foram aplicados, e a estilização também, é necessário analisar e compreender o fluxo da aplicação que está sendo trabalhada. 

Neste caso começa com o Formulário recebendo uma Tarefa, onde ao clicar no botão adicionar, uma nova Tarefa é inserida na Lista.

Controlar campos de um Formulário com estados.

É necessário criar uma comunicação entre os componentes que são do mesmo nível, ou seja, que são filhos do mesmo pai.

O React diferente de alguns frameworks, ele funciona de forma unidirecional, só se comunica de cima para baixo. Atualmente existem outras maneiras, mas neste estudo foi aplicado via “props”, onde o componente pai é o arquivo App e os filhos que precisam se comunicar são os arquivos Formulário e Lista.  
 
Para que isso ocorra, é necessário aplicar uma função no Formulário para adicionar itens na Lista. E então colocar o componente Lista no componente pai App para que aconteça essa comunicação entre os componentes filhos.

Para ajudar a organizar essa lógica e comunicação foi criado uma interface para definir o tipo de informação a ser aplicada.

O Typescript nos dá uma forma de criar interfaces para podermos descrever tipos mais complexos, como os props dos componentes, sem precisarmos ficar dizendo que tipo é um objeto, dentro de outro objeto, repetindo códigos.

![image15](https://user-images.githubusercontent.com/99665225/191323377-ed525b5c-fbfc-4f52-a653-97e869fd54cd.png)

![image16](https://user-images.githubusercontent.com/99665225/191323427-6c0068ef-f39a-40f9-8aac-9d2365b428c5.png)

Para definirmos qual tarefa está sendo selecionada pelo usuário, precisamos de um ID que possa identificá-la. Por isso, criaremos um ID aleatório com o pacote externo UUID por meio do terminal.

Para instalar a extensão, basta digitar no terminal npm i uuid. 

Após isso é só importa-lo e já estará pronto para ser utilizado.

![image17](https://user-images.githubusercontent.com/99665225/191323474-2508f908-b4fa-465f-afcd-901f60dceef8.png)

![image18](https://user-images.githubusercontent.com/99665225/191323516-41486cb1-599c-4850-8c2a-0538a52c9496.png)

OBS: Se observarmos o código nota-se que foi utilizado junção de props + state para podermos passar valores para outros componentes e para podermos avisar que um estado deve ser mudado.

**<h1 align="center">Cronômetro e useEffect:</h1>**

Para iniciar essa etapa foi aplicado uma lógica para converter as horas e os minutos em segundos. 

E para melhorar a organização dos arquivos, foi criado por convenção 2 pastas na aplicação, para os códigos em comum e utilitários. As pastas são common e utils.

Criando assim um arquivo “time.ts” para aplicar a função para converter o tempo do cronômetro.

![image19](https://user-images.githubusercontent.com/99665225/191323618-58c574fe-e9a2-4f10-bf99-5ab145f22e24.png)

![image20](https://user-images.githubusercontent.com/99665225/191323635-c664ef98-401b-4918-b63e-f27a477c1cad.png)

**useEffect**

Nesta etapa foi encontrado um desafio para fazer com que sempre que selecionarmos uma nova tarefa ele atualize o cronômetro e mostre o tempo correto determinado pelo usuário.

De vez em quando, é necessário executar algum código adicional depois que o React atualiza a DOM. Requisições, mutações manuais do DOM e log são exemplos comuns de efeitos que não precisam de limpeza, pois podemos executá-los e imediatamente esquecer deles.

Não importa se o componente acabou de ser montado ou foi atualizado. Conceitualmente, queremos que isso aconteça em cada renderização, mas componentes de classe do React não tem um método assim.

Por isso aplicamos o Hook “useEffect” 

Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas depois da renderização. O React irá se lembrar da função que você passou e chamá-la depois que realizar as atualizações do DOM. 

Colocando “useEffect” dentro do componente nos permite acessar o state ou qualquer outra props direto do efeito. Nós não precisamos de uma API especial para lê-los,  já está no escopo da função. 

Hooks adotam as closures do JavaScript e evitam APIs específicas do React onde o JavaScript já provê uma solução.

Saiba mais na documentação do React:
https://pt-br.reactjs.org/docs/hooks-effect.html


***Sobre Ciclo de vida dos componentes:**

De maneira resumida, precisamos ter em mente que todo componente tem um ciclo de vida, ele nasce, compartilha informação e morre.

Em geral um componente tem um ciclo de vida assim:

componentWillMount (antes de ser montado)</br>
componentDidMount (acabou de ser montado)</br>
componentWillUpdate (componente acabou de atualizar)</br>
componentWillUnmount (componente vai ser desmontado)

**Aplicando contagem regressiva no Cronômetro:**

Para aplicar a contagem regressiva no cronômetro, foi necessário criar um Loop. 

Enquanto o valor inserido no tempo da tarefa for maior do que  zero, ele diminuirá 1 segundo, até chegar no zero.

![image21](https://user-images.githubusercontent.com/99665225/191323873-ff30347a-605c-4f70-bb9e-7c1ff3904070.png)

**<h1 align="center">Finalizando Tarefa:</h1>**

Por fim, foi aplicado uma função para finalizar as tarefas que foram concluídas com sucesso.

![image22](https://user-images.githubusercontent.com/99665225/191323974-f1514ed9-1185-4127-a5b5-1f5ded4e584f.png)

Este estudo foi aplicado a fim de consolidar os conhecimentos obtidos na instituição de ensino Alura, com foco na tecnologia React e TypeScript.




