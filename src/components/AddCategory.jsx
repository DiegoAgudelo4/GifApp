import {useState} from 'react'

export const AddCategory = ({handleAddCategory}) => {
    const [formData, setFormData] = useState({category: ''})

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };
    const handleSubmit = (event) =>{
        setFormData({category: ''})
        handleAddCategory(event, formData)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            required
            id='id'
            name='category'
            placeholder='Ingrese categoría'
            value={formData.category}
            onChange={handleChange}
            
        />

    </form>
  )
}
