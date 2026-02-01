import Link from "next/link";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Startup Benefits Platform</h1>

      <Link href="/deals">
        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded">
          Explore Deals
        </button>
      </Link>
    </div>
    </PageWrapper>
  );
}
