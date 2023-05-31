import { IProduct } from "./utilities";

const acquireInfo: () => Promise<IProduct[]> = () => {
  return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
  .then(response => {
      if(!response.ok) {
        throw new Error("Failed to fetch make-up data.");
    }
     return response.json()
   })
}

const brand_array = [
  'Almay',
  'Alva',
  'Anna Sui',
  'Annabelle',
  'Benefit',
  'Boosh',
  "Burt's Bees",
  'Butter London',
  "C'est Moi",
  'Cargo Cosmetics',
  'China Glaze',
  'Clinique',
  'Coastal Classic Creation',
  'Colourpop',
  'Covergirl',
  'Dalish',
  'Deciem',
  'Dior',
  'Dr. Hauschka',
  'E.l.f.',
  'Essie',
  'Fenty',
  'Glossier',
  'Green People',
  'Iman',
  "L'Oreal",
  'Lotus Cosmetics Usa',
  "Maia's Mineral Galaxy",
  'Marcelle',
  'Marienatie',
  'Maybelline',
  'Milani',
  'Mineral Fusion',
  'Misa',
  'Mistura',
  'Moov',
  'Nudus',
  'Nyx',
  'Orly',
  'Pacifica',
  'Penny Lane Organics',
  'Physicians Formula',
  'Piggy Paint',
  'Pure Anada',
  'Rejuva Minerals',
  'Revlon',
  "Sally B's Skin Yummies",
  'Salon Perfect',
  'Sante',
  'Sinful Colours',
  'Smashbox',
  'Stila',
  'Suncoat',
  'W3llpeople',
  'Wet N Wild',
  'Zorah',
  'Zorah Biocosmetiques'
]

export default acquireInfo;
