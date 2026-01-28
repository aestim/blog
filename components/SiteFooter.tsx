import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./Icons";
import CurrentYear from "./ui/current-year";
import { buttonVariants } from "./ui/button"; // Added import
import { cn } from "@/lib/utils"; // Added import

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Built by <span className="font-medium text-foreground">{siteConfig.author}</span>
          </p>
          <p className="text-xs text-muted-foreground/60">
            Copyright © <CurrentYear />
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:minsung.kdg@gmail.com"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full")}
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-5 w-5" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full")}
          >
            <span className="sr-only">LinkedIn</span>
            <Icons.linkedin className="h-5 w-5" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full")}
          >
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}