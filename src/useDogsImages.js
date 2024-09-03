import {useState, useEffect} from 'react'

export const useDogsImages = () => {
    const [dogs, setDogs ] = useState([])

    useEffect( () => {
        const dataFetch = async () => {
        const res = await fetch("https://dog.ceo/api/breed/labrador/images/random/6")
        const data = await res.json()
        setDogs(data.message)
        }
        dataFetch();
    }, [])

    return dogs
}