import './App.css'
import { Config, Home } from './pages'
import useStore from './store/store'

function App() {
  const { page } = useStore()
  return (
    <div className='w-full overflow-x-hidden font-figtree'>
      {page == 'home' ? <Home /> : <Config />}
    </div>
  )
}

export default App