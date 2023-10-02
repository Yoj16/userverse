import React, { FC } from 'react';

type CardProps = {
    id: number
    title: string
    picture?: string
    description?: string
}

export const Card: FC<CardProps> = ({ id, title, picture, description }) => {
    return (
        <div key={id} className='container'>
            <div className='image-block'>
                <img src={picture} alt={picture} className='card-image'/>
            </div>
            <div className='text-block'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Card;