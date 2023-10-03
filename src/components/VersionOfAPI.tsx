import React from "react";
//Redux/RTK
import { useSelector } from 'react-redux';
//TypeScript
import IVersionOfAPI from "../ts/IVersionOfAPI";

const VersionOfAPI = () => {
    const vOfAPI: IVersionOfAPI = useSelector((state: any) => state.api.versionOfAPI)
    return (
        <div>
            <span>{`API ${vOfAPI?.version} updated ${vOfAPI?.date}`}</span>
        </div>
    )
}
export default VersionOfAPI;