import Badge from "./Badge";
import data from "../data.json";

function Items() {
  return (
    <>
      {data.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td style={{ padding: 40 }}>{item.desc}</td>
          <td>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "flex-start",
                alignContent: "stretch",
                alignItems: "flex-start",
              }}
            >
              {item.meanings.map((meaning) => (
                <Badge name={meaning} />
              ))}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

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
