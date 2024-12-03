import ModalBs from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import FormBs from 'react-bootstrap/Form';  
import PropTypes from 'prop-types'; // Importa PropTypes
import './modal.css';

function Modal(props) {
    const initialCredentials = {
        code: props.item.code || '',
        name: props.item.name || '',
        description: props.item.description || '',
        supplier: props.item.supplier || '',
        stock: props.item.stock || '',
        priceCost: props.item.priceCost || '',
        priceSale: props.item.priceSale || '',
        unitPack: props.item.unitPack || ''
    };
    
    const formSchema = Yup.object().shape({
        code: Yup.string().required(),
        name: Yup.string()
            .required()
            .min(4, 'Nombre demasiado corto')
            .max(55, 'Nombre demasiado largo'),
        description: Yup.string()
            .required()
            .min(10, 'Descripción demasiado corta')
            .max(255, 'Descripción demasiado larga'),
        supplier: Yup.string().required(),
        stock: Yup.number().required(),
        priceCost: Yup.number().required(), // Cambié priceUnit a priceCost
        priceSale: Yup.number().required(),
        unitPack: Yup.number().required(),
    });

    return (
        <div>
            <ModalBs
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalBs.Header closeButton className='modal-header'>
                    <ModalBs.Title id="contained-modal-title-vcenter">
                        Editor de Producto
                    </ModalBs.Title>
                </ModalBs.Header>
                <ModalBs.Body className='modal-body'>
                    <Formik
                        initialValues={initialCredentials}
                        validationSchema={formSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            await props.onSubmit(props.item.id, values);
                            console.log(values);
                            setSubmitting(false);
                            props.onHide();
                        }}
                    >
                        {({ isSubmitting, errors, touched, handleChange }) => (
                            <Form>
                                {/* Campos del formulario */}
                                <FormBs.Group className='mb-3'>
                                    <label htmlFor='code'> Código de Producto </label>
                                    <Field id='code' type='text' placeholder='Código' name='code' className='form-control field-input' onChange={handleChange} />
                                    {errors.code && touched.code && (
                                        <ErrorMessage name='code' component='div' />
                                    )}
                                </FormBs.Group>

                                <FormBs.Group className='mb-3'>
                                    <label htmlFor='name'> Nombre del Producto </label>
                                    <Field id='name' type='text' placeholder='Nombre' name='name' className='form-control field-input' onChange={handleChange} />
                                    {errors.name && touched.name && (
                                        <ErrorMessage name='name' component='div' />
                                    )}
                                </FormBs.Group>

                                <FormBs.Group className='mb-3'>
                                    <label htmlFor='description'> Descripción del Producto </label>
                                    <Field id='description' type='text' placeholder='Descripción' name='description' className='form-control field-input' onChange={handleChange} />
                                    {errors.description && touched.description && (
                                        <ErrorMessage name='description' component='div' />
                                    )}
                                </FormBs.Group>

                                <FormBs.Group className='mb-3'>
                                    <label htmlFor='supplier'> Proveedor </label>
                                    <Field id='supplier' type='text' placeholder='Proveedor' name='supplier' className='form-control field-input' onChange={handleChange} />
                                    {errors.supplier && touched.supplier && (
                                        <ErrorMessage name='supplier' component='div' />
                                    )}
                                </FormBs.Group>

                                <FormBs.Group className='mb-3'>
                                    <label htmlFor='stock'> Stock </label>
                                    <Field id='stock' type='number' placeholder='5' name='stock' className='form-control field-input' onChange={handleChange} />
                                    {errors.stock && touched.stock && (
                                        <ErrorMessage name='stock' component='div' />
                                    )}
                                </FormBs.Group>

                                <FormBs.Group className='mb-3'>
                                    <label htmlFor='priceCost'> Precio Costo </label>
                                    <Field id='priceCost' type='number' placeholder='Precio de Costo' name='priceCost' className='form-control field-input' onChange={handleChange} />
                                    {errors.priceCost && touched.priceCost && (
                                        <ErrorMessage name='priceCost' component='div' />
                                    )}
                                </FormBs.Group>

                                <FormBs.Group className='mb-3'>
                                    <label htmlFor='priceSale'> Precio de Venta </label>
                                    <Field id='priceSale' type='number' placeholder='Precio de Venta' name='priceSale' className='form-control field-input' onChange={handleChange} />
                                    {errors.priceSale && touched.priceSale && (
                                        <ErrorMessage name='priceSale' component='div' />
                                    )}
                                </FormBs.Group>

                                <FormBs.Group className='mb-3'>
                                    <label htmlFor='unitPack'> Unidad x Caja </label>
                                    <Field id='unitPack' type='number' placeholder='Unidad x Caja' name='unitPack' className='form-control field-input' onChange={handleChange} />
                                    {errors.unitPack && touched.unitPack && (
                                        <ErrorMessage name='unitPack' component='div' />
                                    )}
                                </FormBs.Group>

                                <Button type="submit" className="btn-btn-primary">Cargar producto</Button>
                                {isSubmitting ? (<p>Producto enviado</p>) : null}
                            </Form>
                        )}
                    </Formik>
                </ModalBs.Body>
                <ModalBs.Footer className="modal-footer">
                    <Button onClick={props.onHide}>Cerrar</Button>
                </ModalBs.Footer>
            </ModalBs> 
        </div>
    );
}

// Definición de PropTypes
Modal.propTypes = {
    item: PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        supplier: PropTypes.string,
        stock: PropTypes.number.isRequired,
        priceCost: PropTypes.number.isRequired,
        priceSale: PropTypes.number.isRequired,
        unitPack: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
};

export default Modal;