import Article from "./Article";

export default function Main(props) {
  const ArticlesList = props.articles.map((article) => {
    return (
      <>
        <Article article={article} />
      </>
    );
  });

  return (
    <>
      <main>{ArticlesList}</main>
    </>
  );
}
