export enum Colors {
  // Les couleurs de cli
  Black = "#000000",
  White = "#FFFFFF",
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF",
  Yellow = "#FFFF00",
  Cyan = "#00FFFF",
  Magenta = "#FF00FF",

  // Les couleurs secondaires
  Orange = "#FFA500",
  Purple = "#800080",
  Brown = "#A52A2A",
  Pink = "#FFC0CB",
  Lime = "#00FF00",
  Indigo = "#4B0082",
  Violet = "#EE82EE",

  // Les nuances de gris
  Grey = "#808080",
  DarkGrey = "#A9A9A9",
  LightGrey = "#D3D3D3",

  // Autres couleurs courantes
  Maroon = "#800000",
  Navy = "#000080",
  Olive = "#808000",
  Teal = "#008080",
  Silver = "#C0C0C0",
  Gold = "#FFD700",
}

export type ColorString =
  | "DEFAULT"
  | "WHITE"
  | "AQUA"
  | "GREEN"
  | "BLUE"
  | "PURPLE"
  | "LUMINOUS_VIVID_PINK"
  | "GOLD"
  | "ORANGE"
  | "RED"
  | "GREY"
  | "NAVY"
  | "DARK_AQUA"
  | "DARK_GREEN"
  | "DARK_BLUE"
  | "DARK_PURPLE"
  | "DARK_VIVID_PINK"
  | "DARK_GOLD"
  | "DARK_ORANGE"
  | "DARK_RED"
  | "DARK_GREY"
  | "DARKER_GREY";
