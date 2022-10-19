import { Route, Routes } from "react-router-dom";
import Bootstrap from "./components/Bootstrap";
import Forms from "./components/Forms";
import TableView from "./components/TableView";
import Header from "./components/Header";
import SingleProduct from "./components/SingleProduct";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Bootstrap />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/tableview" element={<TableView />} />
      </Routes>
    </div>
  );
}

export default App;
