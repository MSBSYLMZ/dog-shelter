import './Dogs.overview.styles.css'

import { useEffect, useState } from "react"
import { getAvailableDogs } from "../../requests/requests";
import DogDetails from "../dog-details/Dog-details.component";
import DogTable from "../dog-table/Dog-table.component";
import DogCardList from "../dog-card-list/Dog-card-list.component";
import { startTransition } from "react";

const LIMIT = 15


const DogsOverview = ({listAs, breed, admin}) => {
    const [dogs, setDogs] = useState([]);
    const [page, setPage] = useState(0);
    const [showDogDetails, setShowDogDetails] = useState(false);
    const [dogDetails , setDogDetails ] = useState(null);

    const fetchDogs = async () =>{
        const response = await getAvailableDogs(LIMIT, page, breed);
        if(response) setDogs(response);
    }

    const nextPage = () => {
        setPage((preValue) => preValue + 1);
    }

    const prePage = () => {
        setPage((preValue) => preValue - 1);
    }
 
    const openDetails = (dogIndex) => {
    setDogDetails(dogs[dogIndex]);
      startTransition(()=>{
        setShowDogDetails(true)
      })
    }

    const closeDetails = () =>{
        setShowDogDetails(false);
    }

    const dogList = listAs === 'table' ? <DogTable tableContent={dogs} openDetails={openDetails}></DogTable> 
        : <DogCardList dogs={dogs} openDetails={openDetails} listAs={listAs} admin={admin}></DogCardList> 

    useEffect(()=>{ fetchDogs() },[breed, page])

    useEffect(()=>{ setPage(0) },[breed])

    return (
        <div>
            {
             showDogDetails ? <DogDetails details={dogDetails} closeDetails={closeDetails} admin={admin}/> : null
            }
            {
                dogList
            }
            <div className="pagination">
                {page > 0 ? <div onClick={prePage} className="pagination-button">{page }</div> : null}
                
                <div className="pagination-button active-pagination-button">{page + 1}</div>
                {
                    dogs.length === LIMIT ? 
                    <div onClick={nextPage} className="pagination-button">{page + 2}</div> : null
                }
            </div>
        </div>
    )
}

export default DogsOverview