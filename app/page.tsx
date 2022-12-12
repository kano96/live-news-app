import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

const HomePage = async () => {
  const news: NewsResponse | null = await fetchNews(categories.join(","));

  console.log(news);

  return <div>{/* NewsList */}</div>;
};

export default HomePage;
