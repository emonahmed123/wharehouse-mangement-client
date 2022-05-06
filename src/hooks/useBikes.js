import { useEffect, useState } from "react"

const useBikes =()=>{
    const [ bikes,setBikes]  =useState([ ])

    useEffect(()=>{
     fetch('https://intense-citadel-51923.herokuapp.com/bike')
     .then(res=>res.json())
     .then(data=>setBikes(data))

    },[ ]) 
    return [bikes, setBikes]
}
export default useBikes;