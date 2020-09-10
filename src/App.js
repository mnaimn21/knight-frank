import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Image, Spinner, Carousel } from 'react-bootstrap';

// import ReactPixel from 'react-facebook-pixel';
import InputMask from "react-input-mask";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaClock, FaCalendar, FaBuilding } from 'react-icons/fa';

import Eden1 from './resources/images/eden1.jpg';
import Eden2 from './resources/images/eden2.jpg';
import Eden3 from './resources/images/eden3.jpg';
import Eden4 from './resources/images/eden4.jpg';
import Eden5 from './resources/images/eden5.jpg';
import Eden6 from './resources/images/eden6.jpg';

// import EdenMap from './resources/images/eden-map.jpg';

import WhyBuy1 from './resources/images/why-buy1.jpg';
import WhyBuy2 from './resources/images/why-buy2.jpg';

import BerkeleyLogo from './resources/images/berkeley.png';
import SavillsLogo from './resources/images/savills.png';

function App() {

  // const options = {
  //   autoConfig: true,
  //   debug: false,
  // };

  // ReactPixel.init('315006466443539', options);
  // ReactPixel.pageView();

  const detailsSection = useRef(null);
  const formSection = useRef(null);
  const gotoDetailsSection = () =>
    window.scrollTo({
      top: detailsSection.current.offsetTop,
      behavior: "smooth"
    });
  const gotoFormSection = () =>
    window.scrollTo({
      top: formSection.current.offsetTop,
      behavior: "smooth"
    });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [enquiry, setEnquiry] = useState('');
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

  const onTimeSlotChange = (event) => {
    setTimeSlot(event.target.value);
  };

  const onEnquiryChange = (event) => {
    setEnquiry(event.target.value);
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
      formData.append("time slot", timeSlot);
      formData.append("enquiry", enquiry);
      const response = await fetch('https://formkeep.com/f/126d4475a978', {
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
    setTimeSlot('');
    setEnquiry('');
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
          <p className="bannerTitle">SPECIAL ONE-TO-ONE SESSIONS</p>
          <div className="bannerSpacer" />
          <p className="bannerSubtitle">The Best of London, Away from London</p>
          <div className="bannerSpacer" />
          <p className="bannerCaption">20th September 2020, Sunday, 2PM to 6PM</p>
        </Col>
        <Col lg={2} />
      </Row>

      <Row>
        <Col xs={6} sm={6} className="mobileView">
          <Button block style={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', color: '#808080', marginTop: '2vh', fontFamily: 'Arial' }} onClick={gotoDetailsSection}>Details</Button>
          <hr />
        </Col>
        <Col xs={6} sm={6} className="mobileView">
          <Button block style={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', color: '#808080', marginTop: '2vh', fontFamily: 'Arial' }} onClick={gotoFormSection}>Sign Up</Button>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col lg={2} />
        <Col lg={5} ref={detailsSection}>
          <Row className="webinarWriteupRow">
            <Col>
              <p className="webinarWriteupTitle">Staines-Upon-Thames, country living, 35 minutes from London Waterloo.</p>
              <p className="webinarWriteupText">A town set on the River Thames, surrounded by picturesque green space and with a thriving mix of shops, cafés and restaurants. With central London just over half an hour away by train, residents can enjoy the best of both worlds as you revel in the outstanding natural beauty of the surrounding Surrey countryside and towns with their historic and royal significance.</p>
              <Image className="webinarImg" src={Eden1} fluid />
              <p className="webinarWriteupText">Staines-upon-Thames has great road and rail connections. The train station is only a 5 minutes' walk away and with Knightsbridge, Bond Street and the West End less than an hour away by train.<br /><br />Eden Grove offers a stunning collection of suites, one, two and three-bedroom apartments positioned around a stunning landscaped garden with a signature water feature at its heart. Residents will also have exclusive use of a fantastic range of amenities, including a concierge, co-working space, private gym and cinema room all conveniently located on the ground floor of the development.</p>
              <Carousel className="carouselContainer">
                <Carousel.Item>
                  <Image src={Eden2} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={Eden3} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={Eden4} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={Eden5} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={Eden6} fluid />
                </Carousel.Item>
              </Carousel>
              {/* <Image className="webinarImg" src={EdenMap} fluid /> */}
              <div className="horizontalLine">
                <hr />
              </div>
              <p className="webinarWriteupSubtitle">Location of Eden Grove</p>
              <iframe title="rar-location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4974.399761371527!2d-0.505606!3d51.436123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x873b65ddab5950e5!2sBerkeley%3A%20Eden%20Grove!5e0!3m2!1sen!2ssg!4v1599709203653!5m2!1sen!2ssg" width="100%" height="350" frameborder="0" allowfullscreen="" aria-hidden="false"></iframe>
              <div className="horizontalLine">
                <hr />
              </div>
              <p className="webinarWriteupSubtitle">Why buy at Eden Grove?</p>
              <ul className="webinarWriteupText">
                <li>With quick acess to the M25, A4 and M4 motorways, and fast rail connections whisking you to London Waterloo in just 35 minutes.</li>
                <li>5 mins walk to Staines-Upon-Thames train station and Town Centre Shopping</li>
                <li>10 mins drive to London Heathrow</li>
                <li>17 mins drive to Windsor & Eton Riverside</li>
                <li>38 mins drive to Knightsbridge</li>
                <li>Reputable schools in the area</li>
                <ul>
                  <li>6 mins drive to Royal Holloway</li>
                  <li>18 mins drive to Eton College</li>
                  <li>35 mins drive to Imperial College London</li>
                  <li>48 mins to King's College London</li>
                  <li>51 mins to London School of Economics (LSE)</li>
                </ul>
              </ul>
              <Image className="webinarImg" src={WhyBuy1} fluid />
              <Image className="webinarImg" src={WhyBuy2} fluid />
              <div>
                <hr />
              </div>
              <p className="webinarWriteupSubtitle">Amenities</p>
              <ul className="webinarWriteupText">
                <li>Gym</li>
                <li>Concierge</li>
                <li>Co-working space</li>
                <li>Cinema</li>
                <li>Central Garden</li>
              </ul>
              <div className="horizontalLine">
                <hr />
              </div>
              <p className="webinarWriteupSubtitle">Property Information</p>
              <ul className="webinarWriteupText">
                <li>Developer: Berkeley</li>
                <li>Local Authority: Surrey Borough of Spelthorne</li>
                <li>Address: 17-51 London Roan, Staines-upon-Thames TW18 4AE</li>
                <li>Architect: Scott Brownrigg</li>
                <li>Tenure: 999-year lease</li>
                <li>Completion: Est. Q4 2023/Q1 2024</li>
                <li>No. of units in Lavender House: 130 (1-bed: 90 units, 2-beds: 40 units) over 12 floors</li>
                <li>Planning permission: TBA</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col lg={1} />
        <Col lg={3} className="formInput" ref={formSection}>
          <Row className="formContainer">
            <Col>
              <p className="interestedTitle"><b>RSVP by 18th September, seats limited.</b></p>
              <p className="interestedText"><FaCalendar /> Sunday, 20 September 2020</p>
              <p className="interestedText"><FaClock /> 2pm to 6pm</p>
              <p className="interestedText"><FaBuilding /> Healy Mac's Irish Bar & Restaurant<br />Block A4 level G2, Unit 06 - 07,<br />Publika Mall, Solaris Dutamas<br />No. 1, Jalan Solaris Dutamas 1,<br />50480 Kuala Lumpur.</p>
              <div className="horizontalLine">
                <hr />
              </div>
              <Form className="formSection" onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label className="formLabel">Name*</Form.Label>
                  <Form.Control required name="Name" type="text" value={name} onChange={onNameChange} style={{ borderRadius: "0", backgroundColor: "#F2F2F2", borderColor: "#F2F2F2", fontFamily: "Arial", fontSize: "1.8vh" }} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label className="formLabel">Email*</Form.Label>
                  <Form.Control required name="Email" type="email" value={email} onChange={onEmailChange} style={{ borderRadius: "0", backgroundColor: "#F2F2F2", borderColor: "#F2F2F2", fontFamily: "Arial", fontSize: "1.8vh" }} />
                </Form.Group>
                <Form.Group controlId="formPhoneNo">
                  <Form.Label className="formLabel">Telephone*</Form.Label>
                  <InputMask mask="+60 99 999 99999" maskPlaceholder={null} maskChar={null} value={phoneNo} onChange={onPhoneNoChange}>
                    <Form.Control required name="Telephone" type="tel" style={{ borderRadius: "0", backgroundColor: "#F2F2F2", borderColor: "#F2F2F2", fontFamily: "Arial", fontSize: "1.8vh" }} />
                  </InputMask>
                </Form.Group>
                <Form.Group controlId="formTimeSlot">
                  <Form.Label className="formLabel">Time Slots*</Form.Label>
                  <Form.Control name="Time Slot" required value={timeSlot} as="select" onChange={onTimeSlotChange} style={{ borderRadius: "0", backgroundColor: "#F2F2F2", borderColor: "#F2F2F2", fontFamily: "Arial", fontSize: "1.8vh" }} >
                    <option value="" disabled="disabled">- Choose time slot -</option>
                    <option>2pm</option>
                    <option>3pm</option>
                    <option>4pm</option>
                    <option>5pm</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formEnquiry">
                  <Form.Label className="formLabel">Enquiry</Form.Label>
                  <Form.Control name="Enquiry" as="textarea" rows="3" value={enquiry} onChange={onEnquiryChange} style={{ borderRadius: "0", backgroundColor: "#F2F2F2", borderColor: "#F2F2F2", fontFamily: "Arial", fontSize: "1.8vh" }} />
                </Form.Group>
                <Button type="submit" disabled={loading ? true : false} block style={{ marginTop: "1vh", borderRadius: "1", backgroundColor: "#FEE850", borderColor: "#FEE850", color: "#000000", fontFamily: "Arial", fontSize: "1.7vh", paddingLeft: "4vh", paddingRight: "4vh", paddingTop: "1vh", paddingBottom: "1vh" }}>
                  {
                    loading ? <Spinner animation="border" variant="light" size="sm" /> : 'Submit'
                  }
                </Button>
              </Form>
              <p className="privacyNoticeText">PRIVACY NOTICE: We may use your personal information in our provision of services to you. Please see our <a style={{ color: "#808080" }} href="https://www.savills.com.my/footer/privacy-policy.aspx"><b>privacy notice</b></a> for details of how your personal information will be used.</p>
            </Col>
          </Row>
        </Col>
        <Col lg={1} />
      </Row>

      <Row className="footerRow">
        <Col lg={3} />
        <Col lg={2} style={{ textAlign: "center" }}>
          <a href="https://www.savills.com.my/footer/privacy-policy.aspx" className="footerText">Privacy Policy</a>
        </Col>
        <Col lg={2} style={{ textAlign: "center" }}>
          <a href="https://www.berkeleygroup.co.uk/about-us" className="footerText">About Berkeley Group</a>
        </Col>
        <Col lg={2} style={{ textAlign: "center" }}>
          <a href="https://www.savills.com.my/why-savills/" className="footerText">About Savills</a>
        </Col>
        <Col lg={3} />
      </Row>
    </Container>
  );
}

export default App;
