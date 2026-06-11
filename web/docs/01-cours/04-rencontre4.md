import Laboratoire from '/laboratoire.mdx';

# Rencontre 4

## Contenu
- ORM
- Entity Framework 

## Ressources et documentation: 
- [Types de données SQL Server](https://docs.microsoft.com/fr-fr/sql/connect/jdbc/understanding-data-type-differences?view=sql-server-ver15)
#### Complémentaire: 
- [MSDN EF BD supportées](https://docs.microsoft.com/fr-fr/ef/core/providers/?tabs=dotnet-core-cli)
- [MSDN EF Installation et principales commandes](https://docs.microsoft.com/fr-fr/ef/core/get-started/overview/first-app?tabs=visual-studio)

## Activités de la séance: 
### Théorie:  
- 🔗[Cours4.pptx](https://cegepedouardmontpetit.sharepoint.com/:p:/s/CMT420InformatiqueComitesCours-3W6/ERyRHaH6DaBCsVD_N5GdODAB-NxgzqN6h91-U-INFFwBeg?e=jt92OQ)

### Laboratoire
#### GitHub Classroom Laboratoire

- Groupe 1010 🔗[1010 S04_Lab1_EntityFramework](https://classroom.github.com/a/VoVxXvPq)
- Groupe 1020 🔗[1020 S04_Lab1_EntityFramework](https://classroom.github.com/a/KMJHQTO8)

### Travail personnel: 
- Compléter le laboratoire

## Étapes pour créer la base de données à partir du modèle de classes

Cette section présente les étapes permettant de créer la base de données en utilisant Asp.net Core et Entity Framework. Pour davantage de détails sur la nomenclature utilisée, référez-vous aux rencontres 3 et 4.    

Le diagramme que nous allons utiliser est le suivant. On y retrouve les **3 types de relations** (un à un, un à plusieurs et plusieurs à plusieurs). 

![alt text](../../static/img/Img_Traduction_Modele_Classe/Modele_classe.png)

**Note** : Nous avons ajouté peu de propriétés pour alléger le contenu du diagramme. 

 ---

### Étape 1. Création des modèles dans l'application 

Dans l'application, faire un clic droit sur le **répertoire Models pour ajouter les classes**. Nous obtenons alors le résultat suivant :  

![alt text](../../static/img/Img_Traduction_Modele_Classe/Modeles.png)

 ---

### Étape 2. Ajouter les propriétés et les annotations

#### **Modèle Enseignant** : 
- On remarque ici **deux utilisations différentes de StringLength** avec une taille minimale ou non.

![alt text](../../static/img/Img_Traduction_Modele_Classe/Modele_Enseignant.png)

---

#### **Modèle Cours** : 
- Ici, nous utilisons **Range** pour les **int**. 

![alt text](../../static/img/Img_Traduction_Modele_Classe/Modele_cours.png)

---

#### **Modèle CarteEtudiante** :
- Ici, nous utilisons **DateTime** pour les dates.  

![alt text](../../static/img/Img_Traduction_Modele_Classe/Modele_CarteEtudiante.png)

---

#### **Modèle Etudiant** : 
- Ici, nous faisons la distinction **entre les propriétés obligatoires et celles qui sont optionnelles**. 

![alt text](../../static/img/Img_Traduction_Modele_Classe/Propriete_Optionnelle.png)

- **Annotation [Required]** : Pour les **propriétés obligatoires**, vous n'êtes pas obligé d'ajouter **l'annotation [Required]** à vos propriétés. Par défaut, les propriétés non optionnelles sont considérées comme requises. 

---



### Étape 3. Ajouter la clé primaire dans chacun des modèles : 
- Dans l'exemple suivant, nous avons ajouté la **clé primaire Id au modèle Enseignant et l'annotation [key]**. Il faut le faire pour tous les modèles. 

![alt text](../../static/img/Img_Traduction_Modele_Classe/Cle_primaire.png)

---


### Étape 4. Ajouter les relations entre les modèles et les clés étrangères : 

- Voici une façon de procéder pour représenter les relations 

### 1. Relation Un à Plusieurs : 

- Dans le diagramme nous avons une relation **Un à Plusieurs** entre les modèles **Enseignant** et **Cours**. 

![alt text](../../static/img/Img_Traduction_Modele_Classe/Relation_Un_Plusieurs.png)

- **Attention** : Remarquez **l'annotation [ValidateNever]** sur **les propriétés de navigation**. Il faut ajouter cette annotation sur **chacune des propriétés de navigation** pour éviter des problèmes de validation au niveau du **ModelState.IsValid**. 

---


### 2. Relation Plusieurs à Plusieurs : 

- Dans le diagramme nous avons une relation **Plusieurs à Plusieurs** entre les modèles **Etudiant** et **Cours**. 

 ![alt text](../../static/img/Img_Traduction_Modele_Classe/Plusieurs_a_Plusieurs.png)


- **Clé étrangère** : Dans cette relation, nous n’avons pas à ajouter de clés étrangères. 

- **Table associative** : Puisqu’il s’agit d’une relation **Plusieurs à Plusieurs**, Entity Framework va générer pour nous une table associative dans la base de données. Si nous voulions stocker des informations supplémentaires entre ces deux modèles, par exemple la note de l’étudiant, il faudrait nous-même créer un modèle qui représenterait la table associative et qui aurait des relations avec Etudiant et Cours. 

---


### 3. Relation Un à Un : 

- Dans le diagramme nous avons une relation **Un à Un** entre les modèles **Etudiant** et **CarteEtudiante**. 

 ![alt text](../../static/img/Img_Traduction_Modele_Classe/Un_a_Un.png)
 ![alt text](../../static/img/Img_Traduction_Modele_Classe/Un_Un_Clé_Étrangère.png)

 ---

### Étape 5. Ajouter les DbSets dans le DbContext: 

- **Pour chaque modèle** ajouté, il faut ajouter un **DbSet dans le DbContext**.

 ![alt text](../../static/img/Img_Traduction_Modele_Classe/DbSets.png)

 ---

### Étape 6. Créer la migration et la base de données :

1. Dans la **console de gestionnaire de package**, faites la commande suivante pour **créer la migration**. 

```
add-migration nom_migration
```

-   Assurez-vous que la migration a été créée et qu'elle **n'est pas vide** (exemple du fichier de migration avec contenu partiel). 

 ![alt text](../../static/img/Img_Traduction_Modele_Classe/Migration.png)

 ![alt text](../../static/img/Img_Traduction_Modele_Classe/Migration_Contenu_Partiel.png)



2. **Créez la base de données** avec la commande suivante 

```
update-database
```

- Regardez dans **l'explorateur d'objets SQL** si la base de données a été créée et si les tables existent.

 ![alt text](../../static/img/Img_Traduction_Modele_Classe/Tables_BD.png)

 - Remarquez ici qu'Entity Framework a créé une **table associative CoursEtudiant** puisqu'il y avait une relation **Plusieurs à Plusieurs** entre les tables Cours et Etudiant. 