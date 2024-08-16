import Hero from "@/components/Hero";
import Main from "@/components/Main";

export const metadata = {
  title: "ExpressUp ⋅ Home", 
};

export default function HomePage() {
  return (
    <Main className="">
      <Hero />
    </Main>
  );
}
