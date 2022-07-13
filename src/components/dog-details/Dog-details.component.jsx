import './Dog-details.styles.css'
import { useEffect, useRef } from "react";

const DogDetails = ({details, closeDetails, admin}) => {
    const detailsRef = useRef(null)

    const handleDocumentClick = (event) =>{
        if(detailsRef.current && !detailsRef.current.contains(event.target)){
          closeDetails()
        }
      }    

    useEffect(() => {
    document.addEventListener('click',handleDocumentClick);
    return () => {
        document.removeEventListener('click', handleDocumentClick);
    }
    },[detailsRef])

  return (
    <div className='dog-details-layout'>
        <div className="dog-details" ref={detailsRef}>
            <img src={details.url} alt="" />
            <div className="detail"><span>Name: </span>Dog Name</div>
            {
                details.breeds?.[0] ? 
                <>
                <div className="detail"><span>Breed: </span> {details.breeds[0].name}</div>
                <div className="detail"><span>Height: </span> Imperial:{details.breeds[0].height.imperial} Metric: {details.breeds[0].height.metric}</div>
                <div className="detail"><span>Weight: </span> Imperial:{details.breeds[0].weight.imperial} Metric: {details.breeds[0].weight.metric}</div>
                <div className="detail"><span>Life Span: </span> {details.breeds[0].life_span}</div>
                </> : null
            }
            {admin ? <div className='detail'><span>Timeline: </span>Dog found roaming the streets on 5th June 2021. Joined Animal Shelter on 6th June 2021</div>: null}
        </div>
    </div>
  )
}

export default DogDetails