import { useState } from "react";
import './Home.scss';
import { TypeAnimation } from 'react-type-animation';

export const Home = (): JSX.Element => {
    const [textColor, setTextColor] = useState('');
    
    return (
        <section className="container">
            <h1 className="home-title" style={{color: textColor}}>
                <TypeAnimation 
                    sequence={[
                        'We create users',
                        1000,
                        () => setTextColor('#087AA3'),
                        'We create universe',
                        1000,
                        () => setTextColor('#08A377'),
                        'Welcome to userverse',
                        2000,
                        () => {
                        console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    omitDeletionAnimation={true}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                />
            </h1>
        </section>
    )
}
    