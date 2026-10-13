import Laboratoire from '/laboratoire.mdx';

# Injection de dépendances

## Contenu

- Dependency Injection

## Activités de la séance: 

### Théorie:  
- 🔗[Notes de cours](#notes-de-cours) (ci-dessous)
- 🔗[420_3W6_cours_16_Injection_Dépendances.pptx](../assets/cours/presentations/420_3W6_cours_16_Injection_Dépendances.pptx) (présentation originale)

### Laboratoire
#### GitHub FORK Laboratoire
- Labo 🔗[S16_Lab1_DependencyInjection](https://github.com/A26ProgWebTrans/S16_Lab1_DependencyInjection)


### Travail personnel:
- Compléter le laboratoire 


## Étapes pour extraire de la logique d'un contrôleur et la mettre dans un service 

- Cette section présente les étapes permettant **de créer un service en retirant de la logique qui se répète dans un ou plusieurs contrôleurs**.

### Étape 1. Cibler le code à extraire

- Nous allons retirer des actions du contrôleur Zombie la création des SelectLists de ZombieType, **parce qu'elle se répète à plusieurs endroits**. 

![alt text](../assets/cours/rencontre8.2/Logique_repetee1.webp)
![alt text](../assets/cours/rencontre8.2/Logique_repetee2.webp)

 ---

### Étape 2. Créer le service 

- **Ajoutez une nouvelle classe** dans votre répertoire Utility pour votre service.

![alt text](../assets/cours/rencontre8.2/Creation_Service.webp)


### Étape 3. Ajouter le code nécessaire dans le service.
-  Puisque nous avons besoin du context pour obtenir les zombieTypes, **il faut injecter le dbContext dans notre service**. 

![alt text](../assets/cours/rencontre8.2/Injection_Context.webp)

- **Ajoutez la méthode** qui contiendra le code que nous voulons **extraire du contrôleur** puis **ajoutez-y votre code**.
- Ici, **nous avons copié le code qui était dans le contôleur** dans une méthode GetZombieTypes() et nous retournons directement le résultat.
- Notez que **le nom de la variable pour le context est différent dans notre service**. C'est simplement par choix, nous aurions pu aussi le nommer _baseDonnees dans le service. Cela dit, il faut évidemment changer son nom dans le code du service. **Nous avons donc remplacé _baseDonnees par _dbContext**. 
- Assurez-vous de **retourner le bon type de données dans la signature de la méthode**.

![alt text](../assets/cours/rencontre8.2/Extraction_logique_Et_Retour.webp)

---

### Étape 4. Extraire l'interface 

- Faites un **clic droit sur le nom de la classe** puis dans **Actions rapides et factorisations** cliquez sur **Extraire l'interface**. 

![alt text](../assets/cours/rencontre8.2/Extraction_Interface.webp)

- Cliquez sur **OK** pour créer l'interface. 

![alt text](../assets/cours/rencontre8.2/Extraction_Interface2.webp)


### Étape 5. Ajouter le service dans Program.cs

- Ajoutez le service dans Program.cs **avant le bulder.Build();**
- Notez que nous avons **ajouté un service scoped**. Puisque notre service **se fait injecter le dbContext qui est un service scoped**, nous créons un service qui a **la même durée de vie**. 

 ![alt text](../assets/cours/rencontre8.2/Ajout_Service_ProgramCS.webp)

 ---

### Étape 6. Injecter votre nouveau service dans le ou les contrôleurs qui utilisait cette logique de code

 ![alt text](../assets/cours/rencontre8.2/Injection_Service.webp)

### Étape 7. Utiliser le service dans les actions concernées

- Le code extrait a été mis en commentaire pour l'exemple. Maintenant nous **appelons la méthode GetZombieTypes() de notre service** pour remplir **zombieVM.ZombieTypeSelectList**.

 ![alt text](../assets/cours/rencontre8.2/Utiliser_Service.webp)

 ### Étape 8. Valider que le résultat est identique.

  ![alt text](../assets/cours/rencontre8.2/Validation.webp)

## Notes de cours

### Contenu du cours
- Objectifs
- Exemple sans DI
- Comment ça fonctionne
- Détails de l’API

### Injection de dépendances
- L’injection de dépendances, ou Dependency Injection (DI), est une technologie qui permet de gérer très efficacement les dépendances dans un système.
- On parle aussi d’inversion de dépendance. Et ça fait partie de la philosophie SOLID.

### Exemple sans Dependency Injection
Voici un exemple de construction d’un ViewModel sans l’utilisation de DI.

```csharp
private readonly IAppEnvironmentService _appEnvironmentService;
private readonly IDialogService _dialogService;
private readonly ISettingsService _settingsService;

public ProfileViewModel(IAppEnvironmentService appEnvironmentService,
                        IDialogService dialogService,
                        ISettingsService settingsService)
{
    _appEnvironmentService = appEnvironmentService;
    _dialogService = dialogService;
    _settingsService = settingsService;
}
```

Pour le créer manuellement, on devrait faire quelque chose comme ceci :

```csharp
var profileVM = new ProfileViewModel(
    new AppEnvironmentService(/*...*/),
    new DialogService(),
    new SettingsService("appsettings.json"));
```

#### Changement pour SmsDialogService
Maintenant, supposons que ce ViewModel est utilisé à une dizaine d’endroits dans notre application et que l’on veut changer le `DialogService` pour un `SmsDialogService`. Il faudrait modifier la dizaine d’endroits dans notre code.

```csharp
var myVM = new ProfileViewModel(
    new AppEnvironmentService(/*...*/),
    new SmsDialogService(AppConstants.EnterprisePhoneNumber),
    new SettingsService("appsettings.json"));
```

Et si on veut pouvoir construire en utilisant une option que l’on configure dans `appsettings.json`? Et si on l’utilise à 10 endroits, ça fait encore 10 changements à faire et à maintenir.

```csharp
var settingsService = new SettingsService("appsettings.json");
var myVM = new ProfileViewModel(
    new AppEnvironmentService(/*...*/),
    settingsService.UseSMS() ?
        new SmsDialogService(AppConstants.EnterprisePhoneNumber) :
        new DialogService(parentContainer),
    settingsService);
```

:::warning 🤕
Sans injection de dépendances, c’est un mal de tête assuré. Si ce n’est pas maintenant, c’est pour la personne qui va le maintenir ou le tester.
:::

### La solution : l’injection de dépendances
C’est une technique très répandue :
- AutoFac
- DryIoc
- Grace
- LightInject
- Lamar
- StashBox
- Unity
- SimpleInjector
- Ninject

#### La philosophie
- L’injection de dépendances (DI) permet une inversion du contrôle (IoC).
- On utilise pour cela un **Dependency Injection Container** que l’on configure dans `Program.cs`.

Pourquoi on utilise cette technique?
- Parce que quand on souhaite créer un objet, on ne veut pas se soucier de comment on crée nos services, avec quelles configurations, comment on va chercher les fichiers de configuration, etc. On veut l’objet, simplement.
- Copier/coller les informations pour recréer un objet n’est jamais une bonne idée!
- Le contrôle de création des objets est donc donné au framework de DI. Cela évite de nombreux problèmes.

#### Votre DbContext
On utilise déjà l’injection de dépendances depuis plusieurs cours :

```csharp
private ZombiePartyDbContext context;

public ZombieController(ZombiePartyDbContext context)
{
    this.context = context;
}
```

### DI Container
- Dans la DI d’ASP.NET Core, nous avons un container qui contient l’ensemble des services injectables : le `IServiceCollection`.
- Ce container est « caché » derrière la propriété `Services` et contient les services (dépendances) qui sont enregistrés de plusieurs façons.

Comme on a vu :
```csharp
builder.Services.AddDbContext<ZombiePartyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
```

Mais on peut également enregistrer nos propres services :
```csharp
builder.Services.AddSingleton<QuelqueChose>();
```

Ou encore mieux, en utilisant une interface :
```csharp
builder.Services.AddSingleton<IQuelqueChose, QuelqueChose>();
```

#### Les responsabilités du DI container
- Construire le service selon les configurations
- Gérer sa durée de vie
- Supprimer les instances correctement

#### Peut simplifier l’utilisation d’un service
- L’injection, c’est une chose, mais le DI Container gère également la configuration et le cycle de vie de l’objet!
- Vous saviez que lorsqu’on termine d’utiliser un DbContext, il faut fermer les connexions à SQL?
- Eh bien, le DI Container le sait, lui, et quand on fait un `AddDbContext<>`, on ajoute ce contexte au DI Container.
- Quand l’application n’a plus besoin du contexte, il fait un `.Dispose()` avant de le supprimer de la mémoire, ce qui ferme ses connexions.

### Et comment la DI sait quand elle doit créer et détruire?
Ça dépend de la méthode qui est utilisée pour l’enregistrer. Voici les 3 durées de vie et leurs méthodes, de la plus courte à la plus longue :

```csharp
// Il y a un new et un dispose pour chaque injection
builder.Services.AddTransient<QuelqueChose>();

// Il y a un new et un dispose pour chaque requête
builder.Services.AddScoped<QuelqueChose>();

// Il y a un new à la première injection et un dispose quand on dispose l'application
builder.Services.AddSingleton<QuelqueChose>();
```

#### Poupées russes
- C’est possible d’injecter des dépendances dans le constructeur d’une dépendance. Et cette dépendance peut également se faire injecter des dépendances, et ainsi de suite. Tant que le système est capable de créer les dépendances, tout le monde est content!
- La principale règle à suivre, c’est de ne pas injecter une dépendance qui risque de se faire détruire alors qu’on veut encore l’utiliser!
- Donc, on n’injecte pas une dépendance **scoped** dans une dépendance **singleton**.

:::tip Analogie
C’est un peu comme si une pizzeria (singleton) demandait à un livreur (scoped) ayant fini son quart de travail d’aller livrer une pizza.
:::

#### Autres utilisations
- Tout ce que vous voudriez faire avec `static`, vous pouvez le faire avec une dépendance singleton. Comme `AppConstants`.
- Ajoutez également les éléments qui se font injecter une dépendance. Pour les contrôleurs, c’est déjà fait dans `Program.cs` grâce à cette ligne qui est là depuis le début :

```csharp
// Add services to the container.
builder.Services.AddControllersWithViews();
```

:::note
L’ordre d’enregistrement n’est PAS important. Tant que l’on ajoute tous les éléments à notre container, il va pouvoir démêler tout ça une fois que l’on va créer nos instances.
:::

### Avantages
- Une classe n’a plus besoin de savoir comment créer ce dont elle a besoin : le conteneur s’en occupe à sa place et gère sa durée de vie.
- On peut changer l’implémentation d’un service à un seul endroit (`Program.cs`) sans toucher au reste du code.
- Un conteneur facilite la testabilité en permettant aux dépendances d’être simulées.
- Un conteneur facilite la maintenance en permettant aux nouvelles classes d’être facilement ajoutées à l’application.

### Exemple complet d’injection
On injecte les services nécessaires dans le constructeur :

```csharp
public class ProfileViewModel
{
    private IAppEnvironmentService _appEnvironmentService;
    private IDialogService _dialogServicee;
    private ISettingsProviderService _settingsProviderService;

    public ProfileViewModel(IAppEnvironmentService appEnvironmentService,
                            IDialogService dialogService,
                            ISettingsProviderService settingsProviderService) {
        _appEnvironmentService = appEnvironmentService;
        _dialogServicee = dialogService;
        _settingsProviderService = settingsProviderService;
    }

    public string? Name { get; set; }
}
```

On enregistre nos services dans `Program.cs` :

```csharp title="Program.cs"
// ISettingsProviderService est déjà enregistré dans .NET Core MVC
// On doit enregistrer les services que l'on a nous-mêmes créés
builder.Services.AddSingleton<IAppEnvironmentService, AppEnvironmentService>();
builder.Services.AddScoped<IDialogService, DialogService>();
```

On peut injecter `ProfileViewModel` dans un contrôleur :

```csharp
public IActionResult Profile([FromServices] ProfileViewModel profileViewModel, int id)
{
    var profile = _dbContext.Profiles.Find(id);
    profileViewModel.Name = profile.Name;
    return View(profileViewModel);
}
```

#### 2 façons d’injecter une dépendance
On peut aller les chercher dans le constructeur du contrôleur :

```csharp
using Microsoft.Extensions.DependencyInjection;
/*...*/
public IServiceProvider provider { get; set; }
public MyDbContext context { get; set; }

public HomeController(IServiceProvider provider, MyDbContext context)
{
    this.provider = provider;
    this.context = context;
}
```

Ou les mettre dans l’action en utilisant l’attribut `[FromServices]` :

```csharp
public IActionResult GetProfile([FromServices] ProfileViewModel profileViewModel, int id) {
    var profile = this.context.profile.find(id);
    profileViewModel.name = profile.name;
    return View(profileViewModel);
}
```

### Construction des dépendances
Lors de l’utilisation de Singleton, Scoped ou Transient, on peut spécifier comment l’instance est créée.

```csharp
/* Il y a plusieurs surcharges : */
builder.Services.AddSingleton(typeof(BuildingSurvey))
builder.Services.AddSingleton(typeof(IBuildingSurvey), (s) => new BuildingSurvey())
builder.Services.AddSingleton(typeof(IBuildingSurvey), new BuildingSurvey())
builder.Services.AddSingleton(typeof(IBuildingSurvey), typeof(BuildingSurvey))
builder.Services.AddSingleton<IBuildingSurvey, BuildingSurvey>((s) => new BuildingSurvey())
builder.Services.AddSingleton<IBuildingSurvey, BuildingSurvey>();
builder.Services.AddSingleton<BuildingSurvey>();
builder.Services.AddSingleton<BuildingSurvey>((s) => new BuildingSurvey());
builder.Services.AddSingleton<BuildingSurvey>(new BuildingSurvey());
```
