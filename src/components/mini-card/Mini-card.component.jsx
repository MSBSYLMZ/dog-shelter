import './Mini-card.styles.css'

const MiniCard = ({img, name, dogIndex, openDetails}) => {
  return (
    <div className='mini-card' onClick={()=>{openDetails(dogIndex)}}>
        <div>{name}</div>
        <img src={img} alt="" />
    </div>
  )
}

export default MiniCard