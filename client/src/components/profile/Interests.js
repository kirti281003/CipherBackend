import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateUser, updateUserInterests } from '../../actions/userActions';
import logo from "../../images/logo.png";
import "./Modal.css";
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
var array=["Web Developement","App Developement","Machine Learning","Data Science","Data Structures","Game Developement","Programming","Other"];


function Interests({interests})
{if(interests)
    {
        var ans=[...interests];
    }
    
    const [style,setStyle]=useState({
        "backgroundColor":"#e8eef8"
    })
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#000';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
function select(item)
{
    if(ans && ans.includes(item))
    {
        var index=ans.indexOf(item);
    ans.splice(index,1);
    window.alert(item +" Removed");
   
    console.log(ans);
  
    
    }
    else{
        ans.push(item);
      
        window.alert(item +" Selected");
     
        console.log(ans);
       
    }

}
const dispatch=useDispatch();
function update()
{
    var interests=ans;
dispatch(updateUserInterests(interests))
}
    return(
        <>
  <div className="interests">
            <h1>Interests</h1>
            <button onClick={openModal} className="btn">Edit</button>
        {/* Modal */}
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
          <h2 className="modalhead" ref={(_subtitle) => (subtitle = _subtitle)} >Interests Update</h2>
        <div className="interestupdate">
      <div className='interestselect'>
  
       {
        interests &&
        array.map(item=>{
            if(ans.includes(item))
            { 
                return(
                    <><button className="selected"  onClick={()=>select(item)} >{item}</button></>
                )
            }
            else{
              
                return(
                    <>
                    <button className="notselected"  onClick={()=>select(item)} >{item}</button>
                    </>
                )
            }
        })
       }
       

      </div>
      <button type="submit" className="orangebtn" onClick={update}>Save</button>
          <button onClick={closeModal} className="whitebtn">Close</button>
          </div>
      </Modal>
            <div className="interestsection">
                {
                    interests &&
                    interests.map(interest=>(
                        <div className="interest">
                        {interest}
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default Interests;