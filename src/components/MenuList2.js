import { useState } from "react";
import MenuItem2 from "./MenuItem2";
import MenuForm from "./MenuForm";


const MenuList2 = () => {
  // 상태변수 선언
  const [menus2, setMenus2] = useState(
    [
    ]
  );
  
    const addMenu = (newMenu) => {
      setMenus2([...menus2, newMenu])
    };

  const rows2 = menus2.map((menu2)=>
  <MenuItem2 key = {menu2.id} menu2 = {menu2}/>);

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>NO</th><th>Menu Name</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows2}
        </tbody>
      </table>
      <hr/>

      <MenuForm addMenu={addMenu}/>
    </>
  );
}

export default MenuList2;


// <tr>
//<td>{menus[0].id}</td><td>{menus[0].name}</td><td>{menus[0].price}</td>
//</tr>
//<MenuItem id={menus[1].id} name={menus[1].name} price={menus[1].price}/>
//<MenuItem id={menus[2].id} name={menus[2].name} price={menus[2].price}/>
//<MenuItem2  menu={menus[3]}/>