import HeaderComp from "../components/HeaderComp";
import MainComp from "../components/MainComp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">

      {/* Header */}
      <HeaderComp />

      {/* Main Content */}
      <main>
        <MainComp />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;