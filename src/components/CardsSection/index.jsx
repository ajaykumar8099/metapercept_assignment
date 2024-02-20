import { useEffect,useState } from "react";
import Loader from "react-loader-spinner"
import CardItem from "../CardItem"
import "./index.css"

const CardsSection = ()=>{
    const [isLoading,setIsLoading] = useState(true)
    const[data,setData] = useState([])

    useEffect(()=>{
        const getApiData = async()=>{
            try{
                const url = "https://raw.githubusercontent.com/metapercept/CodeExcercise/master/Excercise-1/data/class.json"
                const respone = await fetch(url)
                const responeData = await respone.json()
                console.log(responeData)
                setData(responeData)
                setIsLoading(false)

            }catch(e){
                console.log(e.message)
            }

        }
        getApiData()
    },[])

    const loadingStage =()=>(
        <div>
            <Loader type="TailSpin" color="black" height={50} width={50}/>
        </div>
    )

    const displayData = () =>(
        <ul className="un-list-items">
            {data.map(eachItem=>(
                <CardItem key={eachItem.ID} itemData = {eachItem}/>
            ))}
        </ul>
    )

    return(
        <div className="card-section-container">
            <div className="sub-card-section-container">
                <h1 className="card-head">
                    Classes 
                </h1>
                <p className="card-para">
                    Classes is being started for fresher students enroll now and get access.
                </p>
            </div>
            <div className="card-items-container">
                {isLoading ? loadingStage() : displayData()}
            </div>
        </div>
    )
}

export default CardsSection