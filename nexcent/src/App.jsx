import React from "react";
import "./App.css"; // make sure CSS is imported
import logo from "./assets/logo.png";
import illustration from "./assets/illustration.png";
import Dot from "./assets/Dot.png";
import client from "./assets/client.png";
import icon from "./assets/icon.png";
import image from "./assets/image.png";
import contact from "./assets/contact.png";
import Frame from "./assets/Frame.png"; // ✅ renamed file
import pic from "./assets/pic.png";
import number from "./assets/number.png";
import finger from "./assets/finger.png";
import box from "./assets/box.png";
import mobileImg from "./assets/mobile.png";
import sign from "./assets/sign.png";
import customer from "./assets/customer.png";
import card from "./assets/card.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import image3 from "./assets/image3.png";
import links from "./assets/links.png";
import input from "./assets/input.png";


function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <nav className="nav">
          <img src={logo} alt="logo" className="icon" />
          <div>
            <ul>
              <a href="#"><li>Home</li></a>
              <a href="#"><li>Features</li></a>
              <a href="#"><li>Community</li></a>
              <a href="#"><li>Blog</li></a>
              <a href="#"><li>Pricing</li></a>
            </ul>
            <button>Register Now</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="main">
        <h1 className="heading">
          Lessons and insights <br />
          <span style={{ color: "#4caf4f", position: "relative", left: "-7%" }}>
            from 8 years
          </span>
        </h1>
        <p className="pera">
          Where to grow your business as a photographer: site or social media?
        </p>
        <img src={illustration} alt="illustration" className="illustration" />
        <button className="btn">Register</button>
        <img src={Dot} alt="dot" className="dot" />
      </div>

      {/* Clients */}
      <div>
        <h1 className="client">Our Clients</h1>
        <p className="peraa">We have been working with some Fortune 500+ clients</p>
        <img src={client} alt="logos" className="logos" />
      </div>

      {/* Cards */}
      <div className="container">
        <div className="card">
          <img src={contact} alt="contact" className="image" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>

        <div className="card">
          <img src={icon} alt="icon" className="image1" />
          <h3>National Associations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>

        <div className="card">
          <img src={image} alt="club" className="image2" />
          <h3>Clubs And Groups</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
      </div>

      {/* Frame Section */}
      <div>
        <img src={Frame} alt="frame" className="frame" />
        <h1 className="unseen">
          The unseen of spending three <br />{" "}
          <span className="years"> years at Pixelgrade </span>
        </h1>
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedd sit amet
          justo ipsum. <br /> Sed accumsan quam vitae est varius fringilla.
          Pellentluffun placerat vestibulum sed <br /> sedd porta. Nullam mattis
          tristique iaculis. Nullam pulvinar amet risus pretium free <br /> uctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          element
        </p>
        <button className="btn1">Learn More</button>
      </div>

      {/* Stats Section */}
      <section className="stats-container">
        {/* Left Section */}
        <div className="stats-left">
          <h2 className="heading">
            Helping a local <br />{" "}
            <span className="highlight">business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>

        {/* Right Section */}
        <div className="stats-right">
          <div className="stat-box">
            <img src={number} alt="member" className="number" />
            <span className="stat-number">2,245,341</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat-box">
            <img src={pic} alt="pic" className="pic" />
            <span className="stat-number">46,328</span>
            <span className="stat-label">Clubs</span>
          </div>
          <div className="stat-box">
            <img src={finger} alt="finger" className="finger" />
            <span className="stat-number">828,867</span>
            <span className="stat-label">Event Bookings</span>
          </div>
          <div className="stat-box">
            <img src={box} alt="box" className="box" />
            <span className="stat-number">1,926,436</span>
            <span className="stat-label">Payments</span>
          </div>
        </div>
      </section>
      <section>
        {/* Mobile Image */}
        <div>
          <img src={mobileImg} alt="mobile" className="mobile" />
          <h1 className="design">How to design your site footer like <br />we did</h1>
          <p className="peraunseen">The unseen of spending three years at Pixelgrade
Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pelle <br /> ntesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvin <br /> ar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus se <br /> m. Donec elementum pulvinar odio.
The Nextcent blog is the best place to read about them <br /> latest membership insights, trends and more. See who's joining the community, read about.</p>
<button className="btnread">Learn More</button>
        </div>

        <div className="boxx">
          <img src={sign} alt="box" className="sign" />
          <p className="meac">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus <br /> tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br /> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie <br /> mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse <br /> eget  lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, <br /> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum  <br />id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
          <p className="tim">Tim Smith</p>
          <p className="british">British Dragon Boat Racing Association</p>
          <img src={client} alt="client" className="images" />
           <img src={customer} alt="customer" className="customer" />
        </div>
<div className="blog-header">
        <h2 className="caring">Caring is the new marketing</h2>
        <p className="blog">
          The Nextcent blog is the best place to read about the latest membership
          insights, <br /> trends and more. See who's joining the community, read about
          how our community <br /> are increasing their membership income and lot's more.
        </p>
        <img src={card} alt="card" className="card1" />
        <img src={card1} alt="card" className="card1" />
        <img src={card2} alt="card" className="card1" />
      </div>
      
      <div className="bar">
        <h1 className="eu">Pellentesque suscipit <br /> fringilla libero eu.</h1>
        <button className="demo">Get a Demo</button>
      </div>
      
      <div className="footerr">
        <img src={image3} alt="" className="image3" />
        <p className="copyright">Copyright © 2020 Landify UI Kit.</p>
        <p className="copyright">All rights reserved</p>
        <img src={links} alt="" className="links" />
        <h2 className="company">Company</h2>
        
          <li className="pricing">About us</li>
          <li className="pricing">Blog</li>
          <li className="pricing">Contact us</li>
          <li className="pricing">Pricing</li>
          <li className="pricing">Testimonials</li>
        <h2 className="support">Support</h2>
        <li className="help">Help Center</li>
          <li className="help">Terms of Service</li>
          <li className="help">Legal</li>
          <li className="help">Privacy Policy</li>
          <li className="help">Status</li>
        <h2 className="stay">Stay up to date</h2>
        <input type="email" placeholder="Your email adress" className="input"/>
      </div>

      </section>
    </>
  );
}

export default App;
