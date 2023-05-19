import React from "react"
// let API_ENDPOINT = "http://139.144.29.133:8080/api";
let API_ENDPOINT = new URL("/api", document.location).href;


function App() {
  const [message, setMessage] = React.useState("")
 React.useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch(API_ENDPOINT);
      const data = await response.text();
      setMessage(data);
 }
  fetchData().catch(console.error);
 }, [])

  return (
    <>
      <h1>React App Embedded in Go</h1>
     {message}
    </>
  )
}

export default App
