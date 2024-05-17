import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hello, setHello] = useState("empty");

  useEffect(() => {
    fetch("/api/users/test")
      .then(res => res.text())
      .then(setHello);
  }, []);

  return (
    <>
      <div>{hello}</div>
    </>
  );
}

export default App;
