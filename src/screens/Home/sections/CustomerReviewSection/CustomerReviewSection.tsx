import { Card, CardContent } from "../../../../components/ui/card";

const reviews = [
  {
    name: "Shelly Russel",
    backgroundSrc: "/rectangle-7-2.svg",
    imageSrc: "/unsplash--7lbc5j-jw4.png",
    ratingSrc: "/group-7-1.png",
    quote:
      "Just got my hands on some absolutely awesome plants, and I couldn&apos;t be happier!",
  },
  {
    name: "Lula Rolfson",
    backgroundSrc: "/rectangle-7-1.svg",
    imageSrc: "/unsplash--7lbc5j-jw4-1.png",
    ratingSrc: "/group-7-2.png",
    quote:
      "Each one has its own unique charm and personality, and they&apos;ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    name: "Carol Huels",
    backgroundSrc: "/rectangle-7.svg",
    imageSrc: "/unsplash--7lbc5j-jw4-2.png",
    ratingSrc: "/group-7-3.png",
    quote:
      "It&#39;s like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

export const CustomerReviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-[29px]">
        {reviews.map((review) => (
          <Card
            key={review.name}
            className="relative overflow-hidden border-0 bg-transparent p-0 shadow-none"
          >
            <CardContent className="relative min-h-[480px] p-0">
              <img
                className="absolute inset-x-0 top-0 h-full w-full object-fill"
                alt=""
                src={review.backgroundSrc}
              />
              <article className="relative z-10 flex h-full flex-col px-6 pb-8 pt-8 sm:px-8">
                <header className="flex items-start gap-4">
                  <img
                    className="h-[92px] w-[92px] shrink-0 rounded-full object-cover sm:h-[110px] sm:w-[110px]"
                    alt={review.name}
                    src={review.imageSrc}
                  />
                  <div className="min-w-0 pt-1">
                    <h3 className="font-semibold text-[22px] text-white tracking-[0] leading-[1.1] sm:text-[28px] xl:text-[38px] [font-family:'Inter',Helvetica]">
                      {review.name}
                    </h3>
                    <img
                      className="mt-3 h-[19px] w-[131px]"
                      alt={`${review.name} rating`}
                      src={review.ratingSrc}
                    />
                  </div>
                </header>
                <p className="mt-8 max-w-[403px] [font-family:'Inter',Helvetica] text-[18px] font-normal leading-normal tracking-[0] text-[#ffffffbf] sm:text-[20px] xl:text-2xl">
                  {review.quote}
                </p>
              </article>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
