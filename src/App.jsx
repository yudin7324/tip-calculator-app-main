// import './styles/_app.scss';
import IconLogo from '@/components/icons/IconLogo';
import Calculator from '@/components/calculator/Calculator';
// import '@/styles/_app.scss';

function App() {

  return (
    <div className="app">
      <div className='app__logo'>
        <IconLogo />
      </div>
      <Calculator />
    </div>
  )
}

export default App
