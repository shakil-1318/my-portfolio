import React, { useRef } from 'react';
import './Contact.css'
import contact from '../../images/contact.jpg'
import Button from 'react-bootstrap/Button'
import { FloatingLabel, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z0y5yab', 'template_obwejfs', form.current, 'user_uGHUwZwnxwGffMq9SWW7X')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("successfully");
        e.target.reset('');
    };

    return (
        <div className='contact-section' id='contact'>
            <div class='container p-4'>
                <h1 class='text-white text-center p-4'>CONTACT ME</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 pb-5">
                        <img class='img-fluid' src={contact} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <form ref={form} onSubmit={sendEmail}>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="name"
                                    name="from_name"
                                    placeholder="name"
                                />
                                <label htmlFor="floatingInputCustom">name</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    name="to_name"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputCustom">Email address</label>
                            </Form.Floating>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <button className='resume-btn'>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;