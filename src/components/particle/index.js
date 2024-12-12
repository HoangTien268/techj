import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const [isVisible, setIsVisible] = useState(true); // Điều khiển hiển thị particles

    const particlesInit = async (engine) => {
      await loadFull(engine); // Load đầy đủ các plugin
    };
  
    useEffect(() => {
        const handleScroll = () => {
          const particlesContainer = document.getElementById("particles-container");
          const rect = particlesContainer.getBoundingClientRect();
    
          // Kiểm tra khi phần tử cuộn qua một nửa chiều cao của nó
          if (rect.top <= window.innerHeight / 5) {
            setIsVisible(false); // Ẩn particles khi cuộn qua một nửa chiều cao của phần tử
          } else {
            setIsVisible(true); // Hiển thị particles khi chưa cuộn qua nửa chiều cao
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup sự kiện khi component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  

  return (
    <>
      {/* Phần chứa particles */}
      <div
        id="particles-container"
        style={{
          height: "100vh", // Đảm bảo chiều cao của phần particles bằng chiều cao màn hình
          position: "relative",
          zIndex: -1,
        }}
      >
        {isVisible && (
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              particles: {
                number: {
                  value: 100, // Số lượng hạt (có thể điều chỉnh tùy theo ý muốn)
                  density: {
                    enable: true,
                    value_area: 800, // Kích thước khu vực nơi particles được phân tán
                  },
                },
                shape: {
                  type: "circle", // Hình dạng của particles là hình tròn
                },
                color: {
                  value: "#ffffff", // Màu sắc của particles
                },
                line_linked: {
                  enable: true, // Kết nối các particles với nhau
                  distance: 150, // Khoảng cách tối đa giữa các particles để tạo liên kết
                  color: "#ffffff", // Màu sắc của đường nối
                  opacity: 0.5, // Độ mờ của đường nối
                  width: 1, // Độ dày của đường nối
                },
                move: {
                  enable: true, // Bật chế độ di chuyển
                  speed: 0.5, // Tốc độ di chuyển của particles
                  direction: "none", // Hướng di chuyển ngẫu nhiên
                  out_mode: "out", // Các particles di chuyển ra ngoài khi đến biên giới
                },
              },
              retina_detect: true, // Đảm bảo hiệu ứng hiển thị tốt trên các màn hình Retina
            }}
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%", // Đảm bảo particles phủ toàn bộ chiều cao của phần tử
            }}
          />
        )}
      </div>
    </>
  );
};

export default ParticlesBackground;
