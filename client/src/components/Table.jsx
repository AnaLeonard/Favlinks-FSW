import LinkContainer from "./LinkContainer"
function TableHeader(){
    /* responsible for rendering the head of our table with the appropriate columns */
    return(
        <thead>
        <tr>
          <th>Name</th>

          <th>URL</th>

          <th>Remove</th>

        </tr>
      </thead>
    )
}

const TableBody = (props) => {
  console.log('Rendering Table with linkData:', props.linkData);

    // boilerplate table body functional component
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>
            <a href={row.URL}>{row.URL}</a>
            <br></br>
          </td>
          <td>
            <button onClick={() => props.handleRemove(index)}>Delete</button>
          </td>
        </tr>
      )

    })

   return <tbody>{rows}</tbody>
  }


function Table (props){
    return(
        <table>
        <TableHeader/>
        <TableBody linkData={props.linkData }  handleRemove={props.handleRemove}/>
        
        </table>
    )
}

export default Table

