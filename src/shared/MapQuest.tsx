import React from "react";
import { NavLink } from "react-router-dom";

export interface MapQuestProps {
    city: string
}

// 

export const MapQuest: 
   React.FC<MapQuestProps & React.ImgHTMLAttributes<HTMLImageElement>> = 
   ({city, width = 400, height= 400, ...rest}) => {
    const key = '2yQuTXXx8Mvpn9AdLyW4k4vGUC0uU2Ul';
    const baseUrl = 'https://www.mapquestapi.com/staticmap/v5/map?';
    const mapUrl = 
    `${baseUrl}key=${key}&size=${width},${height}@2x&center=${city}`;
    return (
        <div>
            <div className="button-margin">
                <NavLink className="btn btn-success" to="/"> Back</NavLink>
            </div>
            <img width="100%" src={mapUrl} alt="Mappa" {...rest}/>
        </div>
    );
}









