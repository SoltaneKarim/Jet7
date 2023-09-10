import React , { useState , createContext } from "react";

 const HotelContext = createContext(null)


function HotelProvider({children}) {
    [changable , setChangable]=useState({})
 
    return (

<HotelContext.Provider value={{changable , setChangable}}>

    {children}
</HotelContext.Provider>



    )


}
function UseHotelContext() {
    const changable = useContext(HotelContext)
    if (!changable){
        throw new Error('use termtk')

    }
    return changable
} 


 export default {HotelContext , HotelProvider , UseHotelContext}