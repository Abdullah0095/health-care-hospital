
import Home from './Components/Home/Home';
import './Components/style.css';
import { Routes, Route } from "react-router-dom";
import Testimonial from './Components/Home/Testimonial/Testimonial';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home />} />
        <Route path="testimonial" element={<Testimonial />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>

    </div>
  );
}

export default App;
