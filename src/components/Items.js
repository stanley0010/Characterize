import Badge from "./Badge";

export function Items({ filteredItems }) {
  return (
    <>
      {filteredItems.map((item) => (
        <tr key={`tr-${item.name}`} style={{ flex: 1 }}>
          <td>{item.name}</td>
          <td style={{ padding: 40 }}>{item.desc}</td>
          <td>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {item.meanings.map((meaning) => (
                <Badge key={`badge-${meaning}`} name={meaning} />
              ))}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
