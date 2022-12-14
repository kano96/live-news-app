import fetchNews from "../../lib/fetchNews";

type SearchPageProps = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return <div>SearchPage</div>;
};

export default SearchPage;
