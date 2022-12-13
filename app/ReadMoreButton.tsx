"use client";

import { useRouter } from "next/navigation";

type ReadMoreButtonProps = {
  article: Article;
};

const ReadMoreButton = ({ article }: ReadMoreButtonProps) => {
  const router = useRouter();

  const handleClick = () => {};

  return (
    <button
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
      onClick={handleClick}
    >
      Read More
    </button>
  );
};

export default ReadMoreButton;
