import { useContext } from "react";
import Card from "../components/card/Card";
import { UserContext } from "../main";

export const UserFlex = (): JSX.Element => {
    const users = useContext(UserContext);

    return (
        <>
            <header>
                <h1>This is the UserFlex Page.</h1>
            </header>
            <section>
            {users.map((user) => (
                <Card 
                id={user.id}
                title={user.name}
                description={user.description}
                />
            ))}
            </section>
        </>
    )
}