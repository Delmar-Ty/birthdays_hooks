import './person.css';

const Person = ({people, key}) => {
    const {name, age} = people;
    const seed = Math.round(Math.random() * 100);
    return (
        <div className='person-container' key={key}>
            <div className='avatar'>
                <img className='img' src={`https://avatars.dicebear.com/api/croodles-neutral/${seed}.svg`} alt='something'></img>
            </div>
            <div className='person-info'>
                <h2 className='name'>{name}</h2>
                <p className='age'>{age} Years Old</p>
            </div>
        </div>
    );
}

export default Person;