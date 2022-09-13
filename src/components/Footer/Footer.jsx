import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <footer className="fixed-bottom navbar navbar-expand bg-dark text-center text-lg-start text-white">
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='https://www.facebook.com/Limitlessstylus/'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>
      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='https://twitter.com/LimitlessStylus'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>
      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='https://www.instagram.com/limitlessstylus/'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>
      <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='https://www.youtube.com/channel/UC6FObNxyEwHCO8ELf4t7TPQ'>
        <MDBIcon fab icon='youtube' />
      </MDBBtn>
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Useful links</h6>
        
      <Link to='/AboutUs'  className="col-md-3 text-white">About Us</Link>
      &nbsp; | &nbsp;
      <Link to='/FAQ'   className="col-md-3 text-white">FAQ</Link>
      &nbsp; | &nbsp;
      <Link to='/PrivacyPolicyPage'   className="col-md-3 text-white">Privacy Policy</Link>
      &nbsp; | &nbsp;
      <Link to='/ReturnPolicyPage'   className="col-md-3 text-white">Return Policy</Link>
      &nbsp; | &nbsp;
      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold">Contact</h6>
            
            <p><i className="fas fa-home mr-3"></i>388 Lyndale Ave Staten Island, NY 10312</p>
            <p><i className="fas fa-envelope mr-3"></i> (347) 310-4405</p>
            <p><i className="fas fa-phone mr-3"></i>contact@LimitlessStylus.com</p>
          </div>
    </footer>
  );
}

export default Footer;