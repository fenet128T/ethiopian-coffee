import React  from 'react'
import Navbar from "./components/Navbar/Navbar";
import Home from "./Components/Home/Home";
// import Services from "./components/Services/Services.jsx";
// import Banner from "./components/Banner/Banner.jsx";
// import AppStore from "./components/AppStore/AppStore.jsx";
// import Testimonials from "./components/Testimonials/Testimonials.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(() =>{
  AOS.init(
    {
       offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    }
  );
  AOS.refresh();
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      {/* <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer /> */}
      
    </div>
  )
}

export default App
