import { notFound } from "next/navigation";
import DynamicBanner from "../../components/DynamicBanner";
import { bannerConfig, eventFeaturesConfig, eventSectionsConfig, eventStepsConfig } from "../../data/services";
import EventFeaturesSection from "../../components/EventFeaturesSection";
import EventsTypesSection from "../../components/EventsTypesSection";
import EventSteps from "../../components/EventsSteps";
import CityCelebrationSection from "../../components/CityCelebrationSection";
import GallerySection from "../../components/GallerySection";
import QuickLinks from "../../components/QuickLinks";

export function generateStaticParams() {
    return Object.keys(bannerConfig).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const banner = bannerConfig[slug];

    if (!banner) {
        return {
            title: "Private Theatre Experience | The Binge Town",
            description:
                "Experience luxury private theatre celebrations for birthdays, anniversaries, proposals and special moments at The Binge Town.",
            robots: "noindex",
        };
    }

    return {
        metadataBase: new URL("https://www.thebingetown.com"),

        title: `${banner.title} | The Binge Town`,
        description: banner.description,

        alternates: {
            canonical: `/events/${slug}`,
        },

        openGraph: {
            title: banner.title,
            description: banner.description,
            type: "website",
            images: [
                {
                    url: banner.image,
                    width: 1200,
                    height: 630,
                    alt: banner.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: banner.title,
            description: banner.description,
            images: [banner.image],
        },
    };
}

export default async function EventsPage({ params }) {
    const { slug } = await params;
    const banner = bannerConfig[slug];
    const data = eventFeaturesConfig[slug];
    const ETS = eventSectionsConfig[slug];
    const Steps = eventStepsConfig[slug];
    if (!banner) {
        notFound();
    }

    return (
        <main className="pageOffset">
            <DynamicBanner title={banner.title} image={banner.image} />
            <EventFeaturesSection {...data} />
            <EventsTypesSection {...ETS} />
            <EventSteps title={Steps.title}
                features={Steps.features} />
            <CityCelebrationSection />
            <GallerySection />
            <QuickLinks/>
        </main>
    );
}
