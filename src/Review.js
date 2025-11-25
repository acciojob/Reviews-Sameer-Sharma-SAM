import React, { useState } from 'react'
import reviews from './data';

const Review = () => {
   
        const [index, setIndex] = useState(0);
        const { id, name, job, image, text } = reviews[index];

        const checkIndex = (number) => {
            if (number > reviews.length - 1) return 0
            if (number < 0) return reviews.length - 1

            return number;
        }
    

    const nextPerson = () => {
        setIndex((prev) => checkIndex(prev + 1))
    }
    const prevPerson = () => {
        setIndex((prev) => checkIndex(prev - 1))
    }

    const randomePerson = () => {
        let randomIndex = Math.floor(Math.random() * reviews.length - 1);
        if (randomIndex === index) {
            randomIndex = index + 1
        }

        setIndex(checkIndex(randomIndex))
    }


    return (
        <artical className='review'>
            <img src={image} alt={name} className='person-img' />
            <h4 className='author' id={`author-${id}`}>{name}</h4>

            <p className='job'>{job}</p>
            <p className='text'>{text}</p>
            <div>
                <button className='prev-btn' onClick={prevPerson}>Previous</button>
                <button className='next-btn' onClick={nextPerson}>Next</button>
            </div>

            <button className='random-btn' onClick={randomePerson}>suprise me</button>
        </artical>
    )
}

export default Review