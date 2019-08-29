# Renamebot

### Por que criei este bot?

A empresa estava precisando renomear cerca de 7500 fotos por conta de uma migração, e com isso,
as imagens precisavam estar seguindo um padrão para que tudo ocorrece de uma forma esperada.
Então foi aí que tive a ideia: por que não tentar automatizar isso tudo?

#### O processo

Bom, primeiro de tudo verifiquei o problema. As imagens atuais tinham uma referência no nome delas
então iria partir deste ponto. Havia um arquivo `.xlsx` e nele tinham duas colunas: **CÓDIGO** e **NOME** ( inclusive, este arquivo exemplo está dentro da pasta docs do projeto ), e a partir dele gerei um `.json`, que me serviria de uma forma muito mais prática.
Agora eu precisava criar uma lógica de como pegar a referência do nome desses arquivos, sendo que eles poderiam estar cada vez em uma posição diferente, e então escolhi o RegEx para fazer!

```js
const rgx = /[A-z]{2}[0-9]{3,}/;
```

Essa é a ideia. A referência, em grande parte, era feita a partir de duas letras, maiúsculas ou minúsculas sucedido de três ou mais números! Pronto, uma parte resolvida, agora era só listar os arquivos dentro de uma pasta e verificar se a string continha esse rgx!

Depois disso foi mais tranquilo, era só dar `filter` dentro do meu `.json` e retornar um item filtrado. Então, até aqui, eu estava pegando um arquivo dentro da pasta, verificando se possuia a referência a partir do regex, então filtrava esse valor dentro do json.
Quando estava dentro do json ele pegava o valor **CÓDIGO** e **NOME** e armazenava em uma constante, assim, eu usava esses dois valores para dar um rename neste mesmo arquivo, e movia esse arquivo renomeado para outra pasta. Estava tudo completo até aí... ou não

#### Criando outras lógicas

Bom, dentro do mesmo arquivo index eu criei lógicas para variações de nomes ( por isso tanto if, infelizmente ), por que algumas fotos eram da mesma referencia só que com visual diferente, então haviam fotos no seguinte estilo: `AB1234 -1` ou `AB1234 (1)` e eu tive que criar uma verificação para essas variações ( talvez não tenha sido feito de uma melhor forma, mas foi a forma como consegui pensar no momento ).

Além disso dava alguns erros quando a foto não tinha Referência, já que não tinha referência, na hora de filtar, o RegEx que eu passava vinha como nulo e o script parava de rodar, então criei um simples códigos que verifica quais fotos não tem essa referência, e caso elas realmente não tenham, movia essas imagens para uma outra pasta (semReferencia)[Esse código é o notref.js].

Tentei ao máximo mover o que estava acontecendo para uma pasta diferente para posteriormente passar isso para o setor responsável, então, no final, eu consegui classificar quais fotos foram renomeadas, quais não haviam referencia no nome da foto e quais fotos não tinham uma entrada no json.

**Talvez meu código não cubra 100% dos casos ou até estejam quebrando em algum momento, porém serviu para meu desafio. Sintam-se livres para criar PR e Issues, corrigindo ou até criando novas funções**
