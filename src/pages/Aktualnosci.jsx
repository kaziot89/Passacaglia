import Banner from "../components/Banner_HP_web";
import Footer from "../components/Footer_web";

export default function Aktualnosci() {
  return (
    <div>
      <Banner title="Aktualnosci" />
      <div className="p-6 text-center">
        <h2 className="text-xl">To jest podstrona z aktualnościami</h2>
      </div>
      <Footer />
    </div>
  );
}
