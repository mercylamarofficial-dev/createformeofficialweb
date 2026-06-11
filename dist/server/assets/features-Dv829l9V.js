import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Megaphone, Bot, Store, Wand2, Gamepad2, Cloud, ArrowRight } from "lucide-react";
import { useState } from "react";
import { N as Navbar } from "./Navbar-87oYkZ4L.js";
import "./router-aTO3_KXZ.js";
import "@tanstack/react-query";
const services = [{
  label: "Growth",
  icon: Megaphone,
  title: "Social media, PR, and brand momentum",
  text: "Campaign planning, content calendars, creator outreach, brand positioning, and daily channel support."
}, {
  label: "AI Workflows",
  icon: Bot,
  title: "Automation and AI assistants for real work",
  text: "AI chatbots, content generation flows, admin automation, and workflow integrations tailored to your operation."
}, {
  label: "Commerce",
  icon: Store,
  title: "Stores, marketplaces, and digital delivery",
  text: "Online stores, marketplace management, digital voucher delivery, file hosting, and support systems."
}, {
  label: "Creative",
  icon: Wand2,
  title: "Digital content made and managed",
  text: "Graphics, edits, launch assets, content systems, and branded digital experiences for clients and teams."
}, {
  label: "Gaming",
  icon: Gamepad2,
  title: "Game accounts, vouchers, and platform help",
  text: "Support for Roblox, Minecraft, Steam, PlayStation, Xbox, Discord Nitro, and gaming-related digital tasks."
}, {
  label: "Cloud",
  icon: Cloud,
  title: "Cloud, email, VPN, and technical setup",
  text: "Practical setup guidance for cloud accounts, email systems, VPNs, integrations, and custom technical requests."
}];
function FeaturesPage() {
  const [active, setActive] = useState(0);
  const selected = services[active];
  const Icon = selected.icon;
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen w-full bg-[#ededed] p-3 sm:p-4", style: {
    fontFamily: "Inter, sans-serif"
  }, children: /* @__PURE__ */ jsxs("div", { className: "relative min-h-[calc(100vh-24px)] overflow-hidden rounded-2xl bg-[#d9d9d9] sm:min-h-[calc(100vh-32px)] sm:rounded-3xl", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,77,35,0.20),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.74),rgba(217,217,217,0.76))]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("section", { className: "mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] lg:items-center lg:py-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 text-center lg:text-left", children: [
          /* @__PURE__ */ jsx("p", { className: "inline-flex rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-neutral-800 shadow-sm", children: "Features" }),
          /* @__PURE__ */ jsx("h1", { className: "mt-5 text-[42px] font-medium leading-[1.02] text-neutral-950 sm:text-[58px] lg:text-[72px]", children: "Digital services that move with your work." }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-neutral-700 sm:text-base lg:mx-0", children: "Choose what you need, from PR and content to AI systems, gaming support, cloud setup, online stores, and custom digital tasks." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-7 inline-flex items-center gap-3 rounded-full bg-[#0b0f1a] py-2 pl-6 pr-2 text-[14px] text-white transition-transform hover:scale-[1.02] active:scale-[0.98]", children: [
            "Start a project",
            /* @__PURE__ */ jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-white/15", children: /* @__PURE__ */ jsx(ArrowRight, { size: 16 }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] bg-white/82 p-3 shadow-xl ring-1 ring-black/5 backdrop-blur", children: [
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3", children: services.map((service, index) => {
            const ServiceIcon = service.icon;
            const isActive = index === active;
            return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setActive(index), className: `flex min-h-24 flex-col items-start justify-between rounded-2xl p-4 text-left transition-all ${isActive ? "bg-[#ef4d23] text-white shadow-lg" : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"}`, children: [
              /* @__PURE__ */ jsx(ServiceIcon, { size: 20 }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: service.label })
            ] }, service.label);
          }) }),
          /* @__PURE__ */ jsxs("article", { className: "mt-3 rounded-2xl bg-[#0b0f1a] p-5 text-white sm:p-7", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-7 w-7 text-[#ef4d23]" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-5 text-2xl font-semibold leading-tight sm:text-3xl", children: selected.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-6 text-white/72 sm:text-base", children: selected.text })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  FeaturesPage as component
};
