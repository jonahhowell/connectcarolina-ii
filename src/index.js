import React from "react";
import ReactDOM from "react-dom/client";

class Home extends React.Component {
    render() {
        return (<h1>Connect Carolina II!</h1>);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);