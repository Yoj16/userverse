import React from 'react';

type User = {
    id: number
    name: string
    description: string
  }

const UserContext = React.createContext<User[]>([]);
export default UserContext