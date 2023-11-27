const fs = require("fs");
const mongoose = require('mongoose');
const { parse } = require("csv-parse");

const Users = require('./Users');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/node-migration');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()
  .then(() => {
    fs.createReadStream("./migration_data.csv")
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", async (row) => {
        try {
          const newUser = new Users({
            username: row[0],
            age: row[1],
            email: row[2]
          })

          await newUser.save();
        } catch (err) {
          console.log('Failed: ', row)
        }
        console.log(row);
      })
  })

