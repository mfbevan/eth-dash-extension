import { Poppins } from "@next/font/google";

export const poppinsBody = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const fonts = {
  body: poppinsBody.style.fontFamily,
  heading: poppinsBody.style.fontFamily,
};
