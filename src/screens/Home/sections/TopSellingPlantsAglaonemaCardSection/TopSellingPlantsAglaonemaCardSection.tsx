import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const plantCard = {
  title: "Aglaonema plant",
  description:
    "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
  price: "Rs. 300/-",
  backgroundSrc: "/rectangle-6-2.svg",
  plantSrc: "/rose-gold-feminine-calligraphy-monogram-logo-15--3-1.png",
  bagSrc: "/bag-2-5.png",
};

export const TopSellingPlantsAglaonemaCardSection = (): JSX.Element => {
  return (
    <>
      <p className="mb-4 text-sm text-muted-foreground">
        The image shows a compact product card for a top-selling plant. It has a
        dark rounded card background, a plant image centered toward the upper
        half, the product title and description aligned at the lower left, and a
        bottom row with the price on the left and a bordered square bag button
        on the right.
      </p>
      <section className="w-full">
        <Card className="w-full max-w-[240px] overflow-hidden rounded-[18px] border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <article className="relative min-h-[340px] overflow-hidden rounded-[18px]">
              <img
                className="absolute inset-x-0 bottom-0 h-full w-full object-cover"
                alt="Rectangle"
                src={plantCard.backgroundSrc}
              />
              <img
                className="relative z-10 mx-auto block w-full max-w-[230px] object-contain pt-2"
                alt="Rose gold feminine"
                src={plantCard.plantSrc}
              />
              <div className="absolute inset-x-0 bottom-0 z-20 p-3">
                <header>
                  <h2 className="mb-1 [font-family:'Inter',Helvetica] text-sm font-normal leading-tight text-[#ffffffbf]">
                    {plantCard.title}
                  </h2>
                </header>
                <p className="mb-3 max-w-[150px] [font-family:'Inter',Helvetica] text-[9px] font-normal leading-[1.2] text-[#ffffffbf]">
                  {plantCard.description}
                </p>
                <div className="flex items-end justify-between gap-3">
                  <p className="[font-family:'Inter',Helvetica] text-sm font-normal leading-none text-[#ffffffbf]">
                    {plantCard.price}
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-auto w-[22px] min-w-0 rounded-[6px] border border-solid border-[#ffffff8f] bg-transparent p-1 hover:bg-white/10"
                    aria-label="Add Aglaonema plant to bag"
                  >
                    <img
                      className="h-3 w-3 object-contain"
                      alt="Bag"
                      src={plantCard.bagSrc}
                    />
                  </Button>
                </div>
              </div>
            </article>
          </CardContent>
        </Card>
      </section>
    </>
  );
};
