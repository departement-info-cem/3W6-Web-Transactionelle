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
  { label: "1.1 - Rencontre", id: "cours/rencontre1.1", customProps: { tooltip: "visible" } },
  { label: "1.2 - Rencontre", id: "cours/rencontre1.2", customProps: { tooltip: "visible" } },
  { label: "2.1 - Rencontre", id: "cours/rencontre2.1", customProps: { tooltip: "visible" } },
  { label: "2.2 - Rencontre", id: "cours/rencontre2.2", customProps: { tooltip: "visible" } },
  { label: "3.1 - Rencontre", id: "cours/rencontre3.1", customProps: { avancementLabel: "TP1 - Crée", avancement: 0.0 } },
  { label: "3.2 - Rencontre", id: "cours/rencontre3.2", customProps: { avancementLabel: "TP1", avancement: 0.25 } },
  { label: "4.1 - Rencontre", id: "cours/rencontre4.1", customProps: { avancementLabel: "TP1", avancement: 0.50 } },
  { label: "4.2 - Rencontre", id: "cours/rencontre4.2", customProps: { avancementLabel: "TP1", avancement: 0.75 } },
  { label: "5.1 - Rencontre", id: "cours/rencontre5.1", customProps: { avancementLabel: "TP2 - Créé", avancement: 0.0 }, className: "remise-tp1" },
  { label: "5.2 - Rencontre", id: "cours/rencontre5.2", customProps: { avancementLabel: "TP2", avancement: 0.1 } },
  { label: "6.1 - Rencontre", id: "cours/rencontre6.1", customProps: { avancementLabel: "TP2", avancement: 0.3 } },
  { label: "6.2 - Rencontre", id: "cours/rencontre6.2", customProps: { avancementLabel: "TP2", avancement: 0.4 } },
  { label: "7.1 - Rencontre", id: "cours/rencontre7.1", customProps: {}, className: "examen" },
  { label: "7.2 - Rencontre", id: "cours/rencontre7.2", customProps: { avancementLabel: "TP2", avancement: 0.4 } },
  { label: "8.1 - Rencontre", id: "cours/rencontre8.1", customProps: { avancementLabel: "TP2", avancement: 0.6 } },
  { label: "8.2 - Rencontre", id: "cours/rencontre8.2", customProps: { avancementLabel: "TP2", avancement: 0.7 } },
  { label: "9.1 - Rencontre", id: "cours/rencontre9.1", customProps: { avancementLabel: "TP2", avancement: 1 }, className: "remise-tp2" },
  { label: "9.2 - Rencontre", id: "cours/rencontre9.2", customProps: { tooltip: "visible" } },
  { label: "10.1 - Rencontre", id: "cours/rencontre10.1", customProps: { avancementLabel: "TP3 - Créé", avancement: 0.0 } },
  { label: "10.2 - Rencontre", id: "cours/rencontre10.2", customProps: { avancementLabel: "TP3", avancement: 0.1 } },
  { label: "11.1 - Rencontre", id: "cours/rencontre11.1", customProps: { avancementLabel: "TP3", avancement: 0.2 } },
  { label: "11.2 - Rencontre", id: "cours/rencontre11.2", customProps: { avancementLabel: "TP3", avancement: 0.3 } },
  { label: "12.1 - Rencontre", id: "cours/rencontre12.1", customProps: { avancementLabel: "TP3", avancement: 0.4 } },
  { label: "12.2 - Rencontre", id: "cours/rencontre12.2", customProps: { avancementLabel: "TP3", avancement: 0.5 } },
  { label: "13.1 - Rencontre", id: "cours/rencontre13.1", customProps: { avancementLabel: "TP3", avancement: 0.6 } },
  { label: "13.2 - Rencontre", id: "cours/rencontre13.2", customProps: { avancementLabel: "TP3", avancement: 0.7 } },
  { label: "14.1 - Rencontre", id: "cours/rencontre14.1", customProps: { avancementLabel: "TP3", avancement: 0.8 } },
  { label: "14.2 - Rencontre", id: "cours/rencontre14.2", customProps: { avancementLabel: "TP3", avancement: 1 } },
  { label: "15.1 - Rencontre", id: "cours/rencontre15.1", customProps: {}, className: "remise-tp3" },
  { label: "15.2 - Rencontre", id: "cours/rencontre15.2", customProps: {}, className: "examen" },
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
