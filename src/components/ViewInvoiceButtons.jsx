import "./ViewInvoiceButtons.css";

function ViewInvoiceButtons() {
    return (
        <div className="view-invoice-buttons">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
            <button className="mark-btn">Mark as Paid</button>
        </div>
    );
}

export default ViewInvoiceButtons;