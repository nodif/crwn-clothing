import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import './collection.styles.scss';

const CollectionPage = () => {
    return(
    <div className="collection-page">
        <h2 className="title">COLL {useParams().collectionId} </h2>
    </div>
)};

/*const mapStateToProps = (state, ownProps) => ({   
   collection: selectCollection(ownProps.props.collectionId)(state)
}) */

const mapStateToProps = (state, ownProps) => {
    let params = useParams();
    console.log(params);
    return {
        collection: selectCollection(ownProps.params.collectionId)(state)
    }
  }

export default connect(mapStateToProps)(CollectionPage); 

