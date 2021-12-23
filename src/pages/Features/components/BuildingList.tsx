import React from "react";
import { MapQuest } from "../../../shared/MapQuest";
import { Building } from "../models/Building";
import { BuildingCard } from "./BuildingCard";

export interface BuildingListProps {
    buildings: Building[]
}

export const BuildingList: React.FC<BuildingListProps> = ({buildings}) => {
    return (
            <div> 
            {
                buildings.map( (building: Building) => {
                    return (
                        <BuildingCard building={building}/>
                    )
                })
            }
            </div>
    );
}