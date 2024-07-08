// Core Imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isAuthenticated, selectUserEmail, selectUserName } from "../../_redux/reducers/UserSlice";
import { useSelector } from "react-redux";

// Component Imports
import { createProjectAsync } from "../../_redux/actions/ProjectActions";
import { createNotification, getNotificationsByAuthorAsync } from "../../_redux/actions/NotificationActions";

// Bootstrap Imports
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";

const CreateProject = () => {
    const userEmail = useSelector(selectUserEmail);
    const dispatch = useDispatch();

    const initialFormData = {
        id: '',
        header: '',
        description: ['', '', ''],
        excerpt: '',
        meta: '',
        category_owner: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id.startsWith("description_")) {
            const index = parseInt(id.split("_")[1], 10);
            setFormData((prevData) => {
                const description = [...prevData.description];
                description[index] = value;
                return { ...prevData, description };
            });
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [id]: value
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectWithIdAsInt = {
            ...formData,
            id: parseInt(formData.id)
        };
        dispatch(createProjectAsync(projectWithIdAsInt));
        dispatch(createNotification(
            'success',
            'New Project Created',
            formData.header + " was created.",
            userEmail
        ));
        dispatch(getNotificationsByAuthorAsync(userEmail));
        setFormData(initialFormData);
    }

    return (
        <div className="create-project-container">
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
                    <Form.Group controlId="description_0">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea" rows={3}
                            value={formData.description[0]}
                            placeholder="Description one"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description_1">
                        <Form.Control
                            as="textarea" rows={3}
                            value={formData.description[1]}
                            placeholder="Description two"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description_2">
                        <Form.Control
                            as="textarea" rows={3}
                            value={formData.description[2]}
                            placeholder="Description three"
                            onChange={handleChange}
                        />
                    </Form.Group>
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
                    <Button type="submit" className="btn">Create Project</Button>
                </div>
            </Form>
        </div>
    );
}

export default CreateProject;
