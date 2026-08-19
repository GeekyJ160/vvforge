//#region node_modules/.nitro/vite/services/ssr/assets/aura-DM6fUk8W.js
var DIM_KEYS = [
	"creative",
	"fandom",
	"nightlife",
	"cozy",
	"cerebral",
	"kinetic",
	"spiritual",
	"culinary"
];
var DIMENSIONS = {
	creative: {
		label: "Creative",
		hue: 18,
		hint: "Making things"
	},
	fandom: {
		label: "Fandom",
		hue: 318,
		hint: "Worlds you keep"
	},
	nightlife: {
		label: "Night",
		hue: 268,
		hint: "After dark"
	},
	cozy: {
		label: "Cozy",
		hue: 32,
		hint: "Soft rooms"
	},
	cerebral: {
		label: "Cerebral",
		hue: 208,
		hint: "Long arguments"
	},
	kinetic: {
		label: "Kinetic",
		hue: 152,
		hint: "Bodies in motion"
	},
	spiritual: {
		label: "Still",
		hue: 248,
		hint: "Quiet attention"
	},
	culinary: {
		label: "Table",
		hue: 8,
		hint: "Feeding people"
	}
};
var UNIVERSES = [
	{
		id: "anime",
		name: "Anime",
		description: "Late-night arcs, opening themes, and the way a still frame can undo you.",
		boost: {
			fandom: 18,
			creative: 10
		}
	},
	{
		id: "music-makers",
		name: "Music Makers",
		description: "People who finish the song. Bedroom producers, choir kids, warehouse DJs.",
		boost: {
			creative: 16,
			nightlife: 10
		}
	},
	{
		id: "black-creatives",
		name: "Black Creatives",
		description: "A room that already understands the reference. Work, lineage, joy.",
		boost: {
			creative: 14,
			spiritual: 10
		}
	},
	{
		id: "book-nook",
		name: "Book Nook",
		description: "Margins, rereads, and the person who asks what you are in the middle of.",
		boost: {
			cerebral: 16,
			cozy: 10
		}
	},
	{
		id: "night-shift",
		name: "Night Shift",
		description: "Last call, load-out, the walk home when the city finally exhales.",
		boost: {
			nightlife: 18,
			spiritual: 6
		}
	},
	{
		id: "food-lab",
		name: "Food Lab",
		description: "Recipes as love letters. The long table. Butter, chile, patience.",
		boost: {
			culinary: 18,
			cozy: 8
		}
	},
	{
		id: "trail-club",
		name: "Trail Club",
		description: "Dawn loops, dirty shoes, the kind of quiet you have to earn.",
		boost: {
			kinetic: 18,
			spiritual: 8
		}
	},
	{
		id: "game-worlds",
		name: "Game Worlds",
		description: "Bosses, lore dumps, the couch campaign that lasted a year.",
		boost: {
			fandom: 16,
			cerebral: 10
		}
	}
];
var NEIGHBORHOODS = [
	"Terrell",
	"Deep Ellum",
	"Bishop Arts",
	"Lower Greenville",
	"Oak Cliff",
	"Uptown",
	"Design District",
	"Lakewood",
	"White Rock",
	"Downtown Dallas"
];
var INTENTIONS = [
	{
		id: "dating",
		label: "Dating"
	},
	{
		id: "friends",
		label: "Friends"
	},
	{
		id: "community",
		label: "Community"
	},
	{
		id: "something-slow",
		label: "Something slow"
	},
	{
		id: "not-sure",
		label: "Not sure yet"
	}
];
var RELATIONSHIP_STYLES = [
	{
		id: "exclusive",
		label: "Exclusive"
	},
	{
		id: "slow-burn",
		label: "Slow burn"
	},
	{
		id: "open",
		label: "Open"
	},
	{
		id: "figuring-it-out",
		label: "Figuring it out"
	}
];
var VISIBILITY = [
	{
		id: "open",
		label: "Open",
		hint: "Nearby people can find you"
	},
	{
		id: "mutuals",
		label: "Mutuals",
		hint: "Only people you already match with"
	},
	{
		id: "ghost",
		label: "Ghost",
		hint: "Hidden from discover"
	}
];
var VIBE_REACTIONS = [
	{
		id: "soft",
		label: "Soft"
	},
	{
		id: "electric",
		label: "Electric"
	},
	{
		id: "felt-that",
		label: "Felt that"
	},
	{
		id: "same-freq",
		label: "Same freq"
	},
	{
		id: "hold",
		label: "Hold"
	}
];
var FREQUENCY_QUESTIONS = [
	{
		id: "friday",
		prompt: "A good Friday looks like",
		a: {
			label: "A room with a sound system",
			add: {
				nightlife: 22,
				kinetic: 8
			}
		},
		b: {
			label: "A couch and something long",
			add: {
				cozy: 22,
				culinary: 8
			}
		}
	},
	{
		id: "loud",
		prompt: "You get loud about",
		a: {
			label: "A world someone built",
			add: {
				fandom: 22,
				cerebral: 8
			}
		},
		b: {
			label: "A thing you made with your hands",
			add: {
				creative: 22,
				kinetic: 8
			}
		}
	},
	{
		id: "recover",
		prompt: "How you come back to yourself",
		a: {
			label: "Move until the static clears",
			add: {
				kinetic: 22,
				nightlife: 6
			}
		},
		b: {
			label: "Feed people, or be fed",
			add: {
				culinary: 22,
				cozy: 10
			}
		}
	},
	{
		id: "trust",
		prompt: "You trust someone who can",
		a: {
			label: "Hold a silence with you",
			add: {
				spiritual: 22,
				cozy: 8
			}
		},
		b: {
			label: "Argue an idea to the bone",
			add: {
				cerebral: 22,
				creative: 8
			}
		}
	}
];
var EMOJI_MARKS = [
	"✦",
	"◎",
	"△",
	"◇",
	"✶",
	"○",
	"◻",
	"☽"
];
function emptyDimensions(fill = 42) {
	return {
		creative: fill,
		fandom: fill,
		nightlife: fill,
		cozy: fill,
		cerebral: fill,
		kinetic: fill,
		spiritual: fill,
		culinary: fill
	};
}
function clampDim(n) {
	return Math.max(8, Math.min(96, Math.round(n)));
}
function applyBoost(dims, boost) {
	const next = { ...dims };
	for (const key of DIM_KEYS) {
		const add = boost[key];
		if (add) next[key] = clampDim(next[key] + add);
	}
	return next;
}
function rankDimensions(dims) {
	const ranked = [...DIM_KEYS].sort((a, b) => dims[b] - dims[a]);
	return {
		primary: ranked[0],
		secondary: ranked[1]
	};
}
function computeDna(universes, answers) {
	let dims = emptyDimensions(40);
	for (const id of universes) {
		const u = UNIVERSES.find((x) => x.id === id);
		if (u) dims = applyBoost(dims, u.boost);
	}
	for (const q of FREQUENCY_QUESTIONS) {
		const pick = answers[q.id];
		if (pick === "a") dims = applyBoost(dims, q.a.add);
		if (pick === "b") dims = applyBoost(dims, q.b.add);
	}
	const { primary, secondary } = rankDimensions(dims);
	const top = (dims[primary] + dims[secondary]) / 200;
	return {
		dimensions: dims,
		primary,
		secondary,
		saturation: Number((.28 + top * .42).toFixed(2)),
		brightness: Number((.58 + (dims.cozy + dims.spiritual) / 500).toFixed(2))
	};
}
function vibeColor(input) {
	const p = DIMENSIONS[input.primary];
	const s = DIMENSIONS[input.secondary];
	let h = p.hue * .68 + s.hue * .32;
	if (Math.abs(p.hue - s.hue) > 180) h = p.hue;
	const sat = Math.round(36 + input.saturation * 44);
	const l = Math.round(44 + input.brightness * 20);
	return {
		h: Math.round(h),
		s: sat,
		l,
		css: `hsl(${Math.round(h)} ${sat}% ${l}%)`,
		glow: `hsl(${Math.round(h)} ${sat}% ${l}% / 0.42)`,
		soft: `hsl(${Math.round(h)} ${Math.max(18, sat - 16)}% ${Math.min(78, l + 18)}%)`
	};
}
function compatibilityScore(a, b, sharedUniverses, sameHood) {
	let dot = 0;
	let na = 0;
	let nb = 0;
	for (const key of DIM_KEYS) {
		const x = a[key] / 100;
		const y = b[key] / 100;
		dot += x * y;
		na += x * x;
		nb += y * y;
	}
	const score = dot / (Math.sqrt(na) * Math.sqrt(nb) || 1) * 80 + sharedUniverses * 4.5 + (sameHood ? 5 : 0);
	return Math.round(Math.max(26, Math.min(98, score)));
}
function sharedDimensions(a, b) {
	return DIM_KEYS.filter((key) => a[key] >= 58 && b[key] >= 58 && Math.abs(a[key] - b[key]) <= 24);
}
function styleLabel(id) {
	return RELATIONSHIP_STYLES.find((s) => s.id === id)?.label ?? id;
}
function intentionLabel(id) {
	return INTENTIONS.find((s) => s.id === id)?.label ?? id;
}
function universeName(id) {
	return UNIVERSES.find((u) => u.id === id)?.name ?? id;
}
//#endregion
export { vibeColor as _, NEIGHBORHOODS as a, VIBE_REACTIONS as c, computeDna as d, intentionLabel as f, universeName as g, styleLabel as h, INTENTIONS as i, VISIBILITY as l, sharedDimensions as m, EMOJI_MARKS as n, RELATIONSHIP_STYLES as o, rankDimensions as p, FREQUENCY_QUESTIONS as r, UNIVERSES as s, DIMENSIONS as t, compatibilityScore as u };
