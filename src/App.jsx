import './App.css';
import DogsOverview from './components/dogs-overview/Dogs-overview.component';
import DefaultSelect from './components/default-select/Default-select.component';
import DefaultButton from './components/default-button/Default-button.component';
import { useState, useEffect } from 'react';
import { getBreeds } from './requests/requests';

function App() {
  const [admin, setAdmin] = useState(null);
  const [listAs, setListAs] = useState('table')
  const [breeds, setBreeds] = useState(null);
  const [breedFilter, setBreedFilter] = useState(null);

  const fetchBreeds = async () => {
    const fetchedBreeds = await getBreeds();
    if(fetchedBreeds) setBreeds(fetchedBreeds);
  }

  const handleSelectChange = (event)=>{
    setListAs(event.target.value);
  }

  const loginAdmin = () => {
    setAdmin(true);
  }

  const logoutAdmin = () => {
    setAdmin(null)
  }

  const handleBreedFilterChange = (event) => {
    setBreedFilter(event.target.value);
  }

  const breedSelectOptions = breeds ? breeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>): null

  useEffect(()=>{ fetchBreeds() },[])

  return (
    <div className='app'>
      <div className='flex flex-start filters'>
        <div className='flex flex-start'>
          <DefaultSelect onChange={handleSelectChange}>
            <option value='table'>Table</option>
            <option value='card'>Card</option>
            <option value='mini-card'>Mini Card</option>
          </DefaultSelect>
          <DefaultSelect  onChange={handleBreedFilterChange} notRequiredPlaceholder='SELECT BREED'>
            {  breedSelectOptions }
          </DefaultSelect>
        </div>
        {
          !admin ? 
          <DefaultButton onClick={loginAdmin}>Login As Admin</DefaultButton> 
          : <DefaultButton onClick={logoutAdmin}>Logout Admin</DefaultButton>
        }
      </div>
      <DogsOverview listAs={listAs} breed={breedFilter} admin={admin}/>
    </div>
  );
}

export default App;
