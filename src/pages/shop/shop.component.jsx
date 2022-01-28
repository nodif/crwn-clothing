import React from "react";
import { Route, Routes  } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect'; 
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

class ShopPage extends React.Component {

    componentDidMount() {
       const { fetchCollectionsStartAsync } = this.props;
       fetchCollectionsStartAsync();
    }

    render() {
        return(
            <div className="shop-preview">
                <Routes>
                    <Route path='/' element={<CollectionOverview/>} />
                    <Route path="/:collectionId" element={<CollectionPage />} />
                </Routes>
            </div>
)}}; 

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionsFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);