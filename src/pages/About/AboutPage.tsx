import classNames from 'classnames';
import React, { useState } from 'react';
import { MapQuest } from '../../shared/MapQuest';

export const AboutPage: React.FC = () => {
    const [city, setCity] = useState<string>("Napoli");

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            setCity(event.currentTarget.value);
            console.log(event.currentTarget.value);
    }

    const isValidCity = city.length > 3;

    const onSubmitHandler  = () => {
        window.alert(city);
    }


    return (
        <div className='container'>

           <form onSubmit={onSubmitHandler}>
                <input type="text" 
                        name="city"
                        className={classNames(
                            "form-control", 
                            { 
                                "is-valid": isValidCity,
                                "is-invalid": !isValidCity
                            })}
                        placeholder="Type a city"
                        value = {city}
                        onChange={onChangeHandler}/>
            </form>

            <button className="btn btn-success" type="submit" 
                disabled={!isValidCity}>OK</button>

            <MapQuest 
               city="Naples, Italy"
               alt = "My Alt"
               onClick = { () => console.log('click')}
               onMouseOver = { () => console.log('mouse over')}
               className='mx-10'
               width="300" 
               height="300"></MapQuest>
        </div>
    )
}



