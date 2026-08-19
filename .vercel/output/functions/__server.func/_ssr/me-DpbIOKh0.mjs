import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as signOut } from "./client-sGid3STf.mjs";
import { t as useCurrentUser } from "./use-current-user-DZ7NZd4-.mjs";
import { a as getMyProfile, g as updateSafety } from "./aura-api-HpsRJmWM.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { l as VISIBILITY } from "./aura-DM6fUk8W.mjs";
import { t as Button } from "./button-C3Y8m_s4.mjs";
import { t as Input } from "./input-BF3jaAE4.mjs";
import { t as ProfileView } from "./profile-view-B3mHkzy4.mjs";
import { t as Label } from "./label-DRUGnxpt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/me-DpbIOKh0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MePage() {
	const user = useCurrentUser();
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [visibility, setVisibility] = (0, import_react.useState)("open");
	const [trusted, setTrusted] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		getMyProfile().then((p) => {
			if (!p) return;
			setProfile(p);
			setVisibility(p.visibility);
			setTrusted(p.trustedContact);
		});
	}, []);
	if (!profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-5 h-96 animate-pulse rounded-xl bg-elevated" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pt-4 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted",
					children: "You"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium",
					children: "Your signal"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/onboard",
					className: "text-sm text-muted underline-offset-4 hover:underline",
					children: "Edit"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileView, { person: profile }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-border bg-surface px-4 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Safety"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Neighborhood only. Never a pin. Ghost whenever you need the room to go dark."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-2",
						children: VISIBILITY.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setVisibility(v.id),
							className: cn("rounded-lg border px-3 py-2.5 text-left", visibility === v.id ? "border-border-strong bg-elevated" : "border-border"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: v.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: v.hint
							})]
						}, v.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Trusted contact" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: trusted,
							onChange: (e) => setTrusted(e.target.value),
							placeholder: "Someone who would pick up"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						variant: "outline",
						onClick: async () => {
							const next = await updateSafety({ data: {
								visibility,
								trustedContact: trusted
							} });
							if (next) setProfile(next);
							setSaved(true);
							window.setTimeout(() => setSaved(false), 1600);
						},
						children: saved ? "Saved" : "Save safety"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-between text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: user?.primaryEmail }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "underline-offset-4 hover:underline",
					onClick: () => void signOut("/"),
					children: "Sign out"
				})]
			})
		]
	});
}
//#endregion
export { MePage as component };
