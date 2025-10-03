import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BentoCard from '@/components/UI/BentoCard';
import ContactForm from './ContactForm';

const contactInfo = [
	{
		icon: Phone,
		title: 'Phone',
		details: '512-467-9955',
		description: 'Call us for appointments or urgent questions',
	},
	{
		icon: Mail,
		title: 'Email',
		details: 'info@dentalsmiles.com',
		description: 'Send us a message anytime',
	},
	{
		icon: MapPin,
		title: 'Address',
		details: '1201 Barbara Jordan Blvd, Suite #1435, Austin, TX 78723',
		description: 'Located in the Mueller Medical District with easy parking',
	},
	{
		icon: Clock,
		title: 'Hours',
		details: 'Mon: 8 AM – 5 PM, Tue & Thu: 7 AM – 3 PM, Wed: 8 AM – 5 PM, Fri: 7 AM – 1 PM',
		description: 'Saturdays & Sundays: Closed',
	},
];

export const metadata = {
	title: 'Contact Dental Smiles',
	description:
		'Reach out to Dental Smiles in Austin for appointments, consultations, or dental emergencies.',
};

const ContactPage = () => {
	return (
		<div className="min-h-screen">
			<section className="relative isolate overflow-hidden bg-background">
				<div className="absolute inset-0">
					<Image
						src="/assets/Contact_Hero.jpg"
						alt="Smiling patient talking with dental team at the front desk"
						fill
						priority
						sizes="100vw"
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-background/80 sm:bg-background/70" />
					<div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
				</div>
				<div className="relative">
					<div className="container-clinical py-16 sm:py-20">
						<div className="max-w-xl space-y-6 text-foreground">
							<span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/90 shadow-sm">
								<Phone className="h-3.5 w-3.5" />
								We're here for you
							</span>
							<h1 className="text-4xl md:text-5xl font-heading leading-tight">
								Let's plan your next visit to Dental Smiles
							</h1>
							<p className="text-base sm:text-lg text-foreground/90">
								Our friendly coordinators respond within one business day to help you
								schedule, answer questions, and make sure every detail feels easy.
							</p>
							<div className="grid gap-4 sm:grid-cols-3">
								<div className="rounded-bento border border-border/60 bg-background/60 p-4 backdrop-blur">
									<p className="text-sm font-semibold text-primary">Convenient hours</p>
									<p className="text-xs text-foreground/80">
										Early mornings and lunchtime appointments available.
									</p>
								</div>
								<div className="rounded-bento border border-border/60 bg-background/60 p-4 backdrop-blur">
									<p className="text-sm font-semibold text-primary">Easy parking</p>
									<p className="text-xs text-foreground/80">
										Free garage parking right next to our lobby entrance.
									</p>
								</div>
								<div className="rounded-bento border border-border/60 bg-background/60 p-4 backdrop-blur">
									<p className="text-sm font-semibold text-primary">Flexible scheduling</p>
									<p className="text-xs text-foreground/80">
										Share a few dates and we'll match the perfect time.
									</p>
								</div>
							</div>
							<div className="flex flex-wrap items-center gap-4 pt-2">
								<Link href="#request-appointment">
									<Button className="btn-primary h-auto px-6 py-3 text-base shadow-lg">
										<Calendar className="mr-2 h-4 w-4" />
										Request an appointment
									</Button>
								</Link>
								<p className="text-sm text-foreground/80">
									Prefer to chat? Call us at <span className="font-semibold">512-467-9955</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="container-clinical">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
						{contactInfo.map((info) => (
							<BentoCard
								key={info.title}
								className="text-center p-5 sm:p-6 group hover:border-primary/50 transition-colors"
							>
								<div className="w-12 h-12 bg-primary/10 rounded-bento flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
									<info.icon className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-lg font-heading text-foreground mb-2">
									{info.title}
								</h3>
								<p className="font-medium text-foreground mb-2">
									{info.details}
								</p>
								<p className="text-sm text-muted-foreground">
									{info.description}
								</p>
							</BentoCard>
						))}
					</div>

					<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-12 items-start">
						<div id="request-appointment" className="scroll-mt-28">
							<ContactForm />
						</div>

						<div className="space-y-6">
							<BentoCard className="p-6 sm:p-8">
								<h3 className="text-xl font-heading text-foreground mb-4">
									Visit Our Office
								</h3>
								<div className="space-y-4">
									<div className="flex items-start gap-3">
										<MapPin className="w-5 h-5 text-primary mt-1" />
										<div className="text-sm text-muted-foreground">
											<p className="font-medium text-foreground">1201 Barbara Jordan Blvd</p>
											<p>Suite #1435, Austin, TX 78723</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Clock className="w-5 h-5 text-primary mt-1" />
										<div className="text-sm text-muted-foreground space-y-1">
											<p className="font-medium text-foreground">Monday – Thursday: 7:00 AM – 5:00 PM</p>
											<p>Friday: 7:00 AM – 1:00 PM</p>
											<p>Saturday & Sunday: Closed</p>
										</div>
									</div>
								</div>
								<div className="mt-6 flex flex-wrap items-center gap-3">
									<Link
										href="https://maps.app.goo.gl/J79e6udCYyZJAPLy5"
										target="_blank"
										rel="noreferrer"
									>
										<Button variant="ghost" className="btn-secondary">
											<MapPin className="w-4 h-4 mr-2" />
											Open in Google Maps
										</Button>
									</Link>
									<p className="text-xs text-muted-foreground">
										Complimentary parking available in the attached garage.
									</p>
								</div>
							</BentoCard>

							<BentoCard className="overflow-hidden">
								<div className="relative aspect-[4/3] w-full overflow-hidden rounded-bento">
									<iframe
										title="Dental Smiles Austin map"
										src="https://maps.google.com/maps?q=1201%20Barbara%20Jordan%20Blvd%20Suite%20%231435%20Austin%20TX%2078723&t=&z=15&ie=UTF8&iwloc=&output=embed"
										className="h-full w-full"
										loading="lazy"
										allowFullScreen
										referrerPolicy="no-referrer-when-downgrade"
									/>
								</div>
								<div className="p-5 sm:p-6">
									<h4 className="text-lg font-heading text-foreground mb-1">Find us easily</h4>
									<p className="text-sm text-muted-foreground">
										Our suite sits inside the Mueller Medical District with convenient parking garages and elevator access steps from the lobby.
									</p>
								</div>
							</BentoCard>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding bg-primary text-primary-foreground">
				<div className="container-clinical text-center">
					<h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
						Ready to Schedule Your Appointment?
					</h2>
					<p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
						Don't wait to start your journey to better oral health. Book your
						appointment today and experience the Dental Smiles difference.
					</p>
					<Link href="#request-appointment">
						<Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4 h-auto">
							<Calendar className="w-5 h-5 mr-2" />
							Request an appointment
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
