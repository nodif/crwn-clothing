import React from "react";
import { Route, Routes  } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { firestore, convertCollectionsSnapshotToMaps } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

    state = {
        loading: true
    }
   
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMaps(snapshot);
            updateCollections(collectionMap)
            this.setState({loading: false})
        });
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

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap =>
        dispatch(updateCollections(collectionMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);