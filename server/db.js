//import db.js
const express = require('express')
const cors = require('cors')
const db = require('./db')
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
app.get('/api/links', db.getLinks)
app.post('/api/links', db.addLink)
app.post('/api/links/:id', db.updateLink)
app.post('/api/links/:id', db.deleteLink)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})

const Pool = require('pg').Pool
const pool = new Pool({
user: 'analeonardo',
host: 'localhost',
database: 'linksapi',
password: '2002',
port: 5432,
})

// GET all links
const getLinks = (req, res) => {
    pool.query('SELECT * FROM favlinks', (error, results) => {
        if (error) {
          throw error;
        }
        const links = results.rows;
        res.status(200).json(links);
      });
    }
  
  // POST to create a new link

  const addLink = (req, res) => {
    const { name, url } = req.body;
    pool.query('INSERT INTO favlinks (name, url) VALUES ($1, $2) RETURNING *',
     [name, url], (error, results) => {
      if (error) {
        throw error;
      }
      const newLink = results.rows[0];
      res.status(201).json(newLink);
    });
  }

  
  // POST to update a link with a specific id
  const updateLink = (req, res) => {
    const { name, url } = req.body;
    //gets the id
    const id = req.params.id;
    pool.query('UPDATE favlinks SET name = $1, url = $2 WHERE id = $3 RETURNING *', [name, url, id], (error, results) => {
      if (error) {
        throw error;
      }
      const updatedLink = results.rows[0];
      res.status(200).json(updatedLink);
    });
  }

  
  // POST to delete a link with a specific id
  const deleteLink = (req, res)=> {
    const id = parseInt(req.params.id);
  
    pool.query('DELETE FROM favlinks WHERE id = $1 RETURNING *', [id], (error, results) => {
      if (error) {
        throw error;
      }
      const deletedLink = results.rows[0];
      res.status(200).json(deletedLink);
    });
  }


    module.exports= {
    getLinks,
    addLink,
    updateLink,
    deleteLink


    }

