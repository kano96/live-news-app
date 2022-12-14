import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type NewsCategoryProps = {
  params: { category: Category };
};

const NewsCategory = async ({ params: { category } }: NewsCategoryProps) => {
  const news: NewsResponse | null = await fetchNews(category);

  if (!news) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <div>
      <h1 className="headerTitle text-center">{category.toUpperCase()}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category }));
}
