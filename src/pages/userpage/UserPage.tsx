import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { filterUsers, getPictures, getUsers, mapAndSaveUsers } from '../../services/userService';
import './UserFlex.scss'
import './UserGrid.scss'
import { useLocation } from "react-router-dom";
import { Toggle } from "../../components/toggle/Toggle";

type User = {
  id: number
  name: string
  description: string
  picture: string
  alt: string
}

export const UserPage = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [isChecked, setIsChecked] = useState(false);
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

  const checkChange = () => {
    setIsChecked(!isChecked);
  }
    
  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <section className="section-top">
        <h1 className="header-title">Discover our users</h1>
        <div className="filter-container">
          <button 
            type="button" 
            className="btn btn-light" 
            onClick={clearNavigate}
          >
            Delete filters
          </button>
          <Toggle checkChange={checkChange} isChecked={isChecked}/>
        </div>
      </section>
      <section className={"section-card-" + `${isChecked ? "grid" : "flex"}`}>
        {users.map((user) => (
          <Card 
            id={user.id}
            title={user.name}
            url={user.picture}
            alt={user.alt}
            key={user.id}
            description={user.description}
            className={isChecked ? "card-grid" : ""}
          />
        ))}
      </section>
    </>
  )
}