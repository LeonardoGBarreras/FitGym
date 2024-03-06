import './App.css';
import Hero from './componets/Hero/Hero';
import Plans from './componets/Plans/Plans';
import Programs from './componets/Programs/Programs';
import Reasons from './componets/Reasons/Reasons';
import Testimonials from './componets/Testimonials/Testimonials';
import Join from './componets/Join/Join';
import Footerr from './componets/Footerr/Footerr';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footerr/>
 
    </div>
  );
}

export default App;
