import "./InvoiceCard.css"


const InvoiceCard = () => {
    return (
        <div className="invoice-card">
            <div className="invoice-card-id pb-24 text-start">
                <p>#<span id="profileID">RT3080</span></p>
            </div>
            <p className="invoice-card-name pb-24 text-end" id="profileName">Jensen Huang</p>
            <div className="invoice-card-due text-start">
                <p>Due <span id="profileDue">19 Aug 2021</span></p>
            </div>

            <div className="invoice-card-total text-start">
                <p>£ <span id="profileTotal">1,800.90</span></p>
            </div>
            <div className="invoice-card-status status">
                <span></span><span id="invoiceStatus">Paid</span>
            </div>
            <div className="invoice-card-arrow d-none">
                <img src="/images/icon-arrow-right.svg" alt="icon-arrow-right" />
            </div>

        </div>
    );
}

export default InvoiceCard;