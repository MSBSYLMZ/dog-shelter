import './Mini-card.styles.css'

const MiniCard = ({img, name, dogIndex, openDetails}) => {
  return (
    <div className='mini-card' onClick={()=>{openDetails(dogIndex)}}>
        <div className='dog-name'>{name}</div>
        <img src={img} alt="" />
    </div>
  )
}

export default MiniCard