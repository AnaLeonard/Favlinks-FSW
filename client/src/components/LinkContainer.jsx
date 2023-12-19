import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

function LinkContainer(){

    const linkData = [];
    // useState is used to keep track of data

    const [favLinks, setFavLinks] = useState(linkData);

     //making the fetchLinks
    useEffect(() => {
      fetchLinks();}, []);

      const fetchLinks = async () => {
        //fetch links if not possible display error
        try {
          const response = await fetch('/api/links'); // GET all links
          const data = await response.json();
          setFavLinks(data);
        } 
        catch (error) {
          console.error('Error fetching links from /api/links:', error);
        }
      };

    const handleRemove = (index) => {
        console.log('Removing link at index:', index);
        const updatedLinks = favLinks.filter((_, i) => i !== index);
        setFavLinks(updatedLinks);

        try {
          // Delete a link
          await fetch(`/api/links/${linkId}`, {
            method: 'POST',
          });
            } catch (error) {
          console.error('Error removing link from /api/links:', error);
        }
      };
       
      }
    
      
      const handleSubmit = (favLink) => {
        console.log('Handling submit with data:', favLink);
        setFavLinks([...favLinks, favLink]);

        try {
          // Adding new link
          await fetch(`/api/links/`, {
            method: 'POST',
          });
    
          setFavLinks(updatedLinks);
        } catch (error) {
          console.error('Error adding link:', error);
        
      };

      }
      console.log('Rendering LinkContainer with favLinks:', favLinks);


    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table! </p>
            <Table  linkData={favLinks} handleRemove={handleRemove}/>
            <h1>Add New</h1>
            <Form handleSubmit={handleSubmit} />
        </div>
    )

}
export default LinkContainer


