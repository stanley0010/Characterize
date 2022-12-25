export default function Badge({ name }) {
  return (
    <div
      style={{
        background: "#3BE360",
        borderRadius: "20px",
        padding: "5px 30px",
        margin: 10,
      }}
    >
      {name}
    </div>
  );
}
