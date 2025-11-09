import { Outlet } from "react-router"
import { Nav } from "../App"
import Footer from "../components/Footer"


const MainLayout = () => {
 return (
        <div className="flex flex-col min-h-screen m-2 md:m-0">
            <header>
                <Nav/>
            </header>
            
                <Outlet/>
            
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default MainLayout