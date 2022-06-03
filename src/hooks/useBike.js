import {useEffect,useState}from "react"
const useBike = bikeId=>{

 const [bike,setBike]= useState({ });

 useEffect(()=>{
     const url =`https://intense-citadel-51923.herokuapp.com/bike/${bikeId}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setBike(data))
 },[bikeId])

 return[bike ,setBike ];
}
export default useBike;