import React from 'react'
import { useState, useEffect } from 'react'

const IdCard = () => {


    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(data => {
                setUserData(data.results);
            })
            .catch(error => {
                console.log('Error Data can not be fetched : ', error);
            })
    }, []);


    return (
        <>
            <div className='container'>
                {userData.length > 0 ? (
                    userData.map(user => (
                        <div className='box' key={user.login.uuid}>
                            <img src='user.picture.large' alt='user_image' />
                            <div className='heading'>
                                <h2>Name:{user.name.first} {user.name.last}</h2>
                                <h4>Email: {user.email}</h4>
                                <h4>Gender: {user.gender}</h4>
                                <h4>Address: {user.location.city}  {user.location.state} {user.location.country}</h4>
                                <h4>Street: {user.location.street.number} {user.location.street.name}</h4>
                                <h4>PostCode:  {user.location.postcode}</h4>
                                <h4>Cell:  {user.cell}</h4>
                                <h4>Phone:  {user.phone}</h4>
                                <h4>Registered:  {user.registered.date}</h4>
                                <h4>Age:  {user.registered.age}</h4>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Please wait..............</p>
                )}
           </div>
        </>
    )
}

export default IdCard
