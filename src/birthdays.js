import './birthdays.css';
import Person from './person';
import data from './data';
import { useState } from 'react';

const Birthdays = () => {
    const [people, setPeople] = useState(data);
    return (
        <div className='main'>
            <h1 className='title'>{people.length} Birthdays</h1>
            <div className='container'>
                {people.map((stuff, index) => {
                    return <Person people={stuff} key={index}/>;
                })}
            </div>
            <button className='btn' onClick={() => {setPeople([])}}>Clear</button>
        </div>
    );
}

export default Birthdays;