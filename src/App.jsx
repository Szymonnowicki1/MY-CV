import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { Toaster } from "sonner"
import "./index.css";

function App() {

  return (
    <>
      <Toaster className="text-primary"/>
     <BrowserRouter>
      <Routes>
        <Route index element={ <Home></Home>}/>
        <Route/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
