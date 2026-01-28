import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}
export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md px-3 py-1 text-sm",
      })}
      href={`/tags/${slug(tag)}`}
    >
      {tag} {count ? <span className="ml-1 text-xs font-normal opacity-70">({count})</span> : null}
    </Link>
  );
}