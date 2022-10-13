
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function CrearCuenta() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={logo_tienda} alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

     
              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>crear Nueva cuenta</MDBBtn>
              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Cancelar</MDBBtn>
           
             

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default CrearCuenta;