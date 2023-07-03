import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "h1",
    { id: "blahblah" },
    "Hellowwww world from React"
);

const nested = React.createElement("div", { id: "nested-parent" }, [
    React.createElement("div", { id: "nested-child1" }, [
        React.createElement("h1", { id: "1" }, "H1111111111"),
        React.createElement("h1", { id: "2" }, "H22222222222"),
    ]),
    React.createElement("div", { id: "nested-child2" }, [
        React.createElement("h1", { id: "1" }, "H1111111111"),
        React.createElement("h1", { id: "2" }, "H22222222222"),
    ]),
]);

console.log(heading);
setTimeout(() => {
    // code to check dynamic dom manipulation
    const root = ReactDOM.createRoot(document.getElementById("reactroot")); // creating react root from ID reactroot
    root.render(nested); //nested or heading                                   //converting js object i.e nested or heading to html
    // this is very messy so we use JSx
}, 3000);