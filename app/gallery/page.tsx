import Image from "next/image";

const images = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.webp",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.avif",
  "gallery-7.avif",
  "gallery-8.avif",
  "gallery-9.jpg",
  "gallery-10.jpg",
  "gallery-11.jpg",
  "gallery-12.jpg",
  "gallery-13.jpg",
  "gallery-14.jpg",
  "gallery-15.jpg",
  "gallery-16.jpg",
  "gallery-17.jpg",
  "gallery-18.jpg",
  "gallery-19.jpg",
  "gallery-20.jpg"
];

export default function Gallery() {
  return (
    <section className="py-16 px-6">
      <h1 className="text-3xl font-semibold text-center mb-10">
        School Activities & Events
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-72 overflow-hidden rounded-xl shadow hover:scale-105 transition duration-300"
          >
            <Image
              src={`/assets/images/gallery/${img}`}
              alt={`Bright Masters Play School Activity ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </section>
  );
}