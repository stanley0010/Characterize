import { ReactSearchAutocomplete } from "react-search-autocomplete";
import data from "../data_array.json";

export default function SearchBar() {
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  // const handleOnSelect = (item) => {
  //   // the item selected
  //   console.log(item);
  // };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          Name: {item.name}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          Symbolic Meaning:{" "}
          {item.meanings.map((meaning, index) => (
            <>{(index ? ", " : "") + meaning}</>
          ))}
        </span>
      </>
    );
  };

  return (
    <ReactSearchAutocomplete
      items={data}
      onSearch={handleOnSearch}
      autoFocus
      formatResult={formatResult}
      fuseOptions={{ keys: ["name", "meanings"] }}
      resultStringKeyName='name'
    />
  );
}
