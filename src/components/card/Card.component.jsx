import './Card.styles.css'

const Card = ({img, name, breed, lifeSpan, openDetails, dogIndex, admin}) => {
  return (
    <div className='card' onClick={()=>{openDetails(dogIndex)}}>
        <div>{name}</div>
        <img src={img} alt="" />
        {
            breed ? <div><span>Breed: </span>{breed}</div> : null
        }
        {
            lifeSpan ? <div><span>Life Span: </span>{lifeSpan}</div> : null
        }
        {
          admin ? <div><span>Only Admin Properties</span></div> : null
        }
    </div>
  )
}

export default Card