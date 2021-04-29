import { stringify } from "node:querystring"

let token = 'eb8f01b8461411bb57754d0fe1d38d79eebb691622e76fad'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://ds-car-inventory.herokuapp.com/api/cars`, {
            method: `GET`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
        if (!response.ok) {
            console.log('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://ds-car-inventory.herokuapp.com/api/cars`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            console.log('Failed to Create new Car Data')
        }
        return await response.json()
    },
    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://ds-car-inventory.herokuapp.com/api/cars/${id}`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        console.log('this is updating')
        if (!response.ok) {
            console.log('Failed to Update Car Data')
        }
    },

    delete: async (id: string) => {
        const response = await fetch(`https://ds-car-inventory.herokuapp.com/api/cars/${id}`, {
            method: `DELETE`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}