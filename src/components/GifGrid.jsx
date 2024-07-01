import { useEffect, useState } from 'react';
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category)

  // //graphql sirve para seleccionar los campos que yo quiero
  // const [images, setImages] = useState([]);
  
  // const getImages =async() =>{
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // }
  // useEffect(() => {
  //  getImages();
  // }, [])

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h4>Cargando...</h4>)
      }
      <div className="car-grid">
          {
            images.map(Image =>(
              <GifItem 
              key={Image.id}
              {...Image}
              />
            ))
          }
      </div>
    </>
  )
}
