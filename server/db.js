const Pool = require('pg').Pool
const pool = new Pool({
user: 'analeonardo',
host: 'localhost',
database: 'favlinks',
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

