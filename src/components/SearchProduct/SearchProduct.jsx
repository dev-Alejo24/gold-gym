import React from 'react'
import FormItBs from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchProduct({searchTerm, setSearchTerm, searchItem}) {

  const handleSearch = () => {
    //llama funcion de busqueda con el termino
    searchItem(searchTerm);
  }

  return (
    <div>
        
        <FormItBs className="d-flex mb-3">
        <FormItBs.Control
          type="search"
          placeholder="Buscar Producto"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="secondary" onClick={handleSearch}>Buscar</Button>
      </FormItBs>

    </div>
  )
}

export default SearchProduct