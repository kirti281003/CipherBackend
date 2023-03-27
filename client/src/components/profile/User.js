import "./Profile.css";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import logo from "../../images/logo.png";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, updateUserPassword } from "../../actions/userActions";
import edit from "../../images/edit.png";
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
  
function User({name,email})
{const dispatch=useDispatch();
    const{user}=useSelector(state=>state.user);
  
    const[Name,setName]=useState(user.name);
    const[Email,setEmail]=useState(user.email);
    const[Current,setCurrent]=useState("");
    const[New,setNew]=useState("");
    const[Confirm,setConfirm]=useState("");

    
    
    function update()
    {
        dispatch(updateUser(Name,Email));

    }
    function updatePassword()
    {
        dispatch(updateUserPassword(Current,New,Confirm))
    }
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
    return(
        <>
        <div className="userhead">
        <button onClick={openModal} className="editbtn"><img src={edit} style={{"height":20}}/></button>
        {/* Modal */}
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <h2 className="modalhead" ref={(_subtitle) => (subtitle = _subtitle)} >Profile Update</h2>
       <img src={logo} className="modallogo"></img>
        <form className="modalform">
        <div className="modalfield">
        <label className="modallabel">Name</label>
        <br></br>
          <input type="text" className="modalinput" onChange={(e)=>setName(e.target.value)}/>
        </div>
       <div className="modalfield">   
       <label className="modallabel">Email</label>
       <br></br>
          <input type="text" className="modalinput" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
       
          <button type="submit" className="orangebtn" onClick={update}>Save</button>
          <button onClick={closeModal} className="whitebtn">Close</button>
          
        </form>
      </Modal>
      {/* Modal End */}
      <button onClick={openModal} className="btn">Change Password</button>
        {/* Modal */}
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
       <h2 className="modalhead" ref={(_subtitle) => (subtitle = _subtitle)} >Profile Update</h2>
       <img src={logo} className="modallogo"></img>
        <form className="modalform">
        <div className="modalfield">
        <label className="modallabel">Current Password</label>
        <br></br>
          <input type="text" className="modalinput" onChange={(e)=>setCurrent(e.target.value)}/>
        </div>
       <div className="modalfield">   
       <label className="modallabel">New Password</label>
       <br></br>
          <input type="text" className="modalinput" onChange={(e)=>setNew(e.target.value)}/>
          </div>
          <div className="modalfield">   
       <label className="modallabel">Confirm Password</label>
       <br></br>
          <input type="text" className="modalinput" onChange={(e)=>setConfirm(e.target.value)}/>
          </div>
       
          <button type="submit" className="orangebtn" onClick={updatePassword}>Save</button>
          <button onClick={closeModal} className="whitebtn">Close</button>
          
        </form>
      </Modal>
        <img src={logo} className="logo" ></img>
        <div>
            <span>Hello</span>
            <h2>{name}</h2>
            <span>{email}</span>
            
            </div>
        </div>
        </>
    )
}
export default User;