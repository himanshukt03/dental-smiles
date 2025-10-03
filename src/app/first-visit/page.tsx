import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	CalendarCheck,
	CheckCircle,
	CreditCard,
	Phone,
	PiggyBank,
	ShieldCheck,
	Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BentoCard from "@/components/UI/BentoCard";

const whatToExpect = [
	{
		step: "1",
		title: "Welcome & Check-in",
		description: "Our team will greet you and help with registration.",
	},
	{
		step: "2",
		title: "Health Review & X-rays",
		description: "We’ll go over your medical history, take digital X-rays, and note any concerns.",
	},
	{
		step: "3",
		title: "Exam & Cleaning",
		description: "Dr. Shetty will perform a gentle exam and cleaning to assess your oral health.",
	},
	{
		step: "4",
		title: "Treatment & Next Steps",
		description: "We’ll discuss findings, answer questions, and schedule your next visit.",
	},
];

const insuranceHighlights = [
	"In-network with most major PPO plans",
	"Transparent cost estimates before treatment begins",
	"Guidance from our financial coordinators on every claim",
];

const financingHighlights = [
	"CareCredit® and Sunbit® financing partners",
	"Flexible terms with same-day approvals",
	"Budget-friendly monthly payments for advanced care",
];

const cardOptions = [
	{
		name: "Visa",
		logo: "/assets/payment-options/visa.svg",
		alt: "Visa logo",
		accent: "bg-primary/10",
	},
	{
		name: "Mastercard",
		logo: "/assets/payment-options/mastercard.svg",
		alt: "Mastercard logo",
		accent: "bg-primary/10",
	},
	{
		name: "Discover",
		logo: "/assets/payment-options/discover.svg",
		alt: "Discover logo",
		accent: "bg-primary/10",
	},
	{
		name: "American Express",
		logo: "/assets/payment-options/american.svg",
		alt: "American Express logo",
		accent: "bg-primary/10",
	},
];

export const metadata = {
	title: "Your First Visit | Dental Smiles",
	description:
		"Learn how to prepare for your first visit to Dental Smiles and what to expect during your appointment.",
};

const FirstVisitPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20">
			<section className="section-padding pt-12 pb-14">
				<div className="container-clinical">
					<div className="relative overflow-hidden rounded-[2.75rem] border border-primary/10 bg-gradient-to-br from-primary/5 via-white to-white shadow-xl">
						<div className="flex flex-col gap-6 p-8 sm:p-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:p-16">
							<div className="order-2">
								<h1 className="text-3xl md:text-4xl font-heading text-foreground text-center sm:text-left">
									Your first step to <span className="text-[#741234]">comfortable care</span>
								</h1>
							</div>

							<div className="order-3 relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-primary/10 bg-white/70 shadow-lg sm:max-w-lg lg:order-1 lg:mx-0 lg:col-start-1 lg:row-span-2 lg:max-w-[460px]">
								<div className="relative aspect-[16/10] sm:aspect-[3/2] lg:aspect-[4/3]">
									<Image
										src="/assets/dental-office.jpg"
										alt="Smiling patient receiving care at Dental Smiles."
										fill
										sizes="(min-width: 1280px) 460px, (min-width: 1024px) 420px, (min-width: 768px) 46vw, 90vw"
										className="object-cover"
										priority
									/>
								</div>
								<div className="absolute bottom-4 right-4 rounded-2xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
									Compassionate care for every smile
								</div>
							</div>

							<div className="order-4 space-y-6 lg:order-2 lg:col-start-2 lg:row-start-2">
								<div className="space-y-4 text-base leading-relaxed text-muted-foreground">
									<p>
										At Dental Smiles, we keep visits <span className="text-[#741234] font-semibold">stress-free</span> with transparent options and a welcoming team.
									</p>
									<p>
										From your first hello to checkout, we guide you through what matters most, <span className="text-[#741234] font-semibold">clear answers</span>, same-day guidance, and care that fits your plans.
									</p>
								</div>
								<div className="flex flex-col gap-3 sm:flex-row">
									<Link href="/contact#request-appointment" className="w-full sm:w-auto">
										<Button className="btn-primary w-full sm:w-auto px-4 py-3 text-sm font-semibold">
											<CalendarCheck className="mr-2 h-4 w-4" /> Schedule your visit
										</Button>
									</Link>
									<Link href="/contact#request-appointment" className="w-full sm:w-auto">
										<Button
											variant="outline"
											className="w-full sm:w-auto border-primary/20 bg-white/80 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
										>
											<Phone className="mr-2 h-4 w-4" /> Contact us
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding bg-clinical-creme">
				<div className="container-clinical">
					<div className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
						<h2 className="text-3xl md:text-4xl font-heading text-foreground">Your first visit at Dental Smiles</h2>
						<p className="text-lg text-muted-foreground">
							Your first visit typically takes 60–90 minutes. Here&apos;s a step-by-step overview of what you can expect while you&apos;re with us.
						</p>
					</div>
					<div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch lg:gap-16">
						<div className="space-y-4 sm:space-y-5">
							{whatToExpect.map((item) => (
								<div
									key={item.step}
									className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
								>
									<div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
									<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
									<Sparkles className="absolute -right-2 -top-2 h-10 w-10 text-primary/15" aria-hidden="true" />
									<div className="relative flex items-start gap-4 sm:gap-5">
										<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#9d2354] text-base font-semibold text-primary-foreground shadow-lg ring-4 ring-primary/15 sm:h-12 sm:w-12 sm:text-lg">
											{item.step}
										</div>
										<div className="flex-1 space-y-2 sm:space-y-2.5">
											<h3 className="text-base font-heading text-foreground sm:text-lg">{item.title}</h3>
											<p className="text-sm leading-relaxed text-muted-foreground/90 sm:text-[15px]">
												{item.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white/60 shadow-lg sm:max-w-md lg:max-w-lg lg:self-stretch lg:h-full">
							<div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[4/3] lg:h-full lg:aspect-auto">
								<Image
									src="/assets/firstVisit.jpg"
									alt="Patient checking in during their first visit."
									fill
									sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, (min-width: 768px) 35vw, 70vw"
									className="object-cover"
								/>
							</div>
							<div className="absolute bottom-4 right-4 rounded-2xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
								Warm and welcoming team
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding bg-[#741234] text-white">
				<div className="container-clinical">
					<div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-heading">Paying with dental insurance</h2>
							<p className="text-base md:text-lg text-white/90 leading-relaxed">
								We&apos;re in-network with most major PPO plans and keep billing effortless with upfront estimates and help on every claim.
							</p>
							<ul className="grid gap-4 sm:grid-cols-2">
								{insuranceHighlights.map((highlight) => (
									<li key={highlight} className="flex items-start gap-3 rounded-[1.25rem] bg-white/90 px-4 py-4 text-sm text-[#4b4b4b] shadow-sm">
										<CheckCircle className="mt-0.5 h-4 w-4 text-[#741234]" />
										<span>{highlight}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[1.5rem] border border-white/30 bg-white/10 shadow-lg sm:max-w-[360px] lg:max-w-[420px]">
							<div className="relative aspect-[5/6] sm:aspect-[6/7] lg:aspect-[6/7]">
								<Image
									src="/assets/Paying_With_Insurance.jpg"
									alt="Patient reviewing dental insurance details."
									fill
									sizes="(min-width: 1280px) 400px, (min-width: 1024px) 340px, (min-width: 768px) 44vw, 78vw"
									className="object-cover"
								/>
							</div>
							<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-white px-3.5 py-2 text-[12px] font-semibold text-[#741234] shadow-lg">
								<ShieldCheck className="h-4 w-4" />
								<span>Coverage guidance made easy</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding bg-clinical-creme">
				<div className="container-clinical">
					<div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
						<div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white/60 shadow-lg sm:max-w-sm lg:max-w-md">
							<div className="relative aspect-[4/3]">
								<Image
									src="/assets/dental-team.jpg"
									alt="Couple reviewing dental financing options."
									fill
									sizes="(min-width: 1024px) 360px, (min-width: 768px) 40vw, 75vw"
									className="object-cover"
								/>
							</div>
							<div className="absolute bottom-4 right-4 rounded-2xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
								Flexible financing made simple
							</div>
						</div>

						<BentoCard className="border border-primary/10 bg-white/90 p-8 md:p-10">
							<div className="space-y-5">
								<h2 className="text-3xl md:text-4xl font-heading text-foreground">Flexible financing</h2>
								<p className="text-lg text-muted-foreground leading-relaxed">
									At Dental Smiles, our goal is to remove any barriers that keep you from receiving the treatment
									you need. That&apos;s why we partner with CareCredit and Sunbit to divide the cost of care into manageable
									monthly payments. Apply today or call us for personal guidance.
								</p>
								<ul className="space-y-3">
									{financingHighlights.map((highlight) => (
										<li key={highlight} className="flex items-start gap-3 rounded-bento bg-clinical-grey/20 px-4 py-3">
											<PiggyBank className="mt-0.5 h-4 w-4 text-primary" />
											<span className="text-sm text-foreground/90">{highlight}</span>
										</li>
									))}
								</ul>
								<div className="flex flex-col gap-3 sm:flex-row">
									<Link href="/contact" className="w-full sm:w-auto">
										<Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
											Discuss financing
										</Button>
									</Link>
									<Link href="https://apply.sunbit.com" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
										<Button
											variant="outline"
											className="w-full sm:w-auto border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
										>
											Apply online
											<ArrowRight className="ml-2 h-4 w-4" />
										</Button>
									</Link>
								</div>
							</div>
						</BentoCard>
					</div>
				</div>
			</section>

			<section className="section-padding">
				<div className="container-clinical">
					<h2 className="text-3xl md:text-4xl font-heading text-foreground mb-8 text-center">
						Other payment options
					</h2>
					<p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
						We also accept most major debit and credit cards for simple, secure payments at the time of service.
						Let us know how you&apos;d like to take care of your balance—we&apos;re here to help.
					</p>
					<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{cardOptions.map((card) => (
							<div
								key={card.name}
								className={`flex items-center justify-center rounded-2xl border border-primary/10 bg-white/80 px-5 py-4 text-base font-semibold text-foreground shadow-sm ${card.accent}`}
							>
								<Image
									src={card.logo}
									alt={card.alt}
									width={120}
									height={36}
									className="h-8 w-auto"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-primary text-primary-foreground">
				<div className="container-clinical">
					<div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
						<div className="space-y-5">
							<h2 className="text-3xl md:text-4xl font-heading">In-house dental membership plan</h2>
							<p className="text-lg opacity-90">
								No dental insurance? No problem. Our in-house membership plan keeps preventive care affordable for
								you and your family with exclusive savings on treatments all year long.
							</p>
							<ul className="space-y-3 text-sm">
								<li className="flex items-start gap-3">
									<CheckCircle className="mt-0.5 h-4 w-4" />
									<span>Comprehensive exams, cleanings, and X-rays included</span>
								</li>
								<li className="flex items-start gap-3">
									<CheckCircle className="mt-0.5 h-4 w-4" />
									<span>Members-only savings on restorative and cosmetic care</span>
								</li>
								<li className="flex items-start gap-3">
									<CheckCircle className="mt-0.5 h-4 w-4" />
									<span>No deductibles, waiting periods, or surprise fees</span>
								</li>
							</ul>
							<div className="flex flex-col gap-3 sm:flex-row">
								<Link href="https://member.clerri.com/enrollment/accounts/create/?slug=KV5G" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
									<Button className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
										Join now
									</Button>
								</Link>
								<Link href="tel:5124679955" className="w-full sm:w-auto">
									<Button
										variant="ghost"
										className="w-full sm:w-auto border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20"
									>
										Call for details
									</Button>
								</Link>
							</div>
					</div>

					<div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.5rem] border border-primary/20 bg-primary/20 shadow-2xl sm:max-w-sm lg:max-w-md">
						<div className="relative aspect-[4/3]">
							<Image
								src="/assets/dental.jpg"
								alt="Smiling patient holding a membership card."
								fill
								sizes="(min-width: 1024px) 360px, (min-width: 768px) 40vw, 75vw"
								className="object-cover"
							/>
						</div>
						<div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-2 text-xs font-semibold text-primary shadow-lg">
							Exclusive member perks
						</div>
					</div>
				</div>
			</div>
		</section>			
		
		<section className="section-padding">
			<div className="container-clinical">
				<div className="w-full rounded-3xl border border-primary/10 bg-gradient-to-br from-white to-clinical-creme/80 p-8 sm:p-12 shadow-2xl backdrop-blur-sm transition-transform hover:-translate-y-0.5">
					<div className="space-y-4">
						<h2 className="text-3xl md:text-4xl font-heading text-foreground leading-tight">
							Have a question about our services?
						</h2>
						<p className="text-lg text-muted-foreground max-w-prose">
							Interested in learning more about financing, membership, or what to expect during your first visit?
							Our care team is here to help every step of the way.
						</p>
						<div className="flex flex-col gap-3 sm:flex-row sm:items-center mt-4">
							<Link href="/contact" className="w-full sm:w-auto">
								<Button className="w-full sm:w-auto bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5">
									Contact us
								</Button>
							</Link>
							<Link href="tel:5124679955" className="w-full sm:w-auto">
								<Button
									variant="outline"
									className="w-full sm:w-auto border border-primary/20 bg-white/60 px-6 py-3 rounded-lg text-primary hover:bg-primary/5 hover:border-primary transition duration-200 ease-in-out"
								>
									Call 512-467-9955
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
	);
};

export default FirstVisitPage;
