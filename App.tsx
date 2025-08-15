import Cabecalho from "./components/cabecalho/Cabecalho"
import Principal from "./components/principal/Principal"
import Rodape from "./components/rodape/Rodape"

export default function App(){
  return (
    <div>
      <Cabecalho/>
      <header>
        <h1>Meu App</h1>
      </header>
        <Principal/>
      <main>
        <section>
          <p>Conteúdo</p>
        </section>
      </main>
      <Rodape/>
      <footer>
        <p>&copy; Todos os direitos reservados - 2025. My app</p>
      </footer>

    </div>
  )
}