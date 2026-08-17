import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { useListProjects } from "@workspace/api-client-react";

export default function Projects() {
  const { data: projects = [], isLoading } = useListProjects();

  return (
    <Layout>
      <SEO 
        title="Atlikti darbai | Vonios Remontas"
        description="Peržiūrėkite mūsų atliktus vonios remonto darbus Klaipėdoje. Nuo minimalistinių iki prabangių sprendimų."
        path="/darbai"
      />

      <div className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Atlikti darbai</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            Kiekvienas vonios kambarys — tai atskiras projektas, reikalaujantis kruopštumo ir tikslumo. Čia rasite pavyzdžius to, ką galiu sukurti Jūsų namuose.
          </p>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[4/5] bg-muted animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link key={project.slug} href={`/darbai/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-muted">
                    <img 
                      src={project.mainImage?.url} 
                      alt={project.mainImage?.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="text-2xl font-serif mb-1 group-hover:text-primary transition-colors">{project.title}</h2>
                  <div className="flex justify-between text-muted-foreground text-sm">
                    <span>{project.city}</span>
                    <span>{project.area}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
