import axios from "axios";
import {GlobalStyle} from "./components/styles/globalStyles.js";
import {Home} from "./pages/Home.jsx";
function App() {

    async function getColor() {
        try {
            const response = await axios.get(' https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div >
        <GlobalStyle/>
        <Home/>
    </div>
  )
}

export default App
