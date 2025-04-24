import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Header } from "./Layouts/Header/Header" 
import { Footer } from "./Layouts/Footer/Footer"



export const App = ()=>{
    return(
   
        
        <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
      

    )
}