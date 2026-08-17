import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { useParams, Link } from "wouter";
import { useGetProject, getGetProjectQueryKey } from "@workspace/api-client-react";
import { ArrowLeft, CheckCircle2, X } from "lucide-react";
import { useState } from "react";
import NotFound from "@/pages/not-found";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { data: project, isLoading, isError } = useGetProject(slug || "", {
    query: { enabled: !!slug, queryKey: getGetProjectQueryKey(slug || "") }
  });

  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (isError || !project) return <NotFound />;

  return (
    <Layout>
      <SEO
        title={`${project.title} | Darbai`}
        description={project.description.slice(0, 150)}
        path={`/darbai/${project.slug}`}
        image={project.mainImage?.url}
      />

      <article className="pt-28 pb-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link
            href="/darbai"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground mb-12 group transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Grįžti į galeriją
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left info panel */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans mb-4">Projektas</p>
                <h1 className="text-3xl md:text-4xl font-serif mb-8 leading-snug">{project.title}</h1>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-0 border border-white/5 mb-8">
                  <div className="p-4 border-r border-white/5">
                    <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Vieta</span>
                    <span className="text-sm font-medium text-foreground">{project.city}</span>
                  </div>
                  {project.area && (
                    <div className="p-4">
                      <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Plotas</span>
                      <span className="text-sm font-medium text-foreground">{project.area}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                  {project.description}
                </p>

                {/* Works done */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans mb-4">Atlikti darbai</h3>
                  <ul className="space-y-2.5">
                    {project.worksDone.map((work, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-muted-foreground text-sm leading-snug">{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-10 pt-8 border-t border-white/5">
                  <a
                    href="/#susisiekti"
                    className="inline-flex items-center justify-center w-full h-11 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors"
                  >
                    Gauti pasiūlymą
                  </a>
                </div>
              </div>
            </div>

            {/* Right media panel */}
            <div className="lg:col-span-8 space-y-4">
              {/* Main image */}
              <button
                type="button"
                className="block w-full relative aspect-[16/10] bg-card overflow-hidden group cursor-zoom-in"
                onClick={() => setActiveImage(project.mainImage?.url ?? null)}
              >
                <img
                  src={project.mainImage?.url}
                  alt={project.mainImage?.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </button>

              {/* Before / After */}
              {project.beforeImage && project.afterImage && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-sans">Prieš</span>
                    <button
                      type="button"
                      className="block w-full aspect-square overflow-hidden bg-card cursor-zoom-in group"
                      onClick={() => setActiveImage(project.beforeImage!.url)}
                    >
                      <img
                        src={project.beforeImage.url}
                        alt={project.beforeImage.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </button>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-primary mb-2 font-sans">Po</span>
                    <button
                      type="button"
                      className="block w-full aspect-square overflow-hidden bg-card cursor-zoom-in group"
                      onClick={() => setActiveImage(project.afterImage!.url)}
                    >
                      <img
                        src={project.afterImage.url}
                        alt={project.afterImage.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </button>
                  </div>
                </div>
              )}

              {/* Gallery grid – additional real project photos */}
              {project.images.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-sans mb-4">
                    Daugiau darbų nuotraukų
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {project.images.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        className="relative aspect-[4/3] bg-card overflow-hidden cursor-zoom-in group"
                        onClick={() => setActiveImage(img.url)}
                        aria-label={img.alt}
                      >
                        <img
                          src={img.url}
                          alt={img.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {activeImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              onClick={() => setActiveImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage}
              alt="Didelis vaizdas"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </article>
    </Layout>
  );
}
