# PORTFOLIO V2 — MANITRA MANDRESY

Version V2 avec un design dashboard moderne inspiré des interfaces POS/SaaS : cartes, données, micro-interactions, vert/noir/blanc et responsive.

## Contenu

- `index.html` : toutes les sections
- `style.css` : design + responsive + animations
- `script.js` : menu mobile, scroll progress, animations, formulaire mail
- `assets/profil.jpg` : photo
- `assets/CV_MANITRA_MANDRESY.pdf` : CV PDF basé sur le document image fourni
- `assets/projects/*.svg` : aperçus de projets

## Important pour les captures de projets

Les trois SVG de `assets/projects/` sont des **aperçus de présentation**, pas des captures réelles de tes applications. Remplace-les par les vraies captures lorsque tu les as, en gardant les mêmes noms de fichiers si possible.

## Tester sur Ubuntu

```bash
cd Portfolio_MANITRA_MANDRESY_V2
python3 -m http.server 8000
```

Puis :
`http://localhost:8000`

## Héberger gratuitement — GitHub Pages

1. Crée un dépôt GitHub, par exemple `portfolio-manitra`.
2. Envoie tout le contenu du dossier dans la branche `main`.
3. `Settings` → `Pages`.
4. `Deploy from a branch`.
5. Branche `main`, dossier `/ (root)`.
6. Enregistre.
7. Ton site sera accessible depuis l'adresse GitHub Pages fournie.

## Héberger avec Netlify

1. Crée un compte Netlify.
2. Utilise le déploiement manuel.
3. Dépose le dossier du site.
4. Netlify fournit une adresse publique.

## Formulaire de contact

Le formulaire n'utilise pas de serveur : il prépare un email avec `mailto:`. Pour un formulaire qui enregistre les messages dans une base de données, il faudra ensuite ajouter un backend PHP/MySQL ou un service de formulaire.

## WhatsApp

Le bouton utilise :
`https://wa.me/261385022255`

Si ton numéro change, modifie cette valeur dans `index.html`.

## Modifier le CV

Le PDF inclus est une version image du CV fourni. Si tu as le vrai fichier PDF/DOCX du CV, remplace :
`assets/CV_MANITRA_MANDRESY.pdf`
par ton vrai CV en conservant ce nom.


## Voir le portfolio directement sur ton téléphone

### Méthode 1 — le plus simple
Envoie le dossier/ZIP sur ton téléphone, décompresse-le et ouvre `index.html` avec Chrome ou un navigateur qui permet d'ouvrir des fichiers HTML locaux.

### Méthode 2 — téléphone et PC sur le même Wi-Fi
Sur Ubuntu, dans le dossier du portfolio :

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Trouve l'adresse IP du PC :

```bash
hostname -I
```

Par exemple, si Ubuntu affiche `192.168.1.20`, ouvre sur le téléphone :

```text
http://192.168.1.20:8000
```

Le PC et le téléphone doivent être connectés au même Wi-Fi.

Si Ubuntu bloque le port :

```bash
sudo ufw allow 8000/tcp
```

Puis recharge la page sur le téléphone.

### Méthode 3 — mettre le site sur Internet
GitHub Pages ou Netlify permet d'ouvrir le portfolio depuis n'importe quel téléphone avec une vraie adresse web.

## V3 — Protection anti-inspection

La V3 ajoute une couche de dissuasion côté navigateur :
- blocage du clic droit ;
- blocage de raccourcis courants (F12, Ctrl+U, Ctrl+Shift+I/J/C/K, etc.) ;
- protection de la sélection/copie et du glisser-déposer des images ;
- détection simple des DevTools sur ordinateur avec écran de protection ;
- les champs de formulaire restent sélectionnables et utilisables.

**Important :** une page web ne peut pas rendre son HTML/CSS/JavaScript totalement invisible au navigateur. Cette protection vise à décourager l'inspection et la copie faciles. Les données ou règles sensibles doivent rester côté serveur.
