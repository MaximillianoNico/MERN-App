# MERN-App
In this repository there are 4 applications with MERN Stack. Each application contains document files that are Postman Collections for locally run tests

### MongoDB
Here is the Script that include Queries of MongoDB collections, such as:
- Query for get find document
- Query update email based on specific ID
- QUery delete documents based on inactive status

Docs: https://github.com/MaximillianoNico/MERN-App/blob/master/mongodb/Assessment.md
<br />

### Express
Create API with express include endpoint for list of users, middleware and upload file endpoint <br/ >
- [App Repository](https://github.com/MaximillianoNico/MERN-App/tree/master/express-api)<br />
- [Postman Collection](https://github.com/MaximillianoNico/MERN-App/tree/master/express-api)

How to run:
```bash
# for running the express-api, we can use docker-compose by follow this script
docker-compose up --build # execute the script on the root of folder project
```

### React Component
Here is the Web App by using React that show list of items, function input limit list and Contact Form Component.

Web App React consume Express-API so we need to run both app, here is the step for running the App
```bash
# go to folder `express-api` and start the service `yarn dev`
cd express-api && yarn dev


# run web-app-react by `yarn start`
cd web-app-react && yarn start
```

Notes:
- [Web App React](https://github.com/MaximillianoNico/MERN-App/tree/master/web-app-react)
- [Express API](https://github.com/MaximillianoNico/MERN-App/tree/master/express-api) 

### NodeJS Script
On the folder `node-script` contain 
- script for convert CSV file into MongoDB Collection Data, [Script](https://github.com/MaximillianoNico/MERN-App/blob/master/node-script/insert-csv-into-collection.js)
- Input String, [Script](https://github.com/MaximillianoNico/MERN-App/blob/master/node-script/node-input.js)
- and Node Server, [Script](https://github.com/MaximillianoNico/MERN-App/blob/master/node-script/node-server.js)


### MERN Stack
This Application Contain Blog and Schedule logic

for running this app, we can running by docker-compose

```bash
# go to app folder
cd mern-app

# Run docker compose
docker-compose up --build

# Run Web app
cd web && yarn start
```