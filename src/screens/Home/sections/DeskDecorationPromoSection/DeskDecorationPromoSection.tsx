import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const actions = [
  {
    id: "explore-top",
    label: "Explore",
    compact: false,
  },
  {
    id: "explore-bottom",
    label: "Explore",
    compact: false,
  },
  {
    id: "icon-top",
    label: "",
    compact: true,
  },
  {
    id: "icon-bottom",
    label: "",
    compact: true,
  },
];

export const DeskDecorationPromoSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full max-w-[1087px] flex-col gap-5">
        <p className="sr-only">
          The highlighted area in the image shows a wide promotional product
          card with two Explore controls aligned diagonally and two compact
          square outline controls.
        </p>
        <div className="flex w-full justify-end gap-8">
          <Button
            type="button"
            variant="outline"
            className="h-16 min-w-[217px] rounded-xl border-2 border-white bg-transparent px-14 text-[28px] font-medium text-white hover:bg-white/10 hover:text-white [font-family:'Inter',Helvetica]"
          >
            {actions[0].label}
          </Button>
          <Button
            type="button"
            variant="outline"
            aria-label={actions[2].id}
            className="h-16 w-16 rounded-xl border-2 border-white bg-transparent p-0 text-white hover:bg-white/10 hover:text-white"
          />
        </div>
        <Card className="w-full overflow-hidden rounded-none border border-white/40 bg-black/35 shadow-none backdrop-blur-[1px]">
          <CardContent className="flex min-h-[170px] flex-col justify-between p-0">
            <div className="h-14 w-full border-b border-white/30 bg-black/20" />
            <div className="flex flex-1 items-end justify-between gap-4 p-4 text-white">
              <div className="max-w-[420px] space-y-2">
                <h2 className="text-sm font-semibold leading-tight [font-family:'Inter',Helvetica] sm:text-base">
                  Your Desks Decorations
                </h2>
                <p className="text-[10px] leading-4 text-white/80 [font-family:'Inter',Helvetica] sm:text-xs">
                  Greenery adds enough of nature to every day to be alive,
                  making it feel fresh.
                </p>
                <p className="text-sm font-semibold [font-family:'Inter',Helvetica] sm:text-base">
                  $ 399/-
                </p>
                <div className="flex items-center gap-2">
                  <Badge className="rounded-md border border-white/40 bg-transparent px-3 py-1 text-[10px] font-medium text-white hover:bg-transparent [font-family:'Inter',Helvetica]">
                    Explore
                  </Badge>
                  <div className="h-5 w-5 rounded-sm border border-white/50" />
                </div>
              </div>
              <div className="h-20 w-28 rounded-t-[999px] bg-gradient-to-t from-[#33462b] via-[#5f7a47] to-[#1f261b] opacity-90" />
            </div>
          </CardContent>
        </Card>
        <div className="flex w-full justify-start gap-8">
          <Button
            type="button"
            variant="outline"
            className="h-16 min-w-[217px] rounded-xl border-2 border-white bg-transparent px-14 text-[28px] font-medium text-white hover:bg-white/10 hover:text-white [font-family:'Inter',Helvetica]"
          >
            {actions[1].label}
          </Button>
          <Button
            type="button"
            variant="outline"
            aria-label={actions[3].id}
            className="h-16 w-16 rounded-xl border-2 border-white bg-transparent p-0 text-white hover:bg-white/10 hover:text-white"
          />
        </div>
      </div>
    </section>
  );
};
