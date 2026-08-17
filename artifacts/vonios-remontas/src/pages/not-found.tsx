import { useRouteError } from "wouter";
import { Link } from "wouter";
import { Layout } from "@/components/layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background px-6 text-center">
        <h1 className="text-6xl font-serif mb-4 text-primary">404</h1>
        <h2 className="text-3xl font-serif mb-6">Puslapis nerastas</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          Atsiprašome, bet puslapis, kurio ieškote, neegzistuoja arba buvo perkeltas.
        </p>
        <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:bg-foreground/90 h-12 px-6 py-2">
          Grįžti į pagrindinį
        </Link>
      </div>
    </Layout>
  );
}
