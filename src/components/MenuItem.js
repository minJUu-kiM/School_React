const MenuItem = (props) => { 
  const {id, name, price} = props.menu;
  return(
    <>
    <tr>
      <td>{id}</td><td>{name}</td><td>{price}</td>
      <td><button>Delete</button></td>
    </tr>
    </>
  )
}

export default MenuItem;