import Header from "./components/Header/Header";
import Herosection from "./components/Herosection/Herosection";

export default function Home() {
  return (
    <>
      <Header />
      <Herosection />
      <main style={{ padding: "20px" }}>
        <h1>Home Page</h1>
      </main>
    </>
  );
}
