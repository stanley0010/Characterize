export default function Badge({ name }) {
  return (
    <div
      style={{
        background: "#EC368D",
        borderRadius: "20px",
        padding: "5px 30px",
        margin: 10,
      }}
    >
      {name}
    </div>
  );
}
