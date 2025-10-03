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
		title: "Warm Welcome & Check-in",
		description: "Our friendly staff will greet you and help complete your registration.",
	},
	{
		step: "2",
		title: "Medical History Review",
		description: "We'll review your health history and discuss any concerns or goals.",
	},
	{
		step: "3",
		title: "Comprehensive Examination",
		description: "Thorough oral examination including digital X-rays and oral cancer screening.",
	},
	{
		step: "4",
		title: "Treatment Discussion",
		description: "We'll explain our findings and discuss any recommended treatments.",
	},
	{
		step: "5",
		title: "Treatment Planning",
		description: "Together, we'll create a personalized treatment plan that fits your needs and budget.",
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
	{ name: "Visa", accent: "bg-primary/10" },
	{ name: "Mastercard", accent: "bg-primary/10" },
	{ name: "Discover", accent: "bg-primary/10" },
	{ name: "American Express", accent: "bg-primary/10" },
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
							<div className="order-2 block lg:hidden">
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
										From your first hello to checkout, we guide you through what matters most—<span className="text-[#741234] font-semibold">clear answers</span>, same-day guidance, and care that fits your plans.
									</p>
								</div>
								<div className="flex flex-col gap-3 sm:flex-row">
									<Link href="/book-appointment" className="w-full sm:w-auto">
										<Button className="btn-primary w-full sm:w-auto px-4 py-3 text-sm font-semibold">
											<CalendarCheck className="mr-2 h-4 w-4" /> Schedule your visit
										</Button>
									</Link>
									<Link href="/contact" className="w-full sm:w-auto">
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

			<section className="section-padding pt-16">
				<div className="container-clinical">
					<div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:gap-16">
						<BentoCard className="relative overflow-hidden border border-primary/10 bg-white/90 p-8 md:p-10">
							<div className="space-y-5">
								<h2 className="text-3xl md:text-4xl font-heading text-foreground">
									Your first visit at Dental Smiles
								</h2>
								<p className="text-lg text-muted-foreground leading-relaxed">
									We know new patients are curious about what happens during a first dental visit. At Dental Smiles,
									your first visit is the start of a long-lasting relationship. Digital X-rays will be taken and you’ll
									meet Dr. Shetty for a comprehensive exam and gentle cleaning.
								</p>
								<p className="text-lg text-muted-foreground leading-relaxed">
									After reviewing X-rays and completing your thorough exam, Dr. Shetty will explain any findings,
									answer your questions, and outline the next steps. Before you leave, we’ll schedule your next visit so
									your smile stays on a healthy path.
								</p>
								<div className="flex flex-col gap-3 sm:flex-row">
									<Link href="tel:5124679955" className="w-full sm:w-auto">
										<Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
											<Phone className="mr-2 h-5 w-5" /> Call 512-467-9955
										</Button>
									</Link>
									<Link href="/book-appointment" className="w-full sm:w-auto">
										<Button variant="ghost" className="w-full sm:w-auto text-primary hover:text-primary-foreground hover:bg-primary">
											Learn more
											<ArrowRight className="ml-2 h-4 w-4" />
										</Button>
									</Link>
								</div>
							</div>
						</BentoCard>

						<div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white/60 shadow-lg sm:max-w-sm lg:max-w-md">
							<div className="relative aspect-[3/4]">
								<Image
									src="/assets/team/dr-divya-shetty.jpg"
									alt="Dr. Shetty welcoming a new patient."
									fill
									sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 80vw"
									className="object-cover"
								/>
							</div>
							<div className="absolute bottom-4 left-4 rounded-2xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
								Meet Dr. Shetty on day one
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding bg-clinical-creme">
				<div className="container-clinical">
					<div className="max-w-3xl space-y-4 text-center md:text-left">
						<h2 className="text-3xl md:text-4xl font-heading text-foreground">What to expect</h2>
						<p className="text-lg text-muted-foreground">
							Your first visit typically takes 60–90 minutes. Here&apos;s a step-by-step overview of what you can expect
							while you&apos;re with us.
						</p>
					</div>

					<div className="mt-12 space-y-6 sm:space-y-8">
						{whatToExpect.map((item) => (
							<div key={item.step} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-bento bg-primary text-lg font-semibold text-primary-foreground">
									{item.step}
								</div>
								<BentoCard className="flex-1 border border-primary/10 bg-white p-5 sm:p-6">
									<h3 className="text-xl font-heading text-foreground mb-2">{item.title}</h3>
									<p className="text-muted-foreground">{item.description}</p>
								</BentoCard>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding">
				<div className="container-clinical">
					<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-heading text-foreground">Paying with dental insurance</h2>
							<p className="text-lg text-muted-foreground leading-relaxed">
								Our dental office is in-network with most major PPO dental insurance plans. Because every treatment
								plan is unique, your final cost and coverage may differ—but our financial coordinators are here to help.
								We&apos;ll review costs before we begin and help you maximize your benefits and file claims with ease.
							</p>
							<ul className="space-y-3">
								{insuranceHighlights.map((highlight) => (
									<li key={highlight} className="flex items-start gap-3 rounded-bento bg-clinical-creme px-4 py-3">
										<CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
										<span className="text-sm text-foreground/90">{highlight}</span>
									</li>
								))}
							</ul>
							<div className="flex flex-col gap-3 sm:flex-row">
								<Link href="tel:5124679955" className="w-full sm:w-auto">
									<Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
										Verify my coverage
									</Button>
								</Link>
								<Link href="/contact" className="w-full sm:w-auto">
									<Button variant="ghost" className="w-full sm:w-auto text-primary hover:bg-primary hover:text-primary-foreground">
										Ask a question
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							</div>
						</div>

						<div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white/60 shadow-lg sm:max-w-sm lg:max-w-md">
							<div className="relative aspect-[3/4]">
								<Image
									src="/assets/team/jessica-martinez.jpg"
									alt="Team member helping a patient over the phone about insurance."
									fill
									sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 80vw"
									className="object-cover"
								/>
							</div>
							<div className="absolute bottom-4 left-4 rounded-2xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
								Insurance experts on your side
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding bg-clinical-creme">
				<div className="container-clinical">
					<div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
						<div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white/60 shadow-lg sm:max-w-sm lg:max-w-md">
							<div className="relative aspect-[3/4]">
								<Image
									src="/assets/dental-team.jpg"
									alt="Couple reviewing dental financing options."
									fill
									sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 80vw"
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
								className={`flex items-center justify-between rounded-2xl border border-primary/10 bg-white/80 px-5 py-4 text-base font-semibold text-foreground shadow-sm ${card.accent}`}
							>
								<span>{card.name}</span>
								<CreditCard className="h-5 w-5 text-primary" />
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
								<Link href="/contact" className="w-full sm:w-auto">
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

						<div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.75rem] border border-primary/20 bg-primary/20 shadow-2xl sm:max-w-sm lg:max-w-md">
							<div className="relative aspect-[3/4]">
								<Image
									src="/assets/dental.jpg"
									alt="Smiling patient holding a membership card."
									fill
									sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 80vw"
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
					<div className="grid gap-10 rounded-[2.75rem] border border-primary/10 bg-white/90 p-10 shadow-xl lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
						<div className="space-y-5">
							<h2 className="text-3xl md:text-4xl font-heading text-foreground">
								Have a question about our services?
							</h2>
							<p className="text-lg text-muted-foreground">
								Interested in learning more about financing, membership, or what to expect during your first visit?
								Our care team is here to help every step of the way.
							</p>
							<div className="flex flex-col gap-3 sm:flex-row">
								<Link href="/contact" className="w-full sm:w-auto">
									<Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
										Contact us
									</Button>
								</Link>
								<Link href="tel:5124679955" className="w-full sm:w-auto">
									<Button variant="outline" className="w-full sm:w-auto border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
										Call 512-467-9955
									</Button>
								</Link>
							</div>
						</div>

						<div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.75rem] border border-primary/10 bg-primary/5 sm:max-w-sm lg:max-w-md">
							<div className="relative aspect-[3/4]">
								<Image
									src="/assets/window.svg"
									alt="Dental Smiles office door."
									fill
									sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 80vw"
									className="object-contain p-8"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FirstVisitPage;
