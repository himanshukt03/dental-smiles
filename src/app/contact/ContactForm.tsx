'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarCheck, CalendarDays, Clock, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import BentoCard from '@/components/UI/BentoCard';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const appointmentReasons = [
	'Exam & Cleaning',
	'Consultation',
	'Previously Discussed Treatment',
	'Other',
	'Virtual Visit',
];

const fieldStyles =
	'rounded-bento border border-[#d0d5dd] bg-white text-foreground placeholder:text-muted-foreground shadow-sm transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15 focus:ring-offset-1';
const selectStyles = `${fieldStyles} px-3 py-2 text-sm`;
const dateTriggerStyles =
	'w-full justify-start gap-2 rounded-bento border border-[#d0d5dd] bg-white text-left font-normal shadow-sm transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15 focus:ring-offset-1';

const officeSchedule: Record<string, { slots: string[]; closed: boolean }> = {
	Monday: {
		slots: ['Anytime', '8 AM – 11 AM', '11 AM – 2 PM', '2 PM – 5 PM'],
		closed: false,
	},
	Tuesday: {
		slots: ['Anytime', '7 AM – 10 AM', '10 AM – 1 PM', '1 PM – 3 PM'],
		closed: false,
	},
	Wednesday: {
		slots: ['Anytime', '8 AM – 11 AM', '11 AM – 2 PM', '2 PM – 5 PM'],
		closed: false,
	},
	Thursday: {
		slots: ['Anytime', '7 AM – 10 AM', '10 AM – 1 PM', '1 PM – 3 PM'],
		closed: false,
	},
	Friday: {
		slots: ['Anytime', '7 AM – 10 AM', '10 AM – 1 PM'],
		closed: false,
	},
	Saturday: {
		slots: [],
		closed: true,
	},
	Sunday: {
		slots: [],
		closed: true,
	},
};

type FormState = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	dob: string;
	date1: string;
	time1: string;
	date2: string;
	time2: string;
	date3: string;
	time3: string;
	reason: string;
	notes: string;
	preferredContact: 'email' | 'phone';
};

const initialFormState: FormState = {
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	dob: '',
	date1: '',
	time1: '',
	date2: '',
	time2: '',
	date3: '',
	time3: '',
	reason: 'Exam & Cleaning',
	notes: '',
	preferredContact: 'phone',
};

const getDayAvailability = (dateString: string) => {
	if (!dateString) {
		return { dayLabel: '', isClosed: false, slots: [] as string[] };
	}

	const parsed = new Date(`${dateString}T00:00:00`);

	if (Number.isNaN(parsed.getTime())) {
		return { dayLabel: '', isClosed: false, slots: [] as string[] };
	}

	const dayLabel = parsed.toLocaleDateString('en-US', { weekday: 'long' });
	const schedule = officeSchedule[dayLabel] ?? { slots: [], closed: true };

	return {
		dayLabel,
		isClosed: schedule.closed,
		slots: schedule.slots,
	};
};

const ContactForm = () => {
	const [formData, setFormData] = useState<FormState>(initialFormState);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	const updateField = (name: keyof FormState, value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		const { name, value } = event.target;
		updateField(name as keyof FormState, value);
	};

	const handleDateSelect = (field: 'date1' | 'date2' | 'date3') => (selectedDate?: Date) => {
		const value = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '';
		const timeField = (`time${field.slice(-1)}`) as keyof FormState;
		const availability = getDayAvailability(value);

		setFormData((prev) => ({
			...prev,
			[field]: value,
			[timeField]: value && !availability.isClosed ? availability.slots[0] ?? '' : '',
		}));
	};

	const date1Availability = getDayAvailability(formData.date1);
	const date2Availability = getDayAvailability(formData.date2);
	const date3Availability = getDayAvailability(formData.date3);

	const parseISODate = (value: string) => {
		if (!value) {
			return undefined;
		}
		const [year, month, day] = value.split('-').map(Number);
		if (!year || !month || !day) {
			return undefined;
		}
		return new Date(year, month - 1, day);
	};

	const formatDateDisplay = (value: string) => {
		const parsed = parseISODate(value);
		return parsed ? format(parsed, 'EEE, MMM d') : 'Select a date';
	};

	const isDateDisabled = (date: Date) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const candidate = new Date(date);
		candidate.setHours(0, 0, 0, 0);

		if (candidate < today) {
			return true;
		}

		const availability = getDayAvailability(format(candidate, 'yyyy-MM-dd'));
		return availability.isClosed;
	};

	const validateForm = () => {
		if (!formData.firstName || !formData.lastName) {
			toast({
				title: 'Add your name',
				description: 'Please include both your first and last name so we can personalize your visit.',
				variant: 'destructive',
			});
			return false;
		}

		if (!formData.email || !formData.phone) {
			toast({
				title: 'Contact details needed',
				description: 'Please include both phone and email so we can confirm your visit.',
				variant: 'destructive',
			});
			return false;
		}

		if (!formData.date1) {
			toast({
				title: 'Choose your first date',
				description: 'Select your preferred appointment date so we can check availability.',
				variant: 'destructive',
			});
			return false;
		}

		if (date1Availability.isClosed) {
			toast({
				title: 'Office closed on selected day',
				description: 'Please choose a weekday when our office is open.',
				variant: 'destructive',
			});
			return false;
		}

		if (!formData.time1) {
			toast({
				title: 'Select a time window',
				description: 'Pick the time window that works best for your first choice date.',
				variant: 'destructive',
			});
			return false;
		}

		return true;
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1200));

			toast({
				title: 'Appointment request received!',
				description: 'Our team will reach out shortly to confirm your visit.',
			});

			setFormData(initialFormState);
		} catch (error) {
			toast({
				title: 'Unable to send request',
				description: 'Please try again or call our office directly.',
				variant: 'destructive',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<BentoCard className="p-6 sm:p-8">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h2 className="text-2xl font-heading text-foreground">Request an appointment</h2>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="mt-6 space-y-8">
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="firstName">First name *</Label>
						<Input
							id="firstName"
							name="firstName"
							value={formData.firstName}
							onChange={handleInputChange}
							required
							className={fieldStyles}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="lastName">Last name *</Label>
						<Input
							id="lastName"
							name="lastName"
							value={formData.lastName}
							onChange={handleInputChange}
							required
							className={fieldStyles}
						/>
					</div>
				</div>

				<div className="grid gap-4 sm:grid-cols-3">
					<div className="space-y-2">
						<Label htmlFor="phone">Phone number *</Label>
						<Input
							id="phone"
							name="phone"
							type="tel"
							inputMode="tel"
							value={formData.phone}
							onChange={handleInputChange}
							required
							className={fieldStyles}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email *</Label>
						<Input
							id="email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleInputChange}
							required
							className={fieldStyles}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="dob">Date of birth</Label>
						<Input
							id="dob"
							name="dob"
							type="date"
							value={formData.dob}
							onChange={handleInputChange}
							className={fieldStyles}
							max={format(new Date(), 'yyyy-MM-dd')}
						/>
					</div>
				</div>

				<div className="space-y-4">
					<div>
						<Label htmlFor="date1" className="text-sm font-semibold text-foreground">
							Preferred dates *
						</Label>
						<p className="text-xs text-muted-foreground mt-1">
							Select up to 3 appointment dates in order of preference
						</p>
					</div>
					<div className="space-y-5">
						{[
							{ key: 'date1' as const, label: 'First choice', optional: false, availability: date1Availability },
							{ key: 'date2' as const, label: 'Second choice', optional: true, availability: date2Availability },
							{ key: 'date3' as const, label: 'Third choice', optional: true, availability: date3Availability },
						].map(({ key, label, optional, availability }) => {
							const timeField = (`time${key.slice(-1)}`) as 'time1' | 'time2' | 'time3';
							const dateValue = formData[key];
							const timeValue = formData[timeField];
							const isPrimary = key === 'date1';

							return (
								<div key={key} className="grid gap-3 sm:grid-cols-[minmax(0,240px)_1fr]">
									<div className="space-y-2">
										<div className="flex items-center justify-between">
											<label
												htmlFor={key}
												className="text-sm font-medium text-muted-foreground"
											>
												{label}
												{optional && (
													<span className="ml-2 text-xs text-muted-foreground/70">Optional</span>
												)}
											</label>
											{optional && dateValue && (
												<button
													type="button"
													onClick={() => handleDateSelect(key)()}
													className="text-xs font-medium text-primary transition hover:text-primary/80"
												>
													Clear
												</button>
											)}
										</div>
										<Popover>
											<PopoverTrigger asChild>
												<Button
													type="button"
													variant="outline"
													className={cn(dateTriggerStyles, !dateValue && 'text-muted-foreground')}
												>
													<CalendarDays className="h-4 w-4 text-primary" />
													<span>{formatDateDisplay(dateValue)}</span>
												</Button>
											</PopoverTrigger>
											<PopoverContent align="start" className="w-auto p-0" collisionPadding={12}>
												<Calendar
													mode="single"
													selected={parseISODate(dateValue)}
													onSelect={handleDateSelect(key)}
													disabled={isDateDisabled}
													initialFocus
												/>
											</PopoverContent>
										</Popover>
										{availability.dayLabel && (
											<p className="text-xs text-muted-foreground">
												{availability.isClosed
													? `We’re closed on ${availability.dayLabel}s. Please choose another day.`
													: `${availability.dayLabel} appointments are available in the windows below.`}
											</p>
										)}
									</div>
									<div className="space-y-2">
										<label className="text-sm font-medium text-muted-foreground" htmlFor={timeField}>
											Time window
										</label>
										<select
											id={timeField}
											name={timeField}
											value={timeValue}
											onChange={handleInputChange}
											required={isPrimary && !availability.isClosed}
											disabled={!dateValue || availability.isClosed}
											className={cn('w-full', selectStyles)}
										>
											{!dateValue && <option value="">Select a date first</option>}
											{availability.isClosed ? (
												<option value="">Closed – choose another day</option>
											) : (
												availability.slots.map((slot) => (
													<option key={slot} value={slot}>
														{slot}
													</option>
												))
											)}
										</select>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="grid gap-4 sm:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="reason">Reason for your visit</Label>
						<select
							id="reason"
							name="reason"
							value={formData.reason}
							onChange={handleInputChange}
							className={cn('w-full', selectStyles)}
						>
							{appointmentReasons.map((reason) => (
								<option key={reason} value={reason}>
									{reason}
								</option>
							))}
						</select>
					</div>
					<div className="space-y-2">
						<Label>Preferred contact method</Label>
						<div className="flex flex-wrap gap-3">
							{[
								{ value: 'phone', label: 'Phone call', Icon: Phone },
								{ value: 'email', label: 'Email', Icon: Mail },
							].map(({ value, label, Icon }) => (
								<label
									key={value}
									className={cn(
										'flex cursor-pointer items-center gap-2 rounded-bento border px-4 py-2 text-sm font-medium transition',
										formData.preferredContact === value
											? 'border-primary bg-primary/10 text-foreground shadow-sm'
											: 'border-border text-muted-foreground hover:border-primary/60'
									)}
								>
									<input
										type="radio"
										name="preferredContact"
										value={value}
										checked={formData.preferredContact === value}
										onChange={handleInputChange}
										className="sr-only"
									/>
									<Icon className="h-4 w-4" />
									<span>{label}</span>
								</label>
							))}
						</div>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="notes">Notes for the doctor</Label>
					<Textarea
						id="notes"
						name="notes"
						value={formData.notes}
						onChange={handleInputChange}
						rows={4}
						className={fieldStyles}
						placeholder="Tell us anything you’d like the doctor to know ahead of your visit."
					/>
				</div>

				<Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
					{isSubmitting ? (
						'Submitting request...'
					) : (
						<>
							<CalendarCheck className="mr-2 h-4 w-4" />
							Request appointment
						</>
					)}
				</Button>
			</form>
		</BentoCard>
	);
};

export default ContactForm;