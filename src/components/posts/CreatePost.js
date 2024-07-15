// Core Imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Component Imports
import { createPostAsync } from "../../_redux/actions/PostActions";
import { getNotificationsByAuthorAsync } from "../../_redux/actions/NotificationActions";
import { selectUserEmail } from "../../_redux/reducers/UserSlice";

// Bootstrap Imports
import { Form, Button } from "react-bootstrap";

const CreatePost = () => {
    const activeUserEmail = useSelector(selectUserEmail);
    const dispatch = useDispatch();

    const initialFormData = {
        id: '',
        header: '',
        body: '',
        rating: 0,
        all_ratings: [],
        timestamp: '',
        author: activeUserEmail,
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPostAsync(formData));
        dispatch(getNotificationsByAuthorAsync(activeUserEmail));
        setFormData(initialFormData);
    }

    return (
        <div className="create-post-container">
            <Form onSubmit={handleSubmit}>

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

                <Form.Group controlId="body">
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        as="textarea" rows={3}
                        value={formData.body}
                        onChange={handleChange}
                        placeholder="Body"
                        required
                    />
                </Form.Group>

                <div className="submit-container">
                    <Button type="submit" className="btn">Post</Button>
                </div>
            </Form>
        </div>
    );
}

export default CreatePost;
