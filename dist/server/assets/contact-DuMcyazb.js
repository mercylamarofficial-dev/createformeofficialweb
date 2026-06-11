import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState, useMemo } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { N as Navbar } from "./Navbar-87oYkZ4L.js";
import "./router-aTO3_KXZ.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
const projectTypes = ["AI automation", "Social media", "Online store", "Gaming support", "Cloud setup", "Custom task"];
function ContactPage() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("mgobzqlg");
  const summary = useMemo(() => {
    if (!name && !message) return "Tell us what you need and we’ll shape the next step.";
    return `${name || "Your project"} • ${projectType}${message ? ` • ${message.slice(0, 42)}${message.length > 42 ? "…" : ""}` : ""}`;
  }, [message, name, projectType]);
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen w-full bg-[#ededed] p-3 sm:p-4", style: {
    fontFamily: "Inter, sans-serif"
  }, children: /* @__PURE__ */ jsxs("div", { className: "relative min-h-[calc(100vh-24px)] overflow-hidden rounded-2xl bg-[#d9d9d9] sm:min-h-[calc(100vh-32px)] sm:rounded-3xl", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,77,35,0.18),transparent_32%),linear-gradient(140deg,rgba(255,255,255,0.82),rgba(217,217,217,0.72))]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("section", { className: "mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] lg:items-center lg:py-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 text-center lg:text-left", children: [
          /* @__PURE__ */ jsx("p", { className: "inline-flex rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-neutral-800 shadow-sm", children: "Contact" }),
          /* @__PURE__ */ jsx("h1", { className: "mt-5 text-[42px] font-medium leading-[1.02] text-neutral-950 sm:text-[58px] lg:text-[72px]", children: "Start with one clear message." }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-neutral-700 sm:text-base lg:mx-0", children: "Share the digital task, campaign, setup, automation, content request, store, or gaming support you need. Convix Software will take it from there." }),
          /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-7 grid max-w-md gap-3 text-left lg:mx-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-2xl bg-white/80 p-4 shadow-sm", children: [
              /* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-5 w-5 text-[#ef4d23]" }),
              /* @__PURE__ */ jsx("p", { className: "min-w-0 text-sm text-neutral-700", children: "Use the form to create a project brief preview instantly." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-2xl bg-white/80 p-4 shadow-sm", children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "mt-0.5 h-5 w-5 text-[#ef4d23]" }),
              /* @__PURE__ */ jsx("p", { className: "min-w-0 text-sm text-neutral-700", children: "Pick a service type so the request starts in the right direction." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "rounded-[28px] bg-white/86 p-5 shadow-xl ring-1 ring-black/5 backdrop-blur sm:p-7", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-neutral-900", htmlFor: "name", children: "Name" }),
            /* @__PURE__ */ jsx("input", { id: "name", name: "name", value: name, onChange: (event) => setName(event.target.value), maxLength: 100, className: "mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#ef4d23]", placeholder: "Your name or business" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-neutral-900", htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx("input", { id: "email", name: "email", type: "email", required: true, maxLength: 255, className: "mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#ef4d23]", placeholder: "you@company.com" }),
            /* @__PURE__ */ jsx(ValidationError, { field: "email", errors: state.errors, className: "mt-1 text-xs text-red-600" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-neutral-900", children: "Project type" }),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "projectType", value: projectType }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3", children: projectTypes.map((type) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setProjectType(type), className: `rounded-2xl px-3 py-3 text-left text-xs font-medium transition-all ${projectType === type ? "bg-[#ef4d23] text-white shadow-md" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`, children: type }, type)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-neutral-900", htmlFor: "message", children: "What do you need?" }),
            /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", required: true, value: message, onChange: (event) => setMessage(event.target.value), maxLength: 1e3, rows: 5, className: "mt-2 w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#ef4d23]", placeholder: "Describe the task, platform, deadline, or goal." }),
            /* @__PURE__ */ jsx(ValidationError, { field: "message", errors: state.errors, className: "mt-1 text-xs text-red-600" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-5 rounded-2xl bg-neutral-100 p-4 text-sm leading-6 text-neutral-700", children: state.succeeded ? "Thanks — your message has been sent." : summary }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: state.submitting, className: "mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0b0f1a] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60", children: state.submitting ? "Sending…" : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Send request ",
            /* @__PURE__ */ jsx(Send, { size: 16 })
          ] }) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ContactPage as component
};
