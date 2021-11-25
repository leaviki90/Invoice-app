import "./HomePage.css";
//import InvoiceCard from "../components/InvoiceCard";
import NoInvoice from "../components/NoInvoice";

function HomePage() {
  return (
    <header>
      <div className="homepage">
        <div className="homepage-title">
          <h2>Invoices</h2>
          <p id="invoiceCounter">7 Invoices</p>
        </div>
        <div className="homepage-filter">
          <span>Filter</span>
          <img src="/images/icon-check.svg" alt="icon-check" />
        </div>
        <div className="homepage-btn">
          <span>
            <img src="/images/icon-plus.svg" alt="icon-plus" />
          </span>
          <span>New</span>
          <span className="d-none">Invoice</span>
        </div>
      </div>
      <div className="invoice-card-list">
        {/* <InvoiceCard /> */}
        <NoInvoice />
      </div>
    </header>
  );
}

export default HomePage;
