import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TopSellingPlantsPlantainLiliesCardSection = (): JSX.Element => {
  const plant = {
    name: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: "Rs. 380/-",
    backgroundSrc: "/rectangle-6-5.svg",
    imageSrc: "/rose-gold-feminine-calligraphy-monogram-logo-15--2-2.png",
    bagSrc: "/bag-2-5.png",
  };

  return (
    <section className="w-full flex justify-center px-4">
      <Card className="relative w-full max-w-[170px] overflow-hidden rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="relative p-0">
          <img
            className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-auto w-full"
            alt="Rectangle"
            src={plant.backgroundSrc}
          />
          <article className="relative flex min-h-[280px] flex-col justify-end">
            <img
              className="pointer-events-none mx-auto mt-0 block h-auto w-[122%] max-w-none object-cover"
              alt="Rose gold feminine"
              src={plant.imageSrc}
            />
            <div className="relative z-10 -mt-6 flex flex-col px-4 pb-4 text-[#ffffffbf]">
              <h2 className="[font-family:'Inter',Helvetica] text-[15px] font-normal leading-none tracking-[0]">
                {plant.name}
              </h2>
              <p className="mt-2 max-w-[118px] [font-family:'Inter',Helvetica] text-[8px] font-normal leading-[1.35] tracking-[0] text-[#ffffffbf]">
                {plant.description}
              </p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="[font-family:'Inter',Helvetica] text-[15px] font-normal leading-none tracking-[0] text-[#ffffffbf]">
                  {plant.price}
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto w-[22px] min-w-0 rounded-[8px] border-2 border-solid border-[#ffffff8f] bg-transparent p-1 hover:bg-white/10"
                  aria-label={`Add ${plant.name} to bag`}
                >
                  <img
                    className="h-[11px] w-[11px] object-cover"
                    alt="Bag"
                    src={plant.bagSrc}
                  />
                </Button>
              </div>
            </div>
          </article>
        </CardContent>
      </Card>
    </section>
  );
};
