import React from 'react'

const Cards = () => {

    const fetchData = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
            const jsonData = await response.json();
            setData(jsonData);
            console.log(data);
        } catch (error) {
            console.log('Error data is not fetched :', error);
        }
    };

    return (
        <div>
        <img src={`${data.results[0].picture.large}`} alt='profile_1' />
        <div className='heading'>
            <h2>Name:{`${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`}</h2>
            <h4>Email: {`${data.results[0].email}`}</h4>
            <h4>Gender: {`${data.results[0].gender}`}</h4>
            <h4>Address: {`${data.results[0].location.city} , ${data.results[0].location.state} , ${data.results[0].location.country}`}</h4>
            <h4>Street: {`${data.results[0].location.street.number} , ${data.results[0].location.street.name}`}</h4>
            <h4>PostCode:  {`${data.results[0].location.postcode}`}</h4>
            <h4>Cell:  {`${data.results[0].cell}`}</h4>
            <h4>Phone:  {`${data.results[0].phone}`}</h4>
            <h4>Registered:  {`${data.results[0].registered.date}`}</h4>
            <h4>Age:  {`${data.results[0].registered.age}`}</h4>
        </div>
        </div>
    )
}

export default Cards
