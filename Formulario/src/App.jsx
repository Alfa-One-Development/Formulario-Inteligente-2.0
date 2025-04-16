import { useState } from 'react'
import Pix from "./assets/pix.png"
import Bubblebee from "./assets/bubblebee.png"
import Hotel from "./assets/hotel.jpg"
import './App.css'

function App() {
  const [pagamento, setPagamento] = useState("")
  const [cadastro, setCadastro] = useState("")
  const [pessoas, setPessoas] = useState("")
  const [comprar, setComprar] = useState(false)
  const [comprarHotel, setComprarHotel] = useState(false)

  function ComprarItem() {
    setComprar(true)
  }

  function ComprarHotel() {
    setComprarHotel(true)
  }

  return (
    <div className='Main'>
      <div className='Fone'>
        <h1>Fone do Bubblebee</h1>
        <img src={Bubblebee} alt="Bubblebee" className='Bee' />
        <h2>Somente R$ 999,99</h2>
        <button className='Button' onClick={ComprarItem}>Comprar</button>
      </div>
      {comprar ? <>
        <h2>Cadastro: </h2>
        <label>Pessoa Fisica ou Jurídica:
          {["CPF", "CNPJ"].map((topico) => (
            <label key={topico}>
              <input
                type="radio"
                value={topico}
                checked={cadastro === topico}
                onChange={(e) => setCadastro(e.target.value)}
              ></input>
              {topico}
            </label>
          ))}
        </label>

        {cadastro == "CPF" && (
          <>
            <label>Digite o número do CPF:</label>
            <input type="text" placeholder="Digite o número do CPF" />
          </>
        )}

        {cadastro == "CNPJ" && (
          <>
            <label>Digite o número do CNPJ:</label>
            <input type="text" placeholder="Digite o número do CNPJ" />
            <label>Digite o nome da empresa:</label>
            <input type="text" placeholder="Digite o nome da empresa" />
          </>
        )}


        <h2>Opções de Pagamento: </h2>
        <label>Tipo de Pagamento: </label>
        <select onChange={(e) => setPagamento(e.target.value)} value={pagamento}>
          <option value="" >Selecione Uma Opção</option>
          <option value="credito" >Cartão de Crédito</option>
          <option value="pix" >Pix</option>
          <option value="boleto" >Boleto</option>
        </select>

        {pagamento === "credito" && (
          <>
            <h3>Preencha os Dados: </h3>
            <label>Digite o número do cartão de crédito:</label>
            <input type="text" placeholder="Digite o número do cartão de crédito" />
            <label>Digite o nome do titular:</label>
            <input type="text" placeholder="Digite o nome do titular" />
            <label type="number" >Digite o CVV:</label>
            <input type="number" placeholder="Digite o CVV" />
            <label>Digite a data de validade:</label>
            <input type="date" placeholder="Digite a data de validade" />
          </>
        )}

        {pagamento === "pix" && (
          <>
            <h3>Escaneie o QR code: </h3>
            <img src={Pix} alt="QR Code" />
          </>
        )}

        {pagamento === "boleto" && (
          <>
            <h3>Preencha os Dados: </h3>
            <label>Digite sua conta no Banco:</label>
            <input type="text" placeholder="Digite sua conta no Banco" />
            <label>Digite a senha do seu Banco: </label>
            <input type="text" placeholder="Digite a senha do seu banco" />
          </>
        )}
      </>
        : null}

        <hr></hr>

<div className='Fone'>
        <h1>Hotel do Bubblebee</h1>
        <img src={Hotel} alt="Bubblebee" className='Bee' />
        <h2>Somente R$ 1999,99</h2>
        <button className='Button' onClick={ComprarHotel}>Comprar</button>
      </div>

      {comprarHotel ? <>
      <h2>Selecione a quantidade de Pessoas: </h2>
      <select onChange={(e) => setPessoas(e.target.value)} value={pessoas}>
          <option value="" >Selecione Uma Opção</option>
          <option value="familia" >Familia</option>
          <option value="casal" >Casal</option>
          <option value="solo" >Sozinho</option>
        </select>

        {pessoas === "familia" && (
          <>
            <h3>Preencha os Dados: </h3>
            <label>Digite o número do cartão de crédito:</label>
            <input type="text" placeholder="Digite o número do cartão de crédito" />
            <label>Digite o nome do titular:</label>
            <input type="text" placeholder="Digite o nome do titular" />
            <label type="number" >Digite o CVV:</label>
            <input type="number" placeholder="Digite o CVV" />
            <label>Digite a data de validade:</label>
            <input type="date" placeholder="Digite a data de validade" />
            <br></br>
            <label>Dados da Pessoa 1: </label>
            <input type="text" placeholder="Digite o nome da pessoa 1" />
            <input type="text" placeholder="Digite o CPF da pessoa 1" />
            <br></br>
            <label>Dados da Pessoa 2: </label>
            <input type="text" placeholder="Digite o nome da pessoa 2" />
            <input type="text" placeholder="Digite o CPF da pessoa 2" />
            <br></br>
            <label>Dados da Pessoa 3: </label>
            <input type="text" placeholder="Digite o nome da pessoa 3" />
            <input type="text" placeholder="Digite o CPF da pessoa 3" />
            <br></br>
            <label>Dados da Pessoa 4: </label>
            <input type="text" placeholder="Digite o nome da pessoa 4" />
            <input type="text" placeholder="Digite o CPF da pessoa 4" />
          </>
        )}
        {pessoas === "casal" && (
          <>
            <h3>Preencha os Dados: </h3>
            <label>Digite o número do cartão de crédito:</label>
            <input type="text" placeholder="Digite o número do cartão de crédito" />
            <label>Digite o nome do titular:</label>
            <input type="text" placeholder="Digite o nome do titular" />
            <label type="number" >Digite o CVV:</label>
            <input type="number" placeholder="Digite o CVV" />
            <label>Digite a data de validade:</label>
            <input type="date" placeholder="Digite a data de validade" />
            <br></br>
            <label>Dados da Pessoa 1: </label>
            <input type="text" placeholder="Digite o nome da pessoa 1" />
            <input type="text" placeholder="Digite o CPF da pessoa 1" />
            <br></br>
            <label>Dados da Pessoa 2: </label>
            <input type="text" placeholder="Digite o nome da pessoa 2" />
            <input type="text" placeholder="Digite o CPF da pessoa 2" />
          </>
        )}

        {pessoas === "solo" && (
          <>
            <h3>Preencha os Dados: </h3>
            <label>Digite o número do cartão de crédito:</label>
            <input type="text" placeholder="Digite o número do cartão de crédito" />
            <label>Digite o nome do titular:</label>
            <input type="text" placeholder="Digite o nome do titular" />
            <label type="number" >Digite o CVV:</label>
            <input type="number" placeholder="Digite o CVV" />
            <label>Digite a data de validade:</label>
            <input type="date" placeholder="Digite a data de validade" />
            <br></br>
            <label>Dados da Pessoa: </label>
            <input type="text" placeholder="Digite o nome da pessoa 1" />
            <input type="text" placeholder="Digite o CPF da pessoa 1" />
          </>
        )}
      </> : null}
    </div>
  )
}

export default App
