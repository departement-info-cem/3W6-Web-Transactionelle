import Laboratoire from '/laboratoire.mdx';

# AJAX (partie 2)

## Contenu
- AJAX #2

## Activités de la séance: 

### Théorie: 
- 🔗[Notes de cours](#notes-de-cours) (ci-dessous)
- 🔗[420_3W6_cours_22_AJAX_2.pptx](../assets/cours/presentations/420_3W6_cours_22_AJAX_2.pptx) (présentation originale)

### Laboratoire
#### GitHub FORK Laboratoire
- Labo 🔗[S22_Lab1_AJAX](https://github.com/A26ProgWebTrans/S22_Lab1_AJAX_2)

---

## Notes de cours

### Contenu du cours
- [Appels AJAX](#appels-ajax-ajax)
- [Utilisation d’APIs](#utilisation-dapis)

### Appels AJAX, $.ajax
- On peut faire les mêmes appels avec la méthode `$.ajax`.
- Cette méthode est plus avancée et permet de spécifier de nombreux paramètres, dont le type d’appel : post, get, put, delete et autres appels HTTP moins utilisés.
- Elle permet également de spécifier le format des données.
- Dans ce cours, nous allons nous contenter d’utiliser `$.get` et `$.post`, mais c’est bon de savoir que `$.ajax` est seulement une version plus configurable.

```js
$.ajax({
    type: "GET",
    url: '/Zombie/Details',
    data: {"id": id},
    datatype: "json",
    success: function (result) {
        // Afficher le résultat
    },
    error: function () {
        alert("Impossible d'obtenir le details");
    }
});
```

### Utilisation d’APIs
Il existe de très nombreuses APIs sur le web qui fournissent des données (vu avec beaucoup plus de détails en 4W6).

On peut utiliser `$.get` et `$.post` pour accéder aux APIs de très nombreux sites, comme :
- Google
- Twitter
- Instagram
- Facebook
- Spotify
- etc.

Il suffit de lire la documentation de l’API pour voir les URLs à utiliser, les paramètres à fournir et le format des résultats.

:::note
Plusieurs APIs nécessitent la création d’une clé pour éviter un usage excessif, mais la majorité permettent une utilisation occasionnelle sans frais.
:::
