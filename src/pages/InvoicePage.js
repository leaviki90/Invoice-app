import ViewInvoiceButtons from "../components/ViewInvoiceButtons";
import "./InvoicePage.css";
function InvoicePage() {
  return (
    <>
      <div className="invoice-page">
        <div className="go-back">
          <img src="/images/icon-arrow-left.svg" alt="icon-left" />
          <a href="#">go back</a>
        </div>
        <div className="invoice-status">
          <span>Status</span>
          <div className="invoice-card-status status">
            <span></span>
            <span id="invoiceStatus">Paid</span>
          </div>
        </div>
        <div className="invoice-info">
          <div className="invoice-info-header">
            <div className="id-desc">
              <div className="invoice-card-id">
                <p>
                  #<span>RT3080</span>
                </p>
              </div>
              <p className="description" id="description">
                Graphic Design
              </p>
            </div>
            <div className="sender">
              <p id="senderStreet">19 Union Terrace</p>
              <p id="senderCity">London</p>
              <p id="senderPostCode">E1 3EZ</p>
              <p id="senderCountry">United Kingdom</p>
            </div>
          </div>
          <div className="invoice-info-body">
            <div className="date-due">
              <p>Invoice Date</p>
              <span id="createdAt">21 Aug 2021</span>
              <p>Payment Due</p>
              <span id="paymentDue">20 Sep 2021</span>
            </div>
            <div className="client">
              <p>Bill To</p>
              <span id="clientName">Alex Grim</span>
              <p id="clientStreet">84 Church Way</p>
              <p id="clientCity">Bradford</p>
              <p id="clientPostCode">BD1 9PB</p>
              <p id="clientCountry">United Kingdom</p>
            </div>
            <div className="sent-to">
              <p>Sent to</p>
              <span>alexgrim@mail.com</span>
            </div>
          </div>
          <div className="invoice-info-footer">
            <div className="labels">
              <p>Item Name</p>
              <p>QTY.</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            <div className="design">
              <div className="banner-design">
                <p>Banner Design</p>
                <p className="banner-quantity">1</p>
                <p className="design-x">x</p>
                <p className="banner-price">£ 156.00</p>
                <p className="banner-total">£ 156.00</p>
              </div>
              <div className="email-design">
                <p>Email Design</p>
                <p className="email-quantity">2</p>
                <p className="design-x">x</p>
                <p className="email-price">£ 200.00</p>
                <p className="email-total">£ 400.00</p>
              </div>
            </div>
            <div className="grand-total">
              <span>Grand Total</span>
              <span>£ 556.00</span>
            </div>
          </div>
        </div>
      </div>
      <ViewInvoiceButtons />
    </>
  );
}

export default InvoicePage;
