export interface ProjectImage {
  url: string;
  alt: string;
  isBefore?: boolean | null;
  isAfter?: boolean | null;
}

export interface Project {
  slug: string;
  title: string;
  city: string;
  area: string;
  description: string;
  worksDone: string[];
  mainImage: ProjectImage;
  images: ProjectImage[];
  beforeImage?: ProjectImage | null;
  afterImage?: ProjectImage | null;
}

export const projects: Project[] = [
  {
    slug: "6m2-vonios-remontas-klaipeda",
    title: "6 m² vonios remontas Klaipėdoje",
    city: "Klaipėda",
    area: "6 m²",
    description:
      "Pilnas 6 m² vonios kambario remontas: nuo senos apdailos griovimo iki galutinės santechnikos montavimo. Įrengta dušo zona su 120×60 cm plytelėmis, potinkinis WC ir naujas vandentiekis.",
    worksDone: [
      "Senos apdailos ir plytelių demontavimas",
      "Vandentiekio ir kanalizacijos keitimas",
      "Grindų betonavimas ir pagrindų paruošimas",
      "Hidroizoliacija",
      "Potinkinio WC konstrukcijų apsiuvimas",
      "120×60 cm plytelių klijavimas",
      "Fugavimas ir silikoniniai siūlai",
      "Potinkinio WC montavimas",
      "Praustuvo ir gyvatuko montavimas",
      "Dušo trapo montavimas",
      "Lubų glaistymas ir dažymas",
    ],
    mainImage: {
      url: "/assets/projects/p1-main.jpg",
      alt: "6 m² vonios remontas Klaipėdoje – galutinis rezultatas su 120x60 cm plytelėmis",
    },
    images: [
      {
        url: "/assets/projects/p1-1.jpg",
        alt: "Vonios dušo zona po remonto",
      },
      {
        url: "/assets/projects/p1-2.jpg",
        alt: "Potinkinis WC ir praustuvas",
      },
    ],
    beforeImage: {
      url: "/assets/projects/p1-before.jpg",
      alt: "Vonia prieš remontą – senos plytelės ir pasenęs vandentiekis",
      isBefore: true,
    },
    afterImage: {
      url: "/assets/projects/p1-after.jpg",
      alt: "Vonia po remonto – moderni apdaila su didelėmis plytelėmis",
      isAfter: true,
    },
  },
  {
    slug: "8m2-vonios-remontas-klaipeda",
    title: "8 m² vonios remontas Klaipėdoje",
    city: "Klaipėda",
    area: "8 m²",
    description:
      "Erdvus 8 m² vonios kambarys su atskira dušo zona ir vonia. Įrengtos 60×120 cm formato plytelės, pilnas vamzdynų keitimas ir elektros instaliacija.",
    worksDone: [
      "Griovimo darbai ir demontavimas",
      "Pilnas vamzdynų keitimas",
      "Elektros instaliacija vonios patalpose",
      "Štrabų paruošimas ir užbetonavimas",
      "Hidroizoliacija",
      "Gipso kartono konstrukcijos",
      "Didelio formato plytelių klijavimas",
      "Vonios ir dušo kabinos montavimas",
      "Potinkinio WC montavimas",
      "Apšvietimo montavimas",
    ],
    mainImage: {
      url: "/assets/projects/p2-main.jpg",
      alt: "8 m² vonios remontas Klaipėdoje – erdvi vonia su dušo zona",
    },
    images: [
      {
        url: "/assets/projects/p2-1.jpg",
        alt: "Vonios zona su moderniomis plytelėmis",
      },
      {
        url: "/assets/projects/p2-2.jpg",
        alt: "Dušo zona ir armatūra",
      },
    ],
  },
  {
    slug: "5m2-vonios-irengas-gargzdai",
    title: "5 m² vonios įrengimas Gargžduose",
    city: "Gargždai",
    area: "5 m²",
    description:
      "Kompaktiškas, bet funkcionalus 5 m² vonios kambario įrengimas Gargžduose. Visas darbas atliktas per 10 darbo dienų, nuo griovimo iki galutinių detalių.",
    worksDone: [
      "Senos apdailos demontavimas",
      "Santechnikos demontavimas",
      "Grindų betonavimas",
      "Hidroizoliacija",
      "Plytelių klijavimas",
      "Fugavimas",
      "Vandentiekio montavimas",
      "WC ir praustuvo montavimas",
      "Dušo trapo montavimas",
      "Lubų dažymas",
    ],
    mainImage: {
      url: "/assets/projects/p3-main.jpg",
      alt: "5 m² vonios įrengimas Gargžduose – kompaktiška ir moderni vonia",
    },
    images: [
      {
        url: "/assets/projects/p3-1.jpg",
        alt: "Dušo zona su trapas",
      },
    ],
    beforeImage: {
      url: "/assets/projects/p3-before.jpg",
      alt: "Vonios kambarys prieš remontą",
      isBefore: true,
    },
    afterImage: {
      url: "/assets/projects/p3-after.jpg",
      alt: "Vonios kambarys po remonto",
      isAfter: true,
    },
  },
  {
    slug: "7m2-vonios-remontas-klaipeda-2",
    title: "7 m² vonios remontas su niša Klaipėdoje",
    city: "Klaipėda",
    area: "7 m²",
    description:
      "Modernus 7 m² vonios remontas su sienine niša dušo zonoje ir potinkiniu WC. Naudotos 60×60 cm formato plytelės su metaliniu dekoru.",
    worksDone: [
      "Griovimo ir demontavimo darbai",
      "Santechnikos keitimas",
      "Niše formavimas sienoje",
      "Potinkinio WC konstrukcijų apsiuvimas",
      "Hidroizoliacija",
      "60×60 cm plytelių klijavimas",
      "Dekoratyvinės juostos montavimas",
      "Fugavimas ir silikonas",
      "Potinkinio WC montavimas",
      "Gyvatuko montavimas",
    ],
    mainImage: {
      url: "/assets/projects/p4-main.jpg",
      alt: "7 m² vonios remontas su niša Klaipėdoje",
    },
    images: [
      {
        url: "/assets/projects/p4-1.jpg",
        alt: "Dušo niša ir armatūra",
      },
      {
        url: "/assets/projects/p4-2.jpg",
        alt: "WC zona ir praustuvas",
      },
    ],
  },
  {
    slug: "vonios-remontas-palanga",
    title: "4,5 m² vonios remontas Palangoje",
    city: "Palanga",
    area: "4,5 m²",
    description:
      "Kompaktiška 4,5 m² vonia vasarnamyje Palangoje. Greitai, kokybiškai, su pilna santechnika ir plytelių apdaila. Visas ciklas – 8 darbo dienos.",
    worksDone: [
      "Griovimas ir demontavimas",
      "Vamzdynų keitimas",
      "Hidroizoliacija",
      "Plytelių klijavimas",
      "Fugavimas",
      "WC ir praustuvo montavimas",
      "Dušo trapo montavimas",
      "Lubų dažymas",
    ],
    mainImage: {
      url: "/assets/projects/p5-main.jpg",
      alt: "Vonios remontas Palangoje – kompaktiška ir funkcionali vonia",
    },
    images: [
      {
        url: "/assets/projects/p5-1.jpg",
        alt: "Vonios dušo zona",
      },
    ],
  },
  {
    slug: "9m2-erdvi-vonia-klaipeda",
    title: "9 m² erdvi vonia Klaipėdoje",
    city: "Klaipėda",
    area: "9 m²",
    description:
      "Didžiausias šių metų projektas – erdvi 9 m² vonia su vonia-sūkurine, atskira dušo kabina ir dviguba praustuvų zona. Pilnas elektros ir santechnikos įrengimas.",
    worksDone: [
      "Pilnas demontavimas",
      "Pilnas vamzdynų keitimas",
      "Elektros instaliacija",
      "Grindų betonavimas",
      "Hidroizoliacija",
      "Gipso kartono konstrukcijos",
      "Didelio formato plytelių klijavimas",
      "Vonios montavimas",
      "Dušo kabinos montavimas",
      "Dvigubo praustuvo montavimas",
      "Potinkinio WC montavimas",
      "Apšvietimo montavimas",
      "Lubų glaistymas ir dažymas",
    ],
    mainImage: {
      url: "/assets/projects/p6-main.jpg",
      alt: "9 m² erdvi vonia Klaipėdoje – premium remontas su didelėmis plytelėmis",
    },
    images: [
      {
        url: "/assets/projects/p6-1.jpg",
        alt: "Vonios zona su sūkurine",
      },
      {
        url: "/assets/projects/p6-2.jpg",
        alt: "Dušo kabina ir dvigubas praustuvas",
      },
      {
        url: "/assets/projects/p6-3.jpg",
        alt: "Bendrasis vonios kambario vaizdas",
      },
    ],
    beforeImage: {
      url: "/assets/projects/p6-before.jpg",
      alt: "9 m² vonia prieš remontą",
      isBefore: true,
    },
    afterImage: {
      url: "/assets/projects/p6-after.jpg",
      alt: "9 m² vonia po remonto",
      isAfter: true,
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
