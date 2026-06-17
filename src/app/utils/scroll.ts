/**
 * Custom high-performance smooth scroll function using an easeOutQuint easing curve
 * for a premium, buttery-smooth transition feel.
 */
export function smoothScrollTo(target: HTMLElement | number, duration = 850) {
  const start = window.scrollY;
  let targetY = 0;
  
  if (typeof target === "number") {
    targetY = target;
  } else {
    const rect = target.getBoundingClientRect();
    const id = target.getAttribute("id");
    // If it's the hero/work section or at the very top of the page, scroll to 0
    if (id === "work" || id === "hero") {
      targetY = 0;
    } else {
      // Offset for sticky navigation bar
      const offset = window.innerWidth < 768 ? 70 : 80;
      targetY = Math.max(0, rect.top + window.scrollY - offset);
    }
  }

  const distance = targetY - start;
  if (distance === 0) return;

  let startTime: number | null = null;

  // Custom premium easeOutQuint curve (starts fast, decelerates extremely smoothly)
  const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

  const step = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    window.scrollTo(0, start + distance * easeOutQuint(progress));

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
