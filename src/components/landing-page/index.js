import React from "react";
import "./style.css";
import pageImage from "../../assets/images/page-image.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between align-items-center p-3 fixed-top bg-white shadow-sm">
          <div className="logo">LOGO</div>
          <nav className="nav">
            <a href="#home" className="nav-link text-dark">
              Home
            </a>
            <a href="#case-studies" className="nav-link text-dark">
              Case studies
            </a>
            <a href="#team" className="nav-link text-dark">
              Team
            </a>
            <a href="#contact" className="nav-link text-dark">
              Contact
            </a>
          </nav>
        </div>

        <div
          className="hero text-center text-white d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundImage: `url(${pageImage})` }}
        >
          <div className="overlay"></div>
          <div className="title ">
            <h1 className="display-1 heroTitle fw-bold">
              Introduce your{" "}
              <span className="highlight text-success">idea.</span>
            </h1>
            <p className="display-5 fw-normal mt-4">Add your title.</p>
            <div className="cta mt-3 rounded mt-4">
              <button className="btn btn-success btn-lg">Call to action</button>
            </div>
          </div>
        </div>

        <div className="features text-center" style={{ padding: "30px 10%" }}>
          <h2 className="fs-1 fw-bold p-5">
            Use this space to elaborate on your headline and connect with{" "}
            <span className="highlight text-success">your visitors.</span>
          </h2>
          <div className="row p-3">
            <div className="col-md-4 featureItem">
              <img
                src={require("../../assets/images/page-image.jpg")}
                alt="Feature 1"
                className="img-fluid featureImage mb-3"
              />
              <h3 className="featureTitle">Add your title</h3>
              <p className="featureDescription">
                Use this space to elaborate on your headline and connect with
                your visitors...
              </p>
            </div>
            <div className="col-md-4 featureItem">
              <img
                src={require("../../assets/images/page-image.jpg")}
                alt="Feature 2"
                className="img-fluid featureImage mb-3"
              />
              <h3 className="featureTitle">Add your title</h3>
              <p className="featureDescription">
                Use this space to elaborate on your headline and connect with
                your visitors...
              </p>
            </div>
            <div className="col-md-4 featureItem">
              <img
                src={require("../../assets/images/page-image.jpg")}
                alt="Feature 3"
                className="img-fluid featureImage mb-3"
              />
              <h3 className="featureTitle">Add your title</h3>
              <p className="featureDescription">
                Use this space to elaborate on your headline and connect with
                your visitors...
              </p>
            </div>
          </div>
        </div>

        <div
          className=" text-center"
          style={{
            margin: "0 10%",
            padding: "50px 0",
            backgroundColor: "#F6F6F6FF",
          }}
        >
          <div className="row stats">
            <div className="col-md-4">
              <h1 className="fw-bold display-4">270</h1>
              <p className="fw-bold stat-description">Description</p>
            </div>
            <div className="col-md-4">
              <h1 className="fw-bold display-4">60</h1>
              <p className="fw-bold stat-description">Description</p>
            </div>
            <div className="col-md-4">
              <h1 className="fw-bold display-4 text-success">1,442</h1>
              <p className="fw-bold stat-description">Description</p>
            </div>
          </div>
        </div>

        <div className=" text-center" style={{ padding: "30px 10%" }}>
          <div>
            <h2 className="fs-1 fw-bold p-5">
              Use this space to elaborate on your headline and connect with{" "}
              <span className="highlight text-success">your visitors.</span>
            </h2>
            <div className="images  mb-4">
              <div className="d-flex gap-5 text-align-center justify-content-between align-items-center">
                <img
                  className="img-fluid image"
                  src="https://via.placeholder.com/300"
                  alt="Placeholder"
                />
                <p className="paragraph">
                  Use this space to elaborate on your headline and connect with
                  your visitors. You can build on the first idea or add your
                  second point. Now that you've got your visitors' attention,
                  let them know what they can expect, and encourage them to
                  explore your site.
                </p>
              </div>
              <div className="d-flex gap-5 text-align-center justify-content-between align-items-center">
                <p className="paragraph">
                  Use this space to elaborate on your headline and connect with
                  your visitors. You can build on the first idea or add your
                  second point. Now that you've got your visitors' attention,
                  let them know what they can expect, and encourage them to
                  explore your site.
                </p>
                <img
                  className="img-fluid image"
                  src="https://via.placeholder.com/300"
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center text-white"
          style={{
            backgroundColor: "black",
            margin: "30px 10%",
            padding: "6% 8%",
          }}
        >
          <h2 className="mb-4 display-6 fw-bold">
            Use this space to elaborate on your headline and connect with{" "}
            <span className="highlight text-success">your visitors.</span>
          </h2>
          <div className="ctaButton2 fs-5 mt-4">Call to action</div>
        </div>

        <div className="navbar mt-5" style={{ margin: "30px 10%" }}>
          <div className="d-flex gap-2">
            <a href="#home" className="nav-link text-dark">
              Home
            </a>
            <a href="#case-studies" className="nav-link text-dark">
              Case studies
            </a>
            <a href="#team" className="nav-link text-dark">
              Team
            </a>
            <a href="#contact" className="nav-link text-dark">
              Contact
            </a>
          </div>
          <div className="social-icons ">
            <a href="#">
              <img
                src={require("../../assets/images/facebook-logo.png")}
                className="social-icon facebook"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src={require("../../assets/images/instagram-logo.png")}
                className="social-icon instagram"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src={require("../../assets/images/tiktok-logo.png")}
                className="social-icon tiktok"
                alt="Tiktok"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
