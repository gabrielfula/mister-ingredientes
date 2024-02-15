import { distributors } from "../../utils/distributors";
import Partners from "../partners/partners";
import { Content } from "./styles";

export default function Distributor() {
  return (
    <Content>
      <div>
        <h1>Distribuidores</h1>
      </div>
      {distributors.map((item) => (
        <Partners key={item.id} />
      ))}
    </Content>
  );
}
