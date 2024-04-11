# Astuces

## Lien vers l'ensemble des documents partagés sur sharepoint:
[Dossier Partagé](https://cegepedouardmontpetit-my.sharepoint.com/:f:/r/personal/mathieu_briau_cegepmontpetit_ca/Documents/3W6/Diapos3W6?csf=1&web=1&e=KAXGmC)

## Erreur https au démarrage de votre application (à propos des certificats)

![image](/autres/MicrosoftTeams-image.png)

<details>
Il faut premièrement ouvrir la console de package NuGet:

![image](/autres/consoleGestionnaireDePackage.png)

Ensuite il faut exécuter les commandes suivantes:

![image](/autres/commandesDotnetDevcerts.png)

</details>

## Si vous avez une erreur d'accès causer par un certificat auto généré dans votre navigateur!

![image](/autres/RisqueCertificat.png)

<details>

Il y a un problème avec les certificats auto généré. Si vous avez un problème de certificat non sécure en localhost avec votre navigateur, vous pouvez permettre les certificats invalides.

- Dans **chrome** Utiliser cette ligne  : **chrome://flags/#allow-insecure-localhost** et mettre Allow invalid certificates for resources loaded from localhost (ça devrait être la première option) à **enable** et redémarrer Chrome.
- Sur Edge, il y a **edge://flags** qui permet de gérer les options également. Dans tout les cas, il faut trouver l'option (**"Allow invalid certificates"**), vous pouvez faire une recherche.

Voici comment changer de navigateur utilisé par Visual Studio:

![image](/autres/selectionNavigateurVisualStudio.png)

</details>

## Génération(scaffolding) d'un contrôleur avec la ligne de commande 
#### Pratique lorsque l'on a des erreurs!!

<details>

Vous pouvez prendre le temps de lire les [notes de cours](https://cegepedouardmontpetit-my.sharepoint.com/:p:/r/personal/valerie_turgeon_cegepmontpetit_ca/Documents/Site_3W6_Partage/08.1%20VuesControleurs%20autogeneres/S08.1_Generer%20les%20vues%20avec%20console.pptx?d=w25f7099d17b8472baf531cde3223753d&csf=1&web=1&e=XYQLa7) ou alors suivre les directives suivantes


Pour générer le contrôleur et les vues d'un modèle (ou ViewModel), voici la commande si ça ne fonctionne pas avec l'interface graphique :

```
dotnet aspnet-codegenerator controller -m NOM_COMPLET_DU_MODEL_AVEC_NAMESPACE -dc NOM_COMPLET_DU_CONTEXT_AVEC_NAMESPACE -scripts -udl -outDir Controllers -name NOM_DU_CONTROLEUR -async -actions
```

Il faut biensûr remplacer **NOM_COMPLET_DU_MODEL_AVEC_NAMESPACE**, **NOM_COMPLET_DU_CONTEXT_AVEC_NAMESPACE** et **NOM_DU_CONTROLEUR**

Voici des exemples de valeurs :

| Variable | Valeur | 
| :--- | :--- |
| NOM_COMPLET_DU_MODEL_AVEC_NAMESPACE | PresseMots_Web.Models.User |
| NOM_COMPLET_DU_CONTEXT_AVEC_NAMESPACE | PresseMots_Web.Models.Data.PresseMotsDbContext |
| NOM_DU_CONTROLEUR | UsersController |

On aurait donc ceci avec notre exemple :

```
dotnet aspnet-codegenerator controller -m PresseMots_Web.Models.User -dc PresseMots_Web.Models.Data.PresseMotsDbContext -scripts -udl -outDir Controllers -name UsersController -async -actions
```

Si vous avez une erreur comme quoi la commande n'est pas trouvée, vous devez installer l'outil (déjà installé sur les postes du CEGEP)

```
dotnet tool install --global dotnet-aspnet-codegenerator --version 6.0.13
```

Pour rouler la commande:

![image](/autres/menuTerminal.png)

![image](/autres/terminal.png)

:::warning

Cette commande doit être effectué dans la console de VisualStudio et il faut s'assurer de faire un cd NOM_DU_PROJET (PresseMots_Web dans l'exemple) avant de rouler la commande.

:::

</details>


