import styled from "styled-components";

export default function Produto({
  preco,
  imagem,
  nome,
  produto,
  setItensCarrinho,
  itensCarrinho,
  precoFinal,
  setPrecoFinal,
}) {
  function comprarItem() {
    if (!itensCarrinho.includes(produto)) {
      setItensCarrinho([...itensCarrinho, produto]);
      setPrecoFinal(precoFinal + preco);
    }
  }

  return (
    <ItemProduto>
      <img src={imagem} alt={nome} />
      <div>
        <p>{nome}</p>
        <p>R${preco},00</p>
      </div>
      <button onClick={comprarItem}>Comprar</button>
    </ItemProduto>
  );
}

const ItemProduto = styled.div`
  border: 2px solid cyan;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    background-color: blue;
    color: white;
    font-weight: bold;
    border: thin solid blue;
    border-radius: 10px;
  }
`;
