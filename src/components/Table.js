import { Items } from "./Items";

export default function Table() {
  return (
    <tbody style={{ margin: 20 }}>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Symbolic Meaning</th>
      </tr>
      <Items />
    </tbody>
  );
}
