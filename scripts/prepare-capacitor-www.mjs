#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";
const root = process.cwd();
const srcStatic = join(root, ".vercel", "output", "static");
const publicDir = join(root, "public");
const www = join(root, "www");
const shell = join(root, "scripts", "capacitor-index.html");
mkdirSync(www, { recursive: true });
if (existsSync(srcStatic)) { cpSync(srcStatic, www, { recursive: true }); console.log("copied static"); } else if (existsSync(publicDir)) { cpSync(publicDir, www, { recursive: true }); console.log("copied public"); }
if (existsSync(publicDir)) { for (const name of readdirSync(publicDir)) { const from = join(publicDir, name); const to = join(www, name); if (!existsSync(to)) cpSync(from, to, { recursive: true }); } }
const indexPath = join(www, "index.html");
if (!existsSync(indexPath) && existsSync(shell)) { copyFileSync(shell, indexPath); console.log("wrote index"); }
console.log("ready", www);
