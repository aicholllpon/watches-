import React, { useContext, useState } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import './Admin.css';
import WatchIcon from '@material-ui/icons/Watch';

const Admin = () => {
    const { addNewProduct } = useContext(AdminContext);
    const [product, setProduct] = useState({
        image: "",
        title: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        availability: "",
        code: ""
    })

    function handleInputsValue(e) {
        let obj = {
            ...product,
            [e.target.name]: e.target.value
        }
        setProduct(obj)
    }

    function handleClick() {
        if (
            !product.image.trim() || 
            !product.title.trim() || 
            !product.description.trim() || 
            !product.price.trim() || 
            !product.category.trim() ||
            !product.brand.trim() ||
            !product.code.trim() ||
            !product.availability) {
            alert('Заполните поля')
            return
        }
        addNewProduct(product)
        const newObj = {
            image: '',
            title: '',
            description: '',
            price: '',
            category: '',
            brand: '',
            availability: '',
            code: ''
        }
        setProduct(newObj)
    }

    return (
        <div className="background">
            <div className="addProduct col-lg-4 mt-5">
                <div className="inputs">
                    <WatchIcon style={{ fontSize: "40px", marginBottom: "20px", transform: 'rotate(45deg)' }} />
                    <h3>Add product</h3>
                    <input
                        name="image"
                        onChange={handleInputsValue}
                        placeholder="Image"
                        value={product.image}
                    />
                    <input
                        name="title"
                        onChange={handleInputsValue}
                        type="text"
                        placeholder="Name"
                        value={product.title}
                    />
                    <input
                        name="description"
                        onChange={handleInputsValue}
                        type="text"
                        placeholder="Description"
                        value={product.description}
                    />
                    <input
                        name="price"
                        onChange={handleInputsValue}
                        type="text"
                        placeholder="Price"
                        value={product.price}
                    />
                    <input
                        name="brand"
                        onChange={handleInputsValue}
                        placeholder="Brand"
                        value={product.brand}
                    />
                    <input
                        name="code"
                        onChange={handleInputsValue}
                        placeholder="Product Code"
                        value={product.code}
                    />
                    <select onChange={handleInputsValue} name="availability" value={product.availability}>
                        <option></option>
                        <option>Available</option>
                        <option>Not available</option>
                    </select>

                    <select onChange={handleInputsValue} name="category" value={product.category}>
                        <option selected></option>
                        <option>Man</option>
                        <option>Woman</option>
                    </select>

                    <button onClick={handleClick} variant="outlined" href="#outlined-buttons" className='btn mb-3' style={{ marginTop: '20px' }}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admin;