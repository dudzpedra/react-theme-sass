import './styles.scss'
import ThemeAvatar from "../ui/ThemeAvatar";
import light from "../../assets/light.png";
import dark from "../../assets/dark.png";

const Animation = ({ theme }) => {
  return (
    <div className="container-bg flex">
      <div className="message text">
        {theme === 'light' && <p>It's sunny in here!</p>}
        {theme === 'dark' && <p>It's dark in here!</p>}
      </div>
      <ThemeAvatar
        alt={`${theme} icon`}
        src={theme === "light" ? light : dark}
      />
    </div>
  );
};

export default Animation;
