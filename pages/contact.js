import React, { useState, useRef } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import styled from "styled-components";

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xvovynqe",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Layout>
      <ContactContainer>
        <h1>Get In Touch!</h1>
        <FormContainer>
          <form onSubmit={handleOnSubmit}>
            <>
              <input
                type="hidden"
                name="_subject"
                value="New lead on mysite.com"
              />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </>
            <>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
            </>
            <>
              <button type="submit" disabled={status.submitting}>
                {!status.submitting
                  ? !status.submitted
                    ? "Submit"
                    : "Submitted"
                  : "Submitting..."}
              </button>
            </>
          </form>
        </FormContainer>
        <MessageDisplayContainer>
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </MessageDisplayContainer>
      </ContactContainer>
    </Layout>
  );
}

const ContactContainer = styled.div`
  height: 100vh;
  padding-top: 4rem;
  font-family: "Inter";

  h1 {
    color: #f7ebe6;
    text-align: center;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;

    width: 300px;
    justify-items: center;

    @media only screen and (min-width: 500px) {
      width: 400px;
    }
  }

  label {
    color: #f7ebe6;
    font-size: 1.4rem;
    font-weight: Medium;
    margin-bottom: 0.3rem;
  }

  input {
    border: none; /* <-- This thing here */
    border: solid 1px #ccc;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  textarea {
    border: none; /* <-- This thing here */
    border: solid 1px #ccc;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 1rem;
    max-width: 300px;

    @media only screen and (min-width: 500px) {
      max-width: 400px;
    }
  }
  button {
    padding: 4px;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-family: "Inter";
    background: #f7ebe6;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MessageDisplayContainer = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #f7ebe6;
`;
