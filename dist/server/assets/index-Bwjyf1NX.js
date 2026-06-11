import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import "./router-aTO3_KXZ.js";
import { N as Navbar } from "./Navbar-87oYkZ4L.js";
import "@tanstack/react-query";
const rotatingWords = [
  "Agents",
  "Freelancers",
  "Clients",
  "Brands",
  "Businesses",
  "Agencies",
  "ALL"
];
function App() {
  const [idx, setIdx] = useState(0);
  const [selectedAudience, setSelectedAudience] = useState(null);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotatingWords.length), 1800);
    return () => clearInterval(t);
  }, []);
  const activeWord = selectedAudience ?? rotatingWords[idx];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "min-h-screen w-full bg-[#ededed] p-3 sm:p-4",
      style: { fontFamily: "Inter, sans-serif" },
      children: /* @__PURE__ */ jsxs("div", { className: "relative min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] overflow-hidden bg-[#d9d9d9] rounded-2xl sm:rounded-3xl", children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            className: "absolute inset-0 w-full h-full object-cover pointer-events-none",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            preload: "auto",
            disableRemotePlayback: true,
            ...{ "webkit-playsinline": "true", "x5-playsinline": "true" },
            poster: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=60",
            src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/10" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)]", children: [
          /* @__PURE__ */ jsx(Navbar, {}),
          /* @__PURE__ */ jsxs("section", { className: "mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-8 pb-8 text-center sm:px-6 sm:pt-14 sm:pb-12 lg:pt-16", children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-[13px]", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "inline-block w-2 h-2 rounded-full",
                  style: { backgroundColor: "#ef4d23" }
                }
              ),
              "CREATEFORME"
            ] }),
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "mt-5 sm:mt-6 max-w-5xl text-neutral-900",
                style: {
                  fontSize: "clamp(38px, 7.2vw, 80px)",
                  lineHeight: 1.05,
                  fontWeight: 500
                },
                children: [
                  "The Digital",
                  " ",
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "'Instrument Serif', serif",
                        fontStyle: "italic",
                        fontWeight: 400
                      },
                      children: "Agency"
                    }
                  ),
                  /* @__PURE__ */ jsx("br", {}),
                  "for",
                  " ",
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "'Instrument Serif', serif",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "#ef4d23",
                        display: "inline-block",
                        transition: "opacity 300ms ease"
                      },
                      children: activeWord
                    },
                    activeWord
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "mt-4 max-w-2xl px-2 text-neutral-700 sm:mt-6",
                style: { fontSize: "clamp(14px, 2.2vw, 17px)", lineHeight: 1.65 },
                children: "The All-In-One Digital Agency Powering the Future of Businesses"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex w-full max-w-3xl flex-wrap justify-center gap-2 sm:mt-8", children: rotatingWords.map((word) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setSelectedAudience(word),
                className: `rounded-full px-4 py-2 text-[13px] font-medium shadow-sm transition-all ${activeWord === word ? "bg-[#ef4d23] text-white" : "bg-white/88 text-neutral-800 hover:bg-white hover:text-[#ef4d23]"}`,
                children: word
              },
              word
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/contact",
                  className: "inline-flex items-center gap-3 bg-[#0b0f1a] text-white rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 text-[14px] transition-transform hover:scale-[1.02] active:scale-[0.98]",
                  children: [
                    "Get Started",
                    /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15", children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/features",
                  className: "inline-flex rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-900 shadow-sm transition-colors hover:bg-neutral-100",
                  children: "See Features"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 grid w-full max-w-4xl grid-cols-1 gap-3 text-left sm:grid-cols-3 lg:mt-10", children: [
              ["AI", "Chatbots, content generation, automation, assistants."],
              ["Digital", "Stores, vouchers, marketplace support, file hosting."],
              ["Growth", "Social media, PR support, brands, clients, agencies."]
            ].map(([label, text]) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-white/78 p-4 shadow-sm backdrop-blur transition-transform hover:-translate-y-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[#ef4d23]", children: label }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-neutral-700", children: text })
            ] }, label)) })
          ] })
        ] })
      ] })
    }
  );
}
const SplitComponent = App;
export {
  SplitComponent as component
};
