import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge"; // Shadcn UI Badge 컴포넌트 가정

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about Minsung Kim",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Bridging the gap between Algorithm and Real Estate.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        {/* Left Side: Profile Card */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Avatar className="h-48 w-48 border-4 border-primary/10">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">{siteConfig.author}</h2>
            <p className="text-muted-foreground font-medium">Data Analyst & Developer</p>
            <p className="text-sm text-muted-foreground">Seoul, South Korea</p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8">
          {/* Bio Section */}
          <section className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Integrated Master of Informatics graduate from the **University of Edinburgh**. 
              I specialize in bridging the gap between data science and real estate development by automating 
              complex workflows and building data-driven dashboards. My technical foundation, 
              rooted in Electronics Engineering, provides a unique understanding of both software 
              and hardware systems. Currently, I am focused on transforming traditional property 
              development into a smarter, data-driven ecosystem through practical automation and analysis.
            </p>
          </section>

          {/* Core Strengths Section */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold">Core Expertise</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Informatics (MInf)</Badge>
              <Badge variant="secondary">Real Estate Data Analytics</Badge>
              <Badge variant="secondary">Workflow Automation</Badge>
              <Badge variant="secondary">Python / R / Flask</Badge>
              <Badge variant="secondary">Deep Learning Academic Exp.</Badge>
              <Badge variant="secondary">Electronics Engineering</Badge>
            </div>
          </section>

          {/* Experience Highlight */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-bold mb-1">Academic Background</h4>
              <p className="text-sm text-muted-foreground">
                MInf in Informatics, University of Edinburgh (2023). 
                Electronics Engineering Technician, Centennial College.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-bold mb-1">Current Focus</h4>
              <p className="text-sm text-muted-foreground">
                Developing data pipelines and automation tools for real estate development projects (Geomdan New Town).
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}