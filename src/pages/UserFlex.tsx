import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";

type User = {
    id: number
    name: string
    description: string
}

type ApiUser = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export const UserFlex = (): JSX.Element => {
    const [users, setUsers] = useState<User[]>([]);

    const mapAndSaveUsers = (users: ApiUser[]): void => {
        const mappedUser = users.map(user => ({
            id: user.id, 
            name: user.name, 
            description: user.company.catchPhrase
        }))
        setUsers(mappedUser);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(mapAndSaveUsers)
    }, []);
    

    return (
        <header>
            <h1>This is the UserFlex Page.</h1>
            {users.map((user) => (
                <Card 
                id={user.id}
                key={user.id}
                picture="image.jpg"
                title={user.name}
                description={user.description}
                />
            ))}
        </header>
    )
}