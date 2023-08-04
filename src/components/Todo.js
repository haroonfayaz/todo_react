import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

const getLocalItems=()=>{
  let list =localStorage.getItem("lists")
  if(list){
    return JSON.parse(localStorage.getItem("lists"));

  }else{
    return [];
  }
}

const Todo = () => {
  const [inputData,setInputData]=useState("");
  const [items,setItems]=useState(getLocalItems());
  const [toggleSubmitBtn,setToggleSubmitBtn]=useState(true);
  const [EditItem,setEditItem]=useState(null);

  const addItem=()=>{
    if (!inputData){
      alert("please fill item")
    }else if(inputData && !toggleSubmitBtn){
      setItems(
        items.map((elem)=>{
          if (elem.id === EditItem){
            return{...elem,name:inputData}
          }
          return elem;

        }))
        setToggleSubmitBtn(true);
        setInputData(" ");
        setEditItem(null);
    }
    else{
      const allInputData={id:new Date().getTime().toString(),name:inputData}
    setItems([...items,allInputData]);
    setInputData("")}
    }

    const deleteItem =(index)=>{
      const updatedItems=items.filter((elem)=>{
        return index !==elem.id;

      });
      setItems(updatedItems);
    }


    const editItem =(id)=>{
      let newEditItem =items.find((elem)=>{
        return elem.id===id;

      })
      setToggleSubmitBtn(false);
      setInputData(newEditItem.name);
      setEditItem(id);
    }


    const removeAll =()=>{
      setItems([]);

    }

    useEffect(()=>{
      localStorage.setItem('lists',JSON.stringify(items))
    },[items]
      
    );
  return (
    <>
    <div className="main_div">
      <div className="inner_div">
        <p>List of Todo's</p>
          <div className="input_with_icon">
          <input type="text" placeholder="Add items here" 
            value={inputData}
            onChange={(e)=>setInputData(e.target.value)}
          />
          {
            toggleSubmitBtn ? <FontAwesomeIcon icon={faPlus} className="icon" title='Add Items' onClick={addItem}/> : <FontAwesomeIcon icon={faEdit} className="edit_icon" title='Update Item' onClick={addItem} />

          }
        </div>
        <div className="showItems">
        {
          items.map((elem)=>{
            return(
            <div className="eachItem" key={elem.id}>
            <h2>{elem.name}</h2>
            <FontAwesomeIcon icon={faEdit} className="edit_icon" title='Edit Item' onClick={() => editItem(elem.id)} />
            <FontAwesomeIcon icon={faTrash} className="del_icon" title='Delete Item' onClick={()=>deleteItem(elem.id)}/>
          </div>)
          }
          )
        }
         
          <div className="showItems">
            <button className='btn' onClick={removeAll}> <span>Check List </span></button>
          </div>
        </div>
        </div>
      </div>
      
    </>
  )
};

export default Todo;
