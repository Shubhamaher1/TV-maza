import logo from './logo.svg';
import './App.css';

function showdata() {
  const actor= document.getElementById("Actor");
  const show=document.getElementById("Show");
  const findbt= document.getElementById("serch-btn");
  let inputname= document.getElementById("input-search").value.trim();
  console.log(inputname);
  show.innerHTML=inputname;
  if( actor.checked){

  }else{

  }
  
  
} ;



function App() {
  
  return (
    <div className="main-body">
      <div className="App">
     <h1 className="heading">Tv Maza</h1>
     <input type="radio" name="search" className="Actor" id='Actor'></input>
     <span  className="Actor-name">Actor Name</span>

     <input className="show-name" type="radio" name="search" id='Show'></input>
     <span className="show-name-logo">Show Name</span>
     <div className="serch-name">
       <input className="input-search" id="input-search" placeholder="Enter Name" type="text"></input>
       <button id="serch-btn" className="serch-btn" >Find</button>

     </div>
     
    </div>
    <div className="add-here"  id="add-here" >
      this i
     </div>
    </div>
    
  );
}

export default App;
