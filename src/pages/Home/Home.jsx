import About from "../../components/about/about";
import { Content } from "../../components/about/styles";
import Distributor from "../../components/distributors/distributors";
import Navbar from "../../components/navbar/navbar";
import WeAre from "../../components/weAre/weAre";

export default function Home() {
  return (
    <>
      <Navbar />
      <Content>
        <About />
        <WeAre />
        <Distributor />
      </Content>
    </>
  );
}
