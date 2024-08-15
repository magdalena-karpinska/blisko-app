export default function Page() {
  const connectionNames = ["Magdalena", "Anna", "Ula"];
  return (
    <>
      <h1>Experiment</h1>
      <div>
        {connectionNames.map((name) => (
          <div>{name}</div>
        ))}
      </div>
    </>
  );
}
