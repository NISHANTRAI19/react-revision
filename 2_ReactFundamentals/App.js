import React from "react";
import ReactDOM from "react-dom/client";
const heading = <h1 className="head">HI from JSX</h1>


const title = (<h1>rendering JSX</h1>)
function HeadingComponent() {
    return (
        <h1>FROM FUNCTIONAL </h1>
    )

} //HeadingComponent = () => <h1>FROM FUNCTIONAL </h1>

const root = ReactDOM.createRoot(document.getElementById("reactroot"));
root.render(<HeadingComponent />);
//root.render(title);
