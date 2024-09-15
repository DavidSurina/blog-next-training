import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export const metadata = {
  title: "All meals",
  description: "Browse delicious meals shared by users.",
};

export default async function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
