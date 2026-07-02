import { ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const sliderDots = [{ active: true }, { active: false }, { active: false }];

const cardContent = {
  category: "Indoor Plant",
  title: "Aglaonema  plant",
  cta: "Buy Now",
  plantImage: "/rose-gold-feminine-calligraphy-monogram-logo-15--3-1.png",
  backgroundImage: "/rectangle-14.svg",
};

export const HeroHighlightCardSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-end">
      <Card className="relative h-auto w-full max-w-[518px] overflow-hidden rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="relative p-0">
          <div className="relative min-h-[719px] w-full">
            <img
              className="absolute bottom-0 left-0 h-auto w-[512px] max-w-full"
              alt="Rectangle"
              src={cardContent.backgroundImage}
            />
            <div className="relative flex min-h-[719px] w-full flex-col justify-end overflow-hidden px-[81px] pb-14 pt-6">
              <img
                className="pointer-events-none absolute left-1/2 top-[-58px] w-[610px] max-w-none -translate-x-1/2 object-cover"
                alt="Rose gold feminine"
                src={cardContent.plantImage}
              />
              <div className="relative z-10 flex flex-col items-start">
                <p className="[font-family:'Inter',Helvetica] text-[23px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                  {cardContent.category}
                </p>
                <h2 className="mt-1 flex h-[46px] items-center [font-family:'Inter',Helvetica] text-[38px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                  {cardContent.title}
                </h2>
                <Button
                  variant="outline"
                  className="mt-[15px] h-auto w-[217px] justify-between rounded-xl border-2 border-solid border-white bg-transparent px-12 py-[18px] [font-family:'Inter',Helvetica] text-[28px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf] hover:bg-white/10 hover:text-white"
                >
                  <span>{cardContent.cta}</span>
                  <ChevronRightIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Button>
                <div className="mt-[30px] flex w-full justify-center gap-[11px]">
                  {sliderDots.map((dot, index) => (
                    <span
                      key={`slider-dot-${index}`}
                      className={
                        dot.active
                          ? "h-1.5 w-[21px] rounded-[46px] bg-white"
                          : "h-1.5 w-1.5 rounded-[3px] bg-white"
                      }
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
