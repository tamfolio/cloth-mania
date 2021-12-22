import React from 'react';

import './preview-collection.css';

import CollectionItem from '../Collection-item/Collection-item';

const CollectionPreview = ({ title, items, id } ) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview