"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { PopupButton } from "react-calendly";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		const findRoot = () => {
			const nextRoot = document.getElementById("__next");
			if (nextRoot) {
				setRootElement(nextRoot);
				return;
			}

			const appRoot = document.getElementById("app");
			if (appRoot) {
				setRootElement(appRoot);
				return;
			}

			setRootElement(document.body);
		};

		setTimeout(findRoot, 100);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
				isScrolled
					? "bg-background/95 backdrop-blur-md shadow-sm py-3"
					: "bg-transparent py-5"
			}`}
		>
			<div className="container mx-auto px-4 flex items-center justify-between">
				<Link href="/" className="flex items-center">
					<img
						src="/CredMantraLogo.png"
						alt="CredMantra"
						className="h-10"
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					<Link
						href="#features"
						className="text-[#374151] hover:text-primary transition-colors"
					>
						Features
					</Link>
					<Link
						href="#benefits"
						className="text-[#374151] hover:text-primary transition-colors"
					>
						Benefits
					</Link>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-1 text-[#374151] hover:text-primary transition-colors">
							Login <ChevronDown className="h-4 w-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>
								<Link
									href="https://admin.credmantra.org"
									target="_blank"
									className="w-full"
								>
									Login as Reseller
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link
									href="https://app.credmantra.org"
									target="_blank"
									className="w-full"
								>
									Login as Organization
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<Link
						href="#"
						className="px-4 py-2 text-primary font-semibold rounded-md bg-primary/5 hover:bg-primary/10 transition-colors relative group"
					>
						Become a reseller
						<span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
					</Link>
					{rootElement && (
						<PopupButton
							url="https://calendly.com/sonalitesting25/30min"
							rootElement={rootElement}
							text="Request a demo"
							className="rounded-md bg-gradient-to-r from-[#005A8B] to-[#008080] hover:opacity-90 transition-opacity text-white px-4 py-2"
						/>
					)}
				</nav>

				<div className="flex items-center gap-4 md:hidden">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-background/95 backdrop-blur-md shadow-sm">
					<nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
						<Link
							href="#features"
							className="text-[#374151] hover:text-primary transition-colors py-2"
							onClick={() => setMobileMenuOpen(false)}
						>
							Features
						</Link>
						<Link
							href="#benefits"
							className="text-[#374151] hover:text-primary transition-colors py-2"
							onClick={() => setMobileMenuOpen(false)}
						>
							Benefits
						</Link>
						<div className="flex flex-col gap-2 py-2">
							<div className="text-[#374151]">Login as:</div>
							<Link
								href="https://admin.credmantra.org"
								target="_blank"
								className="text-[#374151] hover:text-primary transition-colors pl-4"
								onClick={() => setMobileMenuOpen(false)}
							>
								Login as Reseller
							</Link>
							<Link
								href="https://app.credmantra.org"
								target="_blank"
								className="text-[#374151] hover:text-primary transition-colors pl-4"
								onClick={() => setMobileMenuOpen(false)}
							>
								Login as Organization
							</Link>
						</div>
						<Link
							href="#"
							className="text-primary font-semibold py-2 px-4 bg-primary/5 rounded-md"
							onClick={() => setMobileMenuOpen(false)}
						>
							Become a reseller
						</Link>
						{rootElement && (
							<PopupButton
								url="https://calendly.com/sonalitesting25/30min"
								rootElement={rootElement}
								text="Request a demo"
								className="rounded-md bg-gradient-to-r from-[#005A8B] to-[#008080] hover:opacity-90 transition-opacity text-white px-4 py-2"
							/>
						)}
					</nav>
				</div>
			)}
		</header>
	);
};

export default Navbar;
