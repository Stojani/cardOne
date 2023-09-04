import Link from "next/link";

const callouts = [
  {
    name: "Podcasts",
    description: "Join a live podcast on a topic of interest to you",
    imageSrc: "https://d2sr9p9v571tfz.cloudfront.net/wp-content/uploads/2023/02/shutterstock_1850285455-1-640x360.jpg.webp",
    imageAlt: "",
    href: "collection",
  },
  {
    name: "Conferences",
    description: "Attend a live technical conference",
    imageSrc: "https://blog-assets.freshworks.com/freshdesk/wp-content/uploads/2019/08/22155004/customer-experience-events-01.jpg",
    imageAlt: "",
    href: "collection",
  },
  {
    name: "Talk Show",
    description: "Attend a live Talk Show",
    imageSrc: "https://www.indiewire.com/wp-content/uploads/2017/10/talk-show-the-game-show-episode-2-photo-credit-doug-hyun-trutv.jpg",
    imageAlt: "",
    href: "collection",
  },
];

export default function CategorySection() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={callout.href}>
                    <span>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </span>
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
