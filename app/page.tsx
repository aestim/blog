import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/PostItem";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>

      <section className="container max-w-5xl pt-12 pb-16 md:pt-24 md:pb-32">
        <div className="flex flex-col items-start gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter">
              {siteConfig.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {siteConfig.hero.subtitle}
            </p>
          </div>

          <p className="max-w-[50rem] text-lg md:text-xl text-muted-foreground leading-relaxed">
            {siteConfig.hero.bio.part1}
            <span className="whitespace-nowrap font-bold text-foreground">
              {siteConfig.hero.bio.highlight1}
            </span>
            {siteConfig.hero.bio.part2}
            <span className="font-bold text-foreground">
              {siteConfig.hero.bio.highlight2}
            </span>
            {siteConfig.hero.bio.part3}
          </p>
          <div className="flex gap-4">
            <Link href="/blog" className={cn(buttonVariants({ size: "lg" }))}>
              {siteConfig.ui.viewBlog}
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-5xl py-12 border-t">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-black tracking-tight">{siteConfig.ui.latestPosts}</h2>
          <Link href="/blog" className="text-sm font-semibold hover:underline">
            {siteConfig.ui.viewAllPosts}
          </Link>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestPosts.map((post) => (
            post.published && (
              <li key={post.slug} className="group relative rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all h-full flex flex-col p-6">
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  tags={post.tags}
                />
              </li>
            )
          ))}
        </ul>
      </section>
    </>
  );
}