import { useState, useEffect } from 'react';
import { navLinks } from '@/constants/portfolioData';
import scrollToSection from '@/utils/scrollToSection';

export default function useLandingPageLayoutNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => activeSection === href.substring(1);

  const handleMenuNavigate = (href) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(href);
  };

  return { isScrolled, menuOpen, setMenuOpen, activeSection, isActive, handleMenuNavigate };
}
