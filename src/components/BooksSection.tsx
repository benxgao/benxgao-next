"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useClientOnly } from "../../app/hooks";
import PageSection from "./PageSection";

export interface Book {
  title: string;
  subtitle?: string;
  authors: string[];
  previewLink: string;
  coverImage: string;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const bookList = [
  {
    title: "Tools And Weapons",
    subtitle: "The Promise and the Peril of the Digital Age",
    authors: ["Brad Smith", "Carol Ann Browne"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=QNOODwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Building Microservices",
    subtitle: "Designing Fine-Grained Systems",
    authors: ["Sam Newman"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=jjl4BgAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Rework",
    subtitle: "",
    authors: ["Jason Fried", "David Heinemeier Hansson"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=4N4_MUkcQy4C&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "The Knowledge Illusion",
    subtitle: "Why We Never Think Alone",
    authors: ["Steven Sloman", "Philip Fernbach"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=PqMgDgAAQBAJ&printsec=frontcover&img=1&zoom=0&source=gbs_api",
  },
  {
    title: "The Lean Startup",
    subtitle:
      "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
    authors: ["Eric Ries"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=r9x-OXdzpPcC&printsec=frontcover&img=1&zoom=0&source=gbs_api",
  },
  {
    title: "API Security in Action",
    subtitle: "",
    authors: ["Neil Madden"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=7TczEAAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "The Human Side Of Enterprise",
    subtitle: "",
    authors: ["Douglas McGregor"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=czmT99wOFZ0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    title: "Zero To One",
    subtitle: "",
    authors: ["Peter Thiel"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=M22fAwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "True Professionalism",
    subtitle:
      "The Courage to Care About Your People, Your Clients, and Your Career",
    authors: ["David H. Maister"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=l7v8IXvQH9IC&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Continuous Delivery",
    subtitle:
      "Reliable Software Releases through Build, Test, and Deployment Automation",
    authors: ["Jez Humble", "David Farley"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=6ADDuzere-YC&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "The Innovator's Dilemma",
    subtitle: "When New Technologies Cause Great Firms to Fail",
    authors: ["Clayton M. Christensen"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=3JnBAgAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Crucial Accountability",
    subtitle:
      "Tools for Resolving Violated Expectations, Broken Commitments, and Bad Behavior",
    authors: [
      "Kerry Patterson",
      "Joseph Grenny",
      "Ron McMillan",
      "Al Switzler",
    ],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=bQhSkDdQ_AMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "The Nature of Technology",
    subtitle: "What It Is and How It Evolves",
    authors: ["W. Brian Arthur"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=1IxKf-gat2cC&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Crucial Conversations",
    subtitle: "Tools for Talking When Stakes Are High",
    authors: [
      "Kerry Patterson",
      "Joseph Grenny",
      "Ron McMillan",
      "Al Switzler",
    ],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=3P5FEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Nonviolent Communication",
    subtitle: "A Language of Life",
    authors: ["Marshall B. Rosenberg"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=A3qACgAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "The Responsibility Virus",
    subtitle:
      "How Control Freaks, Shrinking Violets-and the Rest of Us-Can Harness the Power of True Partnership",
    authors: ["Roger Martin"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=ugbpswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    title: "The hand thing about hard things",
    subtitle: "Building a Business When There Are No Easy Answers",
    authors: ["Ben Horowitz"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=620pAgAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "How Google Works",
    subtitle: "The Ultimate Guide to the World's Most Innovative Company",
    authors: ["Eric Schmidt", "Jonathan Rosenberg"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=fEJ0AwAAQBAJ&printsec=frontcover&img=1&zoom=0&source=gbs_api",
  },
  {
    title: "Principles",
    subtitle: "Life and Work",
    authors: ["Ray Dalio"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=qNNmDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Hackers & Painters",
    subtitle: "Big Ideas from the Computer Age",
    authors: ["Paul Graham"],
    previewLink: "",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/8/80/Hackers_%26_Painters.jpg",
  },
  {
    title: "Concept of the Corporation",
    subtitle: "",
    authors: ["Peter F. Drucker"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=px4uDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Misbehaving: The Making of Behavioral Economics",
    subtitle: "",
    authors: ["Richard H. Thaler"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=9EJzAwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Animal Spirits",
    subtitle:
      "How Human Psychology Drives the Economy, and Why It Matters for Global Capitalism",
    authors: ["George A. Akerlof", "Robert J. Shiller"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=2Rz_cuu88DwC&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "The Paradox of Choice",
    subtitle: "Why More Is Less",
    authors: ["Barry Schwartz"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=Xdl6BXE9C28C&printsec=frontcover&img=1&zoom=0&source=gbs_api",
  },
  {
    title: "Antifragile",
    subtitle: "Things That Gain from Disorder",
    authors: ["Nassim Nicholas Taleb"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=T9hbUv4NIU0C&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Nudge",
    subtitle: "Improving Decisions About Health, Wealth, and Happiness",
    authors: ["Richard H. Thaler", "Cass R. Sunstein"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=dSJQn8egXvUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Mean Genes",
    subtitle: "",
    authors: ["Terry Burnham", "Jay Phelan"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=20F8swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    title: "Noise",
    subtitle: "A Flaw in Human Judgment",
    authors: ["Daniel Kahneman", "Olivier Sibony", "Cass R. Sunstein"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=RLsDEAAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
  {
    title: "Get out of your own way",
    subtitle: "A Skeptic Guide to Growth and Fulfillment",
    authors: ["Dave Hollis"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=XXKNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    title: "Excellence Wins",
    subtitle:
      "A No-Nonsense Guide to Becoming the Best in a World of Compromise",
    authors: ["Horst Schulze"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=rzdhDwAAQBAJ&printsec=frontcover&img=1&zoom=0&source=gbs_api",
  },
  {
    title: "The Innovator's Dilemma",
    subtitle: "When New Technologies Cause Great Firms to Fail",
    authors: ["Clayton M. Christensen"],
    previewLink: "",
    coverImage:
      "https://books.google.com/books/content?id=K6FrJTWeUssC&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api",
  },
];

export default function BooksSection() {
  const [books, isClient] = useClientOnly<Book[]>(bookList);
  const [shuffledBooks, setShuffledBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (books.length > 0) {
      setShuffledBooks(shuffleArray(books));
    }
  }, [books]);

  // useEffect(() => {
  //   const apiKey = "AIzaSyCedKd1qAf9vnYbajt4ELw-9knWNY8rKnE";

  //   const bookTitles = ["The Innovator's Dilemma"];

  //   [bookTitles[0]].forEach(async (title) => {
  //     const searchQuery = title;
  //     const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}&maxResults=1`;

  //     await fetch(apiUrl)
  //       .then((x) => x.json())
  //       .then((data) => {
  //         const { volumeInfo } = data.items[0];

  //         console.log(
  //           `data.items[0]: ${JSON.stringify(data.items[0], null, 2)}`
  //         );

  //         const metaData = {
  //           title: volumeInfo.title,
  //           subtitle: volumeInfo.subtitle,
  //           authors: volumeInfo.authors,
  //           previewLink: volumeInfo.previewLink,
  //           coverImage: volumeInfo.imageLinks.thumbnail,
  //         };

  //         // console.log(JSON.stringify(metaData, null, 2));

  //         return metaData;
  //       })
  //       .catch((error) => console.error("Error fetching data:", error));
  //   });
  // }, []);

  return (
    <PageSection
      id="books"
      title="Recommendation of my recent completed reading (2020 - 2024)"
    >
      <div className="pb-8">
        {isClient ? (
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={5}
            slidesToScroll={5}
            arrows={true}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 5 } },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: true,
                },
              },
            ]}
          >
            {shuffledBooks && shuffledBooks.length > 0 ? (
              shuffledBooks.map((book, index) => (
                <div key={`${book.title}-${index}`} className="p-2 sm:p-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <div className="relative aspect-[2/3] w-[calc(100%-1rem)]">
                      <Image
                        src={book.coverImage}
                        alt={`${book.title}${
                          book.subtitle ? ` - ${book.subtitle}` : ""
                        }`}
                        fill
                        sizes="(max-width: 400px) 50vw, (max-width: 1024px) 10vw, 21vw"
                        className="object-cover rounded-md shadow-[6px_6px_12px_rgba(0,0,0,0.15),8px_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_20px_rgba(0,0,0,0.2),12px_12px_30px_rgba(0,0,0,0.25)] transition-shadow duration-300 ease-in-out"
                        priority={index < 3}
                      />
                    </div>
                    <div className="mt-4 space-y-1">
                      <h3 className="text-center font-medium text-base sm:text-lg line-clamp-2">
                        {book.title}
                      </h3>
                      {book.authors && book.authors.length > 0 && (
                        <p className="text-center text-sm text-gray-600">
                          by {book.authors.join(", ")}
                        </p>
                      )}
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <div className="w-full p-8 text-center text-gray-500">
                No books available
              </div>
            )}
          </Slider>
        ) : (
          <div className="w-full p-8 text-center text-gray-500">
            Loading books...
          </div>
        )}
      </div>
    </PageSection>
  );
}
