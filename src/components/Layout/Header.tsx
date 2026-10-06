"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, MapPin, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import DentalSmilesLogo from "@/assets/DentalSmilesLogo.webp";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Services", path: "/services" },
	{ name: "First Visit", path: "/first-visit" },
	{ name: "Contact", path: "/contact" },
	{ name: "Payments", path: "/payments" },
	{ name: "Blog", path: "/blog" },
];

const Header = () => {
	const pathname = usePathname();
	const [hideNav, setHideNav] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const lastScrollYRef = useRef(0);

	useEffect(() => {
		if (typeof window === "undefined") return;

		lastScrollYRef.current = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
				setHideNav(true);
			} else {
				setHideNav(false);
			}
			lastScrollYRef.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu on Escape key press and lock background scroll
	useEffect(() => {
		if (!isMenuOpen) return;
		document.body.style.overflow = "hidden";
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMenuOpen(false);
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = "";
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isMenuOpen]);

	// Auto-close menu on route navigation
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	const isPathActive = (path: string) => {
		if (!pathname) return false;
		if (path === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(path);
	};

	return (
		<>
			<header
				className={`sticky top-0 z-50 transition-transform duration-300 ${
					hideNav ? "-translate-y-full" : "translate-y-0"
				}`}
			>
			<div className="bg-primary text-primary-foreground py-1.5 md:py-2">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between min-h-[24px] text-[11px] sm:text-xs md:text-sm">
						{/* Left hand side: Address */}
						<div className="flex items-center space-x-2">
							<a
								href="https://maps.app.goo.gl/x23YX9GCRDdyhyr56"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-1.5 hover:underline transition-all"
							>
								<MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-white/90" />
								<span className="font-medium text-white/95 truncate max-w-[200px] sm:max-w-none">
									1201 Barbara Jordan Blvd, Suite #1435, Austin, TX 78723
								</span>
							</a>
						</div>

						{/* Right hand side: Phone Icon, Mail Icon & Socials */}
						<div className="flex items-center space-x-1.5 sm:space-x-2.5">
							<a
								href="tel:5124679955"
								title="Call 512.467.9955"
								aria-label="Call 512.467.9955"
								className="p-1 rounded-full hover:bg-white/15 transition-all text-white flex items-center justify-center"
							>
								<Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
							</a>
							<a
								href="mailto:info@mydentalsmiles.com"
								title="Email us"
								aria-label="Email us"
								className="p-1 rounded-full hover:bg-white/15 transition-all text-white flex items-center justify-center"
							>
								<Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
							</a>
							<span className="h-3.5 w-px bg-white/20 hidden sm:inline-block" aria-hidden="true" />
							<a
								href="https://www.facebook.com/dentalsmiles78723/"
								target="_blank"
								rel="noopener noreferrer"
								title="Facebook"
								aria-label="Facebook"
								className="p-1 rounded-full hover:bg-white/15 transition-all text-white flex items-center justify-center"
							>
								<Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
							</a>
							<a
								href="https://www.linkedin.com/in/divyashetty/"
								target="_blank"
								rel="noopener noreferrer"
								title="LinkedIn"
								aria-label="LinkedIn"
								className="p-1 rounded-full hover:bg-white/15 transition-all text-white flex items-center justify-center"
							>
								<Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
							</a>
							<a
								href="https://www.youtube.com/user/dshettydmd"
								target="_blank"
								rel="noopener noreferrer"
								title="YouTube"
								aria-label="YouTube"
								className="p-1 rounded-full hover:bg-white/15 transition-all text-white flex items-center justify-center"
							>
								<Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="border-b border-border backdrop-blur-md bg-card/95">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
					<div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 gap-2 lg:gap-4 xl:gap-6 py-1">
						<Link
							href="/"
							className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-bento shrink-0"
						>
							<div className="w-44 sm:w-52 md:w-60 lg:w-64 xl:w-72 h-12 sm:h-14 lg:h-16 xl:h-17 rounded-bento overflow-hidden flex items-center justify-center relative">
								<Image
									src={DentalSmilesLogo}
									alt="Dental Smiles Logo"
									fill
									className="object-contain"
									priority
									sizes="(max-width: 768px) 208px, (max-width: 1280px) 256px, 288px"
								/>
							</div>
						</Link>

						<nav className="hidden lg:flex items-center space-x-2 lg:space-x-3 xl:space-x-5 2xl:space-x-7">
							{navItems.map((item) => {
								const active = isPathActive(item.path);
								return (
									<Link
										key={item.path}
										href={item.path}
										className={`px-2 py-1.5 lg:px-2.5 lg:py-2 rounded-bento text-xs lg:text-sm xl:text-base font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
											active
												? "text-primary font-bold"
												: "text-muted-foreground hover:text-foreground"
										}`}
									>
										{item.name}
									</Link>
								);
							})}
						</nav>

						<div className="hidden lg:block shrink-0 ml-1 xl:ml-2">
							<Link
								href="https://leadsmanagementweb.revenuewell.com/49ce5762-045a-4343-9cd3-30106f8ead9d"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="btn-primary px-3.5 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold shadow-sm whitespace-nowrap">
									Reserve an Appointment
								</Button>
							</Link>
						</div>

						<button
							onClick={toggleMenu}
							type="button"
							className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-bento text-muted-foreground hover:text-foreground hover:bg-clinical-grey transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch-manipulation cursor-pointer"
							aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
							aria-expanded={isMenuOpen}
							aria-controls="mobile-navigation"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" aria-hidden="true" />
							) : (
								<Menu className="w-6 h-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>
		</header>

		{/* Mobile Side Panel Drawer & Backdrop Overlay (Rendered Outside Sticky Header) */}
		<div
			className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-[2147483646] lg:hidden transition-opacity duration-300 ${
				isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
			}`}
			onClick={() => setIsMenuOpen(false)}
			aria-hidden="true"
		/>

		<div
			id="mobile-navigation"
			className={`fixed inset-y-0 right-0 w-[310px] sm:w-[350px] max-w-[85vw] bg-card text-card-foreground z-[2147483647] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden h-full ${
				isMenuOpen ? "translate-x-0" : "translate-x-full"
			}`}
			aria-label="Mobile Navigation Drawer"
		>
			{/* Drawer Header */}
			<div className="flex items-center justify-between p-4 sm:p-5 border-b border-border bg-card shrink-0">
				<div className="w-48 sm:w-56 h-14 sm:h-16 relative">
					<Image
						src={DentalSmilesLogo}
						alt="Dental Smiles Logo"
						fill
						className="object-contain object-left"
						sizes="(max-width: 640px) 192px, 224px"
						priority
					/>
				</div>
				<button
					onClick={() => setIsMenuOpen(false)}
					type="button"
					className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-clinical-grey transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer shrink-0"
					aria-label="Close menu"
				>
					<X className="w-6 h-6" />
				</button>
			</div>

			{/* Drawer Content Body: Nav Links -> Reserve Appointment -> Socials */}
			<div className="overflow-y-auto p-4 sm:p-5 flex-1 space-y-5">
				<nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
					{navItems.map((item) => {
						const active = isPathActive(item.path);
						return (
							<Link
								key={item.path}
								href={item.path}
								onClick={() => setIsMenuOpen(false)}
								className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all duration-200 ${
									active
										? "bg-primary text-primary-foreground shadow-xs font-bold"
										: "text-foreground hover:text-primary hover:bg-primary/5"
								}`}
							>
								{item.name}
							</Link>
						);
					})}
				</nav>

				{/* Accessibility Settings in Mobile Drawer */}
				<button
					type="button"
					onClick={() => {
						setIsMenuOpen(false);
						setTimeout(() => {
							window.dispatchEvent(new CustomEvent('open-accessibility-menu'));
						}, 150);
					}}
					className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 border border-border/70 bg-slate-50/70 cursor-pointer"
					aria-label="Open Accessibility Settings"
				>
					<span className="flex items-center gap-3">
						<span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 100"
								className="h-4 w-4"
								aria-hidden="true"
							>
								<circle cx="48" cy="27" r="7.5" fill="currentColor" />
								<path d="M48 45 h15" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
								<path d="M48 37 v18 h17 l10 18" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M39 52.5 a 19 19 0 1 0 20 20" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
							</svg>
						</span>
						<span>Accessibility</span>
					</span>
					<span className="text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
						ADA / WCAG
					</span>
				</button>

				{/* Reserve an Appointment CTA */}
				<div className="pt-1 space-y-4">
					<Link
						href="https://leadsmanagementweb.revenuewell.com/49ce5762-045a-4343-9cd3-30106f8ead9d"
						target="_blank"
						rel="noopener noreferrer"
						onClick={() => setIsMenuOpen(false)}
						className="block w-full"
					>
						<Button className="btn-primary w-full justify-center text-sm font-semibold py-3 shadow-md">
							<Calendar className="w-4 h-4 mr-2" />
							Reserve an Appointment
						</Button>
					</Link>

					{/* Social Media Icons directly below Reserve an Appointment */}
					<div className="flex items-center justify-center space-x-3 pt-1">
						<a
							href="tel:5124679955"
							title="Call 512.467.9955"
							aria-label="Call 512.467.9955"
							className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-xs"
						>
							<Phone className="w-4 h-4" />
						</a>
						<a
							href="mailto:info@mydentalsmiles.com"
							title="Email us"
							aria-label="Email us"
							className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-xs"
						>
							<Mail className="w-4 h-4" />
						</a>
						<a
							href="https://www.facebook.com/dentalsmiles78723/"
							target="_blank"
							rel="noopener noreferrer"
							title="Facebook"
							aria-label="Facebook"
							className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-xs"
						>
							<Facebook className="w-4 h-4" />
						</a>
						<a
							href="https://www.linkedin.com/in/divyashetty/"
							target="_blank"
							rel="noopener noreferrer"
							title="LinkedIn"
							aria-label="LinkedIn"
							className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-xs"
						>
							<Linkedin className="w-4 h-4" />
						</a>
						<a
							href="https://www.youtube.com/user/dshettydmd"
							target="_blank"
							rel="noopener noreferrer"
							title="YouTube"
							aria-label="YouTube"
							className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-xs"
						>
							<Youtube className="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>

			{/* Minimal Footer: Address */}
			<div className="p-4 border-t border-border bg-slate-50/60 shrink-0 text-center">
				<div className="text-[11px] text-muted-foreground flex items-center justify-center gap-1">
					<MapPin className="w-3 h-3 text-primary shrink-0" />
					<span>1201 Barbara Jordan Blvd #1435, Austin, TX</span>
				</div>
			</div>
		</div>
	</>
	);
};

export default Header;