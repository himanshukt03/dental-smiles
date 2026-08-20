import { MapPin, Phone, Mail, Clock, Calendar, ExternalLink, FileText, Sparkles, Navigation } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BentoCard from '@/components/UI/BentoCard';

export const metadata = {
	title: 'Contact Us',
	description:
		'Reach out to Dental Smiles in Austin for appointments, consultations, or dental emergencies. Located in Mueller Medical District.',
	keywords: [
		'contact dentist Austin',
		'dental appointment Austin',
		'Mueller dentist',
		'emergency dentist Austin TX',
	],
	openGraph: {
		title: 'Contact Dental Smiles | Schedule Your Austin Dental Visit',
		description:
			'Reach out to Dental Smiles in Austin for appointments, consultations, or dental emergencies.',
	},
};

const ContactPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20 text-foreground">
			{/* Top Banner Image */}
			<section className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] w-full overflow-hidden border-b border-primary/10">
				<Image
					src="/assets/Contact_Hero.jpg"
					alt="Dental Smiles office front sign in Austin"
					fill
					priority
					sizes="100vw"
					className="object-cover object-[center_15%]"
				/>
				<div className="absolute inset-0 bg-black/10" />
			</section>

			{/* Title & Subtitle */}
			<section className="pt-8 md:pt-12 pb-6 md:pb-8 bg-background">
				<div className="container-clinical">
					<div className="max-w-4xl mx-auto text-center space-y-3">
						<div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/15">
							<Sparkles className="h-3.5 w-3.5" /> Friendly Austin Dental Team
						</div>
						<h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
							Let&apos;s plan your next visit to Dental Smiles
						</h1>
						<p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
							Our friendly coordinators respond within one business day to help you schedule, answer insurance questions, and make sure every detail feels easy.
						</p>
					</div>
				</div>
			</section>

			{/* Main 2-Column Split: Left (Request Form & Map) | Right (Full Contact Details Rectangle) */}
			<section className="pt-2 pb-16 md:pb-24">
				<div className="container-clinical">
					<div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-stretch">
						{/* LEFT COLUMN: Request Form Card + Map Card */}
						<div className="flex flex-col gap-6 justify-between">
							{/* Request an Appointment Card */}
							<BentoCard id="request-appointment" className="p-6 sm:p-7 scroll-mt-28 space-y-5 border-primary/15 bg-white shadow-sm hover:shadow-md transition-all">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
										<Calendar className="w-5 h-5 text-primary" />
									</div>
									<div>
										<h2 className="text-xl font-heading font-bold text-foreground tracking-tight">Request an appointment</h2>
										<p className="text-xs text-muted-foreground">Quick, convenient online scheduling</p>
									</div>
								</div>

								<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
									Ready to schedule your visit? Click below to request an appointment online. Our team will reach out within one business day to confirm your preferred date and time.
								</p>

								<div className="bg-clinical-creme/60 rounded-xl p-3.5 border border-primary/10 space-y-1.5">
									<h3 className="text-xs font-bold text-foreground uppercase tracking-wider">What to expect:</h3>
									<ul className="text-xs text-muted-foreground space-y-1">
										<li className="flex items-center gap-2">
											<span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
											Quick and easy 2-minute online form
										</li>
										<li className="flex items-center gap-2">
											<span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
											Choose your preferred dates and times
										</li>
										<li className="flex items-center gap-2">
											<span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
											Confirmation call or email within 1 business day
										</li>
									</ul>
								</div>

								<Link
									href="https://rwl.io/4lGeyT1"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<Button className="btn-primary w-full py-3 text-sm font-semibold shadow-md">
										<FileText className="mr-2 h-4 w-4" />
										Request Appointment Online
										<ExternalLink className="ml-2 h-3.5 w-3.5" />
									</Button>
								</Link>

								<p className="text-center text-xs text-muted-foreground">
									Prefer to call? Reach us at{' '}
									<Link href="tel:5124679955" className="font-bold text-primary hover:underline">
										512.467.9955
									</Link>
								</p>
							</BentoCard>

							{/* Interactive Google Map Card */}
							<BentoCard className="p-4 overflow-hidden border-primary/15 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between flex-1">
								<div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden rounded-xl border border-primary/10">
									<iframe
										title="Dental Smiles Austin map"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.604617627467!2d-97.7082495!3d30.305315600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca061ab0364d%3A0xa1253d5b85da5cd3!2sDental%20Smiles!5e0!3m2!1sen!2sin!4v1774423801934!5m2!1sen!2sin"
										className="h-full w-full"
										loading="lazy"
										allowFullScreen
										referrerPolicy="no-referrer-when-downgrade"
									/>
								</div>
								<div className="pt-3 px-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
									<div>
										<h4 className="text-xs font-bold text-foreground">Find Us in Mueller Medical District</h4>
										<p className="text-[11px] text-muted-foreground">Convenient parking available on-site</p>
									</div>
									<Link
										href="https://maps.app.goo.gl/x23YX9GCRDdyhyr56"
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
									>
										<Navigation className="h-3 w-3" /> Get Directions
									</Link>
								</div>
							</BentoCard>
						</div>

						{/* RIGHT COLUMN: Single Unified Contact Details Rectangle */}
						<BentoCard className="p-6 sm:p-8 border-primary/20 bg-white shadow-md rounded-2xl flex flex-col justify-between space-y-6 h-full">
							<div className="space-y-6">
								{/* Header */}
								<div className="border-b border-primary/10 pb-4">
									<h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground tracking-tight">
										Contact Information
									</h2>
									<p className="text-xs text-muted-foreground mt-1">
										Get in touch directly with Dr. Shetty and our Austin team.
									</p>
								</div>

								{/* Details List */}
								<div className="space-y-5">
									{/* Phone */}
									<div className="flex items-start gap-3.5">
										<div className="w-9 h-9 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-0.5">
											<Phone className="w-4 h-4 text-primary" />
										</div>
										<div className="space-y-0.5">
											<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</p>
											<Link
												href="tel:5124679955"
												className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors block"
											>
												512.467.9955
											</Link>
											<p className="text-xs text-muted-foreground">Call for appointments or urgent questions</p>
										</div>
									</div>

									{/* Email */}
									<div className="flex items-start gap-3.5">
										<div className="w-9 h-9 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-0.5">
											<Mail className="w-4 h-4 text-primary" />
										</div>
										<div className="space-y-0.5">
											<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</p>
											<Link
												href="mailto:info@dentalsmiles.com"
												className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors block"
											>
												info@dentalsmiles.com
											</Link>
											<p className="text-xs text-muted-foreground">Send us a message anytime</p>
										</div>
									</div>

									{/* Address */}
									<div className="flex items-start gap-3.5">
										<div className="w-9 h-9 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-0.5">
											<MapPin className="w-4 h-4 text-primary" />
										</div>
										<div className="space-y-1">
											<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Address</p>
											<p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
												Dental Smiles, 1201 Barbara Jordan Blvd, Suite #1435, Austin, TX 78723
											</p>
											<Link
												href="https://maps.app.goo.gl/x23YX9GCRDdyhyr56"
												target="_blank"
												rel="noopener noreferrer"
												className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 pt-0.5"
											>
												Open in Google Maps <ExternalLink className="h-3 w-3" />
											</Link>
										</div>
									</div>

									{/* Hours */}
									<div className="flex items-start gap-3.5 border-t border-primary/10 pt-4">
										<div className="w-9 h-9 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-0.5">
											<Clock className="w-4 h-4 text-primary" />
										</div>
										<div className="space-y-2 flex-1">
											<div className="flex items-center justify-between">
												<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Office Hours</p>
												<span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
													Open Weekly
												</span>
											</div>

											<div className="space-y-1.5 text-xs text-foreground">
												<div className="flex justify-between py-1 border-b border-primary/5">
													<span className="text-muted-foreground font-medium">Monday & Wednesday</span>
													<span className="font-semibold">8:00 AM – 1:00 PM</span>
												</div>
												<div className="flex justify-between py-1 border-b border-primary/5">
													<span className="text-muted-foreground font-medium">Tuesday & Thursday</span>
													<span className="font-semibold">7:00 AM – 3:00 PM</span>
												</div>
												<div className="flex justify-between py-1 border-b border-primary/5">
													<span className="text-muted-foreground font-medium">Friday</span>
													<span className="font-semibold">7:00 AM – 1:00 PM</span>
												</div>
												<div className="flex justify-between py-1 text-muted-foreground">
													<span className="font-medium">Saturday & Sunday</span>
													<span className="font-semibold text-muted-foreground/80">Closed</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Card Bottom Note */}
							<div className="bg-primary/5 rounded-xl p-3.5 border border-primary/10 text-center">
								<p className="text-xs text-muted-foreground">
									Conveniently serving Mueller, Hyde Park, North Loop, and Central Austin.
								</p>
							</div>
						</BentoCard>
					</div>
				</div>
			</section>

			{/* Bottom CTA Banner */}
			<section className="py-6 sm:py-8 lg:py-10">
				<div className="container-clinical">
					<div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-primary text-primary-foreground shadow-lg">
						<div className="absolute -left-24 top-0 h-[140%] w-72 rotate-12 bg-white/10 blur-3xl pointer-events-none" />
						<div className="relative grid gap-4 p-6 sm:p-8 lg:p-10">
							<h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight">
								Ready to Schedule Your Appointment?
							</h2>
							<p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
								Don&apos;t wait to start your journey to better oral health. Book your appointment today and experience personalized, compassionate dental care in Austin.
							</p>
							<div className="flex flex-col gap-3 sm:flex-row pt-1">
								<Link href="https://rwl.io/4lGeyT1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
									<Button className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs sm:text-sm font-semibold px-5 py-2.5">
										<Calendar className="mr-2 h-4 w-4" />
										Request Online Form
										<ExternalLink className="ml-2 h-3.5 w-3.5" />
									</Button>
								</Link>
								<Link href="tel:5124679955" className="w-full sm:w-auto">
									<Button
										variant="ghost"
										className="w-full sm:w-auto border border-primary-foreground/30 bg-white/10 text-primary-foreground hover:bg-white/20 text-xs sm:text-sm font-semibold px-5 py-2.5"
									>
										<Phone className="mr-2 h-4 w-4" /> Call 512.467.9955
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

export default ContactPage;
