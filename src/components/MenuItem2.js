const MenuItem2 = (props) => { 
  const {id, name, price} = props.menu;
  return(
    <>
    <tr>
      <td>{id}</td><td>{name}</td><td>{price}</td>
    </tr>
    </>
  )
}

export default MenuItem2;