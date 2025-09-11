import {
        Press_Start_2P,
        Poppins,
        Roboto
} from "next/font/google";

// additional fonts

export const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const allFontVariables = `
    ${poppins.variable}
    ${roboto.variable}
`;