"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[412],{4977:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={toc:[]},l="wrapper";function s(e){let{components:t,...a}=e;return(0,i.kt)(l,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"C'est le moment de ",(0,i.kt)("strong",{parentName:"p"},"tester"),", ajouter des ",(0,i.kt)("strong",{parentName:"p"},"commentaires")," et faire votre ",(0,i.kt)("strong",{parentName:"p"},"commit")," et votre ",(0,i.kt)("strong",{parentName:"p"},"push"))))}s.isMDXComponent=!0},7280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=a(814),l=a(4977);const s='<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>@ViewData["Title"] - JuliePro</title>\n    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />\n    <link rel="stylesheet" href="~/css/site.css" />\n</head>\n<body>\n  <header>\n    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-primary border-bottom box-shadow mb-3">\n      <div class="container">\n        <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index"><img src="~/images/imagesLayout/tile.png" style="width:80%" /></a>\n\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"\n                aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">\n          <ul class="navbar-nav flex-grow-1">\n            <li class="nav-item">\n              <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a>\n            </li>\n            <li class="nav-item">\n              <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>\n            </li>\n            <li class="nav-item dropdown">\n              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n                Admin\n              </a>\n              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\n                <li><a class="dropdown-item">Trainers</a></li>\n                <li><a class="dropdown-item">Specialities</a></li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </header>\n  <div class="container">\n    <main role="main" class="pb-3">\n      @RenderBody()\n    </main>\n  </div>\n\n  <footer class="border-top footer text-muted bg-primary">\n    <div class="container">\n      &copy; 2021 - JuliePro - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>\n    </div>\n  </footer>\n  <script src="~/lib/jquery/dist/jquery.min.js"><\/script>\n  <script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"><\/script>\n  <script src="~/js/site.js" asp-append-version="true"><\/script>\n  @await RenderSectionAsync("Scripts", required: false)\n</body>\n</html>\n',o='@{\n    ViewData["Title"] = "Home Page";\n}\n\n<div class="text-center">\n  <h1 class="display-4 text-danger">Welcome</h1>\n  <h4 class="text-warning">You will never have the butt you want if you sit on the butt you have.</h4>\n\n  <a  asp-area="" asp-controller="Home" asp-action="Index"><img src="~/images/imagesLayout/JulioProImage.png" style="width:50%" /></a>\n</div>\n',p={},m="TP1 : JuliePro",d={unversionedId:"tp/tp1",id:"tp/tp1",title:"TP1 : JuliePro",description:"Consignes (15% de la note finale)",source:"@site/docs/02-tp/01-tp1.md",sourceDirName:"02-tp",slug:"/tp/tp1",permalink:"/3W6-Web-Transactionelle/tp/tp1",draft:!1,editUrl:"https://github.com/departement-info-cem/3W6-Web-Transactionelle/tree/main/docs/02-tp/01-tp1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tp",next:{title:"TP2: Julie Pro Plus!",permalink:"/3W6-Web-Transactionelle/tp/tp2"}},u={},c=[{value:"Consignes (15% de la note finale)",id:"consignes-15-de-la-note-finale",level:2},{value:"\xc9tude de cas JuliePro",id:"\xe9tude-de-cas-juliepro",level:2},{value:"Les fonctionnalit\xe9s \xe0 impl\xe9menter",id:"les-fonctionnalit\xe9s-\xe0-impl\xe9menter",level:2},{value:"Cr\xe9ation du projet",id:"cr\xe9ation-du-projet",level:2},{value:"Gestion des sp\xe9cialit\xe9s",id:"gestion-des-sp\xe9cialit\xe9s",level:2},{value:"Gestion des entraineurs",id:"gestion-des-entraineurs",level:2},{value:"Impl\xe9mentation de la logique d&#39;affaire",id:"impl\xe9mentation-de-la-logique-daffaire",level:2},{value:"Utilisation des vues partielles et de FontAwesome",id:"utilisation-des-vues-partielles-et-de-fontawesome",level:2},{value:"Ajout de clients et de leurs objectifs",id:"ajout-de-clients-et-de-leurs-objectifs",level:2},{value:"Grille de correction",id:"grille-de-correction",level:2}],g={toc:c},k="wrapper";function N(e){let{components:t,...p}=e;return(0,i.kt)(k,(0,n.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tp1--juliepro"},"TP1 : JuliePro"),(0,i.kt)("h2",{id:"consignes-15-de-la-note-finale"},"Consignes (15% de la note finale)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lisez toutes les instructions et la grille de correction avant de commencer"),(0,i.kt)("li",{parentName:"ul"},"Cr\xe9ez un Repository ",(0,i.kt)("inlineCode",{parentName:"li"},"PRIV\xc9")," et ajoutez votre enseignant comme collaborateur"),(0,i.kt)("li",{parentName:"ul"},"Vous ",(0,i.kt)("strong",{parentName:"li"},"DEVEZ")," faire au moins les migrations et les commits demand\xe9s mais vous pouvez en faire plus sans probl\xe8me, tant que vous les documentez correctement")),(0,i.kt)("h2",{id:"\xe9tude-de-cas-juliepro"},"\xc9tude de cas JuliePro"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Julie Loiselle est propri\xe9taire de l\u2019entreprise d\u2019entrainement personnel JuliePro. L\u2019entreprise emploi une douzaine d\u2019entraineurs (",(0,i.kt)("strong",{parentName:"p"},"Trainer"),") chevronn\xe9s et sp\xe9cialis\xe9s (",(0,i.kt)("strong",{parentName:"p"},"Speciality")," : perte de poids, alth\xe9rophilie, course, r\xe9abilitation, etc).\nUn ",(0,i.kt)("strong",{parentName:"p"},"Trainer")," a une seule ",(0,i.kt)("strong",{parentName:"p"},"Speciality"),".\nChaque client (",(0,i.kt)("strong",{parentName:"p"},"Customer"),") est assign\xe9 \xe0 un ",(0,i.kt)("strong",{parentName:"p"},"Trainer"),".\nLe ",(0,i.kt)("strong",{parentName:"p"},"Trainer")," d\xe9finit \xe9galement avec son client un objectif courant (",(0,i.kt)("strong",{parentName:"p"},"Objective"),") : soit de perte de poids ou de distance. Lorsqu\u2019un ",(0,i.kt)("strong",{parentName:"p"},"Objective")," est atteint, on indique la date.")),(0,i.kt)("h2",{id:"les-fonctionnalit\xe9s-\xe0-impl\xe9menter"},"Les fonctionnalit\xe9s \xe0 impl\xe9menter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gestion des sp\xe9cialit\xe9s (",(0,i.kt)("strong",{parentName:"li"},"Speciality"),") avec seed\ud83c\udf31"),(0,i.kt)("li",{parentName:"ul"},"Gestion des entraineurs (",(0,i.kt)("strong",{parentName:"li"},"Trainer"),") et de leur sp\xe9cialit\xe9 (",(0,i.kt)("strong",{parentName:"li"},"Speciality"),") avec seed\ud83c\udf31"),(0,i.kt)("li",{parentName:"ul"},"Impl\xe9mentation des r\xe8gles d'affaire sp\xe9cifiques"),(0,i.kt)("li",{parentName:"ul"},"Utilisation de ",(0,i.kt)("strong",{parentName:"li"},"vues partielles")),(0,i.kt)("li",{parentName:"ul"},"Utilisation de ",(0,i.kt)("strong",{parentName:"li"},"FontAwesome")),(0,i.kt)("li",{parentName:"ul"},"Mise en place du mod\xe8le de donn\xe9e pour les clients (",(0,i.kt)("strong",{parentName:"li"},"Customer"),") et de leurs objectifs (",(0,i.kt)("strong",{parentName:"li"},"Objective"),")")),(0,i.kt)("h2",{id:"cr\xe9ation-du-projet"},"Cr\xe9ation du projet"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Cr\xe9ez le Repository ",(0,i.kt)("inlineCode",{parentName:"li"},"PRIV\xc9")," ",(0,i.kt)("strong",{parentName:"li"},"3W6_TP_NOM_PRENOM")," dans GitHub et ajoutez votre enseignant comme collaborateur"),(0,i.kt)("li",{parentName:"ol"},"Cr\xe9er une branche \xe0 partir de ",(0,i.kt)("strong",{parentName:"li"},"Main")," et appel\xe9e la ",(0,i.kt)("strong",{parentName:"li"},"TP1"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Ne pas travailler directement dans la branche ",(0,i.kt)("strong",{parentName:"p"},"Main"),". Vous devez ajouter une fonctionnalit\xe9 \xe0 la fois.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Cr\xe9ez un nouveau projet MVC qui se nomme ",(0,i.kt)("strong",{parentName:"li"},"JuliePro")),(0,i.kt)("li",{parentName:"ol"},"Dans le projet MVC:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Il faut t\xe9l\xe9charger ce ",(0,i.kt)("a",{target:"_blank",href:a(7159).Z},"fichier zip")," qui contient les images utilis\xe9es dans le projet et extraire son contenu dans le r\xe9pertoire ",(0,i.kt)("strong",{parentName:"li"},"/wwwroot/")," de votre projet ()")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Dites oui pour remplacer ",(0,i.kt)("strong",{parentName:"p"},"favicon.ico"),", ",(0,i.kt)("strong",{parentName:"p"},"bootstrap.css")," et ",(0,i.kt)("strong",{parentName:"p"},"bootstrap.min.css")," (Bootstrap ",(0,i.kt)("strong",{parentName:"p"},"5.1.0")," contient un bug, alors on utilise la version ",(0,i.kt)("strong",{parentName:"p"},"5.1.1"),")")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remplacez le contenu du fichier de Layout par ce qui suit:")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"/Views/Shared/_Layout.cshtml"),(0,i.kt)("p",null,(0,i.kt)(r.Z,{language:"html",title:"_Layout.cshtml",mdxType:"CodeBlock"},s))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remplacez le contenu du fichier d'Index par ce qui suit:")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"/Views/Home/Index.cshtml"),(0,i.kt)("p",null,(0,i.kt)(r.Z,{language:"html",title:"Index.cshtml",mdxType:"CodeBlock"},o))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assurez-vous que la page d'accueil de votre application est identique \xe0 celle-ci:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image Reference",src:a(4933).Z,width:"665",height:"520"})),(0,i.kt)(l.ZP,{mdxType:"CommentCommitPush"}),(0,i.kt)("h2",{id:"gestion-des-sp\xe9cialit\xe9s"},"Gestion des sp\xe9cialit\xe9s"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ajout de la classe ",(0,i.kt)("strong",{parentName:"li"},"Speciality")," qui sera g\xe9rer par Entity Framework Core dans le r\xe9pertoire ",(0,i.kt)("strong",{parentName:"li"},"/Data/"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image Reference",src:a(5118).Z,width:"429",height:"138"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Speciality"',title:'"Speciality"'},"public string Name { get; set; }\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Il faut ajouter les champs n\xe9cessaires pour ",(0,i.kt)("strong",{parentName:"p"},"EFC")," et les annotations. R\xe9f\xe9rez-vous au diagramme de classes du projet.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"G\xe9n\xe9ration du contr\xf4leur MVC pour la classe ",(0,i.kt)("strong",{parentName:"li"},"Speciality")),(0,i.kt)("li",{parentName:"ol"},"Ajouter un seed\ud83c\udf31 pour les sp\xe9cialit\xe9s")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Seed des sp\xe9cialit\xe9s"',title:'"Seed',des:!0,'sp\xe9cialit\xe9s"':!0},'builder.Entity<Speciality>().HasData(new Speciality() { Id = 1, Name = "Perte de poids" });\nbuilder.Entity<Speciality>().HasData(new Speciality() { Id = 2, Name = "Course" });\nbuilder.Entity<Speciality>().HasData(new Speciality() { Id = 3, Name = "Halth\xe9rophilie" });\nbuilder.Entity<Speciality>().HasData(new Speciality() { Id = 4, Name = "R\xe9habilitation" });\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Ajoutez une migration et mettez \xe0 jour votre base de donn\xe9es"),(0,i.kt)("li",{parentName:"ol"},"Le menu ",(0,i.kt)("strong",{parentName:"li"},"Admin/Specialities")," de la page principale doit nous diriger vers la gestion des sp\xe9cialit\xe9s"),(0,i.kt)("li",{parentName:"ol"},"Prenez un moment pour retirer la vue ",(0,i.kt)("strong",{parentName:"li"},"Details")," et retirer le lien dans la vue ",(0,i.kt)("strong",{parentName:"li"},"Index")),(0,i.kt)("li",{parentName:"ol"},"\xc0 ce point, vous devez pouvoir faire les actions ",(0,i.kt)("strong",{parentName:"li"},"CRUD")," de ",(0,i.kt)("strong",{parentName:"li"},"Speciality"))),(0,i.kt)(l.ZP,{mdxType:"CommentCommitPush"}),(0,i.kt)("h2",{id:"gestion-des-entraineurs"},"Gestion des entraineurs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ajout de la classe ",(0,i.kt)("strong",{parentName:"li"},"Trainer")," qui sera g\xe9rer par Entity Framework Core dans le r\xe9pertoire ",(0,i.kt)("strong",{parentName:"li"},"/Data/"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image Reference",src:a(1363).Z,width:"428",height:"224"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Trainer"',title:'"Trainer"'},"public string FirstName { get; set; }\npublic string LastName { get; set; }\npublic string Email { get; set; }\npublic string Photo { get; set; }\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Il faut ajouter les champs n\xe9cessaires pour les ",(0,i.kt)("strong",{parentName:"p"},"relations")," et les ",(0,i.kt)("strong",{parentName:"p"},"annotations"),".")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"G\xe9n\xe9ration du contr\xf4leur MVC pour la classe ",(0,i.kt)("strong",{parentName:"li"},"Trainer")),(0,i.kt)("li",{parentName:"ol"},"Ajouter un seed\ud83c\udf31 pour les entraineurs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Seed des entraineurs"',title:'"Seed',des:!0,'entraineurs"':!0},'builder.Entity<Trainer>().HasData(new Trainer() { Id = 1, FirstName = "Chrystal", LastName = "Lapierre", Email = "Chrystal.lapierre@juliepro.ca", SpecialityId= 1, Photo = "Chrystal.png"});\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 2, FirstName = "F\xe9lix", LastName = "Trudeau", Email = "Felix.trudeau@juliePro.ca", SpecialityId = 2, Photo = "Felix.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 3, FirstName = "Fran\xe7ois", LastName = "Saint-John", Email = "Frank.StJohn@juliepro.ca", SpecialityId = 1, Photo = "Francois.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 4, FirstName = "Jean-Claude", LastName = "Bastien", Email = "JC.Bastien@juliepro.ca", SpecialityId = 4, Photo = "JeanClaude.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 5, FirstName = "Jin Lee", LastName = "Godette", Email = "JinLee.godette@juliepro.ca", SpecialityId = 3, Photo = "Jin Lee.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 6, FirstName = "Karine", LastName = "Lachance", Email = "Karine.Lachance@juliepro.ca", SpecialityId = 2, Photo = "Karine.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 7, FirstName = "Ramone", LastName = "Esteban", Email = "Ramone.Esteban@juliepro.ca", SpecialityId = 3, Photo = "Ramone.png" });\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ajoutez une migration et mettez \xe0 jour votre base de donn\xe9es")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Le menu ",(0,i.kt)("strong",{parentName:"p"},"Admin/Trainers")," de la page principale doit nous diriger vers la gestion des sp\xe9cialit\xe9s")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modification de la vue et ajout des entra\xeeneurs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dans la vue Index:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Triez les entra\xeeneurs par FirstName en premier et par LastName ensuite"),(0,i.kt)("li",{parentName:"ul"},"Affichez l'image de la photo de l'entra\xeeneur si elle est pr\xe9sente et limitez sa largeur \xe0 200 pixels"),(0,i.kt)("li",{parentName:"ul"},"Affichez le nom de la sp\xe9cialit\xe9, pas son id"))),(0,i.kt)("li",{parentName:"ul"},"Dans la vue Details:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Affichez l'image de la photo de l'entra\xeeneur en pleine r\xe9solution si elle est pr\xe9sente"),(0,i.kt)("li",{parentName:"ul"},"Affichez le nom de la sp\xe9cialit\xe9, pas son id"))),(0,i.kt)("li",{parentName:"ul"},"Dans la vue Delete:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Affichez le nom de la sp\xe9cialit\xe9, pas son id"))),(0,i.kt)("li",{parentName:"ul"},"Dans les vues Create et Edit:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Votre select de sp\xe9cialit\xe9 est-il vraiment laid?\ud83e\udd2e Rappelez-vous que l'on utilise bootstrap et que les diff\xe9rents \xe9l\xe9ments doivent utiliser les classes bootstraps!"),(0,i.kt)("li",{parentName:"ul"},"Permettre de s\xe9lectionner une sp\xe9cialit\xe9 et affichez le nom des sp\xe9cialit\xe9s et non pas leurs ids"),(0,i.kt)("li",{parentName:"ul"},"Pour la photo, on garde \xe7a simple pour l'instant et on doit taper le nom de l'image de l'entra\xeeneur")))))),(0,i.kt)(l.ZP,{mdxType:"CommentCommitPush"}),(0,i.kt)("h2",{id:"impl\xe9mentation-de-la-logique-daffaire"},"Impl\xe9mentation de la logique d'affaire"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Emp\xeachez d\u2019effacer une ",(0,i.kt)("strong",{parentName:"li"},"Speciality")," si elle est associ\xe9 \xe0 au moins un ",(0,i.kt)("strong",{parentName:"li"},"Trainer")," et affichez un message appropri\xe9 \xe0 l'utilisateur dans ce cas")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image Reference",src:a(3907).Z,width:"356",height:"151"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Assurez-vous que le delete d'une ",(0,i.kt)("strong",{parentName:"li"},"sp\xe9cialit\xe9")," fonctionne correctement si elle n'est pas utilis\xe9e"),(0,i.kt)("li",{parentName:"ol"},"Assurez-vous que le delete d'un ",(0,i.kt)("strong",{parentName:"li"},"entra\xeeneur")," fonctionne correctement")),(0,i.kt)(l.ZP,{mdxType:"CommentCommitPush"}),(0,i.kt)("h2",{id:"utilisation-des-vues-partielles-et-de-fontawesome"},"Utilisation des vues partielles et de FontAwesome"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Utilisez une vue partiel pour le bouton d'action et le bouton de retour vers la liste des actions suivantes: (",(0,i.kt)("strong",{parentName:"li"},"ATTENTION"),": Il faut utiliser ces vues partielles pour les pages de ",(0,i.kt)("strong",{parentName:"li"},"Trainer")," et ",(0,i.kt)("strong",{parentName:"li"},"Speciality"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create"),(0,i.kt)("li",{parentName:"ul"},"Save"),(0,i.kt)("li",{parentName:"ul"},"Delete"))),(0,i.kt)("li",{parentName:"ol"},"Maintenant que vos boutons d'actions sont r\xe9utilis\xe9s dans vos diff\xe9rentes vues, utilisez FontAwesome pour les boutons suivants:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/plus.svg",width:"20",height:"20"})," pour Create"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/floppy-disk.svg",width:"20",height:"20"})," pour Save"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/trash.svg",width:"20",height:"20"})," pour Delete"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-left.svg",width:"20",height:"20"})," pour Back to List"))),(0,i.kt)("li",{parentName:"ol"},"Si vos boutons sont trop pr\xe8s des autres champs, donnez leur un peu d'espace!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image Reference",src:a(694).Z,width:"261",height:"133"}),"\n\u274c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image Reference",src:a(6676).Z,width:"261",height:"135"}),"\n\ud83d\udc4c"),(0,i.kt)(l.ZP,{mdxType:"CommentCommitPush"}),(0,i.kt)("h2",{id:"ajout-de-clients-et-de-leurs-objectifs"},"Ajout de clients et de leurs objectifs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mettez en place le mod\xe8le de donn\xe9e pour les clients (",(0,i.kt)("strong",{parentName:"li"},"Customer"),") et leurs objectifs (",(0,i.kt)("strong",{parentName:"li"},"Objective"),")")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image Reference",src:a(1317).Z,width:"430",height:"242"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Customer"',title:'"Customer"'},"public string FirstName { get; set; }\npublic string LastName { get; set; }\npublic string Email { get; set; }\npublic DateTime BirthDate { get; set; }\npublic double StartWeight { get; set; }\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image Reference",src:a(5271).Z,width:"435",height:"221"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Objective"',title:'"Objective"'},"public string Name { get; set; }\npublic double LostWeightKg { get; set; }\npublic double DistanceKm { get; set; }\npublic DateTime AchievedDate { get; set; }\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Un ",(0,i.kt)("strong",{parentName:"li"},"Customer")," a donc une relation ",(0,i.kt)("strong",{parentName:"li"},"un \xe0 plusieurs")," avec ses ",(0,i.kt)("strong",{parentName:"li"},"Objective"),". La seule chose qui diff\xe9rencie l'objectif courant, c'est qu'il n'a pas d'",(0,i.kt)("strong",{parentName:"li"},"AchievedDate"),"."),(0,i.kt)("li",{parentName:"ol"},"Ajouter un seed \ud83c\udf31 avec un ",(0,i.kt)("strong",{parentName:"li"},"Customer")," et son ",(0,i.kt)("strong",{parentName:"li"},"Objective")," courant et un ",(0,i.kt)("strong",{parentName:"li"},"Objective")," compl\xe9t\xe9 et un ",(0,i.kt)("strong",{parentName:"li"},"Trainer")," associ\xe9."),(0,i.kt)("li",{parentName:"ol"},"N'oubliez pas d'ajouter votre migration et de mettre \xe0 jour votre base de donn\xe9es."),(0,i.kt)("li",{parentName:"ol"},"Une fois que c'est fait, v\xe9rifiez les donn\xe9es dans votre base de donn\xe9es!")),(0,i.kt)(l.ZP,{mdxType:"CommentCommitPush"}),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Une fois que vous avez termin\xe9 votre TP, il est temps de merger votre branche ",(0,i.kt)("strong",{parentName:"p"},"TP1")," dans votre branche ",(0,i.kt)("strong",{parentName:"p"},"Main"),".")),(0,i.kt)("h2",{id:"grille-de-correction"},"Grille de correction"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"T\xe2che"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Nb Points"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Mise en place du projet initial"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Gestion des sp\xe9cialit\xe9s"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Gestion des entra\xeeneurs"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Logique d'affaire"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Utilisation de vues partielles"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Utilisation de FontAwesome"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Ajout de clients et de leurs objectifs"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Consignes Git (branches/commits/push)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Total")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"/15"))))))}N.isMDXComponent=!0},7159:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/TP1_FichiersComplementaires-43b96036e69c26cc1d28fff0a1ddfd67.zip"},4933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ReferenceProjet-b15013bd088a0a1c2bf6932ccef4124e.png"},3907:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deleteSpecialityError-741c401582f154cf535c3644ce8ef023.png"},1317:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diagrammeCustomer-6ee6eb9acb97984f8911294ffeb982eb.png"},5271:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diagrammeObjective-701eae8fea2e5b401518857edcd209ac.png"},5118:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diagrammeSpeciality-8987567d080f0e5cd33eb93ed3aa0cb0.png"},1363:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diagrammeTrainer-95591dcdd3d4340f5ca9000e89716016.png"},6676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rightMargin-c7e3eb4150cc4619bec947d378865c3a.png"},694:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wrongMargin-a3ef021e2a97b7f7dbea7ffbdb7f06b0.png"}}]);