# Site du Karaté Shotokai Lacroix-Falgarde

**Live site:** [https://karate-lacroix-falgarde.fr/](https://karate-lacroix-falgarde.fr/)

Site vitrine du club, construit avec [Astro](https://astro.build) et déployé sur Netlify. Le contenu (articles techniques, événements) est éditable via une interface d'administration sans toucher au code.

## Stack technique

- **[Astro](https://astro.build)** — génère un site 100% statique (`output: 'static'`), pas de serveur applicatif.
- **[Decap CMS](https://decapcms.org/)** (ex-Netlify CMS) — interface d'admin accessible sur `/admin`, qui écrit directement des fichiers Markdown dans le repo Git via commits automatiques.
- **Netlify** — hébergement, build (`npm run build`) et authentification de l'admin (Netlify Identity + Git Gateway).

## Structure du projet

```
public/
  admin/
    index.html      # charge Decap CMS (via unpkg)
    config.yml       # config CMS utilisée en prod (backend: git-gateway)
  config.txt          # config CMS alternative (backend GitHub OAuth), non utilisée par défaut
  images/              # assets statiques (logos, photos...)

src/
  components/          # sections de la page d'accueil (Hero, APropos, Karate, Iaijutsu, Horaires, Evenements, Contact, Header, Footer)
  content/
    techniques/         # articles techniques du dojo (Markdown)
    evenements/          # événements du club (Markdown)
  content.config.ts     # schémas de validation des collections (title, date, image, tag...)
  pages/
    index.astro          # page d'accueil, assemble les composants
    techniques.astro      # liste des articles techniques
    techniques/[slug].astro # page de détail d'un article technique
  styles/global.css      # styles globaux
```

## Comment fonctionne le contenu

Les articles techniques et les événements sont des fichiers Markdown dans `src/content/`, avec un frontmatter défini par `src/content.config.ts` :

- **techniques** : `title`, `date`, `image` (optionnelle)
- **evenements** : `title`, `tag`, `date`, `image` (optionnelle)

Ces fichiers ne sont normalement **pas édités à la main** : le club les gère via l'interface `/admin` (Decap CMS), qui pousse un commit à chaque création/modification/suppression. Astro régénère ensuite le site au prochain build.

## Développement local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:4321`.

Autres commandes utiles :

| Commande          | Action                                      |
| ----------------- | -------------------------------------------- |
| `npm run build`   | Build de production dans `./dist/`           |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run astro`   | Accès direct à la CLI Astro                  |

## Déploiement

Le déploiement est géré par Netlify (`netlify.toml`) : chaque push sur `main` déclenche `npm run build` et publie `dist/`. Un `sitemap.xml` est généré automatiquement (`@astrojs/sitemap`).

## Documentation

- [Documentation Astro](https://docs.astro.build)
- [Documentation Decap CMS](https://decapcms.org/docs/intro/)
