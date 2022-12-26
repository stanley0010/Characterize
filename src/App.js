import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import SearchInput, { createFilter } from "react-search-input";
import data from "./data_array.json";

function App() {
  const KEYS_TO_FILTERS = ["name", "meanings"];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = data.filter(createFilter(searchTerm, KEYS_TO_FILTERS));

  return (
    <div className='App'>
      <SearchInput
        className='search-input'
        onChange={(e) => setSearchTerm(e)}
      />
      <Table filteredItems={filteredItems} />
    </div>
  );
}

export default App;
