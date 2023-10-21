import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
    return (
        <div className="new-collection">
            <h1>NEW COLLECTION</h1>
            <hr/>
            <div class="collection">
                {
                    new_collection.map((item, i) => {
                        return <Item key={i} image = {item.image} id={item.id} name={item.name} old_price={item.price} />
                    })
                }
            </div>
        </div>
    )
}

export default NewCollections
