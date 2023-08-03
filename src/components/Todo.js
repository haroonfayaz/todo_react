import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
  const [inputData,setInputData]=useState("");
  const [items,setItems]=useState([]);
  const addItem=()=>{
    if (!inputData){}
    else{
    setItems([...items,inputData]);
    setInputData("")}
    }

    const deleteItem =(id)=>{
      const updatedItems=items.filter((elem,ind)=>{
        return ind !=id;

      });
      setItems(updatedItems);
    }
    const removeAll =()=>{
      setItems([]);

    }
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
          <FontAwesomeIcon icon={faPlus} className="icon" title='Add Items' onClick={addItem}/>
        </div>
        <div className="showItems">
        {
          items.map((elem ,ind)=>{
            return(
            <div className="eachItem" key={ind}>
            <h2>{elem}</h2>
            <FontAwesomeIcon icon={faTrash} className="del_icon" title='Delete Items' onClick={()=>deleteItem(ind)}/>
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
