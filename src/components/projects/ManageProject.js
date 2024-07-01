// Core Imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { selectUserEmail } from "../../_redux/reducers/userSlice";

// Component Imports
import { getProjectAsync, updateProjectAsync } from "../../_redux/actions/ProjectActions";
import StaticHeader from "../parts/StaticHeader";
import { createNotification } from "../../_redux/actions/NotificationActions";

// Bootstrap Components
import { Row, Col, Form, Button } from "react-bootstrap";

const ManageProject = () => {
  const navigate = useNavigate(null);
  const userEmail = useSelector(selectUserEmail);
  const { id } = useParams();
  const project = useSelector(state => state.project.project);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    header: "",
    description: ["", "", ""],
    excerpt: "",
    meta: "",
    category_owner: ""
  });

  useEffect(() => {
    if (project) {
      setFormData({
        id: project.id,
        header: project.header,
        description: project.description,
        excerpt: project.excerpt,
        meta: project.meta,
        category_owner: project.category_owner
      });
    }
  }, [project]);

  useEffect(() => {
    dispatch(getProjectAsync(id));
  }, [dispatch, id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id.startsWith("description_")) {
      const index = parseInt(id.split("_")[1]);
      setFormData(prevState => {
        const newDescriptions = [...prevState.description];
        newDescriptions[index] = value;
        return { ...prevState, description: newDescriptions };
      });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProjectAsync(formData));
    dispatch(createNotification(
      'success',
      'New Project Created',
      formData.header + " was updated.",
      userEmail
  )).then(() => {
      navigate('/dashboard');
    });
  };

  return (
    <>
      {project ? (
        <>
          <Row>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
              <StaticHeader headerText={"Manage Project"} />
            </Col>
          </Row>
          <Row className="row manage-project-container">
            <Col className={'col'} sm="12" md="12" lg="8" xl="8" xxl="8">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="id">
                  <Form.Label>#</Form.Label>
                  <Form.Control
                    type="number"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder="ID"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="header">
                  <Form.Label>Header</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.header}
                    onChange={handleChange}
                    placeholder="Header"
                    required
                  />
                </Form.Group>
                <div>
                  {formData.description.map((desc, index) => (
                    <Form.Group controlId={`description_${index}`} key={index}>
                      <Form.Label>Description {index + 1}</Form.Label>
                      <Form.Control
                        as="textarea" rows={3}
                        value={desc}
                        placeholder={`Description ${index + 1}`}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  ))}
                </div>
                <Form.Group controlId="excerpt">
                  <Form.Label>Excerpt</Form.Label>
                  <Form.Control
                    as="textarea" rows={3}
                    value={formData.excerpt}
                    onChange={handleChange}
                    placeholder="Excerpt"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="meta">
                  <Form.Label>Meta</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.meta}
                    onChange={handleChange}
                    placeholder="Meta"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="category_owner">
                  <Form.Label>Category (Owner)</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.category_owner}
                    onChange={handleChange}
                    placeholder="Category (Agency, Freelance)"
                    required
                  />
                </Form.Group>
                <div className="submit-container">
                  <Link to="/dashboard" className="btn">Cancel</Link>
                  <Button type="submit" className="btn">Update Project</Button>
                </div>
              </Form>
            </Col>
            <Col className={'col'} sm="12" md="12" lg="4" xl="4" xxl="4">
            </Col>
          </Row>
        </>
      ) : ''}
    </>
  );
};

export default ManageProject;
