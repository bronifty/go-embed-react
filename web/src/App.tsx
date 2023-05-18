import React from "react"
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
     {message}
    </>
  )
}

export default App
