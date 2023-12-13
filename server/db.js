// const Pool = require('pg').Pool
//     const pool = new Pool({
//     user: 'analeonardo',
//     host: 'localhost',
//     database: 'linksapi',
//     password: '2002',
//     port: 5432,
//     })
    
//     // GET /api/links Get all the links from the database
//     app.get('/api/links', (req, res) => {
//         pool.query('SELECT links FROM linksapi', (error, results) => {
//         if (error) {
//         throw error
//         }
//         res.status(200).json(results.rows)
//         })
//         })
    
//         //insert new link using post
//     app.post('/api/links', (req, res) => {
//         const {name, url} = req.body;
//         const query = 'INSERT INTO favlinks (name, url) VALUES ($1, $2)  RETURNING *';
//         pool.query(query, [name, url], (error, result) => {
//         if (error) {
//           throw error;
//         }
//         res.status(201).json(result.rows[0]);
//     });
//     });


const Pool = require('pg').Pool
const pool = new Pool({
user: 'analeonardo',
host: 'localhost',
database: 'favlinks',
password: '2002',
port: 5432,
})

module.exports = {
    getLinks,
    }