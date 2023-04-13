export type PokeCardType = {
  id: number;
  pokeName: string;
  expansionName: string;
  image_url: string;
};

// TODO : Replace by TCG API data
export const expansionsData: PokeCardType[] = [
  {
    id: 1,
    pokeName: "Sulfura",
    expansionName: "Scarlet & Violet",
    image_url:
      "https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg",
  },
  {
    id: 2,
    pokeName: "Sulfura",
    expansionName: "Crown & Zenith",
    image_url:
      "https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg",
  },
  {
    id: 3,
    pokeName: "Sulfura",
    expansionName: "Silver Tempest",
    image_url:
      "https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg",
  },
  {
    id: 4,
    pokeName: "Sulfura",
    expansionName: "Lost Origin",
    image_url:
      "https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg",
  },
  {
    id: 5,
    pokeName: "Sulfura",
    expansionName: "Pokemon GO",
    image_url:
      "https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg",
  },
  {
    id: 6,
    pokeName: "Sulfura",
    expansionName: "Astral Radiance",
    image_url:
      "https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg",
  },
];
