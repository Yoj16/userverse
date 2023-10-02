import React from 'react';

type User = {
    id: number
    name: string
    description: string
  }

const usersData = React.createContext<User[]>([]);
export default usersData