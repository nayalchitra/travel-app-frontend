import HotelCard from "../../components/HotelCard";
import { Navbar } from "../../components/index";
import "./style.css";

export const Home = ()=>{
    return(
        <>
            <Navbar/>
            <div className="main">
                <HotelCard/>
            </div>
        </>
    )
}