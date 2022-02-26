import React, { useEffect } from "react";
import { Route, Routes  } from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStartAsync }) => {

    useEffect(()=> {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync])

    return(
        <div className="shop-preview">
            <Routes>
                <Route path='/' element={<CollectionOverviewContainer/>} />
                <Route path="/:collectionId" element={<CollectionPageContainer />} />
            </Routes>
        </div>
)}; 


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);