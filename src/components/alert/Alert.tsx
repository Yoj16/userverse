import { FC } from "react";

type AlertProps = {
  message: string,
  type: string
}

export const Alert: FC<AlertProps> = ({ message, type }) => (
  <div className={`w-100 alert alert-dismissible fade show alert-${type}`} role="alert">
    {message}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div> 
)

export default Alert;