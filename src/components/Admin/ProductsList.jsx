import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import './ProductList.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ProductsList = () => {
    const { getProductsData, products, deleteProduct, editProduct } = useContext(AdminContext);

    useEffect(() => {
        getProductsData()
    }, [])

    return (
        <div>
            {products.map(item => (
                <div key={item.id} className="admin-list col-lg-12 mb-5 mt-5">
                    <ul className="list-block col-lg-12" key={item.id}>
                        <img src={item.image}></img>
                        <li>Title: {item.title}</li>
                        <li>Description: {item.description}</li>
                        <li>Brand: {item.brand}</li>
                        <li>Product code: {item.code}</li>
                        <li>Availability: {item.availability}</li>
                        <li>Price: {item.price}</li>
                        <Button
                            variant="contained"
                            color="default"
                            className='delete mt-2'
                            startIcon={<DeleteIcon />}
                            onClick={() => deleteProduct(item.id)}
                        >
                            Delete
                        </Button>
             
                        <Link to="/edit" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                color="default"
                                className='edit mt-2'
                                startIcon={<EditIcon />}
                                onClick={() => editProduct(item.id)}
                            >
                                Edit
                        </Button>
                        </Link>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
