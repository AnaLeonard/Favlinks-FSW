import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

function LinkContainer(){

    const linkData = [];
    // useState is used to keep track of data

    const [favLinks, setFavLinks] = useState(linkData);

    const handleRemove = (index) => {
        console.log('Removing link at index:', index);
        const updatedLinks = favLinks.filter((_, i) => i !== index);
        setFavLinks(updatedLinks);
       
      }
    
      const handleSubmit = (favLink) => {
        console.log('Handling submit with data:', favLink);
        setFavLinks([...favLinks, favLink]);

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


