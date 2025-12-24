// Scroll reveal utility for intersection observer based animations

export interface ScrollRevealOptions {
	threshold?: number;
	rootMargin?: string;
	once?: boolean;
}

/**
 * Creates an intersection observer for scroll reveal animations
 * @param elements - Elements to observe
 * @param callback - Callback function when element enters viewport
 * @param options - Observer options
 * @returns The intersection observer
 */
export function createScrollReveal(
	elements: Element[],
	callback: (element: Element, observer: IntersectionObserver) => void,
	options: ScrollRevealOptions = {}
): IntersectionObserver {
	const { threshold = 0.1, rootMargin = '0px', once = true } = options;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					callback(entry.target, observer);
					if (once) {
						observer.unobserve(entry.target);
					}
				}
			});
		},
		{ threshold, rootMargin }
	);

	elements.forEach((element) => observer.observe(element));

	return observer;
}

/**
 * Adds scroll reveal class to elements when they enter viewport
 * @param selector - CSS selector for elements
 * @param className - Class to add when revealed (default: 'revealed')
 * @param options - Observer options
 */
export function initScrollReveal(
	selector: string,
	className: string = 'revealed',
	options: ScrollRevealOptions = {}
): IntersectionObserver {
	const elements = Array.from(document.querySelectorAll(selector));

	return createScrollReveal(
		elements,
		(element) => {
			element.classList.add(className);
		},
		options
	);
}

/**
 * Staggered scroll reveal for multiple elements
 * @param selector - CSS selector for elements
 * @param className - Class to add when revealed
 * @param staggerDelay - Delay between each element in ms
 * @param options - Observer options
 */
export function initStaggeredScrollReveal(
	selector: string,
	className: string = 'revealed',
	staggerDelay: number = 100,
	options: ScrollRevealOptions = {}
): IntersectionObserver {
	const elements = Array.from(document.querySelectorAll(selector));

	return createScrollReveal(
		elements,
		(element, observer) => {
			const index = elements.indexOf(element);
			setTimeout(() => {
				element.classList.add(className);
			}, index * staggerDelay);
		},
		options
	);
}

/**
 * Detects which section is currently in viewport
 * @param sections - Section elements to observe
 * @param callback - Callback with active section id
 * @returns The intersection observer
 */
export function initActiveSectionObserver(
	sections: Element[],
	callback: (sectionId: string) => void
): IntersectionObserver {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id;
					callback(sectionId);
				}
			});
		},
		{ threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
	);

	sections.forEach((section) => observer.observe(section));

	return observer;
}
