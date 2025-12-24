// Animation utility functions for micro interactions

/**
 * Creates a ripple effect on button click
 * @param event - The click event
 * @param element - The button element
 */
export function createRipple(event: MouseEvent, element: HTMLElement): void {
	const circle = document.createElement('span');
	const diameter = Math.max(element.clientWidth, element.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - element.getBoundingClientRect().left - radius}px`;
	circle.style.top = `${event.clientY - element.getBoundingClientRect().top - radius}px`;
	circle.classList.add('ripple');

	const ripple = element.getElementsByClassName('ripple')[0];
	if (ripple) {
		ripple.remove();
	}

	element.appendChild(circle);
}

/**
 * Eases a value using cubic-bezier function
 * @param t - The progress value (0-1)
 * @returns The eased value
 */
export function easeOutCubic(t: number): number {
	return 1 - Math.pow(1 - t, 3);
}

/**
 * Eases a value using cubic-bezier function for spring effect
 * @param t - The progress value (0-1)
 * @returns The eased value
 */
export function easeOutElastic(t: number): number {
	const c4 = (2 * Math.PI) / 3;
	return t === 0
		? 0
		: t === 1
			? 1
			: Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
}

/**
 * Animates a number from start to end
 * @param element - The element to update
 * @param start - The starting value
 * @param end - The ending value
 * @param duration - The animation duration in ms
 * @param suffix - Optional suffix to append (e.g., '+', '%')
 */
export function animateCounter(
	element: HTMLElement,
	start: number,
	end: number,
	duration: number = 2000,
	suffix: string = ''
): void {
	const startTime = performance.now();

	function update(currentTime: number): void {
		const elapsed = currentTime - startTime;
		const progress = Math.min(elapsed / duration, 1);
		const eased = easeOutCubic(progress);
		const current = start + (end - start) * eased;

		element.textContent = Math.floor(current) + suffix;

		if (progress < 1) {
			requestAnimationFrame(update);
		}
	}

	requestAnimationFrame(update);
}

/**
 * Calculates magnetic effect for button
 * @param event - The mouse move event
 * @param element - The button element
 * @param strength - The strength of the magnetic effect (default: 0.3)
 */
export function applyMagneticEffect(
	event: MouseEvent,
	element: HTMLElement,
	strength: number = 0.3
): void {
	const rect = element.getBoundingClientRect();
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 2;

	const deltaX = (event.clientX - centerX) * strength;
	const deltaY = (event.clientY - centerY) * strength;

	element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
}

/**
 * Resets magnetic effect
 * @param element - The button element
 */
export function resetMagneticEffect(element: HTMLElement): void {
	element.style.transform = 'translate(0, 0)';
}

/**
 * Calculates 3D tilt effect based on mouse position
 * @param event - The mouse move event
 * @param element - The card element
 * @param maxTilt - Maximum tilt angle in degrees (default: 10)
 */
export function applyTiltEffect(
	event: MouseEvent,
	element: HTMLElement,
	maxTilt: number = 10
): void {
	const rect = element.getBoundingClientRect();
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 2;

	const rotateY = ((event.clientX - centerX) / (rect.width / 2)) * maxTilt;
	const rotateX = -((event.clientY - centerY) / (rect.height / 2)) * maxTilt;

	element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

/**
 * Resets tilt effect
 * @param element - The card element
 */
export function resetTiltEffect(element: HTMLElement): void {
	element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
}

/**
 * Debounces a function
 * @param func - The function to debounce
 * @param wait - The wait time in ms
 * @returns The debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout>;
	return function executedFunction(...args: Parameters<T>) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

/**
 * Throttles a function
 * @param func - The function to throttle
 * @param limit - The time limit in ms
 * @returns The throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number
): (...args: Parameters<T>) => void {
	let inThrottle: boolean;
	return function executedFunction(...args: Parameters<T>) {
		if (!inThrottle) {
			func(...args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}
