import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaGithub, FaTwitter, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export const Footer = () => {
  return (

    <MDBFooter className='text-center text-lg-start text-muted ' style={{marginTop: '100px', backgroundColor: 'rgb(255, 255, 255, 0.7)'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' >
        <div className='me-5 d-none d-lg-block' >
          <span>Get connected with us on social networks:</span>
        </div>

        <div className='' style={{ width: '30%', display: 'flex', justifyContent: 'space-around'}}>
          <a href='' className=' text-reset'>
            <FaGithub  />
          </a>
          <a href='' className='text-reset'>
            <FaLinkedinIn />
          </a>
          <a href='' className='text-reset'>
            <FaFacebook />
          </a>
          <a href='' className='text-reset'>
            <FaTwitter />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-0 mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <FaHome color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <FaPhone color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgb(255, 255, 255, 0.7)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/RodBC/Projeto-Engenharia-Software'>
          HelpCife
        </a>
      </div>
    </MDBFooter>
  );
}