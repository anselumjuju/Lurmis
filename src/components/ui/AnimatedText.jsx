import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, className }) => {
	const textRef = useRef(null);

	useGSAP(() => {
		const chars = textRef.current.querySelectorAll(".char");
		const totalChars = chars.length;

		ScrollTrigger.create({
			trigger: textRef.current,
			start: "top 95%",
			end: "bottom 50%",
			scrub: true,
			onUpdate: (self) => {
				const progress = self.progress * totalChars;
				chars.forEach((char, index) => {
					if (index < progress) {
						char.style.transform = "translateY(0%)";
						char.classList.add("text-neutral-600");
						char.classList.remove("text-neutral-200");
					} else {
						char.style.transform = "translateY(5%)";
						char.classList.add("text-neutral-200");
						char.classList.remove("text-neutral-600");
					}
				});
			},
		});

	});

	return (
		<div className="overflow-hidden">
			<div ref={textRef} className={cn("", className)}>
				{text.split(" ").map((char, index) => (
					<span key={index} className="char inline-block px-1.5 transition-all duration-300">
						{char}
					</span>
				))}
			</div>
		</div>
	);
};

export default AnimatedText;
