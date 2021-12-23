import classNames from 'classnames';
import React, { useState } from 'react';
import { MapQuest } from '../../shared/MapQuest';


export interface FormsData {
    name: string;
    email: string;
    isCompany?: boolean;
}

export const AboutPage: React.FC = () => {
    const [data, setData] = useState<FormsData>(
        {name: 'Napoli', email: 'pippo@gmail.com'}
    );

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            setData( {
                ...data,
                [event.currentTarget.name] : event.currentTarget.value
            });
    }


    const validateEmail = (email: string) => {
        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              
            // Converting the email to lowercase
        return regexp.test(String(email).toLowerCase());
    }

    const isValidCity = data.name.length > 3;
    const isValidEmail = validateEmail(data.email);
    const isValidForm = isValidCity && isValidEmail;


    const onSubmitHandler  = () => {
        window.alert(JSON.stringify(data));
    }


    return (
        <div className='container'>

           <form onSubmit={onSubmitHandler}>
                <input type="text" 
                        name="name"
                        className={classNames(
                            "form-control", 
                            { 
                                "is-valid": validateEmail,
                                "is-invalid": !isValidCity
                            })}
                        placeholder="Type a city"
                        value = {data.name}
                        onChange={onChangeHandler}/>

                <input type="text" 
                        name="email"
                        className={classNames(
                            "form-control", 
                            { 
                                "is-valid": isValidEmail,
                                "is-invalid": !isValidEmail
                            })}
                        placeholder="Type an email"
                        value = {data.email}
                        onChange={onChangeHandler}/>

                <button className="btn btn-success" type="submit" 
                disabled={!isValidForm}>OK</button>

            </form>


            <MapQuest 
               city={data.name}
               alt = "My Alt"
               onClick = { () => console.log('click')}
               onMouseOver = { () => console.log('mouse over')}
               className='mx-10'
               width="300" 
               height="300"></MapQuest>
        </div>
    )
}



