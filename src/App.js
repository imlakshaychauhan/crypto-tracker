import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Header from "./Components/Header";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));  
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} exact/>
        <Route path="/coins/:id" element={<Coinpage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
