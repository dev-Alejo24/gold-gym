import React from 'react'
import TableBs from 'react-bootstrap/Table';
import ItemTable from '../ItemTable/ItemTable';

function Table({ items, editItem, deleteItem }) {
    console.log(items);
    
    return (

        <TableBs striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th style={{textAlign:'center'}}>Modificar</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <ItemTable item={item} key={index} editItem={editItem} deleteItem={deleteItem}/>
                ))}

            </tbody>
        </TableBs>
    )
}

export default Table