import { CheckCircle, Clock, FileText, CreditCard, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BentoCard from "@/components/UI/BentoCard";

const preparationSteps = [
	{
		icon: FileText,
		title: "Complete New Patient Forms",
		description: "Fill out our online forms in advance to save time during your visit.",
		action: "Download Forms",
	},
	{
		icon: CreditCard,
		title: "Bring Insurance Information",
		description: "Bring your insurance card and a valid ID for verification.",
		action: "Verify Coverage",
	},
	{
		icon: Clock,
		title: "Arrive 15 Minutes Early",
		description: "Please arrive early to complete any remaining paperwork.",
		action: "Plan Your Trip",
	},
	{
		icon: Users,
		title: "List Current Medications",
		description: "Prepare a list of all medications, vitamins, and supplements you take.",
		action: "Medication List",
	},
];

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

const documents = [
	"Valid photo identification (driver's license, passport, etc.)",
	"Dental insurance card and information",
	"List of current medications and dosages",
	"Previous dental records or X-rays (if available)",
	"Emergency contact information",
	"Preferred pharmacy information",
];

export const metadata = {
	title: "Your First Visit | Dental Smiles",
	description: "Learn how to prepare for your first visit to Dental Smiles and what to expect during your appointment.",
};

const FirstVisitPage = () => {
	return (
		<div className="min-h-screen">
			<section className="section-padding bg-gradient-to-br from-clinical-creme to-clinical-grey">
				<div className="container-clinical text-center">
					<h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
						Your First Visit
					</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
						We're excited to welcome you to Dental Smiles! Here's everything you need to know to make your
						first visit smooth and comfortable.
					</p>
					<Button className="btn-primary text-lg px-8 py-4 h-auto w-full sm:w-auto">
						<Clock className="w-5 h-5 mr-2" />
						Schedule Your First Visit
					</Button>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="container-clinical">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
							How to Prepare
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							Follow these simple steps to ensure your first visit goes smoothly and efficiently.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
						{preparationSteps.map((step) => (
							<BentoCard key={step.title} className="p-5 sm:p-6 h-full">
								<div className="flex flex-col sm:flex-row sm:items-start gap-4">
									<div className="w-12 h-12 bg-primary/10 rounded-bento flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
										<step.icon className="w-6 h-6 text-primary" />
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-heading font-semibold text-foreground mb-2">
											{step.title}
										</h3>
										<p className="text-muted-foreground mb-4">{step.description}</p>
										<Button variant="ghost" className="btn-ghost p-0 h-auto text-primary">
											{step.action}
											<CheckCircle className="w-4 h-4 ml-2" />
										</Button>
									</div>
								</div>
							</BentoCard>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-clinical-creme">
				<div className="container-clinical">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
							What to Expect
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							Your first visit typically takes 60-90 minutes. Here's a step-by-step overview of what you can
							expect during your appointment.
						</p>
					</div>

					<div className="space-y-6 sm:space-y-8">
						{whatToExpect.map((item) => (
							<div key={item.step} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
								<div className="w-12 h-12 bg-primary rounded-bento flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
									{item.step}
								</div>
								<BentoCard className="flex-1 p-5 sm:p-6">
									<h3 className="text-xl font-heading font-semibold text-foreground mb-2">
										{item.title}
									</h3>
									<p className="text-muted-foreground">{item.description}</p>
								</BentoCard>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="container-clinical">
					<div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
						<div>
							<h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
								Documents to Bring
							</h2>
							<p className="text-lg text-muted-foreground mb-8">
								Please bring the following items to ensure we can provide you with the best possible care
								and verify your insurance benefits.
							</p>
							<Button className="btn-primary w-full sm:w-auto">
								<FileText className="w-4 h-4 mr-2" />
								Download Patient Forms
							</Button>
						</div>

						<BentoCard className="p-5 sm:p-6">
							<h3 className="text-xl font-heading font-semibold text-foreground mb-6">
								Required Documents
							</h3>
							<ul className="space-y-4">
								{documents.map((document) => (
									<li key={document} className="flex items-start space-x-3">
										<CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-muted-foreground">{document}</span>
									</li>
								))}
							</ul>
						</BentoCard>
					</div>
				</div>
			</section>

			<section className="section-padding bg-clinical-creme">
				<div className="container-clinical">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							Common questions about your first visit to Dental Smiles.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
						<BentoCard className="p-5 sm:p-6">
							<h3 className="text-lg font-semibold text-foreground mb-3">
								How long will my first visit take?
							</h3>
							<p className="text-muted-foreground">
								Your initial appointment typically takes 60-90 minutes to allow time for a comprehensive
								examination, X-rays, and consultation about your treatment options.
							</p>
						</BentoCard>

						<BentoCard className="p-5 sm:p-6">
							<h3 className="text-lg font-semibold text-foreground mb-3">
								Will I receive treatment on my first visit?
							</h3>
							<p className="text-muted-foreground">
								In most cases, your first visit focuses on examination and consultation. However, if you're
								experiencing pain or have an urgent need, we may provide treatment on the same day.
							</p>
						</BentoCard>

						<BentoCard className="p-5 sm:p-6">
							<h3 className="text-lg font-semibold text-foreground mb-3">
								What if I'm nervous about my visit?
							</h3>
							<p className="text-muted-foreground">
								It's completely normal to feel anxious. Our team specializes in helping nervous patients feel
								comfortable. We offer sedation options and will explain everything before we begin.
							</p>
						</BentoCard>

						<BentoCard className="p-5 sm:p-6">
							<h3 className="text-lg font-semibold text-foreground mb-3">
								Do you accept my insurance?
							</h3>
							<p className="text-muted-foreground">
								We accept most major dental insurance plans. Our team will verify your benefits before your
								visit and help you understand your coverage and any out-of-pocket costs.
							</p>
						</BentoCard>
					</div>
				</div>
			</section>

			<section className="section-padding bg-primary text-primary-foreground">
				<div className="container-clinical">
					<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
								Ready for Your First Visit?
							</h2>
							<p className="text-lg mb-6 opacity-90">
								We're here to make your experience comfortable and stress-free. Contact us if you have any
								questions or special needs.
							</p>
							<div className="space-y-4">
								<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
									<Clock className="w-5 h-5" />
									<span>Monday - Friday: 8:00 AM - 6:00 PM</span>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
									<MapPin className="w-5 h-5" />
									<span>123 Main Street, Downtown, ST 12345</span>
								</div>
							</div>
						</div>
						<div className="text-center">
							<Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4 h-auto mb-4 w-full sm:w-auto">
								<Clock className="w-5 h-5 mr-2" />
								Schedule Now
							</Button>
							<p className="text-sm opacity-75">Or call us at 512-467-9955</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FirstVisitPage;
