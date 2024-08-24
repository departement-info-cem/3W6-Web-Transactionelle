# Fork

## À quoi ça sert?

<details>
<summary>Définition</summary>

Fork permet de cloner et interagir avec un repository Git.

C'est un outil visuel qui permet de remplacer la ligne de commande de Git.

Il permet également de visualiser les différentes branches et commits d'un projet.
</details>

## Actions

<details>
<summary>Ajouter un compte</summary>

Cliquez sur File/Accounts...

![alt text](ForkAccounts0.png)

Cliquez sur le +

![alt text](ForkAccounts1.png)

Cliquez sur **GitHub** et sur **Login**

![alt text](ForkAccounts2.png)

Faites l'authentification avec GitHub

![alt text](ConnectionAFork.png)

Si c'est fonctionnel le compte s'affiche comme ceci

![alt text](ForkAccounts3.png)

</details>

<details>
<summary>Cloner</summary>

Cliquez sur File/Clone...

![alt text](CloneRepositoryFork.png)

Il faut:
- Copier l'URL obtenu dans GitHub
- Choisir le répertoire
- Modifier le nom si nécessaire (normalement pas...)

![alt text](CloneRepositoryFork2.png)

</details>

<details>
<summary>Voir les changements courants</summary>

Cliquez sur **Local Changes** pour afficher les changements que vous avez fait.

![alt text](ForkLocalChanges.png)

On peut sélectionner le fichier que l'on veut voir à gauche et voir la différence à droite:

![alt text](ForkLocalChanges2.png)

L'option pour ignore les espaces blancs (et changement de ligne) est souvent intéressante

![alt text](ForkLocalChanges3.png)

</details>

<details>
<summary>Commit</summary>

Tout d'abord, déplacez les fichiers du commit dans la section **Staged**

Cliquez sur le bouton **Stage** pour déplacer le fichier

![alt text](ForkCommit1.png)

Vous pouvez également choisir l'option **Stage All** après un **clique droit**

![alt text](ForkCommit2.png)

Une fois que les changements sont TOUS dans la section Staged (Sauf si vous voulez ignore certains changements pour l'instant...)

Écrivez un nom et une description pour le commit et cliquez sur le bouton **Commit X File**

![alt text](ForkCommit3.png)

</details>

<details>
<summary>Push</summary>

Après un commit, on peut voir que l'on a des changements qui ne sont pas encore sur le serveur GitHub.

On le voit à gauche dans le menu de branches:

![alt text](ForkNotPushedYet.png)

Et en haut dans le menu central:

![alt text](ForkMenuBranches.png)

Note: On voit le nombre de commits qui n'ont pas encore été poussés sur le serveur (Dans ce cas, il y en a 1)

Appuyez sur le bouton Push

![alt text](ForkPushButton.png)

Vérifiez que l'on est dans la bonne branche et cliquez sur Push

![alt text](ForkPushMenu.png)

</details>

<details>
<summary>Créer une branche</summary>

En cliquant sur le bouton + du menu central

![alt text](ForkNewBranch.png)

![alt text](ForkNewBranch2.png)

![alt text](ForkNewBranch3.png)

</details>

<details>
<summary>Changer de branche</summary>

Changez de branche avec un clique droit sur la branche avec laquelle vous voulez travailler

![alt text](ForkBranchChange.png)

Ou faites simplement un **double clique** sur la branche!

La branche courante a un **crochet devant son nom**.

:::warning
Mais si je ne vois pas ma branche!?
:::

Si c'est le cas, c'est qu'elle existe sur le serveur, mais pas encore **localement**. Pour l'obtenir, il faut faire un "Checkout".

Il y a plusieurs façon de le faire, en voici une.

Commencez par regardez le contenu de Remotes/origin (C'est ce qui est sur GitHub)

![alt text](image.png)

Double cliquez sur la branche que vous voulez obtenir localement et cliquez sur Track.

![alt text](image-1.png)

Si tout c'est bien passé, la branche est maintenant sur votre ordinateur (localement) et il y a un crochet à côté (pour montrer que c'est la branche active)

![alt text](image-2.png)


</details>

<details>
<summary>Merger une branche</summary>

- Il faut d'abord changer de branche pour être dans la branche où l'on veut merger! Généralement la branche main dans nos projets...
- Ensuite on peut faire un merge de la branche test vers la branche main

![alt text](ForkMerge1.png)

Gardez les options par défaut et cliquez sur Merge

![alt text](ForkMerge2.png)

Il faut maintenant faire un **Push**

</details>

<details>
<summary>Pull</summary>

Lorsque vous travaillez à la maison et que vous voulez obtenir les changements que vous avez fait à l'école, il faut faire un **Pull**!

Avant de faire un pull vous **pouvez** faire un **Fetch**. Le **Fetch** permet de connaître les changements du serveur, sans nécessairement les appliquer localement. On peut voir les changements avec une flèche vers le **BAS** et le nombre de commits sur le serveur qui n'ont pas encore obtenus.

Lorsque vous faites le **Pull**, vous allez obtenir **les changements sur le serveur** dans la **branche** où vous êtes.

![alt text](ForkPull.png)

Note: Pourquoi on a seulement besoin de le faire à la maison? Par défaut, lorsque l'on fait un clone, Fork va obtenir la version la plus récente d'une branche!

</details>

<details>
<summary>Retirer un changement</summary>

Si vous ne voules plus les changements que vous avez fait localement dans un fichier (C'était une erreur)

Faites Discard Changes... et confirmez votre choix

![alt text](ForkDiscardChanges.png)
</details>