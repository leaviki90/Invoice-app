import "./InvoiceCard.css"
import { Link } from "react-router-dom";

const InvoiceCard = (props) => {
    return (
        <Link to={`/invoice/${props.id}`} className="invoice-card">
            <div className="invoice-card-id pb-24 text-start">
                <p>#<span id="profileID">{props.id}</span></p>
            </div>
            <p className="invoice-card-name pb-24 text-end" id="profileName">{props.clientName}</p>
            <div className="invoice-card-due text-start">
                <p>Due <span id="profileDue">{props.paymentDue}</span></p>
            </div>

            <div className="invoice-card-total text-start">
                <p>£ <span id="profileTotal">{props.total}</span></p>
            </div>
            <div className={`invoice-card-status ${props.status}`}>
                <span></span><span id="invoiceStatus">{props.status}</span>
            </div>
            <div className="invoice-card-arrow d-none">
                <img src="/images/icon-arrow-right.svg" alt="icon-arrow-right" />
            </div>

        </Link>
    );
}

export default InvoiceCard;