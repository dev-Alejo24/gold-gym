import React from 'react'
import { useState } from 'react';
import Modal from '../Modal/Modal';

function ItemTable({item, editItem, deleteItem}) {
const {name, price, stock, id} = item;
const [modalShow, setModalShow] = useState(false);

//confirmar deleteItem
const handleDelete = () => {
  if(window.confirm('¿Estas seguro que deseas elimianar este prouducto?')){
    deleteItem(id);
  }
}

  return (
    <>
    <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>{stock}</td>
    <td style={{display: 'flex', justifyContent:'space-evenly'}}> 
        <i style={{cursor:'pointer'}} className="bi bi-pencil-square" onClick={() => setModalShow(true)}></i> 
        <i style={{cursor:'pointer'}} className="bi bi-trash3-fill" onClick={handleDelete}></i> 
    </td>
    </tr>

    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      item={item}
      onSubmit={editItem}
    />

   </>
  );
}

export default ItemTable