import {useState} from 'react';
// import AddCategory from './components/AddCategory';
// import GifGrid from './components/GifGrid';
import {AddCategory, GifGrid} from './components';

const GiftExpertApp=() =>{
    const [categories, setCategories] = useState(['Minecraft', 'GTA V online'])
    
    const handleAddCategory = (event, formData)=> {
        event.preventDefault(); //evita que se recargue la pagina
        const newCategory = formData.category;
        if (newCategory.trim().length<=1) return;
        //ver si ya existe
        if(categories.find(category => category.toLowerCase() ===newCategory.toLowerCase())) return;
        setCategories([formData.category,...categories])
        
    }


  return (
    <>
    <h1>GiftExpertApp</h1>
    {
        <AddCategory
            handleAddCategory={handleAddCategory}
        />
    }
    {
        categories.map((category) => (
            <GifGrid
                key={category}
                category={category}
            />
        ))
    }
    {
    // <ol>
    //     {
    //         categories.map(category => <li key={category}>{category}</li>)
    //     }
    // </ol>
    }
    </>
  )
}

export default GiftExpertApp