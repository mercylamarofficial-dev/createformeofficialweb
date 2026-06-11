import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Menu } from "lucide-react";
const url = "/__l5e/assets-v1/3a7cf2ab-255b-4e55-adb1-46b3222df078/convix-logo.png";
const logoAsset = {
  url
};
function Logo({ className = "" }) {
  return /* @__PURE__ */ jsx("img", { src: logoAsset.url, alt: "Convix Software", className });
}
const navItems = [
  { label: "Home", dot: true, to: "/" },
  { label: "Features", to: "/features" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-4 sm:pt-6 px-3 sm:px-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-full shadow-sm border border-neutral-200 pl-2 pr-2 py-2 w-full max-w-[760px] relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center pl-1", children: /* @__PURE__ */ jsx(Logo, { className: "w-12 h-12 sm:w-14 sm:h-14" }) }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex min-w-0 items-center justify-center gap-6 text-[14px]", children: navItems.map((it) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: it.to,
        activeOptions: { exact: it.to === "/" },
        activeProps: { className: "text-[#ef4d23]" },
        inactiveProps: { className: "text-neutral-800" },
        className: "inline-flex items-center gap-1.5 transition-colors hover:text-[#ef4d23]",
        children: [
          "dot" in it && it.dot && /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-block rounded-full bg-black",
              style: { width: 1.5, height: 1.5 }
            }
          ),
          it.label
        ]
      },
      it.label
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/contact",
          className: "inline-flex items-center gap-2 bg-[#ef4d23] text-white rounded-full pl-3 sm:pl-4 pr-1 py-1 text-[12px] sm:text-[14px] transition-transform hover:scale-[1.02] active:scale-[0.98]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: "Get Started" }),
            /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20", children: /* @__PURE__ */ jsx(ChevronRight, { size: 14 }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpen((v) => !v),
          className: "md:hidden inline-flex shrink-0 p-2 text-neutral-700",
          "aria-label": "Menu",
          "aria-expanded": open,
          children: /* @__PURE__ */ jsx(Menu, { size: 20 })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl shadow-lg border border-neutral-200 p-3 z-20", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col", children: navItems.map((it) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: it.to,
        activeOptions: { exact: it.to === "/" },
        onClick: () => setOpen(false),
        className: "flex items-center gap-2 px-2 py-2 text-[14px] text-neutral-800 transition-colors hover:text-[#ef4d23]",
        children: [
          "dot" in it && it.dot && /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-block rounded-full bg-black",
              style: { width: 1.5, height: 1.5 }
            }
          ),
          it.label
        ]
      }
    ) }, it.label)) }) })
  ] }) });
}
export {
  Navbar as N
};
