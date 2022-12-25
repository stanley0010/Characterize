import Badge from "./Badge";
import data from "../data.json";

export function Items() {
  const keys = Object.keys(data);
  return (
    <>
      {keys.map((key) => (
        <tr style={{ flex: 1 }}>
          <td>{key}</td>
          <td style={{ padding: 40 }}>{data[key].desc}</td>
          <td>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              {data[key].meanings.map((meaning) => (
                <Badge name={meaning} />
              ))}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
