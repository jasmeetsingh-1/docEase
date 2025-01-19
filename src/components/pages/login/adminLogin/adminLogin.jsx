import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import "./adminLogin.css";

import Select from "react-select/base";

import { EyeSvg, GreyTick, QuestionMarkWithCircle } from "../../../../assets/svgContainer";


const medRegisterInitialValues={
    adminEmail:"sample@gmail.com",
    adminPhoneNo:"1234567890",
    adminPassword:"samplePassword"
}

const phoneCodes = [
    {value:"+91", label:"+91", countryName:"India"},
    {value:"+91", label:"+91", countryName:"India"},
    {value:"+91", label:"+91", countryName:"India"},
]

const passwordRequirments = [
    { label: "One lowercase character", value: false },
    { label: "One number", value: false },
    { label: "One uppercase character", value: true },
    { label: "One special character", value: false },
    { label: "8 characters minimum", value: false }
  ];
  

function AdminSignup() {
    const [phoneCodeSelected, setPhoneCodeSelected] = useState(phoneCodes[0]);

  return (
    <div className="loginPage-formsHolder">
      <section className="header-section-loginForms">
        <h2>Sign up with free trail</h2>
        <p>Empower your experience, sign up for a free account today </p>
      </section>
      <section className="form-section-loginForms">
        <Formik
            initialValues={medRegisterInitialValues}
        >
            {({values, errors,touched})=>(
                <Form className="formHolder-loginForms">
                    <div className="row-loginForms">
                        <label htmlFor="adminEmail">Email*</label>
                        <Field className="inputFields-loginForms" type="text" name="adminEmail" id="adminEmail" placeholder="ex. email@domain.com" value={values.adminEmail}/>
                    </div>
                    <div className="row-loginForms">
                        <label htmlFor="adminPhoneNo">Phone number
                            <span className="metaTag-phoneNumber-loginForms">Why<QuestionMarkWithCircle/></span>
                        </label>
                        <div className="phonenumber-field">
                            <Select value={phoneCodeSelected} options={phoneCodes} onChange={(selectedOption) => setPhoneCodeSelected(selectedOption)}/>
                            <Field className="inputFields-loginForms" type="text" name="adminPhoneNo" id="adminPhoneNo" value={values.adminPhoneNo}/>
                        </div>
                    </div>
                    <div className="row-loginForms">
                        <label htmlFor="adminPassword">Password*</label>
                        <Field className="inputFields-loginForms" type="password" name="adminPassword" id="adminPassword" value={values.adminPassword}/>
                        <section className="metaSection-passwords">
                            <div className="viewPassword"> <EyeSvg/> </div>
                            <div className="password-requirements">
                                {passwordRequirments.map((item)=>{
                                    return (
                                        <div>
                                            {item.value ? <GreyTick/>:<div className="notSelected"></div>}
                                            <span>{item.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    </div>
                    <div className="row-loginForms">
                        <button>Get started</button>
                    </div>
                </Form>
            )}
        </Formik>
      </section>
    </div>
  );
}

export default AdminSignup;