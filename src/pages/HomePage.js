import "./HomePage.css";
import Modal from "../components/Modal";
import InvoiceCard from "../components/InvoiceCard";
import NoInvoice from "../components/NoInvoice";
import Form from "../components/Form";
import { useState } from "react";

function HomePage({ invoices }) {
  const [showModal, setShowModal] = useState(false);

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
        <div onClick={() => setShowModal(true)} className="homepage-btn">
          <span>
            <img src="/images/icon-plus.svg" alt="icon-plus" />
          </span>
          <span>New</span>
          <span className="d-none">Invoice</span>
        </div>
      </div>
      <div className="invoice-card-list">
        {invoices.length ? (
          invoices.map((invoice) => {
            return (
              <InvoiceCard
                key={invoice.id}
                id={invoice.id}
                paymentDue={invoice.paymentDue}
                clientName={invoice.clientName}
                status={invoice.status}
                total={invoice.total}
              />
            );
          })
        ) : (
          <NoInvoice />
        )}
      </div>
      {showModal && (
        <Modal showModal={setShowModal} modalTitle="Filter by category">
          <Form />
        </Modal>
      )}
    </header>
  );
}

export default HomePage;
