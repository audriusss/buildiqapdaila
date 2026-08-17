import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { useListProjects } from "@workspace/api-client-react";

export default function Projects() {
  const { data: projects = [], isLoading } = useListProjects();

  return (
    <Layout>
      <SEO
        title="Atlikti darbai | Vonios Remontas Klaipėdoje"
        description="Peržiūrėkite mūsų atliktus vonios remonto darbus Klaipėdoje. Nuo minimalistinių iki prabangių sprendimų."
        path="/darbai"
      />

      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans mb-4">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Atlikti darbai</h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Kiekvienas vonios kambarys — tai atskiras projektas, reikalaujantis kruopštumo ir tikslumo.
              Čia rasite pavyzdžius to, ką galiu sukurti Jūsų namuose.
            </p>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[4/5] bg-card animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/darbai/${project.slug}`}
                  className="group block relative overflow-hidden aspect-[4/5] bg-card"
                >
                  <img
                    src={project.mainImage?.url}
                    alt={project.mainImage?.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary text-xs uppercase tracking-widest mb-1.5">{project.city}</p>
                    <h2 className="text-xl font-serif text-white leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    {project.area && (
                      <p className="text-white/40 text-xs mt-1">{project.area}</p>
                    )}
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
