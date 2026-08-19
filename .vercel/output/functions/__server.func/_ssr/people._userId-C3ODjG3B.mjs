import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as swipe, o as getPerson } from "./aura-api-HpsRJmWM.mjs";
import { r as Route$2 } from "./router-dlWnbCYe.mjs";
import { t as Button } from "./button-C3Y8m_s4.mjs";
import { t as ProfileView } from "./profile-view-B3mHkzy4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/people._userId-C3ODjG3B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PersonPage() {
	const { userId } = Route$2.useParams();
	const navigate = useNavigate();
	const [person, setPerson] = (0, import_react.useState)(void 0);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		getPerson({ data: userId }).then(setPerson).catch(() => setPerson(null));
	}, [userId]);
	if (person === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-5 h-96 animate-pulse rounded-xl bg-elevated" });
	if (!person) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl",
			children: "This person is ghosting the room"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/discover",
			className: "mt-4 inline-block text-sm text-muted underline",
			children: "Discover"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pt-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mb-3 text-xs uppercase tracking-[0.16em] text-muted",
				onClick: () => window.history.back(),
				children: "Back"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileView, { person }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					disabled: busy,
					onClick: async () => {
						setBusy(true);
						try {
							const result = await swipe({ data: {
								toUserId: person.userId,
								action: "spark"
							} });
							if (result.matched) await navigate({
								to: "/chat/$chatId",
								params: { chatId: result.chatId }
							});
						} finally {
							setBusy(false);
						}
					},
					children: "Spark"
				})
			})
		]
	});
}
//#endregion
export { PersonPage as component };
