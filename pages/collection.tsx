import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Medical Conference",
    href: "/product",
    price: "₳5",
    imageSrc: "https://img.freepik.com/premium-vector/female-doctor-giving-speech-tribune-with-microphone-medical-conference-medicine-healthcare-concept-lecture-hall-interior-vertical-vector-illustration_48369-35528.jpg",
    imageAlt: "",
  },
  {
    id: 2,
    name: "Live Talk Show with Gerry Scotti",
    href: "/product",
    price: "₳5",
    imageSrc: "https://img.freepik.com/premium-vector/talk-show-neon-signs-style-text_118419-652.jpg",
    imageAlt: "",
  },
  {
    id: 3,
    name: "Bitcoin World Conference",
    href: "/product",
    price: "₳5",
    imageSrc: "https://media.istockphoto.com/id/1145592974/photo/bitcoin.jpg?s=612x612&w=0&k=20&c=jUfkFVz5qMjNwnIIlMH2BMKQaGyzSj80twtkL5xAT9o=",
    imageAlt: "",
  },
  {
    id: 4,
    name: "Live DJ Mix",
    href: "/product",
    price: "₳5",
    imageSrc: "https://img.pikbest.com/origin/06/20/08/47hpIkbEsTr7g.jpg!bw700",
    imageAlt: "",
  },
  {
    id: 5,
    name: "Podcast about Pollution",
    href: "/product",
    price: "₳5",
    imageSrc: "https://haldus.taltech.ee/sites/default/files/news-image/Digital_Health_Podcast_TalTech.jpg",
    imageAlt: "",
  }, 
  {
    id: 6,
    name: "Python Programming Course for Beginners",
    href: "/product",
    price: "₳5",
    imageSrc: "https://www.techrepublic.com/wp-content/uploads/2023/06/tra61223-python-bundle.png",
    imageAlt: "",
  },
  {
    id: 7,
    name: "Conference about Artificial Intelligence",
    href: "/product",
    price: "₳5",
    imageSrc: "https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/alexandre-pellaes-6vajp0pscx0-unsplash.jpg?itok=iDzlPr_l",
    imageAlt: "",
  }, 
  {
    id: 8,
    name: "Live Q&A about Roman Empire",
    href: "/product",
    price: "₳5",
    imageSrc: "https://www.grunge.com/img/gallery/roman-empire-timeline-explained/intro-1664850892.jpg",
    imageAlt: "",
  },
];

export default function Collection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Events</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link href={product.href} key={product.id}>
              <div className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
