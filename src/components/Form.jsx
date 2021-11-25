import "./Form.css";

function Form() {
    return (
        <div className="form">
            <div className="go-back">
                <img src="/images/icon-arrow-left.svg" alt="icon-left" />
                <a href="#">go back</a>
            </div>
            <p className="form-edit">Edit <small>#</small><small>XM9141</small></p>
            <p className="bill-from">Bill From</p>
            <div className="sender">
                <div className="street-address">
                    <span>Street Address</span>
                    <div>
                        <input type="text" placeholder="19 Union Terrace" />
                    </div>
                </div>
                <div className="city">
                    <span>City</span>
                    <div>
                        <input type="text" placeholder="London" />
                    </div>
                </div>
                <div className="postcode">
                    <span>Post Code</span>
                    <div>
                        <input type="text" placeholder="E1 3EZ" />
                    </div>
                </div>
                <div className="country">
                    <span>Country</span>
                    <div>
                        <input type="text" placeholder="United Kingdom" />
                    </div>
                </div>
            </div>
            <p className="bill-from">Bill To</p>
            <div className="client">
                <div className="name">
                    <span>Client’s Name</span>
                    <div>
                        <input type="text" placeholder="Alex Grim" />
                    </div>
                </div>
                <div className="email">
                    <span>Client’s Email</span>
                    <div>
                        <input type="text" placeholder="alexgrim@mail.com" />
                    </div>
                </div>
                <div className="street-address">
                    <span>Street Address</span>
                    <div>
                        <input type="text" placeholder="84 Church Way" />
                    </div>
                </div>
                <div className="city">
                    <span>City</span>
                    <div>
                        <input type="text" placeholder="Bradford" />
                    </div>
                </div>
                <div className="postcode">
                    <span>Post Code</span>
                    <div>
                        <input type="text" placeholder="BD1 9PB" />
                    </div>
                </div>
                <div className="country">
                    <span>Country</span>
                    <div>
                        <input type="text" placeholder="United Kingdom" />
                    </div>
                </div>
            </div>
            <div className="data">
                <div className="date">
                    <span>Invoice Date</span>
                    <div>
                        <input type="text" placeholder="21 Aug 2021" />
                    </div>
                </div>
                <div className="terms">
                    <span>Payment Terms</span>
                    <div>
                        <input type="text" placeholder="Net 30 Days" />
                    </div>
                </div>
                <div className="description">
                    <span>Project Description</span>
                    <div>
                        <input type="text" placeholder="Graphic Design" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;