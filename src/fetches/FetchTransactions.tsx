import axios from 'axios';
//Endpoint
import Endpoint from './Endpoint';
//TypeScript
import ITransaction from '../ts/ITransaction'
//Typed props
interface ICallProps {
    accountNumber: number | string
}

async function FetchTransactions({ accountNumber }: ICallProps) {
    const service = `accounts/${accountNumber}/transactions`
    const response = await axios.get<ITransaction[]>(Endpoint + `/` + service, { headers: { 'Content-Type': 'application/json' } })
    return response.data
}
export default FetchTransactions;