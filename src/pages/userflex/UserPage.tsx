import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { filterUsers, getPictures, getUsers, mapAndSaveUsers } from '../../services/userService';
import './UserPage.scss'
import { useLocation } from "react-router-dom";

type User = {
    id: number
    name: string
    description: string
    picture: string
    alt: string
  }

export const UserPage = (): JSX.Element => {
    const [users, setUsers] = useState<User[]>([]);
    const location = useLocation();

    const fetching = () => {
        getUsers().then((users) => {
            getPictures().then((pictures) => {
            if (location.state !== null && (location.state.userValue || location.state.cityValue)) {
                const filters = {
                    userValue: location.state.userValue,
                    cityValue: location.state.cityValue
                }
                setUsers(filterUsers(users, pictures, filters));
            } else {
                setUsers(mapAndSaveUsers(users, pictures));
            }
            console.log(mapAndSaveUsers(users, pictures));
            })
        })
    }

    const clearNavigate = () => {
        location.state = {}
        fetching();
    }
    
    useEffect(() => {
        fetching();
    }, []);

    return (
        <>
            <header>
                <h1 className="header-title">Discover our users</h1>
                <button type="button" className="btn btn-light" onClick={clearNavigate}>Delete filters</button>
            </header>
            {/* section-card-grid */}
            <section className="section-card-flex">
                {users.map((user) => (
                    <Card 
                    id={user.id}
                    title={user.name}
                    url={user.picture}
                    alt={user.alt}
                    key={user.id}
                    description={user.description}
                    />
                ))}
            </section>
        </>
    )
}