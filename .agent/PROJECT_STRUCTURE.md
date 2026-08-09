# Dental Smiles - Project Structure Documentation

> **For AI Assistants**: This document provides comprehensive context about the Dental Smiles website codebase to enable efficient development assistance.

---

## Project Overview

**Dental Smiles** is a modern dental practice website for a clinic in Austin, Texas, owned by Dr. Divya Shetty.

| Property | Value |
|----------|-------|
| **Framework** | Next.js 14.2.15 (App Router) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS 3.4 + CSS Variables |
| **UI Components** | Radix UI primitives (shadcn/ui pattern) |
| **Icons** | Lucide React |
| **Date Handling** | date-fns |
| **Package Manager** | npm |

---

## Directory Structure

```
dental-smiles/
├── public/                    # Static assets
│   ├── assets/               # Images (jpg, svg, webp)
│   │   ├── logos/           # Insurance company logos
│   │   ├── payment-options/ # Payment card logos (visa, mastercard, etc.)
│   │   └── team/            # Team member photos
│   └── manifest.json        # PWA manifest
│
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout (Header, Footer, Providers)
│   │   ├── page.tsx         # Homepage (landing page)
│   │   ├── globals.css      # Global styles + CSS variables
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog pages
│   │   ├── book-appointment/# Booking flow
│   │   ├── contact/         # Contact page + ContactForm component
│   │   ├── first-visit/     # New patient information
│   │   ├── payments/        # Payment information
│   │   └── services/        # Dental services
│   │
│   ├── assets/              # Imported image assets (webp)
│   │   └── team/           # Team photos as modules
│   │
│   ├── components/
│   │   ├── Layout/          # Header.tsx, Footer.tsx
│   │   ├── UI/              # Radix-based UI components (shadcn pattern)
│   │   │   ├── BentoCard.tsx    # Custom card component
│   │   │   ├── button.tsx       # Button variants
│   │   │   ├── calendar.tsx     # Date picker
│   │   │   └── ... (50+ components)
│   │   ├── Providers.tsx    # Theme + React Query providers
│   │   └── TechnologyCarousel.tsx
│   │
│   ├── data/                # Static data files
│   ├── hooks/               # Custom React hooks
│   │   └── use-toast.ts    # Toast notifications
│   └── lib/
│       └── utils.ts        # Utility functions (cn, etc.)
│
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## Key Configuration Files

### `tailwind.config.ts`
Extended Tailwind config with:
- Custom colors: `primary`, `clinical-creme`, `clinical-grey`
- Custom border radius: `rounded-bento` (12px)
- Custom spacing variables
- Custom shadows: `shadow-clinical`, `shadow-hover`, `shadow-accent`
- Custom animations: `scroll`, `scroll-reviews`, `fade-in`, `slide-up`

### `globals.css`
CSS variables defined in `:root`:
```css
--primary: 339 73% 30%;           /* Deep burgundy/maroon */
--primary-foreground: 0 0% 100%;  /* White */
--background: 0 0% 98%;           /* Off-white */
--clinical-creme: 40 50% 97%;     /* Warm cream */
--clinical-grey: 240 9% 96%;      /* Light gray */
--font-body: 'Inter', system-ui;
--font-heading: 'Cormorant Garamond', serif;
--radius-bento: 12px;
```

Component classes:
- `.btn-primary`, `.btn-secondary`, `.btn-ghost` - Button styles
- `.card-clinical`, `.card-bento` - Card styles
- `.section-padding` - Standard section spacing (py-16 md:py-24)
- `.container-clinical` - Content container (max-w-7xl mx-auto px-4...)

---

## Component Patterns

### BentoCard
A styled card wrapper with clinical aesthetics:
```tsx
<BentoCard className="p-6">
  {/* Content */}
</BentoCard>
```

### Buttons
Use the `Button` component with custom class variants:
```tsx
<Button className="btn-primary">Primary Action</Button>
<Button variant="outline" className="btn-secondary">Secondary</Button>
```

### Page Structure
Typical page pattern:
```tsx
export default function PageName() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-clinical">
          {/* Content */}
        </div>
      </section>
      
      {/* Additional Sections */}
      <section className="section-padding bg-clinical-creme">
        <div className="container-clinical">
          {/* Content */}
        </div>
      </section>
    </div>
  );
}
```

---

## Key Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Landing page with hero, services, testimonials, insurance |
| About | `/about` | Practice and team information |
| Contact | `/contact` | Contact info + appointment request |
| First Visit | `/first-visit` | New patient info, insurance, payment options |
| Services | `/services` | Dental services offered |
| Payments | `/payments` | Payment and financing options |

---

## External Integrations

### RevenueWell
- **Appointment Request Form**: `https://rwl.io/4lGeyT1`
- **Patient Paperwork (English)**: `https://rwl.io/4iLR7XB`
- **Patient Paperwork (Spanish)**: `https://rwl.io/429XDBg`
- **Chatbot Script**: 
  ```html
  <script async src="https://aichatbotweb.revenuewell.com/rw-chat.js" 
          onload="RwChat.render({ oid: '0013600001EUEB7AAP' })"></script>
  ```

### Membership
- **Clerri Membership**: `https://member.clerri.com/enrollment/accounts/create/?slug=KV5G`

### Financing
- **Sunbit Application**: `https://apply.sunbit.com`

### Maps
- **Google Maps**: `https://maps.app.goo.gl/J79e6udCYyZJAPLy5`

---

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## Styling Guidelines

1. **Colors**: Use semantic color tokens (`text-primary`, `bg-clinical-creme`, etc.)
2. **Spacing**: Use Tailwind spacing or CSS variable-based classes
3. **Border Radius**: Use `rounded-bento` for consistent card/button radius
4. **Typography**:
   - Headings: `font-heading` (Cormorant Garamond)
   - Body: `font-body` (Inter) - applied by default
5. **Shadows**: Use `shadow-clinical` for cards, `shadow-accent` for hover states
6. **Containers**: Use `container-clinical` for page content width

---

## Contact Information

- **Phone**: 512.467.9955
- **Address**: 1201 Barbara Jordan Blvd, Suite #1435, Austin, TX 78723
- **Location**: Mueller Medical District

---

## Notes for AI Assistants

1. **Server vs Client Components**: Most pages are Server Components. Use `'use client'` directive only when needed (state, effects, event handlers).

2. **Image Handling**: Use `next/image` for optimized images, or `<img>` for simple static assets.

3. **External Links**: Always use `target="_blank" rel="noopener noreferrer"` for external links.

4. **Form Handling**: The codebase uses both native forms and `react-hook-form` patterns.

5. **Toast Notifications**: Use the `useToast` hook from `@/hooks/use-toast`.

6. **Icons**: Import from `lucide-react` (e.g., `Calendar`, `Phone`, `MapPin`).
