import React, { useEffect } from "react";
import "./style.css";
import ParticlesBackground from "../particle";

const LandingPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(
      ".heroTitle, .featureItem, .cta-button1, .stat-description, .paragraph , .slogan"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between align-items-center p-3 fixed-top bg-black shadow-sm text-white">
          <div className="logo fs-3">
            Tech<span className="highlight text-success">J</span>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link text-white">
              Trang chủ
            </a>
            <a href="#team" className="nav-link text-white">
              Về chúng tôi
            </a>
            <a href="#case-studies" className="nav-link text-white">
              Dịch vụ
            </a>
            <a href="#contact" className="nav-link text-white">
              Liên hệ
            </a>
          </nav>
        </div>

        <div
          className="hero text-center text-white d-flex flex-column justify-content-center align-items-center"
          id="home"
        >
          <div className="title">
            <div
              className="particles-container animate-on-scroll"
              style={{
                height: "100vh",
                position: "absolute",
                zIndex: -9999,
              }}
            >
              <ParticlesBackground />
            </div>

            <h1 className="display-2 heroTitle fw-bold">
              TechJ – Delivering Quality{" "}
              <span className="highlight text-success">
                Software Solutions.
              </span>
            </h1>
            <p className="fs-4 fw-normal mt-4" style={{ padding: "0 20%" }}>
              TechJ chuyên phát triển phần mềm ứng dụng AI, giúp doanh nghiệp
              tối ưu hóa quy trình và tăng cường hiệu suất một cách thông minh
              và hiệu quả.
            </p>
            <div className="cta mt-3 rounded mt-4">
              <button className="cta-button">Liên hệ với chúng tôi</button>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div
            className="features text-center text-white animate-on-scroll"
            style={{ padding: "30px 10%" }}
            id="team"
          >
            <h2 className="fs-1 fw-bold p-5 slogan">
              Tại sao chọn{" "}
              <span className="highlight text-success">TechJ?</span>
            </h2>
            <div className="row p-3">
              <div className="col-md-4 featureItem">
                <img
                  src={require("../../assets/images/quality.png")}
                  alt="Feature 1"
                  className="img-fluid featureImage mb-3"
                />
                <h3 className="featureTitle">Chất lượng vượt trội</h3>
                <p className="featureDescription">
                  Chúng tôi luôn đảm bảo về chất lượng của sản phẩm.
                </p>
              </div>
              <div className="col-md-4 featureItem">
                <img
                  src={require("../../assets/images/page-image.jpg")}
                  alt="Feature 2"
                  className="img-fluid featureImage mb-3"
                />
                <h3 className="featureTitle">
                  Đội ngũ chuyên môn cao, giàu kinh nghiệm
                </h3>
                <p className="featureDescription">
                  Đội ngũ có năng lực và kinh nghiệm, luôn sẵn sàng giải quyết
                  mọi thách thức.
                </p>
              </div>
              <div className="col-md-4 featureItem">
                <img
                  src={require("../../assets/images/solution.png")}
                  alt="Feature 3"
                  className="img-fluid featureImage mb-3"
                />
                <h3 className="featureTitle">Giải pháp tối ưu</h3>
                <p className="featureDescription">
                  Công nghệ linh hoạt, phù hợp với mọi mô hình.
                </p>
              </div>
            </div>
          </div>

          <div
            className="text-center animate-on-scroll"
            style={{
              padding: "50px 10%",
            }}
          >
            <div className="row stats">
              <div className="col-md-4 slogan">
                <h1 className="fw-bold display-4 text-white">270</h1>
                <p className="fw-bold stat-description">Thành viên</p>
              </div>
              <div className="col-md-4 slogan">
                <h1 className="fw-bold display-4 text-white">60</h1>
                <p className="fw-bold stat-description">Đối tác</p>
              </div>
              <div className="col-md-4 slogan">
                <h1 className="fw-bold display-4 text-success">315</h1>
                <p className="fw-bold stat-description">Sản phẩm</p>
              </div>
            </div>
          </div>

          <div
            className="text-center text-white animate-on-scroll"
            style={{ padding: "30px 10%" }}
            id="case-studies"
          >
            <div>
              <h2 className="fs-1 fw-bold p-5 slogan">
                Dịch vụ của{" "}
                <span className="highlight text-success">TechJ</span>
              </h2>
              <div className="images mb-4">
                <div className="d-flex gap-5 text-align-center justify-content-between align-items-center featureItem">
                  <img
                    src={require("../../assets/images/AISoftware.png")}
                    alt="Feature 3"
                    className="img-fluid image"
                  />
                  <p className="paragraph text-white">
                    Chúng tôi chuyên phát triển các phần mềm ứng dụng trí tuệ
                    nhân tạo, giúp tối ưu hóa quy trình kinh doanh. Đáp ứng các
                    nhu cầu đặc thù của doanh nghiệp bằng các giải pháp AI được
                    thiết kế riêng, mang lại hiệu quả và tính cạnh tranh cao.
                  </p>
                </div>
                <div className="d-flex gap-5 text-align-center justify-content-between align-items-center featureItem">
                  <p className="paragraph text-white">
                    Hỗ trợ doanh nghiệp tiết kiệm nguồn lực và thời gian với các
                    sản phẩm AI chất lượng cao, triển khai nhanh chóng. Đảm bảo
                    hệ thống luôn được cập nhật công nghệ mới nhất, hoạt động ổn
                    định và hiệu quả lâu dài.
                  </p>
                  <img
                    src={require("../../assets/images/support.png")}
                    alt="Feature 3"
                    className="img-fluid image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center text-white animate-on-scroll"
            style={{
              margin: "30px 10%",
              padding: "6% 8%",
            }}
          >
            <h2 className="mb-4 display-6 fw-bold slogan">
              <span className="highlight text-success">TechJ</span>– Đồng hành
              cùng doanh nghiệp trong hành trình tối ưu hóa và đổi mới với các
              giải pháp gia công phần mềm AI hàng đầu.
            </h2>
            <div className="cta mt-5 rounded mt-4">
              <button className="cta-button1">Liên hệ với chúng tôi</button>
            </div>
          </div>

          <div
            className="navbar"
            style={{ padding: "0 10% 50px 10%" }}
            id="contact"
          >
            <div className="d-flex gap-3">
              <a href="#home" className="nav-link text-white">
                Trang chủ
              </a>
              <a href="#team" className="nav-link text-white">
                Về chúng tôi
              </a>
              <a href="#case-studies" className="nav-link text-white">
                Dịch vụ
              </a>
              <a href="#contact" className="nav-link text-white">
                Liên hệ
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
      </div>
    </>
  );
};

export default LandingPage;
