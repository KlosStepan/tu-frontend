import axios from 'axios';
//Endpoint
import Endpoint from './Endpoint';
//TypeScript
import IVersionOfAPI from '../ts/IVersionOfAPI';

async function FetchVersionOfAPI() {
    const service = `v`
    const response = await axios.get<IVersionOfAPI>(Endpoint + `/` + service, { headers: { 'Content-Type': 'application/json' } })
    return response.data
}
export default FetchVersionOfAPI;