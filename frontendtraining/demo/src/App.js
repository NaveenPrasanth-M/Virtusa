import React,{useState} from "react";
import ReactDOM from "react-dom";

function Company(){
    const [car,setState]=useState({brand:"Benz",color:"Blue",year:"2010"});

    const updatecolor = () => {
        setState(previousState => {
            return{...previousState,color:"White"}
        });
    }
    const updatebrand = () => {
        setState(previousState => {
          return { ...previousState, brand: "AUDI" }
        });
      }
      const updateyear = () => {
        setState(previousState => {
          return { ...previousState, year: "2022" }
        });
      }

   

    return(
        <div>
            <h1>HERE IS YOUR FALOURITES</h1>
            <h1>The color of my car is {car.color}.</h1>
            <h1>The Brand of my car is {car.brand}.</h1>
            <h1>Edition Year - {car.year}</h1>
            <button type="button" onClick={updatecolor}>COLOR</button>
            <button type="button" onClick={updatebrand}>SELECT</button>
            <button type="button" onClick={updateyear}>SELECT</button>
        </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Company/>)
export default Company