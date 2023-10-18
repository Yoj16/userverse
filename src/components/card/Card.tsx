import { FC } from 'react';
import classNames from 'classnames';
import '../card/Card.scss'

type CardProps = {
  id?: number
  title: string
  url?: string
  alt?: string
  city: string
  description?: string
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export const Card: FC<CardProps> = ({ id, title, url, description, city, alt, size = 'medium', className}) => (
  <div className={classNames('custom-card-container', size, className)}>
    <div className='image-block'>
      <img src={url} alt={alt} className='card-image'/>
    </div>
    <div className='text-block'>
      <h3>{title}</h3>
      {city && <p>{city}</p>}
      {description && <p>{description}</p>}
    </div>
  </div>
)

export default Card;