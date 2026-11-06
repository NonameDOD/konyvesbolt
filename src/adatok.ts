export interface konyvTipus {
    id: number;
    cim: string;
    szerzo: string;
    ar: number;
    darabszam: number;
}

export const adatok : konyvTipus[] = [
  {
    id: 1,
    cim: "A Pál utcai fiúk",
    szerzo: "Molnár Ferenc",
    ar: 3500,
    darabszam: 10
  },
  {
    id: 2,
    cim: "Egri csillagok",
    szerzo: "Gárdonyi Géza",
    ar: 4200,
    darabszam: 5
  },
  {
    id: 3,
    cim: "Tüskevár",
    szerzo: "Fekete István",
    ar: 3000,
    darabszam: 8
  },
  {
    id: 4,
    cim: "Abigél",
    szerzo: "Szabó Magda",
    ar: 3900,
    darabszam: 7
  },
  {
    id: 5,
    cim: "Légy jó mindhalálig",
    szerzo: "Móricz Zsigmond",
    ar: 3600,
    darabszam: 6
  }
];