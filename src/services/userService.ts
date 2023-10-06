import { useState } from "react"

type User = {
    id: number
    name: string
    description: string
  }
  
  type ApiUser = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
  }

export const getUsers = async (): Promise<ApiUser[]> => {
    const response =  await fetch('https://jsonplaceholder.typicode.com/users')
      return response.json();
};

export const mapAndSaveUsers = (users: ApiUser[]): User[] => {
    return users.map(user => ({
        id: user.id, 
        name: user.name, 
        description: user.company.catchPhrase
    }))
}