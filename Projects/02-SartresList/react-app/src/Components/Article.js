export default function Article(props) {
  console.log(props);
  return (
    <>
      <article>
        <time datetime={props.article.datetime}>{props.article.time}</time>
        <h2>{props.article.title}</h2>
        <img src={props.article.imgsrc} alt={props.article.alt} />
        <p>{props.article.text}</p>
        <a href="#">Continues...</a>
      </article>
    </>
  );
}
