import './App.css';
import React from 'react';
import {useState,useEffect} from 'react' ;
import NumberFormat from "react-number-format";
import styled from 'styled-components';



function App() {

const [preState, setPreState] = useState("");
const [curState, setCurState] = useState("");
const [input, setInput] = useState("0");
const [operator, setOperator] = useState(null);
const [total, setTotal] = useState(false);

const numb = (e) => {
  if(curState.includes(".") && e.target.innerText ===".")
  return
  if(total){
    setPreState("")
  }

  curState?
    setCurState(pre=>pre+e.target.innerText) :
    setCurState(e.target.innerText);

  setTotal(false);

};

useEffect(()=>{
  setInput(curState)

},[curState ]);

useEffect(()=>{
  setInput("0");

},[]);


const opType= (e) => {
  setTotal(false);
  setOperator(e.target.innerText);
  if(curState==="") return;
  if(preState!==""){
    equals();
  }
  else{
    setPreState(curState);
    setCurState("");    
  }
};
const equals= (e) => {
  if(e?.target.innerText==="="){

    setTotal(true);
  }
  
  let cal;
  switch (operator) {
    case "/":
      cal = String(parseFloat(preState) / parseFloat(curState));
      break;

    case "+":
      cal = String(parseFloat(preState) + parseFloat(curState));
      break;
    case "*":
      cal = String(parseFloat(preState) * parseFloat(curState));
      break;
    case "-":
      cal = String(parseFloat(preState) - parseFloat(curState));
      break;
    default:
      return;
  }
  setInput("");
  setPreState(cal);
  setCurState("");
};


 
const reset = () => {

  setPreState("");
  setCurState("");
  setInput("0");

}
const mod = () => {
  preState
  ? setCurState(String((parseFloat(curState) / 100) * preState))
  : setCurState(String(parseFloat(curState) / 100));
};
const sign = () => {
  if (curState.charAt(0) === "-") {
    setCurState(curState.substring(1));
  } else {
    setCurState("-" + curState);
  }
};


// to use media query for responsiveness :use styledComponents
//first import them as top, then use styled.div as below, then replace required div
//also use npm i styled-components in terminal 


const StyleRegisterContainer = styled.div`
width:70 vh;
&:hover{
  box-shadow: 0px 0px 5px grey
}
@media (min-width:0px) and (max-width:767px){
  width:45vh;
}

`;




  return (
    <StyleRegisterContainer className="App">
      <div className="calculator">
        
        <div className="display">
        {input !== "" || input === "0" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
        <div className="btn lfunc" onClick={reset}>AC</div>
        <div className="btn lfunc" onClick={mod}>%</div>
        <div className="btn lfunc" onClick={sign}>+/-</div>
        <div className="btn op" onClick={opType}>/</div>
        <div className="btn num" onClick={numb}>7</div>
        <div className="btn num" onClick={numb}>8</div>
        <div className="btn num" onClick={numb}>9</div>
        <div className="btn op" onClick={opType}>*</div>
        <div className="btn num" onClick={numb}>4</div>
        <div className="btn num" onClick={numb}>5</div>
        <div className="btn num" onClick={numb}>6</div>
        <div className="btn op" onClick={opType}>+</div>
        <div className="btn num" onClick={numb}>1</div>
        <div className="btn num" onClick={numb}>2</div>
        <div className="btn num" onClick={numb}>3</div>
        <div className="btn op" onClick={opType}>-</div>
        <div className="btn zero" onClick={numb}>0</div>
        <div className="btn num" onClick={numb}>.</div>
        <div className="btn num" onClick={equals}>=</div>
      </div>
     
    </StyleRegisterContainer>
  );
}

export default App;
