import './landing.css';
import Navbar from '../navbar/navbar.js'
import LightRays from './components/lightrays.js';
import FadeContent from './components/fadecontent.js'
import Why from './why/why.js';
import Status from './status/status.js';
import SeeDocs from './seedocs/seeDocs.js';


export default function Landing() {
  
  return (
    <>
      <Navbar />
      <div className='landing-default' id='landing-titlepage'>
        <LightRays
          raysOrigin="top-center"
          raysColor="#F5F5F5"
          raysSpeed={1.5}
          lightSpread={0.6}
          rayLength={1.8}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.07}
          className="custom-rays"
        />
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} id='main-title'>
          <span>The Groundbreaking</span>
          <h1>ZenEngine</h1>
        </FadeContent>
      </div>
      <Why />
      <Status />
      <SeeDocs />
    </>
  )
}