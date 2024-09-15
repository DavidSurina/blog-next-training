import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default async function LatestPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </>
  );
}
