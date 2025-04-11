import ArticleCard from "./ArticleCard.jsx";
// import "./ArticleCard.css";

export default function Articles() {
  const articles = [
    {
      date: "Mar 28, 2025",
      title: "Lorem Ipsum Dolor Sit Amet",
      content:
        "Consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.",
      link: "#",
    },
    {
      date: "Mar 15, 2025",
      title: "Nullam Convallis Augue Justo",
      content:
        "Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      link: "#",
    },
    {
      date: "Feb 27, 2025",
      title: "Vivamus Hendrerit Arcu Sed",
      content:
        "Ut in nulla enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.",
      link: "#",
    },
  ];

  return (
    <div className="articles-container flex-1 space-y-8">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          date={article.date}
          title={article.title}
          content={article.content}
          link={article.link}
        />
      ))}
    </div>
  );
}
