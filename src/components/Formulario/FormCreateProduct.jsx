import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import FormBs from 'react-bootstrap/Form';
import './formulario.css';
import { axiosInstance } from '../../services/axios.config';

function FormCreateProduct() {

  const initialValues = {
    code: '',
    name: '',
    description: '',
    supplier: '',
    stock: '',
    priceCost: '',
    priceSale: '',
    unitPack: '',
  }

  const validationSchema = Yup.object().shape({
    code: Yup.string().required(),
    
    name: Yup.string()
      .required()
      .min(4, 'Nombre demasiado corto')
      .max(55, 'Nombre demasiado largo'),

    description: Yup.string()
      .required()
      .min(10, 'Nombre demasiado corto')
      .max(255, 'Nombre demasiado largo'),

    supplier: Yup.string().required(),
    stock: Yup.number().required(),
    priceCost: Yup.number().required(),
    priceSale: Yup.number().required(),
    unitPack: Yup.number().required(),
  })


  return (
    <div className='container'>
      <Formik
        initialValues={{ initialValues }}
        validationSchema={validationSchema}
        onSubmit={(values, {isSubmitting}) => {
          console.log(values)
          axiosInstance.post('/', values)
          .then(r => {
            if(r.status == 201){
            console.log(r)
            isSubmitting(false)
            }else{
              throw new Error(`[${r.status}] error en la solicitud`);
            }
            })
          .catch(err => console.log(err));
          
        }}
      >

        {
          ({ values, isSubmitting, errors, touched }) => (
            <Form>
               <FormBs.Group className='mb-3'>
                <label htmlFor='code'> Codigo del Producto </label>
                <Field id='code' type='text' placeholder='Codigo' name='code' className='form-control field-input'  />
                {
                  errors.code && touched.code && (
                    <ErrorMessage name='code' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='name'> Nombre del Producto </label>
                <Field id='name' type='text' placeholder='Articulo' name='name' className='form-control field-input'  />
                {
                  errors.name && touched.name && (
                    <ErrorMessage name='name' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='description'> Descripcion del Producto </label>
                <Field id='description' type='text' placeholder='Descripcion' name='description' className='form-control field-input' />
                {
                  errors.description && touched.description && (
                    <ErrorMessage name='description' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='supplier'> Proveedor </label>
                <Field id='supplier' type='text' placeholder='Proveedor' name='supplier' className='form-control field-input'  />
                {
                  errors.supplier && touched.supplier && (
                    <ErrorMessage name='supplier' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='stock'> Stock </label>
                <Field id='stock' type='number' placeholder='Stock' name='stock' className='form-control field-input' />
                {
                  errors.stock && touched.stock && (
                    <ErrorMessage name='stock' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='priceCost'> Precio de Costo </label>
                <Field id='priceCost' type='number' placeholder='Precio de Costo' name='priceCost' className='form-control field-input' />
                {
                  errors.priceCost && touched.priceCost && (
                    <ErrorMessage name='priceCost' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='priceSale'> Precio de Venta </label>
                <Field id='priceSale' type='number' placeholder='Precio de Venta' name='priceSale' className='form-control field-input' />
                {
                  errors.priceSale && touched.priceSale && (
                    <ErrorMessage name='priceSale' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='unitPack'> Unidad x Caja </label>
                <Field id='unitPack' type='number' placeholder='Unidad x Caja' name='unitPack' className='form-control field-input' />
                {
                  errors.unitPack && touched.unitPack && (
                    <ErrorMessage name='unitPack' component='div' />
                  )
                }
              </FormBs.Group>

              <Button type='submit' className='btn-btn-info'>Cargar producto</Button>
              {
                isSubmitting ? (<p>Enviando nuevo producto</p>) : null
              }
            </Form>
          )
        }


      </Formik>
    </div>
  )
}

export default FormCreateProduct