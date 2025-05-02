import Navigation from "@/app/components/Navigation";
import AgritsFull from "@/app/components/AgritsFull";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />

      <AgritsFull
        title="Your Title"
        subtitle="AGRITS"
        description={["Description line 1", "Description line 2"]}
      />
    </main>
  );
}
