// data/services.js
import {

  Ambulance,
  Braces,
  Heart,
  Paintbrush,
  Plus,
  Shield,
  Smile,
  Syringe
} from 'lucide-react'; // Frissített Lucide ikon importok

export const servicesData = [
  {
    id: 1,
    slug: 'altalanos-fogaszat',
    title: 'Általános Fogászat',
    description: 'Átfogó fogászati szolgáltatásaink az Ön teljes körű szájüregi egészségét célozzák meg.',
    icon: Heart, // Ez az ikon létezik és tökéletes
    fullDescription: 'Az általános fogászati szolgáltatások széles skáláját kínáljuk, a rutin ellenőrzésektől a speciális kezelésekig, tapasztalt fogorvosaink elkötelezettek a kivételes ellátás nyújtása iránt. A legmodernebb felszereléseket és a legújabb orvosi protokollokat alkalmazzuk a legmagasabb minőségű szolgáltatás biztosítása érdekében.',
    features: [
      'Átfogó fogászati vizsgálat',
      'Diagnosztikai szolgáltatások (pl. röntgen)',
      'Kezelési terv készítése',
      'Rendszeres ellenőrzések',
      'Esztétikai tanácsadás'
    ],
    category: 'fogaszat'
  },
  {
    id: 2,
    slug: 'megelozo-fogaszat',
    title: 'Megelőző Fogászat',
    description: 'Átfogó megelőző szolgáltatásaink célja a lehetséges szájüregi problémák időben történő felismerése és megelőzése.',
    icon: Shield, // Pajzs a védelemre, nagyon jól illik
    fullDescription: 'A megelőzés jobb, mint a gyógyítás. Megelőző fogászati szolgáltatásaink az Ön szájüregi egészségének megőrzésére és a betegségek kialakulásának megelőzésére összpontosítanak. Átfogó szűréseket, rendszeres ellenőrzéseket és személyre szabott szájhigiéniai terveket kínálunk az optimális egészség megőrzéséhez.',
    features: [
      'Rendszeres fogorvosi szűrések',
      'Fogkőeltávolítás és polírozás',
      'Fogszuvasodás megelőzés (pl. fluoridálás)',
      'Szájhigiéniai tanácsadás',
      'Korai felismerési programok'
    ],
    category: 'fogaszat'
  },
  {
    id: 3,
    slug: 'fogszabalyozas',
    title: 'Fogszabályozás',
    description: 'Fogszabályozási szolgáltatásaink segítenek Önnek elérni a tökéletes mosolyt és a megfelelő harapást.',
    icon: Braces, // Ez az ikon létezik és pontos
    fullDescription: 'Modern fogszabályozási megoldásokat kínálunk mind gyermekek, mind felnőttek számára. A hagyományos fém fogszabályzótól az esztétikus, átlátszó sínekig (pl. Invisalign) a legújabb technológiákat alkalmazzuk, hogy a kezelés kényelmes és hatékony legyen.',
    features: [
      'Gyermek és felnőtt fogszabályozás',
      'Hagyományos és láthatatlan rendszerek',
      'Kezelési terv és tanácsadás',
      'Utókezelés és retenció',
      'Digitális lenyomatvétel'
    ],
    category: 'fogaszat'
  },
  {
    id: 4,
    slug: 'gyermekfogaszat',
    title: 'Gyermekfogászat',
    description: 'Gyermekfogászati szolgáltatásainkat kifejezetten a gyermekek számára alakítottuk ki, hogy pozitív fogászati élményt biztosítsunk.',
    icon: Smile, // Nagyon jól illik
    fullDescription: 'A gyermekek számára pozitív fogászati élmények megteremtése a szakterületünk. Gyermekfogászati szolgáltatásaink a megelőzésre, a korai beavatkozásra, valamint arra összpontosítanak, hogy a fogorvosi látogatások szórakoztatóvá és kényelmessé váljanak a fiatal páciensek számára.',
    features: [
      'Gyermekbarát környezet',
      'Gyengéd megközelítés',
      'Megelőző kezelések gyermekeknek',
      'Viselkedésmódosítás',
      'Szülői tanácsadás'
    ],
    category: 'fogaszat'
  },
  {
    id: 5,
    slug: 'szajsebeszet',
    title: 'Szájsebészet',
    description: 'Átfogó szájsebészeti szolgáltatásaink a szájüregi beavatkozások széles skáláját fedik le.',
    icon: Syringe, // Orvosi beavatkozást, injekciót jelképezhet
    fullDescription: 'Szájsebészeti szolgáltatásaink magasan képzett szájsebészek által végzett komplex eljárásokat foglalnak magukban. A bölcsességfog-eltávolítástól a komplex rekonstrukciós beavatkozásokig szakértő sebészeti ellátást nyújtunk.',
    features: [
      'Bölcsességfog-eltávolítás',
      'Fogászati implantátum beültetés',
      'Arcüregemelés (sinus lift)',
      'Csontpótlás',
      'Altatásos lehetőségek'
    ],
    category: 'fogaszat'
  },
  {
    id: 6,
    slug: 'fogaszati-implantatumok',
    title: 'Fogászati Implantátumok',
    description: 'Átfogó fogászati implantációs szolgáltatásaink tartós megoldást kínálnak a hiányzó fogakra, természetes megjelenéssel.',
    icon: Plus,
    fullDescription: 'A fogászati implantátumok az arany standard a hiányzó fogak pótlására. Implantátum szolgáltatásaink átfogó értékelést, precíz beültetést és helyreállítást foglalnak magukban, hogy Ön természetes megjelenésű és működő mosolyt kapjon.',
    features: [
      'Egyes fog pótlása',
      'Több fog pótlása',
      'Teljes száj rehabilitáció',
      'Azonnali terhelési lehetőségek',
      'Hosszú távú karbantartás'
    ],
    category: 'fogaszat'
  },
  {
    id: 7,
    slug: 'parodontologiai-kezeles',
    title: 'Parodontológiai Kezelés',
    description: 'Parodontológiai szolgáltatásaink az íny és a fogat tartó szövetek egészségére összpontosítanak.',
    icon: Shield,
    fullDescription: 'Az egészséges íny a szájüregi egészség alapja. Parodontológiai szolgáltatásaink magukban foglalják az ínybetegségek és a fogat tartó struktúrákat érintő egyéb állapotok diagnózisát, kezelését és menedzselését.',
    features: [
      'Ínybetegségek kezelése',
      'Mélytisztítási eljárások',
      'Fenntartó terápia',
      'Sebészeti beavatkozások (pl. ínyplasztika)',
      'Megelőző programok'
    ],
    category: 'fogaszat'
  },
  {
    id: 8,
    slug: 'esztetikai-fogaszat',
    title: 'Esztétikai Fogászat',
    description: 'Esztétikai fogászati szolgáltatásaink a mosoly szépítésére és az önbizalom növelésére irányulnak.',
    icon: Paintbrush,
    fullDescription: 'Segítünk Önnek elérni álmai mosolyát esztétikai fogászati kezeléseinkkel. Ide tartozik a fogfehérítés, héjak, koronák és egyéb kozmetikai eljárások, amelyek javítják fogai megjelenését és harmóniát teremtenek az arcával.',
    features: [
      'Fogfehérítés',
      'Kerámia héjak',
      'Teljes kerámia koronák',
      'Fogszínű tömések',
      'Mosolytervezés'
    ],
    category: 'fogaszat'
  },
  {
    id: 9,
    slug: 'surgossegi-fogaszat',
    title: 'Sürgősségi Fogászat',
    description: 'Sürgősségi fogászati szolgáltatásaink azonnali ellátást biztosítanak sürgős fogászati helyzetekben.',
    icon: Ambulance, // Kifejezetten sürgősségi esetekre utal
    fullDescription: 'Fogászati vészhelyzetek bármikor előfordulhatnak. Sürgősségi fogászati szolgáltatásaink azonnali ellátást nyújtanak sürgős fogászati helyzetekben, beleértve az erős fogfájást, a letört fogakat és egyéb fogászati traumákat.',
    features: [
      'Azonnali fájdalomcsillapítás',
      'Letört fogak kezelése',
      'Gyulladások sürgősségi ellátása',
      'Fogbalesetek kezelése',
      'Rendelői nyitvatartáson kívüli támogatás'
    ],
    category: 'fogaszat'
  }
];

export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

export const getServicesByCategory = (category) => {
  return servicesData.filter(service => service.category === category);
};

export const SERVICES_PER_PAGE = 6;