import { FC, useState } from 'react';
import '../form/UserForm.scss';
import { ApiUser, NewApiUser, createUser } from '../../services/userService';
import Alert from '../alert/Alert';

export const UserForm: FC = () => {
  const [usernameValue, setUsernameValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState('');
  const [typeAlert, setTypeAlert] = useState('success');

  const handleCreateUser = () => {
    const data: NewApiUser = {
      name: usernameValue,
      address: {
        city: cityValue,
      },
      company: {
        catchPhrase: descriptionValue
      }    
    };

    createUser(data).then((response: ApiUser) => {
      console.log(response);
      setShowAlert(true);
      setMsgAlert("Well done ! The user has been created.");
    }).catch((e) => {
      setShowAlert(true);
      setMsgAlert("Oh no... look's like there is a problem.");
      setTypeAlert('error');
    });
    setUsernameValue('');
    setCityValue('');
    setDescriptionValue('');
  }

  return (
    <form className="form">
      <div className="form-block d-flex flex-column align-items-center">
        <input 
          type="text" 
          className="form-control inp-username mb-3" 
          id="name" 
          placeholder="username"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <input 
          type="text" 
          className="form-control inp-city mb-3" 
          id="city" 
          placeholder="city"
          value={cityValue}
          onChange={(e) => setCityValue(e.target.value)}
        />
        <textarea 
          name="description" 
          id="description" 
          placeholder='Enter a description of the user...' 
          className='form-control mb-3'
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
        ></textarea>
        <button type="button" className="form-control btn btn-light mb-5" id="btn" onClick={handleCreateUser}>Create</button>
        {showAlert ? <Alert message={msgAlert} type={typeAlert}/> : ''} 
      </div>
    </form>
  )
}