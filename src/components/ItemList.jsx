import "./ItemList.css";

function ItemList() {
    return (
        <div className="item-list">
            <p>Item List</p>
            <div className="item">
                <div className="item-name">
                    <span>Item Name</span>
                    <div>
                        <input type="text" placeholder="Banner Design" />
                    </div>
                </div>
                <div className="item-quantity">
                    <span>Qty.</span>
                    <div>
                        <input type="text" placeholder="1" />
                    </div>
                </div>
                <div className="item-price">
                    <span>Price</span>
                    <div>
                        <input type="text" placeholder="156.00" />
                    </div>
                </div>
                <div className="item-total">
                    <span>Total</span>
                    <div>
                        <input type="text" placeholder="156.00" />
                    </div>
                </div>
                <div className="item-delete">
                    <img src="/images/icon-delete.svg" alt="icon-delete" />
                </div>
            </div>
            <button className="new-item">+ Add New Item</button>
        </div>
    );
}

export default ItemList;