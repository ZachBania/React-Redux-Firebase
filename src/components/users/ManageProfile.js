// Core Imports
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Component Imports
import StaticHeader from "../parts/StaticHeader";
import { getUserAsync, updateUserAsync } from "../../_redux/actions/UserActions";
import { createNotification } from "../../_redux/actions/NotificationActions";

// Bootstrap Components
import { Row, Col, Form, Button } from "react-bootstrap";

const ManageProfile = () => {
  const navigate = useNavigate(null);
  const { id } = useParams();
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    email: "",
    user_name: "",
    display_name: "",
    summary: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        id: user.id,
        email: user.email,
        user_name: user.user_name,
        display_name: user.display_name,
        summary: user.summary,
      });
    }
  }, [user]);

  useEffect(() => {
    dispatch(getUserAsync(id));
  }, [dispatch, id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAsync(formData));
    //   dispatch(createNotification(
    //     'success',
    //     'New Project Created',
    //     formData.header + " was updated.",
    //     userEmail
    // )).then(() => {
    //     navigate('/dashboard');
    //   });
  };

  return (
    <>
      {user ? (
        <>
          <Row>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
              <StaticHeader headerText={"Manage Profile"} />
            </Col>
          </Row>
          <Row className="row manage-profile-container">
            <Col className={'col'} sm="12" md="12" lg="8" xl="8" xxl="8">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="id">
                  <Form.Label>#</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder="ID"
                    required
                    readOnly
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    readOnly
                  />
                </Form.Group>
                <Form.Group controlId="user_name">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="User Name"
                    required
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="display_name">
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.display_name}
                    onChange={handleChange}
                    placeholder="Display Name"
                  />
                </Form.Group>

                <Form.Group controlId="summary">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control
                    as="textarea" rows={3}
                    value={formData.summary}
                    onChange={handleChange}
                    placeholder="Summary"
                  />
                </Form.Group>

                <div className="submit-container">
                  <Link to="/dashboard" className="btn">Cancel</Link>
                  <Button type="submit" className="btn">Update Profile</Button>
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

export default ManageProfile;
