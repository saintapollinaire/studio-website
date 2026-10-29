# studio-website

Site du studio, en français et en anglais.

- Règles du projet : [GUIDELINE.md](GUIDELINE.md)
- État d'avancement : [JOURNAL.md](JOURNAL.md)
- Consignes pour Claude : [CLAUDE.md](CLAUDE.md)

## Lancer le site en local

```sh
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:4321 et redirige vers `/fr/`.

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| Couleurs, typographies, espacements | `src/styles/tokens.css` |
| Nom du studio | `src/config/site.ts` |
| Textes FR / EN | `src/i18n/fr.ts`, `src/i18n/en.ts` |
| Pages et adresses | `src/i18n/index.ts` |
