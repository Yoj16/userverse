import { FC } from 'react';
import classNames from 'classnames';
import '../card/Card.scss'

type CardProps = {
    id?: number
    title: string
    url?: string
    description?: string
    size?: 'small' | 'medium' | 'large'
    className?: string
}

export const Card: FC<CardProps> = ({ id, title, url, description, size = 'medium', className}) => (
    <div key={id} className={classNames('card-container', size, className)}>
        <div className='image-block'>
            <img src={url} alt={url} className='card-image'/>
        </div>
        <div className='text-block'>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    </div>
)

export default Card;