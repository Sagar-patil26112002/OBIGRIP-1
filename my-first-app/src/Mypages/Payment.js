import React from 'react'
import {useSelector} from 'react-redux'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";
import './payment.css'

export const Payment = () => {
  const data = useSelector( (state)=>{
    return state
  })
  
    return (
        <MDBContainer fluid className="py-5" style={{ backgroundColor: "#f9c9aa" }}>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="9" lg="7" xl="5">
              <MDBCard>
                <MDBCardImage
                  src={data.myReducer.name.image}
                  position="top"
                  className='paymentimagecss'
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle className="d-flex justify-content-between mb-0">
                    <p className="text-muted mb-0">{data.myReducer.name.title}</p>
                    <p className="mb-0">{data.myReducer.name.price}</p>
                  </MDBCardTitle>
                  <MDBCardTitle className="d-flex justify-content-between mb-0">
                    <p className="text-muted mb-0">Tax</p>
                    <p className="mb-0">18Rs</p>
                  </MDBCardTitle>
                  <MDBCardTitle className="d-flex justify-content-between mb-0">
                    <p className="text-muted mb-0">TOTAL</p>
                    <p className="mb-0" id='result'>{parseInt(data.myReducer.name.price) + Number(18)}RS</p>
                  </MDBCardTitle>
                </MDBCardBody>
                <div className="rounded-bottom" style={{ backgroundColor: "#eee" }}>
                  <MDBCardBody>
                    {" "}
                    <p className="mb-4">Your payment details</p>
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      placeholder="1234 5678 1234 5678"
                      wrapperClass="mb-3"
                    />
                    <MDBRow className="mb-3">
                      <MDBCol size="6">
                        <MDBInput
                          label="Expire"
                          id="form2"
                          type="password"
                          placeholder="MM/YYYY"
                          wrapperClass="mb-3"
                        />
                      </MDBCol>
                      <MDBCol size="6">
                        <MDBInput
                          label="CVV"
                          id="form4"
                          type="password"
                          placeholder="CVV"
                          wrapperClass="mb-3"
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBBtn block color="info">
                      Order now
                    </MDBBtn>
                  </MDBCardBody>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
}
