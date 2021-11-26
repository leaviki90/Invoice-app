import { useDebugValue, useState } from "react";
import "./Form.css";

function Form({ formId }) {

    const [senderStreet, setSenderStreet] = useState('');
    const [senderCity, setSenderCity] = useState('');
    const [senderPostCode, setSenderPostCode] = useState('');
    const [senderCountry, setSenderCountry] = useState('');
    const [clientStreet, setClientStreet] = useState('');
    const [clientCity, setClientCity] = useState('');
    const [clientPostCode, setClientPostCode] = useState('');
    const [clientCountry, setClientCountry] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientMail, setClientMail] = useState('');
    const [date, setDate] = useState('');
    const [terms, setTerms] = useState('');
    const [description, setDescription] = useState('');
    const [items, setItems] = useState([]);

    return (
        <div className="form">
            <p className="form-edit">
                {
                    formId ? <span>Edit <small>#</small><small>{formId}</small></span> : 'New Invoice'
                }

            </p>
            <p className="bill-from">Bill From</p>
            <div className="sender">
                <div className="street-address">
                    <span>Street Address</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="city">
                    <span>City</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="postcode">
                    <span>Post Code</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="country">
                    <span>Country</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <p className="bill-from">Bill To</p>
            <div className="client">
                <div className="name">
                    <span>Client’s Name</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="email">
                    <span>Client’s Email</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="street-address">
                    <span>Street Address</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="city">
                    <span>City</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="postcode">
                    <span>Post Code</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="country">
                    <span>Country</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="data">
                <div className="date">
                    <span>Invoice Date</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="terms">
                    <span>Payment Terms</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="description">
                    <span>Project Description</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;