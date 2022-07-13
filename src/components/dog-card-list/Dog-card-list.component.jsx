import './Dog-card-list.styles.css'
import MiniCard from '../mini-card/Mini-card.component'
import Card from '../card/Card.component'

const DogCardList = ({dogs, listAs, openDetails, admin}) => {
  const dogCards = listAs === 'mini-card' ? dogs.map((dog, index) => 
    <MiniCard key={index} img={dog.url} dogIndex={index} name={'Dog Name'} openDetails={openDetails} />)
    : dogs.map((dog, index) => <Card key={index} admin={admin} img={dog.url} name='Dog Name' breed={dog.breeds[0]?.name} lifeSpan={dog.breeds[0]?.life_span} dogIndex={index} openDetails={openDetails} />)

  return (
  <div className='flex card-list'>
      {dogCards}
  </div>
)
}

export default DogCardList