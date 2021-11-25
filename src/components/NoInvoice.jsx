import "./NoInvoice.css"

function NoInvoice() {
    return (
        <div className="no-invoice">
            <figure>
                <img src="/images/illustration-empty.svg" alt="illustration-empty" />
            </figure>
            <h2>There is nothing here</h2>
            <p>Create an invoice by clicking the <span>New</span> button and get started</p>
        </div>
    );
}

export default NoInvoice;