import './styles/_app.scss';
import IconLogo from '@/components/icons/IconLogo';
import Calculator from '@/components/calculator/Calculator';

function App() {
  return (
    <main className="app">
      <div className='app__logo'>
        <IconLogo />
      </div>
      <Calculator />
    </main>
  )
}

export default App
