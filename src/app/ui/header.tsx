"use client";

import { PageHeading, Paragraph, NavBar } from ".";
import { usePathname } from "next/navigation";

type CustomColors =
  | "primary"
  | "secondary"
  | "base-100"
  | "white"
  | "darkOrange"
  | "orange"
  | "lightOrange"
  | "lightBlue"
  | "blue"
  | "gray";

const bgColorClass: Record<CustomColors, string> = {
  primary: "bg-[#84A9CD]",
  secondary: "bg-[#FC9F66]",
  "base-100": "bg-[#FFF9E6]",
  white: "bg-[#FFF]",
  darkOrange: "bg-[#FC9F66]",
  orange: "bg-[#FAC357]",
  lightOrange: "bg-[#FAE39C]",
  lightBlue: "bg-[#B8E0E3]",
  blue: "bg-[#97C5D8]",
  gray: "bg-[#D1D1D6]",
};

type RouteConfig = {
  bgColor: CustomColors;
  paragraphText: string;
  headingText: string;
};
const routeConfigs: Record<string, RouteConfig> = {
  "/": {
    bgColor: "base-100",
    paragraphText: "Welcome back,",
    headingText: "Magdalena",
  },
  "/connections": {
    bgColor: "blue",
    paragraphText: "connections",
    headingText: "All",
  },
  "/connections/family": {
    bgColor: "orange",
    paragraphText: "connections",
    headingText: "Family",
  },
  "/connections/friends": {
    bgColor: "lightOrange",
    paragraphText: "connections",
    headingText: "Friends",
  },
  "/connections/acquaintances": {
    bgColor: "lightBlue",
    paragraphText: "connections",
    headingText: "Acquaintances",
  },
  "/messages": {
    bgColor: "primary",
    paragraphText: "conversations",
    headingText: "All",
  },
};

export function Header() {
  const pathname = usePathname();
  const config = routeConfigs[pathname] || routeConfigs["/"];
  const headerBgColor = bgColorClass[config.bgColor];

  return (
    <header
      className={`flex flex-col items-left rounded-b-3xl overflow-hidden h-[23vh] max-w-[1100px] w-full ${headerBgColor}`}
    >
      <NavBar bgColor={headerBgColor} />
      <div className="px-10 pt-5 max-w-[1100px] mx-auto w-full">
        <Paragraph text={config.paragraphText} />
        <PageHeading text={config.headingText} />
      </div>
    </header>
  );
}
