# Sådan gør du AutismGoTo til en rigtig app på telefonen

Du har nu en hel app-pakke i mappen **autismgoto-app**. Den indeholder:

- `index.html` – selve appen
- `manifest.webmanifest` – app-navn, farver og ikon
- `sw.js` – sørger for, at appen kan åbnes uden internet
- `icon-192.png`, `icon-512.png`, `icon-180.png` – app-ikonet

For at den kan installeres som en rigtig app (med eget ikon og fuld skærm),
skal alle filerne ligge **online på samme webadresse**. En løs fil på telefonen
er ikke nok – så virker offline-delen ikke.

Det er gratis. Her er den nemmeste vej, og du har prøvet den før med zoo-turen.

---

## Trin 1 – Læg filerne på GitHub

1. Gå ind på github.com og log ind.
2. Tryk på det grønne **New** (nyt repository).
3. Giv det et navn, fx `autismgoto-app`. Sæt det til **Public**. Tryk **Create**.
4. Tryk **uploading an existing file**.
5. Træk **alle 6 filer** fra mappen `autismgoto-app` ind i vinduet.
   (Ikke selve mappen – men de 6 filer indeni.)
6. Tryk **Commit changes**.

## Trin 2 – Udgiv med Vercel

1. Gå ind på vercel.com og log ind med din GitHub-konto.
2. Tryk **Add New… → Project**.
3. Vælg dit `autismgoto-app` repository og tryk **Import**.
4. Rør ikke ved indstillingerne. Tryk bare **Deploy**.
5. Vent et øjeblik. Du får nu en webadresse, fx
   `https://autismgoto-app.vercel.app`

Den adresse er din app. Del den med kolleger og forældre.

## Trin 3 – Læg appen på hjemmeskærmen

**På iPhone (Safari):**
1. Åbn adressen i Safari.
2. Tryk på del-knappen (firkant med pil op).
3. Vælg **Føj til hjemmeskærm**.
4. Tryk **Tilføj**. Nu ligger appen med eget ikon.

**På Android (Chrome):**
1. Åbn adressen i Chrome.
2. Tryk på de tre prikker øverst til højre.
3. Vælg **Føj til startskærm** / **Installér app**.
4. Bekræft. Nu ligger appen med eget ikon.

---

## Godt at vide

- **Guiderne (PDF) og fotos** hentes fra autismgoto.com og kræver internet.
  Selve appen og de fotos, du allerede har set, gemmes og kan åbnes offline.
- **Vil du opdatere appen senere?** Upload bare en ny `index.html` til GitHub.
  Vercel opdaterer automatisk. Brugerne får den nye version næste gang, de åbner.
- **Ikon eller navn skal ændres?** Sig til, så laver jeg nye filer til dig.
