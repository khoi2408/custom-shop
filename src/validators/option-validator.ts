// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    { 
      label: "iPhone 11 Pro Max",
      value: "iphone11prm",
    },
    { 
      label: "iPhone 12 Pro Max",
      value: "iphone12prm",
    },
    { 
      label: "iPhone 13 Pro Max",
      value: "iphone13prm",
    },
    { 
      label: "iPhone 14 Pro Max",
      value: "iphone14prm",
    },
    { 
      label: "iPhone 15 Pro Max",
      value: "iphone15prm",
    }
  ]
} as const

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate
    }
  ]
} as const

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured
    },
  ]
} as const