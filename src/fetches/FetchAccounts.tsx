import axios from 'axios';
//Endpoint
import Endpoint from './Endpoint';
//TypeScript
import IAccount from '../ts/IAccount'

async function FetchAccounts() {
    const service = `accounts`
    const response = await axios.get<any[]>(Endpoint + `/` + service, { headers: { 'Content-Type': 'application/json' } })
    return response.data
}
export default FetchAccounts;