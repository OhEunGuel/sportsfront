<<<<<<< HEAD
import { useState } from "react";
import {login} from "../api/AuthAPI";

export default function SignIn() {
    const [values, setValues] = useState({
        name: "",
        password: "",
    });

    const handleChange = async (e) => {
        setValues({...values,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        login(values)
            .then((response) => {
                localStorage.clear();
                localStorage.setItem('tokenType', response.tokenType);
                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('refreshToken', response.refreshToken);
                window.location.href = `/`;
            }).catch((error) => {
            console.log(error);
        });
        e.preventDefault();
    }

    return (
        <div className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="align-self-center">
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ minWidth: "25vw" }}>
                        <label htmlFor="username">아이디</label>
                        <input type="text" className="form-control" id="name" onChange={handleChange} value={values.name} />
                    </div>
                    <div className="form-group" style={{ minWidth: "25vw" }}>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" className="form-control" id="password" onChange={handleChange} value={values.password} />
                    </div>
                    <div className="form-group" style={{ minWidth: "25vw" }}>
                        <button type="button" onClick={handleSubmit} style={{ width: "100%"}}>로그인</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
=======
import React, { useState } from "react";
import { login } from "../api/AuthAPI";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #e6e6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  background-color: #34495e;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 260px;
  max-width: 100%;
`;

const Form = styled.form`
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #ecf0f1;
  }

  input[type="text"],
  input[type="password"] {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    background-color: #ecf0f1;
    color: #2c3e50;
  }

  button {
    display: block;
    width: 90%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    font-size: 18px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export default function SignIn() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    login(values)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("tokenType", response.tokenType);
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        window.location.href = `/`;
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <div className="form-group">
            <button type="submit">로그인</button>
          </div>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
}
>>>>>>> 5ce4d9c0281e4d993d75d064a008a1b699e976cc
