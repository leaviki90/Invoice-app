import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import InvoicePage from "./pages/InvoicePage";
import HomePage from "./pages/HomePage";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

// Test IF LocalStorage is accessible
function isTest() {
  let test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

const data = require("./data/data.json");

function App() {
  const [invoices, setInvoices] = useState(data);
  console.log({ invoices });

  const deleteInvoice = (id) => {
    const changedInvoices = invoices.filter((invoice) => invoice.id !== id);
    console.log(changedInvoices);
    setInvoices(changedInvoices);
  };

  const setToPaid = (id) => {
    const changedInvoices = invoices.map((invoice) => {
      if (invoice.id === id) {
        return { ...invoice, status: "paid" };
      } else {
        return invoice;
      }
    });
    console.log(changedInvoices);
    setInvoices(changedInvoices);
  };

  const fetchInvoice = (id) =>
    invoices?.find((invoice) => invoice.id === id) || null;

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage invoices={invoices} />
          </Route>
          <Route exact path="/invoice/:id">
            <InvoicePage
              fetchInvoice={fetchInvoice}
              deleteInvoice={deleteInvoice}
              setToPaid={setToPaid}
            />
          </Route>
        </Switch>
      </Router>
      {/* <HomePage /> */}
      {/* <InvoicePage /> */}
      {/* <Form />
      <ItemList />
      <Footer /> */}
    </div>
  );
}

export default App;
