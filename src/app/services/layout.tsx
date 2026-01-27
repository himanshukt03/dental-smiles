import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Explore comprehensive dental services at Dental Smiles in Austin, TX. From athletic mouthguards to laser gum treatment, we offer advanced preventive and restorative care.",
    keywords: [
        "dental services Austin",
        "athletic mouthguards",
        "nightguards bruxism",
        "fluoride treatment",
        "dental sealants",
        "oral cancer screening",
        "laser gum treatment",
        "TMJ therapy Austin",
    ],
    openGraph: {
        title: "Dental Services | Dental Smiles Austin",
        description:
            "Explore comprehensive dental services at Dental Smiles in Austin, TX. From athletic mouthguards to laser gum treatment.",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
