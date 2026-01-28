import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./Tag";

import { siteConfig } from "@/config/site"; // Added import

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-4 py-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <time dateTime={date}>{formatDate(date)}</time>
      </div>

      <div>
        <h2 className="text-2xl font-bold leading-tight hover:underline decoration-2 underline-offset-4">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
        <div className="mt-2 text-muted-foreground leading-relaxed">
          {description}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto pt-2">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <Link
          href={"/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "px-0 h-auto font-semibold")}
        >
          {siteConfig.ui.readMore}
        </Link>
      </div>
    </article>
  );
}