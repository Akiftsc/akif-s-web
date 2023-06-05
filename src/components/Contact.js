import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


/* Schema */

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required.")
        .min(3, "Name must be 3 characters at least."),
    email: Yup.string()
        .email("Type a valid e-mail.")
        .required("Email is required."),
    message: Yup.string()
        .required("Type your message.")
        .min(10, "Your message must be 10 characters at least."),
});

const initialValues = {
    name: "",
    email: "",
    message: "",
};




function Contact({ t }) {

    const [btnCtx, setBtnCtx] = useState(0);

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_8ajg4l4', 'template_rlkv1sq', form.current, 'oQT0rtKXghENul39r')
            .then((result) => {
                setBtnCtx(1)
            }, (error) => {
                alert(t("sent_err"))
            });


    };



    return (
        <section id='section' className='mx-8 my-24 gap-4 flex flex-col justify-center items-center'>
            <div className='SkillBox flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-center title font-bold text-4xl'>
                    {t("contact")}
                </h1>
            </div>
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({ errors, touched }) => (
                        <Form ref={form} onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="name" className='label'>{t("contact_name")}</label>
                                <Field type="text" className="field" name="name" id="name" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>


                            <div className='my-4'>
                                <label htmlFor="email" className='label'>E-mail</label>
                                <Field type="email" className="field" name="email" id="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div>
                                <label htmlFor="message" className='label'>{t("contact_msg")}</label>
                                <Field
                                    className="field"
                                    as="textarea"
                                    name="message"
                                    id="message"
                                    rows="5"
                                    cols="30"
                                    style={{ height: 190 }}
                                />
                                <ErrorMessage name="message" component="div" className="error" />
                            </div>
                            <button type="submit" className='sendBtn'>
                                {btnCtx ? t("sent") : t("send")}
                            </button>


                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Contact