import { Inter } from "next/font/google";
import Index from "@/pages/signup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Index/>
  );
}
