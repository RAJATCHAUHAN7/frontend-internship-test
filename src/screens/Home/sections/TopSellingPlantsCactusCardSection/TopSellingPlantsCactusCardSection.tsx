import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cactusCard = {
  title: "Cactus",
  description: "It is known for their ability to thrive in arid environments",
  price: "Rs. 259/-",
  backgroundSrc: "/rectangle-6-4.svg",
  plantSrc: "/rose-gold-feminine-calligraphy-monogram-logo-15--2-3.png",
  bagSrc: "/bag-2-5.png",
};

export const TopSellingPlantsCactusCardSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="relative w-full max-w-[516px] overflow-hidden border-0 bg-transparent shadow-none">
        <CardContent className="relative p-0">
          <div className="relative mx-auto flex min-h-[757px] w-full items-end overflow-hidden rounded-[24px]">
            <img
              className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-auto w-full min-w-[516px]"
              alt="Rectangle"
              src={cactusCard.backgroundSrc}
            />
            <img
              className="pointer-events-none absolute left-1/2 top-0 z-10 h-auto w-[118.8%] max-w-none -translate-x-1/2 object-cover"
              alt="Rose gold feminine"
              src={cactusCard.plantSrc}
            />
            <article className="relative z-20 flex w-full flex-col px-[66px] pb-[51px] pt-[474px] text-white/75">
              <h3 className="[font-family:'Inter',Helvetica] text-[38px] font-normal leading-[normal] tracking-[0]">
                {cactusCard.title}
              </h3>
              <p className="mt-[32px] max-w-[358px] [font-family:'Inter',Helvetica] text-2xl font-normal leading-[normal] tracking-[0]">
                {cactusCard.description}
              </p>
              <div className="mt-[41px] flex items-end justify-between gap-6">
                <p className="[font-family:'Inter',Helvetica] text-[38px] font-normal leading-[normal] tracking-[0] text-white/75">
                  {cactusCard.price}
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto w-[55px] min-w-0 rounded-xl border-2 border-solid border-[#ffffff8f] bg-transparent p-0 hover:bg-white/10"
                  aria-label={`Add ${cactusCard.title} to bag`}
                >
                  <img
                    className="h-[27px] w-[27px] object-cover"
                    alt="Bag"
                    src={cactusCard.bagSrc}
                  />
                </Button>
              </div>
            </article>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
