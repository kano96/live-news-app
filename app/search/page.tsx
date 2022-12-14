import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";

type SearchPageProps = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const news: NewsResponse | null = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  if (!news) {
    return <h1>Nothing found</h1>;
  }
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
