const API_URL = 'https://api.thedogapi.com/v1'
const API_KEY = '73cf1b82-59f8-4ac6-afb3-40a4801eaf60';
const DEFAULT_LIMIT = 15;
const DEFAULT_PAGE = 0;
const DEFAULT_BREED = null;
const DEFAULT_REQUEST_OPTIONS = {
    headers:{
        "x-ap-key": API_KEY
    }
}

async function getBreeds(){
    try {
        const response = await fetch(`${API_URL}/breeds`, DEFAULT_REQUEST_OPTIONS)
        return await response.json();
    } catch (error) {
        return null;
    }
}

async function getAvailableDogs(limit = DEFAULT_LIMIT, page = DEFAULT_PAGE,breed=DEFAULT_BREED){
    try {
        const url =  `${API_URL}/images/search?limit=${limit}&page=${page}&order=desc&${breed && breed.length > 0 ? 'breed_ids=' + breed : ''}` 
        const response = await fetch(url,DEFAULT_REQUEST_OPTIONS);
        return await response.json();
    } catch (error) {
        return null;
    }
}

async function getDogById(id){
    try {
        const response = await fetch(`${API_URL}/images/${id}`, DEFAULT_REQUEST_OPTIONS)
        return await response.json();
    } catch (error) {
        return null;
    }
}

export {
    getBreeds,
    getAvailableDogs,
    getDogById
}