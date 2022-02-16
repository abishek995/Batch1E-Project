import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";


const CustProfile = (props) => {
  const customer = JSON.parse(sessionStorage.getItem("customer"));
  //console.log(customer)
  return (
    <div className="mainprofile">
    <div className="custprofile">
      <Container className="text-dark">
        {" "}
        <Card className={"border border-dark bg-white text-dark"}>
          <Card.Header><h4>Customer Information</h4></Card.Header>
          <Card.Body>
            <h4>Information</h4>
            <div>First Name : {customer.firstName}</div>
            
            <div>Email : {customer.email}</div>
            <div>Mobile Number : {customer.mobileNo}</div>

            <div>Account Number : {customer.savingsAccount.accountNumber}</div>
            <div>
              Account Balance : {customer.savingsAccount.accountBalance}
            </div>
            <div>CIF Number : {customer.savingsAccount.cifNo}</div>
            <div>Branch Name : {customer.savingsAccount.branchName}</div>
            <div>IFSC Code : {customer.savingsAccount.ifscCode}</div>
          </Card.Body>
        </Card>
      </Container>
     
    </div>
    
    
   
    </div>
  );
};

export default CustProfile;
