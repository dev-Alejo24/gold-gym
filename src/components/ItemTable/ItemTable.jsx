import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import Modal from '../Modal/Modal';

function ItemTable({ item, editItem, deleteItem }) {
    const { code, name, priceCost, stock, priceSale, unitPack, id } = item;
    const [modalShow, setModalShow] = useState(false);

    // Confirmar deleteItem
    const handleDelete = () => {
        if (window.confirm('¿Estás seguro que deseas eliminar este producto?')) {
            deleteItem(id);
        }
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
                <td style={{ display: 'flex', justifyContent: 'space-evenly' }}> 
                    <i style={{ cursor: 'pointer' }} className="bi bi-pencil-square" onClick={() => setModalShow(true)}></i> 
                    <i style={{ cursor: 'pointer' }} className="bi bi-trash3-fill" onClick={handleDelete}></i> 
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

// Definición de PropTypes
ItemTable.propTypes = {
    item: PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        priceCost: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        priceSale: PropTypes.number.isRequired,
        unitPack: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    editItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
};

export default ItemTable;