import { Index } from "./Page";
import { Provider } from "react-redux"
import { persistor, Store } from "./Store";
import { PersistGate } from "redux-persist/es/integration/react";
import { Exchenge } from "./Page/exchange";

const App = ()=>{
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
         <div className="" ><Index/> 
         <Exchenge/></div>
      </PersistGate>

    </Provider>
  )
}
export default App;