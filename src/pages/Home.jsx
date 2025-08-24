import ThemeToggle from "../components/ThemeToggle";
import Stars from "../components/Stars";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


 const Home = () => {
    return(
        <div id="home" className="min-height bg-background text-foreground overflow-x-hidden">

            {/*przelacznik swiatla */}
            <ThemeToggle/>
            {/*efekt tla */}   
            <Stars/>
            {/*navbar */} 
            <Navbar/>
            {/*Main content */}
            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Contact/>
            </main>
            {/*footer */}  
            <Footer/>      
        </div>


    )
}

export default Home;