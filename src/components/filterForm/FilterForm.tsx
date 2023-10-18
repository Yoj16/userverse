import { FC, useState } from 'react';
import '../filterForm/FilterForm.scss';
import { useNavigate } from 'react-router-dom';

type FilterFormProps = {
    username: string
    city: string
}

export const FilterForm: FC<FilterFormProps> = ({}) => {
  const [userValue, setUserValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const navigate = useNavigate();

  const searchUser = () => {
    debugger
    navigate('/users', {state: {userValue: userValue, cityValue: cityValue}});
  }

  return (
    <form method="GET" action="" className="form-filter">
      <div className="d-inline-flex mb-3">
        <input 
          type="text" 
          className="form-control inp-username mx-2" 
          id="username" 
          placeholder="username"
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}/>
        <input 
          type="text" 
          className="form-control inp-city mx-2" 
          id="city" 
          placeholder="city"
          value={cityValue}
          onChange={(e) => setCityValue(e.target.value)}
          />
        <button type="button" className="form-control btn btn-light mx-2" id="btn" onClick={searchUser}>Search</button>
      </div>
    </form>
  )
}