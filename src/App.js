import "./App.css";
import Sidebar from "./components/Sidebar";
//import InvoicePage from "./pages/InvoicePage";
//import HomePage from "./pages/HomePage";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <HomePage /> */}
      {/* <InvoicePage /> */}
      <Form />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
