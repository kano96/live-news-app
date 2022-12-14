"use client";

type ReadMoreButtonProps = {
  article: Article;
};

const ReadMoreButton = ({ article }: ReadMoreButtonProps) => {
  return (
    <button className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500">
      <a href={article.url} target="_blank">
        Read More
      </a>
    </button>
  );
};

export default ReadMoreButton;
