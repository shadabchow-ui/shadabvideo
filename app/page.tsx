import Footer from "components/layout/footer";

export const metadata = {
  description: "Raw video archive.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          Raw Video Archive
        </h1>
        <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400">
          Archive coming soon.
        </p>
      </div>
      <Footer />
    </>
  );
}
