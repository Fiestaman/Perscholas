import Score from "./Score";

export default function Student({ student }) {
  return (
    <div className="student">
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      <hr />
      <h3>Scores:</h3>
      <div className="scores">
        {student.scores.map((score) => {
          return <Score score={score} />;
        })}
      </div>
    </div>
  );
}
