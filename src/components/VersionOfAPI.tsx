import React from "react";
//TypeScript
import IVersionOfAPI from "../ts/IVersionOfAPI";
//Redux/RTK
import { useSelector } from 'react-redux';

const VersionOfAPI = () => {
    const vOfAPI: IVersionOfAPI = useSelector((state: any) => state.api.versionOfAPI)
    return (
        <div>
            <span>{`API ${vOfAPI?.version} updated ${vOfAPI?.date}`}</span>
        </div>
    )
}
export default VersionOfAPI;