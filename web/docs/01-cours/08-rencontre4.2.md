import Laboratoire from '/laboratoire.mdx';

# Vues partielles et ViewModels

## Contenu
- Partial views 
- ViewModels 

## Ressources et documentation: 

#### Complémentaire: 
- [Requêtes Linq](https://docs.microsoft.com/fr-ca/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)
- [MSDN Partial Views](https://docs.microsoft.com/fr-ca/dotnet/framework/data/adonet/ef/language-reference/queries-in-linq-to-entities)
- [MSDN Views](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/overview?view=aspnetcore-5.0)
- [MSDN View Models](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/overview?view=aspnetcore-5.0#strongly-typed-data-viewmodel) 

## Activités de la séance: 
### Théorie:  
- 🔗[Notes de cours](#notes-de-cours) (ci-dessous)
- 🔗[420_3W6_cours_08_Vues_Partielles.pptx](../assets/cours/presentations/420_3W6_cours_08_Vues_Partielles.pptx) (présentation originale)

### Laboratoire: 
#### GitHub FORK Laboratoire
- Labo 🔗[S08_Lab1_PartialViews](https://github.com/A26ProgWebTrans/S08_Lab1_PartialViews)


### Travail personnel: 
- Compléter le laboratoire

## Notes de cours

### Contenu du cours
- Vues partielles
- Constructeurs
- View Models

### Vues partielles, à quoi ça sert?
- On va créer une vue qui va être utilisée à l’intérieur d’autres vues.
- L’objectif numéro 1, c’est la réutilisation. Plus la vue est réutilisée, plus c’est utile!
- Permet de séparer une vue complexe en plus petites vues plus faciles à comprendre.
- Bref, c’est l’équivalent d’une fonction en C#!
- Être paresseux, mais intelligemment. On travaille un peu plus pour faire la vue partielle et on travaille beaucoup moins par la suite!
- Évite d’avoir à mettre à jour le look et les traductions à plusieurs endroits.

#### Exemple simple de vue partielle
On peut utiliser `<partial/>` pour inclure une vue dans une vue!

```cshtml title="Avant"
@model IEnumerable<Zombie>

<div class="row">
    @foreach (var zombie in Model)
    {
        <div>
            <p><b>@zombie.Name</b></p>
            <img src=@zombie.ImagePath>
            <p>@zombie.Point</p>
        </div>
    }
</div>
```

Devient :

```cshtml title="Index.cshtml"
@model IEnumerable<Zombie>

<div class="row">
    @foreach (var zombie in Model)
    {
        <partial name="_ZombieCard" model="zombie" />
    }
</div>
```

```cshtml title="_ZombieCard.cshtml"
@model Zombie

<div>
    <p><b>@Model.Name</b></p>
    <img src=@Model.ImagePath>
    <p>@Model.Point</p>
</div>
```

### Rappel sur les constructeurs
- En C#, chaque instance d’objet est créée par un constructeur.
- Le constructeur n’est pas considéré comme une méthode et n’a pas de type de retour.
- Il est exécuté avec les paramètres qui sont passés avec `new(…)`.

#### Constructeur avec parent
Lorsque l’on construit un objet qui hérite d’une autre classe, le constructeur du parent est également appelé. Ainsi que celui du parent de ce parent, et ainsi de suite, jusqu’à obtenir un objet entier qui est complètement construit. En utilisant l’opérateur `base`, on peut faire passer les paramètres reçus par un constructeur au constructeur du parent.

Dans l’exemple de `ZombiePartyDbContext`, c’est important d’utiliser `base(options)`, sinon le parent `DbContext` ne serait pas correctement initialisé!

```csharp
public class ZombiePartyDbContext : DbContext
{
    public ZombiePartyDbContext(DbContextOptions<ZombiePartyDbContext> options) : base(options)
    {

    }
}
```

#### Object Initializer
- Il ne faut pas confondre les paramètres d’un constructeur et l’utilisation d’un object initializer.
- Un object initializer peut lui-même comprendre des appels à `new`, comme dans l’exemple.
- On préfère utiliser l’object initializer lorsque l’on configure un objet pour une instance particulière, mais c’est préférable d’utiliser le constructeur lorsque l’on veut pouvoir réutiliser notre logique d’initialisation. Comme toujours lorsque l’on programme, on évite de recopier le même code à plusieurs endroits!

```csharp
// Dans ce cas, c'est tout de même le constructeur sans paramètre qui est appelé
ZombieTypeVM zombieTypeVM = new()
{
    ZombieType = new(),
    ZombiesList = zombies.ToList(),
    ZombiesCount = zombies.Count(),
    PointsAverage = zombies.Average(p => p.Point)
};
```

#### Exemple d’object initializer vs constructeur
L’équivalent du code précédent, avec un constructeur :

```csharp
public class ZombieTypeVM
{
    public ZombieTypeVM(IEnumerable<Zombie> zombies) {
        ZombieType = new();
        ZombiesList = zombies.ToList();
        ZombiesCount = zombies.Count();
        PointsAverage = zombies.Average(p => p.Point);
    }

    public ZombieType ZombieType { get; set; }
    public List<Zombie> ZombiesList { get; set; } = new List<Zombie>();
    public int ZombiesCount { get; set; }
    public double PointsAverage { get; set; }
}
```

Donne un appel à `new` plus simple :

```csharp
var zombieTypeVM = new ZombieTypeVM(zombies);
```

#### Syntaxe de l’appel à new
Les 3 lignes suivantes sont complètement équivalentes et donnent le même résultat :

```csharp
ZombieTypeVM zombieTypeVM = new ZombieTypeVM();
ZombieTypeVM zombieTypeVM = new();
var zombieTypeVM = new ZombieTypeVM();
```

Mais cette syntaxe ne fait pas de sens en C#, car le compilateur n’arrive pas à savoir de quel type doit être l’instance!

```csharp
// ❌ Erreur de compilation
var zombieTypeVM = new();
```

#### Mixte
C’est tout à fait possible d’utiliser un constructeur qui prend des paramètres et d’utiliser un object initializer en plus. Dans tous les cas, l’object initializer est exécuté **après** le constructeur et peut écraser la valeur d’une propriété.

```csharp
var zombieTypeVM = new ZombieTypeVM(zombies)
{
    ZombieType = _baseDonnees.ZombieTypes.First(zt => zt.Id == id)
};
```

:::warning AVERTISSEMENT!
Après cette belle présentation sur les constructeurs, vous êtes probablement tentés de les utiliser partout.

C’est une bonne idée, mais il faut comprendre que l’on travaille avec un framework (Entity Framework) qui nous permet de gérer nos objets en BD et que ce framework a besoin d’un constructeur qui ne prend pas de paramètre pour créer nos objets!

Dans tous les cas, les ViewModels ne sont pas gérés par Entity Framework, alors c’est le parfait moment pour utiliser des constructeurs avec paramètres!
:::

### View Models
- Maintenant que l’on a commencé à utiliser Entity Framework, le concept de ViewModels devrait être plus facile à comprendre.
- On parle de **Model** lorsque l’on utilise directement une classe qui fait partie de notre modèle de données qui est dans notre BD. Donc une classe avec une clé primaire (`public int Id { get; set; }`) et un constructeur sans paramètre, qui est enregistrée dans votre DbContext.
- On parle d’un **ViewModel** lorsque vous créez une classe spécialement pour contenir des données qui vont être affichées dans une vue.
- Dans les deux cas, on utilise cette classe avec un `@model` dans notre fichier de vue `.cshtml`.

```cshtml
@model ZombieTypeVM
```

#### Construction d’un ViewModel
Un exemple de ViewModel de statistiques :

```csharp title="ZombieStatsVM.cs"
public class ZombieStatsVM
{
    public ZombieStatsVM(IEnumerable<Zombie> zombies) {
        MinPoints = zombies.Min(z => z.Point);
        MaxPoints = zombies.Max(z => z.Point);
        AvgPoints = zombies.Average(z => z.Point);
        // Take(3) retourne JUSQU'À 3 éléments et ne cause pas d'erreur s'il y en a moins (même s'il n'y en a pas!)
        // Take(3) retourne un IEnumerable, pas une List
        // Ici, on obtient donc jusqu'à 3 zombies en commençant par celui qui vaut le plus de points!
        ZombiesWithMostPoints = zombies.OrderByDescending(z => z.Point).Take(3);
    }

    public int MinPoints { get; set; }
    public int MaxPoints { get; set; }
    public double AvgPoints { get; set; }
    public IEnumerable<Zombie> ZombiesWithMostPoints { get; set; } = new List<Zombie>();
}
```

```csharp title="Contrôleur"
public IActionResult ZombieStats()
{
    var zombieTypeVM = new ZombieStatsVM(_baseDonnees.Zombies);

    return View(zombieTypeVM);
}
```

#### La vue de ZombieStats (version simple)
```cshtml title="ZombieStats.cshtml"
@model ZombieStatsVM

<h3>Nombre de zombies: @Model.Count</h3>
<h3>Minimum des points: @Model.MinPoints</h3>
<h3>Maximum des points: @Model.MaxPoints</h3>
<h3>Moyenne des points: @Model.AvgPoints</h3>
<h3>Zombies with most points:</h3>
<div class="row">
    @foreach (var zombie in Model.ZombiesWithMostPoints)
    {
        <partial name="_ZombieCard" model="zombie" />
    }
</div>
```

```cshtml title="_ZombieCard.cshtml"
@model Zombie

<div>
    <p><b>@Model.Name</b></p>
    <img src=@Model.ImagePath>
    <p>@Model.Point</p>
</div>
```

#### Construction d’un ViewModel (complexe)
On peut construire des ViewModels dans un ViewModel!

```csharp title="ZombieTypeStatsVM.cs"
public class ZombieTypeStatsVM
{
    public ZombieTypeStatsVM(ZombieType zombieType) {
        ZombieTypeName = zombieType.TypeName;
        Count = zombieType.Zombies.Count();
        MinPoints = zombieType.Zombies.Min(z => z.Point);
        MaxPoints = zombieType.Zombies.Max(z => z.Point);
        AvgPoints = zombieType.Zombies.Average(z => z.Point);
    }

    public string ZombieTypeName { get; set; }
    public int Count { get; set; }
    public int MinPoints { get; set; }
    public int MaxPoints { get; set; }
    public double AvgPoints { get; set; }
}
```

```csharp title="ZombieStatsVM.cs"
public class ZombieStatsVM
{
    public ZombieStatsVM(IEnumerable<Zombie> zombies, IEnumerable<ZombieType> zombieTypes) {
        Count = zombies.Count();
        MinPoints = zombies.Min(z => z.Point);
        MaxPoints = zombies.Max(z => z.Point);
        AvgPoints = zombies.Average(z => z.Point);

        ZombiesWithMostPoints = zombies.OrderByDescending(z => z.Point).Take(3);

        ZombieTypeStatsVMs = new List<ZombieTypeStatsVM>();
        // Adding a new ViewModel for each ZombieType
        foreach(var zombieType in zombieTypes)
        {
            ZombieTypeStatsVMs.Add(new ZombieTypeStatsVM(zombieType));
        }
    }

    public List<ZombieTypeStatsVM> ZombieTypeStatsVMs { get; }
    // ... autres propriétés
}
```

#### La vue de ZombieStats (complexe)
```cshtml title="_ZombieTypeStats.cshtml"
@model ZombieTypeStatsVM

<h2>@Model.ZombieTypeName</h2>
<h3>Nombre de zombies: @Model.Count</h3>
<h3>Minimum des points: @Model.MinPoints</h3>
<h3>Maximum des points: @Model.MaxPoints</h3>
<h3>Moyenne des points: @Model.AvgPoints</h3>
```

```cshtml title="ZombieStats.cshtml"
@model ZombieStatsVM

<h3>Nombre de zombies: @Model.Count</h3>
<h3>Minimum des points: @Model.MinPoints</h3>
<h3>Maximum des points: @Model.MaxPoints</h3>
<h3>Moyenne des points: @Model.AvgPoints</h3>
<h3>Zombies with most points:</h3>
<div class="row">
    @foreach (var zombie in Model.ZombiesWithMostPoints)
    {
        <partial name="_ZombieCard" model="zombie" />
    }
</div>

<div class="row">
    @foreach (var zombieTypeStatsVM in Model.ZombieTypeStatsVMs)
    {
        <partial name="_ZombieTypeStats" model="zombieTypeStatsVM" />
    }
</div>
```

#### Pourquoi c’est utile de le faire dans le constructeur?
- Code plus réutilisable que si la logique est dans la fonction du contrôleur.
- Au niveau conceptuel, le constructeur, c’est exactement là pour préparer un objet à être utilisé. Dans ce cas, notre VM doit faire toutes ces actions pour être utilisable et c’est donc logique de mettre ce code dans son constructeur!

### Linq Select!
```csharp
// Une simple liste de int
List<int> values = new () { 1, 4, 7 };

// On obtient un IEnumerable avec les valeurs multipliées par 3 (donc 3, 12 et 21)
IEnumerable<int> troisFoisLesValues = values.Select((v) => v * 3);

// On obtient un IEnumerable avec des strings
IEnumerable<string> strings = values.Select((v) => "Valeur: " + v);

// Rappel, lorsque l'on utilise une fonction lambda, on peut le faire sur plusieurs lignes et il prend alors une forme
// qui ressemble davantage à une fonction standard
// Cette syntaxe donne le même résultat que la précédente!
strings = values.Select((v) =>
{
    return "Valeur: " + v;
});
```
