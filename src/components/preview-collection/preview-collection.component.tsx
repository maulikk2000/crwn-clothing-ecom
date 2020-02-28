import React, { FC } from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

interface ICollection {
    title: string;
    items: any[];
}

const PreviewCollection: FC<ICollection> = ({ title, items }) => {

    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        //one way of doing things
                        // .map(item => (

                        //     <CollectionItem key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl}></CollectionItem>
                        // ))
                        //better way of passing params
                        .map(({ id, ...otherItemProps }) => (

                            <CollectionItem key={id} {...otherItemProps} ></CollectionItem>
                        ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;