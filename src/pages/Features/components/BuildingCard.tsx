import React from "react";
import { MapQuest } from "../../../shared/MapQuest";
import { Building } from "../models/Building";

export interface BuildingProps {
    building: Building
}

export const BuildingCard: React.FC<BuildingProps> = ({building}) => {
    return (
        <div key={building.id} className="card card-mappa text-white bg-primary mb-3">
            <div className="card-header">{building.title}</div>
            <div className="card-body">
                <h4 className="card-title">{building.city}</h4>
                <p className="card-text">{building.address}</p>
                <MapQuest city={building.city}></MapQuest>
            </div>
        </div>
    );
}