import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { ArrowLeft, Phone } from "lucide-react";

interface SeoPageProps {
  title: string;
  h1: string;
  description: string;
  content: React.ReactNode;
  slug: string;
}

export default function SeoPage({ title, h1, description, content, slug }: SeoPageProps) {
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        path={`/${slug}`}
      />

      <article className="pt-32 pb-24 bg-background min-h-[80vh]">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground mb-10 group transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Grįžti į pagrindinį
          </Link>

          {/* Page header */}
          <div className="mb-14">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">{h1}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-16
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-headings:font-serif prose-headings:font-normal prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-li:text-muted-foreground
            prose-strong:text-foreground prose-strong:font-medium
            prose-ol:text-muted-foreground">
            {content}
          </div>

          {/* CTA block */}
          <div className="border border-white/8 bg-[#111111] p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-serif mb-3">Reikalinga konsultacija?</h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-md">
              Susisiekite dėl nemokamos konsultacijos ir preliminarios sąmatos Jūsų objektui Klaipėdos regione.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+37067496909"
                className="inline-flex items-center justify-center gap-2 px-6 h-11 border border-white/15 text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                +370 674 96909
              </a>
              <Link
                href="/#susisiekti"
                className="inline-flex items-center justify-center px-6 h-11 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Gauti pasiūlymą
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

// ── SEO pages data ──────────────────────────────────────────────────────────
export const seoPagesData: Record<string, Omit<SeoPageProps, "slug">> = {
  "vonios-remontas-klaipeda": {
    title: "Vonios remontas Klaipėda",
    h1: "Profesionalus vonios remontas Klaipėdoje",
    description: "Pilnas vonios kambario įrengimas nuo A iki Z. Visi darbai iš vienų rankų. Kokybės garantija ir ilgametė patirtis.",
    content: (
      <>
        <p>Vonios kambarys – tai ramybės ir atsipalaidavimo oazė Jūsų namuose. Profesionalus <strong>vonios remontas Klaipėdoje</strong> reikalauja specifinių žinių ir patirties, kadangi tai pati drėgniausia ir sudėtingiausia patalpa visame būste.</p>
        <h2>Visi darbai iš vienų rankų</h2>
        <p>Pasirinkę mano paslaugas, Jums nereikės ieškoti atskirų meistrų santechnikai, elektrai ir apdailai. Atlieku visus darbus kompleksiškai:</p>
        <ul>
          <li>Senos apdailos ir santechnikos demontavimas, šiukšlių išvežimas.</li>
          <li>Vandentiekio ir kanalizacijos vamzdynų keitimas, potinkinių sistemų montavimas.</li>
          <li>Elektros instaliacijos atnaujinimas, šildomų grindų įrengimas.</li>
          <li>Sienų lyginimas, hidroizoliacijos įrengimas.</li>
          <li>Plytelių klijavimas (įskaitant didelio formato plyteles).</li>
          <li>Galutinis santechnikos prietaisų ir baldų montavimas.</li>
        </ul>
        <p>Dirbu tvarkingai, laikydamasis technologinių reikalavimų, todėl rezultatas džiugins ilgus metus.</p>
      </>
    ),
  },
  "kapitalinis-vonios-remontas": {
    title: "Kapitalinis vonios remontas",
    h1: "Kapitalinis vonios remontas",
    description: "Pilnas kapitalinis vonios kambario remontas nuo griovimo ir vamzdynų keitimo iki plytelių klijavimo, santechnikos ir galutinės apdailos.",
    content: (
      <>
        <p><strong>Kapitalinis vonios remontas</strong> – tai pilnas senos vonios kambario atnaujinimas, kai keičiama ne tik apdaila, bet ir paslėptos inžinerinės sistemos. Darbai planuojami kompleksiškai, kad nereikėtų atskirai ieškoti griovėjų, santechnikų, elektrikų ir apdailininkų.</p>

        <h2>Ką apima kapitalinis vonios remontas?</h2>
        <ul>
          <li>Senų plytelių, santechnikos ir nereikalingų konstrukcijų demontavimas.</li>
          <li>Vandentiekio ir kanalizacijos vamzdynų keitimas bei taškų perkėlimas.</li>
          <li>Potinkinio WC, dušo trapo, dušo sistemos ir kitų santechnikos mazgų įrengimas.</li>
          <li>Elektros instaliacijos atnaujinimas, rozečių, apšvietimo ir grindinio šildymo paruošimas.</li>
          <li>Sienų ir grindų lyginimas, betonavimas ir pagrindų paruošimas.</li>
          <li>Vonios bei dušo zonų hidroizoliacija.</li>
          <li>Keraminių ir didelio formato plytelių klijavimas.</li>
          <li>Lubų, gipso konstrukcijų ir kitų apdailos elementų įrengimas.</li>
          <li>WC, praustuvo, vonios, dušo kabinos, gyvatuko, maišytuvų ir baldų montavimas.</li>
        </ul>

        <h2>Kapitalinis remontas ar dalinis atnaujinimas?</h2>
        <p>Kapitalinis remontas dažniausiai pasirenkamas senesnės statybos būstuose, kai vamzdynai, kanalizacija, elektros instaliacija ar pagrindai jau yra susidėvėję. Tokiu atveju vien naujų plytelių užklijavimas problemos neišsprendžia – patikimam rezultatui atnaujinami visi svarbiausi sluoksniai ir mazgai.</p>

        <h2>Nuo ko priklauso kapitalinio vonios remonto kaina?</h2>
        <p>Kainą lemia patalpos dydis, griovimo apimtis, esamų sienų ir grindų būklė, santechnikos taškų perkėlimas, pasirinktas dušo ar vonios sprendimas, plytelių formatas, elektros darbai ir pasirinktos medžiagos. Tiksli sąmata pateikiama įvertinus konkretų objektą ir planuojamus darbus.</p>

        <p>Kapitalinį vonios remontą atlieku kompleksiškai – nuo pirmojo griovimo iki galutinio santechnikos sumontavimo ir paruoštos naudoti vonios.</p>
      </>
    ),
  },
  "gyvatuko-keitimas": {
    title: "Gyvatuko keitimas ir montavimas",
    h1: "Gyvatuko keitimas ir montavimas",
    description: "Vonios gyvatuko keitimas ir montavimas. Seno rankšluosčių džiovintuvo demontavimas, naujo pajungimas ir vamzdyno pritaikymas.",
    content: (
      <>
        <p><strong>Gyvatuko keitimas vonios kambaryje</strong> gali būti atliekamas tiek kapitalinio remonto metu, tiek atskirai atnaujinant santechniką. Priklausomai nuo esamos sistemos, galima pakeisti seną rankšluosčių džiovintuvą, pritaikyti vamzdyno pajungimus arba sumontuoti naują gyvatuką.</p>

        <h2>Gyvatuko keitimo darbai</h2>
        <ul>
          <li>Seno gyvatuko arba rankšluosčių džiovintuvo demontavimas.</li>
          <li>Esamų vandentiekio pajungimų įvertinimas ir pritaikymas.</li>
          <li>Vamzdžių bei jungčių paruošimas naujam gyvatukui.</li>
          <li>Naujo gyvatuko montavimas ir pajungimas.</li>
          <li>Jungčių sandarumo patikrinimas.</li>
          <li>Gyvatuko vietos pakeitimas, kai tai leidžia esama sistema ir vonios remonto sprendimai.</li>
        </ul>

        <h2>Kada verta keisti seną gyvatuką?</h2>
        <p>Senas gyvatukas dažnai keičiamas atliekant kapitalinį vonios remontą, keičiant vamzdynus arba atnaujinant visą vonios kambario apdailą. Tai leidžia iš anksto tinkamai suplanuoti pajungimų vietas ir priderinti naują rankšluosčių džiovintuvą prie plytelių, baldų bei kitos santechnikos.</p>

        <h2>Gyvatuko keitimas daugiabučio vonioje</h2>
        <p>Daugiabučiuose prieš keičiant prie pastato sistemos prijungtą gyvatuką svarbu įvertinti esamą vamzdyną ir pajungimo būdą. Jei darbams būtinas vandens tiekimo ar cirkuliacijos sistemos uždarymas, tai iš anksto derinama su namo administratoriumi ar sistemą prižiūrinčiu asmeniu.</p>

        <h2>Nuo ko priklauso gyvatuko keitimo kaina?</h2>
        <p>Kaina priklauso nuo esamo pajungimo, vamzdžių būklės, pasirinkto gyvatuko, jo vietos bei nuo to, ar reikia perdaryti vamzdyną. Paprastas keitimas esamuose taškuose ir gyvatuko perkėlimas kapitalinio remonto metu yra skirtingos apimties darbai, todėl tiksli kaina nustatoma įvertinus situaciją.</p>

        <p>Gyvatuko montavimą galiu atlikti kaip atskirą santechnikos darbą arba kartu su pilnu vonios kambario remontu.</p>
      </>
    ),
  },
  "wc-montavimas": {
    title: "WC ir unitazo montavimas bei keitimas",
    h1: "WC ir unitazo montavimas",
    description: "WC ir unitazo montavimas bei keitimas. Seno klozeto demontavimas, naujo pastatomo WC pajungimas prie vandentiekio ir kanalizacijos.",
    content: (
      <>
        <p><strong>WC arba unitazo montavimas</strong> gali būti atliekamas tiek remontuojant visą vonios ar tualeto patalpą, tiek tiesiog keičiant seną klozetą nauju. Atlieku seno WC demontavimą, naujo unitazo pastatymą, pajungimą ir galutinį sandarumo patikrinimą.</p>

        <h2>WC montavimo ir keitimo darbai</h2>
        <ul>
          <li>Seno klozeto arba unitazo demontavimas.</li>
          <li>Naujo pastatomo WC montavimas.</li>
          <li>Pajungimas prie kanalizacijos.</li>
          <li>Vandens tiekimo pajungimas į bakelį.</li>
          <li>Tvirtinimas prie grindų ir sandarinimas.</li>
          <li>Bakelio mechanizmo sureguliavimas.</li>
          <li>Pajungimų ir sandarumo patikrinimas.</li>
        </ul>

        <h2>Seno klozeto keitimas nauju</h2>
        <p>Jeigu esami kanalizacijos ir vandens pajungimai yra tinkamoje vietoje, seną WC dažnai galima pakeisti nauju neatliekant kapitalinio patalpos remonto. Prieš montuojant įvertinama kanalizacijos išvado padėtis, vandens pajungimas ir grindų būklė.</p>

        <h2>Pastatomas ar potinkinis WC?</h2>
        <p>Paprastas pastatomas WC yra greičiau pakeičiamas ir jo bakelis lieka lengvai pasiekiamas. Kapitalinio vonios remonto metu dažnai pasirenkamas potinkinis WC, kurio rėmas ir bakelis paslepiami sienos konstrukcijoje. Potinkinių sistemų įrengimui skirtas atskiras <a href="/potinkinio-wc-montavimas">potinkinio WC montavimo</a> sprendimas.</p>

        <h2>Kiek kainuoja WC montavimas?</h2>
        <p>WC montavimo kaina priklauso nuo pasirinkto unitazo, esamų vandentiekio ir kanalizacijos pajungimų, seno WC demontavimo bei papildomų vamzdyno pakeitimų. Paprastas keitimas esamoje vietoje ir WC perkėlimas į kitą vietą yra skirtingos apimties darbai.</p>

        <p>WC montavimą galiu atlikti kaip atskirą santechnikos darbą arba kartu su vonios ir tualeto patalpos remontu.</p>
      </>
    ),
  },
  "duso-kabinos-montavimas": {
    title: "Dušo kabinos montavimas",
    h1: "Dušo kabinos montavimas",
    description: "Dušo kabinos montavimas ir keitimas. Senos kabinos demontavimas, naujos kabinos arba stiklinės dušo pertvaros montavimas, sandarinimas ir reguliavimas.",
    content: (
      <>
        <p><strong>Dušo kabinos montavimas</strong> gali būti atliekamas tiek pilno vonios remonto metu, tiek atskirai keičiant seną kabiną nauja. Svarbiausia – tiksliai paruošti pagrindą, teisingai surinkti konstrukciją ir kokybiškai užsandarinti visas jungtis.</p>

        <h2>Ką apima dušo kabinos montavimas?</h2>
        <ul>
          <li>Senos dušo kabinos arba pertvaros demontavimas.</li>
          <li>Montavimo vietos ir sienų lygumo patikrinimas.</li>
          <li>Dušo padėklo montavimas, jei naudojamas padėklas.</li>
          <li>Kabinos profilių, stiklo ir durų montavimas.</li>
          <li>Durų mechanizmų ir profilių sureguliavimas.</li>
          <li>Silikoninis sandarinimas pagal gamintojo reikalavimus.</li>
          <li>Vandens nutekėjimo ir sandarumo patikrinimas.</li>
        </ul>

        <h2>Dušo kabina ar stiklinė walk-in pertvara?</h2>
        <p>Tradicinė dušo kabina dažniausiai pasirenkama, kai naudojamas padėklas arba norima pilnai uždaros dušo zonos. Moderniame vonios kambaryje dažnai montuojama viena arba kelios stiklinės <em>walk-in</em> pertvaros, kai vanduo nuteka tiesiai į grindyse įrengtą trapą.</p>

        <p>Jeigu planuojamas dušas be padėklo, svarbu iš anksto tinkamai įrengti grindų nuolydžius, hidroizoliaciją ir vandens surinkimą. Tam skirtas atskiras <a href="/duso-trapo-montavimas">dušo trapo montavimo</a> puslapis.</p>

        <h2>Senos dušo kabinos keitimas</h2>
        <p>Keičiant seną kabiną nauja, pirmiausia įvertinama sienų ir grindų būklė, esami vandens pajungimai ir nuotekų vieta. Jei naujos kabinos matmenys ar konstrukcija skiriasi, gali reikėti papildomai pritaikyti santechnikos taškus arba atnaujinti sandarinimą.</p>

        <h2>Nuo ko priklauso dušo kabinos montavimo kaina?</h2>
        <p>Kaina priklauso nuo kabinos tipo, dydžio, konstrukcijos sudėtingumo, padėklo, stiklo storio, profilių sistemos ir nuo to, ar reikia demontuoti seną kabiną bei koreguoti santechnikos pajungimus.</p>

        <p>Dušo kabinos montavimą galiu atlikti kaip atskirą darbą arba kartu su pilnu vonios kambario remontu.</p>
      </>
    ),
  },
  "vonios-montavimas": {
    title: "Vonios montavimas ir keitimas",
    h1: "Vonios montavimas ir keitimas",
    description: "Vonios montavimas ir keitimas. Senos vonios demontavimas, naujos vonios pastatymas, sifono ir nuotekų pajungimas, maišytuvo montavimas bei sandarinimas.",
    content: (
      <>
        <p><strong>Vonios montavimas</strong> atliekamas tiek kapitalinio vonios kambario remonto metu, tiek atskirai keičiant seną vonią nauja. Svarbu ne tik tiksliai pastatyti ir išlyginti vonią, bet ir patikimai įrengti nuotekų pajungimą, sifoną bei sandariai sutvarkyti vonios ir sienų jungtis.</p>

        <h2>Ką apima vonios montavimas?</h2>
        <ul>
          <li>Senos vonios demontavimas ir atjungimas.</li>
          <li>Naujos vonios montavimo vietos paruošimas.</li>
          <li>Vonios kojelių, rėmo arba kitos atraminės konstrukcijos montavimas.</li>
          <li>Vonios išlyginimas ir stabilus pritvirtinimas.</li>
          <li>Sifono ir persipylimo sistemos surinkimas.</li>
          <li>Vonios pajungimas prie nuotekų sistemos.</li>
          <li>Maišytuvo ir vandens pajungimų montavimas, kai tai numatyta darbuose.</li>
          <li>Vonios kraštų sandarinimas ir galutinis sandarumo patikrinimas.</li>
        </ul>

        <h2>Senos vonios keitimas nauja</h2>
        <p>Keičiant seną vonią pirmiausia įvertinama jos montavimo vieta, nuotekų išvadas, vandentiekio pajungimai ir sienų bei grindų būklė. Naujos vonios matmenys ne visada sutampa su senosios, todėl kartais reikia koreguoti sifono, nuotekų arba maišytuvo pajungimus.</p>

        <h2>Akrilinės, plieninės ir ketaus vonios</h2>
        <p>Montavimo būdas priklauso nuo pasirinktos vonios konstrukcijos. Akrilinei voniai ypač svarbus stabilus rėmas ir tinkamas atramų sureguliavimas. Plieninės ir sunkios ketaus vonios turi kitus montavimo bei transportavimo reikalavimus, todėl prieš darbus įvertinama konkreti situacija.</p>

        <h2>Laisvai stovinčios vonios montavimas</h2>
        <p>Laisvai stovinčiai voniai vandentiekio ir nuotekų vietos turi būti suplanuotos dar prieš galutinę grindų apdailą. Tokiu atveju svarbus tikslus vonios, grindinio maišytuvo ir nuotekų išvado išdėstymas, nes visi elementai lieka matomoje vonios kambario dalyje.</p>

        <h2>Nuo ko priklauso vonios montavimo kaina?</h2>
        <p>Kaina priklauso nuo vonios tipo ir dydžio, senos vonios demontavimo, montavimo konstrukcijos, nuotekų bei vandentiekio pajungimų ir papildomų apdailos darbų. Paprastas vonios pakeitimas esamoje vietoje ir naujos vonios įrengimas kapitalinio remonto metu yra skirtingos apimties darbai.</p>

        <p>Vonios montavimą galiu atlikti kaip atskirą santechnikos darbą arba kartu su <a href="/kapitalinis-vonios-remontas">kapitaliniu vonios kambario remontu</a>.</p>
      </>
    ),
  },
  "praustuvo-montavimas": {
    title: "Praustuvo ir kriauklės montavimas",
    h1: "Praustuvo ir kriauklės montavimas",
    description: "Praustuvo ir kriauklės montavimas bei keitimas. Vonios spintelės, maišytuvo, sifono, vandentiekio ir nuotekų pajungimas.",
    content: (
      <>
        <p><strong>Praustuvo arba kriauklės montavimas</strong> gali būti atliekamas tiek remontuojant visą vonios kambarį, tiek atskirai keičiant seną praustuvą nauju. Atlieku praustuvo, vonios spintelės, maišytuvo ir sifono montavimą bei pajungimą prie esamų vandentiekio ir nuotekų sistemų.</p>

        <h2>Ką apima praustuvo montavimas?</h2>
        <ul>
          <li>Seno praustuvo arba kriauklės demontavimas.</li>
          <li>Naujo praustuvo montavimo vietos paruošimas.</li>
          <li>Pakabinamo arba pastatomo praustuvo montavimas.</li>
          <li>Vonios spintelės su praustuvu montavimas ir išlyginimas.</li>
          <li>Praustuvo maišytuvo montavimas.</li>
          <li>Karšto ir šalto vandens pajungimas.</li>
          <li>Sifono surinkimas ir pajungimas prie nuotekų.</li>
          <li>Jungčių sandarumo patikrinimas ir reikalingų vietų sandarinimas.</li>
        </ul>

        <h2>Seno praustuvo keitimas nauju</h2>
        <p>Jeigu esami vandentiekio ir kanalizacijos pajungimai yra tinkamoje vietoje, seną praustuvą dažnai galima pakeisti nauju neatliekant viso vonios kambario remonto. Prieš montuojant įvertinami naujo praustuvo matmenys, tvirtinimo vietos, sifono aukštis ir vandens pajungimų padėtis.</p>

        <h2>Spintelės su praustuvu montavimas</h2>
        <p>Vonios kambariuose dažnai montuojamas praustuvas kartu su pakabinama arba ant grindų statoma spintele. Tokiu atveju svarbu tiksliai išlyginti baldą, patikimai jį pritvirtinti ir iš anksto įvertinti, ar spintelės viduje pakanka vietos sifonui bei vandentiekio pajungimams.</p>

        <h2>Pakabinamas ir stalviršinis praustuvas</h2>
        <p>Pakabinami praustuvai tvirtinami tiesiai prie sienos, todėl svarbus patikimas pagrindas ir tinkami tvirtinimo elementai. Stalviršiniai praustuvai montuojami ant vonios baldo arba stalviršio, tiksliai paruošiant angas nuotekoms ir maišytuvui.</p>

        <h2>Praustuvo sifono ir maišytuvo pajungimas</h2>
        <p>Montuojant praustuvą kartu surenkamas sifonas, pajungiamos nuotekos ir vandens tiekimas į maišytuvą. Baigus darbus patikrinamos visos jungtys, kad nebūtų vandens pratekėjimo po spintele ar sienos konstrukcijoje.</p>

        <h2>Nuo ko priklauso praustuvo montavimo kaina?</h2>
        <p>Kaina priklauso nuo praustuvo tipo, tvirtinimo būdo, vonios spintelės, maišytuvo ir sifono montavimo bei esamų vandentiekio ir nuotekų pajungimų. Jeigu reikia perkelti vamzdžius ar kanalizacijos išvadą, darbų apimtis atitinkamai padidėja.</p>

        <p>Praustuvo montavimą galiu atlikti kaip atskirą santechnikos darbą arba kartu su <a href="/kapitalinis-vonios-remontas">kapitaliniu vonios kambario remontu</a> ir kitais <a href="/santechnikos-darbai-klaipeda">vonios santechnikos darbais</a>.</p>
      </>
    ),
  },
  "maisytuvo-montavimas": {
    title: "Maišytuvo montavimas ir keitimas",
    h1: "Maišytuvo montavimas ir keitimas",
    description: "Vonios, dušo ir praustuvo maišytuvų montavimas bei keitimas. Seno maišytuvo demontavimas, naujo pajungimas, reguliavimas ir sandarumo patikrinimas.",
    content: (
      <>
        <p><strong>Maišytuvo montavimas ir keitimas</strong> gali būti atliekamas kaip atskiras santechnikos darbas arba kartu su visu vonios kambario remontu. Montuoju praustuvo, vonios, dušo bei potinkinius maišytuvus, pritaikant juos prie esamų arba naujai įrengiamų vandentiekio pajungimų.</p>

        <h2>Kokius maišytuvus montuoju?</h2>
        <ul>
          <li>Praustuvo ir kriauklės maišytuvus.</li>
          <li>Vonios maišytuvus.</li>
          <li>Dušo maišytuvus ir dušo sistemas.</li>
          <li>Termostatinius dušo maišytuvus.</li>
          <li>Potinkinius maišytuvus ir jų mechanizmus.</li>
          <li>Maišytuvus, montuojamus į stalviršį ar praustuvą.</li>
          <li>Grindinius maišytuvus laisvai stovinčioms vonioms.</li>
        </ul>

        <h2>Seno maišytuvo keitimas nauju</h2>
        <p>Jeigu vandentiekio pajungimai yra tinkami, seną maišytuvą dažniausiai galima pakeisti nauju neatliekant papildomų apdailos darbų. Demontuojamas senas maišytuvas, patikrinami pajungimai, sumontuojamas naujas ir atliekamas sandarumo patikrinimas.</p>

        <h2>Vonios ir dušo maišytuvo montavimas</h2>
        <p>Sieniniams vonios ir dušo maišytuvams svarbus tikslus karšto ir šalto vandens išvadų atstumas bei gylis. Jei esami išvadai nėra tinkamoje padėtyje, gali reikėti juos koreguoti arba pritaikyti prieš montuojant naują maišytuvą.</p>

        <h2>Praustuvo maišytuvo montavimas</h2>
        <p>Praustuvo maišytuvas montuojamas kartu su lanksčiomis vandens jungtimis ir tvirtinimo elementais. Keičiant praustuvą galima vienu metu sumontuoti naują maišytuvą, sifoną ir sutvarkyti visus vandentiekio bei nuotekų pajungimus. Daugiau apie visą mazgą – <a href="/praustuvo-montavimas">praustuvo ir kriauklės montavimo</a> puslapyje.</p>

        <h2>Potinkinio maišytuvo montavimas</h2>
        <p>Potinkinio maišytuvo mechanizmas įrengiamas sienoje dar prieš hidroizoliaciją ir plytelių klijavimą. Todėl būtina iš anksto tiksliai suplanuoti jo aukštį, gylį ir dušo ar vonios įrangos vietas. Baigus apdailą sumontuojamos matomos valdymo ir vandens išleidimo dalys.</p>

        <h2>Nuo ko priklauso maišytuvo montavimo kaina?</h2>
        <p>Kaina priklauso nuo maišytuvo tipo, esamų vandentiekio pajungimų būklės ir montavimo sudėtingumo. Paprastas seno praustuvo maišytuvo pakeitimas paprastai reikalauja mažiau darbų nei naujos potinkinės dušo sistemos įrengimas kapitalinio remonto metu.</p>

        <p>Maišytuvo montavimą galiu atlikti kaip atskirą darbą arba kartu su kitais <a href="/santechnikos-darbai-klaipeda">vonios santechnikos darbais</a> ir <a href="/kapitalinis-vonios-remontas">kapitaliniu vonios remontu</a>.</p>
      </>
    ),
  },
  "vandentiekio-vamzdziu-keitimas": {
    title: "Vandentiekio vamzdžių keitimas ir montavimas",
    h1: "Vandentiekio vamzdžių keitimas",
    description: "Vandentiekio vamzdžių keitimas butuose ir nuosavuose namuose. Senų vamzdynų demontavimas, naujų trasų įrengimas, vandens taškų perkėlimas ir pajungimas.",
    content: (
      <>
        <p><strong>Vandentiekio vamzdžių keitimas</strong> dažniausiai atliekamas kapitalinio remonto metu, keičiant senus metalinius ar susidėvėjusius vamzdynus ir iš naujo suplanuojant vandens taškus. Atlieku vandentiekio trasų įrengimą vonios kambariuose, butuose ir nuosavuose namuose.</p>

        <h2>Kokius vandentiekio darbus atlieku?</h2>
        <ul>
          <li>Senų vandentiekio vamzdžių demontavimą ir keitimą.</li>
          <li>Naujų šalto ir karšto vandens trasų įrengimą.</li>
          <li>Vandens taškų perkėlimą pagal naują vonios ar patalpų išplanavimą.</li>
          <li>Praustuvo, WC, vonios, dušo, skalbimo mašinos ir kitos įrangos pajungimų paruošimą.</li>
          <li>Potinkinių vandentiekio trasų įrengimą sienose ir grindyse.</li>
          <li>Kolektorinių sistemų įrengimą, kai kiekvienam prietaisui vedama atskira vandens linija.</li>
          <li>Uždarymo ventilių ir kitų reikalingų jungčių montavimą.</li>
          <li>Vamzdyno sandarumo patikrinimą prieš uždengiant konstrukcijas.</li>
        </ul>

        <h2>Vandentiekio keitimas bute ir daugiabutyje</h2>
        <p>Daugiabučiuose vandentiekio darbai dažnai atliekami nuo buto įvadinių ventilių iki visų vonios, WC ar virtuvės vandens taškų. Kapitalinio remonto metu seni vamzdynai pakeičiami naujais, o pajungimai išdėstomi pagal planuojamą santechniką.</p>

        <p>Jeigu darbams reikia uždaryti bendrą namo stovą ar kitą bendro naudojimo vandentiekio dalį, vandens atjungimas iš anksto derinamas su namo administratoriumi arba sistemą prižiūrinčiu asmeniu.</p>

        <h2>Vandentiekio darbai nuosavame name</h2>
        <p>Nuosavame name vandentiekio sistema gali būti platesnė nei bute – vanduo vedamas į vonios kambarius, virtuvę, technines patalpas, boilerį ar kitus vandens naudojimo taškus. Esant poreikiui galima pertvarkyti esamas vidaus trasas, įrengti naujus pajungimus ir racionaliau išdėstyti uždarymo ventilius.</p>

        <h2>Miesto vandentiekio įvadas ir vandens atjungimas</h2>
        <p>Jeigu darbai susiję ne tik su vidaus vamzdynu, bet ir su pastato vandens įvadu arba miesto vandentiekio tinklu, pirmiausia nustatoma, kur yra atsakomybės riba ir kokio atjungimo reikia. Darbai miesto ar bendro naudojimo tinkluose atliekami tik suderinus vandens tiekimo nutraukimą su atitinkamu vandens tiekėju, administratoriumi ar tinklą prižiūrinčia organizacija.</p>

        <h2>Vandens taškų perkėlimas</h2>
        <p>Keičiant vonios kambario išplanavimą dažnai reikia perkelti praustuvo, WC, vonios, dušo ar skalbimo mašinos vandens taškus. Tokius darbus geriausia suplanuoti dar prieš sienų lyginimą, hidroizoliaciją ir plytelių klijavimą, kad visi išvadai būtų tiksliose galutinės įrangos vietose.</p>

        <h2>Kokius vamzdžius naudoti?</h2>
        <p>Vamzdyno sistema parenkama pagal konkrečią situaciją, montavimo vietą ir numatomą apkrovą. Svarbiausia – patikimos jungtys, tinkamas vamzdžių tvirtinimas ir kuo mažiau sunkiai prieinamų jungčių uždengtose konstrukcijose.</p>

        <h2>Nuo ko priklauso vandentiekio vamzdžių keitimo kaina?</h2>
        <p>Kainą lemia vamzdyno ilgis, vandens taškų skaičius, sienų ir grindų konstrukcija, vamzdžių vedimo būdas, seno vamzdyno demontavimas ir tai, ar reikia perkelti įvadus ar uždaryti bendrą vandens tiekimą. Vienos vonios vamzdyno pakeitimas ir viso nuosavo namo vandentiekio pertvarkymas yra labai skirtingos apimties darbai.</p>

        <p>Vandentiekio vamzdžių keitimą galiu atlikti kaip atskirą darbą arba kartu su kitais <a href="/santechnikos-darbai-klaipeda">santechnikos darbais</a> ir <a href="/kapitalinis-vonios-remontas">kapitaliniu vonios remontu</a>.</p>
      </>
    ),
  },
  "kanalizacijos-vamzdziu-keitimas": {
    title: "Kanalizacijos vamzdžių keitimas ir montavimas",
    h1: "Kanalizacijos vamzdžių keitimas",
    description: "Kanalizacijos vamzdžių keitimas butuose ir nuosavuose namuose. Senų nuotekų trasų demontavimas, naujų vamzdžių įrengimas, nuolydžių formavimas ir santechnikos pajungimų paruošimas.",
    content: (
      <>
        <p><strong>Kanalizacijos vamzdžių keitimas</strong> dažniausiai atliekamas kapitalinio remonto metu, kai seni nuotekų vamzdžiai yra susidėvėję, netinkamai išvedžioti arba nebeatitinka naujo vonios kambario išplanavimo. Atlieku senų kanalizacijos trasų keitimą ir naujų nuotekų pajungimų įrengimą butuose bei nuosavuose namuose.</p>

        <h2>Kokius kanalizacijos darbus atlieku?</h2>
        <ul>
          <li>Senų kanalizacijos vamzdžių demontavimą ir keitimą.</li>
          <li>Naujų nuotekų trasų įrengimą.</li>
          <li>WC, praustuvo, vonios, dušo ir skalbimo mašinos kanalizacijos pajungimų paruošimą.</li>
          <li>Kanalizacijos taškų perkėlimą pagal naują patalpų išplanavimą.</li>
          <li>Nuotekų vamzdžių nuolydžių formavimą.</li>
          <li>Nuotekų atšakų nuo esamo stovo arba pagrindinės trasos įrengimą.</li>
          <li>Vamzdžių vedimą grindyse, sienose ar konstrukcijose, kai tai leidžia situacija.</li>
          <li>Pajungimų patikrinimą prieš uždengiant grindis ar sienas.</li>
        </ul>

        <h2>Kanalizacijos keitimas bute ir daugiabutyje</h2>
        <p>Daugiabučio bute dažniausiai keičiamos vidinės nuotekų atšakos nuo esamo kanalizacijos stovo iki WC, praustuvo, vonios ar dušo. Kapitalinio remonto metu verta iš karto įvertinti senų vamzdžių būklę, nes vėliau prie jų prieiti po plytelėmis ir grindų sluoksniais tampa sudėtinga.</p>

        <p>Jeigu darbai paliečia bendro naudojimo kanalizacijos stovą ar kitą namo bendrą sistemą, prieš darbus reikia įvertinti atsakomybės ribas ir, jei būtina, suderinti veiksmus su namo administratoriumi ar sistemą prižiūrinčia organizacija.</p>

        <h2>Kanalizacijos vamzdžiai nuosavame name</h2>
        <p>Nuosavame name nuotekų sistema gali jungti kelis sanitarinius mazgus, virtuvę, technines patalpas ir kitus vandens naudojimo taškus. Keičiant vidaus kanalizaciją svarbu tinkamai suplanuoti vamzdžių diametrus, trasų kryptis, nuolydžius ir prijungimą prie pagrindinio namo nuotekų išvado.</p>

        <h2>Nuolydis – vienas svarbiausių kanalizacijos darbų</h2>
        <p>Nuotekų vamzdžiai turi būti įrengiami su tinkamu nuolydžiu. Per mažas nuolydis gali bloginti vandens nutekėjimą, o netinkamai suprojektuota trasa gali skatinti užsikimšimus. Todėl vamzdžių aukščiai ir kryptys planuojami dar prieš betonavimą, grindų lyginimą ar sienų uždengimą.</p>

        <h2>WC kanalizacijos pajungimas</h2>
        <p>WC pajungimui naudojamas didesnio diametro kanalizacijos vamzdis, todėl keičiant unitazo vietą svarbu įvertinti atstumą iki stovo, reikiamą nuolydį ir grindų konstrukcijos aukštį. Jei montuojamas potinkinis WC, kanalizacijos išvadas turi būti tiksliai priderintas prie rėmo vietos.</p>

        <h2>Dušo ir vonios nuotekų pajungimas</h2>
        <p>Dušo, vonios ir praustuvo nuotekų vamzdžiai dažnai slepiami grindyse arba sienų konstrukcijose. Dušo zonose ypač svarbu iš anksto suplanuoti trapo aukštį ir nuotekų trasą, kad būtų galima suformuoti tinkamą grindų nuolydį. Apie šį mazgą daugiau – <a href="/duso-trapo-montavimas">dušo trapo montavimo</a> puslapyje.</p>

        <h2>Nuo ko priklauso kanalizacijos vamzdžių keitimo kaina?</h2>
        <p>Kaina priklauso nuo keičiamos trasos ilgio, vamzdžių diametro, santechnikos taškų skaičiaus, grindų ir sienų konstrukcijų, seno vamzdyno demontavimo bei prijungimo prie esamo stovo ar pagrindinės nuotekų sistemos. Vienos vonios kanalizacijos atnaujinimas ir kelių sanitarinių mazgų sistemos pertvarkymas nuosavame name yra skirtingos apimties darbai.</p>

        <p>Kanalizacijos vamzdžių keitimą galiu atlikti kaip atskirą darbą arba kartu su <a href="/vandentiekio-vamzdziu-keitimas">vandentiekio vamzdžių keitimu</a>, kitais <a href="/santechnikos-darbai-klaipeda">santechnikos darbais</a> ir <a href="/kapitalinis-vonios-remontas">kapitaliniu vonios remontu</a>.</p>
      </>
    ),
  },
  "santechnikos-tasku-perkelimas": {
    title: "Santechnikos taškų perkėlimas",
    h1: "Santechnikos taškų perkėlimas",
    description: "Vandentiekio ir kanalizacijos taškų perkėlimas vonios kambaryje. Praustuvo, WC, dušo, vonios ir skalbimo mašinos pajungimų perkėlimas pagal naują išplanavimą.",
    content: (
      <>
        <p><strong>Santechnikos taškų perkėlimas</strong> dažniausiai reikalingas keičiant vonios kambario išplanavimą. Perkeliant praustuvą, WC, dušą, vonią ar skalbimo mašiną reikia iš naujo suplanuoti vandentiekio ir kanalizacijos trasas bei tiksliai paruošti pajungimus būsimiems prietaisams.</p>

        <h2>Kokius santechnikos taškus galima perkelti?</h2>
        <ul>
          <li>Praustuvo vandentiekio ir kanalizacijos pajungimus.</li>
          <li>WC vandens ir nuotekų taškus.</li>
          <li>Dušo maišytuvo ir dušo sistemos vandens išvadus.</li>
          <li>Dušo trapo ar padėklo kanalizacijos pajungimą.</li>
          <li>Vonios maišytuvo ir nuotekų taškus.</li>
          <li>Skalbimo mašinos vandens ir kanalizacijos pajungimus.</li>
          <li>Gyvatuko pajungimus, kai tai leidžia esama sistema.</li>
          <li>Kitų santechnikos prietaisų pajungimus pagal naują patalpos planą.</li>
        </ul>

        <h2>Vandentiekio taškų perkėlimas</h2>
        <p>Karšto ir šalto vandens išvadai perkeliami į naujas vietas pagal būsimos santechnikos matmenis ir montavimo aukščius. Darbus geriausia atlikti dar prieš sienų lyginimą, hidroizoliaciją ir plytelių klijavimą, kad galutiniai išvadai būtų tiksliai ten, kur jų reikės montuojant įrangą.</p>

        <p>Daugiau apie pačių trasų atnaujinimą – <a href="/vandentiekio-vamzdziu-keitimas">vandentiekio vamzdžių keitimo</a> puslapyje.</p>

        <h2>Kanalizacijos taškų perkėlimas</h2>
        <p>Nuotekų taškų perkėlimas reikalauja daugiau planavimo, nes kanalizacijos vamzdžiams būtinas tinkamas nuolydis. Ypač svarbu įvertinti WC, dušo ir vonios atstumą iki esamo stovo ar pagrindinės nuotekų trasos.</p>

        <p>Jei keičiama visa nuotekų sistema, daugiau informacijos rasite <a href="/kanalizacijos-vamzdziu-keitimas">kanalizacijos vamzdžių keitimo</a> puslapyje.</p>

        <h2>WC perkėlimas</h2>
        <p>WC perkėlimas yra vienas sudėtingesnių santechnikos taškų pakeitimų, nes naudojamas didesnio diametro kanalizacijos vamzdis ir turi būti išlaikytas nuolydis iki stovo. Prieš perkeliant WC būtina įvertinti grindų aukštį, trasos ilgį ir konstrukcijų galimybes.</p>

        <h2>Dušo ir trapo vietos pakeitimas</h2>
        <p>Keičiant dušo zonos vietą reikia iš anksto suplanuoti ne tik vandens išvadus, bet ir kanalizacijos trasą bei trapo aukštį. Grindų konstrukcijoje turi likti pakankamai vietos nuolydžiui iki kanalizacijos. Apie patį mazgą daugiau – <a href="/duso-trapo-montavimas">dušo trapo montavimo</a> puslapyje.</p>

        <h2>Santechnikos taškų perkėlimas daugiabutyje</h2>
        <p>Daugiabučiuose taškų perkėlimo galimybes dažnai riboja esamų stovų vieta, perdangos konstrukcija ir bendro naudojimo sistemos. Todėl prieš pradedant darbus įvertinama, ar planuojamas sprendimas techniškai įmanomas ir ar nereikia derinti bendrų sistemų atjungimo su namo administratoriumi.</p>

        <h2>Santechnikos taškų perkėlimas nuosavame name</h2>
        <p>Nuosavame name dažnai yra daugiau galimybių keisti sanitarinių prietaisų vietas, tačiau vis tiek būtina įvertinti pagrindinių vandentiekio ir nuotekų trasų padėtį, grindų konstrukciją bei prijungimo prie bendros namo sistemos galimybes.</p>

        <h2>Nuo ko priklauso santechnikos taškų perkėlimo kaina?</h2>
        <p>Kainą lemia perkeliamų taškų skaičius, atstumas nuo esamų vamzdynų, sienų ir grindų konstrukcijos, kanalizacijos vamzdžių diametras, reikalingi nuolydžiai ir tai, ar kartu keičiamos visos vandentiekio bei nuotekų trasos.</p>

        <p>Santechnikos taškų perkėlimą galiu atlikti kaip atskirą darbą arba kartu su <a href="/kapitalinis-vonios-remontas">kapitaliniu vonios remontu</a> ir kitais <a href="/santechnikos-darbai-klaipeda">santechnikos darbais</a>.</p>
      </>
    ),
  },
  "elektros-darbai-vonioje": {
    title: "Elektros darbai vonios kambaryje",
    h1: "Elektros darbai vonios kambaryje",
    description: "Elektros instaliacijos atnaujinimas vonios kambaryje. Rozetės, apšvietimas, LED veidrodžiai, ventiliatoriai, grindinis šildymas ir naujų elektros taškų įrengimas.",
    content: (
      <>
        <p><strong>Elektros darbai vonios kambaryje</strong> dažniausiai atliekami kartu su kapitaliniu remontu, kai keičiama patalpos apdaila, santechnika ir išplanavimas. Tinkamai suplanuota elektros instaliacija leidžia saugiai ir patogiai įrengti apšvietimą, rozetes, veidrodžius, ventiliaciją ir kitą vonios įrangą.</p>

        <h2>Kokius elektros darbus atlieku vonioje?</h2>
        <ul>
          <li>Senų elektros laidų ir nereikalingų taškų atnaujinimą ar perkėlimą.</li>
          <li>Naujų rozečių taškų įrengimą.</li>
          <li>Lubų ir sieninių šviestuvų pajungimą.</li>
          <li>LED apšvietimo ir LED juostų paruošimą bei pajungimą.</li>
          <li>Veidrodžio su apšvietimu ar šildymu pajungimą.</li>
          <li>Vonios ventiliatoriaus elektros taško paruošimą ir pajungimą.</li>
          <li>Skalbimo mašinos ir kitos vonios įrangos elektros taškų paruošimą.</li>
          <li>Elektrinio grindinio šildymo kabelio ar kilimėlio paruošimą ir pajungimo vietos įrengimą.</li>
        </ul>

        <h2>Elektros instaliacijos atnaujinimas kapitalinio remonto metu</h2>
        <p>Kapitalinio vonios remonto metu patogu iš karto perplanuoti visus elektros taškus, nes sienos ir grindys dar nėra užbaigtos. Laidų trasos ir montavimo vietos numatomos prieš sienų lyginimą, hidroizoliaciją, plytelių klijavimą ir lubų įrengimą.</p>

        <p>Daugiau apie visą darbų seką – <a href="/kapitalinis-vonios-remontas">kapitalinio vonios remonto</a> puslapyje.</p>

        <h2>Rozečių įrengimas vonioje</h2>
        <p>Vonios kambaryje rozetės planuojamos pagal praustuvo, veidrodžio, skalbimo mašinos ir kitų prietaisų vietas. Svarbu iš anksto parinkti tinkamas vietas ir įvertinti drėgnas zonas, kad galutinė instaliacija būtų saugi ir patogi naudoti.</p>

        <h2>Veidrodžio ir LED apšvietimo pajungimas</h2>
        <p>Šiuolaikiniuose vonios kambariuose dažnai montuojami LED veidrodžiai, nišų apšvietimas ir dekoratyvinės LED juostos. Elektros taškai tokiems sprendimams turi būti paruošti dar prieš apdailą, kad laidai liktų paslėpti ir galutinis rezultatas būtų tvarkingas.</p>

        <h2>Vonios ventiliatoriaus pajungimas</h2>
        <p>Ventiliatorius gali būti valdomas kartu su apšvietimu, atskiru jungikliu arba turėti laikmačio ar drėgmės valdymo funkciją. Konkretus pajungimo būdas parenkamas pagal įrenginį ir esamą elektros instaliaciją.</p>

        <h2>Elektrinis grindinis šildymas vonioje</h2>
        <p>Elektrinis grindinis šildymas dažniausiai įrengiamas prieš galutinį grindų sluoksnį ir plytelių klijavimą. Iš anksto numatoma termostato vieta, maitinimo kabelis ir šildymo elemento zona. Grindų paruošimas turi būti suderintas su kitais darbais, ypač jei kartu atliekamas <a href="/grindu-betonavimas-klaipeda">grindų betonavimas ir lyginimas</a>.</p>

        <h2>Elektros darbai daugiabučio vonioje</h2>
        <p>Senesniuose daugiabučiuose kapitalinio remonto metu dažnai verta įvertinti ne tik naujų rozečių poreikį, bet ir esamų laidų būklę. Jei reikalingi didesni pakeitimai skydelyje ar bendroje elektros sistemoje, konkretus sprendimas vertinamas pagal objekto situaciją ir galiojančius techninius reikalavimus.</p>

        <h2>Elektros darbai nuosavame name</h2>
        <p>Nuosavame name vonios elektros instaliacija taip pat planuojama pagal patalpos išplanavimą, apšvietimą, šildymą ir naudojamą įrangą. Esant keliems sanitariniams mazgams svarbu nuosekliai suplanuoti taškus ir kabelių trasas dar prieš apdailos darbus.</p>

        <h2>Nuo ko priklauso elektros darbų vonioje kaina?</h2>
        <p>Kaina priklauso nuo naujų taškų skaičiaus, kabelių trasų, sienų ir lubų konstrukcijų, apšvietimo sprendimų, grindinio šildymo ir esamos instaliacijos būklės. Kelių rozečių ar šviestuvo pajungimas ir visos vonios elektros instaliacijos pertvarkymas yra skirtingos apimties darbai.</p>

        <p>Elektros darbus vonioje galiu atlikti kartu su <a href="/kapitalinis-vonios-remontas">kapitaliniu vonios remontu</a>, plytelių, santechnikos ir kitais vonios įrengimo darbais.</p>
      </>
    ),
  },
  "elektrinis-grindu-sildymas-vonioje": {
    title: "Elektrinis grindų šildymas vonioje",
    h1: "Elektrinis grindų šildymas vonioje",
    description: "Elektrinio grindų šildymo kilimėlio įrengimas vonios kambaryje. Pagrindo paruošimas, šildymo kilimėlis, termostatas, hidroizoliacija ir plytelių klijavimas.",
    content: (
      <>
        <p><strong>Elektrinis grindų šildymas vonioje</strong> suteikia komfortą ir leidžia plytelėmis išklotas grindis išlaikyti maloniai šiltas. Vonios remonto metu elektrinis šildymo kilimėlis gali būti įrengiamas kaip visos grindų konstrukcijos dalis, iš anksto suderinant jo vietą su santechnika, hidroizoliacija ir plytelių išdėstymu.</p>

        <h2>Elektrinio šildymo kilimėlio įrengimas</h2>
        <p>Šildymo kilimėlis klojamas tik tinkamai paruošus pagrindą. Prieš montavimą įvertinamas grindų lygumas, būsimos vonios įrangos vietos ir plotai, kuriuose grindų šildymas nereikalingas.</p>

        <ul>
          <li>Grindų pagrindo būklės įvertinimas ir paruošimas.</li>
          <li>Šildomo grindų ploto suplanavimas.</li>
          <li>Elektrinio šildymo kilimėlio išdėstymas.</li>
          <li>Grindų temperatūros daviklio vietos paruošimas.</li>
          <li>Termostato ir elektros pajungimo vietos paruošimas.</li>
          <li>Šildymo elemento apsaugojimas prieš tolimesnius apdailos darbus.</li>
          <li>Grindų paruošimas hidroizoliacijai ir plytelių klijavimui pagal pasirinktą sistemą.</li>
        </ul>

        <h2>Kur vonioje klojamas šildymo kilimėlis?</h2>
        <p>Šildymo kilimėlio nereikia kloti per visą vonios grindų plotą. Jo išdėstymas planuojamas pagal būsimą patalpos įrangą. Paprastai šildomas laisvas grindų plotas, kuriuo vaikštoma, o po stacionaria vonia, dušo padėklu, WC ar prie grindų glaudžiai montuojamais baldais šildymo elementai neplanuojami.</p>

        <h2>Termostatas ir grindų temperatūros daviklis</h2>
        <p>Elektrinio grindų šildymo veikimui numatomas termostatas ir grindų temperatūros daviklis. Jų vietos suplanuojamos prieš atliekant galutinę apdailą. Elektros dalis turi būti įrengiama atsižvelgiant į drėgnoms patalpoms taikomus saugos reikalavimus.</p>

        <p>Daugiau apie vonios elektros instaliacijos paruošimą rasite puslapyje <a href="/elektros-darbai-vonioje">elektros darbai vonios kambaryje</a>.</p>

        <h2>Šildomos grindys ir hidroizoliacija</h2>
        <p>Vonios kambaryje grindų šildymas yra tik viena visos grindų sistemos dalis. Ne mažiau svarbus tinkamas pagrindo paruošimas ir <a href="/vonios-hidroizoliacija">vonios hidroizoliacija</a>. Ypatingas dėmesys skiriamas grindų ir sienų sandūroms, vamzdžių vietoms bei dušo zonai.</p>

        <h2>Šildomos grindys dušo zonoje</h2>
        <p>Jeigu projektuojamas dušas be padėklo, visa konstrukcija turi būti suplanuota kompleksiškai. Reikia suderinti grindų aukščius, nuolydžius, <a href="/duso-trapo-montavimas">dušo trapą</a>, hidroizoliaciją ir plytelių klijavimą. Todėl tokius darbus geriausia numatyti dar prieš betonavimą ir pagrindo formavimą.</p>

        <h2>Grindų paruošimas prieš šildymo kilimėlį</h2>
        <p>Jeigu senos grindys yra nelygios, pažeistos arba keičiami jų aukščiai, pirmiausia atliekamas pagrindo remontas. Kai reikia, grindys lyginamos arba betonuojamos. Plačiau apie šiuos darbus – <a href="/grindu-betonavimas-klaipeda">grindų betonavimas ir lyginimas</a>.</p>

        <h2>Elektrinis grindų šildymas kapitalinio vonios remonto metu</h2>
        <p>Patogiausia elektrines šildomas grindis įrengti atliekant <a href="/kapitalinis-vonios-remontas">kapitalinį vonios remontą</a>. Tuomet vienu metu galima suplanuoti grindų aukštį, santechniką, elektros instaliaciją, dušo zoną, hidroizoliaciją ir plyteles.</p>

        <h2>Kiek kainuoja elektrinis grindų šildymas vonioje?</h2>
        <p>Kaina priklauso nuo šildomo ploto, pagrindo būklės, pasirinkto šildymo kilimėlio ir termostato, elektros instaliacijos bei papildomų paruošiamųjų darbų. Jeigu šildomos grindys įrengiamos kartu su visu vonios remontu, jos įtraukiamos į bendrą darbų sąmatą.</p>

        <p>Bendrą informaciją apie viso vonios kambario įrengimo kainą rasite puslapyje <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>
      </>
    ),
  },
  "sienu-lyginimas-tinkavimas-vonioje": {
    title: "Sienų lyginimas ir tinkavimas vonioje",
    h1: "Sienų lyginimas ir tinkavimas vonioje",
    description: "Vonios sienų lyginimas ir tinkavimas prieš plytelių klijavimą. Kreivų sienų tiesinimas, seno tinko remontas, kampų ir plokštumų paruošimas.",
    content: (
      <>
        <p><strong>Sienų lyginimas ir tinkavimas vonios kambaryje</strong> yra vienas svarbiausių pagrindo paruošimo etapų prieš hidroizoliaciją ir plytelių klijavimą. Senos statybos butuose sienos dažnai būna kreivos, kampai nėra statūs, o senas tinkas vietomis būna atšokęs arba nepakankamai tvirtas.</p>

        <p>Tokiais atvejais sienos pirmiausia sutvarkomos ir išlyginamos, o tik tada atliekami tolimesni vonios apdailos darbai. Tinkamai paruoštas pagrindas leidžia tiksliau suformuoti vonios geometriją, gražiai suvesti plyteles kampuose ir išvengti nereikalingai storo plytelių klijų sluoksnio.</p>

        <h2>Kada reikia lyginti vonios sienas?</h2>
        <p>Sienų lyginimo poreikis dažniausiai paaiškėja nuėmus senas plyteles ir kitą apdailą. Iš pirmo žvilgsnio lygi siena po demontavimo gali pasirodyti turinti didelius aukščio skirtumus, įdubimus arba silpnų seno tinko vietų.</p>

        <ul>
          <li>Kai nuėmus senas plyteles lieka nelygus pagrindas.</li>
          <li>Kai sienos turi didelius vertikalius arba horizontalius nuokrypius.</li>
          <li>Kai vonios kampai nėra statūs.</li>
          <li>Kai senas tinkas yra sutrūkinėjęs, atšokęs arba silpnai laikosi.</li>
          <li>Kai reikia tiksliai paruošti sienas didelio formato plytelėms.</li>
          <li>Kai keičiama santechnika ir po vamzdynų darbų reikia atstatyti sienų paviršių.</li>
          <li>Kai formuojama nauja dušo, vonios arba potinkinio WC zona.</li>
        </ul>

        <h2>Senų sienų paruošimas prieš tinkavimą</h2>
        <p>Prieš sienų lyginimą įvertinama esamo pagrindo būklė. Silpnai besilaikantis tinkas, plytelių klijų likučiai ir kitos nestabilios vietos pašalinamos. Paviršius nuvalomas ir paruošiamas pagal naudojamos tinkavimo arba lyginimo sistemos reikalavimus.</p>

        <p>Jeigu atliekamas <a href="/kapitalinis-vonios-remontas">kapitalinis vonios remontas</a>, sienų būklė paprastai įvertinama po pagrindinių griovimo ir demontavimo darbų.</p>

        <h2>Kreivų sienų tiesinimas vonios kambaryje</h2>
        <p>Vonios kambaryje svarbu ne tik tai, kad pati sienos plokštuma būtų lygi. Reikia įvertinti ir bendrą patalpos geometriją – sienų vertikalumą, kampus, būsimos vonios, dušo kabinos, baldų ir santechnikos vietas.</p>

        <p>Ypač svarbu tiksliai paruošti sienas tose vietose, kur bus montuojama vonia, dušo stiklas, praustuvas, spintelės arba kiti prie sienų priglundantys elementai.</p>

        <h2>Sienų tinkavimas prieš plyteles</h2>
        <p>Plytelių klijai nėra skirti dideliems sienų nelygumams taisyti. Jeigu pagrindas stipriai kreivas, pirmiausia sienos išlyginamos tinkamu tinkavimo ar lyginimo mišiniu, o plytelių klijavimo etapas pradedamas jau ant tinkamai paruošto paviršiaus.</p>

        <p>Taip galima tiksliau kontroliuoti galutinę sienų geometriją, plytelių plokštumą ir kampų suvedimą.</p>

        <h2>Sienų paruošimas didelio formato plytelėms</h2>
        <p>Kuo didesnė plytelė, tuo svarbesnis pagrindo lygumas. Didelio formato plytelės atkartoja sienos geometriją, todėl ryškesni pagrindo nelygumai apsunkina montavimą ir gali pabloginti galutinį rezultatą.</p>

        <p>Prieš <a href="/didelio-formato-plyteliu-klijavimas">didelio formato plytelių klijavimą</a> sienų plokštumos tikrinamos ir, kai reikia, papildomai išlyginamos.</p>

        <h2>Kampų išvedimas vonios kambaryje</h2>
        <p>Tvarkinga vonios geometrija ypač svarbi vidiniuose ir išoriniuose kampuose. Netikslūs kampai gali tapti labai matomi klijuojant plyteles, montuojant vonią, dušo pertvarą arba baldus.</p>

        <p>Todėl sienų lyginimo metu, kiek leidžia esamos konstrukcijos, formuojamos taisyklingos plokštumos ir kampai, atsižvelgiant į būsimą plytelių išdėstymą bei vonios įrangą.</p>

        <h2>Sienų lyginimas po santechnikos darbų</h2>
        <p>Keičiant vandentiekio ir kanalizacijos vamzdžius sienose dažnai formuojamos vagos arba atveriamos senos komunikacijos. Užbaigus <a href="/vandentiekio-vamzdziu-keitimas">vandentiekio vamzdžių keitimą</a> ir kitus paslėptus santechnikos darbus, sienų paviršiai sutvarkomi prieš hidroizoliaciją ir galutinę apdailą.</p>

        <h2>Tinkuotos sienos ir hidroizoliacija</h2>
        <p>Dušo ir kitose vandens veikiamose zonose ant tinkamai paruošto pagrindo įrengiama <a href="/vonios-hidroizoliacija">vonios hidroizoliacija</a>. Prieš ją pagrindas turi būti pakankamai tvirtas, stabilus ir paruoštas pagal pasirinktos hidroizoliacinės sistemos reikalavimus.</p>

        <p>Todėl sienų tinkavimas, gruntavimas, hidroizoliacija ir plytelių klijavimas nėra atskiri atsitiktiniai darbai – tai nuosekli vienos apdailos sistemos dalis.</p>

        <h2>Kokias medžiagas naudoju sienų paruošimui?</h2>
        <p>Sienų paruošimui naudoju profesionalius gruntus, tinkavimo, remonto ir lyginimo mišinius, parinktus pagal konkretų pagrindą ir būsimos apdailos reikalavimus. Darbuose gali būti naudojamos <strong>MIRA</strong> arba kitos profesionalios tarpusavyje suderinamos medžiagos.</p>

        <p>Konkreti medžiaga parenkama pagal sluoksnio storį, pagrindo tipą, drėgmės poveikį ir kitus techninius reikalavimus – vieno universalaus mišinio visoms vonios sienoms nėra.</p>

        <h2>Sienų lyginimas ar gipskartonis?</h2>
        <p>Ne visas sienas būtina tinkuoti. Kai kuriais atvejais racionaliau įrengti gipskartonio konstrukciją – pavyzdžiui, formuojant potinkinio WC dėžę, slepiant vamzdžius, kuriant nišas arba taisant tam tikras konstrukcijas.</p>

        <p>Sprendimas pasirenkamas pagal esamos sienos būklę, reikalingą konstrukcijos storį, patalpos išplanavimą ir būsimą apdailą.</p>

        <h2>Sienų paruošimas prieš plytelių klijavimą</h2>
        <p>Baigus lyginimo darbus patikrinamos sienų plokštumos ir pagrindo būklė. Toliau, priklausomai nuo zonos, atliekamas gruntavimas, hidroizoliacija ir <a href="/plyteliu-klijavimas-klaipeda">plytelių klijavimas</a>.</p>

        <h2>Kiek kainuoja sienų lyginimas ir tinkavimas vonioje?</h2>
        <p>Kaina priklauso nuo sienų ploto, esamo pagrindo būklės, nelygumų dydžio, seno tinko demontavimo, reikalingo naujo sluoksnio storio, kampų ir kitų sudėtingų vietų skaičiaus.</p>

        <p>Atliekant visą vonios remontą sienų paruošimo darbai įtraukiami į bendrą sąmatą. Plačiau apie viso remonto kainą – <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>
      </>
    ),
  },

  "gipso-darbai-vonioje": {
    title: "Gipso darbai vonioje – sienos, dėžės ir lubos",
    h1: "Gipso darbai vonios kambaryje",
    description: "Gipso kartono darbai vonios kambaryje. Drėgmei atsparus gipsas, potinkinio WC apsiuvimas, vamzdžių dėžės, nišos, sienos ir lubos.",
    content: (
      <>
        <p><strong>Gipso darbai vonios kambaryje</strong> dažniausiai atliekami kapitalinio remonto metu, kai reikia suformuoti naujas sienų plokštumas, paslėpti vamzdynus, apsiuvi potinkinio WC konstrukciją, įrengti nišas arba pakabinamas lubas. Drėgnose patalpose naudojamos tam pritaikytos drėgmei atsparios gipso kartono plokštės.</p>

        <h2>Kokius gipso darbus atlieku vonioje?</h2>
        <ul>
          <li>Drėgmei atsparaus gipso kartono montavimą.</li>
          <li>Metalinių karkasų sienoms ir dėžėms įrengimą.</li>
          <li>Potinkinio WC rėmo ir bakelio apsiuvimą.</li>
          <li>Vandentiekio ir kanalizacijos vamzdžių dėžių formavimą.</li>
          <li>Vonios nišų ir lentynėlių formavimą.</li>
          <li>Pakabinamų gipso kartono lubų įrengimą.</li>
          <li>Sienų plokštumų išlyginimą gipso kartono konstrukcijomis.</li>
          <li>Angų ir kitų nestandartinių konstrukcijų formavimą.</li>
          <li>Paviršių paruošimą hidroizoliacijai, plytelėms arba dažymui.</li>
        </ul>

        <h2>Potinkinio WC apsiuvimas gipsu</h2>
        <p>Sumontavus potinkinio WC rėmą, konstrukcija apsiuviama taip, kad būtų suformuotas tvirtas ir lygus pagrindas tolimesnei apdailai. Paliekamos reikalingos angos WC pajungimams ir nuleidimo mygtukui, o konstrukcijos matmenys derinami prie būsimo plytelių išdėstymo.</p>

        <p>Daugiau apie pačios sistemos įrengimą rasite puslapyje <a href="/potinkinio-wc-montavimas">potinkinio WC montavimas</a>.</p>

        <h2>Vamzdžių dėžės vonios kambaryje</h2>
        <p>Kapitalinio remonto metu vandentiekio ir kanalizacijos vamzdžius dažnai reikia paslėpti. Tam formuojamos gipso kartono dėžės, kurios priderinamos prie vonios išplanavimo ir būsimos apdailos. Kur reikalinga prieiga prie ventilių, skaitiklių ar kitų mazgų, numatomos revizinės angos.</p>

        <p>Prieš uždarant konstrukcijas turi būti baigti reikalingi <a href="/vandentiekio-vamzdziu-keitimas">vandentiekio vamzdžių keitimo</a> ir <a href="/kanalizacijos-vamzdziu-keitimas">kanalizacijos vamzdžių keitimo</a> darbai.</p>

        <h2>Nišos dušo zonoje</h2>
        <p>Remonto metu sienoje arba specialiai suformuotoje konstrukcijoje galima įrengti nišą šampūnams ir kitoms vonios priemonėms. Jos vieta ir dydis suplanuojami prieš plytelių klijavimą, kad nišos kraštai ir siūlės būtų suderinti su plytelių išdėstymu.</p>

        <h2>Gipso kartono lubos vonioje</h2>
        <p>Pakabinamos gipso kartono lubos leidžia išlyginti senas lubas, paslėpti instaliaciją ir paruošti vietas įleidžiamiems šviestuvams ar kitam apšvietimui. Elektros taškai suplanuojami prieš uždarant konstrukciją. Apie instaliacijos įrengimą daugiau – <a href="/elektros-darbai-vonioje">elektros darbai vonios kambaryje</a>.</p>

        <h2>Gipso paruošimas plytelėms</h2>
        <p>Dušo ir kitose tiesiogiai vandens veikiamose zonose vien drėgmei atsparios gipso plokštės neužtenka. Pagrindas papildomai paruošiamas ir įrengiama tinkama <a href="/vonios-hidroizoliacija">vonios hidroizoliacija</a>. Tik po to paviršius paruoštas plytelių klijavimui.</p>

        <h2>Gipso darbai kapitalinio vonios remonto metu</h2>
        <p>Gipso konstrukcijos yra tik viena viso remonto dalis. Atliekant <a href="/kapitalinis-vonios-remontas">kapitalinį vonios remontą</a>, darbai derinami su santechnika, elektros instaliacija, sienų ir grindų paruošimu, hidroizoliacija bei plytelių klijavimu. Taip iš anksto suplanuojamos visos konstrukcijos ir nereikia perdarinėti jau atliktų darbų.</p>

        <p>Jeigu planuojate vonios remontą Klaipėdoje ar aplinkiniuose rajonuose, susisiekite. Įvertinsiu esamą patalpą, reikalingas gipso konstrukcijas ir kitus remonto darbus.</p>
      </>
    ),
  },

  "lubu-glaistymas-dazymas-vonioje": {
    title: "Lubų glaistymas ir dažymas vonioje",
    h1: "Lubų glaistymas ir dažymas vonioje",
    description: "Vonios lubų glaistymas, šlifavimas, gruntavimas ir dažymas. Senų lubų atnaujinimas, gipso kartono lubų paruošimas ir drėgnoms patalpoms tinkamų dažų naudojimas.",
    content: (
      <>
        <p><strong>Lubų glaistymas ir dažymas vonios kambaryje</strong> yra vienas paskutinių apdailos etapų. Kad lubos atrodytų lygios ir tvarkingos, svarbu ne tik pasirinkti tinkamus dažus, bet ir tinkamai paruošti pagrindą – sutvarkyti įtrūkimus, sujungimus, nelygumus ir paviršių prieš dažymą.</p>

        <h2>Kokius lubų apdailos darbus atlieku?</h2>
        <ul>
          <li>Senų lubų būklės įvertinimą ir paruošimą.</li>
          <li>Smulkių įtrūkimų ir pažeidimų remontą.</li>
          <li>Gipso kartono siūlių ir tvirtinimo vietų glaistymą.</li>
          <li>Viso lubų paviršiaus glaistymą, kai reikia.</li>
          <li>Šlifavimą ir paviršiaus išlyginimą.</li>
          <li>Gruntavimą prieš dažymą.</li>
          <li>Lubų dažymą drėgnoms patalpoms tinkamais dažais.</li>
          <li>Lubų ir sienų sandūrų paruošimą galutinei apdailai.</li>
        </ul>

        <h2>Senų vonios lubų atnaujinimas</h2>
        <p>Senose voniose lubos dažnai būna dažytos keliais dažų sluoksniais, turi įtrūkimų, nelygumų ar drėgmės pažeistų vietų. Prieš glaistant įvertinama, ar esamas sluoksnis tvirtai laikosi ir ar nereikia pašalinti silpnų vietų.</p>

        <p>Kapitalinio remonto metu lubų apdailą patogiausia atlikti užbaigus pagrindinius santechnikos, elektros ir sienų paruošimo darbus.</p>

        <h2>Gipso kartono lubų glaistymas</h2>
        <p>Jeigu vonioje įrengiamos naujos gipso kartono lubos, pirmiausia sutvarkomos plokščių siūlės, tvirtinimo vietos ir kampai. Po to paviršius glaistomas, šlifuojamas ir paruošiamas dažymui.</p>

        <p>Apie pačių konstrukcijų įrengimą daugiau rasite puslapyje <a href="/gipso-darbai-vonioje">gipso darbai vonios kambaryje</a>.</p>

        <h2>Lubų gruntavimas prieš dažymą</h2>
        <p>Prieš dažymą paviršius gruntaujamas pagal pagrindo ir naudojamų medžiagų reikalavimus. Gruntas padeda suvienodinti pagrindo įgeriamumą ir pagerina galutinio dažų sluoksnio sukibimą.</p>

        <h2>Kokie dažai tinkami vonios luboms?</h2>
        <p>Vonios kambaryje dažams tenka didesnė drėgmės apkrova nei įprastose gyvenamosiose patalpose, todėl naudojami tam tinkami dažai. Konkretus produktas parenkamas pagal patalpos ventiliaciją, pagrindo tipą ir gamintojo nurodytą paskirtį.</p>

        <h2>Lubų dažymas ir ventiliacija</h2>
        <p>Net ir kokybiškai nudažytoms luboms svarbi tinkama vonios ventiliacija. Ilgai besilaikanti drėgmė ir kondensatas gali trumpinti apdailos tarnavimo laiką, todėl kapitalinio remonto metu verta įvertinti ir ventiliatoriaus bei ventiliacijos būklę.</p>

        <h2>Apšvietimo vietų paruošimas lubose</h2>
        <p>Jeigu planuojami įleidžiami šviestuvai, LED apšvietimas ar kiti elektros elementai, jų vietos numatomos dar prieš baigiamąjį glaistymą ir dažymą. Taip išvengiama papildomo jau užbaigtų lubų ardymo.</p>

        <p>Daugiau apie elektros dalį – <a href="/elektros-darbai-vonioje">elektros darbai vonios kambaryje</a>.</p>

        <h2>Lubų apdaila kapitalinio vonios remonto metu</h2>
        <p>Atliekant <a href="/kapitalinis-vonios-remontas">kapitalinį vonios remontą</a>, lubų darbai derinami su visa darbų seka. Pirmiausia užbaigiamos paslėptos komunikacijos ir konstrukcijos, o glaistymas bei dažymas atliekami jau artėjant prie galutinės apdailos.</p>

        <h2>Kiek kainuoja lubų glaistymas ir dažymas vonioje?</h2>
        <p>Kaina priklauso nuo lubų ploto, esamo paviršiaus būklės, reikalingo glaistymo sluoksnių skaičiaus, šlifavimo, gruntavimo ir dažymo apimties. Naujos gipso kartono lubos ir stipriai pažeistų senų lubų remontas gali būti skirtingos apimties darbai.</p>

        <p>Jeigu lubų apdaila atliekama kartu su visu vonios remontu, ji įtraukiama į bendrą sąmatą. Daugiau informacijos – <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>
      </>
    ),
  },

  "plyteliu-fugavimas-silikonavimas": {
    title: "Plytelių fugavimas ir silikoninių siūlių sandarinimas",
    h1: "Plytelių fugavimas ir silikoninių kampų sandarinimas",
    description: "Plytelių siūlių fugavimas ir silikoninių kampų sandarinimas vonioje. Sienų, grindų, dušo, vonios ir kitų sandūrų glaistymas bei silikonas.",
    content: (
      <>
        <p><strong>Plytelių fugavimas ir silikoninių siūlių sandarinimas</strong> yra baigiamasis plytelių apdailos etapas. Tvarkingai užpildytos plytelių siūlės ir elastingai užsandarinti kampai ne tik suteikia vonios kambariui užbaigtą vaizdą, bet ir padeda apsaugoti konstrukcijų sandūras nuo vandens bei drėgmės poveikio.</p>

        <h2>Plytelių siūlių fugavimas</h2>
        <p>Po <a href="/plyteliu-klijavimas-klaipeda">plytelių klijavimo</a> ir klijų sukietėjimo plytelių tarpai išvalomi bei užpildomi pasirinktu siūlių glaistu. Fugos spalva gali būti derinama prie plytelių arba naudojama kaip kontrastingas apdailos elementas.</p>

        <ul>
          <li>Sienų plytelių siūlių fugavimas.</li>
          <li>Grindų plytelių siūlių fugavimas.</li>
          <li>Didelio formato plytelių siūlių užpildymas.</li>
          <li>Siūlių išvalymas ir paruošimas prieš fugavimą.</li>
          <li>Tinkamos fugos spalvos ir tipo parinkimas.</li>
          <li>Galutinis plytelių paviršiaus nuvalymas.</li>
        </ul>

        <h2>Cementinė ar epoksidinė fuga?</h2>
        <p>Fugos tipas parenkamas pagal plyteles, siūlių plotį ir konkrečios zonos naudojimą. Įprastose vonios zonose gali būti naudojamas kokybiškas cementinis siūlių glaistas, o didesnės drėgmės ar intensyvesnio naudojimo vietose tam tikrais atvejais pasirenkama epoksidinė fuga. Konkretus sprendimas parenkamas pagal situaciją ir naudojamos medžiagos gamintojo reikalavimus.</p>

        <h2>Kodėl kampai silikoninami, o ne fuguojami?</h2>
        <p>Skirtingų plokštumų sandūros gali nežymiai judėti, todėl sienų kampuose, sienos ir grindų sandūroje bei prie santechnikos įrangos naudojamas elastingas sanitarinis silikonas. Jis gali kompensuoti nedidelius konstrukcijų judesius, kurių standi plytelių fuga neatlaiko taip gerai.</p>

        <h2>Kur vonios kambaryje naudojamas silikonas?</h2>
        <ul>
          <li>Vidiniuose plytelėmis išklijuotų sienų kampuose.</li>
          <li>Sienų ir grindų sandūrose.</li>
          <li>Aplink vonios kraštus.</li>
          <li>Prie dušo padėklo ir dušo kabinos.</li>
          <li>Prie stiklinės dušo pertvaros profilių, kai to reikalauja montavimo sprendimas.</li>
          <li>Aplink praustuvą ar stalviršį.</li>
          <li>Kitose vietose, kur reikalinga elastinga ir vandeniui atspari sandūra.</li>
        </ul>

        <h2>Dušo zonos fugavimas ir silikonas</h2>
        <p>Dušo zonoje siūlių ir kampų įrengimo kokybė ypač svarbi dėl nuolatinio vandens poveikio. Plytelių siūlės kruopščiai užpildomos, o plokštumų sandūros sandarinamos sanitariniu silikonu.</p>

        <p>Tačiau fuga ir silikonas nepakeičia po plytelėmis esančios hidroizoliacijos. Patikima dušo zona formuojama kaip visa sistema – tinkamai paruoštas pagrindas, <a href="/vonios-hidroizoliacija">vonios hidroizoliacija</a>, teisingi nuolydžiai, plytelių klijavimas, fugavimas ir galutinis sandūrų sandarinimas.</p>

        <h2>Silikono spalvos derinimas prie fugos</h2>
        <p>Tvarkingam galutiniam vaizdui silikono spalva dažniausiai derinama prie plytelių siūlių glaisto. Priklausomai nuo pasirinktos plytelės ir dizaino gali būti naudojami balti, pilki, smėlio, tamsūs ar kitų atspalvių silikonai.</p>

        <h2>Seno silikono keitimas vonioje</h2>
        <p>Laikui bėgant silikoninės siūlės gali pakeisti spalvą, atsiskirti nuo paviršiaus ar prarasti sandarumą. Tokiu atveju senas silikonas pašalinamas, sandūra išvaloma ir, tinkamai paruošus paviršių, užpildoma nauju sanitariniu silikonu.</p>

        <h2>Senų plytelių siūlių atnaujinimas</h2>
        <p>Jeigu plytelės dar geros būklės, tačiau siūlės atrodo nusidėvėjusios ar vietomis pažeistos, įvertinama, ar jas galima atnaujinti neatliekant viso vonios remonto. Sprendimas priklauso nuo esamos fugos būklės, plytelių sukibimo ir drėgmės pažeidimų.</p>

        <h2>Fugavimas po didelio formato plytelių klijavimo</h2>
        <p>Didelio formato plytelėms ypač svarbus tikslus siūlių suvedimas ir vienodas jų plotis. Baigiamasis fugavimas turi išlaikyti bendrą plytelių išdėstymo geometriją ir neužgožti didelio formato paviršiaus.</p>

        <p>Daugiau apie tokių plytelių montavimą – <a href="/didelio-formato-plyteliu-klijavimas">didelio formato plytelių klijavimas</a>.</p>

        <h2>Fugavimas ir silikonas kapitalinio vonios remonto metu</h2>
        <p>Atliekant <a href="/kapitalinis-vonios-remontas">kapitalinį vonios remontą</a>, fugavimas ir silikoninių siūlių įrengimas atliekami baigiamajame apdailos etape. Prieš tai jau turi būti tinkamai paruošti pagrindai, įrengta hidroizoliacija ir suklijuotos plytelės.</p>

        <h2>Kiek kainuoja plytelių fugavimas ir silikoninių siūlių įrengimas?</h2>
        <p>Kaina priklauso nuo plytelių ploto, siūlių pločio ir kiekio, pasirinkto glaisto, kampų bei kitų silikoninamų sandūrų ilgio ir esamo paviršiaus būklės. Keičiant seną silikoną papildomai reikia pašalinti ankstesnę medžiagą ir paruošti sandūras.</p>

        <p>Atliekant visą vonios įrengimą, šie darbai įtraukiami į bendrą remonto darbų apimtį. Orientacinę informaciją rasite puslapyje <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>
      </>
    ),
  },

  "vonios-remontas-palanga": {
    title: "Vonios remontas Palangoje",
    h1: "Vonios remontas Palangoje",
    description: "Vonios kambario remontas Palangoje. Griovimas, santechnika, elektra, hidroizoliacija, plytelių klijavimas ir galutinis santechnikos montavimas.",
    content: (
      <>
        <p><strong>Vonios remontą Palangoje</strong> atlieku kompleksiškai – nuo senos apdailos ir santechnikos demontavimo iki naujų vamzdynų, elektros, hidroizoliacijos, plytelių ir galutinio įrangos sumontavimo.</p>

        <p>Galiu atlikti tiek pilną <a href="/kapitalinis-vonios-remontas">kapitalinį vonios remontą</a>, tiek atskirus santechnikos ar apdailos darbus.</p>

        <h2>Vonios remonto darbai Palangoje</h2>
        <ul>
          <li>Senų plytelių, vonios, WC ir kitų konstrukcijų demontavimas.</li>
          <li>Statybinių atliekų surinkimas ir išvežimas.</li>
          <li>Vandentiekio ir kanalizacijos vamzdžių keitimas.</li>
          <li>Santechnikos taškų perkėlimas.</li>
          <li>Potinkinio WC ir dušo trapo montavimas.</li>
          <li>Elektros instaliacijos atnaujinimas.</li>
          <li>Elektrinio grindų šildymo įrengimas.</li>
          <li>Sienų lyginimas, tinkavimas ir gipso darbai.</li>
          <li>Vonios ir dušo zonos hidroizoliacija.</li>
          <li>Plytelių klijavimas, fugavimas ir silikoninių siūlių įrengimas.</li>
          <li>Vonios, dušo kabinos, praustuvo, WC, gyvatuko ir maišytuvų montavimas.</li>
        </ul>

        <h2>Butų ir apartamentų vonios remontas Palangoje</h2>
        <p>Palangoje nemažai vonios kambarių remontuojama butuose ir apartamentuose, todėl svarbu iš anksto suplanuoti ne tik apdailą, bet ir vamzdynų, elektros bei santechnikos išdėstymą. Jeigu būstas naudojamas ne nuolat, darbų eiga ir sprendimai gali būti suderinti iš anksto.</p>

        <h2>Dušo zonos įrengimas</h2>
        <p>Vietoje senos vonios galima įrengti dušo zoną su <a href="/duso-trapo-montavimas">linijiniu trapu</a>, stikline pertvara ir vientisomis plytelėmis. Tokiam sprendimui svarbus tinkamas grindų nuolydis ir <a href="/vonios-hidroizoliacija">hidroizoliacija</a>.</p>

        <h2>Plytelių klijavimas Palangoje</h2>
        <p>Klijuoju standartines ir <a href="/didelio-formato-plyteliu-klijavimas">didelio formato plyteles</a>. Prieš klijavimą paruošiamos sienų ir grindų plokštumos, suplanuojamas plytelių išdėstymas ir matomos siūlės.</p>

        <h2>Kiek kainuoja vonios remontas Palangoje?</h2>
        <p>Kaina priklauso nuo patalpos dydžio, esamos būklės, griovimo, vamzdynų, elektros, pasirinkto dušo ar vonios sprendimo ir plytelių formato. Orientacinę informaciją rasite puslapyje <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>

        <p>Norint tikslios sąmatos, pirmiausia įvertinama konkreti patalpa ir numatoma darbų apimtis.</p>
      </>
    ),
  },

  "vonios-remontas-gargzdai": {
    title: "Vonios remontas Gargžduose",
    h1: "Vonios remontas Gargžduose",
    description: "Pilnas vonios remontas Gargžduose. Santechnikos, elektros, griovimo, sienų paruošimo, hidroizoliacijos, plytelių ir įrangos montavimo darbai.",
    content: (
      <>
        <p><strong>Vonios remontą Gargžduose</strong> galiu atlikti nuo pirmųjų griovimo darbų iki visiškai paruošto naudoti vonios kambario. Vienose rankose lieka santechnika, apdaila, plytelės ir didžioji dalis kitų remonto etapų.</p>

        <h2>Pilnas vonios įrengimas Gargžduose</h2>
        <p>Atliekant pilną remontą darbų eiga suplanuojama nuosekliai: pirmiausia demontuojama sena apdaila, tada keičiamos paslėptos komunikacijos, paruošiamos sienos ir grindys, atliekama hidroizoliacija ir tik tada pradedama galutinė apdaila.</p>

        <ul>
          <li><a href="/vonios-griovimo-darbai">Vonios griovimo ir demontavimo darbai</a>.</li>
          <li><a href="/vandentiekio-vamzdziu-keitimas">Vandentiekio vamzdžių keitimas</a>.</li>
          <li><a href="/kanalizacijos-vamzdziu-keitimas">Kanalizacijos vamzdžių keitimas</a>.</li>
          <li><a href="/santechnikos-tasku-perkelimas">Santechnikos taškų perkėlimas</a>.</li>
          <li><a href="/elektros-darbai-vonioje">Elektros darbai vonioje</a>.</li>
          <li><a href="/sienu-lyginimas-tinkavimas-vonioje">Sienų lyginimas ir tinkavimas</a>.</li>
          <li><a href="/gipso-darbai-vonioje">Gipso kartono darbai</a>.</li>
          <li><a href="/vonios-hidroizoliacija">Hidroizoliacijos įrengimas</a>.</li>
          <li><a href="/plyteliu-klijavimas-klaipeda">Plytelių klijavimas</a>.</li>
        </ul>

        <h2>Vonios remontas bute ar nuosavame name</h2>
        <p>Gargžduose darbus galima planuoti tiek daugiabučio bute, tiek nuosavame name. Nuosavame name dažnai yra daugiau galimybių keisti vamzdynų trasas ir patalpos išplanavimą, o daugiabutyje reikia atsižvelgti į esamus stovus ir bendras sistemas.</p>

        <h2>Potinkinis WC ir dušo zona</h2>
        <p>Kapitalinio remonto metu galima įrengti <a href="/potinkinio-wc-montavimas">potinkinio WC sistemą</a>, dušą be padėklo, stiklinę pertvarą ir kitus šiuolaikinius vonios sprendimus.</p>

        <h2>Šildomos grindys vonioje</h2>
        <p>Remonto metu taip pat galima įrengti <a href="/elektrinis-grindu-sildymas-vonioje">elektrinį grindų šildymą</a>, iš anksto suderinant jį su grindų aukščiais, hidroizoliacija ir plytelėmis.</p>

        <h2>Vonios remonto kaina Gargžduose</h2>
        <p>Tiksli kaina skaičiuojama pagal darbų apimtį, o ne vien pagal vonios kvadratūrą. Skiriasi tiek senų patalpų būklė, tiek santechnikos išplanavimas ir pasirinktos apdailos medžiagos.</p>

        <p>Daugiau – <a href="/vonios-remonto-kaina">vonios remonto kainų puslapyje</a>.</p>
      </>
    ),
  },

  "vonios-remontas-kretinga": {
    title: "Vonios remontas Kretingoje",
    h1: "Vonios remontas Kretingoje",
    description: "Vonios remonto darbai Kretingoje nuo demontavimo iki galutinės apdailos. Santechnika, elektra, hidroizoliacija, plytelės ir įrangos montavimas.",
    content: (
      <>
        <p><strong>Vonios remontą Kretingoje</strong> atlieku kompleksiškai – galima sutvarkyti visą patalpą nuo senos vonios išardymo iki naujos santechnikos, plytelių ir galutinės apdailos.</p>

        <h2>Kapitalinis vonios remontas Kretingoje</h2>
        <p>Kapitalinis remontas aktualus tada, kai neužtenka pakeisti vien plytelių ar santechnikos. Senesnėje patalpoje verta kartu įvertinti vandentiekio ir kanalizacijos vamzdžius, elektros instaliaciją, sienų ir grindų pagrindus.</p>

        <p>Plačiau – <a href="/kapitalinis-vonios-remontas">kapitalinis vonios remontas</a>.</p>

        <h2>Ką galiu atlikti?</h2>
        <ul>
          <li>Senos vonios ir apdailos išardymą.</li>
          <li>Statybinių atliekų išnešimą ir išvežimą.</li>
          <li>Vandentiekio ir kanalizacijos atnaujinimą.</li>
          <li>WC, praustuvo, dušo ar vonios taškų perkėlimą.</li>
          <li>Elektros instaliacijos paruošimą.</li>
          <li>Sienų ir grindų pagrindų išlyginimą.</li>
          <li>Hidroizoliacijos įrengimą.</li>
          <li>Plytelių klijavimą.</li>
          <li>Fugavimą ir silikoninių kampų sandarinimą.</li>
          <li>Galutinį WC, vonios, dušo, praustuvo ir maišytuvų montavimą.</li>
        </ul>

        <h2>Santechnikos darbai Kretingoje</h2>
        <p>Vonios remonto metu galima iš karto pakeisti <a href="/vandentiekio-vamzdziu-keitimas">vandentiekio vamzdžius</a>, kanalizaciją ir paruošti naujus santechnikos taškus pagal būsimą patalpos išplanavimą.</p>

        <h2>Vonios sienų ir grindų paruošimas</h2>
        <p>Nuėmus senas plyteles dažnai reikia papildomai lyginti sienas ar grindis. Prieš hidroizoliaciją ir plytelių klijavimą pagrindai sutvarkomi taip, kad būtų stabilūs ir tinkamos geometrijos.</p>

        <h2>Vonios įrangos montavimas</h2>
        <p>Baigus apdailą gali būti montuojamas <a href="/wc-montavimas">WC</a>, <a href="/praustuvo-montavimas">praustuvas</a>, <a href="/vonios-montavimas">vonia</a>, <a href="/duso-kabinos-montavimas">dušo kabina</a>, maišytuvai ir kita vonios įranga.</p>

        <h2>Kiek kainuoja vonios remontas Kretingoje?</h2>
        <p>Galutinę kainą lemia griovimo ir paruošimo darbai, vamzdynų būklė, santechnikos išplanavimas, plytelių formatas bei pasirinkti sprendimai. Sąmata sudaroma pagal konkretų objektą.</p>

        <p>Orientacinės kainos pateiktos puslapyje <a href="/vonios-remonto-kaina">kiek kainuoja vonios remontas</a>.</p>
      </>
    ),
  },

  "vonios-remontas-silute": {
    title: "Vonios remontas Šilutėje",
    h1: "Vonios remontas Šilutėje",
    description: "Vonios kambario remontas Šilutėje. Griovimas, santechnika, elektra, sienų lyginimas, hidroizoliacija, plytelių klijavimas ir santechnikos montavimas.",
    content: (
      <>
        <p><strong>Vonios remontą Šilutėje</strong> atlieku nuo pradinių griovimo darbų iki visiškai paruošto vonios kambario. Vienose rankose gali būti santechnika, elektros paruošimas, sienų ir grindų darbai, hidroizoliacija, plytelės bei galutinis įrangos montavimas.</p>

        <h2>Kokius vonios remonto darbus atlieku Šilutėje?</h2>
        <ul>
          <li>Senų plytelių, vonios, WC ir kitos įrangos demontavimą.</li>
          <li>Statybinių atliekų surinkimą ir išvežimo organizavimą.</li>
          <li>Vandentiekio ir kanalizacijos vamzdžių keitimą.</li>
          <li>Santechnikos taškų perkėlimą.</li>
          <li>Elektros taškų, apšvietimo ir rozečių paruošimą.</li>
          <li>Sienų lyginimą, tinkavimą ir gipso kartono darbus.</li>
          <li>Grindų betonavimą ir pagrindo paruošimą.</li>
          <li>Elektrinio grindų šildymo įrengimą.</li>
          <li>Hidroizoliacijos įrengimą.</li>
          <li>Plytelių klijavimą, fugavimą ir silikoninių siūlių įrengimą.</li>
          <li>Potinkinio WC, praustuvo, vonios, dušo ir maišytuvų montavimą.</li>
        </ul>

        <h2>Pilnas vonios remontas nuo griovimo iki santechnikos</h2>
        <p>Atliekant kapitalinį remontą darbai planuojami kaip viena sistema. Pirmiausia išardoma sena apdaila, tada įrengiami nauji vandentiekio, kanalizacijos ir elektros taškai. Paruošus sienas bei grindis atliekama hidroizoliacija, klijuojamos plytelės ir montuojama galutinė santechnika.</p>

        <p>Daugiau apie visą procesą: <a href="/kapitalinis-vonios-remontas">kapitalinis vonios remontas</a>. Orientacines darbų kainas rasite puslapyje <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>

        <h2>Vonios remontas Šilutėje ir aplinkiniuose rajonuose</h2>
        <p>Prieš pradedant darbus įvertinu patalpos būklę, reikalingus santechnikos ir apdailos darbus bei aptariu norimą galutinį rezultatą. Dėl konkretaus objekto galima susisiekti telefonu arba pateikti užklausą svetainėje.</p>
      </>
    ),
  },

  "vonios-remontas-plunge": {
    title: "Vonios remontas Plungėje",
    h1: "Vonios remontas Plungėje",
    description: "Vonios kambario remontas Plungėje. Kapitalinis remontas, vamzdynų keitimas, elektros darbai, hidroizoliacija, plytelės ir santechnikos įrangos montavimas.",
    content: (
      <>
        <p><strong>Vonios remontas Plungėje</strong> gali apimti visą darbų kompleksą – nuo senos vonios išardymo iki naujos santechnikos ir galutinės apdailos. Darbus galima suplanuoti taip, kad nereikėtų atskirai ieškoti kelių skirtingų meistrų.</p>

        <h2>Kapitalinio vonios remonto darbai Plungėje</h2>
        <ul>
          <li>Senos apdailos ir santechnikos demontavimas.</li>
          <li>Statybinių atliekų išvežimas arba konteinerio organizavimas.</li>
          <li>Vandentiekio vamzdžių keitimas.</li>
          <li>Kanalizacijos vamzdžių keitimas.</li>
          <li>Naujų santechnikos taškų įrengimas ir perkėlimas.</li>
          <li>Elektros instaliacijos atnaujinimas vonios kambaryje.</li>
          <li>Sienų tinkavimas ir lyginimas.</li>
          <li>Gipso kartono konstrukcijų įrengimas.</li>
          <li>Hidroizoliacijos įrengimas drėgnose zonose.</li>
          <li>Plytelių klijavimas ir siūlių užbaigimas.</li>
          <li>Vonios, dušo, WC, praustuvo ir maišytuvų montavimas.</li>
        </ul>

        <h2>Santechnikos atnaujinimas remonto metu</h2>
        <p>Kapitalinio remonto metu verta įvertinti ne tik matomą apdailą, bet ir sienose bei grindyse esančius vamzdynus. Esant poreikiui atliekamas <a href="/vandentiekio-vamzdziu-keitimas">vandentiekio vamzdžių keitimas</a>, <a href="/kanalizacijos-vamzdziu-keitimas">kanalizacijos vamzdžių keitimas</a> ir <a href="/santechnikos-tasku-perkelimas">santechnikos taškų perkėlimas</a>.</p>

        <h2>Apdailos darbai</h2>
        <p>Paruošus komunikacijas sutvarkomos sienų ir grindų plokštumos, įrengiama <a href="/vonios-hidroizoliacija">vonios hidroizoliacija</a>, o tada atliekamas plytelių klijavimas ir galutinės santechnikos montavimas.</p>

        <p>Dėl vonios remonto Plungėje galima pateikti užklausą su trumpu darbų aprašymu ir gauti preliminarų darbų įvertinimą.</p>
      </>
    ),
  },

  "vonios-remontas-siauliai": {
    title: "Vonios remontas Šiauliuose",
    h1: "Vonios remontas Šiauliuose",
    description: "Vonios kambario remontas Šiauliuose nuo griovimo iki galutinės apdailos. Santechnika, elektra, hidroizoliacija, plytelės ir vonios įrangos montavimas.",
    content: (
      <>
        <p><strong>Vonios remontas Šiauliuose</strong> atliekamas kompleksiškai, kai reikia iš esmės atnaujinti seną vonios kambarį – pakeisti vamzdynus, elektros taškus, išlyginti paviršius, įrengti hidroizoliaciją, suklijuoti plyteles ir sumontuoti naują santechniką.</p>

        <h2>Vonios kambario remonto darbai Šiauliuose</h2>
        <ul>
          <li>Griovimo ir demontavimo darbai.</li>
          <li>Statybinių atliekų išvežimas.</li>
          <li>Vandentiekio ir nuotekų vamzdynų atnaujinimas.</li>
          <li>WC, dušo, vonios ir praustuvo taškų perkėlimas.</li>
          <li>Elektros instaliacijos paruošimas.</li>
          <li>Elektrinio grindų šildymo įrengimas.</li>
          <li>Sienų tinkavimas ir lyginimas.</li>
          <li>Gipso kartono dėžės, nišos ir lubos.</li>
          <li>Grindų pagrindo paruošimas.</li>
          <li>Hidroizoliacija.</li>
          <li>Plytelių klijavimas, fugavimas ir silikonas.</li>
          <li>Galutinis santechnikos įrangos montavimas.</li>
        </ul>

        <h2>Dušo zonos ir potinkinio WC įrengimas</h2>
        <p>Remonto metu gali būti įrengiamas <a href="/duso-trapo-montavimas">linijinis dušo trapas</a>, formuojami reikalingi grindų nuolydžiai, montuojamas <a href="/potinkinio-wc-montavimas">potinkinis WC</a> ir paruošiamos konstrukcijos plytelių apdailai.</p>

        <h2>Plytelių ir apdailos darbai</h2>
        <p>Atlieku standartinių ir <a href="/didelio-formato-plyteliu-klijavimas">didelio formato plytelių klijavimą</a>. Prieš apdailą pagrindai išlyginami ir drėgnose zonose įrengiama hidroizoliacija.</p>

        <p>Kiekviena vonia skirtinga, todėl tiksli darbų apimtis ir kaina nustatoma įvertinus konkretų objektą.</p>
      </>
    ),
  },

  "vonios-remontas-kaunas": {
    title: "Vonios remontas Kaune",
    h1: "Vonios remontas Kaune",
    description: "Kapitalinis vonios kambario remontas Kaune. Demontavimas, vamzdynai, elektra, grindų ir sienų paruošimas, hidroizoliacija, plytelės ir santechnikos montavimas.",
    content: (
      <>
        <p><strong>Vonios remontas Kaune</strong> gali būti atliekamas kaip pilnas kapitalinis atnaujinimas, apimantis visus pagrindinius vonios įrengimo etapus – nuo senos apdailos pašalinimo iki galutinio WC, dušo, vonios, praustuvo ir maišytuvų sumontavimo.</p>

        <h2>Pilnas vonios kambario remontas Kaune</h2>
        <ul>
          <li>Senų plytelių ir santechnikos demontavimas.</li>
          <li>Griovimo atliekų surinkimas ir išvežimas.</li>
          <li>Vandentiekio vamzdynų keitimas.</li>
          <li>Kanalizacijos sistemos atnaujinimas.</li>
          <li>Santechnikos taškų perkėlimas pagal naują išplanavimą.</li>
          <li>Elektros rozečių, apšvietimo ir kitų taškų paruošimas.</li>
          <li>Grindų betonavimas ir lyginimas.</li>
          <li>Sienų tinkavimas ir gipso kartono darbai.</li>
          <li>Elektrinis grindų šildymas.</li>
          <li>Hidroizoliacija.</li>
          <li>Plytelių klijavimas.</li>
          <li>Fugavimas ir silikoninių siūlių įrengimas.</li>
          <li>Galutinis santechnikos montavimas.</li>
        </ul>

        <h2>Vonios išplanavimo keitimas</h2>
        <p>Jeigu seno vonios kambario išplanavimas nepatogus, remonto metu galima keisti santechnikos įrangos vietas. Atliekamas <a href="/santechnikos-tasku-perkelimas">santechnikos taškų perkėlimas</a>, pritaikomi vandentiekio bei kanalizacijos vamzdžiai ir iš anksto suplanuojamos būsimos įrangos vietos.</p>

        <h2>Nuo pagrindo iki galutinės apdailos</h2>
        <p>Vonios ilgaamžiškumui svarbi ne tik matoma plytelių apdaila. Didelę reikšmę turi tinkamai paruošti pagrindai, vamzdynai ir <a href="/vonios-hidroizoliacija">hidroizoliacija</a>. Tik tada atliekami galutiniai apdailos ir montavimo darbai.</p>

        <p>Orientacinę informaciją rasite puslapyje <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>
      </>
    ),
  },

  "vonios-remontas-vilnius": {
    title: "Vonios remontas Vilniuje",
    h1: "Vonios remontas Vilniuje",
    description: "Kapitalinis vonios remontas Vilniuje. Griovimo darbai, santechnika, elektra, hidroizoliacija, plytelių klijavimas, dušo zonos ir galutinis įrangos montavimas.",
    content: (
      <>
        <p><strong>Vonios remontas Vilniuje</strong> gali apimti visą kapitalinio remonto procesą – senos apdailos ir įrangos demontavimą, komunikacijų atnaujinimą, pagrindų paruošimą, hidroizoliaciją, plytelių darbus bei galutinį santechnikos sumontavimą.</p>

        <h2>Kokius vonios remonto darbus atlieku Vilniuje?</h2>
        <ul>
          <li>Senos vonios apdailos ir įrangos demontavimą.</li>
          <li>Statybinių atliekų surinkimą ir išvežimą.</li>
          <li>Vandentiekio vamzdžių keitimą.</li>
          <li>Kanalizacijos vamzdynų atnaujinimą.</li>
          <li>Santechnikos taškų perkėlimą.</li>
          <li>Elektros instaliacijos darbus vonios kambaryje.</li>
          <li>Sienų lyginimą ir tinkavimą.</li>
          <li>Gipso kartono konstrukcijas, dėžes ir lubas.</li>
          <li>Grindų paruošimą ir betonavimą.</li>
          <li>Elektrinio grindų šildymo įrengimą.</li>
          <li>Hidroizoliacijos įrengimą.</li>
          <li>Plytelių klijavimą, fugavimą ir silikoninių siūlių įrengimą.</li>
          <li>Potinkinio WC, dušo, vonios, praustuvo ir maišytuvų montavimą.</li>
        </ul>

        <h2>Kapitalinis vonios remontas</h2>
        <p>Kapitalinio remonto metu svarbu dar prieš plytelių klijavimą suplanuoti visą būsimą vonios įrangą. Tai leidžia tinkamai išvesti vandentiekį, kanalizaciją, elektros taškus ir paruošti sienų bei grindų konstrukcijas.</p>

        <p>Plačiau apie darbų eigą: <a href="/kapitalinis-vonios-remontas">kapitalinis vonios remontas</a>.</p>

        <h2>Dušo zonos, potinkinis WC ir šildomos grindys</h2>
        <p>Pagal projektą gali būti įrengiamas <a href="/duso-trapo-montavimas">dušo trapas</a>, <a href="/potinkinio-wc-montavimas">potinkinis WC</a> bei <a href="/elektrinis-grindu-sildymas-vonioje">elektrinis grindų šildymas</a>. Visi šie darbai suplanuojami prieš galutinę plytelių apdailą.</p>

        <h2>Vonios remonto kaina Vilniuje</h2>
        <p>Galutinė kaina priklauso nuo patalpos dydžio, esamos būklės, vamzdynų, pasirinkto išplanavimo, plytelių formato ir montuojamos įrangos. Preliminarią informaciją rasite puslapyje <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>
      </>
    ),
  },

  "plyteliu-klijavimas-klaipeda": {
    title: "Plytelių klijavimas Klaipėda",
    h1: "Kokybiškas plytelių klijavimas Klaipėdoje",
    description: "Visų tipų ir formatų plytelių klijavimas. Tikslūs 45 laipsnių kampai, idealus lygumas ir ilgaamžiškumas.",
    content: (
      <>
        <p>Plytelių klijavimas – tai apdailos etapas, reikalaujantis ypatingo kruopštumo ir tikslumo. Būtent nuo šio darbo kokybės priklauso galutinis vonios kambario estetinio vaizdo įspūdis.</p>
        <h2>Profesionalus požiūris į detales</h2>
        <p>Klijuoju keramines, akmens masės ir mozaikos plyteles. Naudoju tik profesionalią įrangą, todėl užtikrinu nepriekaištingą plytelių pjovimą ir suleidimą:</p>
        <ul>
          <li><strong>Plytelių pjovimas 45° kampu</strong> – išorinių kampų formavimui nenaudojami jokie plastikiniai ar metaliniai kampukai, tik tikslus plytelių suleidimas (gerontavimas).</li>
          <li>Tikslus plytelių išdėstymo planavimas, siekiant išvengti neestetiškų siaurų pjūvių matomose vietose.</li>
          <li>Didelio formato plytelių (iki 120×60 cm ar net 120×120 cm) montavimas.</li>
          <li>Aukščiausios kokybės klijų ir glaistų parinkimas pagal plytelių tipą ir pagrindą.</li>
        </ul>
      </>
    ),
  },
  "santechnikos-darbai-klaipeda": {
    title: "Santechnikos darbai Klaipėdoje",
    h1: "Vonios santechnikos darbai",
    description: "Vamzdynų keitimas, potinkinių sistemų, dušo trapų, maišytuvų ir kitos santechnikos montavimas vonios kambaryje.",
    content: (
      <>
        <p>Patikima santechnika – tai vonios kambario ilgaamžiškumo pagrindas. Net ir pati brangiausia apdaila neteks prasmės, jei už sienos esantys vamzdžiai bus sumontuoti nekokybiškai.</p>
        <h2>Ką apima vonios santechnikos darbai?</h2>
        <p>Vykdant kapitalinį vonios remontą, dažniausiai reikalingas pilnas vamzdynų atnaujinimas:</p>
        <ul>
          <li>Vandentiekio ir kanalizacijos taškų pernešimas pagal naują projektą.</li>
          <li>Potinkinio WC rėmo montavimas.</li>
          <li>Dušo trapo ar latako įrengimas formuojant nuolydį.</li>
          <li>Potinkinių dušo ir praustuvo maišytuvų sistemų įrengimas.</li>
          <li>Kriauklių, unitazų, bide, vonių pajungimas baigiamajame etape.</li>
        </ul>
        <p>Naudoju tik laiko patikrintas vamzdynų sistemas (pvz., daugiasluoksnius ar presuojamus vamzdžius), garantuojančias apsaugą nuo pratekėjimo.</p>
      </>
    ),
  },
  "vonios-remonto-kaina": {
    title: "Vonios remonto kaina – kiek kainuoja remontas?",
    h1: "Kiek kainuoja vonios remontas?",
    description: "Vonios remonto kainos ir orientacinė sąmata. Sužinokite, kiek kainuoja kapitalinis vonios remontas, nuo ko priklauso darbų ir medžiagų kaina.",
    content: (
      <>
        <p><strong>Kiek kainuoja vonios remontas?</strong> Tai vienas dažniausių klausimų prieš pradedant darbus. Tiksli suma priklauso ne vien nuo vonios ploto – didelę įtaką turi esamų sienų ir grindų būklė, griovimo darbai, vamzdynų keitimas, santechnikos taškų perkėlimas, plytelių formatas ir pasirinkta įranga.</p>

        <h2>Orientacinė kapitalinio vonios remonto kaina</h2>
        <p>Pilnas standartinės vonios kapitalinis remontas su darbais ir pagrindinėmis juodosiomis statybinėmis medžiagomis dažniausiai prasideda maždaug nuo <strong>3500 €</strong>. Sudėtingesniuose objektuose galutinė suma gali būti didesnė, todėl tiksli sąmata sudaroma įvertinus konkrečią patalpą ir darbų apimtį.</p>

        <p>Pavyzdžiui, maždaug <strong>5 m² vonios kambario pilnų remonto darbų kaina be apdailos medžiagų gali būti apie 3200–3300 €</strong>, kai atliekamas visas darbų kompleksas. Galutinė suma keičiasi priklausomai nuo objekto.</p>

        <h2>Kas įeina į pilną vonios remonto kainą?</h2>
        <ul>
          <li>Senų plytelių, vonios, WC ir kitos įrangos demontavimas.</li>
          <li>Vandentiekio ir kanalizacijos vamzdžių keitimas.</li>
          <li>Santechnikos taškų perkėlimas pagal naują išplanavimą.</li>
          <li>Elektros instaliacijos ir naujų elektros taškų paruošimas.</li>
          <li>Sienų ir grindų lyginimas.</li>
          <li>Grindų betonavimas ir dušo nuolydžių formavimas, kai reikia.</li>
          <li>Hidroizoliacijos įrengimas.</li>
          <li>Plytelių klijavimas ir fugavimas.</li>
          <li>Silikoninis kampų ir jungčių sandarinimas.</li>
          <li>Potinkinio arba pastatomo WC montavimas.</li>
          <li>Vonios, dušo kabinos arba walk-in pertvaros montavimas.</li>
          <li>Praustuvo, spintelės, maišytuvų ir kitos santechnikos montavimas.</li>
          <li>Gyvatuko arba rankšluosčių džiovintuvo montavimas.</li>
          <li>Baigiamieji montavimo ir apdailos darbai.</li>
        </ul>

        <h2>Nuo ko labiausiai priklauso vonios remonto kaina?</h2>
        <ol>
          <li><strong>Vonios dydis.</strong> Didesnėje patalpoje paprastai daugiau grindų ir sienų ploto, tačiau vien kvadratiniai metrai visos kainos neparodo.</li>
          <li><strong>Esama būklė.</strong> Senos statybos bute gali reikėti nuimti atšokusį tinką, keisti vamzdynus, lyginti sienas ar iš naujo formuoti grindis.</li>
          <li><strong>Santechnikos išplanavimas.</strong> Praustuvo, WC, vonios ar dušo perkėlimas reiškia papildomus vandentiekio ir kanalizacijos darbus.</li>
          <li><strong>Plytelių formatas.</strong> Didelio formato plytelėms reikia labai lygaus pagrindo, kitokios įrangos ir daugiau tikslumo.</li>
          <li><strong>Dušo sprendimas.</strong> Paprastas padėklas ir grindyse įrengtas linijinis trapas yra skirtingos darbų apimties.</li>
          <li><strong>Potinkinės sistemos.</strong> Potinkinis WC, potinkinis maišytuvas ir kiti sienoje slepiami mazgai įrengiami dar prieš apdailą.</li>
          <li><strong>Elektros darbai.</strong> Papildomos rozetės, LED apšvietimas, veidrodis, ventiliatorius ar grindinis šildymas didina darbų apimtį.</li>
        </ol>

        <h2>Vonios remonto kaina su medžiagomis</h2>
        <p>Patogu atskirti dvi medžiagų grupes. <strong>Juodosios statybinės medžiagos</strong> – vamzdžiai, laidai, tinkas, gipskartonis, hidroizoliacija, plytelių klijai, glaistai, silikonai ir kitos montavimo medžiagos. <strong>Apdailos medžiagas ir santechniką</strong> – plyteles, WC, vonią, dušo kabiną, praustuvą, baldus ir maišytuvus – klientas gali rinktis pagal savo biudžetą.</p>

        <p>Dėl to dvi vienodo dydžio vonios gali kainuoti labai skirtingai: darbų apimtis gali būti panaši, tačiau pasirinktų plytelių, santechnikos ir baldų kaina gali skirtis kelis kartus.</p>

        <h2>Kiek kainuoja 5 m² vonios remontas?</h2>
        <p>Maždaug 5 m² vonios kambaryje dažnai reikia atlikti ne tik apdailą, bet ir vandentiekio, kanalizacijos, elektros, hidroizoliacijos bei galutinio santechnikos montavimo darbus. Todėl sąmata skaičiuojama pagal visą darbų komplektą, o ne vien grindų plotą.</p>

        <h2>Kiek kainuoja kapitalinis vonios remontas?</h2>
        <p><a href="/kapitalinis-vonios-remontas">Kapitalinio vonios remonto</a> metu paprastai pašalinama sena apdaila, atnaujinamos paslėptos sistemos ir vonios kambarys įrengiamas iš naujo. Dėl to kapitalinis remontas kainuoja daugiau nei kosmetinis plytelių ar santechnikos pakeitimas, tačiau kartu išsprendžiamos senų vamzdžių, elektros ir pagrindų problemos.</p>

        <h2>Atskirų vonios darbų kainos</h2>
        <p>Jeigu pilno remonto nereikia, galima atlikti atskirus darbus. Jų kaina priklauso nuo konkrečios situacijos ir montavimo sudėtingumo:</p>
        <ul>
          <li><a href="/gyvatuko-keitimas">Gyvatuko keitimas ir montavimas</a>.</li>
          <li><a href="/wc-montavimas">WC ir unitazo montavimas</a>.</li>
          <li><a href="/potinkinio-wc-montavimas">Potinkinio WC montavimas</a>.</li>
          <li><a href="/duso-kabinos-montavimas">Dušo kabinos montavimas</a>.</li>
          <li><a href="/duso-trapo-montavimas">Dušo trapo montavimas</a>.</li>
          <li><a href="/vonios-montavimas">Vonios montavimas ir keitimas</a>.</li>
          <li><a href="/praustuvo-montavimas">Praustuvo ir kriauklės montavimas</a>.</li>
          <li><a href="/maisytuvo-montavimas">Maišytuvo montavimas ir keitimas</a>.</li>
          <li><a href="/vandentiekio-vamzdziu-keitimas">Vandentiekio vamzdžių keitimas</a>.</li>
          <li><a href="/kanalizacijos-vamzdziu-keitimas">Kanalizacijos vamzdžių keitimas</a>.</li>
          <li><a href="/santechnikos-tasku-perkelimas">Santechnikos taškų perkėlimas</a>.</li>
          <li><a href="/elektros-darbai-vonioje">Elektros darbai vonios kambaryje</a>.</li>
        </ul>

        <h2>Kaip sužinoti tikslią vonios remonto kainą?</h2>
        <p>Tiksliausiai sąmata sudaroma pamačius objektą ir žinant, kokio galutinio rezultato norima. Vertinama esama sienų ir grindų būklė, vamzdynai, elektros instaliacija, būsimas santechnikos išdėstymas, plytelių formatas ir kiti darbai.</p>

        <p>Po objekto įvertinimo galima aiškiai suskaičiuoti darbų apimtį ir išvengti situacijos, kai pradėjus remontą paaiškėja, kad dalis svarbių darbų į pradinę kainą nebuvo įtraukta.</p>
      </>
    ),
  },
  "didelio-formato-plyteliu-klijavimas": {
    title: "Didelio formato plytelių klijavimas",
    h1: "Didelio formato plytelių montavimas",
    description: "120×60, 120×120 ir kitų didelių formatų plytelių klijavimas vonios kambariuose.",
    content: (
      <>
        <p>Didelio formato plytelės (120×60 cm, 120×120 cm ar dar didesnės) – tai modernios prabangos standartas. Jos kuria vientisą, erdvų vaizdą, mažiau matomų siūlių, todėl vonios kambarys atrodo kur kas estetiškiau ir jį lengviau prižiūrėti.</p>
        <h2>Svarbiausi niuansai klijuojant dideles plyteles</h2>
        <p>Šių plytelių montavimas iš esmės skiriasi nuo standartinių (pvz., 60×60 cm) plytelių:</p>
        <ul>
          <li><strong>Idealus sienų lygumas:</strong> Klijuojant dideles plyteles, sienos turi būti išlygintos milimetro tikslumu, kitaip išryškės nelygumai kampuose.</li>
          <li><strong>Specialūs klijai:</strong> Naudojami aukštos elastingumo klasės (S1 arba S2) klijai, kadangi didelės plokštės labiau reaguoja į temperatūros svyravimus ir pastato judėjimą.</li>
          <li><strong>Įranga:</strong> Reikalingos specialios pjaustymo staklės, transportavimo pritraukėjai. Turiu visą reikiamą įrangą darbui su dideliais formatais.</li>
        </ul>
      </>
    ),
  },
  "vonios-griovimo-darbai": {
    title: "Vonios griovimo darbai ir statybinių atliekų išvežimas",
    h1: "Vonios griovimo ir demontavimo darbai",
    description: "Vonios griovimo ir demontavimo darbai. Senų plytelių, santechnikos, grindų ir konstrukcijų ardymas, statybinių atliekų surinkimas, išnešimas ir išvežimas.",
    content: (
      <>
        <p><strong>Vonios griovimo darbai</strong> yra pirmasis kapitalinio remonto etapas. Prieš įrengiant naują santechniką, vamzdynus, elektros instaliaciją, hidroizoliaciją ir plyteles reikia pašalinti seną apdailą bei nereikalingas konstrukcijas.</p>

        <p>Griovimo darbus galiu atlikti kompleksiškai – nuo senos santechnikos ir plytelių demontavimo iki statybinių atliekų surinkimo, išnešimo iš objekto ir išvežimo utilizuoti.</p>

        <h2>Kokius vonios griovimo darbus atlieku?</h2>
        <ul>
          <li>Senų sienų ir grindų plytelių demontavimą.</li>
          <li>Vonios, dušo kabinos ir dušo padėklo demontavimą.</li>
          <li>WC, praustuvo, spintelių ir kitos santechnikos nuėmimą.</li>
          <li>Senų vamzdžių ir nereikalingų santechnikos trasų demontavimą.</li>
          <li>Gipso kartono dėžių ir kitų lengvų konstrukcijų ardymą.</li>
          <li>Senų grindų sluoksnių ir pagrindų ardymą, kai to reikia.</li>
          <li>Silpno, atšokusio tinko ir kitų netinkamų pagrindų pašalinimą.</li>
          <li>Objekto paruošimą naujiems santechnikos ir apdailos darbams.</li>
        </ul>

        <h2>Senų plytelių demontavimas</h2>
        <p>Senos plytelės nuimamos nuo sienų ir grindų kartu įvertinant po jomis esančio pagrindo būklę. Po demontavimo dažnai paaiškėja, kad dalį seno tinko ar grindų sluoksnio taip pat reikia pašalinti ir paruošti iš naujo.</p>

        <p>Toliau, jei reikia, atliekamas <a href="/sienu-lyginimas-tinkavimas-vonioje">sienų lyginimas ir tinkavimas</a> bei grindų paruošimas.</p>

        <h2>Senos santechnikos demontavimas</h2>
        <p>Prieš kapitalinį remontą gali būti demontuojama sena vonia, WC, praustuvas, dušo kabina, maišytuvai, gyvatukas ir kita įranga. Jei kartu keičiami vamzdynai, darbų seka derinama taip, kad po griovimo būtų galima iš karto pradėti naujų sistemų montavimą.</p>

        <h2>Grindų ir senų pagrindų ardymas</h2>
        <p>Jeigu senos grindys yra suskilinėjusios, netinkamo aukščio arba reikia keisti kanalizacijos trasas, gali būti ardomi seni grindų sluoksniai. Tai leidžia iš naujo suformuoti pagrindą, kanalizacijos nuolydžius ar dušo zoną.</p>

        <p>Po ardymo, kai reikia, atliekamas <a href="/grindu-betonavimas-klaipeda">grindų betonavimas ir lyginimas</a>.</p>

        <h2>Statybinių atliekų surinkimas ir išnešimas</h2>
        <p>Griovimo metu susidaro nemažai atliekų – senos plytelės, tinkas, gipsas, santechnika, vamzdžiai, grindų sluoksniai ir kitos medžiagos. Atliekos surenkamos, supakuojamos arba sukraunamos taip, kad jas būtų galima saugiai išnešti iš objekto.</p>

        <p>Daugiabučiuose ypač svarbu suplanuoti šiukšlių išnešimą taip, kad bendros patalpos, laiptinė ir liftas būtų kuo mažiau teršiami ar pažeidžiami.</p>

        <h2>Statybinių šiukšlių išvežimas</h2>
        <p>Priklausomai nuo griovimo apimties, statybinės atliekos gali būti išvežamos keliais būdais. Nedideliam kiekiui gali pakakti transporto ir kelių reisų į statybinių atliekų priėmimo aikštelę, o didesniam kiekiui patogiau užsakyti atliekų konteinerį.</p>

        <ul>
          <li>Atliekų sukrovimas į maišus arba tinkamą tarą.</li>
          <li>Atliekų išnešimas iš buto ar namo.</li>
          <li>Pakrovimas į transportą.</li>
          <li>Išvežimas į atliekų priėmimo arba utilizavimo vietą.</li>
          <li>Statybinių atliekų konteinerio organizavimas, kai atliekų kiekis didelis.</li>
        </ul>

        <h2>Kada verta užsakyti statybinių atliekų konteinerį?</h2>
        <p>Konteineris dažniausiai patogus, kai griaunama visa vonia ir susidaro daug plytelių, tinko, betono ar kitų sunkių atliekų. Tokiu atveju nereikia atliekų vežti keliais atskirais reisais.</p>

        <p>Jeigu griovimo darbų mažiau, atliekas galima pakrauti į transportą ir išvežti tiesiai į atliekų priėmimo aikštelę. Konkretus būdas pasirenkamas pagal atliekų kiekį, objekto vietą ir privažiavimo galimybes.</p>

        <h2>Vonios griovimas daugiabutyje</h2>
        <p>Daugiabutyje prieš griovimą svarbu įvertinti vandens ir elektros atjungimą, bendrus stovus, laiptinės naudojimą ir atliekų išnešimą. Jei reikia atjungti bendro naudojimo vandentiekio sistemą, tai iš anksto derinama su namo administratoriumi ar sistemą prižiūrinčia organizacija.</p>

        <h2>Vonios griovimas nuosavame name</h2>
        <p>Nuosavame name dažnai paprasčiau organizuoti atliekų išnešimą ir konteinerio pastatymą, tačiau prieš ardant vis tiek įvertinamos vandentiekio, kanalizacijos ir elektros trasos bei konstrukcijos, kurių negalima pažeisti.</p>

        <h2>Griovimo darbai prieš kapitalinį vonios remontą</h2>
        <p>Po pilno demontavimo galima objektyviai įvertinti realią sienų, grindų, vamzdynų ir elektros būklę. Toliau pradedami naujos santechnikos, elektros, pagrindų ir apdailos darbai.</p>

        <p>Visą darbų seką rasite puslapyje <a href="/kapitalinis-vonios-remontas">kapitalinis vonios remontas</a>.</p>

        <h2>Kiek kainuoja vonios griovimo darbai ir atliekų išvežimas?</h2>
        <p>Kaina priklauso nuo vonios dydžio, plytelių ir kitų ardymo sluoksnių kiekio, santechnikos demontavimo, aukšto, lifto, atliekų svorio, privažiavimo prie objekto ir pasirinkto išvežimo būdo.</p>

        <p>Konteinerio kaina, transporto reisų skaičius ir atliekų priėmimo mokesčiai gali skirtis, todėl konkrečiame objekte išvežimas įvertinamas pagal realų atliekų kiekį.</p>

        <p>Jeigu griovimas yra viso remonto dalis, jis įtraukiamas į bendrą darbų sąmatą. Plačiau – <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>
      </>
    ),
  },

  "vonios-hidroizoliacija": {
    title: "Vonios hidroizoliacija – grindų ir dušo zonos įrengimas",
    h1: "Vonios hidroizoliacija",
    description: "Vonios hidroizoliacijos įrengimas prieš plytelių klijavimą. Grindų, dušo zonos, kampų, vamzdžių ir trapo sandarinimas naudojant profesionalias MIRA ar lygiavertes sistemas.",
    content: (
      <>
        <p><strong>Vonios hidroizoliacija</strong> yra vienas svarbiausių vonios kambario remonto etapų. Plytelės ir plytelių siūlės savaime nėra pilnavertė apsauga nuo drėgmės, todėl prieš plytelių klijavimą įrengiamas vientisas hidroizoliacinis sluoksnis ir kruopščiai užsandarinami visi jautriausi mazgai.</p>

        <p>Darbams naudoju profesionalias <strong>MIRA</strong> arba lygiavertes hidroizoliacines sistemas. Konkreti sistema parenkama pagal pagrindo tipą, dušo konstrukciją ir kitus vonios kambario sprendimus.</p>

        <h2>Kaip įrengiama vonios hidroizoliacija?</h2>
        <p>Patikima hidroizoliacija prasideda dar prieš tepant hidroizoliacinę medžiagą. Pagrindas turi būti tvirtas, švarus, stabilus ir tinkamai paruoštas.</p>

        <ul>
          <li>Pagrindo patikrinimas ir paruošimas.</li>
          <li>Gruntavimas pagal pasirinktos sistemos reikalavimus.</li>
          <li>Grindų ir sienų sandūrų paruošimas.</li>
          <li>Hidroizoliacinių sandarinimo juostų montavimas kampuose.</li>
          <li>Vamzdžių išvadų sandarinimas specialiomis manžetomis.</li>
          <li>Dušo trapo ir kitų vandens surinkimo mazgų sandarinimas.</li>
          <li>Hidroizoliacijos dengimas pagal pasirinktos sistemos technologiją.</li>
          <li>Viso paviršiaus patikrinimas prieš plytelių klijavimą.</li>
        </ul>

        <h2>Hidroizoliacija dviem sluoksniais</h2>
        <p>Naudojant tepamą hidroizoliacinę sistemą, ji dengiama pagal konkretaus gamintojo technologiją. Dažniausiai formuojami keli sluoksniai, kad būtų pasiektas reikiamas vientisumas ir bendras hidroizoliacinės dangos storis. Ypatingas dėmesys skiriamas kampams, vamzdžių išvadams ir kitoms vietoms, kuriose konstrukcijos susijungia.</p>

        <h2>Grindų hidroizoliacija vonios kambaryje</h2>
        <p>Vonios grindys yra viena svarbiausių hidroizoliuojamų zonų. Hidroizoliacinė sistema įrengiama ne tik ties dušu, bet ir kitose vandens poveikio riziką turinčiose grindų vietose. Grindų hidroizoliacija sujungiama su sienų hidroizoliacija, kad susidarytų vientisas apsauginis sluoksnis.</p>

        <p>Jeigu prieš hidroizoliaciją reikia keisti grindų aukštį ar suformuoti dušo nuolydžius, pirmiausia atliekamas <a href="/grindu-betonavimas-klaipeda">grindų betonavimas ir lyginimas</a>.</p>

        <h2>Dušo zonos hidroizoliacija</h2>
        <p>Dušo zona gauna didžiausią tiesioginio vandens apkrovą, todėl čia hidroizoliacijai skiriamas ypatingas dėmesys. Sandarinamos grindys, sienos, vidiniai kampai, vamzdžių išvadai ir vandens surinkimo mazgai.</p>

        <p>Įrengiant dušą be padėklo, hidroizoliacija turi būti suderinta su grindų nuolydžiais ir <a href="/duso-trapo-montavimas">dušo trapo montavimu</a>. Trapo ir hidroizoliacijos sujungimas yra vienas svarbiausių visos dušo konstrukcijos mazgų.</p>

        <h2>Hidroizoliacinės juostos ir vamzdžių manžetai</h2>
        <p>Vien hidroizoliacinės masės neužtenka. Grindų ir sienų kampuose naudojamos hidroizoliacinės sandarinimo juostos, o aplink vandentiekio bei kitus vamzdžių išvadus – tam skirtos sandarinimo manžetos. Taip sustiprinamos vietos, kuriose dėl konstrukcijų judėjimo arba skirtingų medžiagų sandūros gali atsirasti įtrūkimų.</p>

        <h2>Hidroizoliacija aplink dušo trapą</h2>
        <p>Trapo zona turi būti įrengta kaip vientisa sistemos dalis. Hidroizoliacija sujungiama su trapo sandarinimo elementais taip, kad vanduo negalėtų patekti po plytelėmis ir į grindų konstrukciją.</p>

        <h2>Šildomos grindys ir hidroizoliacija</h2>
        <p>Jeigu vonioje įrengiamas <a href="/elektrinis-grindu-sildymas-vonioje">elektrinis grindų šildymas</a>, šildymo sistema, pagrindo sluoksniai ir hidroizoliacija planuojami kaip viena konstrukcija. Darbų seka parenkama pagal naudojamą šildymo ir hidroizoliacijos sistemą.</p>

        <h2>MIRA medžiagos vonios hidroizoliacijai</h2>
        <p>Vonios remonto darbuose naudoju profesionalias <strong>MIRA</strong> medžiagas bei kitas konkrečiam pagrindui tinkamas sistemas. Gruntas, hidroizoliacija, sandarinimo juostos, manžetai, plytelių klijai ir kitos medžiagos parenkamos taip, kad tarpusavyje sudarytų suderinamą sistemą.</p>

        <p>Medžiagos parenkamos ne vien pagal prekės ženklą – svarbiausia konkretaus gaminio paskirtis, pagrindo būklė ir gamintojo numatyta darbų technologija.</p>

        <h2>Hidroizoliacija prieš plytelių klijavimą</h2>
        <p>Baigus hidroizoliacijos darbus ir išlaukus sistemos gamintojo nustatytą laiką, galima pradėti plytelių montavimą. Hidroizoliacinis sluoksnis darbų metu turi likti nepažeistas.</p>

        <p>Apie kitą remonto etapą plačiau skaitykite puslapyje <a href="/plyteliu-klijavimas-klaipeda">plytelių klijavimas</a>.</p>

        <h2>Hidroizoliacija kapitalinio vonios remonto metu</h2>
        <p>Atliekant <a href="/kapitalinis-vonios-remontas">kapitalinį vonios remontą</a>, hidroizoliacija įrengiama tik užbaigus pagrindinius paslėptus santechnikos darbus ir tinkamai paruošus sienų bei grindų pagrindus. Taip galima suformuoti vientisą sistemą prieš galutinę apdailą.</p>

        <h2>Kiek kainuoja vonios hidroizoliacija?</h2>
        <p>Hidroizoliacijos kaina priklauso nuo vonios dydžio, hidroizoliuojamo sienų ir grindų ploto, dušo konstrukcijos, trapo, vamzdžių išvadų skaičiaus, pagrindo būklės ir reikalingų paruošiamųjų darbų.</p>

        <p>Kapitalinio remonto metu hidroizoliacijos darbai įtraukiami į bendrą vonios darbų sąmatą. Daugiau informacijos rasite puslapyje <a href="/vonios-remonto-kaina">vonios remonto kaina</a>.</p>
      </>
    ),
  },

  "potinkinio-wc-montavimas": {
    title: "Potinkinio WC montavimas",
    h1: "Potinkinio WC (rėmo) montavimas",
    description: "Saugus ir tvirtas pakabinamų unitazų sistemų montavimas. Apdaila ir pajungimas.",
    content: (
      <>
        <p>Pakabinamas, potinkinis unitazas tapo standartu šiuolaikiniame vonios kambaryje. Jis užima mažiau vietos, vizualiai padidina erdvę ir itin palengvina grindų valymą.</p>
        <h2>Montavimo procesas</h2>
        <p>Potinkinio rėmo montavimas reikalauja patirties, nes vėliau sistema paslepiama po plytelėmis, o priėjimas lieka tik per nuleidimo mygtuko angą:</p>
        <ul>
          <li>Tvirtas rėmo ankeravimas prie kapitalinės sienos ir grindų. Rėmas turi atlaikyti didelę apkrovą (iki 400 kg).</li>
          <li>Kanalizacijos nuolydžių ir vandentiekio pajungimo užtikrinimas.</li>
          <li>Karkaso apsiuvimas drėgmei atspariu gipskartoniu (dažniausiai dviem sluoksniais dėl tvirtumo).</li>
          <li>Apdaila plytelėmis ir nuleidimo mygtuko bei paties puodo sumontavimas.</li>
        </ul>
      </>
    ),
  },
  "duso-trapo-montavimas": {
    title: "Dušo trapo montavimas",
    h1: "Linijinio dušo trapo (latako) įrengimas",
    description: "Taisyklingas dušo latakų montavimas formuojant nuolydį plytelėmis. Walk-in dušo sprendimai.",
    content: (
      <>
        <p>„Walk-in" tipo dušas be padėklo, su į grindis įleistu linijiniu trapu, suteikia vonios kambariui prabangos ir modernumo. Tačiau techniškai tai vienas sudėtingesnių mazgų vonioje.</p>
        <h2>Dušo trapo įrengimo niuansai</h2>
        <p>Svarbiausia – užtikrinti tinkamą vandens nutekėjimą ir absoliutų sandarumą:</p>
        <ul>
          <li><strong>Aukščio planavimas:</strong> Trapo sumontavimui reikia apie 7–10 cm gylio grindyse. Senos statybos butuose tai dažnai reiškia senų grindų ardymą ar net kanalizacijos stovo pertvarkymą.</li>
          <li><strong>Nuolydžio formavimas:</strong> Betonuojant grindis suformuojamas reikiamas nuolydis (apie 1–2 cm į metrą) link trapo.</li>
          <li><strong>Sandarumas:</strong> Trapo flanšas itin atidžiai padengiamas hidroizoliacija naudojant sandarinimo manžetus.</li>
          <li><strong>Plytelių pjovimas:</strong> Plytelės turi būti meistriškai supjaustytos pagal suformuotus nuolydžius (vokų sistema, jei trapas ne per visą plotį).</li>
        </ul>
      </>
    ),
  },
  "grindu-betonavimas-klaipeda": {
    title: "Grindų betonavimas vonioje",
    h1: "Grindų betonavimas ir lyginimas",
    description: "Senų vonios grindų lyginimas, betonavimas formuojant nuolydžius dušui Klaipėdoje.",
    content: (
      <>
        <p>Lygus ir tvirtas pagrindas – būtina sąlyga ilgalaikiam plytelių išsilaikymui. Vykdant kapitalinį vonios remontą senos statybos namuose, dažnai tenka iš pagrindų atnaujinti grindis.</p>
        <h2>Kada reikalingas grindų betonavimas?</h2>
        <p>Grindų lyginimo ar betonavimo darbai atliekami šiais atvejais:</p>
        <ul>
          <li>Keičiant senus kanalizacijos vamzdžius, kurie slepiami grindyse.</li>
          <li>Įrenginėjant elektrinį ar vandeninį grindinį šildymą (kabelis arba kilimėlis įleisiamas į išlyginamąjį sluoksnį).</li>
          <li>Formuojant nuolydžius linijiniam dušo trapui.</li>
          <li>Išlyginant didelius grindų aukščių skirtumus tarp vonios ir koridoriaus.</li>
        </ul>
        <p>Naudoju greitai džiūstančius, stiprius išlyginamuosius mišinius, todėl nereikia laukti savaičių, kol bus galima tęsti darbus.</p>
      </>
    ),
  },
};
