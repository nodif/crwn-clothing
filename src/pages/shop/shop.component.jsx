import React from "react";
import { Route, Routes  } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({collections}) => {

    return(
        <div className="shop-preview">
            <Routes>
                <Route path='/' element={<CollectionOverview/>} />
                <Route path="/:collectionId" element={<CollectionPage />} />
            
            </Routes>
        </div>
)}; 

export default ShopPage;