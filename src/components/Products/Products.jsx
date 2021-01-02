import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Products.css';
import { Grid, IconButton, TextField } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';


const Products = () => {
    const {
        searchProducts,
        addAndDeleteProductInCart,
        checkProductInCart,
        getSearch,
        // products,
        getProductsData,
        addAndDeleteProductInFavorite,
        checkProductInFavorite,
        getFilter,
        totalCount,
        filterProduct } = useContext(AdminContext);

    useEffect(() => {
        getSearch()
        getProductsData()
        getFilter()
    }, [])
    // console.log(filterProduct)

    function pageCount() {
        return totalCount / 3;
    }

    function handlePagination(...args) {
        getSearch('',args[1])
    }


    const history = useHistory() 
    function handleSearch(e){
        let inpValue = e.target.value;
        const search = new URLSearchParams(window.location.search)
        search.set('q', inpValue)
        console.log(search.toString())
        history.replace('?'+search)
        console.log(search);
        getSearch()
    }

 
    return (
        <div className="container">
            {/* <button onClick={(e) => fetchParams('category=', e.target.value)} value="all">All</button>
            <button onClick={(e) => fetchParams('category=', e.target.value) } value="man">Man</button>
            <button onClick={(e) => fetchParams('category=', e.target.value)} value="woman">Woman</button> */}
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <SearchIcon color="action" />
                </Grid>
                <Grid item>
                    <TextField onChange={handleSearch} id="input-with-icon-grid" label="Search product" />
                </Grid>
            </Grid>


            <div className="allWatch">

                {searchProducts.map(item => (

                    <div key={item.id} className='watch-block col-lg-3' key={item.id}>
                        <Link to={`details/${item.id}`}>
                            <img className="image" src={item.image}></img>
                        </Link>

                        <h4 className="title">{item.title}</h4>
                        <div className="d-flex">
                            <IconButton className='cart mt-4 mr-3' onClick={() => addAndDeleteProductInCart(item)} variant="contained" color={checkProductInCart(item.id) ? "primary" : "default"}>
                                <ShoppingCartIcon />
                            </IconButton>
                            <p className="price">${item.price}</p>
                            <IconButton className='heart mt-4 mr-3' onClick={() => addAndDeleteProductInFavorite(item)} variant="contained" color={checkProductInFavorite(item.id) ? "secondary" : "default"}>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination col-12">
            <Pagination style={{margin: 'auto', marginTop: '30px'}} count={Math.ceil(pageCount())} onChange={handlePagination} />
            </div>
        </div>
    );
};

export default Products;

