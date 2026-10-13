import Laboratoire from '/laboratoire.mdx';

# Vues, ViewModels et validation

## Contenu
- .NET Core MVC : Projets suite 
  - Views 
  - Views Models 
- Validation de base (rappel de 2W5) 
  - Niveaux 
  - Annotations de validation 
  - TagHelpers 


## Ressources et documentation: 
#### Complémentaire: 
- [Standards C# Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions)
- [Standards C#](https://github.com/ktaranov/naming-convention/blob/master/C%23%20Coding%20Standards%20and%20Naming%20Conventions.md)
- [Raccourcis Visual Studio](#raccourcis-visual-studio)

## Activités de la séance: 

### Théorie
- 🔗[420_3W6_cours_02_Data_Validtions_Annotations.pptx](../assets/cours/presentations/420_3W6_cours_02_Data_Validtions_Annotations.pptx)
- 🔗[Démo Validation](https://github.com/A26ProgWebTrans/S02_DemoValidations)

### Laboratoire
#### GitHub FORK le repo suivant

- Labo 🔗[S02_Lab1_ViewModels](https://github.com/A26ProgWebTrans/S02_Lab1_ViewModels)


### Travail personnel: 
- Compléter le laboratoire

## Raccourcis Visual Studio

Source : [Visual Studio Keyboard shortcuts (PDF, Microsoft)](https://visualstudio.microsoft.com/keyboard-shortcuts.pdf)

### Édition de code
| Raccourci | Action |
|---|---|
| `Ctrl + Espace` | Compléter le mot |
| `Ctrl + Shift + Espace` | Afficher l'aide sur la signature |
| `Alt + ↑ / ↓` | Déplacer la ligne vers le haut / bas |
| `Ctrl + D` | Dupliquer la ligne |
| `Ctrl + Shift + L` | Supprimer la ligne |
| `Ctrl + Entrée` | Insérer une ligne en dessous |
| `Ctrl + Shift + Entrée` | Insérer une ligne au-dessus |
| `Ctrl + ↑ / ↓` | Défiler d'une ligne vers le haut / bas |
| `Ctrl + PgUp / PgDn` | Défiler d'une page vers le haut / bas |
| `Shift + molette de la souris` | Défiler horizontalement |
| `Ctrl + /` | Commenter / décommenter la ligne |
| `Ctrl + Shift + /` | Commenter / décommenter le bloc |
| `Ctrl + K + D` | Formater le document |
| `Ctrl + K + F` | Formater la sélection |
| `Alt + /` | Demander à Copilot (clavardage en ligne) |
| `Ctrl + E + W` | Activer / désactiver le retour automatique à la ligne |
| `Ctrl + R + W` | Afficher / masquer les espaces blancs |
| `Shift + Alt + L + S` | Trier les lignes |
| `Shift + Alt + L + J` | Joindre les lignes |

### Rechercher et remplacer
| Raccourci | Action |
|---|---|
| `Ctrl + F` | Rechercher |
| `Ctrl + H` | Remplacer |
| `Ctrl + Shift + F` | Rechercher dans les fichiers |
| `Ctrl + Shift + H` | Remplacer dans les fichiers |
| `F8 / Shift + F8` | Aller à l'erreur suivante / précédente |

### Refactorisation
| Raccourci | Action |
|---|---|
| `Ctrl + .` ou `Alt + Entrée` | Afficher les actions rapides |
| `Ctrl + R + M` | Extraire une méthode |
| `Ctrl + R + I` | Extraire une interface |
| `Ctrl + R + R` | Renommer |
| `Ctrl + R + G` | Supprimer et trier les `using` |
| `Ctrl + K + E` | Nettoyage du code |
| `Ctrl + K + S` | Entourer de (`if`, `try`, etc.) |
| `Shift + Alt + L + S` | Trier les lignes |
| `Shift + Alt + L + J` | Joindre les lignes |

### Navigation
| Raccourci | Action |
|---|---|
| `Ctrl + Q` ou `Ctrl + Shift + P` | Rechercher une fonctionnalité |
| `Ctrl + T` | Rechercher dans le code |
| `Ctrl + G` | Aller à la ligne |
| `F8 / Shift + F8` | Aller à l'erreur suivante / précédente |
| `F12` | Atteindre la définition |
| `Alt + F12` | Aperçu de la définition |
| `Ctrl + F12` | Atteindre l'implémentation |
| `Shift + F12` | Rechercher toutes les références |
| `Alt + Début` | Aller à la classe de base |
| `Ctrl + -` / `Ctrl + Shift + -` | Naviguer vers l'arrière / l'avant |
| `Ctrl + Shift + Retour arrière` | Aller au dernier emplacement modifié |
| `Ctrl + Shift + ↑ / ↓` | Aller à la référence suivante / précédente |
| `Ctrl + K + K` | Ajouter / retirer un signet |
| `Ctrl + K + N / P` | Aller au signet suivant / précédent |
| `Ctrl + K + L` | Effacer tous les signets |

### Débogage
| Raccourci | Action |
|---|---|
| `F5` | Démarrer / continuer le débogage |
| `Shift + F5` | Arrêter le débogage |
| `Ctrl + F5` | Exécuter sans débogage |
| `F9` | Ajouter / retirer un point d'arrêt |
| `Ctrl + Shift + F9` | Supprimer tous les points d'arrêt |
| `F10` | Pas à pas principal |
| `F11` | Pas à pas détaillé |
| `Shift + F11` | Pas à pas sortant |
| `Ctrl + Alt + P` | Attacher au processus… |
| `Shift + Alt + P` | Rattacher au processus |
| `Alt + F2` | Lancer le profileur |
| `Shift + Alt + F2` | Relancer le profileur |

### Curseurs multiples et sélection
| Raccourci | Action |
|---|---|
| `Ctrl + Alt + clic de souris` | Insérer un curseur |
| `Shift + Alt + .` | Insérer un curseur à la prochaine occurrence |
| `Shift + Alt + ;` | Insérer un curseur à toutes les occurrences |
| `Shift + Alt + ,` | Retirer le dernier curseur |
| `Shift + Alt + /` | Déplacer le dernier curseur vers le bas |
| `Shift + Alt + ↑ / ↓` | Sélection en colonne (rectangulaire) |
| `Alt + glisser la souris` | Sélection en colonne (rectangulaire) |
| `Shift + Alt + = / -` | Étendre / réduire la sélection |

### Projets et solutions
| Raccourci | Action |
|---|---|
| `Ctrl + Shift + N` | Nouveau projet |
| `Ctrl + Shift + O` | Ouvrir un projet |
| `Ctrl + B` | Générer la sélection |
| `Ctrl + Shift + B` | Générer la solution |
| `Ctrl + Shift + A` | Ajouter un nouvel élément |
| `Shift + Alt + A` | Ajouter un élément existant |
| `Shift + F2` | Ajout rapide d'un élément |
| `Alt + Entrée` | Propriétés |

### Gestion des fichiers
| Raccourci | Action |
|---|---|
| `Ctrl + N` | Nouveau fichier |
| `Ctrl + O` | Ouvrir un fichier |
| `Ctrl + Shift + S` | Tout enregistrer |
| `Ctrl + Alt + PgUp / PgDn` | Aller au document à gauche / droite |
| `Ctrl + F4` | Fermer l'onglet |
| `Ctrl + K + Z` | Rouvrir les onglets fermés |
| `Ctrl + [ + S` | Afficher le fichier actif dans l'Explorateur de solutions |
| `Ctrl + Tab` | Parcourir les onglets |
| `F7 / Shift + F7` | Basculer entre le concepteur et le code |
| `F4` | Propriétés |

### Fenêtres et affichage
| Raccourci | Action |
|---|---|
| `Shift + Alt + Entrée` | Plein écran |
| `Ctrl + double-clic sur la fenêtre` | Basculer vers le dernier emplacement ancré / flottant |
| `Ctrl + Alt + 1-9` | Changer de disposition de fenêtres enregistrée |
| `Shift + Échap` | Fermer la fenêtre d'outil active |
| `Ctrl + Alt + L` | Ouvrir l'Explorateur de solutions |
| `Ctrl + \ + C` | Ouvrir le clavardage GitHub Copilot |
| `Ctrl + \ + E` | Ouvrir la liste d'erreurs |
| `Ctrl + Alt + O` | Ouvrir la fenêtre Sortie |
| `Échap` | Remettre le focus sur l'éditeur |

### Git
| Raccourci | Action |
|---|---|
| `Alt + G + C` | Fenêtre Modifications Git |
| `Alt + G + M` | Fenêtre Dépôt Git |
| `Ctrl + Alt + F3` | Sélecteur de branche |
| `Ctrl + Alt + F4` | Sélecteur de dépôt |
| `Ctrl + E + C` | Menu des actions Git |
| `Ctrl + Entrée` | Commit |

### Tests unitaires
| Raccourci | Action |
|---|---|
| `Ctrl + E + T` | Explorateur de tests |
| `Ctrl + R + A` | Exécuter tous les tests |
| `Ctrl + R + L` | Répéter la dernière exécution |
| `Ctrl + R + U` | Exécuter jusqu'à l'échec |
| `Ctrl + R + F` | Exécuter les tests échoués |
| `Ctrl + R + N` | Exécuter les tests non exécutés |
| `Ctrl + R + Suppr` | Effacer tous les résultats |
