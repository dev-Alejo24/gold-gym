import { Button, Form, InputGroup, Row, Col, Table } from 'react-bootstrap';

function FormSale() {
  return (
    <div>
         <div className="container mt-4">

    <Row className="mb-4">
      <Col md={6}>
        <h5>Datos de la Factura</h5>
        <Form.Group as={Row} controlId="formInvoiceNumber">
          <Form.Label column sm={4}>N° Factura</Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Remito-00000001" readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formClient">
          <Form.Label column sm={4}>Cliente</Form.Label>
          <Col sm={6}>
            <Form.Control type="text" placeholder="Consumidor Final" />
          </Col>
          <Col sm={2}>
            <Button variant="primary">Buscar</Button>
          </Col>
        </Form.Group>
      </Col>

      <Col md={6}>
        <h5>Detalle de la Factura</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Cant.</th>
              <th>Descripción</th>
              <th>Precio Venta</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes mapear productos agregados */}
          </tbody>
        </Table>
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <h5>Agregar/Eliminar Artículos</h5>
        <Form.Group as={Row} controlId="formCode">
          <Form.Label column sm={4}>Código</Form.Label>
          <Col sm={6}>
            <Form.Control type="text" />
          </Col>
          <Col sm={2}>
            <Button variant="primary">Buscar</Button>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formArticle">
          <Form.Label column sm={4}>Artículo</Form.Label>
          <Col sm={8}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formQuantity">
          <Form.Label column sm={4}>Cantidad</Form.Label>
          <Col sm={4}>
            <Form.Control type="number" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPrice">
          <Form.Label column sm={4}>Precio</Form.Label>
          <Col sm={4}>
            <Form.Control type="number" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBox">
          <Col sm={12}>
            <Form.Check label="Venta por Caja" />
          </Col>
        </Form.Group>

        <Button variant="success" className="mt-2">Agregar</Button>
      </Col>

      <Col md={6} className="text-end">
        <h5>Total</h5>
        <InputGroup className="mb-3">
          <Form.Control type="text" placeholder="0.00" readOnly />
        </InputGroup>
      </Col>
    </Row>

    <Row className="mt-4">
      <Col md={6}>
        <Button variant="info">Nueva Venta</Button>
      </Col>
      <Col md={6} className="text-end">
        <Button variant="danger">Salir</Button>
      </Col>
    </Row>
  </div>

    </div>
  )
}

export default FormSale