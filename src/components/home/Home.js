import './../../App.css';
import React from 'react';

// Component Imports
import DefaultHeader from '../parts/DefaultHeader';

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const REACT_VERSION = React.version;
function Home() {

  return (
    <>
        <Row>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <DefaultHeader headerText="React Redux"/>
            </Col>
        </Row>  

        <Row>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
              <div className="home-container">

                <Row>
                    <Col className={'col'} sm="12" md="8" lg="8" xl="8" xxl="8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                
                    </Col>
                    <Col className={'col'} sm="12" md="4" lg="4" xl="4" xxl="4">
                    
                    </Col>
                </Row>  
              
              </div>
            </Col>
        </Row>  
    </>
  );
}
export default Home;
