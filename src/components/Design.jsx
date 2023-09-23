import { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "./main";

const Calculator = () => {

  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");

  const allclearHandler = () => {
    setCurrent("");
    setPrevoius("");
    setOperations("");
  };
  
  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const appendValueHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const chooseOperationHandler = (el) => {
    if (current === "") return;
    if (prevoius !== "") {
      let value = compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOperations("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius} {operations}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button gridspan={2} onClick={allclearHandler}>
          AC
        </Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button data={"÷"} onClick={chooseOperationHandler} operation="true">
          ÷
        </Button>
        <Button data={7} onClick={appendValueHandler}>
          7
        </Button>
        <Button data={8} onClick={appendValueHandler}>
          8
        </Button>
        <Button data={9} onClick={appendValueHandler}>
          {" "}
          9
        </Button>
        <Button data={"x"} operation="true" onClick={chooseOperationHandler}>
          x
        </Button>
        <Button data={4} onClick={appendValueHandler}>
          4
        </Button>
        <Button data={5} onClick={appendValueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendValueHandler}>
          6
        </Button>
        <Button data={"+"} operation="true" onClick={chooseOperationHandler}>
          +
        </Button>
        <Button data={1} onClick={appendValueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendValueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendValueHandler}>
          3
        </Button>
        <Button data={"-"} operation="true" onClick={chooseOperationHandler}>
          -
        </Button>
        <Button decimal="true" data={"."} onClick={appendValueHandler}>
          .
        </Button>
        <Button data={0} onClick={appendValueHandler}>
          0
        </Button>
        <Button gridspan={2} equals="true" onClick={equalHandler}>
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;
