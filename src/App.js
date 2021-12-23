import './App.css';
import * as React from "react";
import TimeDisplayer from "./component/TimeDisplayer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-title"> App header</div>
                <div className="App-nav-menu">
                    <div className="nav-item-holder">navbar</div>
                    <TimeDisplayer/>
                </div>
            </header>
            <section className="App-body">
                Body
            </section>
            <footer className="App-footer">
                Footer
            </footer>
        </div>
    );
}

export default App;
