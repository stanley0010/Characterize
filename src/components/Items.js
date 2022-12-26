import Badge from "./Badge";
import data from "../data_array.json";

export function Items() {
  const keys = Object.keys(data);
  return (
    <>
      {data.map((item) => (
        <tr key={`tr-${item.name}`} style={{ flex: 1 }}>
          <td>{item.name}</td>
          <td style={{ padding: 40 }}>{item.desc}</td>
          <td>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              {item.meanings.map((meaning) => (
                <Badge key={`badge-${meaning}`} name={meaning} />
              ))}
            </div>
          </td>
        </tr>
      ))}
      {/* {keys.map((key) => (
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
      ))} */}
    </>
  );
}
