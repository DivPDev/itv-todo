import { Container } from "react-bootstrap"
import Todo from "./components/todo"
import TodoProvider from "./context/TodoProvider"
import ErrorBoundry from "./components/ErrorBoundry"
import BuggyComponent from "./components/BuggyComponent"

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