import React from "react";

import Questions from "./components/Containers/Questions/Questions";
import Header from "./components/Presenters/Header/Header";

import signData from "./sign-data.json";
import theoryData from "./theory-data.json";

import "./App.css";

const App = () => (
    <div className="app d-flex flex-column">
        <Header appName={process.env.REACT_APP_APP_NAME} />
        <Questions
            signData={signData}
            theoryData={theoryData}
        />
    </div>
);

export default App;
