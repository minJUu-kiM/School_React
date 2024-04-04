import { useState } from "react";
import MenuItem from "./MenuItem";
import MenuForm from "./MenuForm";


const MenuList = () => {
  // 상태변수 선언
  const [menus, setMenus] = useState(
    [
      {id: 1, name: 'Ameicano', price: 4500},
      {id: 2, name: 'Espresso', price: 4100},
      {id: 3, name: 'Caffe Latte', price: 4800},
      {id: 4, name: 'Caffe Mocca', price: 4900},
      {id: 5, name: 'Caramel Latte', price: 5100},
      {id: 6, name: 'White Mocca', price: 5000},
      {id: 7, name: 'Vanilla Latte', price: 5500},
    ]
  );

  
//   //지역변수 - 메뉴 객체들의 배열로 정의
//   const menus = [
//     {id: 1, name: 'Ameicano', price: 4500},
//     {id: 2, name: 'Espresso', price: 4100},
//     {id: 3, name: 'Caffe Latte', price: 4800},
//     {id: 4, name: 'Caffe Mocca', price: 4900},
//     {id: 5, name: 'Caramel Latte', price: 5100},
//     {id: 6, name: 'White Mocca', price: 5000},
//     {id: 7, name: 'Vanilla Latte', price: 5500},
// ];
  const rows = menus.map((menu)=>
  <MenuItem key = {menu.id} menu = {menu}/>);

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>NO</th><th>Menu Name</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      <hr/>
      <MenuForm menus={menus} setMenus={setMenus} />
    
    </>
  );
}

export default MenuList;


// <tr>
//<td>{menus[0].id}</td><td>{menus[0].name}</td><td>{menus[0].price}</td>
//</tr>
//<MenuItem id={menus[1].id} name={menus[1].name} price={menus[1].price}/>
//<MenuItem id={menus[2].id} name={menus[2].name} price={menus[2].price}/>
//<MenuItem2  menu={menus[3]}/>