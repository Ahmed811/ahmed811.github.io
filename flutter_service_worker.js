'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "401731ff5c60567bf8001e670540fee0",
"assets/AssetManifest.bin.json": "93af2e3b786cf43e90d5eb754667541b",
"assets/AssetManifest.json": "593670ddc0a502a17a8511599b6bd860",
"assets/assets/daily_life/daily_life.json": "dfd045929089ccd36391c4d6a13481fc",
"assets/assets/fonts/bahja.ttf": "3298a1639fb94816e52d942a2d78a0b8",
"assets/assets/hero.png": "64fdaf75c2f46ba577957e51a6b68b8c",
"assets/assets/icons/advice.svg": "0181370248367a80d0aa444f03902235",
"assets/assets/icons/agree.svg": "836dd89cfd329993cd06bfc52fc37584",
"assets/assets/icons/apartments.svg": "a7e3a5720dbc08d73faa75475745690b",
"assets/assets/icons/banking.svg": "4615e8d9ebdbbcfe621a2693b855a09a",
"assets/assets/icons/bread.svg": "e65aa2b54326f88b9f89d57c269c7e35",
"assets/assets/icons/calendar.svg": "f52a4e1ae7453b9bc3c2f8a678d726d6",
"assets/assets/icons/child.svg": "716fa2440bfd2b2e71f377e37db98600",
"assets/assets/icons/clothes.svg": "7b1f00cce6d07337af908bc4ff1ce3ba",
"assets/assets/icons/computers.svg": "a12701a00bb34a753c19729a5da98848",
"assets/assets/icons/conversation.svg": "2cc8d41b649dd58ad730d745a7cdb235",
"assets/assets/icons/countries.svg": "3860106d68613dd997c61e5cb547085a",
"assets/assets/icons/Describing.svg": "ae68bdd22b08ee0427e77f7fc59687ba",
"assets/assets/icons/discussion.svg": "0772fb265fe04f627ff295e244c6596c",
"assets/assets/icons/doctor.svg": "935374c83d3b3c982b397fe62a6773aa",
"assets/assets/icons/family.svg": "2119bf40fc3bf0e652c0b556e328ac37",
"assets/assets/icons/feelings.svg": "7c91158a2e4e858cf2f959a26b9b4816",
"assets/assets/icons/fight.svg": "74550c5586f99ed2a500a7597c24afb0",
"assets/assets/icons/friends.svg": "21609a4666e5248009eacdeef941897b",
"assets/assets/icons/gas-station.svg": "95c3b24687b025940157ccecbf24a39f",
"assets/assets/icons/greeting.svg": "02ed7f88f3643c09df92b2511d823214",
"assets/assets/icons/health.svg": "060691b2c6cd564338bc07d9d68f344f",
"assets/assets/icons/hotel.svg": "b3195e0821ab53352f65097d3fa34be0",
"assets/assets/icons/house.svg": "2cfa93a5716d003be12fb165b60befe6",
"assets/assets/icons/how_are_you.svg": "9d61023e948b4c83e23f1cbd5b6b0785",
"assets/assets/icons/invite.svg": "6a1bd7c4069b8f5692c71d92712bb895",
"assets/assets/icons/library.svg": "e3c993bbaa78af5cd2c4ff70a489e9fc",
"assets/assets/icons/meals.svg": "60f9c2d2305d09dfdb3364c5b028015a",
"assets/assets/icons/medicine.svg": "740988a15e765cc85cc7194cc865654a",
"assets/assets/icons/people.svg": "3b58baba67b9412f749fd88e6ee1bf60",
"assets/assets/icons/people2.svg": "2113a318d48e91317ac2866387656d0c",
"assets/assets/icons/people3.svg": "1295424b6f98d66399f0ce7be103e2ae",
"assets/assets/icons/person.svg": "d61f8202f1bdb6c5dcb4a96151dbb8ad",
"assets/assets/icons/pets.svg": "633afeec8f5163583b18c0c8f28606fd",
"assets/assets/icons/phone-call.svg": "a99c7daaf2304b557dc3eb71e1b0092d",
"assets/assets/icons/police.svg": "417001aa274296630cf6f7eed0100388",
"assets/assets/icons/psychologist.svg": "59555711d9c9c5d3c6fd8e26057dbd61",
"assets/assets/icons/question.svg": "b596eff5af098ccd96841f4b864a4916",
"assets/assets/icons/restaurant.svg": "6f20e901f3a5289ded93453e5b7f65f5",
"assets/assets/icons/school.svg": "ce752aff030662932c358a4368c70f79",
"assets/assets/icons/shopping.svg": "8f93bb44e6d1d49d843b41009821f479",
"assets/assets/icons/sleeping.svg": "49844ebd15d96121d880123ba82b4694",
"assets/assets/icons/smoking.svg": "428e2c84137589987074946d60c257e0",
"assets/assets/icons/supermarket.svg": "f3d108e459702dc7bb09dab31f304a82",
"assets/assets/icons/support.svg": "12719a0080a54a6abf02a25eaf852123",
"assets/assets/icons/thanks.svg": "9d0a4aba192a7561c407c88e085d3aa7",
"assets/assets/icons/tickets.svg": "3fe85a7bd751489ce80e09ef3e9aac9d",
"assets/assets/icons/transportation.svg": "47d6776453a16d6015c0aa9083cd036f",
"assets/assets/icons/travel.svg": "43b9a885cf118957ee09629f567aff3e",
"assets/assets/icons/visit.svg": "0150e2b8182d18adbfe65c36aea3a56f",
"assets/assets/icons/warning.svg": "2f0a20b712ddb9bd8f25d9041149e611",
"assets/assets/icons/weather.svg": "d99fe5729bfb91a0b10d27c38d1dbab8",
"assets/assets/lottie_icons/dictionary.json": "28507e507d0391d29e18db7dc1ad6053",
"assets/assets/lottie_icons/jobs.json": "48df08b97de7300f97e74548f992de63",
"assets/assets/lottie_icons/movie.json": "b433c90761e3a19bb69d6b9d407203e8",
"assets/assets/lottie_icons/setting.json": "b05ff28f7369782f03a34303343a775a",
"assets/assets/lottie_icons/sunrise.json": "29384140d981d0acff4b9eab5336aad0",
"assets/assets/lottie_icons/test.json": "f36912825ca920ef314462c441eb2b0f",
"assets/assets/movies.json": "e704435e888621d9aa94c9d6e3c47ca7",
"assets/assets/sentences/agricultural_engineering.json": "cafa9bb72b614e08dd3d2573936a2601",
"assets/assets/sentences/ai_and_machine_learning.json": "09a0dcb2a54ab29446d855cfd3836473",
"assets/assets/sentences/alternative_medicine.json": "eaad61924674cd3cdb9e4b8755d9c15e",
"assets/assets/sentences/animal_protection.json": "1b2071a4af5dd476f1ab48f17553a22d",
"assets/assets/sentences/architecture.json": "a93e3c2c690eeb1736000135f3d9c844",
"assets/assets/sentences/arts_and_culture.json": "f8a604c05f15bf1971be7e792f05cfb6",
"assets/assets/sentences/art_history.json": "65faa8f5d1d84a4b04019affb2b33ac5",
"assets/assets/sentences/attending_parties.json": "7f7912f41928669ed32c5b3729d532bb",
"assets/assets/sentences/aviation_and_aircraft.json": "bbb1c2e9c453b1c781c159baab97f8bf",
"assets/assets/sentences/banks_and_financial_affairs.json": "7fb4053bc1b5e53da0e31055bfdcda6d",
"assets/assets/sentences/beauty_and_skincare.json": "283cc8bcb5d0212bb2057f8421c87fa4",
"assets/assets/sentences/biotechnology.json": "a894af77fbcd2a688aa4b9532490d492",
"assets/assets/sentences/chemical_engineering.json": "d00a39ddcecb1280e23efbaa413ba3e1",
"assets/assets/sentences/cinema_and_filmmaking.json": "59c18e595ab7314530f52f944364d2f5",
"assets/assets/sentences/civil_engineering.json": "a679dfb9862e62b330b0be86f5dd61e0",
"assets/assets/sentences/climate_and_weather.json": "ba17071763d8a77c31d32ba69be3aa4b",
"assets/assets/sentences/cloud_computing.json": "91f7caa821b5f2159013775f41db16b2",
"assets/assets/sentences/cooking_and_cuisine.json": "10d2810eed5698d5ccfb50cf0da7e5a2",
"assets/assets/sentences/cooking_and_kitchen.json": "40ef194727ea5aa7ba451333e944e8db",
"assets/assets/sentences/creative_industries.json": "1d64277266a1318c344fac630f82b16b",
"assets/assets/sentences/creative_writing.json": "340cbf485405b9c0e0d990891806fc46",
"assets/assets/sentences/crisis_management.json": "ff4b7c96df4fc19ddb5ae4902bd02591",
"assets/assets/sentences/cybersecurity.json": "90a24294abd6a7d8a009bd0c3f6ceb9d",
"assets/assets/sentences/daily_life_and_home.json": "a4bc6b292c209984bd389cb85777aad9",
"assets/assets/sentences/digital_space.json": "2b98fb0f5a269283b84e038a69ec3d97",
"assets/assets/sentences/eating_at_the_restaurant.json": "5b9ecfb0a1ef007fbf4c4336f04e59f4",
"assets/assets/sentences/ecommerce.json": "49b4311eedec67a7e0569b68c3bb5341",
"assets/assets/sentences/economics_and_trade.json": "830406dd965e53d1c9f0f4fe466f0e94",
"assets/assets/sentences/education_and_study.json": "1134ee900f3eb33880b1c0a883d30d39",
"assets/assets/sentences/electrical_engineering.json": "b807287138281fa4370232e95151ccee",
"assets/assets/sentences/emergencies_and_first_aid.json": "3e76c23a6500224cbfdda05b3dfd0fa9",
"assets/assets/sentences/English_sentences.json": "e966e0996a916d130c891ab0ad9effa7",
"assets/assets/sentences/entering_the_bathroom.json": "43afe355ce7eb6bbf1c2c95bcf12413b",
"assets/assets/sentences/environment_and_nature.json": "d580417ebb1b372609244ced3219103e",
"assets/assets/sentences/events_and_celebrations.json": "7eba85ee82674baf5218c9e7095b3e05",
"assets/assets/sentences/exercising.json": "fc2c52ee8936490fe226e4a837c941d2",
"assets/assets/sentences/e_learning.json": "12aa14a8f0f38b688789ff9e4f80f221",
"assets/assets/sentences/family_and_friends.json": "3348b6e8e65f971011bb504fe641f715",
"assets/assets/sentences/family_planning.json": "71858927a68c6e4443fb06d4b489fb21",
"assets/assets/sentences/family_relationships.json": "a8b222259f087ebbe92fb078ebfc131c",
"assets/assets/sentences/fashion_and_style.json": "a50707fb0afaf8c99b1c689e383e7f86",
"assets/assets/sentences/financial_planning_and_saving.json": "67b009972b8134dd4b866134c679bb63",
"assets/assets/sentences/food_culture.json": "e2695fa7e9adad5c35871a1ef4e2af67",
"assets/assets/sentences/freelancing.json": "3aa937b444070e46619360f3625741bf",
"assets/assets/sentences/games_and_video_games.json": "81437de206a6967fc89ae43337427e28",
"assets/assets/sentences/gender_studies.json": "2f1887843b356a1787d062c0950140b6",
"assets/assets/sentences/global_cuisine.json": "625ac32a86541b41a037e512560c490a",
"assets/assets/sentences/going_to_the_beach.json": "43afe355ce7eb6bbf1c2c95bcf12413b",
"assets/assets/sentences/green_industries.json": "1e575c9743ef69e7929564b5a85a79f6",
"assets/assets/sentences/greetings_and_daily_conversations.json": "297476827c1c029911f7462fa04d7399",
"assets/assets/sentences/handicrafts.json": "5bba709d033e4eeae02c530b9bfd961b",
"assets/assets/sentences/health_and_fitness.json": "a7f62c5d76b7af855fc21a2fa74f2434",
"assets/assets/sentences/hobbies_and_recreational_activities.json": "e00825b3ff6d0cff2e4a4c00acf68075",
"assets/assets/sentences/holidays_and_celebrations.json": "3783d742ef043b132d97c1d5c27034c3",
"assets/assets/sentences/home_economics.json": "adc936eb9966dac7d382b58f2bb57c0a",
"assets/assets/sentences/human_resource_management.json": "7ff8ce2c0fd4ba9638eada013f8baaa8",
"assets/assets/sentences/human_rights.json": "9a66525e806ba261de1f6e4affdda12a",
"assets/assets/sentences/inquiries_and_directions.json": "5d711b9ce1b2238a43695c2991d1e557",
"assets/assets/sentences/interior_design.json": "189001fcb7c5b93516438089784138f2",
"assets/assets/sentences/international_relations.json": "9e3a191537cd61f00315e7693e902953",
"assets/assets/sentences/international_trade.json": "682aa52080dc28c433a114e8761b7a42",
"assets/assets/sentences/job_interviews.json": "28b13e27b1dd804c1275c16968eec638",
"assets/assets/sentences/law_and_legal_studies.json": "8919e38c39535bf6b0ae1b012e90491b",
"assets/assets/sentences/legal_matters.json": "0410d3d6de4fe1b2f19e5eb6360434cf",
"assets/assets/sentences/literature_and_books.json": "02c696766d8e7ebc8970239abb30010e",
"assets/assets/sentences/literature_and_writing.json": "12f0ef6e451ea3455d196ff8515b8cca",
"assets/assets/sentences/marine_environment.json": "a1436e0fa8400d3729a98bbe53f99527",
"assets/assets/sentences/marketing_and_advertising.json": "0ce9d8d06b6c7e1286bcdcca13cf99fd",
"assets/assets/sentences/martial_arts.json": "45f1dec104cb4f6dc599887ac73e07c0",
"assets/assets/sentences/martial_arts_and_self_defense.json": "c65c8102f466edd87182ebe134e7e26d",
"assets/assets/sentences/mathematics_and_science.json": "ee2a7c3bc8b7faf4acb41dfeaad34180",
"assets/assets/sentences/mechanical_engineering.json": "2d3c85694eadb546a259ac2565b3e5f3",
"assets/assets/sentences/media_and_entertainment.json": "71d7587ca599240db308f71f8dafaaee",
"assets/assets/sentences/mental_health.json": "653ac8adab2597b4dc37f09887d92d4e",
"assets/assets/sentences/mental_healthcare.json": "d7e176d69bdf4ad7863d3d9f9d326e71",
"assets/assets/sentences/microbiology.json": "a3da78ffcca20109ce0ad52d857f3983",
"assets/assets/sentences/music_and_performing_arts.json": "0cd82fc19d50d0d5310065f2dfe9aefe",
"assets/assets/sentences/music_and_singing.json": "e7b8835296987febff6520b9541ec158",
"assets/assets/sentences/natural_sciences.json": "2b068da7d9cde1321f2b0f8e5311ead0",
"assets/assets/sentences/nutritional_health.json": "62cb0ad8939b9e2c806d4da9104cd61a",
"assets/assets/sentences/oceanography.json": "eed6dc8d477f1981707ce8d1ef8fe146",
"assets/assets/sentences/performing_arts.json": "18a2979ae18d487c587e34ee076e4a4a",
"assets/assets/sentences/personal_development.json": "d6c3666922beaad07ca4045b88dbe1ff",
"assets/assets/sentences/personal_matters.json": "0b03531a4ae7db3aad523d2b459e7c4d",
"assets/assets/sentences/photography.json": "738ac064223a9cb3e952611d74d2ffbc",
"assets/assets/sentences/physical_training.json": "e58850a5cb66182f5919a07d025e544d",
"assets/assets/sentences/places_and_tourist_attractions.json": "3593afff6e0410a48bfb75aada83deba",
"assets/assets/sentences/pop_culture.json": "07f1466d3653b2eefad926406cc95338",
"assets/assets/sentences/preparing_for_travel.json": "6bd4116711c10d056757a55c87bae1f2",
"assets/assets/sentences/programming_and_software_development.json": "50f3938a63b91552a6eabbaad37f30fd",
"assets/assets/sentences/project_management.json": "786e97a71e654574915664147682b04f",
"assets/assets/sentences/psychology.json": "2e0136038a786c34dd2f71ffe9bce91f",
"assets/assets/sentences/public_relations.json": "42f3b2e3f55f83472661d1097e4db7c5",
"assets/assets/sentences/public_services.json": "aacee790f49de77537d2717271250093",
"assets/assets/sentences/real_estate_and_investment.json": "71d352ed0f0fdf852b0bbe3aa663c7bf",
"assets/assets/sentences/relationships_and_social_affairs.json": "b8b48eb7614f3a7ba5d293b030f9cb09",
"assets/assets/sentences/religions_and_beliefs.json": "43f2900886ccd3836200e5e568736ec2",
"assets/assets/sentences/remote_work.json": "6225192fdefc2987f4db780b612e0501",
"assets/assets/sentences/safety_and_security.json": "df64786757936e0640f7629e136a4e37",
"assets/assets/sentences/science_and_technology.json": "1ac71d487e8185e99d6f8f0bdbded6bd",
"assets/assets/sentences/scientific_research.json": "322958ebfde735be8e63bf839e0192c1",
"assets/assets/sentences/self_education.json": "e0ff6bcb98d87d9ca8bc0351e83274a0",
"assets/assets/sentences/sentences.json": "0bd000713c2b789c3e9fdc84e0e500ed",
"assets/assets/sentences/shopping_and_restaurants.json": "40636d3182b96c3f96816de1ed61660c",
"assets/assets/sentences/shopping_and_retail.json": "cc41fd23a0affde3557560d02596bc2f",
"assets/assets/sentences/shopping_at_the_supermarket.json": "42c554596500ae782692e9cb2dc5a82a",
"assets/assets/sentences/sleeping_and_relaxing.json": "36fe0f793455753dba966287fd31825c",
"assets/assets/sentences/space_and_astronomy.json": "97be26500771882257ea0412c176ed6e",
"assets/assets/sentences/space_and_exploration.json": "bfe4e420461fee51ad7a8f5bd40df1c0",
"assets/assets/sentences/sports_and_games.json": "d3cfbe8e1d197bf226755935570c3124",
"assets/assets/sentences/sports_and_physical_activity.json": "3f83ab97a5aff54982f290f6f4598d16",
"assets/assets/sentences/sustainability_and_renewable_energy.json": "c51624491fff125e04c09a3f4bd96689",
"assets/assets/sentences/tamplate.json": "87c9dfcb0969549d794c33d537adfa70",
"assets/assets/sentences/technical_and_vocational_education.json": "a89a874a5bb1e23734c40ee9c45d643f",
"assets/assets/sentences/technology_and_internet.json": "b7d74eb7148f71cfafeee3d0c3df65ca",
"assets/assets/sentences/tourism_and.json": "2ecb3862f0a571f6b3a8d64b2450c844",
"assets/assets/sentences/traditional_industries.json": "443cf8959b4a2eae13cd79ea13f8cfe8",
"assets/assets/sentences/translation_and_languages.json": "9af1aa7124bb08ab23f9cf62cbaa65a5",
"assets/assets/sentences/transportation_and_shipping.json": "257e83fb285b44c4f754184191d443b6",
"assets/assets/sentences/travel_and_adventure.json": "6789e7ce430a8219a639272ca691a930",
"assets/assets/sentences/travel_and_transportation.json": "413a49a414fe6940ac811dabc5fbf29f",
"assets/assets/sentences/urban_farming.json": "9694c41e73161e8222f194da501feb81",
"assets/assets/sentences/urban_planning.json": "3eb820c4ab4de738362966550029abbd",
"assets/assets/sentences/vegan_cooking.json": "b3ea55b08b142e2668ce7bcef17cd969",
"assets/assets/sentences/veterinary_medicine.json": "3c40083b70ba1ad78f675f850c4e53be",
"assets/assets/sentences/visiting_the_doctor.json": "e06e7fe5d3752bdff1256dc6e02c7bc4",
"assets/assets/sentences/visual_arts.json": "8f217d81b7e56cdf6cb5a50b1733609d",
"assets/assets/sentences/volunteering_and_charity.json": "c75775c52c2cf4822fde98be06c909f6",
"assets/assets/sentences/volunteer_work.json": "aaae0f56246f5c4472df03becce55d77",
"assets/assets/sentences/weather_and_seasons.json": "6571997012393cb001c000f9a334561c",
"assets/assets/sentences/winter_sports.json": "c487c50d6aa2979f9eb39a0878acfd0c",
"assets/assets/sentences/work_and_office.json": "0b42da1de11458b5881646d34b35f195",
"assets/FontManifest.json": "73348b133a2b801e7de4da3317383263",
"assets/fonts/MaterialIcons-Regular.otf": "1b52a731182b1cf5ae6d7a1930060f03",
"assets/NOTICES": "665261ddaded52f48dc3e2331cc549ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fe5001c364de96319ae3c14d749e8b58",
"/": "fe5001c364de96319ae3c14d749e8b58",
"main.dart.js": "95d58bd500386f2b67f285ae4e727869",
"manifest.json": "9d853eae1f3b753f60afc4f5ad1efa24",
"version.json": "9ac07a342e26a738f02b8a16abda5c60"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
