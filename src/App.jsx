import Animation from './components/Animation';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import { useTheme } from './contexts/ThemeContext';
import './styles/_global.scss'
function App() {
  const {theme, setTheme} = useTheme()
  const handleSwitch = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  };
  return (
    <div className={theme}>
      <Header onClick={handleSwitch} theme={theme} />
      <Animation theme={theme} />
      <Footer />
    </div>
  );
}

export default App;
