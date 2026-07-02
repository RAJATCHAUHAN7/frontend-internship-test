import { Button } from "../../../../components/ui/button";

const heroContent = {
  title: "Earth's Exhale",
  description:
    '"Earth Exhale" symbolizes the purity and vitality of the Earth\'s natural environment and its essential role in sustaining life.',
  primaryAction: "Buy Now",
  secondaryAction: "Live Demo...",
};

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="hero-banner-title"
      className="relative w-full px-2 sm:px-3 md:px-4"
    >
      <div className="flex w-full flex-col items-start">
          {/* <header className="flex w-full flex-col items-start">
          
            id="hero-banner-title"
            className="opacity-75 [font-family:'Inter',Helvetica] text-white font-semibold tracking-[0] leading-[0.95] text-[44px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[118px]"
          >
            {heroContent.title}
          </h1> 
            <h1
  id="hero-banner-title"
  className="opacity-75 whitespace-nowrap [font-family:'Inter',Helvetica] text-white font-semibold tracking-[0] leading-[0.95] text-[clamp(40px,8vw,118px)]"
>
  {heroContent.title}
            </h1>
          <p className="-mt-1 max-w-[775px] opacity-75 [font-family:'Inter',Helvetica] font-medium text-white text-[12px] sm:text-[14px] md:text-[18px] lg:text-[23px] tracking-[0] leading-snug">
            {heroContent.description}
          </p>
        </header> */}

      <header className="flex w-full flex-col items-start">
  <h1
    id="hero-banner-title"
    className="
      opacity-75
      whitespace-nowrap
      text-white
      font-semibold
      [font-family:'Inter',Helvetica]
      tracking-[0]
      leading-none
      text-[70px]
      sm:text-[90px]
      md:text-[110px]
      lg:text-[130px]
    "
  >
    {heroContent.title}
  </h1>

  <p className="max-w-[775px] opacity-75 [font-family:'Inter',Helvetica] font-medium text-white text-[12px] sm:text-[14px] md:text-[18px] lg:text-[23px] tracking-[0] leading-snug">
    {heroContent.description}
  </p>
</header>
        <div className="mt-3 flex flex-wrap items-center gap-4 sm:mt-5 md:mt-7">
          <Button
            type="button"
            variant="outline"
            className="h-auto min-w-[160px] rounded-xl border-2 border-white bg-transparent px-5 py-3 [font-family:'Inter',Helvetica] font-normal text-[#ffffffbf] text-[20px] tracking-[0] hover:bg-white/10 hover:text-white sm:min-w-[180px] sm:px-6 sm:py-4 sm:text-[24px] md:min-w-[217px] md:text-[28px]"
          >
            {heroContent.primaryAction}
          </Button>
          <button
            type="button"
            aria-label={heroContent.secondaryAction}
            className="flex items-center gap-4 text-white"
          >
            <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full border-2 border-white">
              <img
                className="h-[25px] w-[22px]"
                alt="Polygon"
                src="/polygon-2.svg"
              />
            </span>
            <span className="[font-family:'Indie_Flower',Helvetica] font-normal text-[25px] tracking-[0] leading-[normal]">
              {heroContent.secondaryAction}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
