import { Meal, Workout, WellnessTip, Article, DayPlan, Bonus } from '../types';

export const bonuses: Bonus[] = [
  {
    title: 'Reset Hormonal, aby przyspieszyć Twoje rezultaty',
    url: 'https://drive.google.com/drive/folders/1yt_yaz8KMHv63hPTWx1Bks6V20hkZObr?usp=drive_link',
    icon: '🦋'
  },
  {
    title: '7-dniowa Dieta Przeciwzapalna',
    url: 'https://drive.google.com/drive/folders/1WKVdXP0pkkahV0SqFTmnKtLqEHchohGP?usp=drive_link',
    icon: '🥗'
  },
  {
    title: '30-dniowy Program Przeciwdziałający Wiotczeniu',
    url: 'https://drive.google.com/drive/folders/1CKuwjwXQTEIGKqj5EFO61yqowOBSAZ7H?usp=drive_link',
    icon: '💪'
  },
  {
    title: 'Protokół Cellulit Zero',
    url: 'https://drive.google.com/drive/folders/16z9PlmtFcdg6rDFH98cV79aDeD4pCk3w?usp=drive_link',
    icon: '✨'
  }
];

export const breakfasts: Partial<Meal>[] = [
  { name: 'Owsianka z jagodami i orzechami', kcal: 350, protein: 12, carbs: 45, fat: 14, time: '10 min', instructions: 'Płatki owsiane zalej gorącą wodą lub mlekiem. Przykryj na 5 minut. Dodaj jagody i posiekane orzechy.' },
  { name: 'Omlet z 3 jaj ze szpinakiem i fetą', kcal: 320, protein: 21, carbs: 5, fat: 24, time: '12 min', instructions: 'Roztrzep jajka. Wylej na rozgrzaną patelnię. Dodaj garść szpinaku i pokruszoną fetę. Smaż pod przykryciem do ścięcia.' },
  { name: 'Szakszuka z pomidorami i papryką', kcal: 340, protein: 18, carbs: 15, fat: 22, time: '15 min', instructions: 'Podsmaż pokrojoną paprykę, dodaj pomidory z puszki i przyprawy. Zrób wgłębienia i wbij jajka. Duś pod przykryciem ok. 5 minut.' },
  { name: 'Pudding chia z malinami i migdałami', kcal: 290, protein: 8, carbs: 25, fat: 15, time: '5 min', instructions: 'Nasiona chia zalej mlekiem roślinnym wieczorem i wstaw do lodówki. Rano dodaj maliny i płatki migdałów.' },
  { name: 'Kanapki żytnie z awokado i jajkiem', kcal: 360, protein: 16, carbs: 35, fat: 22, time: '8 min', instructions: 'Ugotuj jajko na twardo. Pieczywo posmaruj rozgniecionym awokado z solą i pieprzem. Na wierzch połóż plastry jajka.' },
  { name: 'Twarożek z rzodkiewką i szczypiorkiem', kcal: 280, protein: 25, carbs: 10, fat: 12, time: '5 min', instructions: 'Twaróg wymieszaj z jogurtem naturalnym. Dodaj pokrojoną w kostkę rzodkiewkę i posiekany szczypiorek. Dopraw do smaku.' },
  { name: 'Smoothie bowl z bananem i masłem orzechowym', kcal: 380, protein: 10, carbs: 50, fat: 18, time: '7 min', instructions: 'Zblenduj banana z mlekiem i łyżką masła orzechowego. Przelej do miski, posyp nasionami i ulubionymi owocami.' },
  { name: 'Jajecznica na maśle klarowanym z pomidorkami', kcal: 310, protein: 18, carbs: 4, fat: 25, time: '8 min', instructions: 'Rozpuść masło na patelni. Wbij jajka, dodaj przekrojone na pół pomidorki koktajlowe. Smaż ciągle mieszając.' },
  { name: 'Naleśniki owsiane z twarogiem', kcal: 400, protein: 22, carbs: 45, fat: 12, time: '15 min', instructions: 'Zblenduj płatki owsiane, jajko i odrobinę mleka na gładką masę. Usmaż naleśniki. Podawaj z twarogiem wymieszanym z jogurtem.' },
  { name: 'Jogurt grecki z domową granolą', kcal: 330, protein: 15, carbs: 35, fat: 14, time: '3 min', instructions: 'Do miseczki nałóż jogurt grecki. Posyp gotową, bezcukrową granolą i dodaj świeże owoce.' },
  { name: 'Tosty pełnoziarniste z pastą jajeczną', kcal: 350, protein: 18, carbs: 30, fat: 16, time: '10 min', instructions: 'Ugotuj jajka, rozgnieć widelcem z odrobiną jogurtu naturalnego i musztardy. Nałóż na podpieczone tosty.' },
  { name: 'Gryczanka z jabłkiem i cynamonem', kcal: 320, protein: 10, carbs: 55, fat: 6, time: '12 min', instructions: 'Płatki gryczane ugotuj na mleku. Dodaj starte jabłko i dużą szczyptę cynamonu. Wymieszaj.' },
  { name: 'Jajka sadzone na szpinaku', kcal: 290, protein: 16, carbs: 5, fat: 22, time: '10 min', instructions: 'Na patelni zwiędnij szpinak z czosnkiem. Zrób miejsce i wbij jajka. Smaż do pożądanego ścięcia żółtka.' },
  { name: 'Wafle ryżowe z awokado i łososiem', kcal: 340, protein: 15, carbs: 25, fat: 20, time: '5 min', instructions: 'Wafle posmaruj rozgniecionym awokado. Na wierzch połóż plastry wędzonego łososia i skrop sokiem z cytryny.' },
  { name: 'Koktajl białkowy z owocami leśnymi', kcal: 250, protein: 25, carbs: 20, fat: 5, time: '3 min', instructions: 'Zblenduj miarkę odżywki białkowej z wodą lub mlekiem i garścią mrożonych owoców leśnych.' },
  { name: 'Placki bananowe z mąki kokosowej', kcal: 380, protein: 12, carbs: 45, fat: 16, time: '15 min', instructions: 'Rozgnieć banana, wymieszaj z jajkiem i 2 łyżkami mąki kokosowej. Smaż małe placuszki na patelni.' },
  { name: 'Kanapki z hummusem i warzywami', kcal: 310, protein: 10, carbs: 40, fat: 12, time: '5 min', instructions: 'Pieczywo pełnoziarniste posmaruj grubą warstwą hummusu. Nałóż plastry ogórka, pomidora i rzodkiewki.' },
  { name: 'Jajka na miękko z pieczywem chrupkim', kcal: 280, protein: 14, carbs: 20, fat: 16, time: '8 min', instructions: 'Ugotuj jajka na miękko (ok. 4-5 minut). Podawaj z pieczywem chrupkim i świeżymi warzywami obok.' },
  { name: 'Owsianka pieczona z gruszką', kcal: 360, protein: 12, carbs: 50, fat: 10, time: '25 min', instructions: 'Płatki wymieszaj z mlekiem, pokrojoną gruszką i cynamonem. Piecz w naczyniu żaroodpornym w 180°C przez 20 minut.' },
  { name: 'Serek wiejski na słodko z truskawkami', kcal: 240, protein: 22, carbs: 15, fat: 8, time: '3 min', instructions: 'Serek wiejski wymieszaj z pokrojonymi truskawkami i opcjonalnie odrobiną erytrytolu.' }
];

export const lunches: Partial<Meal>[] = [
  { name: 'Grillowany kurczak z komosą ryżową', kcal: 450, protein: 40, carbs: 35, fat: 12, time: '20 min', instructions: 'Pierś z kurczaka przypraw i ugrilluj. Komosę ugotuj wg instrukcji. Podawaj z ulubioną surówką.' },
  { name: 'Pieczony łosoś z brokułami i sezamem', kcal: 510, protein: 32, carbs: 10, fat: 28, time: '25 min', instructions: 'Łososia natrzyj sosem sojowym i piecz 15 min w 200°C. Brokuły ugotuj na parze. Posyp wszystko sezamem.' },
  { name: 'Lekkie curry z ciecierzycą i szpinakiem', kcal: 410, protein: 15, carbs: 50, fat: 16, time: '25 min', instructions: 'Podsmaż pastę curry, dodaj mleczko kokosowe, ciecierzycę z puszki i szpinak. Duś 10 min. Podawaj z ryżem.' },
  { name: 'Indyk duszony z batatami i cukinią', kcal: 480, protein: 38, carbs: 45, fat: 15, time: '30 min', instructions: 'Mięso z indyka pokrój i podsmaż. Dodaj pokrojone w kostkę bataty i cukinię, podlej wodą i duś do miękkości.' },
  { name: 'Kasza gryczana z pieczonym burakiem i kozim serem', kcal: 420, protein: 14, carbs: 55, fat: 18, time: '20 min', instructions: 'Ugotuj kaszę. Buraka upiecz lub użyj gotowego. Wymieszaj, posyp pokruszonym kozim serem i rukolą.' },
  { name: 'Dorsz na parze z dzikim ryżem i surówką', kcal: 390, protein: 35, carbs: 40, fat: 8, time: '20 min', instructions: 'Rybę przypraw cytryną i koperkiem, ugotuj na parze. Podawaj z ugotowanym dzikim ryżem i surówką z kiszonej kapusty.' },
  { name: 'Sałatka z tofu, awokado i pestkami dyni', kcal: 430, protein: 20, carbs: 15, fat: 30, time: '15 min', instructions: 'Tofu pokrój i podsmaż na chrupko. Wymieszaj z miksem sałat, pokrojonym awokado i uprażonymi pestkami dyni.' },
  { name: 'Makaron pełnoziarnisty z pesto i pomidorkami', kcal: 460, protein: 15, carbs: 60, fat: 18, time: '15 min', instructions: 'Ugotuj makaron. Wymieszaj z gotowym pesto z bazylii i przekrojonymi pomidorkami koktajlowymi.' },
  { name: 'Risotto z pieczarkami i parmezanem', kcal: 490, protein: 14, carbs: 65, fat: 16, time: '30 min', instructions: 'Podsmaż cebulę i pieczarki. Dodaj ryż arborio, podlewaj bulionem aż ryż zmięknie. Na koniec wmieszaj parmezan.' },
  { name: 'Gulasz warzywny z soczewicą', kcal: 380, protein: 18, carbs: 45, fat: 10, time: '35 min', instructions: 'W garnku podsmaż cebulę, paprykę i marchew. Dodaj czerwoną soczewicę, passatę pomidorową i duś 20 minut.' },
  { name: 'Leczo z cukinii z kiełbasą drobiową', kcal: 410, protein: 25, carbs: 20, fat: 22, time: '25 min', instructions: 'Podsmaż pokrojoną kiełbasę, dodaj cebulę, paprykę i cukinię. Zalej przecierem pomidorowym i duś do miękkości.' },
  { name: 'Krewetki z czosnkiem i makaronem ryżowym', kcal: 440, protein: 30, carbs: 50, fat: 12, time: '15 min', instructions: 'Krewetki podsmaż na maśle z dużą ilością czosnku i natką pietruszki. Wymieszaj z ugotowanym makaronem ryżowym.' },
  { name: 'Bowl z komosą, kurczakiem i mango', kcal: 470, protein: 35, carbs: 45, fat: 14, time: '20 min', instructions: 'Ułóż w misce ugotowaną komosę, pokrojonego grillowanego kurczaka, kostki świeżego mango i czerwoną cebulę.' },
  { name: 'Pieczone udka z kurczaka z warzywami korzeniowymi', kcal: 520, protein: 38, carbs: 30, fat: 25, time: '45 min', instructions: 'Udka natrzyj przyprawami. Ułóż na blasze z pokrojoną marchewką i pietruszką. Piecz 40 min w 190°C.' },
  { name: 'Placki z cukinii z sosem jogurtowym', kcal: 350, protein: 15, carbs: 35, fat: 16, time: '20 min', instructions: 'Zetrzyj cukinię, odciśnij wodę. Wymieszaj z jajkiem i mąką. Smaż placki. Podawaj z jogurtem czosnkowym.' },
  { name: 'Sałatka z tuńczykiem, jajkiem i fasolką', kcal: 400, protein: 35, carbs: 20, fat: 18, time: '10 min', instructions: 'Wymieszaj odsączonego tuńczyka z ugotowanym jajkiem, fasolką szparagową i oliwkami. Skrop oliwą.' },
  { name: 'Zupa krem z dyni z pestkami', kcal: 320, protein: 8, carbs: 40, fat: 15, time: '25 min', instructions: 'Upieczoną dynię zblenduj z bulionem i mleczkiem kokosowym. Podawaj posypaną prażonymi pestkami dyni.' },
  { name: 'Polędwiczki z indyka z kaszą pęczak', kcal: 460, protein: 42, carbs: 45, fat: 12, time: '30 min', instructions: 'Polędwiczki usmaż na złoto. Podawaj z ugotowaną kaszą pęczak i mizerią z ogórków.' },
  { name: 'Wegetariańskie burgery z ciecierzycy', kcal: 430, protein: 18, carbs: 55, fat: 14, time: '25 min', instructions: 'Zblenduj ciecierzycę z przyprawami, uformuj kotlety i upiecz. Podawaj w bułce pełnoziarnistej z warzywami.' },
  { name: 'Chili con carne z wołowiną', kcal: 500, protein: 45, carbs: 35, fat: 20, time: '40 min', instructions: 'Mieloną wołowinę podsmaż z cebulą. Dodaj fasolę czerwoną, kukurydzę, pomidory i przyprawę chili. Duś 20 min.' }
];

export const snacks: Partial<Meal>[] = [
  { name: 'Grecki jogurt z garścią orzechów włoskich', kcal: 150, protein: 12, carbs: 8, fat: 10, time: '2 min', instructions: 'Wymieszaj jogurt z orzechami.' },
  { name: 'Jabłko i łyżka masła migdałowego', kcal: 200, protein: 4, carbs: 20, fat: 14, time: '1 min', instructions: 'Jabłko pokrój w cząstki i maczaj w maśle migdałowym.' },
  { name: 'Krakersy pełnoziarniste z hummusem', kcal: 180, protein: 5, carbs: 22, fat: 8, time: '3 min', instructions: 'Posmaruj krakersy grubą warstwą hummusu.' },
  { name: 'Serek wiejski z rzodkiewką i ogórkiem', kcal: 170, protein: 18, carbs: 5, fat: 8, time: '2 min', instructions: 'Warzywa pokrój w kostkę i wymieszaj z serkiem.' },
  { name: 'Garść migdałów i suszone morele (2 szt.)', kcal: 160, protein: 6, carbs: 15, fat: 12, time: '1 min', instructions: 'Zjedz jako szybką przekąskę.' },
  { name: 'Słupki marchewki z pastą z bakłażana', kcal: 120, protein: 3, carbs: 12, fat: 7, time: '5 min', instructions: 'Marchewkę pokrój w słupki i maczaj w paście (baba ghanoush).' },
  { name: 'Koktajl z jarmużu, banana i jabłka', kcal: 190, protein: 4, carbs: 40, fat: 2, time: '5 min', instructions: 'Wszystkie składniki zblenduj z dodatkiem wody.' },
  { name: 'Kawałek gorzkiej czekolady (80%)', kcal: 110, protein: 2, carbs: 8, fat: 9, time: '1 min', instructions: 'Zjedz 2-3 kostki gorzkiej czekolady powoli delektując się smakiem.' },
  { name: 'Pół awokado z solą i pieprzem', kcal: 160, protein: 2, carbs: 9, fat: 15, time: '2 min', instructions: 'Awokado przekrój, wyjmij pestkę, posyp solą i pieprzem. Zjedz łyżeczką.' },
  { name: 'Kefir z borówkami', kcal: 140, protein: 10, carbs: 15, fat: 4, time: '2 min', instructions: 'Do szklanki kefiru wrzuć garść świeżych lub mrożonych borówek.' },
  { name: 'Garść orzechów nerkowca', kcal: 170, protein: 5, carbs: 9, fat: 14, time: '1 min', instructions: 'Odmierz jedną małą garść orzechów.' },
  { name: 'Wafle ryżowe z masłem orzechowym', kcal: 210, protein: 6, carbs: 25, fat: 10, time: '2 min', instructions: 'Dwa wafle posmaruj cienko masłem orzechowym 100%.' },
  { name: 'Sałatka owocowa (kiwi, truskawki, melon)', kcal: 130, protein: 2, carbs: 30, fat: 1, time: '5 min', instructions: 'Owoce pokrój w drobną kostkę i wymieszaj.' },
  { name: 'Pomidorki koktajlowe z mini mozzarellą', kcal: 150, protein: 8, carbs: 5, fat: 11, time: '3 min', instructions: 'Wymieszaj garść pomidorków z kilkoma kuleczkami mozzarelli, skrop oliwą.' },
  { name: 'Baton proteinowy (bez cukru)', kcal: 200, protein: 20, carbs: 15, fat: 6, time: '1 min', instructions: 'Zjedz gotowy baton o dobrym składzie (min. 15g białka).' }
];

export const dinners: Partial<Meal>[] = [
  { name: 'Sałatka z wędzonym łososiem i jajkiem', kcal: 380, protein: 25, carbs: 10, fat: 22, time: '15 min', instructions: 'Na miksie sałat ułóż plastry łososia, ugotowane jajko i pomidorki. Skrop sosem winegret.' },
  { name: 'Zupa krem z pomidorów z mozzarellą', kcal: 250, protein: 8, carbs: 30, fat: 10, time: '15 min', instructions: 'Zblenduj pomidory z puszki z czosnkiem i bazylią. Podgrzej, nałóż do miski i dodaj porwaną mozzarellę.' },
  { name: 'Pieczony dorsz ze szparagami i cytryną', kcal: 340, protein: 35, carbs: 8, fat: 15, time: '25 min', instructions: 'Dorsza i szparagi ułóż na blasze. Skrop oliwą i sokiem z cytryny. Piecz 15 min w 200°C.' },
  { name: 'Tofucznica z warzywami i kurkumą', kcal: 300, protein: 22, carbs: 12, fat: 18, time: '10 min', instructions: 'Rozkrusz tofu na patelnię, dodaj kurkumę, sól kala namak i ulubione warzywa. Smaż 5 minut.' },
  { name: 'Lekka sałatka z tuńczykiem i oliwkami', kcal: 320, protein: 28, carbs: 12, fat: 16, time: '10 min', instructions: 'Wymieszaj sałatę, tuńczyka w sosie własnym, czarne oliwki i czerwoną cebulę. Dopraw pieprzem.' },
  { name: 'Cukinia faszerowana indykiem i warzywami', kcal: 350, protein: 30, carbs: 15, fat: 18, time: '35 min', instructions: 'Wydrąż cukinię. Farsz zrób z mielonego indyka i miąższu. Napełnij cukinię i piecz 25 minut.' },
  { name: 'Omlet białkowy z pieczarkami', kcal: 280, protein: 25, carbs: 5, fat: 16, time: '10 min', instructions: 'Podsmaż pieczarki. Jajka roztrzep z odrobiną mleka, wylej na grzyby i smaż pod przykryciem.' },
  { name: 'Krem z kalafiora z grzankami', kcal: 290, protein: 6, carbs: 45, fat: 10, time: '20 min', instructions: 'Ugotuj kalafiora w bulionie, zblenduj na gładko. Podawaj z pełnoziarnistymi grzankami.' },
  { name: 'Sałatka grecka z fetą', kcal: 330, protein: 12, carbs: 15, fat: 25, time: '10 min', instructions: 'Pokrój ogórka, pomidora, paprykę i czerwoną cebulę. Dodaj oliwki i fetę. Skrop oliwą i oregano.' },
  { name: 'Grillowany ser halloumi z burakiem', kcal: 370, protein: 18, carbs: 20, fat: 26, time: '15 min', instructions: 'Plastry halloumi ugrilluj na suchej patelni. Podawaj na plastrach gotowanego buraka z rukolą.' },
  { name: 'Szaszłyki z kurczaka z warzywami', kcal: 340, protein: 35, carbs: 10, fat: 15, time: '25 min', instructions: 'Kawałki kurczaka, papryki i cebuli nabij na patyczki. Upiecz w piekarniku lub na grillu elektrycznym.' },
  { name: 'Zupa jarzynowa z koperkiem', kcal: 220, protein: 5, carbs: 35, fat: 6, time: '20 min', instructions: 'Ugotuj ulubione warzywa (marchew, seler, ziemniak, kalafior) w bulionie. Posyp obficie koperkiem.' },
  { name: 'Carpaccio z buraka z rukolą i orzechami', kcal: 260, protein: 6, carbs: 20, fat: 18, time: '10 min', instructions: 'Gotowanego buraka pokrój w bardzo cienkie plastry. Posyp rukolą, orzechami włoskimi i skrop octem balsamicznym.' },
  { name: 'Lekki twaróg z warzywami na ostro', kcal: 250, protein: 25, carbs: 10, fat: 10, time: '5 min', instructions: 'Chudy twaróg wymieszaj z rzodkiewką, szczypiorkiem i dużą ilością pieprzu oraz szczyptą chili.' },
  { name: 'Pieczone bataty z dipem czosnkowym', kcal: 310, protein: 5, carbs: 55, fat: 8, time: '30 min', instructions: 'Bataty pokrój w słupki, skrop oliwą i piecz 25 min. Podawaj z dipem z jogurtu naturalnego i czosnku.' }
];

export const workouts: Workout[] = [
  { 
    type: 'Rozciąganie', name: 'Poranna mobilność', 
    steps: ['Krążenia ramion (30s)', 'Skłony tułowia (1 min)', 'Pozycja dziecka (2 min)', 'Koci grzbiet (1 min)', 'Rozciąganie klatki piersiowej (1 min)'] 
  },
  { 
    type: 'Kardio', name: 'Szybki spacer na zewnątrz', 
    steps: ['Rozgrzewka, wolny marsz (5 min)', 'Szybki marsz, podwyższone tętno (20 min)', 'Uspokojenie oddechu (5 min)'] 
  },
  { 
    type: 'Siłowy', name: 'Wzmacnianie całego ciała', 
    steps: ['Przysiady z własną masą (3x15)', 'Pompki na kolanach (3x10)', 'Deska / Plank (3x30s)', 'Wykroki (3x12 na nogę)', 'Unoszenie ramion bokiem (3x15)'] 
  },
  { 
    type: 'Pilates', name: 'Płaski brzuch i mocne plecy', 
    steps: ['Spięcia brzucha (3x20)', 'Unoszenie bioder w leżeniu (3x15)', 'Martwy robak (3x10 na stronę)', 'Rozciąganie pleców (2 min)', 'Pływanie na sucho (3x15)'] 
  },
  { 
    type: 'Relaks', name: 'Joga na redukcję stresu', 
    steps: ['Głębokie oddychanie przeponowe (3 min)', 'Pozycja kobry (1 min)', 'Pies z głową w dół (2 min)', 'Savasana - pełen relaks (5 min)', 'Skręty tułowia w leżeniu (2 min)'] 
  },
  { 
    type: 'Kardio', name: 'Trening HIIT dla początkujących', 
    steps: ['Pajacyki (30s)', 'Odpoczynek (30s)', 'Bieg w miejscu (30s)', 'Odpoczynek (30s)', 'Wspinaczka pozioma (30s)', 'Powtórz 4 razy'] 
  },
  { 
    type: 'Siłowy', name: 'Jędrne pośladki i uda', 
    steps: ['Wykroki w tył (3x15 na nogę)', 'Mosty biodrowe jednonóż (3x12 na nogę)', 'Odwodzenie nogi w klęku (3x20 na nogę)', 'Przysiady sumo (3x15)'] 
  },
  { 
    type: 'Zdrowy Kręgosłup', name: 'Ulga dla pleców', 
    steps: ['Koci grzbiet (2 min)', 'Kołyska na plecach (1 min)', 'Rozciąganie mięśnia gruszkowatego (2 min)', 'Skłony japońskie (2 min)'] 
  },
  { 
    type: 'Kardio', name: 'Taniec fitness w salonie', 
    steps: ['Włącz ulubioną playlistę (15 min)', 'Tańcz intensywnie, angażując całe ciało', 'Zakończ 5-minutowym marszem w miejscu'] 
  },
  { 
    type: 'Pilates', name: 'Mocny Core', 
    steps: ['Nożyce w leżeniu (3x30s)', 'Deska boczna (3x20s na stronę)', 'Rowerek (3x40s)', 'Rozciąganie brzucha w pozycji kobry (1 min)'] 
  },
  { 
    type: 'Rozciąganie', name: 'Wieczorne wyciszenie', 
    steps: ['Siad skrzyżny, głębokie wdechy (2 min)', 'Skłon do nóg w siadzie (2 min)', 'Rozciąganie karku (1 min)', 'Leżenie z nogami na ścianie (5 min)'] 
  },
  { 
    type: 'Siłowy', name: 'Trening z butelkami wody', 
    steps: ['Wyciskanie butelek nad głowę (3x15)', 'Uginanie ramion na biceps (3x20)', 'Wiosłowanie w opadzie tułowia (3x15)', 'Wykroki z butelkami (3x12 na nogę)'] 
  },
  { 
    type: 'Kardio', name: 'Schody i marsz', 
    steps: ['Wejście i zejście po schodach (5 min)', 'Szybki marsz (10 min)', 'Wejście i zejście po schodach (5 min)', 'Rozciąganie łydek (2 min)'] 
  },
  { 
    type: 'Joga', name: 'Powitanie słońca', 
    steps: ['Pozycja góry (1 min)', 'Skłon w przód (1 min)', 'Deska do psa z głową w dół (2 min)', 'Wojownik I (1 min na stronę)', 'Savasana (3 min)'] 
  }
];

export const wellnessTips: WellnessTip[] = [
  { title: 'Zadbaj o higienę snu', description: 'Kobiety w perimenopauzie często cierpią na bezsenność, co podnosi poziom kortyzolu. Odłóż telefon godzinę przed snem i wywietrz sypialnię.' },
  { title: 'Moc białka na śniadanie', description: 'Jedzenie śniadania bogatego w białko (jajka, twaróg) stabilizuje poziom cukru na cały dzień i zapobiega popołudniowym atakom na słodycze.' },
  { title: 'Zarządzanie stresem', description: 'Kortyzol (hormon stresu) bezpośrednio sprzyja odkładaniu tłuszczu na brzuchu. Znajdź dziś 5 minut tylko dla siebie, usiądź w ciszy i weź 10 głębokich oddechów.' },
  { title: 'Tłuszcze są Twoim przyjacielem', description: 'Zdrowe tłuszcze z awokado, oliwy i orzechów są niezbędne do produkcji hormonów. Nie unikaj ich w swojej diecie!' },
  { title: 'Ruch to nie tylko spalanie kalorii', description: 'Regularne spacery poprawiają gęstość kości, co jest kluczowe po 40. roku życia, by zapobiegać osteoporozie.' },
  { title: 'Pamiętaj o magnezie', description: 'Magnez pomaga w walce z uderzeniami gorąca i poprawia jakość snu. Znajdziesz go w gorzkiej czekoladzie, pestkach dyni i szpinaku.' },
  { title: 'Woda z cytryną rano', description: 'Zacznij dzień od szklanki ciepłej wody z cytryną. To pobudzi Twój metabolizm i wspomoże trawienie po nocnym poście.' },
  { title: 'Nie bój się węglowodanów złożonych', description: 'Kasze, pełnoziarniste pieczywo i bataty dostarczają błonnika, który reguluje pracę jelit i daje uczucie sytości na dłużej.' },
  { title: 'Słuchaj swojego ciała', description: 'Jeśli czujesz ogromne zmęczenie, zrezygnuj z ciężkiego treningu na rzecz delikatnej jogi lub spaceru. Regeneracja jest równie ważna.' },
  { title: 'Zioła na ratunek', description: 'Napar z melisy lub rumianku wieczorem pomoże Ci się wyciszyć, a mięta po obiedzie wspomoże trawienie.' },
  { title: 'Słońce to witamina D', description: 'Postaraj się spędzić co najmniej 15 minut dziennie na słońcu. Witamina D jest kluczowa dla odporności i zdrowia kości.' },
  { title: 'Jedz uważnie (Mindful Eating)', description: 'Podczas posiłku wyłącz telewizor i odłóż telefon. Skup się na smaku i teksturze jedzenia. Zjesz mniej i poczujesz większą satysfakcję.' },
  { title: 'Zadbaj o florę jelitową', description: 'Kefir, kiszonki i jogurty naturalne to naturalne probiotyki. Zdrowe jelita to lepsza odporność i płaski brzuch.' },
  { title: 'Zimny prysznic', description: 'Zakończ poranny prysznic 30 sekundami zimnej wody. To świetnie pobudza krążenie i ujędrnia skórę.' },
  { title: 'Planuj posiłki', description: 'Zrobienie listy zakupów i zaplanowanie menu na kilka dni do przodu uchroni Cię przed sięganiem po niezdrowe przekąski w biegu.' }
];

// Generating 50+ articles covering fasting, menopause, nutrition, training, and psychology
export const articles: Article[] = Array.from({ length: 55 }).map((_, i) => {
  const topics = [
    { tag: 'Post Przerywany', title: 'Podstawy postu przerywanego', excerpt: 'Jak zacząć i nie zwariować w pierwszych dniach.', content: '<p>Post przerywany to nie dieta, to styl życia. Zacznij od okna 12/12 i stopniowo wydłużaj czas postu do 16 godzin. Pij dużo wody i słuchaj swojego ciała.</p>' },
    { tag: 'Menopauza', title: 'Hormony a waga', excerpt: 'Dlaczego po 40-tce tyjemy szybciej?', content: '<p>Spadek estrogenu powoduje redystrybucję tkanki tłuszczowej w okolice brzucha. Kluczem jest stabilizacja insuliny poprzez dietę low-carb i post.</p>' },
    { tag: 'Odżywianie', title: 'Moc białka', excerpt: 'Dlaczego białko jest Twoim najlepszym przyjacielem.', content: '<p>Białko buduje mięśnie, przyspiesza metabolizm i daje uczucie sytości. Staraj się mieć źródło białka w każdym posiłku.</p>' },
    { tag: 'Trening', title: 'Trening siłowy dla kobiet', excerpt: 'Nie bój się ciężarów!', content: '<p>Trening siłowy nie zrobi z Ciebie kulturystki. Zbuduje jędrne ciało, poprawi gęstość kości i przyspieszy spalanie tłuszczu w spoczynku.</p>' },
    { tag: 'Psychologia', title: 'Jedzenie emocjonalne', excerpt: 'Jak przestać zajadać stres?', content: '<p>Zanim sięgniesz po czekoladę, zadaj sobie pytanie: czy jestem głodna, czy zestresowana? Znajdź inne metody relaksu: spacer, kąpiel, rozmowa.</p>' },
    { tag: 'Post Przerywany', title: 'Co łamie post?', excerpt: 'Kawa z mlekiem czy bez?', content: '<p>W oknie postu dozwolona jest tylko woda, czarna kawa i herbata bez cukru. Nawet odrobina mleka może przerwać proces autofagii.</p>' },
    { tag: 'Menopauza', title: 'Uderzenia gorąca', excerpt: 'Jak sobie z nimi radzić naturalnie.', content: '<p>Unikaj pikantnych potraw, alkoholu i gorących napojów wieczorem. Zadbaj o przewiewne ubrania i suplementację fitoestrogenów (np. siemię lniane).</p>' },
    { tag: 'Odżywianie', title: 'Zdrowe tłuszcze', excerpt: 'Tłuszcz nie tuczy!', content: '<p>Awokado, oliwa, orzechy - to one wspierają produkcję hormonów i pracę mózgu. Unikaj jedynie tłuszczów trans obecnych w przetworzonej żywności.</p>' },
    { tag: 'Trening', title: 'Magia spacerów (NEAT)', excerpt: 'Dlaczego kroki mają znaczenie.', content: '<p>Spontaniczna aktywność fizyczna (NEAT) spala więcej kalorii w ciągu dnia niż godzinny trening. Staraj się robić minimum 8-10 tysięcy kroków.</p>' },
    { tag: 'Psychologia', title: 'Sen a odchudzanie', excerpt: 'Śpij i chudnij.', content: '<p>Brak snu podnosi poziom greliny (hormonu głodu) i obniża leptynę (hormon sytości). Zadbaj o 7-8 godzin snu, by łatwiej kontrolować apetyt.</p>' }
  ];
  
  const topic = topics[i % topics.length];
  
  return {
    id: `art${i + 1}`,
    tag: topic.tag,
    title: `${topic.title} - Część ${Math.floor(i / 10) + 1}`,
    excerpt: topic.excerpt,
    content: `
      <h4>Wprowadzenie</h4>
      ${topic.content}
      <h4>Wskazówka na dziś</h4>
      <p>Wdrażaj małe zmiany każdego dnia. Nie musisz być idealna, wystarczy, że będziesz konsekwentna. Pamiętaj, że proces transformacji wymaga czasu i cierpliwości.</p>
      <p><em>Ekspert Lekka Ty</em></p>
    `
  };
});

export const getDayPlan = (day: number): DayPlan => {
  const bIdx = (day * 3 + 1) % breakfasts.length;
  const lIdx = (day * 5 + 2) % lunches.length;
  const sIdx = (day * 7 + 3) % snacks.length;
  const dIdx = (day * 11 + 4) % dinners.length;
  
  const wIdx = (day * 2) % workouts.length;
  const tIdx = day % wellnessTips.length;

  return {
    day,
    meals: [
      { ...breakfasts[bIdx], type: 'Śniadanie' } as Meal,
      { ...lunches[lIdx], type: 'Obiad' } as Meal,
      { ...snacks[sIdx], type: 'Przekąska' } as Meal,
      { ...dinners[dIdx], type: 'Kolacja' } as Meal,
    ],
    workout: workouts[wIdx],
    tip: wellnessTips[tIdx],
  };
};
