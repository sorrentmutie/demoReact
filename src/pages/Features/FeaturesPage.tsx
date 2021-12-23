import Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { BuildingList } from './components/BuildingList';
import { Building } from './models/Building';

export const FeaturesPage: React.FC = () => {

    const [buildings, setBuildings] = useState<Building[]>([]) ;

    useEffect( () => {
        Axios.get<Building[]>('http://localhost:4001/buildings')
            .then(response => {
                   setBuildings(response.data);
            });
    },[]);

    return (
        <div className="container">
            <h2>Available Buildings</h2>
            <BuildingList buildings={buildings}/>
        </div>
    )
}