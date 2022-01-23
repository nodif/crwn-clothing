import React from "react";
import { useParams, useMatch } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection, selectCollections, selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

import './collection.styles.scss';

var idi = 0;

const CollectionPage = ({collection}) => {
    
    idi = useParams().collectionId;
    console.log("test" + idi);
    if(!collection) {
        return null;
    }
  
    const { title, items } = collection;
    console.log(collection);
    
    
    return(
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
        {
            items.map(item => (
                <CollectionItem key={item.id} item={item} />
            ))
        }
        </div>
    </div>
)};


const mapStateToProps = (state) => {
    return {
        collection: selectCollection(idi)(state)
     }
}


export default connect(mapStateToProps)(CollectionPage); 


