import React from "react";
import { Link } from "react-router-dom";
import { useState,ChangeEvent, FormEvent } from "react";
import { Dropdown } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactForm = () => {
  const [emailErr, setEmailErr] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [number, setNumber] = useState("");
  const [numberErr, setNumberErr] = useState("");
  const [value, setValue] = useState<string | undefined>();

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (email === "") {
      setEmailErr("Email is required");
    }
    if (name === "") {
      setNameErr("Name is required");
    }
    if (number === "") {
      setNumberErr("Number is required");
    }
  };

  const handleEmailChange = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value === "") setEmailErr("Email is required");
    else {
      setEmailErr("");
    }
  };
  const handleNameChange = (event:ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value === "") setNameErr("name is required");
    else {
      setNameErr("");
    }
  };
  const handleNumberChange = (event:ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);

    if (event.target.value === "") setNumberErr("Number is required");
    else {
      setNumberErr("");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-light bg-dark"
          style={({ padding: "20px" })}
        >
          <div className="container-fluid">
            <Link to="/">
              <a className="navbar-brand" style={{ color: "white" }}>
                Home
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/AboutPage">
                    <a className="navbar-brand" style={{ color: "white" }}>
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/LoginPage">
                    <a className="navbar-brand" style={{ color: "white" }}>
                      Login
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/SignupPage">
                    <a className="navbar-brand" style={{ color: "white" }}>
                      Signup
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ContactForm">
                    <a className="navbar-brand" style={{ color: "white" }}>
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Show More
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/Settingpage">Setting</Dropdown.Item>
              <Dropdown.Item href="/ProfilesettingPage">
                Profilesetting
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>

        <h1 className="mt-5 mx-auto" style={{ color: "white" }}>
          Contact Form
        </h1>
        <form
          className="mt-5 mx-auto shadow-lg p-3 mb-5  rounded"
          style={{ maxWidth: "550px" }}
        >
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name here"
              className="form-control"
              onChange={handleNameChange}
              required
            />
            {nameErr && <span style={{ color: "red" }}>{nameErr}</span>}
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your company name here"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>
              company Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your company email here"
              aria-describedby="emailHelp"
              onChange={handleEmailChange}
            />
            {emailErr && <span style={{ color: "red" }}>{emailErr}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>
              Phone Number
            </label>
            <PhoneInput
              placeholder="Enter phone number"
              className="form-control"
              value={value}
              onChange={setValue}
            />

            {/* <input
              type="Number"
              placeholder="Enter your preferrd phone number here"
              className="form-control"
              onChange={handleNumberChange}
              required
            /> */}
            {numberErr && <span style={{ color: "red" }}>{numberErr}</span>}
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>
              More Information
            </label>
            <input
              type="text"
              placeholder="Add Your query and context in this box"
              className="form-control"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

