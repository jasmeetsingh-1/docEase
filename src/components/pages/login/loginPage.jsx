import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./loginPage.css";
import { GreenLogo } from "../../../assets/svgContainer";

import AdminSignup from "./adminLogin/adminLogin";

function LoginPage() {
  const navigate = useNavigate();
  return (
   <div className="loginPage-holder">
    <section className="loginPage-left">
      <div className="loginPage-left-upper">
        <div className="whiteLoginHolder">
          <GreenLogo/>
          <section className="logoText">DocEase</section>
        </div>
      </div>
    </section>
    <section className="loginPage-right">
      <AdminSignup/>
    </section>
   </div>
  );
}

export default LoginPage;
