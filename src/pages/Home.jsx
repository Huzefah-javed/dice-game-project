

import { NavLink } from "react-router"

export const Home =()=> {


    return(<>
        <div className="min-h-lvh w-lvh md:text-sm bg-white flex flex-wrap items-center justify-evenly" >
            <div className="w-auto h-auto">
                <img className="max-h-56 lg:max-h-96" style={{height: "30rem"}} src="/Main-Dice-Image.png" alt="Dice images" />
            </div>
            <div className=" w-auto h-44 flex flex-wrap flex-col justify-between items-end">
                <h1 className="lg:text-8xl md:text-6xl text-5xl font-bold">Dice game</h1>
                <NavLink to="/game"><button className="bg-black h-8 w-36 text-white">Play Now</button></NavLink>
            </div>
        </div>
    
    </>) 
    
}
