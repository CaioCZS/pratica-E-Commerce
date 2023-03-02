import styled from "styled-components";
import Carrinho from "./Carrinho";
import Lista from "./Lista";
import produtos from "../dados";
import { useState } from "react";

export default function App() {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [precoFinal, setPrecoFinal] = useState(0);

  return (
    <>
      <ContainerApp>
        <Lista
          precoFinal={precoFinal}
          setPrecoFinal={setPrecoFinal}
          produtos={produtos}
          itensCarrinho={itensCarrinho}
          setItensCarrinho={setItensCarrinho}
        />
        <Carrinho
          precoFinal={precoFinal}
          setPrecoFinal={setPrecoFinal}
          itensCarrinho={itensCarrinho}
          setItensCarrinho={setItensCarrinho}
        />
      </ContainerApp>
    </>
  );
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;
