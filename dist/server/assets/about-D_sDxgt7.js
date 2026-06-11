import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Globe2, CheckCircle2 } from "lucide-react";
import { N as Navbar } from "./Navbar-87oYkZ4L.js";
import "./router-aTO3_KXZ.js";
import "react";
import "@tanstack/react-query";
const principles = ["One team for digital, technical, creative, gaming, and AI work.", "Built for agents, freelancers, clients, brands, businesses, and agencies.", "Fast delivery with clear communication and practical execution."];
function AboutPage() {
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen w-full bg-[#ededed] p-3 sm:p-4", style: {
    fontFamily: "Inter, sans-serif"
  }, children: /* @__PURE__ */ jsxs("div", { className: "relative min-h-[calc(100vh-24px)] overflow-hidden rounded-2xl bg-[#d9d9d9] sm:min-h-[calc(100vh-32px)] sm:rounded-3xl", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(217,217,217,0.76)),radial-gradient(circle_at_80%_20%,rgba(239,77,35,0.18),transparent_32%)]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("section", { className: "mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_410px] lg:items-center lg:py-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 text-center lg:text-left", children: [
          /* @__PURE__ */ jsx("p", { className: "inline-flex rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-neutral-800 shadow-sm", children: "About Convix" }),
          /* @__PURE__ */ jsx("h1", { className: "mt-5 text-[42px] font-medium leading-[1.02] text-neutral-950 sm:text-[58px] lg:text-[72px]", children: "The digital agency for every online need." }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-neutral-700 sm:text-base lg:mx-0", children: "Convix Software brings CREATEFORME-style delivery into one responsive digital agency: marketing, support, AI workflows, commerce, gaming, content, cloud setup, and custom tasks." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/features", className: "inline-flex items-center gap-3 rounded-full bg-[#0b0f1a] py-2 pl-6 pr-2 text-[14px] text-white transition-transform hover:scale-[1.02] active:scale-[0.98]", children: [
              "View features",
              /* @__PURE__ */ jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-white/15", children: /* @__PURE__ */ jsx(ArrowRight, { size: 16 }) })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-900 shadow-sm transition-colors hover:bg-neutral-100", children: "Contact us" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("aside", { className: "rounded-[28px] bg-white/84 p-5 shadow-xl ring-1 ring-black/5 backdrop-blur sm:p-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#ef4d23] p-5 text-white", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsx("p", { className: "mt-8 text-3xl font-semibold", children: "All-in-one" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/75", children: "Digital delivery" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-neutral-100 p-5 text-neutral-900", children: [
              /* @__PURE__ */ jsx(Globe2, { className: "h-6 w-6 text-[#ef4d23]" }),
              /* @__PURE__ */ jsx("p", { className: "mt-8 text-3xl font-semibold", children: "24/7" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-neutral-600", children: "Online-first" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-5 space-y-3", children: principles.map((item) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-2xl bg-neutral-100 p-4 text-left", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-5 w-5 shrink-0 text-[#ef4d23]" }),
            /* @__PURE__ */ jsx("p", { className: "min-w-0 text-sm leading-6 text-neutral-700", children: item })
          ] }, item)) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  AboutPage as component
};
