import { useState } from "react"

type User = {
  id: number
  name: string
  city: string
  description: string
  picture: string
  alt: string
}

export type ApiUser = {
  id: number
  name: string
  username?: string
  email?: string
  address: {
    street?: string
    suite?: string
    city: string
    zipcode?: string
    geo?: {
      lat?: string
      lng?: string
    }
  },
  phone?: string
  website?: string
  company: {
    name?: string
    catchPhrase: string
    bs?: string
  }
}

export type NewApiUser = {
  name: string
  address: {
    city: string
  },
  company: {
    catchPhrase: string
  }
}

type ApiPicture = {
  id: string
  author: string
  width: string
  height: string
  url: string
  download_url: string
}

type FilterUsers = {
  userValue: string
  cityValue: string
}

export const getUsers = async (): Promise<ApiUser[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json();
};

export const createUser = async(data: NewApiUser): Promise<ApiUser> => {
  const response  = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  return response.json();
}

export const getPictures = async (): Promise<ApiPicture[]> => {
  const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10')
  return response.json();
}

export const mapAndSaveUsers = (users: ApiUser[], pictures: ApiPicture[]): User[] => (
  users.map((user, index) => ({
    id: user.id, 
    name: user.name, 
    city: user.address.city,
    description: user.company.catchPhrase,
    picture: pictures[index].download_url,
    alt: pictures[index].author
  }))
)
  
export const filterUsers = (users: ApiUser[], pictures: ApiPicture[], filters: FilterUsers): User[] => {
  const filterUsers: User[] = [];
  
  users.forEach((user: ApiUser, index: number) => {
    const nameLowerCase = user.name.toLowerCase();
    const cityLowerCase = user.address.city.toLowerCase();
    const filterNameLowerCase = filters.userValue.toLowerCase();
    const filterCityLowerCase = filters.cityValue.toLowerCase();
    if(nameLowerCase.includes(filterNameLowerCase) && cityLowerCase.includes(filterCityLowerCase)) {
      filterUsers.push({
        id: user.id, 
        name: user.name, 
        city: user.address.city,
        description: user.company.catchPhrase,
        picture: pictures[index].download_url,
        alt: pictures[index].author
      })
    }
  });
  
  return filterUsers;
}
