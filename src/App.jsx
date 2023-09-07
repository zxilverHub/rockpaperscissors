import React from "react";
import "./App.css";
import Header from "./components/Header";
import Picking from "./components/Picking";
import Result from "./components/Result";
import Rules from "./components/Rules";

import { useSelector, useDispatch } from "react-redux";
import { showRule } from "./features/AppSlice";

function App() {
  const dispatch = useDispatch();
  const isPicking = useSelector( state => state.isPicking );
  const isshowRule = useSelector( state => state.isShowRule );

  return (
    <>
      <Header />
      <div className="main-game">
        { isPicking?
          <Picking /> :
          <Result />
        }
      </div>
      <button className="rules-btn" 
        onClick={() => dispatch(showRule())}>
        RULES
      </button>
      { isshowRule && <Rules /> }
    </>
  )
}

export default App;