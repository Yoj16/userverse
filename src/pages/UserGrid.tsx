import { useContext } from "react";
import Card from "../components/card/Card";
import usersData from "../utils/UserContext";

export const UserGrid = (): JSX.Element => {
    const users = useContext(usersData);

    return (
        <header>
            <h1>This is the UserGrid Page.</h1>
            {users.map((user) => (
                <Card 
                id={user.id}
                key={user.id}
                url="image.jpg"
                title={user.name}
                description={user.description}
                size="large"
                />
            ))}
        </header>
    )
}