import Counter from './Counter'
import './App.css'
import Likebutton from './Likebutton'
import Todolist from './Todolist'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {


  return (
    <>
     <Lottery n={3} winningsum={15}/>
    </>
  )
}

export default App
