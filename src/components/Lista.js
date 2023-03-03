import styled from "styled-components";
import Produto from "./Produto";

export default function Lista({
  precoFinal,
  setPrecoFinal,
  itensCarrinho,
  produtos,
  setItensCarrinho,
}) {
  return (
    <ContainerLista>
      {produtos.map((p) => (
        <Produto
          itensCarrinho={itensCarrinho}
          setItensCarrinho={setItensCarrinho}
          nome={p.nome}
          imagem={p.imagem}
          id={p.id}
          key={p.id}
          preco={p.preco}
          produto={p}
          precoFinal={precoFinal}
          setPrecoFinal={setPrecoFinal}
        />
      ))}
    </ContainerLista>
  );
}

const ContainerLista = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
