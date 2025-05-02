import Navigation from "@/app/components/Navigation";
import AgritsFull from "@/app/components/AgritsFull";

import { NavLink } from "@/app/types";

export default function Home() {
  // Navigation links
  const navLinks: NavLink[] = [
    { href: "#tentang", label: "tentang..." },
    { href: "#kesehatan", label: "kesehatan.." },
    { href: "#peta", label: "peta" },
    { href: "#kontak", label: "kontak" },
  ];

  return (
    <main className="relative min-h-screen">
      <Navigation links={navLinks} />

      <AgritsFull
        title="Your Title"
        subtitle="AGRITS"
        description={["Description line 1", "Description line 2"]}
      />
    </main>
  );
}
