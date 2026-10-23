import {
  Button,
  Divider,
  Image,
  Link as HeroLink,
} from '@heroui/react';
import { ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '@/constants/portfolioData';

export default function LandingPageLayoutFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-white/60 backdrop-blur-2xl bg-white/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/70 shadow-md">
              <Image
                src={personalInfo.avatar}
                alt={`${personalInfo.name} logo`}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-foreground text-lg">{personalInfo.name}</div>
              <div className="text-xs text-default-500 font-medium">{personalInfo.role}</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <HeroLink
                key={link.name}
                href={link.href}
                color="foreground"
                size="sm"
                className="text-xs font-semibold hover:text-primary transition-colors"
              >
                {link.name}
              </HeroLink>
            ))}
          </div>

          {/* Back to top */}
          <Button
            variant="bordered"
            color="default"
            radius="full"
            size="sm"
            className="border-divider bg-white/60 font-semibold text-default-700 hover:text-primary"
            startContent={<ArrowUp size={14} />}
            onPress={scrollToTop}
            aria-label="Scroll back to top"
          >
            Back to top
          </Button>
        </div>

        <Divider className="bg-divider" />

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-default-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Crafted with</span>
            <span className="text-primary-600 font-semibold">React & Tailwind CSS</span>
            <span>•</span>
            <span>HeroUI Glass Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
