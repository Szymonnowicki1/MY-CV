import { ArrowUp } from "lucide-react";

const Footer = () => {
    const year = new Date().getFullYear()
    return(
<footer className="py-6 px-4 bg-card relative border-t border-b mt-12 flex items-center justify-between">
  <p className="text-sm text-muted-foreground mx-auto">&copy; {year} Szymon Nowicki</p>
  <a
    href="#hero"
    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors absolute right-4"
  >
    <ArrowUp />
  </a>
</footer>

    )
}

export default Footer;