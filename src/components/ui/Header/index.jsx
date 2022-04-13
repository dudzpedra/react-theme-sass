import "./styles.scss";
import ThemeAvatar from "../ThemeAvatar";
import dark from '../../../assets/dark.png'
import light from '../../../assets/light.png'
const Header = ({ onClick, theme }) => {
  console.log(theme)
  return (
    <header className="container-bg text">
      <h2 className='title'>React Theme Switcher with Sass</h2>
      <ThemeAvatar src={theme === 'light' ? dark : light} alt={`${theme} icon`} onClick={onClick} />
    </header>
  );
};

export default Header;
