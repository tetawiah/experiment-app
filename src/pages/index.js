import { Inter } from "next/font/google";
import Page from "@/app/pages/signin/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page/>
  );
}
