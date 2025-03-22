import BagPicture from "@/assets/img/bag.jpeg";
import CoatPicture from "@/assets/img/man-in-coat.jpeg";
import type { Product } from "~/types/Product";

const products: Product[] = [
  {
    id: 1,
    img: BagPicture,
    title: "Torebka damska",
    price: 89.99,
    category: ["women"],
    description:
      "Skórzana brązowa torebka damska o eleganckim, klasycznym wyglądzie. Wykonana z wysokiej jakości naturalnej skóry, charakteryzuje się subtelnym połyskiem i trwałością. Posiada przestronną komorę główną, zamykaną na zamek błyskawiczny, a także praktyczne kieszonki na drobiazgi. Dzięki uniwersalnemu kolorowi, doskonale komponuje się zarówno z casualowymi, jak i bardziej formalnymi stylizacjami. Stylowa, a zarazem funkcjonalna – idealna na co dzień i na specjalne okazje.",
  },
  {
    id: 2,
    img: CoatPicture,
    title: "Płaszcz męski",
    price: 219.99,
    category: ["men"],
    description:
      "Nasz elegancki męski płaszcz wykonany z najwyższej jakości wełny to kwintesencja stylu i komfortu. Dzięki klasycznemu krojowi i starannemu wykonaniu, płaszcz ten idealnie nadaje się zarówno na formalne okazje, jak i codzienne wyjścia. Wełna zapewnia doskonałą izolację cieplną, a jednocześnie jest przewiewna, co czyni go idealnym wyborem na każdą porę roku. Wybierz ponadczasową elegancję i ciesz się wyjątkowym wyglądem oraz wygodą każdego dnia.",
  },
];

export default products;
