import { Container } from "react-bootstrap"
import Todo from "./components/Todo"
import TodoProvider from "./context/TodoProvider"
import ErrorBoundry from "./components/ErrorBoundry"

function App() {
  return (
      <TodoProvider>
        <Container>
          <ErrorBoundry>
            <Todo />
          </ErrorBoundry>
        </Container>
      </TodoProvider>
  )
}

export default App