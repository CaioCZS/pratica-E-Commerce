import styled from "styled-components";

export default function Carrinho({
  precoFinal,
  setPrecoFinal,
  itensCarrinho,
  setItensCarrinho,
}) {
  function excluirItem(p) {
    const nvLista = itensCarrinho.filter((item) => item.id !== p.id);
    setItensCarrinho(nvLista);
    setPrecoFinal(precoFinal - p.preco);
  }

  return (
    <ContainerCarrinho>
      {itensCarrinho.map((p) => (
        <ItemCarrinho key={p.id}>
          <img src={p.imagem} alt={p.nome} />
          <div>
            <strong>{p.nome}</strong>
            <p>R${p.preco},00</p>
          </div>
          <button onClick={() => excluirItem(p)}>X</button>
        </ItemCarrinho>
      ))}
      <ValorFinal>Total a pagar:R${precoFinal},00</ValorFinal>
    </ContainerCarrinho>
  );
}

const ContainerCarrinho = styled.div`
  border-left: 1px dashed gray;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;

const ItemCarrinho = styled.div`
  border: 2px solid cyan;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  img {
    width: 50px;
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  strong {
    margin-bottom: 5px;
    font-weight:bold;
  }
  button {
    background-color: blue;
    color: white;
    font-weight: bold;
    border: thin solid blue;
    border-radius: 20px;
  }
`;

const ValorFinal = styled.div`
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;
