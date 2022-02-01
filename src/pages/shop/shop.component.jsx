import React from "react";
import { Route, Routes  } from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

    componentDidMount() {
       const { fetchCollectionsStartAsync } = this.props;
       fetchCollectionsStartAsync();
    }

    render() {
        return(
            <div className="shop-preview">
                <Routes>
                    <Route path='/' element={<CollectionOverviewContainer/>} />
                    <Route path="/:collectionId" element={<CollectionPageContainer />} />
                </Routes>
            </div>
)}}; 


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);