
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OurWork from './components/OurWork'
import ServicesSection from './components/ServiceSection'
import Services from './components/Services'
import Team from './components/Team'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />

      <ServicesSection />
      <OurWork />
      <Services />
      <Team />
      <Contact />
      <footer className="	bg-green-50	  text-white py-8">
        <div className="container mx-auto px-4 text-center text-black font-extrabold">
          <p>© {new Date().getFullYear()} Olinko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
