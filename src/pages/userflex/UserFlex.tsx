import { useContext } from "react";
import Card from "../../components/card/Card";
import { UserContext } from "../../main";
import './UserFlex.scss'

export const UserFlex = (): JSX.Element => {
    const users = useContext(UserContext);

    return (
        <>
            <header>
                <h1 className="header-title">Discover our users</h1>
            </header>
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