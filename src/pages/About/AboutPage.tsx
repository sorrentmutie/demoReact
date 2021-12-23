import React from 'react';
import { MapQuest } from '../../shared/MapQuest';

export const AboutPage: React.FC = () => {
    return (
        <div className='container'>
            <MapQuest 
               city="Naples, Italy"
               alt = "My Alt"
               onClick = { () => console.log('click')}
               onMouseOver = { () => console.log('mouse over')}
               className='p-5'
               width="300" 
               height="300"></MapQuest>
        </div>
    )
}



