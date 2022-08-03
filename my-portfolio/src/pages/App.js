import "./App.css";
import React, {useEffect} from 'react';
import Button from "../components/Button";

function App() {

  useEffect(() => {
    console.log("useEffect test")
  }, []);

  return (
    <>
      <Button
        onClick={() => console.log("yes!")}
        label={"테스트"}
      />

    </>
  );
}

export default App;
