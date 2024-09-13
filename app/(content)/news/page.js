import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

export const metadata = {
  title: "All meals",
  description: "Browse delicious meals shared by users.",
};

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
