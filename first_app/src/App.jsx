import KgButton from "./kgbutton";
import Hello from "./hello";
import Random from "./random"
function App(){
    return <div>
      <h1>
      hello world
    </h1>
    <KgButton></KgButton>
    <Hello></Hello>
    <div>
         <Random></Random>
         <Random></Random>
         <Random></Random>
         <Random></Random>
    </div>
    </div>
    
    // this is not a html code it is a jsx code which is converted to js
}
//babeljs.io/repl allow us to convert jsx code to convert in js 
export default App;