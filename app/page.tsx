"use client";

import { useState } from "react";


const occasions = [
  {
    title: "Birthdays",
    image: "/assets/birthday.png",
    alt: "Pink and white bouquet wrapped in paper",
  },
  {
    title: "Weddings",
    image: "/assets/ramoswedding.png",
    alt: "Loose garden bouquet in earthy green and cream tones",
  },
  {
    title: "Anniversaries",
    image: "/assets/ramosanni.png",
    alt: "Large colorful bouquet held by a florist",
  },
  {
    title: "Intimate gatherings",
    image: "/assets/ramos.png",
    alt: "Flowers arranged in a florist studio",
  },
  {
    title: "Just because",
    image: "/assets/ramosjustcause.png",
    alt: "A delicate seasonal bouquet",
  },
  {
    title: "Special events",
    image: "/assets/ramosday.png",
    alt: "Florist holding an abundant bouquet",
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [requestSent, setRequestSent] = useState(false);

  const showPrevious = () => {
    setCurrentSlide(
      (current) => (current - 1 + occasions.length) % occasions.length,
    );
  };

  const showNext = () => {
    setCurrentSlide((current) => (current + 1) % occasions.length);
  };

  return (
    <main className="min-h-dvh overflow-hidden bg-[#efdce1] text-white">

      <header className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-12 lg:px-16">
        <nav
          aria-label="Primary"
          className="grid grid-cols-[1fr_auto_1fr] items-center md:flex md:justify-between"
        >

          <div className="flex justify-start gap-3 md:gap-8">
            <a className="nav-link" href="#gallery">
              gallery
            </a>
            <a className="nav-link" href="#about">
              about
            </a>
          </div>

          <a
            className="pill-link justify-self-center"
            href="#contact"
          >
            send a request
          </a>

          <div className="flex justify-end gap-3 md:gap-8">
            <a className="nav-link" href="#occasions">
              occasions
            </a>
            <a className="nav-link" href="#contact">
              contact
            </a>
          </div>
        </nav>
      </header>



      <section
        aria-labelledby="hero-title"
        className="relative mx-auto min-h-[calc(100svh-80px)] max-w-[1440px] px-5 pt-10 md:min-h-[650px] md:px-12 md:pt-7"
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-[-7%] top-20 h-[65%] w-[114%] text-[#98596c]/35 md:top-20 md:h-[430px]"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1200 430"
        >
          <defs>
            <filter
              id="pencil-texture"
              x="-5%"
              y="-10%"
              width="110%"
              height="120%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.012 0.04"
                numOctaves="2"
                seed="8"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="3"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <g
            filter="url(#pencil-texture)"
            stroke="currentColor"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          >
            <path
              d="M-35 177C68 93 228 50 355 73c91 17 111 80 46 124-83 57-243 22-274-57-34-88 113-137 286-105 192 36 301 181 216 270-72 75-251 34-254-65-4-114 222-177 426-130 175 41 253 139 184 205-63 60-209 35-203-36 7-83 202-130 454-71"
              fill="none"
              strokeWidth="1.15"
            />
            <path
              d="M-20 188C91 101 231 61 350 81c84 14 105 67 48 108-77 56-235 31-272-43-41-82 96-139 277-110 201 32 313 172 229 266-69 78-244 49-260-47-18-111 207-188 423-148 187 35 270 128 201 198-61 62-205 45-208-26-3-82 195-139 443-86"
              fill="none"
              opacity="0.62"
              strokeWidth="0.8"
            />
            <path
              d="M28 350C129 290 231 274 322 302c103 32 191 42 284-7 117-61 212-57 295-4 77 49 180 48 313-7"
              fill="none"
              opacity="0.48"
              strokeWidth="0.9"
            />
          </g>
        </svg>

        <div className="relative z-10 mx-auto max-w-[850px] text-center">
          <h1
            id="hero-title"
            className="display-font relative z-20 text-[22vw] leading-[0.67] tracking-[-0.075em] text-[#98596c] sm:text-[18vw] md:text-[16vw] lg:text-[188px]"
          >
            <span className="block pr-[12%]">RAMOS</span>
            <span className="block pl-[8%]">FLOWERS</span>
          </h1>

          <figure className="relative z-10 mx-auto mt-8 w-[48vw] max-w-[220px] md:-mt-16 md:w-[43vw] md:max-w-[270px] md:min-w-[180px] lg:-mt-20">
            <img
              className="relative -translate-x-10 md:translate-x-0 h-[44svh] min-h-[280px] max-h-[380px] w-full object-cover object-center md:h-[365px] md:min-h-0 md:max-h-none"
              src="/assets/heroramos1.png"
              alt="Florist holding an abundant bouquet"
            />
          </figure>
        </div>

        <img
          className="absolute bottom-[15%] left-4 hidden  h-[24svh] max-h-[180px] w-[28vw] max-w-[120px] object-cover md:bottom-auto md:left-[4%] md:top-[230px] md:block md:h-[180px] md:w-[145px] md:max-w-none lg:left-[7%]"
          src="/assets/heroramos2.png"
          alt="Flowers arranged in a florist studio"
        />
        <img
          className="absolute right-4 hidden bottom-[30%] h-[22svh] max-h-[165px] w-[26vw] max-w-[110px] object-cover md:right-[5%] md:bottom-auto md:top-[110px] md:block md:h-[220px] md:w-[170px] md:max-w-none lg:right-[8%]"
          src="/assets/heroramos3.png"
          alt="A delicate seasonal bouquet"
        />
        <a
          className="display-font absolute right-4 bottom-[35%] z-20 inline-flex items-center justify-center rounded-[0.35rem] bg-[#98596c] px-3 py-1.5 text-base leading-none text-white transition-transform hover:-translate-y-0.5 md:right-[10%] md:bottom-auto md:top-[342px] md:px-4 md:py-2 md:text-lg lg:right-[14%]"
          href="tel:+13105550148"
        >
          Call us now!
        </a>
      </section>

      <section
        id="about"
        className="mx-auto max-w-[1440px] px-6 pb-24 pt-0 text-center md:px-16 md:pb-36 md:pt-4"
      >
        <p className="display-font mx-auto max-w-[1180px] text-3xl uppercase leading-[1.02] tracking-[-0.025em] text-[#98596c] sm:text-5xl md:text-5xl lg:text-6xl">
          <span className="flex flex-wrap items-baseline justify-center gap-x-4">
            <span className="font-['Manrope'] text-xl normal-case tracking-[-0.05em] text-white md:text-2xl">
              (about us)
            </span>
            <span>Blooming in Hawthorne</span>
          </span>
          <span className="block">
            elegant paper wrapping floral placement <br />
            birthdays and weddings to anniversaries <br />
            Every bouquet leaves our studio with genuine care.
          </span>
        </p>
      </section>

      <section
        id="occasions"
        aria-labelledby="occasions-title"
        className="pb-24 md:pb-36"
      >
        <div className="mx-auto mb-8 flex max-w-[1440px] items-end justify-between px-6 md:px-16">
          <h2
            id="occasions-title"
            className="display-font text-5xl uppercase text-[#98596c] md:text-7xl"
          >
            Occasions
          </h2>
          <span className="hidden text-sm uppercase tracking-[0.12em] sm:block">
            flowers for every story
          </span>
        </div>
        <div
          className="mx-auto w-[calc(100%-3rem)] md:w-[65vw] md:max-w-[980px]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Flower services by occasion"
        >
          <figure>
            <img
              key={occasions[currentSlide].image}
              className="h-[55vh] min-h-[360px] w-full object-cover md:h-[500px] md:min-h-0 md:max-h-none"
              src={occasions[currentSlide].image}
              alt={occasions[currentSlide].alt}
            />
            <figcaption className="mt-3 flex items-baseline justify-between">
              <span className="display-font text-2xl">
                {occasions[currentSlide].title}
              </span>
              <span className="text-xs tracking-[0.14em]">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(occasions.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>

          <div className="mt-5 flex items-center justify-between">
            <button
              className="carousel-control"
              type="button"
              onClick={showPrevious}
              aria-label="Show previous gallery image"
            >
              previous
            </button>
            <div className="flex gap-2" aria-label="Choose an occasion">
              {occasions.map((occasion, index) => (
                <button
                  key={occasion.image}
                  className={`h-2.5 w-2.5 cursor-pointer rounded-full border border-[#98596c] transition-colors ${index === currentSlide ? "bg-[#98596c]" : "bg-transparent"
                    }`}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Show occasion ${index + 1}: ${occasion.title}`}
                  aria-current={index === currentSlide ? "true" : undefined}
                />
              ))}
            </div>
            <button
              className="carousel-control"
              type="button"
              onClick={showNext}
              aria-label="Show next gallery image"
            >
              next
            </button>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="visit-title"
        className="bg-[#98596c] px-6 py-16 text-white md:px-16 md:py-24"
      >
        <div className="mx-auto grid max-w-[1312px] overflow-hidden border border-white/35 md:grid-cols-2">
          <iframe
            className="min-h-[320px] w-full border-0 md:min-h-[460px]"
            src="https://www.google.com/maps?q=33.9160325,-118.3616756&z=17&output=embed"
            title="Ramos Flowers location in Hawthorne, California"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="flex flex-col justify-between p-5 sm:p-7 md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.16em]">
                Visit or get in touch
              </p>
              <h2
                id="visit-title"
                className="display-font mt-4 text-5xl uppercase leading-[0.85] tracking-[-0.04em] text-[#ead0d6] lg:text-6xl"
              >
                Let’s plan
                <br />
                something
                <br />
                beautiful
              </h2>
            </div>

            <div className="mt-5 grid gap-7 text-sm sm:grid-cols-2">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.14em] text-white/65">
                  Call
                </p>
                <a className="contact-link" href="tel:+4246754446">
                  (424) 675-4446
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.14em] text-white/65">
                  Email
                </p>
                <a
                  className="contact-link"
                  href="mailto:hello@ramosflowers.com"
                >
                  hello@ramosflowers.com
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.14em] text-white/65">
                  Visit
                </p>
                <p>
                  12801 S Inglewood Ave
                  <br />
                  Hawthorne, CA 90250
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.14em] text-white/65">
                  Follow
                </p>
                <div className="flex gap-4">
                  <a className="contact-link" href="https://www.instagram.com/ramos_flowers2/?hl=en">
                    Instagram
                  </a>
                  <a className="contact-link" href="#facebook">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <a
              className="mt-5 inline-flex w-fit items-center justify-center rounded-[0.35rem] bg-[#ead0d6] px-5 py-2 font-['Cormorant_Garamond'] text-lg leading-none text-[#98596c] transition-transform hover:-translate-y-0.5"
              href="#contact"
            >
              start your request
            </a>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        aria-labelledby="gallery-title"
        className="mx-auto max-w-[1440px] px-6 pb-24 md:px-16 md:pb-36"
      >
        <div className="mb-8 flex items-end justify-between">
          <h2
            id="gallery-title"
            className="display-font text-5xl uppercase text-[#98596c] md:text-7xl"
          >
            Gallery
          </h2>
          <span className="hidden text-sm uppercase tracking-[0.12em] sm:block">
            from our flower room
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {occasions.map((image, index) => (
            <figure
              key={`gallery-${image.image}`}
              className={index === 0 ? "col-span-2 md:col-span-1" : ""}
            >
              <img
                className="aspect-[4/5] h-full w-full object-cover"
                src={image.image}
                alt={image.alt}
              />
            </figure>
          ))}
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="border-t border-[#98596c]/30 px-6 py-20 md:px-16 md:py-28"
      >
        <div className="mx-auto grid max-w-[1312px] gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.12em]">
              have something in mind?
            </p>
            <h2
              id="contact-title"
              className="display-font text-6xl uppercase leading-[0.8] tracking-[-0.04em] text-[#98596c] md:text-8xl"
            >
              Let’s make
              <br />
              it bloom
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Tell us a little about your occasion and we’ll create something
              thoughtful, seasonal, and entirely yours.
            </p>
          </div>

          <form
            className="grid gap-x-6 gap-y-7 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              setRequestSent(true);
            }}
          >
            <label className="form-label">
              Your name
              <input className="form-field" name="name" type="text" required />
            </label>
            <label className="form-label">
              Email
              <input className="form-field" name="email" type="email" required />
            </label>
            <label className="form-label">
              Occasion
              <input
                className="form-field"
                name="occasion"
                type="text"
                placeholder="Birthday, wedding, just because"
              />
            </label>
            <label className="form-label">
              Preferred date
              <input className="form-field" name="date" type="date" />
            </label>
            <label className="form-label sm:col-span-2">
              Your request
              <textarea
                className="form-field min-h-28 resize-y"
                name="request"
                required
                placeholder="Colors, mood, favorite flowers, delivery details..."
              />
            </label>
            <div className="flex items-center gap-5 sm:col-span-2">
              <button className="pill-link cursor-pointer border-0" type="submit">
                send request
              </button>
              {requestSent && (
                <p className="text-sm" role="status">
                  Thank you — we’ll be in touch soon.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <footer
        className="border-t border-[#98596c]/30 px-6 py-8 text-center text-sm md:px-16"
      >
        <p>Ramos Flowers · bouquets made with feeling</p>
        <p className="mt-1 text-[#98596c]">
          hello@ramosflowers.com
        </p>
      </footer>
    </main>
  );
}
