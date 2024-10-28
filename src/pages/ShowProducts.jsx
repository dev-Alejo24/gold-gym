import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../services/axios.config';
import Table from '../components/Table/Table';
import SearchProduct from '../components/SearchProduct/SearchProduct';

function ShowProducts() {

  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axiosInstance.get('/')
    .then(r => {
      if(r.status === 200){
        setItems(r.data);
      }else{
        throw new Error(`[${r.status}] Error en la solicitud`)
      }
    })
    .catch(err => console.log(err))
  }, [])

  // editar productos
  const editItem = (id, data) => {
    axiosInstance.put(`/${id}`, data)
      .then(r => {
        if(r.status === 200){
          // Actualizar el estado con la respuesta del servidor
          axiosInstance.get('/')
            .then(r => {
              if(r.status === 200){
                setItems(r.data);
              }else{
                throw new Error(`[${r.status}] Error en la solicitud`)
              }
            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  };

  // eliminar productos
  const deleteItem = (id) => {
    axiosInstance.delete(`/${id}`)
      .then(r => {
        if (r.status === 200) {
          setItems(items.filter(item => item.id !== id));
        } else {
          throw new Error(`[${r.status}] Error en la solicitud`)
        }
      })
      .catch(err => console.log(err))
  }

  //buscar productos
  const searchItem = (search) => {
    if(search.trim() === ""){
      axiosInstance.get('/')
      .then(r => {
        if(r.status === 200){
          setItems(r.data);
        }else{
          throw new Error(`[${r.status}] Error en la solicitud`)
        }
      })
      .catch(err => console.log(err))
    }else{
      //buscar producto en termino de busqueda
      axiosInstance.get(`?search=${search}`)
      .then(r => {
        if(r.status === 200){
          setItems(r.data);
        }else{
          throw new Error(`[${r.status}] Error en la solicitud`)
        }
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Productos en sistema</h1>

      <div className='container'>
        {
          //barra de busqueda
          <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchItem={searchItem} />
        }
      </div>


      <div className='container mt-3'>
        {
          //operador ternario
          items.length > 0 ?
          <Table items={items} editItem={editItem} deleteItem={deleteItem}/>:
           <h2 style={{textAlign:'center'}}>No hay productos en el sistema</h2>
        }
      </div>
    </div>
  )
}

export default ShowProducts