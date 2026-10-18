// Default anchor jump races with react-aria's scroll-lock release (menu close
// restores html overflow mid-animation) and ends up at the wrong position,
// so we scroll only after the navbar menu lock is fully released.
export default function scrollToSection(href, delay = 100) {
  setTimeout(() => {
    document
      .getElementById(href.replace('#', ''))
      ?.scrollIntoView({ behavior: 'smooth' });
  }, delay);
}
