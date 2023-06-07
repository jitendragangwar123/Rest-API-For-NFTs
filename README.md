# Rest-API-For-NFT
To build the Rest-API for NFT Marketplace using NodeJs and MongoDB.
```shell
$ npm init 
$ npm i express@4 
$ sudo npm install -g nodemon 
```

```shell
* JSON.parse() method used to convert the json file to object
* get status: 200 (OK)
* post status: 201 (created)
* Error status: 404 (Not Found)
* Null status: 202 (No content)
* Internal Server Error: 500 
* Missing Params: 400 (bad request)
```

```shell
* Express Middleware :- Which allow us to read the data from the user(postman body) and write our document.
  app.use(express.json());
```
```shell
//to convert the id into int
  const id=parseInt(req.params.id);
  or
  const id= req.params.id *1; 
```

```shell
patch method :- Update the only desired value from the database.
put method :- Update the whole database 
delete method :- Delete the whole database
```

```shell
* Custom middleware : Every time it will be execute whenever any request will be send.
* morgan : used as a middleware to identify the request.
  $ npm i morgan
```

```shell 
MVC Model: Model-Veiw-Controller
Seving Template: Access the static files using express
app.use(express.static(`${__dirname}/nft-data/img`));
```
