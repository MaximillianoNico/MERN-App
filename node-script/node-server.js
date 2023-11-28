const http = require('http');
const mongoose = require('mongoose');
const Users = require('./Users');

const InitDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017",
      { dbName: "fastco-db" }
    )
  } catch (err) {
    if (err) {
      console.log('Connection Failed to ', DatabaseURL, err)

      return;
    }

    console.log('Success connect to ', DatabaseURL)
  }
}

const getBody = (req, res) => new Promise((resolve, reject) => {
  const { method, url, headers } = req;
  let body = [];
  let responseBody = {}
  req
    .on('error', err => {
      console.error(err);
    })
    .on('data', chunk => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log('body: ', body)
      // BEGINNING OF NEW STUFF
      res.on('error', err => {
        console.error(err);
      });
      res.statusCode = 200;
      res.writeHead(200, {'Content-Type': 'application/json'})
      responseBody = { headers, method, url, body: JSON.parse(body) };
      resolve(responseBody)
    });
})

const app = http.createServer(async function (req, res) {
  await InitDB();
  const { method, url } = req;
  
  if (url.startsWith('/users') && method === 'GET'){
    try {
      const rows = await Users.find();

      const response = {
        status: "Success",
        data: rows
      }
      
      res.writeHead(200, {'Content-Type': 'application/json'})
      return res.end(JSON.stringify(response));
    } catch (err) {
      console.log('ERR: ', err);
      const response = {
        status: "Errors",
        error: err
      }

      return res.end(JSON.stringify(response));
    }
  }

  if (url.startsWith('/users/add') && method === 'POST'){
      const data = await getBody(req, res);

      const payload = {
        username: data?.body?.username,
        age: data?.body?.age,
        email: data?.body?.email
      };

      try {
        const newUser = new Users(payload);

        const rows = await newUser.save();

        const response = {
          status: "Success",
          data: rows
        }

        return res.end(JSON.stringify(response));
      } catch (err) {
        console.log('ERR: ', err);
        const response = {
          status: "Errors",
          error: err
        }

        return res.end(JSON.stringify(response));
      }
    // handle /store?product=shoe&brand=nike&color=blue
  }
  
  if (url.startsWith('/users/delete') && method === 'DELETE'){
    const data = await getBody(req, res);

    try {
      const rows = await Users.deleteOne({ username: data?.body?.username })

      const response = {
        status: "Success",
        data: rows
      }

      return res.end(JSON.stringify(response));
    } catch (err) {
      console.log('ERR: ', err);
      const response = {
        status: "Errors",
        error: err
      }

      return res.end(JSON.stringify(response));
    }
    // handle /auth?jwt
  } 

})

app.listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});