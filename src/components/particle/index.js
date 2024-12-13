import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine); // Load đầy đủ các plugin
  };

  return (
    <>
      {/* Phần chứa particles */}
      <div
        id="particles-container"
        style={{
          height: "100vh", // Đảm bảo chiều cao của phần particles bằng chiều cao màn hình
          position: "relative",
          zIndex: -1,
          overflow: "hidden", // Đảm bảo không có hạt nào ra ngoài màn hình
        }}
      >
        (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#000000", // Nền đen tạo sự đối lập với các hạt
              },
            },
            particles: {
              number: {
                value: 150, // Số lượng hạt
                density: {
                  enable: true,
                  value_area: 800, // Kích thước khu vực phân tán
                },
              },
              shape: {
                type: "polygon", // Hình dạng đa giác giúp trông cứng cáp hơn
                stroke: {
                  width: 1,
                  color: "#00ffcc", // Màu viền sáng để tạo cảm giác công nghệ
                },
              },
              color: {
                value: "#00ffcc", // Màu sắc của hạt
              },
              opacity: {
                value: 0.8, // Độ mờ của các hạt
                random: true, // Độ mờ ngẫu nhiên
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.3, // Độ mờ tối thiểu
                },
              },
              size: {
                value: 4, // Kích thước của các hạt
                random: true, // Kích thước ngẫu nhiên
                animation: {
                  enable: true,
                  speed: 6,
                  minimumValue: 1,
                },
              },
              move: {
                enable: true,
                speed: 3, // Tốc độ di chuyển của hạt
                direction: "none", // Hướng ngẫu nhiên
                random: true, // Di chuyển ngẫu nhiên
                straight: false, // Không di chuyển thẳng
                outMode: "out", // Các hạt di chuyển ra ngoài khi đến biên giới
              },
              links: {
                enable: true, // Kết nối các hạt lại với nhau
                distance: 150,
                color: "#00ffcc", // Màu kết nối
                opacity: 0.3, // Độ mờ kết nối
                width: 1,
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true, // Bật hiệu ứng hover
                    mode: "repulse", // Hạt sẽ đẩy ra khi hover
                  },
                },
              },
            },
            retina_detect: true, // Đảm bảo hiển thị tốt trên màn hình Retina
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%", // Đảm bảo particles phủ toàn bộ chiều cao của phần tử
          }}
        />
        )
      </div>
    </>
  );
};

export default ParticlesBackground;
