import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>React</h1>
      <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App;
