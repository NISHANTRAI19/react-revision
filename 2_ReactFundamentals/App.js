import React from "react";
import ReactDOM from "react-dom/client";
const heading = <h1 className="head">HI from JSX</h1>



const HeadingComponent = () => <h1>FROM FUNCTIONAL </h1>

const root = ReactDOM.createRoot(document.getElementById("reactroot"));
root.render(<HeadingComponent />);
