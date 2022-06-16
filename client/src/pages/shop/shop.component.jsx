import React, { useEffect } from "react";
import { Route, Routes  } from "react-router-dom";
import CollectionPage from './shop.component';
import CollectionOverview from './shop.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStartAsync }) => {

    useEffect(()=> {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync])

    return(
        <div className="shop-preview">
            <Routes>
                <Route path='/' element={<CollectionOverview/>} />
                <Route path="/:collectionId" element={<CollectionPage />} />
            </Routes>
        </div>
)}; 


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);