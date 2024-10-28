import React from 'react';
import TableBs from 'react-bootstrap/Table';
import ItemTable from '../ItemTable/ItemTable';
//import './table.css';

function Table({ items, editItem, deleteItem }) {
    console.log(items);
    
    return (

        <TableBs striped bordered hover variant='secondary'>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Codigo</th>
                    <th>Producto</th>
                    <th>Precio Costo</th>
                    <th>Stock</th>
                    <th>Precio Venta</th>
                    <th>Unidad x Caja</th>
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