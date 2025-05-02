import Description from "./components/home/Description";
import Hero from "./components/home/Hero";
import MainProducts from "./components/home/MainProducts";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Description />
        <MainProducts />
      </main>
    </div>
  );
}
