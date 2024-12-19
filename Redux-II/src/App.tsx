import {BrowserRouter as Router ,  Routes , Route} from "react-router-dom"
import { Login1 } from "./Components/Pages/login"
import { Privacy } from "./Components/privacy"
import { Painel } from "./Components/Pages/Painel"
import { Provider } from "react-redux"
import { Store } from "./store"
function App() {
 return(
  
    <Provider store={Store}>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login1/>}/>
          <Route path="/painel" element={<Privacy><Painel/></Privacy>}/>
      
        </Routes>
      </Router>
    </div>
    </Provider>
    
 

 )

}

export default App
