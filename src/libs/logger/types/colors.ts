export enum Colors {
  // Basic Colors
  Black = "\x1b[30m",
  Red = "\x1b[31m",
  Green = "\x1b[32m",
  Yellow = "\x1b[33m",
  Blue = "\x1b[34m",
  Magenta = "\x1b[35m",
  Cyan = "\x1b[36m",
  White = "\x1b[37m",
  Gray = "\x1b[90m",

  // Bright Colors
  BrightBlack = "\x1b[90m",
  BrightRed = "\x1b[91m",
  BrightGreen = "\x1b[92m",
  BrightYellow = "\x1b[93m",
  BrightBlue = "\x1b[94m",
  BrightMagenta = "\x1b[95m",
  BrightCyan = "\x1b[96m",
  BrightWhite = "\x1b[97m",
}

export enum BgColors {
  // Basic Background Colors
  Black = "\x1b[40m",
  Red = "\x1b[41m",
  Green = "\x1b[42m",
  Yellow = "\x1b[43m",
  Blue = "\x1b[44m",
  Magenta = "\x1b[45m",
  Cyan = "\x1b[46m",
  White = "\x1b[47m",

  // Bright Background Colors
  BrightBlack = "\x1b[100m",
  BrightRed = "\x1b[101m",
  BrightGreen = "\x1b[102m",
  BrightYellow = "\x1b[103m",
  BrightBlue = "\x1b[104m",
  BrightMagenta = "\x1b[105m",
  BrightCyan = "\x1b[106m",
  BrightWhite = "\x1b[107m",
}

export enum Decoration {
  Reset = "\x1b[0m",
  Bold = "\x1b[1m",
  Underline = "\x1b[4m",
  Blink = "\x1b[5m",
  Inverse = "\x1b[7m",
  Hidden = "\x1b[8m",
}
