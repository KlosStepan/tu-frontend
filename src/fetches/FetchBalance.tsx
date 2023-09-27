import axios from 'axios';
//Endpoint
import Endpoint from './Endpoint';
//TypeScript
import IBalance from '../ts/IBalance'
//Typed props
interface ICallProps {
    accountNumber: number | string
}

async function FetchBalance({ accountNumber }: ICallProps) {
    const service = `accounts/${accountNumber}/balance`
    const response = await axios.get<IBalance[]>(Endpoint + `/` + service, { withCredentials: false })
    return response.data
}
export default FetchBalance;