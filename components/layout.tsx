
import { twc } from "@/lib/twc";

export const Layout = twc.div((props) => [
  `max-w-8xl w-full flex gap-4 mx-auto px-4`,
]);

export const Logoo = twc.div((props) => [
    `text-xs font-bold`,
  ]);

export const LayoutTitle = twc.h1((props) => [
  `text-4xl font-bold`,
]);

export const LayoutSubtitle = twc.h2((props) => [
  `text-3xl font-semibold`,
]);

export const LayoutSectionTitle = twc.h3((props) => [
  `text-2xl font-medium`,
]);

export const LayoutSubSectionTitle = twc.h4((props) => [
  `text-xl font-medium`,
]);