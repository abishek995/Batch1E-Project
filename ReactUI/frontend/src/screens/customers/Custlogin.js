import React, { useEffect, useState } from "react";
import { CustSignin } from "../../actions/customerActions/customerAction.js";
import { Card } from "react-bootstrap";
import './Customer.css';
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

const CustLogin = (props) => {
  const [email, setEmail] = useState("");

  
  const [password, setPassword] = useState("");
  // const[data,setData]=("");

  const CustSignIn = useSelector((store) => store.CustSignIn);
  const { loading, error, response } = CustSignIn;

  const dispatch = useDispatch();

  const onSignin = () => {
    dispatch(CustSignin(email, password));
  };

  useEffect(() => {
    if (response && response.email === email) {
      sessionStorage.setItem("customer", JSON.stringify(response));
      props.history.push("/custhome");
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert("Error: Please enter correct Credentials");
    }
  }, [loading, error, response]);
 
  return (
<div className="mainclass">
    
    <Card className="customer">
      <Card.Header>Customer Login</Card.Header>
      <Card.Body>
        <div>
          <div className="form">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                placeholder="Enter Registered Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                maxLength="8"
                placeholder="******"
                type="password"
              ></input>
            </div>
            <div className="mb-3">
              <button onClick={onSignin} className="btn btn-success">
                Login
              </button>
            </div>
          </div>
          {loading && <div>waiting for response</div>}
        </div>
      </Card.Body>
    </Card>
   
    </div>
  );
};

export default CustLogin;
