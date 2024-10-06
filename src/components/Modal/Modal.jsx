import React from 'react'
import ModalBs from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import FormBs from 'react-bootstrap/Form';  

function Modal(props) {

    const initialCredentials = {
        name: props.item.name || '',
        description: props.item.description || '',
        image: props.item.image || '',
        stock: props.item.stock || '',
        price: props.item.price || ''
      }
    
      const formSchema = Yup.object().shape({
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
    <div>
       <ModalBs
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBs.Header closeButton className='bg-dark'>
        <ModalBs.Title id="contained-modal-title-vcenter" >
          Modal heading
        </ModalBs.Title>
      </ModalBs.Header>
      <ModalBs.Body className='bg-dark'>

      <Formik
        initialValues={ initialCredentials }
        validationSchema={formSchema}
        onSubmit={ async (values, {setSubmitting}) => {
         await props.onSubmit(props.item.id, values)
          console.log(values)
          setSubmitting(false)
          props.onHide()
        }}
      >

        {
          ({ values, isSubmitting, errors, touched, handleChange }) => (
            <Form>
              <FormBs.Group className='mb-3'>
                <label htmlFor='name'> Nombre del Producto </label>
                <Field id='name' type='text' placeholder='Buzo' name='name' className='form-control field-input' onChange={handleChange} />
                {
                  errors.name && touched.name && (
                    <ErrorMessage name='name' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='description'> Descripcion del Producto </label>
                <Field id='description' type='text' placeholder='Descripcion' name='description' className='form-control field-input' onChange={handleChange} />
                {
                  errors.description && touched.description && (
                    <ErrorMessage name='description' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group>
                <label htmlFor='image'> Imagen </label>
                <Field id='image' type='text' placeholder='imagen' name='image' className='form-control field-input' onChange={handleChange} />
                {
                  errors.image && touched.image && (
                    <ErrorMessage name='image' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='stock'> stock </label>
                <Field id='stock' type='number' placeholder='5' name='stock' className='form-control field-input' onChange={handleChange} />
                {
                  errors.stock && touched.stock && (
                    <ErrorMessage name='stock' component='div' />
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor='price'> price </label>
                <Field id='price' type='number' placeholder='150000' name='price' className='form-control field-input' onChange={handleChange} />
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
        
      </ModalBs.Body>
      <ModalBs.Footer className='bg-dark' >
        <Button onClick={props.onHide}>Close</Button>
      </ModalBs.Footer>
    </ModalBs> 
    </div>
  )
}

export default Modal