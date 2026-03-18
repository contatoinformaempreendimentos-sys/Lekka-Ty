import { Meal } from '../types';

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function pick<T>(arr: T[], seed: number): T {
  return arr[Math.floor(seededRandom(seed) * arr.length)];
}

interface Ingredient {
  name: string;
  kcal: number;
  p: number;
  c: number;
  f: number;
}

function sumMacros(ingredients: Ingredient[]) {
  return ingredients.reduce((acc, curr) => ({
    kcal: acc.kcal + curr.kcal,
    p: acc.p + curr.p,
    c: acc.c + curr.c,
    f: acc.f + curr.f
  }), { kcal: 0, p: 0, c: 0, f: 0 });
}

const breakfastTemplates = [
  {
    generate: (seed: number) => {
      const liquids = [{name: 'mlekiem migdałowym (200ml)', kcal: 40, p: 1, c: 0, f: 3}, {name: 'mlekiem 2% (200ml)', kcal: 100, p: 6, c: 9, f: 4}, {name: 'napojem owsianym (200ml)', kcal: 90, p: 1, c: 13, f: 3}];
      const carbs = [{name: 'płatków owsianych (50g)', kcal: 190, p: 6, c: 30, f: 3}, {name: 'płatków jaglanych (50g)', kcal: 180, p: 5, c: 35, f: 2}, {name: 'płatków gryczanych (50g)', kcal: 185, p: 6, c: 34, f: 2}];
      const proteins = [{name: 'odżywki białkowej (15g)', kcal: 60, p: 12, c: 1, f: 1}, {name: 'jogurtu skyr naturalnego (150g)', kcal: 100, p: 18, c: 6, f: 0}, {name: 'twarogu chudego (100g)', kcal: 90, p: 20, c: 3, f: 0}];
      const fats = [{name: 'masłem orzechowym (15g)', kcal: 90, p: 4, c: 2, f: 8}, {name: 'orzechami włoskimi (15g)', kcal: 100, p: 2, c: 2, f: 10}, {name: 'migdałami (15g)', kcal: 90, p: 3, c: 3, f: 8}];
      const fruits = [{name: 'malinami (100g)', kcal: 50, p: 1, c: 12, f: 0}, {name: 'borówkami (100g)', kcal: 60, p: 1, c: 14, f: 0}, {name: 'bananem (1/2 szt., 60g)', kcal: 60, p: 1, c: 14, f: 0}];
      
      const liquid = pick(liquids, seed + 1);
      const carb = pick(carbs, seed + 2);
      const protein = pick(proteins, seed + 3);
      const fat = pick(fats, seed + 4);
      const fruit = pick(fruits, seed + 5);

      const macros = sumMacros([liquid, carb, protein, fat, fruit]);

      return {
        name: `Owsianka z ${fruit.name.split(' ')[0]} i ${fat.name.split(' ')[0]}`,
        ...macros,
        time: '10 min',
        instructions: `Składniki (dokładne gramatury):\n- Płyn: ${liquid.name}\n- Baza: ${carb.name}\n- Białko: ${protein.name}\n- Tłuszcz: ${fat.name}\n- Owoce: ${fruit.name}\n\nKrok po kroku:\n1. Wsyp bazę (${carb.name}) do rondelka.\n2. Zalej ${liquid.name} i gotuj na małym ogniu przez około 5 minut, cały czas mieszając, aż płatki wchłoną płyn.\n3. Zdejmij z ognia. Jeśli używasz odżywki lub jogurtu (${protein.name}), dodaj je teraz i dokładnie wymieszaj, aby masa była jednolita i kremowa.\n4. Przełóż gotową owsiankę do miseczki.\n5. Umyj i pokrój owoce (${fruit.name}). Ułóż je na wierzchu.\n6. Posyp całość tłuszczem (${fat.name}). Podawaj na ciepło.`
      };
    }
  },
  {
    generate: (seed: number) => {
      const eggs = {name: '3 jajka (klasa M, ok. 150g)', kcal: 210, p: 18, c: 1, f: 15};
      const veggies = [{name: 'szpinaku (50g)', kcal: 10, p: 1, c: 1, f: 0}, {name: 'pomidorków koktajlowych (80g)', kcal: 15, p: 1, c: 3, f: 0}, {name: 'papryki czerwonej (70g)', kcal: 20, p: 1, c: 4, f: 0}];
      const fats = [{name: 'masła klarowanego (5g)', kcal: 45, p: 0, c: 0, f: 5}, {name: 'oliwy z oliwek (5g)', kcal: 45, p: 0, c: 0, f: 5}];
      const addons = [{name: 'sera feta (30g)', kcal: 80, p: 5, c: 1, f: 6}, {name: 'mozzarelli light (40g)', kcal: 65, p: 8, c: 1, f: 3}, {name: 'szynki z piersi indyka (40g)', kcal: 40, p: 8, c: 0, f: 1}];
      const carbs = [{name: '1 kromka chleba żytniego (35g)', kcal: 90, p: 2, c: 18, f: 1}, {name: '2 wafle ryżowe (20g)', kcal: 80, p: 2, c: 16, f: 1}];

      const veggie = pick(veggies, seed + 1);
      const fat = pick(fats, seed + 2);
      const addon = pick(addons, seed + 3);
      const carb = pick(carbs, seed + 4);

      const macros = sumMacros([eggs, veggie, fat, addon, carb]);

      return {
        name: `Omlet z ${addon.name.split(' ')[0]} i ${veggie.name.split(' ')[0]}`,
        ...macros,
        time: '12 min',
        instructions: `Składniki (dokładne gramatury):\n- Baza: ${eggs.name}\n- Warzywa: ${veggie.name}\n- Tłuszcz do smażenia: ${fat.name}\n- Dodatek: ${addon.name}\n- Węglowodany: ${carb.name}\n- Przyprawy: sól, pieprz, zioła prowansalskie.\n\nKrok po kroku:\n1. Rozbij ${eggs.name} do miski i roztrzep widelcem z dodatkiem soli i pieprzu.\n2. Na patelni rozgrzej ${fat.name}.\n3. Pokrój ${veggie.name}, wrzuć na patelnię i podsmażaj przez 1-2 minuty, aż zmiękną.\n4. Wylej masę jajeczną równomiernie na patelnię, pokrywając warzywa.\n5. Posyp wierzch używając ${addon.name} (jeśli to ser - pokrusz lub zetrzyj, jeśli szynka - pokrój w kostkę).\n6. Smaż pod przykryciem na małym ogniu przez 5-7 minut, aż góra całkowicie się zetnie (nie musisz przewracać).\n7. Zsuń delikatnie na talerz i zjedz w towarzystwie ${carb.name}.`
      };
    }
  },
  {
    generate: (seed: number) => {
      const breads = [{name: 'chleba żytniego na zakwasie (2 kromki, 70g)', kcal: 180, p: 4, c: 36, f: 2}, {name: 'chleba graham (2 kromki, 70g)', kcal: 190, p: 6, c: 35, f: 2}];
      const spreads = [{name: 'awokado (50g)', kcal: 80, p: 1, c: 4, f: 8}, {name: 'serka śmietankowego light (30g)', kcal: 45, p: 2, c: 1, f: 3}, {name: 'hummusu (40g)', kcal: 120, p: 3, c: 6, f: 10}];
      const proteins = [{name: 'jajko na twardo (1 szt., 50g)', kcal: 70, p: 6, c: 0, f: 5}, {name: 'wędzonego łososia (50g)', kcal: 100, p: 10, c: 0, f: 6}, {name: 'szynki drobiowej (50g)', kcal: 50, p: 10, c: 0, f: 1}];
      const veggies = [{name: 'pomidora (100g)', kcal: 20, p: 1, c: 4, f: 0}, {name: 'ogórka (100g)', kcal: 15, p: 1, c: 3, f: 0}, {name: 'rzodkiewki (50g)', kcal: 10, p: 0, c: 2, f: 0}];

      const bread = pick(breads, seed + 1);
      const spread = pick(spreads, seed + 2);
      const protein = pick(proteins, seed + 3);
      const veggie = pick(veggies, seed + 4);

      const macros = sumMacros([bread, spread, protein, veggie]);

      return {
        name: `Kanapki z ${spread.name.split(' ')[0]} i ${protein.name.split(' ')[0]}`,
        ...macros,
        time: '8 min',
        instructions: `Składniki (dokładne gramatury):\n- Pieczywo: ${bread.name}\n- Smarowidło: ${spread.name}\n- Białko: ${protein.name}\n- Warzywa: ${veggie.name}\n\nKrok po kroku:\n1. Przygotuj pieczywo (${bread.name}). Możesz je lekko podpiec w tosterze dla chrupkości.\n2. Posmaruj każdą kromkę równomiernie używając ${spread.name}. Jeśli używasz awokado, rozgnieć je widelcem z odrobiną soli i soku z cytryny.\n3. Przygotuj białko: jeśli to jajko - ugotuj na twardo (8 min) i pokrój w plastry. Ułóż ${protein.name} na kanapkach.\n4. Umyj i pokrój w cienkie plasterki ${veggie.name}.\n5. Ułóż warzywa na samej górze. Całość posyp świeżo mielonym pieprzem i opcjonalnie szczypiorkiem lub kiełkami.`
      };
    }
  }
];

const lunchTemplates = [
  {
    generate: (seed: number) => {
      const proteins = [
        {name: 'pierś z kurczaka (150g)', kcal: 150, p: 32, c: 0, f: 2},
        {name: 'polędwiczki z indyka (150g)', kcal: 140, p: 30, c: 0, f: 1},
        {name: 'tofu naturalne (180g)', kcal: 220, p: 22, c: 3, f: 13}
      ];
      const carbs = [
        {name: 'kasza gryczana (50g suchej)', kcal: 170, p: 6, c: 35, f: 1},
        {name: 'ryż basmati (50g suchego)', kcal: 180, p: 4, c: 39, f: 0},
        {name: 'komosa ryżowa (50g suchej)', kcal: 185, p: 7, c: 32, f: 3},
        {name: 'bataty (200g)', kcal: 170, p: 3, c: 40, f: 0}
      ];
      const veggies = [
        {name: 'brokuły (150g)', kcal: 50, p: 4, c: 10, f: 0},
        {name: 'fasolka szparagowa (150g)', kcal: 45, p: 3, c: 10, f: 0},
        {name: 'cukinia (200g)', kcal: 35, p: 2, c: 6, f: 0}
      ];
      const fats = [
        {name: 'oliwa z oliwek (10g - 1 łyżka)', kcal: 90, p: 0, c: 0, f: 10},
        {name: 'olej rzepakowy (10g - 1 łyżka)', kcal: 90, p: 0, c: 0, f: 10}
      ];

      const protein = pick(proteins, seed + 1);
      const carb = pick(carbs, seed + 2);
      const veggie = pick(veggies, seed + 3);
      const fat = pick(fats, seed + 4);

      const macros = sumMacros([protein, carb, veggie, fat]);

      return {
        name: `${protein.name.split(' ')[0]} z ${carb.name.split(' ')[0]} i warzywami`,
        ...macros,
        time: '25 min',
        instructions: `Składniki (dokładne gramatury):\n- Źródło białka: ${protein.name}\n- Węglowodany: ${carb.name}\n- Warzywa: ${veggie.name}\n- Tłuszcz: ${fat.name}\n- Przyprawy: sól, pieprz, ulubione zioła (np. oregano, papryka słodka, czosnek granulowany).\n\nKrok po kroku:\n1. Węglowodany: Ugotuj ${carb.name} w osolonej wodzie według instrukcji na opakowaniu (zazwyczaj 15-20 minut). Jeśli to bataty - obierz, pokrój w kostkę i upiecz w 200°C przez 20 min.\n2. Białko: ${protein.name} umyj, osusz ręcznikiem papierowym i pokrój w mniejsze kawałki (lub plastry). Natrzyj solą, pieprzem i ulubionymi ziołami.\n3. Smażenie/Pieczenie: Na patelni rozgrzej ${fat.name}. Wrzuć przygotowane białko i smaż na średnim ogniu przez około 7-10 minut, aż będzie w pełni ścięte i złociste. (Tofu smaż do chrupkości).\n4. Warzywa: ${veggie.name} ugotuj na parze (ok. 5-7 minut) lub uduś na osobnej patelni z odrobiną wody, aby zachowały chrupkość.\n5. Podanie: Na dużym talerzu ułóż ugotowane węglowodany, obok porcję białka oraz przygotowane warzywa. Całość możesz skropić odrobiną soku z cytryny dla lepszego smaku.`
      };
    }
  },
  {
    generate: (seed: number) => {
      const proteins = [
        {name: 'łosoś świeży (150g)', kcal: 300, p: 30, c: 0, f: 20},
        {name: 'dorsz polędwica (150g)', kcal: 120, p: 27, c: 0, f: 1}
      ];
      const carbs = [
        {name: 'ziemniaki (250g)', kcal: 190, p: 4, c: 42, f: 0},
        {name: 'dziki ryż (50g suchego)', kcal: 180, p: 7, c: 35, f: 1}
      ];
      const veggies = [
        {name: 'surówka z kiszonej kapusty (150g)', kcal: 30, p: 2, c: 6, f: 0},
        {name: 'szparagi (150g)', kcal: 30, p: 3, c: 4, f: 0}
      ];
      const fats = [
        {name: 'oliwa z oliwek (5g)', kcal: 45, p: 0, c: 0, f: 5},
        {name: 'masło (5g)', kcal: 35, p: 0, c: 0, f: 4}
      ];

      const protein = pick(proteins, seed + 1);
      const carb = pick(carbs, seed + 2);
      const veggie = pick(veggies, seed + 3);
      const fat = pick(fats, seed + 4);

      const macros = sumMacros([protein, carb, veggie, fat]);

      return {
        name: `Pieczony ${protein.name.split(' ')[0]} z ${carb.name.split(' ')[0]}`,
        ...macros,
        time: '30 min',
        instructions: `Składniki (dokładne gramatury):\n- Ryba: ${protein.name}\n- Węglowodany: ${carb.name}\n- Dodatek warzywny: ${veggie.name}\n- Tłuszcz: ${fat.name}\n- Przyprawy: sól, pieprz cytrynowy, koperek, plaster cytryny.\n\nKrok po kroku:\n1. Rozgrzej piekarnik do 200°C.\n2. Przygotuj rybę (${protein.name}): umyj, osusz, natrzyj solą, pieprzem cytrynowym i skrop sokiem z cytryny. Ułóż w naczyniu żaroodpornym.\n3. Na rybie połóż ${fat.name} i posyp świeżym koperkiem. Piecz przez około 15-20 minut (w zależności od grubości kawałka).\n4. W międzyczasie przygotuj węglowodany: ugotuj ${carb.name} w osolonej wodzie do miękkości.\n5. Przygotuj warzywa: jeśli to szparagi - odłam twarde końcówki i ugotuj na parze (5 min). Jeśli to surówka - przełóż na talerz.\n6. Wyjmij rybę z piekarnika. Podawaj gorącą obok ugotowanych węglowodanów i porcji warzyw (${veggie.name}).`
      };
    }
  }
];

const snackTemplates = [
  {
    generate: (seed: number) => {
      const bases = [
        {name: 'jogurt grecki (150g)', kcal: 145, p: 15, c: 6, f: 7},
        {name: 'serek wiejski (150g)', kcal: 145, p: 16, c: 4, f: 7},
        {name: 'kefir naturalny (200g)', kcal: 100, p: 7, c: 9, f: 4}
      ];
      const fruits = [
        {name: 'truskawki (100g)', kcal: 32, p: 1, c: 7, f: 0},
        {name: 'jabłko (150g)', kcal: 75, p: 1, c: 20, f: 0},
        {name: 'brzoskwinia (100g)', kcal: 40, p: 1, c: 9, f: 0}
      ];
      const nuts = [
        {name: 'orzechy nerkowca (15g)', kcal: 85, p: 3, c: 4, f: 7},
        {name: 'pestki dyni (15g)', kcal: 85, p: 4, c: 2, f: 7},
        {name: 'nasiona chia (10g)', kcal: 50, p: 2, c: 4, f: 3}
      ];

      const base = pick(bases, seed + 1);
      const fruit = pick(fruits, seed + 2);
      const nut = pick(nuts, seed + 3);

      const macros = sumMacros([base, fruit, nut]);

      return {
        name: `${base.name.split(' ')[0]} z owocami i orzechami`,
        ...macros,
        time: '3 min',
        instructions: `Składniki (dokładne gramatury):\n- Baza nabiałowa: ${base.name}\n- Owoce: ${fruit.name}\n- Dodatek tłuszczowy: ${nut.name}\n\nKrok po kroku:\n1. Przełóż ${base.name} do miseczki lub szklanki.\n2. Umyj owoce (${fruit.name}). Jeśli używasz jabłka lub brzoskwini, pokrój je w drobną kostkę. Truskawki przekrój na połówki.\n3. Dodaj pokrojone owoce do bazy nabiałowej.\n4. Posyp całość z wierzchu używając ${nut.name}.\n5. Wymieszaj tuż przed zjedzeniem. Szybka, zbilansowana przekąska gotowa!`
      };
    }
  },
  {
    generate: (seed: number) => {
      const bases = [
        {name: 'wafle ryżowe (2 szt., 20g)', kcal: 80, p: 2, c: 16, f: 1},
        {name: 'pieczywo chrupkie żytnie (3 szt., 30g)', kcal: 110, p: 3, c: 20, f: 1}
      ];
      const spreads = [
        {name: 'masło orzechowe 100% (20g)', kcal: 120, p: 5, c: 3, f: 10},
        {name: 'masło migdałowe (20g)', kcal: 120, p: 4, c: 4, f: 11}
      ];
      const toppings = [
        {name: 'banan (1/2 szt., 60g)', kcal: 60, p: 1, c: 14, f: 0},
        {name: 'borówki (50g)', kcal: 30, p: 0, c: 7, f: 0}
      ];

      const base = pick(bases, seed + 1);
      const spread = pick(spreads, seed + 2);
      const topping = pick(toppings, seed + 3);

      const macros = sumMacros([base, spread, topping]);

      return {
        name: `${base.name.split(' ')[0]} z masłem orzechowym`,
        ...macros,
        time: '2 min',
        instructions: `Składniki (dokładne gramatury):\n- Baza: ${base.name}\n- Smarowidło: ${spread.name}\n- Dodatek: ${topping.name}\n\nKrok po kroku:\n1. Przygotuj ${base.name} na talerzyku.\n2. Rozsmaruj równomiernie ${spread.name} na każdym waflu/kromce.\n3. Pokrój ${topping.name} (jeśli to banan - w plasterki) i ułóż na wierzchu.\n4. Opcjonalnie możesz posypać odrobiną cynamonu lub szczyptą soli morskiej dla podbicia smaku.`
      };
    }
  }
];

const dinnerTemplates = [
  {
    generate: (seed: number) => {
      const proteins = [
        {name: 'tuńczyk w sosie własnym (120g)', kcal: 130, p: 28, c: 0, f: 1},
        {name: 'jajka na twardo (2 szt., 100g)', kcal: 140, p: 12, c: 1, f: 10},
        {name: 'ser mozzarella light (100g)', kcal: 160, p: 20, c: 2, f: 8}
      ];
      const bases = [
        {name: 'miks sałat (100g)', kcal: 20, p: 1, c: 3, f: 0},
        {name: 'rukola (50g)', kcal: 15, p: 1, c: 2, f: 0},
        {name: 'szpinak baby (50g)', kcal: 10, p: 1, c: 1, f: 0}
      ];
      const veggies = [
        {name: 'pomidorki koktajlowe (100g)', kcal: 20, p: 1, c: 4, f: 0},
        {name: 'ogórek zielony (150g)', kcal: 20, p: 1, c: 4, f: 0},
        {name: 'papryka (100g)', kcal: 30, p: 1, c: 6, f: 0}
      ];
      const fats = [
        {name: 'oliwa z oliwek (10g)', kcal: 90, p: 0, c: 0, f: 10},
        {name: 'pestki słonecznika (15g)', kcal: 90, p: 3, c: 3, f: 8}
      ];
      const carbs = [
        {name: 'grzanki z chleba żytniego (30g)', kcal: 80, p: 2, c: 15, f: 1},
        {name: 'kukurydza konserwowa (50g)', kcal: 45, p: 1, c: 10, f: 0}
      ];

      const protein = pick(proteins, seed + 1);
      const base = pick(bases, seed + 2);
      const veggie = pick(veggies, seed + 3);
      const fat = pick(fats, seed + 4);
      const carb = pick(carbs, seed + 5);

      const macros = sumMacros([protein, base, veggie, fat, carb]);

      return {
        name: `Lekka sałatka z ${protein.name.split(' ')[0]}`,
        ...macros,
        time: '10 min',
        instructions: `Składniki (dokładne gramatury):\n- Białko: ${protein.name}\n- Baza sałatkowa: ${base.name}\n- Warzywa: ${veggie.name}\n- Tłuszcz/Dressing: ${fat.name}\n- Węglowodany: ${carb.name}\n- Przyprawy: sól, pieprz, sok z cytryny, zioła prowansalskie.\n\nKrok po kroku:\n1. Umyj i osusz bazę sałatkową (${base.name}), przełóż do dużej miski.\n2. Przygotuj warzywa (${veggie.name}): umyj i pokrój w kostkę lub plasterki. Dodaj do miski.\n3. Dodaj źródło węglowodanów (${carb.name}). Jeśli to grzanki - podpiecz chleb na suchej patelni.\n4. Przygotuj białko (${protein.name}): tuńczyka odsącz, jajka ugotuj i pokrój w ćwiartki, mozzarellę porwij na kawałki. Ułóż na wierzchu sałatki.\n5. Przygotuj dressing: wymieszaj ${fat.name} z łyżką soku z cytryny, solą, pieprzem i ziołami. (Jeśli używasz pestek - po prostu posyp nimi sałatkę).\n6. Polej sałatkę dressingiem tuż przed podaniem i delikatnie wymieszaj.`
      };
    }
  },
  {
    generate: (seed: number) => {
      const proteins = [
        {name: 'tofu wędzone (180g)', kcal: 230, p: 24, c: 4, f: 13},
        {name: 'jajka (3 szt., 150g)', kcal: 210, p: 18, c: 1, f: 15}
      ];
      const veggies = [
        {name: 'cukinia (150g) i cebula (50g)', kcal: 45, p: 2, c: 9, f: 0},
        {name: 'pieczarki (150g) i szpinak (50g)', kcal: 40, p: 4, c: 5, f: 0}
      ];
      const fats = [
        {name: 'oliwa z oliwek (5g)', kcal: 45, p: 0, c: 0, f: 5},
        {name: 'masło klarowane (5g)', kcal: 45, p: 0, c: 0, f: 5}
      ];
      const carbs = [
        {name: 'chleb żytni (1 kromka, 35g)', kcal: 90, p: 2, c: 18, f: 1},
        {name: 'pomidory malinowe (200g - podane obok)', kcal: 35, p: 2, c: 8, f: 0}
      ];

      const protein = pick(proteins, seed + 1);
      const veggie = pick(veggies, seed + 2);
      const fat = pick(fats, seed + 3);
      const carb = pick(carbs, seed + 4);

      const macros = sumMacros([protein, veggie, fat, carb]);

      const isTofu = protein.name.includes('tofu');

      return {
        name: isTofu ? 'Szybka tofucznica z warzywami' : 'Jajecznica z warzywami',
        ...macros,
        time: '15 min',
        instructions: `Składniki (dokładne gramatury):\n- Białko: ${protein.name}\n- Warzywa: ${veggie.name}\n- Tłuszcz: ${fat.name}\n- Dodatek: ${carb.name}\n- Przyprawy: sól, pieprz. (Do tofucznicy koniecznie: kurkuma, szczypta czarnej soli kala namak dla jajecznego smaku).\n\nKrok po kroku:\n1. Przygotowanie warzyw: Pokrój ${veggie.name} w drobną kostkę lub plasterki.\n2. Na patelni rozgrzej ${fat.name}. Wrzuć warzywa i podsmażaj przez 3-5 minut, aż zmiękną i odparują nadmiar wody.\n3. Przygotowanie białka: Jeśli używasz jajek (${protein.name}) - wbij je na patelnię. Jeśli używasz tofu - rozkrusz je w dłoniach bezpośrednio na patelnię.\n4. Smażenie: Dodaj przyprawy. Smaż na średnim ogniu, cały czas mieszając, przez około 3-5 minut, aż osiągniesz ulubioną konsystencję (ścięte jajka lub podsmażone tofu).\n5. Podanie: Przełóż gorące danie na talerz. Zjedz w towarzystwie ${carb.name}.`
      };
    }
  }
];

interface MealTemplate {
  generate: (seed: number) => {
    name: string;
    kcal: number;
    p: number;
    c: number;
    f: number;
    time: string;
    instructions: string;
  };
}

export function generateMeal(day: number, type: 'Śniadanie' | 'Obiad' | 'Przekąska' | 'Kolacja'): Meal {
  let templates: MealTemplate[] = [];
  let offset = 0;
  if (type === 'Śniadanie') { templates = breakfastTemplates; offset = 1000; }
  if (type === 'Obiad') { templates = lunchTemplates; offset = 2000; }
  if (type === 'Przekąska') { templates = snackTemplates; offset = 3000; }
  if (type === 'Kolacja') { templates = dinnerTemplates; offset = 4000; }

  const seed = day + offset;
  const template = pick(templates, seed);
  
  const mealData = template.generate(seed);
  
  return {
    type,
    name: mealData.name,
    kcal: Math.round(mealData.kcal),
    protein: Math.round(mealData.p),
    carbs: Math.round(mealData.c),
    fat: Math.round(mealData.f),
    time: mealData.time,
    instructions: mealData.instructions
  };
}
