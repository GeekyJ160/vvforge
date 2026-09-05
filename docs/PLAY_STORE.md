# Vicinity Vibe — Play Store / Capacitor Android

- **Bundled web assets** (local `www/`) — not a remote grok.me WebView.
- `appId`: `com.geekyj160.vicinityvibe`
- `appName`: `Vicinity Vibe`

Config: `capacitor.config.ts` (`webDir`: `www/`).

## Build and sync

```bash
npm install
npm run build
npm run cap:prepare
npx cap sync android
npx cap open android
```

In Android Studio use Build Bundle / APK (Assemble).

## Scripts

- `cap:prepare` — `scripts/prepare-capacitor-www.mjs`
- `cap:sync` — prepare then `npx cap sync`
- `cap:android` — prepare, sync, open Android Studio

## Permissions

AndroidManifest includes INTERNET only — no mic/location yet.

## Play Console checklist

- [ ] Store icon and feature graphic
- [ ] Screenshots (phone and tablet)
- [ ] Data safety form (mic, media, account)
- [ ] Privacy policy URL (`/privacy`)
- [ ] Terms URL (`/terms`)
- [ ] Content rating / audience
- [ ] Release signing setup
- [ ] versionCode / versionName
- [ ] Test Writer and Studio on device

## iOS later

`npx cap add ios` on a Mac with Xcode. Not in this PR.

## Notes

- Android SDK may be missing in this environment; commit config + android/ when generated.
- `cap:prepare` copies `.vercel/output/static` into `www/`.
- WebView loads local assets, not grok.me. Auth/API may still use a hosted backend.

## Vicinity Vibe store notes

- Audience intent: **18+** dating/social.
- Data safety: account, profile UGC, chat — **not** GPS continuous tracking or payments (not in app today).
- Remaining blockers: account deletion, block/report, production/off-platform auth, signing, screenshots.
- Neighborhood is user-selected text — do not declare ACCESS_FINE_LOCATION until GPS is actually used.
- iOS: add later via same Capacitor project (`npx cap add ios` on Mac).
