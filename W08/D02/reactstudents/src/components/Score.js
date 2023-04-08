export default function Score({ score }) {
  return (
    <div className="assignment">
      <h4 className="date">Date: {score.date}</h4>
      <h4 className="score">Score: {score.score}</h4>
    </div>
  );
}
