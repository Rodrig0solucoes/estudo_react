import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import Home from './componetes/paginas/Home';
import Contatos from './componetes/paginas/Contato';
import Empresa from './componetes/paginas/Empresa';
import NovoProjeto from './componetes/paginas/NovoProjeto';
import Projetos from './componetes/paginas/Projetos';

import Container from './componetes/layout/Container';
import Navbar from './componetes/layout/Navbar';
import Footer from './componetes/layout/Footer';



function App() {
   return (

    <Router>
      <Navbar />
      <Switch>
      
        <Container customClass="min_height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/empresa">
            <Empresa />
          </Route>
          <Route exact path="/contatos">
            <Contatos />
          </Route>
          <Route exact path="/NovoProjeto">
            <NovoProjeto/>
          </Route>
          <Route exact path="/Projetos">
            <Projetos/>
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
