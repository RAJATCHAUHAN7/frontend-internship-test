import React, { useState } from "react";

const IMG = {
  /* Hero background */
  heroBg:
    "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1920",

  /* Hero right-side card plant */
  heroCard:
    "https://i.postimg.cc/bvYScns6/Chat-GPT-Image-Jul-2-2026-01-11-35-AM.png",

  /* Reviewer */
  reviewer:
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",

  /* Trendy section  */
  trendy1:
    "https://i.postimg.cc/zG28vHxd/Chat-GPT-Image-Jul-2-2026-01-37-18-AM.png",

  trendy2:
    "https://i.postimg.cc/W1zcBbst/Chat-GPT-Image-Jul-2-2026-02-42-29-AM.png",

  /* Top Selling Section */
  pot1: "https://i.postimg.cc/bvYScns6/Chat-GPT-Image-Jul-2-2026-01-11-35-AM.png",
  pot2: "https://i.postimg.cc/W1zcBbst/Chat-GPT-Image-Jul-2-2026-02-42-29-AM.png",
  pot3: "https://i.postimg.cc/fRGq8wLq/Chat-GPT-Image-Jul-2-2026-02-44-57-AM.png",
  pot4: "https://i.postimg.cc/3J6twKg4/Chat-GPT-Image-Jul-2-2026-02-46-49-AM.png",
  pot5: "https://i.postimg.cc/ZRTcQ0hM/Chat-GPT-Image-Jul-2-2026-02-48-19-AM.png",
  pot6: "https://i.postimg.cc/C52sdNnW/Chat-GPT-Image-Jul-2-2026-02-49-40-AM.png",

  /* O2 section */
  o2:   "https://i.postimg.cc/bvYScns6/Chat-GPT-Image-Jul-2-2026-01-11-35-AM.png",

  /* Reviews Section */
  rev1: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=160",
  rev2: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=160",
  rev3: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=160",
};


/* Stars */
const Stars = ({ n = 5 }: { n?: number }) => (
  <div className="flex gap-[2px] mt-1">
    {[0,1,2,3,4].map(i => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24"
        fill={i < n ? "#f5c518" : "none"} stroke="#f5c518" strokeWidth="1.5">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ))}
  </div>
);

/* Top Logo plant */
const LogoLeaf = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    {/* Pot body */}
    <path d="M11 24 L12.5 30 L19.5 30 L21 24 Z" fill="#b5a48a"/>
    {/* Pot rim */}
    <rect x="10" y="22" width="12" height="2.5" rx="1.1" fill="#c8b89a"/>
    {/* Soil */}
    <ellipse cx="16" cy="22.5" rx="5" ry="1.2" fill="#7a5c3a"/>
    {/* Stem */}
    <path d="M16 22 L16 14" stroke="#4a7c3f" strokeWidth="1.4" strokeLinecap="round"/>
    {/* Left big leaf */}
    <path d="M16 16 C13 13 8 12 7 8 C8 5 13 5 15 9 C15.5 11 16 13 16 16Z"
      fill="#5dab4a"/>
    {/* Left leaf vein */}
    <path d="M16 16 C13 13 10 10 8 7.5" stroke="#3d7a35" strokeWidth="0.6" strokeLinecap="round"/>
    {/* Right big leaf */}
    <path d="M16 14 C19 11 24 10 25 6 C24 3 19 3 17 7 C16.5 9 16 12 16 14Z"
      fill="#7cc95f"/>
    {/* Right leaf vein */}
    <path d="M16 14 C19 11 22 8 24.5 5.5" stroke="#5aab47" strokeWidth="0.6" strokeLinecap="round"/>
    {/* Small sprout left */}
    <path d="M15 18 C12 16 10 14 10 12 C12 11 14 13 15 16Z" fill="#c5d96a"/>
    {/* Small sprout right */}
    <path d="M17 17 C20 15 22 13 22 11 C20 10 18 12 17 15Z" fill="#c5d96a"/>
  </svg>
);

/* Bag icon */
const Bag = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

/* Chevron down */
const ChevDown = () => (
  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
    <path d="M1 1L4.5 5L8 1" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

/* Play triangle */
const Play = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="white">
    <path d="M1 1L13 8L1 15V1Z"/>
  </svg>
);

/* Chevron right */
const ChevRight = () => (
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
    <path d="M1 1L6 6L1 11" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

/* Section title */
const SectionTitle = ({ text }: { text: string }) => (
  <div className="flex justify-center">
    <div style={{
      border: "1.5px solid rgba(255,255,255,0.38)",
      borderRadius: 5,
      padding: "6px 22px",
      display: "inline-block",
    }}>
      <h2 className="font-inter font-semibold text-white text-center"
        style={{ fontSize: "clamp(20px, 2.6vw, 38px)", letterSpacing: "-0.01em" }}>
        {text}
      </h2>
    </div>
  </div>
);

/* Slider dots */
const Dots = ({ wide = true }: { wide?: boolean }) => (
  <div className="flex items-center gap-2 justify-center mt-6">
    <span style={{ width: wide ? 26 : 9, height: 9, borderRadius: 9, background: "rgba(255,255,255,0.6)" }}/>
    <span style={{ width: 9, height: 9, borderRadius: 9, background: "rgba(255,255,255,0.6)" }}/>
    <span style={{ width: 9, height: 9, borderRadius: 9, background: "rgba(255,255,255,0.6)" }}/>
  </div>
);

  /*  NAVBAR */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", drop: false },
    { label: "Plants Type", drop: true },
    { label: "More", drop: false },
    { label: "Contact", drop: false },
  ];
  return (
    <header className="relative z-30 w-full" style={{ padding: "18px 28px 0" }}>
      <div className="flex items-center justify-between">
        {/* ── Logo ── */}
        <div className="flex items-center gap-[7px] cursor-pointer">
          <LogoLeaf />
          <span className="font-inter font-black text-white"
            style={{ fontSize: "clamp(16px, 1.5vw, 22px)", opacity: 0.92, letterSpacing: "-0.02em" }}>
            FloraVision.
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: "clamp(28px, 4vw, 60px)" }}>
          {links.map(l => (
            <button key={l.label}
              className="flex items-center gap-1.5 font-indie text-white hover:opacity-70 transition-opacity"
              style={{ fontSize: "clamp(15px, 1.2vw, 20px)" }}>
              {l.label}
              {l.drop && <ChevDown />}
            </button>
          ))}
        </nav>

        {/* Right actions  */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block hover:opacity-70 transition-opacity">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button className="text-white hover:opacity-70 transition-opacity"><Bag size={19}/></button>
          {/* Mobile burger */}
          <button className="lg:hidden flex flex-col gap-[5px]" onClick={() => setOpen(!open)}>
            <span className="block bg-white rounded-full" style={{ width: 24, height: 2.5 }}/>
            <span className="block bg-white rounded-full ml-auto" style={{ width: 16, height: 2.5 }}/>
            <span className="block bg-white rounded-full" style={{ width: 20, height: 2.5 }}/>
          </button>
          {/* Desktop lines */}
          <button className="hidden lg:flex flex-col gap-[5px]">
            <span className="block bg-white rounded-full" style={{ width: 24, height: 2.5 }}/>
            <span className="block bg-white rounded-full ml-auto" style={{ width: 16, height: 2.5 }}/>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 rounded-2xl px-6 py-5 flex flex-col gap-3 border border-white/10"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(14px)" }}>
          {links.map(l => (
            <button key={l.label} className="flex items-center gap-2 font-indie text-white text-[18px] text-left hover:opacity-75">
              {l.label}{l.drop && <ChevDown />}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};


// HERO 

const Hero = () => (
  <section className="relative z-10" style={{ padding: "20px 28px 0" }}>
    <div className="flex flex-col lg:flex-row lg:items-start" style={{ gap: "clamp(20px,3vw,40px)" }}>

      {/* Left — headline + CTAs + review card */}
      <div className="flex flex-col flex-1">
        <h1 className="font-inter font-semibold text-white"
          style={{
            fontSize: "clamp(44px, 7.5vw, 100px)",
            lineHeight: 0.93,
            opacity: 0.88,
            letterSpacing: "-0.02em",
          }}>
          Earth's Exhale
        </h1>

        <p className="font-inter font-medium text-white/70 mt-3 max-w-[520px]"
          style={{ fontSize: "clamp(11px, 1.1vw, 16px)", lineHeight: 1.55 }}>
          "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
          environment and its essential role in sustaining life.
        </p>

         {/* CTA row  */}
        <div className="flex flex-wrap items-center mt-5" style={{ gap: "clamp(12px,2vw,24px)" }}>
          <button className="border-2 border-white/65 text-white font-inter font-normal rounded-xl
            hover:bg-white/10 transition-colors"
            style={{ fontSize: "clamp(13px,1vw,18px)", padding: "8px 22px", minWidth: 100 }}>
            Buy Now
          </button>
          <button className="flex items-center gap-3 group">
            <span className="flex items-center justify-center rounded-full border-2 border-white/65
              group-hover:bg-white/10 transition-colors"
              style={{ width: "clamp(42px,4vw,56px)", height: "clamp(42px,4vw,56px)" }}>
              <Play />
            </span>
            <span className="font-indie text-white"
              style={{ fontSize: "clamp(15px,1.2vw,20px)" }}>
              Live Demo...
            </span>
          </button>
        </div>

        {/* Review card */}
        <div className="mt-5 rounded-[22px] p-4"
          style={{
            maxWidth: "clamp(260px,28vw,360px)",
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.13)",
          }}>
          <div className="flex items-center gap-3">
            <img src={IMG.reviewer} alt="Ronnie Hamill"
              className="rounded-[13px] object-cover flex-shrink-0"
              style={{ width: 48, height: 48 }}/>
            <div>
              <p className="font-inter font-normal text-white" style={{ fontSize: "clamp(12px,1vw,15px)" }}>
                Ronnie Hamill
              </p>
              <Stars n={5}/>
            </div>
          </div>
          <p className="font-inter font-normal text-white/65 mt-3"
            style={{ fontSize: "clamp(10px,0.85vw,13px)", lineHeight: 1.6 }}>
            I can't express how thrilled I am with my new natural plants! They bring
            such a fresh and vibrant energy to my home.
          </p>
          <Dots wide />
        </div>
      </div>

      {/* Right product card  */}
      <div className="hidden lg:block flex-shrink-0"
        style={{ width: "clamp(180px,17vw,240px)", paddingTop: "clamp(70px,9vw,100px)", marginTop: "-clamp(30px,3vw,40px)" }}>
        <div className="relative"
          style={{ paddingTop: "clamp(70px,9vw,100px)" }}>
          {/* Card body */}
          <div className="rounded-[22px]"
            style={{
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.13)",
              padding: "0 0 16px 0",
              overflow: "visible",
            }}>
            {/* Plant image overflowing out of the top */}
            <div className="relative flex justify-center"
              style={{ marginTop: "clamp(-80px,-10vw,-90px)" }}>
              <img
                src="https://i.postimg.cc/bvYScns6/Chat-GPT-Image-Jul-2-2026-01-11-35-AM.png"
                alt="Aglaonema plant"
                className="object-cover rounded-[16px]"
                style={{
                  width: "clamp(140px,15vw,200px)",
                  height: "clamp(140px,15vw,200px)",
                  objectPosition: "center top",

                }}
              />
            </div>

            {/* Text content */}
            <div style={{ padding: "14px 16px 0" }}>
              <p className="font-inter text-white/55" style={{ fontSize: "clamp(10px,0.85vw,13px)" }}>
                Indoor Plant
              </p>
              <div className="flex items-center justify-between mt-1">
                <p className="font-inter font-semibold text-white"
                  style={{ fontSize: "clamp(13px,1.2vw,17px)" }}>
                  Aglaonema plant
                </p>
                <ChevRight />
              </div>
              <button
                className="mt-3 w-full rounded-[10px] font-inter text-white/80 hover:bg-white/15 transition-colors"
                style={{
                  fontSize: "clamp(11px,0.9vw,14px)",
                  padding: "8px 0",
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.38)",
                }}>
                Buy Now
              </button>
              <div className="flex gap-1.5 justify-center items-center mt-3">
                <span style={{ width: 18, height: 5, borderRadius: 6, background: "rgba(255,255,255,0.7)" }}/>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }}/>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


   // TRENDY PLANTS

type TrendyProps = {
  img: string; title: string; desc: string; price: string; flip?: boolean;
};

const TrendyCard = ({ img, title, desc, price, flip }: TrendyProps) => (
  <div className="relative w-full" style={{
    minHeight: "clamp(200px,24vw,300px)",
    /* extra top space so overflowing plant image has room */
    paddingTop: "clamp(60px,9vw,110px)",
  }}>
    {/* Card background */}
    <div className="absolute inset-x-0 bottom-0 rounded-[26px] overflow-hidden"
      style={{
        top: "clamp(50px,7vw,90px)",
        backdropFilter: "blur(6px)",
        border: "1px solid rgba(255,255,255,0.09)",
      }}>
      {/* blurred bg photo inside card */}
    </div>

    {/* Flex row: image side + text side */}
    <div className={`relative flex items-end h-full ${flip ? "flex-row-reverse" : "flex-row"}`}>

      {/* Plant image — overflows above the card */}
      <div className="flex-shrink-0 relative z-10"
        style={{
          width: "clamp(170px,24vw,320px)",
          marginLeft: flip ? 0 : "clamp(16px,2vw,40px)",
          marginRight: flip ? "clamp(16px,2vw,40px)" : 0,
          /* pull image UP so it overflows the card top */
          marginTop: "clamp(-90px,-10vw,-110px)",
        }}>
        <img src={img} alt={title}
          className="w-full object-contain"
          style={{
            height: "clamp(200px,28vw,360px)",
            objectPosition: "top center",
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.7))",
          }}/>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center z-10 flex-1"
        style={{
          padding: flip
            ? "clamp(16px,2vw,28px) clamp(16px,2vw,28px) clamp(20px,3vw,40px) clamp(10px,1.5vw,20px)"
            : "clamp(16px,2vw,28px) clamp(16px,2vw,28px) clamp(20px,3vw,40px) clamp(10px,1.5vw,20px)",
          gap: "clamp(8px,1vw,14px)",
          display: "flex",
          flexDirection: "column",
        }}>
        <h3 className="font-inter font-semibold text-white"
          style={{ fontSize: "clamp(15px,1.6vw,24px)" }}>
          {title}
        </h3>
        <p className="font-inter font-normal text-white/65"
          style={{ fontSize: "clamp(10px,0.9vw,14px)", lineHeight: 1.55, maxWidth: 340 }}>
          {desc}
        </p>
        <p className="font-inter font-semibold text-white"
          style={{ fontSize: "clamp(15px,1.6vw,22px)" }}>
          {price}
        </p>
        <div className="flex items-center gap-3">
          <button className="border border-white/55 text-white font-inter rounded-xl
            hover:bg-white/10 transition-colors"
            style={{ fontSize: "clamp(11px,0.9vw,15px)", padding: "6px 18px" }}>
            Explore
          </button>
          <button className="flex items-center justify-center rounded-lg border border-white/45
            text-white hover:bg-white/10 transition-colors"
            style={{ width: 32, height: 32 }}>
            <Bag size={14}/>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const TrendySection = () => (
  <div style={{ padding: "8px clamp(14px,2vw,28px) 0", display: "flex", flexDirection: "column", gap: "clamp(16px,2vw,28px)" }}>
    <TrendyCard
      img={IMG.trendy1}
      title="For Your Desks Decorations"
      desc="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
      price="Rs. 599/-"
    />
    <TrendyCard
      img={IMG.trendy2}
      title="For Your Desks Decorations"
      desc="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming"
      price="Rs. 399/-"
      flip
    />
  </div>
);


   // TOP SELLING PLANTS

type SellingProps = { img: string; title: string; desc: string; price: string };

const SellingCard = ({ img, title, desc, price }: SellingProps) => (
  <div className="flex flex-col rounded-[22px] overflow-hidden cursor-pointer group"
    style={{
      background: "linear-gradient(170deg,#1d2c17 0%,#121b0e 100%)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}>
    {/* Plant image — object-contain so whole pot+plant is visible */}
    <div className="flex items-end justify-center overflow-visible"
      style={{
       height: "clamp(250px,19vw,300px)",
        padding: "-40px 24px 0",
        background: "linear-gradient(180deg,rgba(255,255,255,0.03) 0%,transparent 100%)",
      }}>
      <img src={img} alt={title}
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        style={{ filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.6))", objectPosition: "top center" }}/>
    </div>

    {/* Info */}
    <div style={{ padding: "14px 18px 18px", display: "flex", flexDirection: "column", gap: 6 }}>
      <h3 className="font-inter font-normal text-white/85"
        style={{ fontSize: "clamp(13px,1.3vw,19px)" }}>
        {title}
      </h3>
      <p className="font-inter font-normal text-white/50"
        style={{ fontSize: "clamp(9px,0.8vw,12px)", lineHeight: 1.5, maxWidth: 240 }}>
        {desc}
      </p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-inter font-normal text-white/75"
          style={{ fontSize: "clamp(12px,1.1vw,17px)" }}>
          {price}
        </span>
        <button className="flex items-center justify-center rounded-lg border border-white/35
          text-white hover:bg-white/15 transition-colors flex-shrink-0"
          style={{ width: 30, height: 30 }}>
          <Bag size={13}/>
        </button>
      </div>
    </div>
  </div>
);

const TopSelling = () => {
  const plants: SellingProps[] = [
    { img: IMG.pot1, title: "Aglaonema plant",   desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care", price: "Rs. 300/-" },
    { img: IMG.pot2, title: "Plantain Lilies",   desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes", price: "Rs. 380/-" },
    { img: IMG.pot3, title: "Cactus",            desc: "It is known for their ability to thrive in arid environments", price: "Rs. 259/-" },
    { img: IMG.pot4, title: "Swiss cheese Plant",desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves", price: "Rs. 400/-" },
    { img: IMG.pot5, title: "Sansevieria plant", desc: "It is a popular indoor plant admired for its striking architectural appearance and low-maintenance nature.", price: "Rs. 450/-" },
    { img: IMG.pot6, title: "Agave plant",       desc: "The Agave plant is a genus of succulent plants known for their striking rosette of leaves and architectural forms.", price: "Rs. 358/-" },
  ];
  return (
    <div style={{ padding: "8px clamp(14px,2vw,28px) 0" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(clamp(160px,28%,340px),1fr))",
        gap: "clamp(12px,1.5vw,22px)",
      }}>
        {plants.map(p => <SellingCard key={p.title} {...p}/>)}
      </div>
    </div>
  );
};


   // CUSTOMER REVIEW

type ReviewProps = { name: string; img: string; n: number; quote: string };

const ReviewCard = ({ name, img, n, quote }: ReviewProps) => (
  <div className="rounded-[22px] flex flex-col"
    style={{
      padding: "clamp(18px,2vw,28px)",
      background: "rgba(255,255,255,0.06)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255,255,255,0.1)",
      gap: "clamp(12px,1.5vw,20px)",
    }}>
    <div className="flex items-start gap-3">
      <img src={img} alt={name}
        className="rounded-full object-cover flex-shrink-0"
        style={{ width: "clamp(60px,6vw,90px)", height: "clamp(60px,6vw,90px)" }}/>
      <div className="pt-0.5">
        <h3 className="font-inter font-semibold text-white"
          style={{ fontSize: "clamp(14px,1.4vw,22px)" }}>
          {name}
        </h3>
        <Stars n={n}/>
      </div>
    </div>
    <p className="font-inter font-normal text-white/65"
      style={{ fontSize: "clamp(11px,1vw,16px)", lineHeight: 1.6 }}>
      {quote}
    </p>
  </div>
);

const Reviews = () => {
  const data: ReviewProps[] = [
    { name: "Shelly Russel", img: IMG.rev1, n: 5,
      quote: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!" },
    { name: "Lula Rolfson",  img: IMG.rev2, n: 5,
      quote: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home." },
    { name: "Carol Huels",   img: IMG.rev3, n: 4,
      quote: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!" },
  ];
  return (
    <div style={{ padding: "8px clamp(14px,2vw,28px) 0" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(clamp(260px,30%,440px),1fr))",
        gap: "clamp(12px,1.5vw,22px)",
      }}>
        {data.map(r => <ReviewCard key={r.name} {...r}/>)}
      </div>
      <Dots />
    </div>
  );
};


   // O2 SECTION

const O2 = () => (
  <div style={{ padding: "0 clamp(14px,2vw,28px)" }}>
    <div className="relative overflow-visible"
      style={{
        borderRadius: "clamp(28px,4.5vw,72px)",
        background: "rgba(255,255,255,0.04)",
        border: "1.5px solid rgba(255,255,255,0.11)",
      }}>
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-visible items-stretch">
        {/* Plant */}
        <div className="relative overflow-visible" style={{ minHeight: "clamp(240px,32vw,520px)", borderRadius: "clamp(28px,4.5vw,72px) 0 0 clamp(28px,4.5vw,72px)" }}>
          <img src={IMG.o2} alt="O2 Plant" className="absolute inset-0 overflow-visible w-full h-full object-cover"/>
        </div>
        {/* Text */}
        <div className="flex flex-col justify-center"
          style={{
            padding: "clamp(24px,3vw,52px) clamp(20px,3vw,52px)",
            gap: "clamp(14px,1.5vw,22px)",
          }}>
          <h3 className="font-inter font-semibold text-white/80"
            style={{ fontSize: "clamp(16px,1.7vw,28px)" }}>
            We Have Small And Best O2 Plants Collection's
          </h3>
          <p className="font-inter font-semibold text-white/65"
            style={{ fontSize: "clamp(11px,1vw,17px)", lineHeight: 1.6 }}>
            Oxygen-producing plants, often referred to as "O2 plants," are those that
            release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p className="font-inter font-semibold text-white/65"
            style={{ fontSize: "clamp(11px,1vw,17px)", lineHeight: 1.6 }}>
            Many plants can help filter out pollutants and toxins from the air, such as
            formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and
            healthier to breathe.
          </p>
          <div className="flex items-center gap-3">
            <button className="border border-white/55 text-white/80 font-inter font-normal rounded-xl
              hover:bg-white/10 transition-colors"
              style={{ fontSize: "clamp(12px,1vw,16px)", padding: "8px 22px" }}>
              Explore
            </button>
            <button className="flex items-center justify-center rounded-xl border border-white/45
              text-white hover:bg-white/10 transition-colors"
              style={{ width: 36, height: 36 }}>
              <ChevRight/>
            </button>
          </div>
        </div>
      </div>
      <Dots wide={false}/>
    </div>
  </div>
);


   // FOOTER

const Footer = () => {
  const links = ["Home", "Types Of plant's", "Contact", "Privacy"];
  return (
    <footer style={{ padding: "clamp(48px,6vw,90px) clamp(14px,2vw,28px) clamp(28px,4vw,48px)" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "clamp(28px,4vw,56px)",
      }}>
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <LogoLeaf/>
            <span className="font-inter font-black text-white/80"
              style={{ fontSize: "clamp(20px,2vw,30px)", letterSpacing: "-0.02em" }}>
              FloraVision.
            </span>
          </div>
          <p className="font-inter font-medium text-white/75 max-w-[380px]"
            style={{ fontSize: "clamp(11px,0.95vw,16px)", lineHeight: 1.65 }}>
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted
            to thrive and elevate your living environment."
          </p>
          <div className="flex gap-7 mt-7">
            {["FB","TW","LI"].map(s => (
              <button key={s} className="font-inter font-extrabold text-white hover:opacity-65 transition-opacity"
                style={{ fontSize: "clamp(13px,1.1vw,17px)" }}>{s}</button>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-inter font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(14px,1.2vw,19px)" }}>
            Quick Link's
          </h3>
          <ul className="flex flex-col gap-3">
            {links.map(l => (
              <li key={l}>
                <button className="font-inter font-medium text-white underline underline-offset-2
                  hover:opacity-65 transition-opacity text-left"
                  style={{ fontSize: "clamp(12px,1vw,15px)" }}>
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-inter font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(14px,1.2vw,19px)" }}>
            For Every Update.
          </h3>
          <div className="flex items-center rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.45)",
              maxWidth: 380,
            }}>
            <input type="email" placeholder="Enter Email"
              className="flex-1 bg-transparent text-white/65 placeholder:text-white/45 font-inter outline-none"
              style={{ fontSize: "clamp(11px,0.9vw,14px)", padding: "10px 14px" }}/>
            <button className="font-inter font-semibold text-white hover:opacity-80 transition-opacity flex-shrink-0"
              style={{
                fontSize: "clamp(10px,0.85vw,13px)",
                padding: "10px 16px",
                background: "rgba(255,255,255,0.12)",
                borderLeft: "1px solid rgba(255,255,255,0.25)",
              }}>
              SUBSCRIBE
            </button>
          </div>
          <p className="font-inter font-medium text-white/55 mt-10"
            style={{ fontSize: "clamp(10px,0.8vw,13px)" }}>
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};


   // ROOT — HOME

export const Home = (): JSX.Element => (
  <main className="relative min-h-screen w-full overflow-x-hidden"
    style={{ backgroundColor: "#19241400" }}>

    {/* ── BG layer 1: the actual lush-bush photo, quite visible ── */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <img
        src={IMG.heroBg}
        alt=""
        className="w-full h-full object-cover"
        style={{
          opacity: 0.62,                  /* visibly shows the green bush */
          objectPosition: "center 25%",
        }}
      />
    </div>

    {/* ── BG layer 2: dark green gradient so text stays readable ── */}
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg," +
          "rgba(18,26,13,0.38) 0%," +
          "rgba(18,26,13,0.52) 25%," +
          "rgba(18,26,13,0.72) 50%," +
          "rgba(18,26,13,0.90) 70%," +
          "rgba(18,26,13,0.97) 100%)",
      }}
    />

    {/* ── Page ── */}
    <div className="relative z-10 mx-auto w-full" style={{ maxWidth: 1728 }}>

      <Navbar />
      <Hero />

      {/* Trendy */}
      <section style={{ marginTop: "clamp(40px,5vw,70px)" }}>
        <SectionTitle text="Our Trendy plants" />
        <TrendySection />
      </section>

      {/* Top Selling */}
      <section style={{ marginTop: "clamp(40px,5vw,70px)" }}>
        <SectionTitle text="Our Top Selling Plants" />
        <TopSelling />
      </section>

      {/* Reviews */}
      <section style={{ marginTop: "clamp(40px,5vw,70px)" }}>
        <SectionTitle text="Customer Review" />
        <Reviews />
      </section>

      {/* O2 */}
      <section style={{ marginTop: "clamp(40px,5vw,70px)" }}>
        {/* heading with leaf brackets */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2C9 5 2 12 4 21 C7 30 25 28 28 19 C31 10 23 2 16 2Z"
              fill="rgba(255,255,255,0.14)"/>
            <path d="M16 2Q15 16 16 30" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2"/>
          </svg>
          <div style={{ border: "1.5px solid rgba(255,255,255,0.38)", borderRadius: 5, padding: "6px 22px" }}>
            <h2 className="font-inter font-semibold text-white"
              style={{ fontSize: "clamp(20px,2.6vw,38px)" }}>
              Our Best o2
            </h2>
          </div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
            style={{ transform: "scaleX(-1)" }}>
            <path d="M16 2C9 5 2 12 4 21 C7 30 25 28 28 19 C31 10 23 2 16 2Z"
              fill="rgba(255,255,255,0.14)"/>
            <path d="M16 2Q15 16 16 30" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2"/>
          </svg>
        </div>
        <O2 />
      </section>

      <Footer />
    </div>
  </main>
);
