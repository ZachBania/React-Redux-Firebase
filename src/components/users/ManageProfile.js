// Core Imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import { updateUserAsync } from "../../_redux/actions/UserActions";
import { selectActiveUser } from "../../_redux/reducers/UserSlice";
import { createNotification } from "../../_redux/actions/NotificationActions";

// Bootstrap Components
import { Row, Col, Form, Button } from "react-bootstrap";

const ManageProfile = () => {
  const navigate = useNavigate(null);
  const { id } = useParams();
  const activeUser = useSelector(selectActiveUser);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    email: "",
    user_name: "",
    display_name: "",
    summary: "",
  });

  useEffect(() => {
    if (activeUser) {
      setFormData({
        id: activeUser.id,
        email: activeUser.email,
        user_name: activeUser.user_name,
        display_name: activeUser.display_name,
        summary: activeUser.summary,
      });
    }
  }, [activeUser]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAsync(formData));
    dispatch(createNotification(
      'success',
      'Profile Updated',
      "Your profile has been updated.",
      activeUser.email
    )).then(() => {
      navigate('/dashboard');
    });
  };

  return (
    <>
      {activeUser ? (
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
