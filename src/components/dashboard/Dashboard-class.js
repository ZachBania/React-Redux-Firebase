import React from "react";
import { connect } from "react-redux";
import { getProjectsAsync } from '../../_redux/actions/ProjectActions'

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import CreateProject from "../projects/CreateProject";
import ProjectList from "../projects/ProjectsList";
import Notifications from "../parts/Notifications";

// Bootstrap Imports
import { Row, Col, Accordion } from "react-bootstrap";

class Dashboard extends React.Component {
    
    componentDidMount() { 
        this.props.getProjects(); 
    }
    

    render() {  
        const { projects } = this.props;

        return (
            <>
                <Row>
                    <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                        <StaticHeader headerText={"Dashboard"} />
                    </Col>
                </Row>
    
                <Row className='row dashboard-container'>
                    <Col className={'col'} sm="12" md="12" lg="8" xl="8" xxl="8">
                        <h3>Create Project</h3>
                        <CreateProject />
    
                        <h3>Project List</h3>
                        <ProjectList projects={projects} />
    
                    </Col>
                    <Col className={'col'} sm="12" md="12" lg="4" xl="4" xxl="4">
                        <h3>Notifications</h3>
                        <Notifications />
                    </Col>
                </Row>
    
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { projects: state.project.projects }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => dispatch(getProjectsAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
