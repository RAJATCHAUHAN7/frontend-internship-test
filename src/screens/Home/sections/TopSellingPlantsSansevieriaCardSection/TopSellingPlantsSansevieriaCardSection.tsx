import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const plantCardData = {
  title: "Agave plant",
  description:
    "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
  price: "Rs. 359/-",
  backgroundSrc: "/rectangle-6-3.svg",
  plantSrc: "/rose-gold-feminine-calligraphy-monogram-logo-15--2-5.png",
  bagSrc: "/bag-2-5.png",
};

export const TopSellingPlantsSansevieriaCardSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="relative mx-auto w-full max-w-[516px] overflow-hidden border-0 bg-transparent shadow-none">
        <CardContent className="relative p-0">
          <div className="relative min-h-[757px] w-full">
            <img
              className="pointer-events-none absolute bottom-0 left-0 z-0 w-full max-w-none"
              alt="Card background"
              src={plantCardData.backgroundSrc}
            />
            <img
              className="pointer-events-none absolute left-1/2 top-0 z-10 w-[118.8%] max-w-none -translate-x-1/2 object-cover"
              alt="Agave plant"
              src={plantCardData.plantSrc}
            />
            <div className="relative z-20 flex min-h-[757px] flex-col justify-end px-[66px] pb-[51px] pt-[474px]">
              <header>
                <h3 className="[font-family:'Inter',Helvetica] text-[38px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                  {plantCardData.title}
                </h3>
              </header>
              <p className="mt-[11px] max-w-[391px] [font-family:'Inter',Helvetica] text-2xl font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                {plantCardData.description}
              </p>
              <div className="mt-1 flex items-end justify-between gap-6">
                <p className="[font-family:'Inter',Helvetica] text-[38px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                  {plantCardData.price}
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto w-[55px] rounded-xl border-2 border-solid border-[#ffffff8f] bg-transparent p-[12px] hover:bg-white/10"
                  aria-label={`Add ${plantCardData.title} to bag`}
                >
                  <img
                    className="h-[27px] w-[27px] object-cover"
                    alt="Bag"
                    src={plantCardData.bagSrc}
                  />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
