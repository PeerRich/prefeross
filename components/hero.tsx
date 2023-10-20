import Link from "next/link";
import Image from "next/image";
import HeroIllustration from "@/public/images/hero-illustration.png";
import HeroImage from "@/public/images/hero-image.png";
import Stats from "@/components/stats";

export default function Hero() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto">
            <Image
              className="absolute left-full bottom-20 ml-8 -z-10 pointer-events-none mix-blend-exclusion"
              src={HeroIllustration}
              width={165}
              height={149}
              alt="Hero illustration"
              aria-hidden="true"
            />
            <div className="pb-12 md:pb-16">
              <h1 className="font-cal text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                Find companies that{" "}
                <strong className="relative inline-flex justify-center items-center text-green-500">
                  {" "}
                  prefer
                  <svg
                    className="absolute fill-zinc-300 w-[calc(100%+1rem)] -z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="223"
                    height="62"
                    viewBox="0 0 223 62"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path d="M45.654 53.62c17.666 3.154 35.622 4.512 53.558 4.837 17.94.288 35.91-.468 53.702-2.54 8.89-1.062 17.742-2.442 26.455-4.352 8.684-1.945 17.338-4.3 25.303-7.905 3.94-1.81 7.79-3.962 10.634-6.777 1.38-1.41 2.424-2.994 2.758-4.561.358-1.563-.078-3.143-1.046-4.677-.986-1.524-2.43-2.96-4.114-4.175a37.926 37.926 0 0 0-5.422-3.32c-3.84-1.977-7.958-3.563-12.156-4.933-8.42-2.707-17.148-4.653-25.95-6.145-8.802-1.52-17.702-2.56-26.622-3.333-17.852-1.49-35.826-1.776-53.739-.978-8.953.433-17.898 1.125-26.79 2.22-8.887 1.095-17.738 2.541-26.428 4.616-4.342 1.037-8.648 2.226-12.853 3.676-4.197 1.455-8.314 3.16-12.104 5.363-1.862 1.13-3.706 2.333-5.218 3.829-1.52 1.47-2.79 3.193-3.285 5.113-.528 1.912-.127 3.965.951 5.743 1.07 1.785 2.632 3.335 4.348 4.68 2.135 1.652 3.2 2.672 2.986 3.083-.18.362-1.674.114-4.08-1.638-1.863-1.387-3.63-3.014-4.95-5.09C.94 35.316.424 34.148.171 32.89c-.275-1.253-.198-2.579.069-3.822.588-2.515 2.098-4.582 3.76-6.276 1.673-1.724 3.612-3.053 5.57-4.303 3.96-2.426 8.177-4.278 12.457-5.868 4.287-1.584 8.654-2.89 13.054-4.036 8.801-2.292 17.74-3.925 26.716-5.19C70.777 2.131 79.805 1.286 88.846.723c18.087-1.065 36.236-.974 54.325.397 9.041.717 18.07 1.714 27.042 3.225 8.972 1.485 17.895 3.444 26.649 6.253 4.37 1.426 8.697 3.083 12.878 5.243a42.11 42.11 0 0 1 6.094 3.762c1.954 1.44 3.823 3.2 5.283 5.485a12.515 12.515 0 0 1 1.63 3.88c.164.706.184 1.463.253 2.193-.063.73-.094 1.485-.247 2.195-.652 2.886-2.325 5.141-4.09 6.934-3.635 3.533-7.853 5.751-12.083 7.688-8.519 3.778-17.394 6.09-26.296 7.998-8.917 1.86-17.913 3.152-26.928 4.104-18.039 1.851-36.17 2.295-54.239 1.622-18.062-.713-36.112-2.535-53.824-6.23-5.941-1.31-5.217-2.91.361-1.852" />
                  </svg>
                </strong>{" "}
                open source software
              </h1>
              <p className="text-lg text-zinc-500 mb-8">
                The counterpart of the popular "Open Source Alternative" lists.
                Find companies that would prefer your open source software over
                proprietary alternatives.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link
                    className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow"
                    href="https://formbricks.com/clnyjwz1h06fwt80f45imeftb"
                  >
                    List my Company
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center pb-12 md:pb-20 relative before:absolute before:-top-12 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
          <Image
            className="rounded-lg shadow-2xl"
            src={HeroImage}
            width={1104}
            height={620}
            alt="Hero"
            priority
          />
        </div>*/}

        {/* Stats
        <Stats /> */}
      </div>
    </section>
  );
}
