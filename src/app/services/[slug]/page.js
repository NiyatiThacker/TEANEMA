import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/detail/ServiceHero";
import ServiceContent from "@/components/services/detail/ServiceContent";
import ServiceProcess from "@/components/services/detail/ServiceProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | TEANEMA Services`,
    description: service.shortDescription,
  };
}

// Generate static params for build time optimization (optional but good practice)
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  // 404 if slug doesn't match any service
  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        <ServiceHero service={service} />
        <ServiceContent service={service} />
        <ServiceProcess service={service} />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}
