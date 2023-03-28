import { Provider } from "./contexts";
import A from "./components/A";


function App() {
 //20 deve estar entre aspas pois o terget.value é sempre texto
 // o "A" é o children
  
  return (
      <Provider>
        <A /> 
      </Provider>
   
  );
}

export default App;

//sempre que quiser passar de pai para filho é props

