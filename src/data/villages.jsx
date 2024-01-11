const villages = [
  {
    id: "vil-1234",
    namekh: "ឈ្នៃ",
    namelatin: "Chhney",
    commune_id: "com-1234",
  },

  {
    id: "vil-2234",
    namekh: "ជ្រោយថ្មក្រោម",
    namelatin: "Chrouy Thma Kraom",
    commune_id: "com-2234",
  },

  {
    id: "vil-3234",
    namekh: "ជ្រោយថ្មលើ",
    namelatin: "Chrouy Thma Leu",
    commune_id: "com-3234",
  },

  {
    id: "vil-4234",
    namekh: "កំពង់ស្រែ",
    namelatin: "Kampong Srae",
    commune_id: "com-3234",
  },

  {
    id: "vil-5234",
    namekh: "កណ្ដាល",
    namelatin: "Kandal",
    commune_id: "com-4234",
  },

  {
    id: "vil-6234",
    namekh: "កោះកណ្ដុរ",
    namelatin: "Kaoh Kandaor",
    commune_id: "com-4234",
  },
];

let i = 1;

let villageData = [];

const result = () => {
  villageData = villages.map((com) => {
    return {
      ...com,
      id: i++,
    };
  });
};

result();
export default villageData;
