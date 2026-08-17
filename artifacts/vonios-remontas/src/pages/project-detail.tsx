import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { useParams, Link } from "wouter";
import { useGetProject, getGetProjectQueryKey } from "@workspace/api-client-react";
import { ArrowLeft, CheckCircle2, Maximize2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import NotFound from "@/pages/not-found";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { data: project, isLoading, isError } = useGetProject(slug || "", {
    query: { enabled: !!slug, queryKey: getGetProjectQueryKey(slug || "") }
  });

  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (isLoading) return <div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"/></div>;
  if (isError || !project) return <NotFound />;

  return (
    <Layout>
      <SEO 
        title={`${project.title} | Darbai`}
        description={project.description.slice(0, 150)}
        path={`/darbai/${project.slug}`}
        image={project.mainImage?.url}
      />

      <article className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <Link href="/darbai" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 group transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Grįžti į galeriją
          </Link>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <h1 className="text-4xl md:text-5xl font-serif mb-6">{project.title}</h1>
                
                <div className="flex gap-8 text-sm uppercase tracking-wider text-muted-foreground border-b border-border pb-6 mb-8">
                  <div>
                    <span className="block text-foreground/40 mb-1 text-xs">Vieta</span>
                    {project.city}
                  </div>
                  <div>
                    <span className="block text-foreground/40 mb-1 text-xs">Plotas</span>
                    {project.area}
                  </div>
                </div>

                <div className="prose prose-p:text-muted-foreground prose-p:leading-relaxed mb-12">
                  <p>{project.description}</p>
                </div>

                <h3 className="text-xl font-serif mb-4">Atlikti darbai:</h3>
                <ul className="space-y-3">
                  {project.worksDone.map((work, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary/50 mr-3 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-snug">{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div 
                className="relative aspect-[4/3] bg-muted cursor-pointer group"
                onClick={() => setActiveImage(project.mainImage?.url)}
              >
                <img 
                  src={project.mainImage?.url} 
                  alt={project.mainImage?.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {project.beforeImage && project.afterImage && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Prieš</span>
                    <img src={project.beforeImage.url} alt={project.beforeImage.alt} className="w-full aspect-square object-cover" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Po</span>
                    <img src={project.afterImage.url} alt={project.afterImage.alt} className="w-full aspect-square object-cover" />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <div 
                    key={i} 
                    className="relative aspect-square bg-muted cursor-pointer group"
                    onClick={() => setActiveImage(img.url)}
                  >
                    <img 
                      src={img.url} 
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {activeImage && (
          <div 
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <img 
              src={activeImage} 
              alt="Full size" 
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </div>
        )}
      </article>
    </Layout>
  );
}
