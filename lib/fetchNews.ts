import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImages";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          title
          source
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function with Next.js 13 caching...
  try {
    const res = await fetch(
      "https://spokane.stepzen.net/api/yucky-sabertooth/__graphql",
      {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
          query,
          variables: {
            access_key: process.env.MEDIASTACK_API_KEY,
            categories: category,
            keywords,
          },
        }),
      }
    );

    const newsResponse = await res.json();

    const news = sortNewsByImage(newsResponse.data.myQuery);
    return news;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchNews;

// stepzen import curl http://api.mediastack.com/v1/news?access_key=457138c417f8d19355915e38a35847d8&sources=business,sports
