import Laboratoire from '/laboratoire.mdx';

# LINQ et seed de la BD

## Contenu
- Linq, boucles et constructeurs
- Seed DB 

## Ressources et documentation: 
- [Linq](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)

## Activités de la séance: 
### Théorie:  
- 🔗[Notes de cours](#notes-de-cours) (ci-dessous)
- 🔗[420_3W6_cours_06_Linq_Seed.pptx](../assets/cours/presentations/420_3W6_cours_06_Linq_Seed.pptx) (présentation originale)

### Laboratoire: 
#### GitHub FORK Laboratoire
- Labo 🔗[S06_Lab1_Linq](https://github.com/A26ProgWebTrans/S06_Lab1_Linq)

### Travail personnel: 
- Compléter le Laboratoire

## Notes de cours

### Contenu du cours
- Explications sur le laboratoire 4
- Révision Linq
- Quand est-ce que l’on exécute la requête?
- Utilisation de update-database
- Seed

### Linq, c’est quoi?
- Une librairie qui permet d’exécuter des fonctions sur plusieurs éléments contenus dans un `IEnumerable`.
  - `List<>` est un `IEnumerable`.
  - `DbSet<>` l’est aussi.
- De nombreuses méthodes Linq prennent un lambda en paramètre. Ce lambda est une petite fonction qui va être exécutée sur chaque élément.

Si on veut obtenir la valeur `Point` la plus grande de tous les zombies :
```csharp
int maxPoints = _dbContext.Zombies.Max(zombie => zombie.Point);
```

Pour obtenir l’`Attaque` la plus forte :
```csharp
int maxAttaque = _dbContext.Zombies.Max(zombie => zombie.Attaque);
```

#### Enchaîner les méthodes Linq
Plusieurs méthodes Linq retournent un `IEnumerable`; on peut alors utiliser une autre méthode de Linq sur le résultat de la première, et ainsi de suite.

`ToList()` permet de créer une liste :
```csharp
_dbContext.Zombies.ToList();
```

`Where()` permet de filtrer les éléments et de garder seulement ceux pour lesquels le lambda fourni est vrai :
```csharp
_dbContext.Zombies.Where(z => z.Point > 10).ToList();
```

`Take()` permet de prendre les N premiers éléments. On peut donc garder les 5 premiers zombies qui valent plus de 10 points après les avoir mis en ordre alphabétique de nom avec :
```csharp
_dbContext.Zombies.Where(z => z.Point > 10).OrderBy(z => z.Name).Take(5).ToList();
```

#### Trier avec Linq
- `OrderBy()` permet de mettre les éléments en ordre croissant en fonction du lambda.
  ```csharp
  _dbContext.Zombies.Where(z => z.Point > 10).OrderBy(z => z.Name).ToList();
  ```
- `OrderByDescending()` fait la même chose en ordre décroissant.
- `ThenBy()` peut être appelé pour faire un tri supplémentaire (en respectant d’abord le tri précédent!). Par exemple, pour trier par nom et ensuite par prénom :
  ```csharp
  _dbContext.Etudiants.OrderBy(z => z.Nom).ThenBy(z => z.Prenom).ToList();
  ```

#### Linq de base
```csharp
// On obtient un Zombie avec le nom Puant
// Ne cause pas d'erreur s'il y a plusieurs zombies avec ce nom, retourne simplement le premier
// Pas d'erreur non plus s'il n'y en a aucun, retourne simplement null
zombie = _dbContext.Zombies.Where(z => z.Name == "Puant").FirstOrDefault();

// On obtient tous les Zombies avec le nom Puant
zombieList = _dbContext.Zombies.Where(z => z.Name == "Puant").ToList();

// Alors qu'avec Single, l'appel lance une exception s'il n'y a pas exactement une entrée avec le nom "Puant"
zombie = _dbContext.Zombies.Where(z => z.Name == "Puant").Single();
```

#### Fonctionnalités Linq intéressantes
```csharp
// On obtient un Zombie avec le nom Puant
// Cette fois, on met les zombies en ordre
// En prenant le premier, on obtient celui qui a le moins de points!
zombieAvecLeMoinsDePoint = _dbContext.Zombies.Where(z => z.Name == "Puant").OrderBy(z => z.Point).First();

// On obtient tous les Zombies avec le nom Puant
// Cette fois, on met les zombies en ordre décroissant de points
zombieList = _dbContext.Zombies.Where(z => z.Name == "Puant").OrderByDescending(z => z.Point).ToList();
```

### Opérateurs d’agrégation
| Opérateur | Description |
|---|---|
| `Sum` | Somme d’un attribut pour tous les éléments de l’ensemble |
| `Max` | Valeur maximale d’un attribut |
| `Min` | Valeur minimale d’un attribut |
| `Count` | Nombre d’éléments dans un ensemble |
| `Average` | Valeur moyenne d’un attribut dans un ensemble |
| `All` | Vérifier si tous les éléments respectent une condition |
| `Any` | Vérifier si au moins un élément respecte une condition |
| `Contains` | Vérifier si un élément existe dans un ensemble |

#### Exemple d’agrégation
```csharp
// La moyenne de points de l'ensemble des Zombies
moyenneDePoints = _dbContext.Zombies.Average(z => z.Point);

// La moyenne de points des zombies avec une valeur Attack plus grande que 10
moyenneDePoints = _dbContext.Zombies.Where(z => z.Attack > 10).Average(z => z.Point);

// Le nombre de points le plus haut pour un zombie avec une valeur Attack plus petite ou égale à 10
moyenneDePoints = _dbContext.Zombies.Where(z => z.Attack <= 10).Max(z => z.Point);
```

#### Agrégation d’agrégation?
On veut parfois trouver la somme d’une somme ou le max d’une somme. Voici comment on pourrait s’y prendre :

```csharp
// ❌ Donne une erreur!!
int pointsDuZombieTypesAvecLePlusDePoints = _context.ZombieTypes.Max(zt => zt.Zombies.Sum(z => z.Point));
```

Malheureusement, Entity Framework a de la difficulté à créer une requête SQL dans ce cas! Pour garder ça simple, on va utiliser un `ToList()` plus tôt pour travailler en objets :

```csharp
int pointsDuZombieTypesAvecLePlusDePoints = _context.ZombieTypes.ToList().Max(zt => zt.Zombies.Sum(z => z.Point));
```

:::note
On va voir un peu plus tard qu’après un appel à une méthode comme `ToList()`, une requête est faite à la BD et les données sont maintenant en mémoire sur le client.
:::

### Quand est-ce que la requête est exécutée?
Les commandes suivantes vont exécuter une requête quand elles sont faites sur un `DbSet` (ou après des opérations Linq successives) :
- `ToList` : retourne la liste d’éléments
- `First` : retourne le premier élément ou lance une exception
- `Single` : retourne un seul élément ou lance une exception
- `FirstOrDefault` : retourne le premier élément ou null
- `SingleOrDefault` : retourne un élément ou null
- `Find` : prend un Id et retourne un élément

:::note
TOUTES les opérations d’agrégation (vues un peu plus tôt) exécutent également une requête sur la BD. Par exemple, `Count` ou `Max`.
:::

#### Deux exemples
Dans ce cas, une seule requête est faite à la BD et retourne le Count :
```csharp
int count = _context.TestData.Count();
```

Dans ce cas, une seule requête est faite à la BD et retourne TOUS les éléments, et on va ensuite appeler la méthode `Count` de la liste :
```csharp
int count = _context.TestData.ToList().Count();
```

#### Démo en classe
Présentation du laboratoire et des requêtes exécutées par le code.

:::note
Il n’y a aucune évaluation dans ce cours pour la performance du code. La présentation est seulement faite pour informer ET pour bien comprendre à quel moment la requête est faite et quelles données sont retournées par la BD.
:::

### Quand utiliser add-migration et update-database?
- Lorsque vous changez de machine pour travailler, les fichiers de migration que vous avez déjà créés sont toujours là, alors ce n’est pas nécessaire de refaire un `add-migration`.
- Mais si vous voulez travailler sur une machine sur laquelle vous n’avez pas encore utilisé votre application, il faut exécuter `update-database`.
- D’ailleurs, si on se souvient du truc, on peut toujours exécuter `update-database`, car la commande va vérifier s’il faut mettre quelque chose à jour.

### Un seed, ça sert à quoi?
On utilise un seed pour ajouter des données à notre base de données. Pourquoi?
- Pour ajouter des données cruciales à l’utilisation de votre application
- Pour ajouter l’admin d’une application dans la BD. De cette façon, ce sera possible de se connecter à notre application (on va voir ça plus tard)
- C’est également utile pour ajouter des données de test pour votre application

#### HasData
Une des techniques de seed se fait dans la fonction `OnModelCreating` de votre DbContext. On l’a déjà utilisée dans le labo de la semaine dernière. On utilise la méthode `HasData`.

:::warning
Cette technique de seed est directement reliée au système de migration. Il faut donc faire un `add-migration` chaque fois que l’on modifie notre seed et faire un `update-database` pour l’appliquer!
:::

```csharp
public class ZombiePartyDbContext : DbContext
{
    public ZombiePartyDbContext(DbContextOptions<ZombiePartyDbContext> options) : base(options){}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ZombieType>().HasData(DB.ZombieTypes);
        modelBuilder.Entity<Zombie>().HasData(DB.Zombies);
        modelBuilder.Entity<Weapon>().HasData(DB.Weapons);
    }
}
```

#### HasData vu de plus près
- Il faut spécifier les Id manuellement dans notre seed.
- Il faut également remplir les clés étrangères manuellement (`ZombieTypeId`).

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<ZombieType>().HasData(
        new ZombieType() { TypeName = "Virus", Id = 1, Point = 1 },
        new ZombieType() { TypeName = "Contact", Id = 2, Point = 3 },
        new ZombieType() { TypeName = "Fiction", Id = 3, Point = 3 },
        new ZombieType() { TypeName = "Légendaire", Id = 4, Point = 5 });

    modelBuilder.Entity<Zombie>().HasData(
        new Zombie() { Id = 1, Force = 20, Name = "LeChuck", Point = 5, ZombieTypeId = 3, ShortDesc = "description" },
        new Zombie() { Id = 2, Force = 20, Name = "Lenore", Point = 4, ZombieTypeId = 3, ShortDesc = "description" },
        new Zombie() { Id = 3, Force = 20, Name = "Draugr", Point = 2, ZombieTypeId = 4, ShortDesc = "description" },
        new Zombie() { Id = 4, Force = 20, Name = "Ragamuffin", Point = 5, ZombieTypeId = 4, ShortDesc = "description" },
        new Zombie() { Id = 5, Force = 20, Name = "Taxidermy", Point = 1, ZombieTypeId = 4, ShortDesc = "description" },
        new Zombie() { Id = 6, Force = 20, Name = "chien de l'enfer", Point = 7, ZombieTypeId = 3, ShortDesc = "description" },
        new Zombie() { Id = 7, Force = 20, Name = "Avogadro", Point = 9, ZombieTypeId = 3, ShortDesc = "description" });
}
```
