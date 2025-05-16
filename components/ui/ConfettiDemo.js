"use client";

import { useRef } from "react";
import { Confetti } from "../../registry/magicui/confetti";

export function ConfettiDemo() {
	const confettiRef = useRef(null);

	return (
		<div className="relative inline-block">
			<span className="pointer-events-none">Become a Reseller</span>

			<Confetti
				ref={confettiRef}
				className="absolute left-0 top-0 z-0 w-full h-full"
				onMouseEnter={() => {
					confettiRef.current?.fire({});
				}}
			/>
		</div>
	);
}
