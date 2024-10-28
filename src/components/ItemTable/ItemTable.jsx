import React from 'react'
import { useState } from 'react';
import Modal from '../Modal/Modal';

function ItemTable({item, editItem, deleteItem}) {
const {code, name, priceCost, stock, priceSale, unitPack, id} = item;
const [modalShow, setModalShow] = useState(false);


//confirmar deleteItem
const handleDelete = () => {
  if(window.confirm('¿Estas seguro que deseas elimianar este prouducto?')){
    deleteItem(id);
  }
}

const handleEdit = () => {
  editItem(id, item);
};


  return (
    <>    
    <tr>
    <td>{id}</td>
    <td>{code}</td>
    <td>{name}</td>
    <td>{priceCost}</td>
    <td>{stock}</td>
    <td>{priceSale}</td>
    <td>{unitPack}</td>
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