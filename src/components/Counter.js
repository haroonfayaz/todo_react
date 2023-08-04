import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import useCustomCounter from './Custom';


const Counter = () => {
    const data=useCustomCounter();
  return (
    <>
      <div className="main_div">
      <div className="inner_div">
        <p>Custom hooks : {data.serial}</p>

          <div className="input_with_icon">
            <FontAwesomeIcon icon={faPlus} className="icon" title='Add Items' onClick={data.countHandler}/>
        </div>
        {/* <div className="showItems">
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
        </div> */}
        </div>
      </div>
      
    </>
  )
}

export default Counter;