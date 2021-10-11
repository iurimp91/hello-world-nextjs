import { useState } from "react";

export default function Home() {
  const [apiData, setApiData] = useState();
  
  async function clickHandler() {
    try {
      const response = await fetch("http://localhost:3000/api/hello");

      const responseData = await response.json();

      setApiData(responseData);
    } catch (e) {
      alert("Something went wrong, please try again.");
    }
  }
  
  return (
    <div className="container">
      <button onClick={clickHandler}>Hello</button>
      {
        apiData &&
        <>
          <h1>
            {JSON.stringify(apiData)}
          </h1>
          <h1>
            {Object.keys(apiData)} {apiData.hello}
          </h1>
        </>
      }
    </div>
  )
}
