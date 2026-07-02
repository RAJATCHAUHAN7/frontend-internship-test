import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const sectionText = {
  title: "Our Best o2",
  heading: "We Have Small And Best O2 Plants Collection&apos;s",
  paragraphs: [
    `Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.`,
    "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
  ],
  cta: "Explore",
};

export const BestOxygenPlantsInfoSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-2.5 pb-6 pt-8 sm:pt-10 lg:pt-12">
      <div className="mx-auto flex w-full max-w-[1684px] flex-col items-center">
        <header className="relative mb-8 flex min-h-[102px] items-start justify-center sm:mb-10">
          <img
            className="absolute left-0 top-[30px] h-[74px] w-[74px]"
            alt="Vector"
            src="/vector-4.svg"
          />
          <h2 className="[text-shadow:0px_1.99px_1.59px_#00000016] [font-family:'Inter',Helvetica] px-12 pt-3.5 text-center font-semibold text-white text-[32px] leading-[normal] tracking-[0] sm:px-16 sm:text-[42px] lg:text-[55px]">
            {sectionText.title}
          </h2>
          <img
            className="absolute right-0 top-0 h-[74px] w-[74px]"
            alt="Vector"
            src="/vector-3.svg"
          />
        </header>
        <Card className="relative w-full overflow-hidden rounded-[36px] border-none bg-[#ffffff0d] shadow-none sm:rounded-[52px] lg:min-h-[755px] lg:rounded-[92px] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[36px] before:p-[3px] before:content-[''] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[background:linear-gradient(102deg,rgba(255,255,255,0.44)_0%,rgba(0,0,0,0)_38%,rgba(255,255,255,0.33)_100%)] before:[mask-composite:exclude] sm:before:rounded-[52px] lg:before:rounded-[92px]">
          <CardContent className="relative z-[2] p-0">
            <div className="grid items-center gap-4 px-4 py-6 sm:px-6 sm:py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[minmax(420px,820px)_minmax(420px,1fr)] lg:px-[78px] lg:py-[42px]">
              <div className="flex justify-center md:justify-start">
                <img
                  className="h-auto w-full max-w-[280px] object-contain sm:max-w-[360px] md:max-w-[440px] lg:max-w-[967px]"
                  alt="Rose gold feminine"
                  src="/rose-gold-feminine-calligraphy-monogram-logo-15--3-1.png"
                />
              </div>
              <div className="flex max-w-[748px] flex-col items-start justify-center gap-6 pb-2 pt-2 md:pl-2 lg:gap-8">
                <h3 className="[font-family:'Inter',Helvetica] text-[#ffffffbf] font-semibold text-[26px] leading-[normal] tracking-[0] sm:text-[32px] lg:text-[38px]">
                  {sectionText.heading}
                </h3>
                {sectionText.paragraphs.map((paragraph, index) => (
                  <p
                    key={`paragraph-${index}`}
                    className="[font-family:'Inter',Helvetica] text-[#ffffffbf] font-semibold text-[18px] leading-[1.45] tracking-[0] sm:text-[22px] lg:text-[28px] lg:leading-[normal]"
                  >
                    {paragraph}
                  </p>
                ))}

                <Button
                  variant="outline"
                  className="h-auto rounded-xl border-2 border-white bg-transparent px-7 py-3 [font-family:'Inter',Helvetica] text-[20px] font-normal leading-[normal] tracking-[0] text-white opacity-75 hover:bg-white/10 hover:text-white sm:px-10 sm:py-3.5 sm:text-[24px] lg:min-w-[217px] lg:text-[28px]"
                >
                  {sectionText.cta}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
