// Core Imports
import { Link } from 'react-router-dom';

// Component Imports

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
    
    <footer>

        <Row>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
            </Col>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
            </Col>
        </Row>        
        <Row>
            <Col className={'col'} sm="12" md="12" lg="6" xl="6" xxl="6">
                <p><Link to="/">GitHub</Link></p>
            </Col>
            <Col className={'col'} sm="12" md="12" lg="6" xl="6" xxl="6">
                
            </Col>
        </Row>
    </footer>
    
);
export default Footer;

