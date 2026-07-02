import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const plantCardData = {
  name: "Sansevieria plant",
  description:
    "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
  price: "Rs. 450/-",
  backgroundSrc: "/rectangle-6-1.svg",
  plantSrc: "/rose-gold-feminine-calligraphy-monogram-logo-15--2-4.png",
  bagSrc: "/bag-2-5.png",
};

export const TopSellingPlantsSwissCheeseCardSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[516px] justify-center">
        <Card className="w-full overflow-hidden rounded-[18px] border border-white/20 bg-transparent shadow-none">
          <CardContent className="relative p-0">
            <div className="relative min-h-[757px] w-full overflow-hidden rounded-[18px] bg-[#1f2a1f]">
              <img
                className="absolute inset-x-[-3.5%] bottom-0 top-[15.5%] h-[88.1%] w-[106.4%] max-w-none"
                alt="Rectangle"
                src={plantCardData.backgroundSrc}
              />
              <img
                className="relative mx-auto mt-0 block h-auto w-full max-w-[619px] object-cover"
                alt="Rose gold feminine"
                src={plantCardData.plantSrc}
              />
              <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="px-[66px] pb-[51px]">
                  <article className="space-y-3">
                    <h3 className="min-h-[46px] [font-family:'Inter',Helvetica] text-[38px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                      {plantCardData.name}
                    </h3>
                    <p className="min-h-[116px] max-w-[393px] [font-family:'Inter',Helvetica] text-2xl font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                      {plantCardData.description}
                    </p>
                    <div className="flex items-end justify-between gap-6">
                      <p className="mt-[5px] min-h-[46px] w-[168px] [font-family:'Inter',Helvetica] text-[38px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                        {plantCardData.price}
                      </p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-auto w-[55px] rounded-xl border-2 border-solid border-[#ffffff8f] bg-transparent p-0 hover:bg-white/5"
                        aria-label="Add Sansevieria plant to bag"
                      >
                        <img
                          className="m-[14px] h-[27px] w-[27px] object-cover"
                          alt="Bag"
                          src={plantCardData.bagSrc}
                        />
                      </Button>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
