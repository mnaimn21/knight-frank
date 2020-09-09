import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, Spinner } from 'react-bootstrap';

// import ReactPixel from 'react-facebook-pixel';
import InputMask from "react-input-mask";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Melissa from './resources/images/melissa.jpg';
import Sebastian from './resources/images/sebastian.jpg';
import Sam from './resources/images/sam.jpg';
import Dominic from './resources/images/dominic.jpg';
import Paul from './resources/images/paul.jpg';

import BerkeleyLogo from './resources/images/berkeley.png';
import SavillsLogo from './resources/images/savills.png';

function App() {

  // const options = {
  //   autoConfig: true,
  //   debug: false,
  // };

  // ReactPixel.init('315006466443539', options);
  // ReactPixel.pageView();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [loading, setLoading] = useState(false);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const validate = () => {
    if (phoneNo !== '' && name !== '' && email !== '') {
      if (phoneNo.length === 15 || phoneNo.length === 16) {
        return true;
      }
      else {
        alert('Please enter a valid phone number!');
        return false;
      }
    }
    else {
      alert('Please make sure that all fields are filled!');
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      setLoading(true);
      var formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone no.", phoneNo);
      const response = await fetch('https://formkeep.com/f/73558bbd777a', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (response.status === 200) {
          alert('Your submission is successful! A confirmation email has been sent to you.');
          resetForm();
        }
        else {
          alert('Your submission is unsuccessful! Please try again.');
          setLoading(false);
        }
      });
      console.log(response);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhoneNo('');
    setLoading(false);
  };

  return (
    <Container fluid={true} className="bg">
      <Row style={{ paddingBottom: '2.5vh' }}>
        <Col lg={1} />
        <Col lg={3} style={{ display: "flex", alignItems: "flex-end" }}>
          <Image src={SavillsLogo} fluid width="20%" style={{ marginRight: '2vh' }} />
          <Image src={BerkeleyLogo} fluid width="35%" />
        </Col>
        <Col lg={8} />
      </Row>

      <Row className="banner">
        <Col lg={2} />
        <Col lg={8}>
          <p className="bannerTitle">SAVILLS WEBINAR SPECIAL</p>
          <div className="bannerSpacer" />
          <p className="bannerSubtitle">London Market Overview from the Past 10 Years</p>
          <div className="bannerSpacer" />
          <p className="bannerCaption">17th September 2020, Thursday, 4:30 PM (GMT +8)</p>
        </Col>
        <Col lg={2} />
      </Row>

      <Row className="webinarWriteupRow">
        <Col lg={2} />
        <Col lg={8}>
          <p className="webinarWriteupText">There has never been a better time to invest in property in the UK than now! Join our webinar to learn exclusive insights on the London property market throughout the past decade and everything else you need to know on purchasing or investing in London properties. Register below to secure your FREE spot.</p>
        </Col>
        <Col lg={2} />
      </Row>

      <Row className="speakersSection">
        <Col lg={1} />
        <Col lg={2} className="speakersCardMelissa" style={{ padding: 0 }}>
          <Image src={Melissa} fluid />
          <div className="speakersSpacer" />
          <p className="roleText">Moderator</p>
          <p className="nameText">Melissa Koshy</p>
          <p className="designationText">Vice President, Project Marketing & Residential Agency Savills Malaysia</p>
        </Col>
        <Col lg={2} className="speakersCardSebastian" style={{ padding: 0 }}>
          <Image src={Sebastian} fluid />
          <div className="speakersSpacer" />
          <p className="roleText">Speaker</p>
          <p className="nameText">Sebastian Golding</p>
          <p className="designationText">Savills Research Analyst</p>
        </Col>
        <Col lg={2} className="speakersCardSam" style={{ padding: 0 }}>
          <Image src={Sam} fluid />
          <div className="speakersSpacer" />
          <p className="roleText">Speaker</p>
          <p className="nameText">Sam Lee</p>
          <p className="designationText">Capricorn Financial Consultant</p>
        </Col>
        <Col lg={2} className="speakersCardDominic" style={{ padding: 0 }}>
          <Image src={Dominic} fluid />
          <div className="speakersSpacer" />
          <p className="roleText">Speaker</p>
          <p className="nameText">Dominic Wang</p>
          <p className="designationText">Berkeley International Sales Manager</p>
        </Col>
        <Col lg={2} className="speakersCardPaul" style={{ padding: 0 }}>
          <Image src={Paul} fluid />
          <div className="speakersSpacer" />
          <p className="roleText">Speaker</p>
          <p className="nameText">Datuk Paul Khong</p>
          <p className="designationText">Managing Director, Savills Malaysia</p>
        </Col>
        <Col lg={1} />
      </Row>

      <Row>
        <Col lg={1} />
        <Col lg={10} className="formSection">
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col lg={1} />
            <Col lg={4}>
              <p className="interestedText">Interested? Sign up for our webinar today.</p>
              <hr />
              <p className="interestedText">Date: 17 September 2020<br />Time: 4:30 PM (GMT +8)</p>
              <hr />
              <p className="interestedText"><b>Agenda</b>:<br />1. London Market Overview<br />2. Discover riverside living at its finest with launch of Compass Wharf at Berkeley's Royal Arsenal Riverside<br />3. UK Property Financing</p>
            </Col>
            <Col lg={1} />
            <Col lg={5} className="formInput">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control required name="Name" type="text" value={name} onChange={onNameChange} style={{ borderRadius: "0", backgroundColor: "#F2F2F2", borderColor: "#F2F2F2", fontFamily: "Arial", fontSize: "1.8vh" }} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control required name="Email" type="email" value={email} onChange={onEmailChange} style={{ borderRadius: "0", backgroundColor: "#F2F2F2", borderColor: "#F2F2F2", fontFamily: "Arial", fontSize: "1.8vh" }} />
                </Form.Group>
                <Form.Group controlId="formPhoneNo">
                  <Form.Label>Phone No.*</Form.Label>
                  <InputMask mask="+60 99 999 99999" maskPlaceholder={null} maskChar={null} value={phoneNo} onChange={onPhoneNoChange}>
                    <Form.Control required name="Phone No." type="tel" style={{ borderRadius: "0", backgroundColor: "#F2F2F2", borderColor: "#F2F2F2", fontFamily: "Arial", fontSize: "1.8vh" }} />
                  </InputMask>
                </Form.Group>
                <Button type="submit" disabled={loading ? true : false} style={{ marginTop: "1vh", borderRadius: "1", backgroundColor: "#001844", borderColor: "#001844", fontFamily: "Arial", fontSize: "1.7vh", paddingLeft: "4vh", paddingRight: "4vh", paddingTop: "1vh", paddingBottom: "1vh" }}>
                  {
                    loading ? <Spinner animation="border" variant="light" size="sm" /> : 'Submit'
                  }
                </Button>
              </Form>
            </Col>
            <Col lg={1} />
          </Row>

          <Row className="spacerFooter">
            <Col lg={1} />
            <Col lg={10}>
              <hr />
            </Col>
            <Col lg={1} />
          </Row>

          <Row>
            <Col lg={3} />
            <Col lg={2} style={{ textAlign: "center" }}>
              <a href="https://www.berkeleygroup.co.uk/privacy-policy" className="footerText">Privacy Policy</a>
            </Col>
            <Col lg={2} style={{ textAlign: "center" }}>
              <a href="https://www.berkeleygroup.co.uk/about-us" className="footerText">About Berkeley Group</a>
            </Col>
            <Col lg={2} style={{ textAlign: "center" }}>
              <a href="https://www.savills.com.my/why-savills/" className="footerText">About Savills</a>
            </Col>
            <Col lg={3} />
          </Row>
        </Col>
        <Col lg={1} />
      </Row>
    </Container>
  );
}

export default App;
