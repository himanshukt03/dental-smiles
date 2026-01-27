import { MapPin, Phone, Mail, Clock, Calendar, ExternalLink, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BentoCard from '@/components/UI/BentoCard';

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
		<div className="min-h-screen">
			<section className="relative h-[40vh] sm:h-[50vh] w-full overflow-hidden">
				<Image
					src="/assets/Contact_Hero.jpg"
					alt="Dental Smiles office front"
					fill
					priority
					sizes="100vw"
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/20" />
			</section>

			<section className="pt-16 md:pt-24 pb-6 md:pb-8 bg-background">
				<div className="container-clinical">
					<div className="max-w-4xl mx-auto text-center space-y-4">
						<h1 className="text-3xl md:text-5xl font-heading leading-tight text-foreground whitespace-normal md:whitespace-nowrap">
							Let&apos;s plan your next visit to Dental Smiles
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
							Our friendly coordinators respond within one business day to help you
							schedule, answer questions, and make sure every detail feels easy.
						</p>
					</div>
				</div>
			</section>

			<section className="pt-6 md:pt-8 pb-16 md:pb-24">
				<div className="container-clinical">
					<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-12 items-start">
						<div id="request-appointment" className="scroll-mt-28">
							<BentoCard className="p-6 sm:p-8">
								<div className="space-y-6">
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 bg-primary/10 rounded-bento flex items-center justify-center">
											<Calendar className="w-6 h-6 text-primary" />
										</div>
										<div>
											<h2 className="text-2xl font-heading text-foreground">Request an appointment</h2>
										</div>
									</div>

									<p className="text-muted-foreground leading-relaxed">
										Ready to schedule your visit? Click the button below to request an appointment online. Our team will reach out within one business day to confirm your preferred time.
									</p>

									<div className="bg-clinical-creme/50 rounded-bento p-4 border border-primary/10">
										<h3 className="text-sm font-semibold text-foreground mb-2">What to expect:</h3>
										<ul className="text-sm text-muted-foreground space-y-1">
											<li>• Quick and easy online form</li>
											<li>• Choose your preferred dates and times</li>
											<li>• Confirmation within 1 business day</li>
										</ul>
									</div>

									<Link
										href="https://rwl.io/4lGeyT1"
										target="_blank"
										rel="noopener noreferrer"
										className="block"
									>
										<Button className="btn-primary w-full py-4 text-base">
											<FileText className="mr-2 h-5 w-5" />
											Request Appointment Online
											<ExternalLink className="ml-2 h-4 w-4" />
										</Button>
									</Link>

									<p className="text-center text-sm text-muted-foreground">
										Prefer to call? Reach us at{' '}
										<Link href="tel:5124679955" className="font-semibold text-primary hover:underline">
											512-467-9955
										</Link>
									</p>
								</div>
							</BentoCard>
						</div>

						<div className="space-y-6">
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

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 mb-12">
						{contactInfo.map((info) => (
							<BentoCard
								key={info.title}
								className="text-center p-5 sm:p-6 group hover:border-primary/50 transition-colors"
							>
								<div className="w-10 h-10 bg-primary/10 rounded-bento flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
									<info.icon className="w-5 h-5 text-primary" />
								</div>
								<h3 className="text-base font-heading text-foreground mb-1">
									{info.title}
								</h3>
								<p className="text-sm font-medium text-foreground mb-1">
									{info.details}
								</p>
								<p className="text-xs text-muted-foreground">
									{info.description}
								</p>
							</BentoCard>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-primary text-primary-foreground">
				<div className="container-clinical text-center">
					<h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
						Ready to Schedule Your Appointment?
					</h2>
					<p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
						Don&apos;t wait to start your journey to better oral health. Book your
						appointment today and experience the Dental Smiles difference.
					</p>
					<Link href="https://rwl.io/4lGeyT1" target="_blank" rel="noopener noreferrer">
						<Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4 h-auto">
							<Calendar className="w-5 h-5 mr-2" />
							Request an appointment
							<ExternalLink className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</section>
		</div >
	);
};

export default ContactPage;
