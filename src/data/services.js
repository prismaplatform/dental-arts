export const servicesData = [
  {
    id: 1,
    title: "Implantológia",
    description:
      "Tartós és esztétikus megoldás a hiányzó fogak pótlására korszerű implantátumokkal.",
    fullDescription:
      "Implantológiai kezeléseink a foghiányok végleges és esztétikus pótlását szolgálják. A titánból készült fogászati implantátumokat precíz tervezés és kivitelezés mentén ültetjük be, lehetővé téve a rágófunkció és a természetes mosoly helyreállítását.",
    image: "dental2.webp"
  },
  {
    id: 2,
    title: "Szájsebészet",
    description:
      "Komplex beavatkozások biztonságosan, fájdalommentesen és tapasztalt szájsebészek által.",
    fullDescription:
      "Szájsebészeti részlegünk a legmodernebb technológiákkal és altatásos lehetőségekkel kínál beavatkozásokat, a bölcsességfog eltávolítástól a csontpótlásig.",
    image: "dental3.webp"
  },
  {
    id: 3,
    title: "Protetika / Fogpótlás",
    description:
      "Esztétikus és funkcionális megoldások hiányzó fogak pótlására különféle fogpótlásokkal.",
    fullDescription:
      "A protetikai kezelések célja a rágófunkció és az esztétika helyreállítása. Rögzített koronákat, hidakat és kivehető pótlásokat is készítünk, egyéni igényekhez igazítva.",
    image: "dental4.webp"
  },
  {
    id: 4,
    title: "Esztétikai Fogászat",
    description:
      "A tökéletes mosoly eléréséhez esztétikai beavatkozások széles skáláját kínáljuk.",
    fullDescription:
      "Az esztétikai fogászat célja a természetes, harmonikus mosoly kialakítása. Fogfehérítéssel, héjakkal és esztétikus tömésekkel segítünk megújítani mosolyát.",
    image: "dental5.webp"
  },
  {
    id: 5,
    title: "Megtartó Fogászat / Endodoncia",
    description:
      "Fogmegtartó kezelések, beleértve a gyökérkezelést és töméseket a fogak megőrzése érdekében.",
    fullDescription:
      "Célunk, hogy a saját fogait minél tovább megőrizze. A megtartó kezelések során modern technikákat alkalmazunk a szuvasodások, törések és gyökérproblémák kezelésére.",
    image: "dental6.webp"
  },
  {
    id: 6,
    title: "Prevenció",
    description:
      "A megelőzés az egészséges mosoly kulcsa. Rendszeres ellenőrzések és tanácsadás.",
    fullDescription:
      "A szájüreg egészségének megőrzése érdekében nagy hangsúlyt fektetünk a megelőzésre. Tanácsadással, fogkőeltávolítással és szűrésekkel támogatjuk a hosszú távú egészséget.",
    image: "dental7.webp"
  },
  {
    id: 7,
    title: "Fogszabályozás",
    description:
      "Modern, esztétikus megoldások szabálytalan fogsor korrigálására gyermekeknek és felnőtteknek.",
    fullDescription:
      "Szabályos fogsor és helyes harapás nemcsak esztétikai, hanem egészségügyi szempontból is fontos. Rögzített és kivehető fogszabályozókat kínálunk, beleértve a láthatatlan síneket is.",
    image: "dental8.webp"
  },
  {
    id: 8,
    title: "Parodontológia / Fogágybetegség Kezelés",
    description:
      "Ínybetegségek korai felismerése és kezelése a fogak hosszú távú megtartásáért.",
    fullDescription:
      "A parodontológiai kezelések célja az íny és a fogakat tartó szövetek egészségének helyreállítása. Szakorvosaink célzott terápiákkal állítják meg az ínysorvadást és gyulladást.",
    image: "dental9.webp"
  },
  {
    id: 9,
    title: "Digitális Fogászat",
    description:
      "Digitális technológia a pontosabb tervezésért és gyorsabb kezelésekért.",
    fullDescription:
      "A digitális fogászat lehetővé teszi a precíz tervezést és lenyomatvételt, minimalizálva a kellemetlenségeket. 3D szkennelés, digitális röntgen és CAD/CAM technológiák révén hatékonyabbá válik a kezelés.",
    image: "dental1.webp"
  },
  {
    id: 10,
    title: "Diagnosztika",
    description:
      "A pontos diagnózis megalapozza a hatékony fogászati kezeléseket.",
    fullDescription:
      "Rendelőnk modern képalkotó és diagnosztikai eszközökkel van felszerelve, amelyek pontos és gyors állapotfelmérést tesznek lehetővé.",
    image: "dental10.webp"
  },
  {
    id: 11,
    title: "Lézeres Fogászati Kezelések",
    description:
      "Fájdalommentes, precíz és gyors gyógyulás lézeres technológiával.",
    fullDescription:
      "A lézeres kezelések során minimalizálható a fájdalom és a vérzés. Ínyformázásra, fertőtlenítésre, kisebb beavatkozásokra egyaránt alkalmazzuk.",
    image: "dental11.webp"
  },
  {
    id: 12,
    title: "Fogfehérítés",
    description: "Gyors és látványos megoldás a ragyogó, fehér mosolyért.",
    fullDescription:
      "Professzionális rendelői fogfehérítési eljárásaink biztonságosan és hatékonyan világosítják fel fogait, akár már egy alkalom alatt is.",
    image: "dental12.webp"
  }
];

export const getServiceBySlug = (slug) => {
  return servicesData.find((service) => service.slug === slug);
};

export const getServicesByCategory = (category) => {
  return servicesData.filter((service) => service.category === category);
};

export const SERVICES_PER_PAGE = 6;
