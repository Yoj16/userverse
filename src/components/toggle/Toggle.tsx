import '../toggle/Toggle.scss';

type ToggleProps = {
  checkChange: React.ChangeEventHandler
  isChecked: boolean
}

export const Toggle = ({checkChange, isChecked}: ToggleProps): JSX.Element => {
  return (
    <div className="form-check form-switch">
      <input 
        className="form-check-input" 
        type="checkbox" 
        role="switch" 
        id="flexSwitchCheckDefault" 
        checked={isChecked} 
        onChange={checkChange}/>
      <label 
        className="form-check-label" 
        htmlFor="flexSwitchCheckDefault"
      >
        This page is set with CSS {isChecked ? "grids" : "flexbox"}
      </label>
    </div>
  )
}