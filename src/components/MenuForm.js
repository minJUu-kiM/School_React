import {useState} from "react";

const MenuForm = ({menus, setMenus}) => {
  //상태변수 선언
  const [name, setName] = useState('');  //useState는 react에서 제공하는 뭐시기 | name 상태변수 생성하고 초기값 설정
  const [price, setPrice] = useState(0)
  const [warning, setWarning] = useState('');
  const [menu, setMenu] = useState(    //객체(object)를 값으로 가지는 상태변수 정의
    {
      id : '',
      name: '',
      price: 0
    }
  );
  
  const handleInput = (e) => {  //e : eventobject
    setMenu((menu) => ({  //매개변수 menu는 현재 상태의 menu  | 15,16의 menu의 이름이 같아야 한다. 다른 이름으로 하면 둘 다 같아야 함
      ...menu,            //...(spread operator) : 복사본 생성
      [e.target.name] : e.target.value   //[e.target.name] : 입력박스의 name 속성값  | 27,31,35번의 이름과 맞춰야 함
    }));
    setWarning('');
  }
  const handleInputName = (e) => setName(e.target.value);
  const handleInputPrice = (e) => setPrice(e.target.value);
  
  
  
  const handleSubmit = (e) => {  //입력양식의 버튼을 클릭했을 때
    e.preventDefault(); //이벤트의 기본 기능을 해제하는 것
    //새로 생성된 menu를 menus에 추가하기
    if(menu.name.trim()) { //trim: 앞 뒤에 공백이 있으면 제거 | name 필드에 값이 있는 경우
      setMenus(menus.concat(menu));
      setMenu({
        id : '',
        name: '',
        price: 0
      });
    }
    else {
      setWarning('Name field was empty!')
    }
  }

  
  return(
    <>
    <h2> Adding a new menu</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Menu ID: <input type = 'text' onChange={handleInput} name = 'id' value={menu.id}/> 
      </label>
      <br/>
      <label>
        Menu Name: <input type = 'text' onChange={handleInput} name = 'name'value={menu.name}/>
      </label>
      <span style={{color:'red'}}>&nbsp;&nbsp;{warning}</span>
      <br/>
      <label>
        Menu Price: <input type = 'range' min='1000' max='8000' step='100' onChange={handleInput} name = 'price' value={menu.price}/>
      </label>
      <br/>
      <button>Add Menu</button>
    </form>
    <h3>New Menu : {menu.id} {menu.name} {menu.price}</h3>
    </>

  );
}

export default MenuForm;