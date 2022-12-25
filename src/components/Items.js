import Badge from "./Badge";
import data from "../data.json";

export function Items() {
  const keys = Object.keys(data);
  return (
    <>
      {keys.map((key) => (
        <tr>
          <td>{key}</td>
          <td style={{ padding: 40 }}>{data[key].desc}</td>
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
              {data[key].meanings.map((meaning) => (
                <Badge name={meaning} />
              ))}
            </div>
          </td>
        </tr>
      ))}
    </>
    // <>
    //   {data.map((item) => (
    //     <tr>
    //       <td>{item.name}</td>
    //       <td style={{ padding: 40 }}>{item.desc}</td>
    //       <td>
    //         <div
    //           style={{
    //             display: "flex",
    //             flexDirection: "row",
    //             flexWrap: "nowrap",
    //             justifyContent: "flex-start",
    //             alignContent: "stretch",
    //             alignItems: "flex-start",
    //           }}
    //         >
    //           {item.meanings.map((meaning) => (
    //             <Badge name={meaning} />
    //           ))}
    //         </div>
    //       </td>
    //     </tr>
    //   ))}
    // </>
  );
}
