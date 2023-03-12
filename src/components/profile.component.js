import React, {Component} from "react";

// import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function PersonalProfile() {
  return (
    <div style={{margin:"50px", borderRadius:"15px"}}>
        <section className="vh-80" style={{ backgroundColor: '#f4f5f7',borderRadius:"15px" }}>
        <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
                <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                    <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">Aditya Sakhare</MDBTypography>
                    <MDBCardText>Web Designer</MDBCardText>
                    <MDBIcon far icon="edit mb-5" />
                    </MDBCol>
                    <MDBCol md="8">
                    <MDBCardBody className="p-4">
                        <MDBTypography tag="h6">Profile</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Name</MDBTypography>
                            <MDBCardText className="text-muted" style={{fontStyle:"italic", fontSize:"18px"}}>Aditya Sakhare</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Phone</MDBTypography>
                            <MDBCardText className="text-muted" style={{fontStyle:"italic", fontSize:"18px"}}>+91 8984982729</MDBCardText>
                        </MDBCol>
                        </MDBRow>

                        <MDBTypography tag="h6">Information</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Skills</MDBTypography>
                            <MDBCardText className="text-muted" style={{fontStyle:"italic", fontSize:"18px"}}>C, C++, Python, MERN, Bootstrap</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Job Application Status</MDBTypography>
                            <MDBCardText className="text-muted" style={{fontStyle:"italic", fontSize:"18px"}}>Not applied for any job yet...</MDBCardText>
                        </MDBCol>
                        </MDBRow>

                        <div className="d-flex justify-content-start">
                        <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                        </div>
                    </MDBCardBody>
                    </MDBCol>
                </MDBRow>
                </MDBCard>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </section>
        </div>
  );
}