import React from "react";
import { useState, useEffect } from "react";

import Jumbo from "../components/Jumbo";
import Content from "../components/Content";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { render } from 'sass';

// class ContactPage extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             message: '',
//             disabled: false,
//             emailSent: null
//         }
//     }

// handleChange = (e) => {
//     console.log(e);

//     const target = e.target;
//     const value = target.type;
//     const name = target.name;

//     this.setState({
//         [name]: value
//     });
// }

// handleSubmit = (e) => {
//     console.log(e);

//     e.preventDefault();
//     this.setState({
//         // makes sure people can't keep sending a bunch of emails when one doesnt look like it was sent
//         disabled: true
//     });
// }

// render() {
function ContactPage(props) {
  const initialValues = {
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setIsDisabled(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!values.name) {
      errors.name = "Please enter your name.";
    }
    if (!values.email) {
      errors.email = "Please enter your email address.";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email address.";
    }
    if (!values.message) {
      errors.message = "This field is required.";
    }
    return errors;
  };

  const handleOutsideClick = (e) => {
    console.log(e.target.name);
    const errors = {}
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (e.target.name === "name") {
      if (!formValues.name) {
        errors.name = "Please enter your name.";
      }
    } else if (e.target.name === "email") {
      if (!formValues.email) {
        errors.email = "Please enter your email.";
      }
      else if (!regex.test(formValues.email)) {
        errors.email = "This is not a valid email address.";
      }
    } else if (e.target.name === "message") {
      if (!formValues.message) {
        errors.message = "Please enter your message.";
      }
    }
    setFormErrors(errors);
  };

  return (
    <div>
      <Jumbo title={props.title} />
      {/* onSubmit={this.handleSubmit} */}
      {/* <pre>{ JSON.stringify(formValues, undefined, 2) }</pre> */}
      <Content onSubmit={handleSubmit}>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="full-name">Name</Form.Label>
            {/* value={this.state.name} */}
            {/* onChange={this.handleChange} */}
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={formValues.name}
              autoFocus
              Required
              onChange={handleChange}
              onBlur={handleOutsideClick}
            />
          </Form.Group>
          <p>{formErrors.name}</p>
          <Form.Group>
            <Form.Label htmlFor="email">Email address</Form.Label>
            {/* value={this.state.email} */}
            {/* onChange={this.handleChange} */}

            <Form.Control
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              required
              onChange={handleChange}
              onBlur={handleOutsideClick}
            />
          </Form.Group>
          <p>{formErrors.email}</p>
          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            {/* value={this.state.message} */}
            {/* onChange={this.handleChange} */}
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="3"
              value={formValues.message}
              onChange={handleChange}
              onBlur={handleOutsideClick}
            />
          </Form.Group>
          <p>{formErrors.message}</p>

          <Button
            className="d-inline-block"
            variant="primary"
            type="submit"
            disabled={formValues.disabled}
          >
            send
          </Button>

          {/* Conditionally renders message saying whether the email was sent */}
          {/* {this.state.emailSent === true && <p className="d-inline success-msg">email sent.</p>}
                        {this.state.emailSent !== true && <p className="d-inline err-msg">email not sent.</p>} */}
        </Form>
      </Content>
    </div>
  );
}
// }

export default ContactPage;
