// app/events/page.tsx
"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

// ----- Replace these with your own image URLs -----
const HEADER_IMAGES_ROW_A = [
  "https://your-image-url-1.jpg",
  "https://your-image-url-2.jpg",
  "https://your-image-url-3.jpg",
];

const HEADER_IMAGES_ROW_B = [
  "https://your-image-url-4.jpg",
  "https://your-image-url-5.jpg",
  "https://your-image-url-6.jpg",
];
// ---------------------------------------------------

// Sample event data – replace with real data from your CMS / API
const events = [
  {
    id: "1",
    title: "RC Adventure Day",
    date: "March 15, 2026",
    location: "Central Park",
    image: "/images/event1.jpg",
    description: "Join us for a day of off-road RC fun!",
  },
  {
    id: "2",
    title: "Night Crawl",
    date: "April 2, 2026",
    location: "Rocky Hills",
    image: "/images/event2.jpg",
    description: "LED-lit night crawling competition.",
  },
  {
    id: "3",
    title: "RC Expo 2026",
    date: "May 10, 2026",
    location: "Convention Center",
    image: "/images/event3.jpg",
    description: "The biggest RC show of the year.",
  },
  // add more events as needed
];

// Inline EventCard component
function EventCard({ event }: { event: (typeof events)[0] }) {
  return (
    <div className="overflow-hidden rounded-lg bg-card shadow-lg transition-shadow hover:shadow-xl">
      <div className="relative h-48 w-full">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
        <p className="mb-1 text-sm text-muted-foreground">{event.date}</p>
        <p className="mb-3 text-sm text-muted-foreground">{event.location}</p>
        <p className="text-base">{event.description}</p>
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground transition hover:bg-primary/90">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default function Memories() {
  return (
    <main>
      {/* Scrolling image header */}
      <section className="relative w-full overflow-hidden bg-black/5 py-12">
        <ScrollVelocityContainer className="w-full">
          <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
            {HEADER_IMAGES_ROW_A.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Event visual ${idx + 1}`}
                width={240}
                height={160}
                className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-md"
              />
            ))}
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
            {HEADER_IMAGES_ROW_B.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Event visual ${idx + 4}`}
                width={240}
                height={160}
                className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-md"
              />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        {/* Edge gradients for smooth fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </section>

      {/* Events list */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
