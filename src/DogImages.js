import { useDogsImages } from "./useDogsImages"

export const DogImages = (props) => {

    const dogs = useDogsImages()
    return dogs.map((dog, index) => (
        <img src={dog} key={index} />
    ))
}