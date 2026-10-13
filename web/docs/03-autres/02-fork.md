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

![alt text](../assets/autres/fork/ForkAccounts0.webp)

Cliquez sur le +

![alt text](../assets/autres/fork/ForkAccounts1.webp)

Cliquez sur **GitHub** et sur **Login**

![alt text](../assets/autres/fork/ForkAccounts2.webp)

Faites l'authentification avec GitHub

![alt text](../assets/autres/fork/ConnectionAFork.webp)

Si c'est fonctionnel le compte s'affiche comme ceci

![alt text](../assets/autres/fork/ForkAccounts3.webp)

</details>

<details>
<summary>Cloner</summary>

Cliquez sur File/Clone...

![alt text](../assets/autres/fork/CloneRepositoryFork.webp)

Il faut:
- Copier l'URL obtenu dans GitHub
- Choisir le répertoire
- Modifier le nom si nécessaire (normalement pas...)

![alt text](../assets/autres/fork/CloneRepositoryFork2.webp)

</details>

<details>
<summary>Voir les changements courants</summary>

Cliquez sur **Local Changes** pour afficher les changements que vous avez fait.

![alt text](../assets/autres/fork/ForkLocalChanges.webp)

On peut sélectionner le fichier que l'on veut voir à gauche et voir la différence à droite:

![alt text](../assets/autres/fork/ForkLocalChanges2.webp)

L'option pour ignorer les espaces blancs (et changement de ligne) est souvent intéressante

![alt text](../assets/autres/fork/ForkLocalChanges3.webp)

</details>

<details>
<summary>Commit</summary>

Tout d'abord, déplacez les fichiers du commit dans la section **Staged**

Cliquez sur le bouton **Stage** pour déplacer le fichier

![alt text](../assets/autres/fork/ForkCommit1.webp)

Vous pouvez également choisir l'option **Stage All** après un **clique droit**

![alt text](../assets/autres/fork/ForkCommit2.webp)

Une fois que les changements sont TOUS dans la section Staged (Sauf si vous voulez ignorer certains changements pour l'instant...)

Écrivez un nom et une description pour le commit et cliquez sur le bouton **Commit X File**

![alt text](../assets/autres/fork/ForkCommit3.webp)

</details>

<details>
<summary>Push</summary>

Après un commit, on peut voir que l'on a des changements qui ne sont pas encore sur le serveur GitHub.

On le voit à gauche dans le menu de branches:

![alt text](../assets/autres/fork/ForkNotPushedYet.webp)

Et en haut dans le menu central:

![alt text](../assets/autres/fork/ForkMenuBranches.webp)

Note: On voit le nombre de commits qui n'ont pas encore été poussés sur le serveur (Dans ce cas, il y en a 1)

Appuyez sur le bouton Push

![alt text](../assets/autres/fork/ForkPushButton.webp)

Cliquez encore sur Push

![alt text](../assets/autres/fork/ForkPushMenu.webp)

</details>

<!--
<details>

<summary>Créer une branche</summary>

En cliquant sur le bouton + du menu central

![alt text](../assets/autres/fork/ForkNewBranch.webp)

![alt text](../assets/autres/fork/ForkNewBranch2.webp)

![alt text](../assets/autres/fork/ForkNewBranch3.webp)

</details>
-->

<!--
<details>
<summary>Changer de branche</summary>

Changez de branche avec un clique droit sur la branche avec laquelle vous voulez travailler

![alt text](../assets/autres/fork/ForkBranchChange.webp)

Ou faites simplement un **double clique** sur la branche!

La branche courante a un **crochet devant son nom**.

:::warning
Mais si je ne vois pas ma branche!?
:::

Si c'est le cas, c'est qu'elle existe sur le serveur, mais pas encore **localement**. Pour l'obtenir, il faut faire un "Checkout".

Il y a plusieurs façon de le faire, en voici une.

Commencez par regardez le contenu de Remotes/origin (C'est ce qui est sur GitHub)

![alt text](../assets/autres/fork/image.webp)

Double cliquez sur la branche que vous voulez obtenir localement et cliquez sur Track.

![alt text](../assets/autres/fork/image-1.webp)

Si tout c'est bien passé, la branche est maintenant sur votre ordinateur (localement) et il y a un crochet à côté (pour montrer que c'est la branche active)

![alt text](../assets/autres/fork/image-2.webp)


</details>

<details>
<summary>Merger une branche</summary>

- Il faut d'abord changer de branche pour être dans la branche où l'on veut merger! Généralement la branche main dans nos projets...
- Ensuite on peut faire un merge de la branche test vers la branche main

![alt text](../assets/autres/fork/ForkMerge1.webp)

Gardez les options par défaut et cliquez sur Merge

![alt text](../assets/autres/fork/ForkMerge2.webp)

Il faut maintenant faire un **Push**

</details>

-->

<details>
<summary>Pull</summary>

Lorsque vous travaillez à la maison et que vous voulez obtenir les changements que vous avez fait à l'école, il faut faire un **Pull**!

Avant de faire un pull vous **pouvez** faire un **Fetch**. Le **Fetch** permet de connaître les changements du serveur, sans les appliquer localement. On peut voir les changements avec une flèche vers le **BAS** et le nombre de commits sur le serveur qui n'ont pas encore été appliqués.

<!-- 
Lorsque vous faites le **Pull**, vous allez obtenir **les changements sur le serveur** dans la **branche** où vous êtes.
-->

![alt text](../assets/autres/fork/ForkPull.webp)

Note: Pourquoi on a seulement besoin de le faire à la maison? Par défaut, lorsque l'on fait un clone, Fork va obtenir la version la plus récente!

</details>

<details>
<summary>Retirer un changement</summary>

Si vous ne voulez plus les changements que vous avez fait localement dans un fichier (C'était une erreur)

Faites Discard Changes... et confirmez votre choix

![alt text](../assets/autres/fork/ForkDiscardChanges.webp)
</details>