import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import {reducer } from './reducer'

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent:'Hello world!'
}
const Index = () => {
  const [name,setName] = useState('')
  const [state,dispatch] = useReducer(reducer,defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: state.people.length, name: name };
      dispatch({ type: 'ADD_NAME', payload: newPerson })
      setName('');
      
    }
    else {
      dispatch({type:'NO_VALUE'})
    }
    
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button type="submit" >Add Name</button>
      </form>
      {state.people.map((p) => {
        return (
          <div key={p.id} className="item">
          <h2 >{p.name} </h2>
          <button onClick={() => dispatch({type:"REMOVE_NAME", payload:p.id})}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
