import Axios  from 'axios';
import { useEffect, useState } from 'react';
import { Building } from '../models/Building';

export function useFeatures() {
    const [buildings, setBuildings] = useState<Building[]>([]) ;
    useEffect( () => {
        Axios.get<Building[]>('http://localhost:4001/buildings')
            .then(response => {
                   setBuildings(response.data);
            });
    },[]);
    return {
        buildings
    }
}

