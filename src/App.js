import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LandingPage from "./components/landing-page";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
