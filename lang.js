const langTable = [
    {
        id: "lang001",
        pl: "Funkcje aplikacji",
        en: "Application features",
        sk: "Funkcie aplikácie"
    },
    {
        id: "lang002",
        pl: "Nasz zespół",
        en: "Our team",
        sk: "Náš tím"
    },
    {
        id: "lang003",
        pl: "Na premierę",
        en: "Premiere",
        sk: "premiéra"
    },
    {
        id: "lang004",
        pl: "O aplikacji",
        en: "More application",
        sk: "O aplikácii"
    },
    {
        id: "lang005",
        pl: "Odrobina Słodyczy",
        en: "A bit of sweets",
        sk: "Trochu sladkostí"
    },
    {
        id: "lang006",
        pl: "Dobre Ciasto rozwiewa wszelkie smutki",
        en: "A good cake dispels all sorrows",
        sk: "Dobrý koláč rozptyľuje všetky bolesti"
    },
    {
        id: "lang007",
        pl: "Chwila Zapomnienia",
        en: "A moment of forgetfulness",
        sk: "Okamžik zábudlivosti"
    },
    {
        id: "lang008",
        pl: "Tyle radości",
        en: "So much fun",
        sk: "Toľko zábavy"
    },
    {
        id: "lang009",
        pl: "Funkcje aplikacji",
        en: "Application features",
        sk: "Funkcie aplikácie"
    },
    {
        id: "lang010",
        pl: "Konto cukiernika",
        en: "Confectioner's account",
        sk: "Účet cukrára"
    },
    {
        id: "lang011",
        pl: "Moduł umożliwiający rejestrację cukierników, którzy chcą zaprezentować swoje wyroby klientom. Moduł, w którym cukiernicy mają możliwość zaprezentowania siebie i swoich oświadczeń oraz dokonań. W module podajemy między innymi dane osobowe i kontaktowe, dane teleadresowe wraz z lokalizacją, zgody związane z ochroną danych osobowych, dane o formie rozliczenia i warunkach świadczenia usługi, preferowaną forma składania zamówień, preferowane lub dostępne, sposoby odbierania i składania zamówień itp.",
        en: "Module enabling registration of confectioners who want to present their products to customers. A module in which confectioners have the opportunity to present themselves and their statements and achievements. In the module we provide, among others, personal and contact details, contact details along with the location, consents related to the protection of personal data, data on the form of settlement and terms of service, the preferred form of placing orders, preferred or available, ways of receiving and placing orders, etc.",
        sk: "Modul umožňujúci registráciu cukroviniek, ktorí chcú zákazníkom predstaviť svoje výrobky. Modul, v ktorom majú cukrári príležitosť prezentovať samy seba, svoje vyhlásenia a úspechy. V module poskytujeme okrem iného osobné a kontaktné údaje, kontaktné údaje spolu s miestom, súhlasy týkajúce sa ochrany osobných údajov, údaje o forme zúčtovania a podmienkach služby, uprednostňovaný spôsob zadávania objednávok, preferované alebo dostupné, spôsoby prijímania a zadávania objednávok atď."
    },
    {
        id: "lang012",
        pl: "Prezentacja wypieków",
        en: "Baking presentation",
        sk: "Pečenie"
    },
    {
        id: "lang013",
        pl: "Moduł składający się z funkcjonalności umożliwiających zaprezentowanie swoich możliwości na portalu. W skład modułu wchodzi możliwość prezentacji siebie, swoich doświadczeń, podając dane takie jak: staż pracy, wyroby, na jakich się pracuje, typy ciast itp., jak również możliwość podania specjalizacji oraz podania gotowych wyrobów, z jakich jest się słynnym wśród znajomych i w okolicy. W skład portfolio wchodzą dane o specjalizacji w wypiekach np. serników, jak również prezentacja konkretnych wyrobów, ciast, wypieków, ze zdjęciami i krótkimi opisami zachęcającymi potencjalnego klienta.",
        en: "The module consists of functionalities that allow you to present your capabilities on the portal. The module includes the opportunity to present yourself, your experience, giving data such as seniority, the products on which you work, types of cakes, etc., as well as the possibility of giving specialization and giving ready products for which you are famous among friends and in the area . The portfolio includes data on specialization in baking, e.g. cheesecakes, as well as the presentation of specific products, cakes, pastries, with photos and short descriptions encouraging a potential customer.",
        sk: "Modul sa skladá z funkcií, ktoré vám umožňujú predstaviť vaše schopnosti na portáli. Súčasťou modulu je možnosť predstaviť seba, svoje skúsenosti, poskytnúť údaje, ako sú odpracované roky, výrobky, na ktorých pracujete, druhy koláčov atď., Ako aj možnosť špecializácie a poskytovanie hotových výrobkov, pre ktoré ste známymi priateľmi a v danej oblasti. , Portfólio obsahuje údaje o špecializácii v pečení, napríklad tvarohové koláče, ako aj prezentácia konkrétnych výrobkov, koláčov, pečiva, s fotografiami a krátkym popisom povzbudzujúcim potenciálneho zákazníka."
    },
    {
        id: "lang014",
        pl: "Oferty i zamówienia",
        en: "Offers and orders",
        sk: "Ponuky a objednávky"
    },
    {
        id: "lang015",
        pl: "Moduł służący do przyjmowania zamówień i prezentacji swoich ofert. Cukiernik może sprzedawać swoje wyroby na dwa sposoby: albo prezentując swoją ofertę gotowych wyrobów/wypieków, które ma w stałym asortymencie, albo realizować zamówienia od klientów, którzy mogą zlecić wykonanie nie tylko proponowanych wypieków, ale również dowolnych innych. W module cukiernik ma możliwość wystawiania ofert, przyjmowania zamówień i wymiany informacji z zamawiającym na temat szczegółów zamówienia oraz terminów realizacji.",
        en: "Module for accepting orders and presenting your offers. The confectioner can sell his products in two ways: either by presenting his offer of ready-made products / pastries, which he has in a constant assortment, or fulfill orders from customers who can order not only the proposed pastries, but also any other. The confectioner module has the ability to issue offers, accept orders and exchange information with the ordering party on the details of the order and deadlines.",
        sk: "Modul na prijímanie objednávok a predkladanie ponúk. Cukráreň môže predávať svoje výrobky dvoma spôsobmi: buď predložením svojej ponuky hotových výrobkov / pečiva, ktoré má v neustálom sortimente, alebo plnením objednávok od zákazníkov, ktorí si môžu objednať nielen navrhované pečivo, ale aj akékoľvek iné. Cukrársky modul je schopný vydávať ponuky, prijímať objednávky a vymieňať si informácie s objednávateľom o podrobnostiach objednávky a termínoch."
    },
    {
        id: "lang016",
        pl: "Lista ciast z wyszukiwarką",
        en: "Cake list with search engine",
        sk: "Zoznam koláčikov pomocou vyhľadávacieho nástroja"
    },
    {
        id: "lang017",
        pl: "Podstawowa funkcja programu dla klienta, wyszukiwarka propozycji ciast i wypieków. Dzięki prostemu w użyciu, ale dającemu duże możliwości sposobowi wyszukania wg wielu kryteriów, użytkownik będzie mógł szybko znaleźć wyroby, jakie są dla niego interesujące, oraz wytwórców, którzy je produkują. Będzie również mógł zobaczyć zdjęcia wypieków i przejść w prosty sposób do kolejnych funkcji programu.",
        en: "The basic function of the program for the customer, search engine for cakes and pastries. Thanks to the easy to use, but giving great possibilities of searching methods according to many criteria, the user will be able to quickly find products that are of interest to him and the manufacturers who manufacture them. He will also be able to see photos of baking and easily go to the next program functions.",
        sk: "Základná funkcia programu pre zákazníka, vyhľadávač koláčov a pečiva. Vďaka jednoduchému použitiu, ale poskytovaniu skvelých možností metód vyhľadávania podľa mnohých kritérií, bude môcť užívateľ rýchlo nájsť produkty, ktoré sú pre neho zaujímavé a pre výrobcov, ktorí ich vyrábajú. Bude mať tiež možnosť vidieť fotografie pečenia a ľahko prejsť na ďalšie funkcie programu."
    },
    {
        id: "lang018",
        pl: "Cukiernik w Twojej okolicy",
        en: "Confectioner in your area",
        sk: "Cukráreň vo vašej oblasti"
    },
    {
        id: "lang019",
        pl: "Moduł przeznaczony do lokalizacji wytwórców w okolicy, jakiej życzy sobie użytkownik. Dzięki lokalizacji użytkownika poprzez wpisanie parametrów lub zaczytanie z przeglądarki, system będzie mógł podać automatycznie, w jakiej odległości od użytkownika jest najbliższy cukiernik. Wyszukiwanie będzie można ograniczyć do określonej odległości, miasta, ulicy itp.",
        en: "The module is intended for the location of manufacturers in the area desired by the user. Thanks to the user's location by entering parameters or starting from the browser, the system will be able to specify automatically at what distance from the user is the nearest confectioner. The search will be limited to a specific distance, city, street, etc.",
        sk: "Modul je určený na umiestnenie výrobcov v oblasti požadovanej užívateľom. Vďaka polohe používateľa zadaním parametrov alebo spustením z prehľadávača bude systém schopný automaticky určiť, v akej vzdialenosti od používateľa je najbližší cukrár. Vyhľadávanie bude obmedzené na konkrétnu vzdialenosť, mesto, ulicu atď."
    },
    {
        id: "lang020",
        pl: "System ocen",
        en: "Rating System",
        sk: "Systém hodnotenia"
    },
    {
        id: "lang021",
        pl: "Dzięki systemowi przyznawania ocen, zalogowany użytkownik będzie mógł po realizacji zamówienia ocenić jakość pracy cukiernika, smak i wygląd zamówionych produktów oraz terminowość dostawy. Oceny będą dostępne dla innych użytkowników, tak aby można było porównać jakość pracy cukierników. System ten będzie moderowany, aby nie doszło do nadużyć.",
        en: "Thanks to the grading system, the logged in user will be able to assess the quality of the confectioner's work, taste and appearance of the ordered products after the order is completed, as well as the timeliness of delivery. The ratings will be available to other users so that the quality of the confectioner's work can be compared. This system will be moderated so that there is no abuse.",
        sk: "Vďaka systému klasifikácie bude prihlásený užívateľ schopný po dokončení objednávky posúdiť kvalitu práce cukrára, chuť a vzhľad objednaných výrobkov, ako aj včasnosť dodávky. Hodnotenia budú k dispozícii ostatným používateľom, aby bolo možné porovnávať kvalitu práce cukrárov. Tento systém bude moderovaný, aby nedošlo k zneužitiu."
    },
    {
        id: "lang022",
        pl: "Poznaj nasz zespół",
        en: "Meet our team",
        sk: "Zoznámte sa s naším tímom"
    },
    {
        id: "lang023",
        pl: "Zaproszenie na premierę",
        en: "Invitation to the premiere",
        sk: "Pozvánka na premiéru"
    },
    {
        id: "lang024",
        pl: "Zostanie wysłany tylko jeden email z informacją o premierze.",
        en: "Only one email will be sent with information about the premiere.",
        sk: "Bude zaslaný iba jeden e-mail s informáciami o premiére."
    },
    {
        id: "lang025",
        pl: "Zapewniamy bezpieczeństwo Twoich danych.",
        en: "We ensure the security of your data.",
        sk: ""
    },
    {
        id: "lang026",
        pl: "Wyślij",
        en: "Send",
        sk: "Send"
    },
    {
        id: "lang027",
        pl: "Gra za maila",
        en: "Game by email",
        sk: "Hra e-mailom"
    },
    {
        id: "lang028",
        pl: "w podziękowaniu za podanie maila możesz zagrać w naszą grę",
        en: "in thanks for providing an email you can play our game",
        sk: "vďaka za poskytnutie e-mailu si môžete zahrať našu hru"
    },
    {
        id: "lang029",
        pl: "Gram",
        en: "Play",
        sk: "Hrajúci"
    },
    {
        id: "lang030",
        pl: "Dziękuję",
        en: "Thanks",
        sk: "Dakujem"
    },
    {
        id: "lang031",
        pl: "Informacje o aplikacji",
        en: "Application information",
        sk: "Informácie o aplikácii"
    },
    {
        id: "lang032",
        pl: "Informacje o nas możesz znaleźć",
        en: "You can find information about us in",
        sk: "Informácie o nás nájdete"
    },
    {
        id: "lang033",
        pl: "Wszystkie informacje o Facebook naszej aplikacji i najnowsze wiadomości możesz znaleźć w mediach społecznościowych",
        en: "All information about Facebook of our application and the latest news can be found on social media",
        sk: "Všetky informácie o našej aplikácii na Facebooku a najnovšie správy nájdete na sociálnych sieťach"
    },
    {
        id: "lang034",
        pl: "Warunki korzystania z programu",
        en: "Terms of use of the program",
        sk: "Podmienky používania programu"
    },
    {
        id: "lang035",
        pl: "Możesz korzystać z programu kiedy chcesz jak chcesz i do kiedy chcesz. Pamiętaj, że inni też chcą używać tego programu więc nie staraj się zrobić mu krzywdy, Korzystanie jest dostępne dla każdego kto wyświetli stronę i kto chce zostawić tu swoje dane po to aby inni mogli się do niego odezwać. Powodzenia.",
        en: "You can use the program whenever you want and when you want. Remember that others also want to use this program so do not try to hurt him. Use is available to anyone who views the page and who wants to leave their data here so that others can speak to him. Good luck.",
        sk: "Program môžete použiť kedykoľvek a kdekoľvek chcete. Nezabudnite, že tento program chcú používať aj iní, preto sa ho nesnažte ublížiť. Používanie je k dispozícii každému, kto si stránku prezerá a chce tu nechať svoje údaje, aby s ním mohli hovoriť ostatní. Veľa šťastia"
    },
    {
        id: "lang036",
        pl: "Prawa autorskie",
        en: "Copyright",
        sk: "Copyright"
    },
    {
        id: "lang037",
        pl: "Prawa autorskie należą do autorów jak i do infoshareacademy i chyba nie może być inaczej. Więc jak możesz to przestrzegaj tych praw a my będziemy za to wdzięczni. Choć wdzięczność nasz będzie pewnie większa jakbyś nam jakiegoś gifta nam dał za to, że możesz tego używać.",
        en: "Copyright belongs to the authors as well as to the infoshareacademy and it can't be otherwise. So if you can, obey these laws and we'll be grateful for that. Although our gratitude will probably be greater if you gave us some gifta for using it.",
        sk: "Autorské právo patrí autorovi aj infosareacadémii a nemôže to byť inak. Takže, ak môžete, dodržujte tieto zákony a budeme za to vďační. Aj keď naša vďačnosť bude pravdepodobne väčšia, ak ste nám dali nejakú giftu za jej použitie."
    },
    {
        id: "lang038",
        pl: "Rejestracja cukierników",
        en: "Registration of confectioners",
        sk: "Registrácia cukroviniek"
    },
    {
        id: "lang039",
        pl: "Jako ten kto chce swoje wyroby zaprezentować i ewentualnie czerpać korzyści z ich sprzedawania musi niestety się zarejestrować bo inaczej nie będzie miał dostępu do swoich treści, hej. A po co nam to a w zasadzie po nic ale wszyscy tak robią więc i my też tak robimy.",
        en: "As the one who wants to present their products and possibly reap the benefits of selling them, unfortunately he has to register or he won't have access to his content, hey. And why do we need it, and basically for nothing, but everybody does it so we also do it.",
        sk: "Ako ten, kto chce prezentovať svoje výrobky a prípadne ťažiť z výhod ich predaja, musí sa, žiaľ, zaregistrovať, alebo nebude mať prístup k jeho obsahu, hej. A prečo to potrebujeme av podstate pre nič za nič, ale každý to robí, robíme to tiež."
    },
    {
        id: "lang040",
        pl: "Ostatnia aktualizacja",
        en: "Last actualisation",
        sk: "Posledná aktualizácia"
    },
    {
        id: "lang041",
        pl: "Ostania aktualizacja mogła być przed sekundą jaki przed kilkoma miesiącami, sami nie wiemy w sumie kiedy była, kiedy będzie i kiedy może być ale coś sprawdzajcie to się dowiecie. Wersja i data aktualizacji będzie dostępna w stopce – jak ktoś ją zrobi.",
        en: "The last update may have been a second or a few months ago, we do not know in total when it was, when it will be, but when you check something, you will find out. The version and date of the update will be available in the footer - if someone does it.",
        sk: "Posledná aktualizácia mohla byť pred pár alebo niekoľkými mesiacmi, nevieme celkom, kedy to bolo, kedy to bude a kedy to môže byť, ale niečo si prezrite, zistíte. Verzia a dátum aktualizácie bude k dispozícii v päte - ak tak urobí niekto."
    },
    {
        id: "lang042",
        pl: "Planowana data otwarcia",
        en: "Planned opening date",
        sk: "Plánovaný dátum otvorenia"
    },
    {
        id: "lang043",
        pl: "Planujemy zrobić wielkie otwarcie aplikacji tak jak akademia przykazała ale chyba nie wiemy dokładnie kiedy to będzie bo nie pamiętamy więc może być to gdzieś na początku przyszłego roku. W każdym bądź razie będzie jak będzie o czym chętnych, chętnie poinformujemy.",
        en: "We plan to do a great opening of the application as the academy commanded, but we do not know exactly when it will be because we do not remember so it could be somewhere at the beginning of next year. In any case, it will be as willing as possible, we will gladly inform you.",
        sk: "Máme v pláne urobiť veľké otvorenie aplikácie podľa pokynov akadémie, ale nevieme presne kedy to bude, pretože si to nepamätáme, takže to môže byť niekde na začiatku budúceho roka. V každom prípade to bude čo najviac ochotné, radi vás o tom informujeme."
    },
    {
        id: "lang044",
        pl: "Rejestracja użytkowników",
        en: "User registration",
        sk: "Registrácia užívateľa"
    },
    {
        id: "lang045",
        pl: "No użytkownicy, tych też chcemy rejestrować aby zaoferować im dodatkowe atrakcje takie jaki możliwość oceny wyrobów i cukierników ale, żeby oceny były odpowiedzialne to chcemy wiedzieć kto to robi, żeby w razie czego móc na niego odpowiedni wpłynąć.",
        en: "Well, users, we also want to register to offer them additional attractions, such as the possibility of assessing products and confectioners, but for the assessments to be responsible, we want to know who does it, in order to be able to influence it properly.",
        sk: "Používatelia ich tiež chceme zaregistrovať, aby im ponúkli ďalšie atrakcie, ako je napríklad možnosť posudzovania výrobkov a cukroviniek, ale aby zodpovednosť za hodnotenie mali vedieť, kto to robí, aby sme ich v prípade potreby mohli ovplyvniť."
    },
    {
        id: "lang046",
        pl: "Nasze wartości",
        en: "Our values",
        sk: "Naše hodnoty"
    },
    {
        id: "lang047",
        pl: "Nasze wartości to chwile radości. Kodujemy bo kodować nie umiemy ale bardzo kodować chcemy. Jak odpowiednio mocno chcieć będziemy to w końcu super to zakodujemy. Standardy trzymać będziemy ale dopiero wtedy jak się o nich dowiemy. Tak wo ogóle niech żyje kodowanie, fajnych aplikacji wytwarzanie.",
        en: "Our values are moments of joy. We code because we cannot code, but we want to code very much. If we want to get it enough, we will code it in the end. We will keep the standards but only when we learn about them. Long live coding, nice applications development.",
        sk: "Naše hodnoty sú chvíľami radosti. Kódujeme, pretože nemôžeme kódovať, ale veľmi chceme kódovať. Ak to chceme získať dosť, napíšeme to nakoniec. Budeme dodržiavať normy, ale iba vtedy, keď sa o nich dozvieme. Dlhé živé kódovanie, pekný vývoj aplikácií."
    },
    {
        id: "lang048",
        pl: "Na naszej stronie używamy plików cookies. Jeśli nie chcesz aby pliki cookies się zapisywały, zmień ustawienia przeglądarki. Więcej w polityce prywatności.",
        en: "We use cookies on our site. If you do not want cookies to be saved, change your browser settings. More in the privacy policy.",
        sk: "Na našich stránkach používame cookies. Ak si neželáte, aby sa cookies ukladali, zmeňte nastavenia vášho prehliadača. Viac v politike ochrany osobných údajov."
    },
    {
        id: "lang049",
        pl: "Akceptuje",
        en: "I accept",
        sk: "Súhlasím"
    },
    {
        id: "lang050",
        pl: "Podaj adres email",
        en: "Enter email address",
        sk: "Vložte emailovú adresu"
    },
    {
        id: "lang051",
        pl: "poprawny email",
        en: "valid email",
        sk: "platný email"
    },
    {
        id: "lang052",
        pl: "wprowadź poprawny email",
        en: "please enter a valid email",
        sk: "zadajte platný e-mail"
    }



]
