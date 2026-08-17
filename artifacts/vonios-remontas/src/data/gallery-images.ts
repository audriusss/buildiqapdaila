export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  /** true = taller card in the editorial grid */
  featured?: boolean;
}

/**
 * Real completed-work photos from different finished jobs.
 * Not attributed to any specific project, city, size, or address.
 * Alt texts and descriptions are based only on what is visibly shown.
 */
export const galleryImages: GalleryImage[] = [
  {
    url: "/assets/projects/betono-efekto-duso-zona-wc.webp",
    alt: "Pilkos betono efekto didelio formato plytelės vonios sienose, stiklinė dušo pertvara ir chromuotas rankšluosčių džiovintuvas",
    category: "APDAILA",
    title: "Betono efekto plytelių apdaila",
    description:
      "Pilkos betono imitacijos didelio formato plytelės sienoms ir grindims. Stiklinė dušo pertvara ir chromuotas rankšluosčių džiovintuvas papildo vientisą apdailą.",
    featured: true,
  },
  {
    url: "/assets/projects/tamsi-vonia-apvalus-veidrodis.jpg",
    alt: "Tamsi vonios apdaila su didelėmis pilkomis plytelėmis, dviem apvaliais LED veidrodžiais ir stiklinėmis dušo durimis",
    category: "APDAILA",
    title: "Tamsi apdaila su apvaliais LED veidrodžiais",
    description:
      "Tamsios pilkos plytelės, du apvalūs LED veidrodžiai ir stiklinė dušo durys. Vientisas ir ramus vonios interjeras.",
  },
  {
    url: "/assets/projects/marmuro-plyteles-duso-zona-01.webp",
    alt: "Balto marmuro efekto didelio formato plytelės su juodų metalinių rėmų stikline dušo pertvara ir medienos imitacijos grindimis",
    category: "PLYTELĖS",
    title: "Marmuro efekto plytelės su juodais rėmais",
    description:
      "Balto marmuro imitacijos didelio formato plytelės sienoms, juodų metalinių rėmų dušo pertvara ir medienos imitacijos grindys.",
    featured: true,
  },
  {
    url: "/assets/projects/marmuro-plyteles-duso-zona-02.webp",
    alt: "Marmuro efekto plytelių sienos vonios kambaryje su juoda dušo sistema ir medienos imitacijos grindimis",
    category: "DUŠO ZONA",
    title: "Dušo zona su juoda dušo sistema",
    description:
      "Marmuro imitacijos plytelėmis išklota dušo zona su juoda dušo sistema ir medinės imitacijos vonios baldais.",
  },
  {
    url: "/assets/projects/duso-trapas-beige-plyteles.webp",
    alt: "Šviesiomis smėlio spalvos plytelėmis įrengta dušo zona su linijiniu dušo trapu ir stikline pertvara",
    category: "DUŠO ZONA",
    title: "Dušo zona su linijiniu trapu",
    description:
      "Šviesiomis smėlio spalvos plytelėmis išklota dušo zona su įmontuotu linijiniu trapu ir stikline dušo pertvara.",
  },
  {
    url: "/assets/projects/vonios-apdaila-veidrodis-radiatorius.webp",
    alt: "Pilkos betono imitacijos plytelės vonios kambaryje su apšviestu veidrodžiu ir baltu šildomu rankšluosčių džiovintuvu",
    category: "SANTECHNIKA",
    title: "Šildomasis rankšluosčių džiovintuvas",
    description:
      "Pilkos betono imitacijos plytelės, baltas šildomasis džiovintuvas ir apšviestas veidrodis – praktiškas ir tvarkingas vonios erdvės sprendimas.",
  },
  {
    url: "/assets/projects/pilkas-vonios-remontas-kompaktiskas.webp",
    alt: "Kompaktiškas vonios kambarys su pilkomis plytelėmis, stikline dušo zona, pakabinama kriaukle ir šildomu rankšluosčių džiovintuvu",
    category: "APDAILA",
    title: "Kompaktiška vonios erdvė",
    description:
      "Pilkų plytelių fone – stiklinė dušo zona, pakabinama kriauklė ir chromuotas rankšluosčių džiovintuvas kompaktiškame vonios kambaryje.",
    featured: true,
  },
  {
    url: "/assets/projects/balta-vonia-potinkinis-wc-led.webp",
    alt: "Balta vonios kambario apdaila su LED juostos lubų apšvietimu, stikline dušo pertvara ir pakabinamu WC",
    category: "APDAILA",
    title: "Balta vonia su LED lubų apšvietimu",
    description:
      "Balta vonios kambario apdaila su LED juostos šviestuvais lubose, stiklinė dušo pertvara ir pakabinamas WC.",
  },
  {
    url: "/assets/projects/marmuro-plyteles-potinkinis-wc-01.webp",
    alt: "Vonios kambarys su balto marmuro efekto plytelėmis, pakabinamu WC, medinės imitacijos spintelės frontu ir LED veidrodžiu",
    category: "POTINKINIS WC",
    title: "Potinkinis WC marmuro efekto plytelėse",
    description:
      "Pakabinamas potinkinis WC integruotas į marmuro efekto plytelėmis apdailintą sieną. Šalia – medinės imitacijos spintelė ir LED veidrodis.",
    featured: true,
  },
  {
    url: "/assets/projects/pilkos-plyteles-potinkinis-wc.webp",
    alt: "Pilkų marmuro tekstūros plytelių sienos su pakabinamu WC, chromuotu nuleidimo mygtuku ir juodu bangų formos rankšluosčių džiovintuvu",
    category: "POTINKINIS WC",
    title: "Potinkinis WC pilkose marmuro plytelėse",
    description:
      "Pilkų marmuro tekstūros plytelės, potinkinis WC su chromuotu nuleidimo mygtuku ir juodas bangų formos rankšluosčių džiovintuvas.",
  },
  {
    url: "/assets/projects/juodos-plyteles-potinkinis-wc.webp",
    alt: "Tamsiai pilkų marmuro efekto didelių plytelių vonios sienos su pakabinamu WC ir chromuotu nuleidimo skydeliu",
    category: "PLYTELĖS",
    title: "Tamsios marmuro efekto plytelės",
    description:
      "Tamsiai pilkos marmuro efekto didelio formato plytelės iš grindų iki lubų suteikia vonios kambariui dramatišką ir modernų charakterį.",
  },
  {
    url: "/assets/projects/laisva-vonia-dekoratyvines-plyteles.jpg",
    alt: "Laisvai stovinti vonia su atskirai stovinčiu grindų čiaupu, tamsaus tono grindų plytelėmis ir dekoratyvinėmis plytų imitacijos plytelėmis aplink langą",
    category: "VONIA",
    title: "Laisvai stovinti vonia",
    description:
      "Laisvai stovinti vonia su atskirai stovinčiu grindų čiaupu ir dekoratyvinėmis plytų imitacijos plytelėmis aplink lango nišą.",
    featured: true,
  },
  {
    url: "/assets/projects/erdvi-vonia-laisva-vonia-dark.webp",
    alt: "Erdvus vonios kambarys su tamsiai pilkomis grindų plytelėmis, laisvai stovinčia vonia ir pakabinama kriaukle ant tamsios spintelės",
    category: "VONIA",
    title: "Erdvus vonios kambarys su laisva vonia",
    description:
      "Erdvus vonios kambarys su tamsiai pilkomis didelėmis grindų plytelėmis, laisvai stovinčia vonia ir pakabinama kriaukle ant tamsios spintelės.",
  },
];
