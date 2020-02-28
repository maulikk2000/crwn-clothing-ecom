import React, { useState } from "react";
import { SHOP_DATA } from "./shopdata";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

const ShopPage: React.FC = () => {

    const initialState = SHOP_DATA;

    const [shopData, setshopData] = useState(initialState)

    return (
        <div className="shop-page">
            {
                shopData.map(s => (
                    <PreviewCollection key={s.id} title={s.title} items={s.items} ></PreviewCollection>
                ))
            }
        </div>
    );
};

export default ShopPage;