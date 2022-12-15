import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

const HomePage = async () => {
  const news: NewsResponse | null = await fetchNews(categories.join(","));

  if (!news) {
    return <h1>Oops, there was an error. Try again later please!</h1>;
  }

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
