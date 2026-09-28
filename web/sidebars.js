// @ts-check
const dates1010 = [
  "2026-08-25",
  "2026-09-01",
  "2026-09-03",
  "2026-09-08",
  "2026-09-10",
  "2026-09-15",
  "2026-09-17",
  "2026-09-22",
  "2026-09-24",
  "2026-09-29",
  "2026-10-01",
  "2026-10-08",
  "2026-10-20",
  "2026-10-22",
  "2026-10-27",
  "2026-10-29",
  "2026-11-03",
  "2026-11-05",
  "2026-11-10",
  "2026-11-12",
  "2026-11-17",
  "2026-11-19",
  "2026-11-24",
  "2026-11-26",
  "2026-12-01",
  "2026-12-03",
  "2026-12-08",
  "2026-12-17",
  "2026-12-22",
  "2026-12-24",
];

const dates1030 = [
  "2026-08-26",
  "2026-08-28",
  "2026-09-02",
  "2026-09-04",
  "2026-09-09",
  "2026-09-11",
  "2026-09-16",
  "2026-09-18",
  "2026-09-23",
  "2026-09-25",
  "2026-09-30",
  "2026-10-02",
  "2026-10-07",
  "2026-10-09",
  "2026-10-21",
  "2026-10-23",
  "2026-10-28",
  "2026-10-30",
  "2026-11-04",
  "2026-11-06",
  "2026-11-13",
  "2026-11-18",
  "2026-11-20",
  "2026-11-25",
  "2026-11-27",
  "2026-12-02",
  "2026-12-04",
  "2026-12-09",
  "2026-12-11",
  "2026-12-23",
];

/** @type {Array<{label: string, id: string, customProps: Record<string, any>, className?: string}>} */
const docs = [
  { label: "1.1 - Plan de cours, Git et projets MVC", id: "cours/rencontre1.1", customProps: { tooltip: "visible" } },
  { label: "1.2 - Vues, ViewModels et validation", id: "cours/rencontre1.2", customProps: { tooltip: "visible" } },
  { label: "2.1 - Modélisation BD et UML", id: "cours/rencontre2.1", customProps: { tooltip: "visible" } },
  { label: "2.2 - ORM et Entity Framework", id: "cours/rencontre2.2", customProps: { tooltip: "visible" } },
  { label: "3.1 - Présentation du TP1", id: "cours/rencontre3.1", customProps: { avancementLabel: "TP1 - Crée", avancement: 0.0 } },
  { label: "3.2 - LINQ et seed de la BD", id: "cours/rencontre3.2", customProps: { avancementLabel: "TP1", avancement: 0.25 } },
  { label: "4.1 - Chargement Eager/Lazy et CRUD", id: "cours/rencontre4.1", customProps: { avancementLabel: "TP1", avancement: 0.50 } },
  { label: "4.2 - Vues partielles et ViewModels", id: "cours/rencontre4.2", customProps: { avancementLabel: "TP1", avancement: 0.75 } },
  { label: "5.1 - Présentation du TP2", id: "cours/rencontre5.1", customProps: { avancementLabel: "TP2 - Créé", avancement: 0.0 }, className: "remise-tp1" },
  { label: "5.2 - Méthodes asynchrones et génération de vues", id: "cours/rencontre5.2", customProps: { avancementLabel: "TP2", avancement: 0.1 } },
  { label: "6.1 - Diagrammes BD et laboratoire de révision", id: "cours/rencontre6.1", customProps: { avancementLabel: "TP2", avancement: 0.3 } },
  { label: "6.2 - Révision pour l'examen intra", id: "cours/rencontre6.2", customProps: { avancementLabel: "TP2", avancement: 0.4 } },
  { label: "7.1 - Examen intra", id: "cours/rencontre7.1", customProps: {}, className: "examen" },
  { label: "7.2 - Travail sur le TP2", id: "cours/rencontre7.2", customProps: { avancementLabel: "TP2", avancement: 0.4 } },
  { label: "8.1 - Retour sur l'intra, images et Toastr", id: "cours/rencontre8.1", customProps: { avancementLabel: "TP2", avancement: 0.6 } },
  { label: "8.2 - Injection de dépendances", id: "cours/rencontre8.2", customProps: { avancementLabel: "TP2", avancement: 0.7 } },
  { label: "9.1 - Services et génériques", id: "cours/rencontre9.1", customProps: { avancementLabel: "TP2", avancement: 1 }, className: "remise-tp2" },
  { label: "9.2 - Introduction à JavaScript", id: "cours/rencontre9.2", customProps: { tooltip: "visible" } },
  { label: "10.1 - Introduction à jQuery", id: "cours/rencontre10.1", customProps: { avancementLabel: "TP3 - Créé", avancement: 0.0 } },
  { label: "10.2 - Présentation du TP3", id: "cours/rencontre10.2", customProps: { avancementLabel: "TP3", avancement: 0.1 } },
  { label: "11.1 - AJAX (partie 1)", id: "cours/rencontre11.1", customProps: { avancementLabel: "TP3", avancement: 0.2 } },
  { label: "11.2 - AJAX (partie 2)", id: "cours/rencontre11.2", customProps: { avancementLabel: "TP3", avancement: 0.3 } },
  { label: "12.1 - Internationalisation : concepts et modèles", id: "cours/rencontre12.1", customProps: { avancementLabel: "TP3", avancement: 0.4 } },
  { label: "12.2 - Internationalisation : vues et ViewModels", id: "cours/rencontre12.2", customProps: { avancementLabel: "TP3", avancement: 0.5 } },
  { label: "13.1 - Travail sur le TP3", id: "cours/rencontre13.1", customProps: { avancementLabel: "TP3", avancement: 0.6 } },
  { label: "13.2 - Aide et rattrapage des laboratoires", id: "cours/rencontre13.2", customProps: { avancementLabel: "TP3", avancement: 0.7 } },
  { label: "14.1 - Révision de fin de session", id: "cours/rencontre14.1", customProps: { avancementLabel: "TP3", avancement: 0.8 } },
  { label: "14.2 - Préparation à l'examen final", id: "cours/rencontre14.2", customProps: { avancementLabel: "TP3", avancement: 1 } },
  { label: "15.1 - Examen final", id: "cours/rencontre15.1", customProps: {}, className: "remise-tp3" },
  { label: "15.2 - Travail et remise du TP3", id: "cours/rencontre15.2", customProps: {}, className: "examen" },
];

/** @param {string} date1010 @param {string} date1030 */
function creerCalendrier(date1010, date1030) {
  return {
    "Valérie": [{ "1010": date1010 }, { "1020": date1010 }],
    "Tommy": [{ "1030": date1030 }],
  };
}

/** @param {{label: string, id: string, customProps: Record<string, any>, className?: string}} doc @param {number} index */
function creerEntree(doc, index) {
  return {
    type: "doc",
    label: doc.label,
    id: doc.id,
    customProps: {
      calendrier: creerCalendrier(dates1010[index], dates1030[index]),
      ...(doc.customProps ?? {}),
    },
    ...(doc.className ? { className: doc.className } : {}),
  };
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: /** @type {any} */ (docs.map(creerEntree)),
  tp: [
    {
      type: "autogenerated",
      dirName: "02-tp",
    },
  ],
  autres: [
    {
      type: "autogenerated",
      dirName: "03-autres",
    },
  ],
};

module.exports = sidebars;
