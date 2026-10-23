import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Link as HeroLink,
  Image,
} from "@heroui/react";
import { MessageCircle } from "lucide-react";
import { navLinks, personalInfo } from "@/constants/portfolioData";
import useLandingPageLayoutNavbar from "./useLandingPageLayoutNavbar";

export default function LandingPageLayoutNavbar() {
  const { isScrolled, menuOpen, setMenuOpen, isActive, handleMenuNavigate } =
    useLandingPageLayoutNavbar();

  return (
    <HeroUINavbar
      position="sticky"
      isBlurred
      maxWidth="2xl"
      isMenuOpen={menuOpen}
      onMenuOpenChange={setMenuOpen}
      classNames={{
        base: `transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/80 border-white/70 shadow-lg shadow-sky-950/5 pointer-events-auto backdrop-blur-md"
            : "bg-white/50 border-white/50"
        }`,
        wrapper: "px-4 sm:px-6 lg:px-8 h-16 gap-4",
        item: "data-[active=true]:font-semibold",
      }}
    >
      <NavbarBrand>
        <a
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Ahmad Zaeladi Portfolio"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr flex items-center justify-center  group-hover:scale-105 group-hover:shadow-sky-500/40 transition-all duration-200">
            <Image src={personalInfo.avatar} alt="Profile Picture" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-foreground text-base sm:text-lg tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-semibold text-default-500 uppercase tracking-widest">
              Full-Stack Developer
            </span>
          </div>
        </a>
      </NavbarBrand>

      <NavbarContent justify="center" className="hidden md:flex gap-1">
        {navLinks.map((link) => (
          <NavbarItem key={link.name} isActive={isActive(link.href)}>
            <HeroLink
              href={link.href}
              size="sm"
              color={isActive(link.href) ? "success" : "foreground"}
              className={`px-3 py-2 rounded-lg hover:bg-white/60 hover:text-primary transition-colors ${
                isActive(link.href) ? "font-semibold" : "font-medium"
              }`}
            >
              {link.name}
            </HeroLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Button
            as={HeroLink}
            href="https://wa.me/6281234567890"
            target="_blank"
            onPress={() => setMenuOpen(false)}
            color="success"
            radius="full"
            size="sm"
            className="font-semibold"
            endContent={<MessageCircle size={14} />}
          >
            Let's Connect
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="md:hidden text-foreground"
        />
      </NavbarContent>

      <NavbarMenu className="gap-1 pt-4 bg-white/90 backdrop-blur-2xl border-b border-white/70 shadow-xl">
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.name}>
            <HeroLink
              href={link.href}
              size="lg"
              color={isActive(link.href) ? "primary" : "foreground"}
              className={`w-full flex items-center justify-between ${
                isActive(link.href) ? "font-semibold" : "font-medium"
              }`}
              onClick={handleMenuNavigate(link.href)}
            >
              {link.name}
            </HeroLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            as={HeroLink}
            href="https://wa.me/6289607237171"
            target="_blank"
            onPress={() => setMenuOpen(false)}
            color="success"
            variant="shadow"
            radius="full"
            fullWidth
            className="mt-2 font-semibold"
            endContent={<MessageCircle size={16} />}
          >
            Let's Connect
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
}
