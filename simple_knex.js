const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Asra@123',
        database: 'school'
    }
}

// const knex = require('knex')(options);

// knex.raw("SELECT VERSION()").then(
//     (version) => console.log((version[0][0]))
// ).catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

// create table

// const knex = require('knex')(options);

// knex.schema.createTable('cars', (table) => {
//     table.increments('id')
//     table.string('name')
//     table.integer('price')
// }).then(() => console.log("table created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

// insert table

// const knex = require('knex')(options);

// const cars = [
//     { name: 'Audi', price: 52642 },
//     { name: 'Mercedes', price: 57127 },
//     { name: 'Skoda', price: 9000 },
//     { name: 'Volvo', price: 29000 },
//     { name: 'Bentley', price: 350000 },
//     { name: 'Citroen', price: 21000 },
//     { name: 'Hummer', price: 41400 },
//     { name: 'Volkswagen', price: 21600 },
// ]

// knex('cars').insert(cars).then(() => console.log("data inserted"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

// secting all rows

// const knex = require('knex')(options);

// knex.from('cars').select("*")
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['id']} ${row['name']} ${row['price']}`);
//         }
//     }).catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

// where

// const knex = require('knex')(options);

// knex.from('cars').select("name", "price").where('price', '>', '50000')
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['name']} ${row['price']}`);
//         }
//     })
//     .catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

// all rows

const knex = require('knex')(options);

knex.from('cars').select('name', 'price').orderBy('price', 'desc')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
