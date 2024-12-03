import FormItBs from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'; // Importa PropTypes

function SearchProduct({ searchTerm, setSearchTerm, searchItem }) {
    const handleSearch = () => {
        // Llama a la función de búsqueda con el término
        searchItem(searchTerm);
    };

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
    );
}

// Definición de PropTypes
SearchProduct.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    searchItem: PropTypes.func.isRequired,
};

export default SearchProduct;