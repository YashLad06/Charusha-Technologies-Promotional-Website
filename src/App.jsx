import { Navbar } from './components';
import { Header, AboutUs, OurProduct, OurSpeciality, Feedback, ContactUs, Footer } from './container';
import './App.css';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutUs />
      <OurProduct />
      <OurSpeciality />
      <Feedback />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App;
