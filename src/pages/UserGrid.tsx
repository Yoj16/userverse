import { useContext } from "react";
import Card from "../components/card/Card";
import UserContext from "../utils/UserContext";

export const UserGrid = (): JSX.Element => {
    const users = useContext(UserContext);

    return (
        <section>
            <h1>This is the UserGrid Page.</h1>
            {users.map((user) => (
                <Card 
                id={user.id}
                url="image.jpg"
                title={user.name}
                description={user.description}
                size="large"
                />
            ))}
        </section>   
    )
}