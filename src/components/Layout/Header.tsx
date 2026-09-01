"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, MapPin } from "lucide-react";
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

	// Close mobile menu on Escape key press
	useEffect(() => {
		if (!isMenuOpen) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMenuOpen(false);
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isMenuOpen]);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	const isPathActive = (path: string) => {
		if (!pathname) return false;
		if (path === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(path);
	};

	return (
		<header
			className={`sticky top-0 z-50 transition-transform duration-300 ${
				hideNav ? "-translate-y-full" : "translate-y-0"
			}`}
		>
			<div className="bg-primary text-primary-foreground">
				<div className="container-clinical">
					<div className="flex items-center justify-between h-10 text-sm">
						<div className="flex items-center space-x-6">
							<div className="flex items-center space-x-2">
								<Phone className="w-4 h-4" />
								<span>512.467.9955</span>
							</div>
							<a
								href="https://maps.app.goo.gl/x23YX9GCRDdyhyr56"
								target="_blank"
								rel="noopener noreferrer"
								className="flex md:hidden items-center space-x-2 hover:underline transition-all"
							>
								<MapPin className="w-4 h-4" />
								<span>Get Directions</span>
							</a>
							<div className="hidden md:flex items-center space-x-2">
								<a
									href="https://maps.app.goo.gl/x23YX9GCRDdyhyr56"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-2 hover:underline transition-all"
								>
									<MapPin className="w-4 h-4" />
									<span>
										1201 Barbara Jordan Blvd, Suite #1435, Austin, TX 78723
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="border-b border-border backdrop-blur-md bg-card/95">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 sm:h-18 lg:h-18 xl:h-20 gap-3 xl:gap-4">
						<Link
							href="/"
							className="flex items-center space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-bento shrink-0"
						>
							<div className="w-40 sm:w-44 lg:w-44 xl:w-52 h-14 sm:h-16 lg:h-16 xl:h-18 rounded-bento overflow-hidden flex items-center justify-center relative">
								<Image
									src={DentalSmilesLogo}
									alt="Dental Smiles Logo"
									fill
									className="object-contain"
									priority
									sizes="(max-width: 768px) 176px, (max-width: 1280px) 180px, 208px"
								/>
							</div>
						</Link>

						<nav className="hidden lg:flex items-center space-x-1 lg:space-x-1.5 xl:space-x-3.5 2xl:space-x-5">
							{navItems.map((item) => {
								const active = isPathActive(item.path);
								return (
									<Link
										key={item.path}
										href={item.path}
										className={`px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-bento text-xs xl:text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
											active
												? "text-primary font-semibold"
												: "text-muted-foreground hover:text-foreground"
										}`}
									>
										{item.name}
									</Link>
								);
							})}
						</nav>

						<div className="hidden lg:block shrink-0 ml-2 xl:ml-4">
							<Link
								href="https://leadsmanagementweb.revenuewell.com/49ce5762-045a-4343-9cd3-30106f8ead9d"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="btn-primary px-3.5 py-1.5 xl:px-5 xl:py-2 text-xs xl:text-sm font-semibold">Book Appointment</Button>
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

					{isMenuOpen && (
						<div id="mobile-navigation" className="lg:hidden py-4 border-t border-border bg-card">
							<nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
								{navItems.map((item) => {
									const active = isPathActive(item.path);
									return (
										<Link
											key={item.path}
											href={item.path}
											onClick={() => setIsMenuOpen(false)}
											className={`px-4 py-3 rounded-bento text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
												active
													? "bg-primary text-primary-foreground"
													: "text-muted-foreground hover:text-foreground hover:bg-clinical-grey"
											}`}
										>
											{item.name}
										</Link>
									);
								})}
								<div className="flex flex-col space-y-3 pt-4 border-t border-border">
									<Button
										variant="ghost"
										size="sm"
										className="justify-start text-muted-foreground"
									>
										<Phone className="w-4 h-4 mr-2" />
										512.467.9955
									</Button>
									<Link
										href="https://leadsmanagementweb.revenuewell.com/49ce5762-045a-4343-9cd3-30106f8ead9d"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button className="btn-primary justify-start">
											<Calendar className="w-4 h-4 mr-2" />
											Book Appointment
										</Button>
									</Link>
								</div>
							</nav>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;