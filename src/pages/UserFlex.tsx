import { useContext } from "react";
import Card from "../components/card/Card";
import usersData from "../utils/UserContext";

export const UserFlex = (): JSX.Element => {
    const users = useContext(usersData);

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