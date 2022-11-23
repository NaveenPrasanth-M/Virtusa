import React,{ useEffect, useState} from "react";
import ReactDOM from "react-dom";

const Home = () => {
    const [data,setData]=useState(null);

    useEffect(() => {fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((data) => setData(data))},[]);

    return(
        <>
        {data && data.map((item) => {return <p key={item.id}>{item.title} {item.completed}</p>})}
        </>
    );   
};

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home/>);

export default Home