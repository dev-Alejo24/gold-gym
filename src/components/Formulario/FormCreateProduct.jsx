import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import FormBs from 'react-bootstrap/Form';
import './formulario.css';
import { axiosInstance } from '../../services/axios.config';

function FormCreateProduct() {

  const initialValues = {
    name: '',
    description: '',
    image: '',
    stock: '',
    price: ''
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required()
      .min(4, 'Nombre demasiado corto')
      .max(45, 'Nombre demasiado largo'),

    description: Yup.string()
      .required()
      .min(10, 'Nombre demasiado corto')
      .max(250, 'Nombre demasiado largo'),

    image: Yup.string(),

    stock: Yup.number().required(),
    price: Yup.number().required()
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

              <FormBs.Group>
                <label htmlFor='image'> Imagen </label>
                <Field id='image' type='text' placeholder='imagen' name='image' className='form-control field-input'/>
                {
                  errors.image && touched.image && (
                    <ErrorMessage name='image' component='div' />
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
                <label htmlFor='price'> Precio </label>
                <Field id='price' type='number' placeholder='Precio' name='price' className='form-control field-input' />
                {
                  errors.price && touched.price && (
                    <ErrorMessage name='price' component='div' />
                  )
                }
              </FormBs.Group>

              <Button type='submit' className='btn-btn-primary'>Cargar producto</Button>
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