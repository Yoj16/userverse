import { useContext } from "react";
import Card from "../../components/card/Card";
import { UserContext } from "../../main";
import "./UserGrid.scss";

export const UserGrid = (): JSX.Element => {
    const users = useContext(UserContext);

    return (
        <>
            <header>
                <h1>This is the UserGrid Page.</h1>
            </header>
            <section className="section-card">
            {users.map((user) => (
                <Card 
                id={user.id}
                title={user.name}
                description={user.description}
                className="card-item"
                />
            ))}
            </section>
        </>
    )
}