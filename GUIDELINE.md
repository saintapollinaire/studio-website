# GUIDELINE — Site du studio

Ce document fait foi. Claude et Grok le lisent avant toute action. En cas de conflit entre une demande et ce document, ce document l'emporte, sauf instruction directe d'Athos dans une issue ou une PR.

Seul Athos modifie ce fichier. Pour proposer un changement, ouvrir une issue.

Les valeurs marquées `PROVISOIRE` sont des choix par défaut, en attendant la décision d'Athos. On construit avec. Pour qu'un changement ultérieur coûte peu :

- couleurs, typographies, espacements et rayons sont définis **une seule fois** dans `src/styles/tokens.css` et nulle part ailleurs ;
- le nom du studio passe par la variable `STUDIO_NAME` ;
- aucun composant ne contient de valeur visuelle en dur.

Changer une valeur `PROVISOIRE` doit tenir dans un seul fichier. Seuls le nom, le logo, les textes de positionnement et les tarifs restent bloquants (section 8).

---

## 1. Le projet

- **Objet** : site vitrine d'un studio de création de sites web haut de gamme, à la fois technique et visuel.
- **Le site sert de démonstration** : un prospect doit juger le savoir-faire du studio sur ce site lui-même. Chaque détail compte.
- **Langues** : français et anglais, avec une parité complète. Aucune page ni aucun texte ne doit exister dans une seule langue.
- **Nom du studio** : `[À COMPLÉTER]`. Pistes : l'esprit « Entraxe » (vocabulaire d'architecte) ou le format « Atelier … ». En attendant, utiliser `STUDIO_NAME` comme variable unique, jamais un nom en dur.

## 2. Direction artistique

- **Ton général** (`PROVISOIRE`) : sobre et architectural. Grille stricte, beaucoup de blanc, hiérarchie portée par la typographie plutôt que par la couleur. Précision de plan d'architecte plutôt qu'effet d'agence.
- **Références admirées** : à fournir par Athos. En attendant, viser la rigueur des sites de cabinets d'architecture et de studios de design éditorial.
- **À éviter absolument** : templates génériques, dégradés violets, illustrations 3D de stock, sections « 3 icônes + 3 colonnes », animations gratuites, emojis.
- **Typographies** (`PROVISOIRE`) : Instrument Serif pour les titres, Instrument Sans pour le texte. Licence OFL, auto-hébergées, deux familles au maximum.
- **Palette** (`PROVISOIRE`) :

  | Rôle | Valeur |
  |---|---|
  | Fond | `#F4F2EE` (blanc cassé) |
  | Texte | `#141414` |
  | Texte secondaire | `#6B6B6B` |
  | Filets et bordures | `#D9D6CF` |
  | Accent (rare : liens, état actif) | `#B5502E` (terre cuite) |

  Pas de mode sombre pour l'instant.
- **Mouvement** : animations discrètes et utiles. Respecter `prefers-reduced-motion`.
- **Images** (`PROVISOIRE`) : typographie et mise en page seules, sans photo de stock. Des emplacements sont prévus pour de futures réalisations clients.

Toute remarque visuelle d'un agent doit s'appuyer sur cette section ou sur un principe nommé (hiérarchie, contraste, rythme, alignement). « Je préfère » ne suffit pas.

## 3. Contenu et structure

Pages prévues, à confirmer par Athos :

1. Accueil
2. Réalisations / études de cas
3. Méthode
4. À propos
5. Contact
6. Mentions légales

Les textes de positionnement, les tarifs et les engagements commerciaux sont rédigés ou validés par Athos. Les agents peuvent proposer des brouillons, signalés `BROUILLON` dans la PR.

## 4. Technique

- **Stack** (`PROVISOIRE`) : Astro, CSS natif (pas de framework CSS), site statique. Hébergement à décider par Athos au moment de la mise en ligne.
- **i18n** : routes `/fr/` et `/en/`, textes dans des fichiers de traduction, aucune chaîne en dur dans les composants.
- **Code et commits en anglais**, échanges en français.
- **Pas de dépendance** ajoutée sans justification écrite dans la PR.

## 5. Critères de qualité

Une PR n'est pas fusionnable si l'un de ces points échoue :

| Critère | Seuil |
|---|---|
| Lighthouse Performance (mobile) | ≥ 95 |
| Lighthouse Accessibilité | 100 |
| Lighthouse Bonnes pratiques / SEO | ≥ 95 |
| LCP mobile | < 2 s |
| Poids d'une page (hors première visite) | < 500 Ko |
| Contrastes | WCAG AA minimum |
| Navigation clavier | Complète, focus visible |
| Rendu | Testé à 375 px, 768 px, 1440 px |
| FR/EN | Les deux versions complètes |

## 6. Rôles

| Qui | Rôle |
|---|---|
| **Athos** | Arbitre. Décide de la direction artistique, des textes, du nom, des tarifs, de la mise en ligne. Fusionne les PR. |
| **Claude** | Construit : structure, composants, intégration, i18n, corrections demandées en revue. |
| **Grok** | Relit et teste : revue de chaque PR, audit performance et accessibilité, propositions d'amélioration en issues. |

## 7. Règles de collaboration

1. **Une PR par fonctionnalité**, avec une description claire : objectif, changements, points à vérifier.
2. **Toute PR de Claude est relue par Grok** avant d'être proposée à Athos.
3. **Revues classées** en « Bloquant » et « Suggestion ». Chaque remarque cite le fichier, la ligne et une correction possible.
4. **Déclenchement** : mentionner `@claude` pour lancer Claude. Sans mention, Claude n'est pas déclenché.
5. **Validation** : Grok écrit « Validé par Grok » quand la PR est conforme. Personne d'autre qu'Athos ne fusionne dans `main`.
6. **Désaccord** : 3 allers-retours maximum sur une même PR. Ensuite, s'arrêter et écrire `@saintapollinaire arbitrage nécessaire` avec un résumé du désaccord en 3 lignes.
7. **Journal** : chaque PR ouverte, revue ou fusionnée donne lieu à une ligne dans `JOURNAL.md`.

## 8. Ce qui revient toujours à Athos

Aucun agent ne décide seul de :

- le nom du studio, le logo, l'identité visuelle ;
- les textes de positionnement et les tarifs ;
- l'achat d'un domaine, d'un service ou de toute dépense ;
- la mise en ligne ou le déploiement en production ;
- la modification de ce fichier.

## 9. Limites de fonctionnement

- **Budget** (`PROVISOIRE`) : 20 déclenchements `@claude` par jour au maximum. Une fois la limite atteinte, s'arrêter et le noter dans le journal.
- **Pas de travail en boucle** : si une tâche n'avance pas après 2 tentatives, ouvrir une issue et passer à autre chose.
- **Sécurité** : aucun secret, clé ou mot de passe dans le code ni dans les commentaires.
