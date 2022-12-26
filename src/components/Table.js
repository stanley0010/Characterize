import { Items } from "./Items";

export default function Table({ filteredItems }) {
  if (filteredItems.length > 0) {
    return (
      <tbody style={{ margin: "2vh", alignSelf: "center" }}>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Symbolic Meaning</th>
        </tr>
        <Items filteredItems={filteredItems} />
      </tbody>
    );
  } else {
    return <div style={{ margin: "2vh" }}>Not found</div>;
  }
}
