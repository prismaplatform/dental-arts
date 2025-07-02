"use client";

import React from "react";

const TermsText = () => {
  return (
    <>

        <div className="container lg:py-120 md:py-80 py-60">
          <div className="max-w-4xl mx-auto bp-8 md:p-10 lg:p-12">
            <div className="prose max-w-none">
              <h2 className="lg:text-2xl text-xl font-bold font-sora text-secondary">
                Felhasználási Feltételek
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Köszönjük, hogy felkereste a Dental Arts weboldalát. Kérjük,
                mielőtt szolgáltatásainkat vagy weboldalunkat használná,
                figyelmesen olvassa el az alábbi felhasználási feltételeket. Az
                oldal használatával Ön elfogadja ezeket a feltételeket.
              </p>

              <ol className="list-decimal list-inside space-y-8 text-base text-gray-700 font-normal">
                {/* Each list item now has explicit line-height and bottom margin */}
                <li className="mb-6 leading-relaxed">
                  <strong className="lg:text-2xl text-xl font-bold font-sora text-secondary">
                    1. Szolgáltatásaink és Információk Jellege
                  </strong>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    A Dental Arts elkötelezett amellett, hogy kiváló minőségű
                    fogászati szolgáltatásokat nyújtson. Kérjük, vegye figyelembe, hogy a
                    weboldalon található összes információ
                    **kizárólag tájékoztató jellegű**, és semmilyen körülmények
                    között sem minősül orvosi tanácsnak, diagnózisnak vagy
                    kezelési javaslatnak. Az itt közzétett tartalom nem
                    helyettesíti a személyes orvosi konzultációt, vizsgálatot és
                    az egyedi kezelési tervet, amelyet szakemberünk állít fel.
                  </p>
                </li>

                <li className="mb-6 leading-relaxed">
                  <strong className="lg:text-2xl text-xl font-bold font-sora text-secondary">
                    2. Felhasználói Felelősség
                  </strong>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    A weboldal használatával Ön tudomásul veszi és elfogadja,
                    hogy az egészségügyi döntéseiért, valamint a szükséges
                    orvosi tanácsokért és kezelésekért
                    **személyesen kell felkeresnie szakemberünket**. A Dental
                    Arts nem vállal felelősséget a weboldalon található
                    információk félreértéséből, téves értelmezéséből vagy
                    helytelen alkalmazásából eredő esetleges károkért vagy
                    következményekért. Az itt olvasott információk alapján hozott
                    bármilyen egészségügyi döntés az Ön saját felelőssége.
                  </p>
                </li>

                <li className="mb-6 leading-relaxed">
                  <strong className="lg:text-2xl text-xl font-bold font-sora text-secondary">
                    3. Adatvédelem és Adatkezelés
                  </strong>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    Az Ön személyes adatainak védelme kiemelten fontos számunkra.
                    A Dental Arts az adatkezelést a hatályos magyar és európai
                    uniós adatvédelmi jogszabályoknak, különös tekintettel az
                    GDPR-nak megfelelően végzi. Az adatgyűjtés, -tárolás és
                    -felhasználás részleteiről, valamint az Ön adatvédelmi
                    jogairól az átfogó és részletes
                    <a href="/adatvedelmi-tajekoztato" className="text-primary-600 hover:underline font-medium ml-1">
                      Adatvédelmi Tájékoztatónkban
                    </a>
                    tájékozódhat, amely weboldalunkon elérhető.
                  </p>
                </li>

                <li className="mb-6 leading-relaxed">
                  <strong className="lg:text-2xl text-xl font-bold font-sora text-secondary">
                    4. Szerzői Jogok és Tartalom Felhasználása
                  </strong>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    A weboldalon megjelenő minden tartalom, ideértve a szövegeket,
                    képeket, grafikákat, videókat, logókat és egyéb médiaelemeket,
                    a Dental Arts vagy annak partnereinek, illetve a
                    jogtulajdonosainak szellemi tulajdonát képezi, és a szerzői jogi
                    törvények védelme alatt áll. A tartalom
                    **másolása, sokszorosítása, terjesztése, módosítása vagy
                    bármilyen más módon történő felhasználása** a Dental Arts
                    előzetes írásos engedélye nélkül szigorúan tilos.
                    Az engedély nélküli felhasználás jogi következményeket vonhat maga után.
                  </p>
                </li>

                <li className="mb-6 leading-relaxed">
                  <strong className="lg:text-2xl text-xl font-bold font-sora text-secondary">
                    5. Módosítások a Felhasználási Feltételekben és a Weboldalon
                  </strong>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    A Dental Arts fenntartja a jogot, hogy a jelen Felhasználási
                    Feltételeket, valamint a weboldal tartalmát,
                    funkcionalitását és megjelenését **előzetes értesítés nélkül
                    módosítsa vagy frissítse**. A változtatások a közzétételük
                    pillanatában válnak hatályossá. Javasoljuk, hogy
                    rendszeresen tekintse át ezeket a feltételeket, hogy mindig
                    naprakész legyen az esetleges változásokról. Az oldal
                    folyamatos használata a módosított feltételek
                    elfogadását jelenti.
                  </p>
                </li>

                <li className="mb-6 leading-relaxed">
                  <strong className="lg:text-2xl text-xl font-bold font-sora text-secondary">
                    6. Kapcsolat
                  </strong>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    Amennyiben bármilyen kérdése, észrevétele vagy aggálya van
                    a jelen Felhasználási Feltételekkel kapcsolatban, kérjük,
                    ne habozzon felvenni velünk a kapcsolatot. Szívesen
                    válaszolunk minden felmerülő kérdésre. Elérhet minket az
                    alábbi e-mail címen:{" "}
                    <a href="mailto:info@dentalarts.hu" className="text-primary-600 hover:underline font-medium">
                      info@dentalarts.hu
                    </a>
                    .
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
 
    </>
  );
};

export default TermsText;