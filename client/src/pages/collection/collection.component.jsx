import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
import data from "../../redux/shop/shop.data";

import './collection.styles.scss';

const CollectionPage = () => {
    
    const { collectionId } = useParams();
    const [items] = useState(data[collectionId].items); 
    
    return(
    <div className="collection-page">
        <h2 className="title">{collectionId}</h2>
        <div className="items">
        {
            items.map(item => (
                <CollectionItem key={item.id} item={item} />
            ))
        }
        </div>
    </div>
)};

export default CollectionPage;


