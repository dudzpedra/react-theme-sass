import "./styles.scss";
const Footer = () => {
  return (
    <footer className="container-bg text">
      <p>
        Developed by{" "}
        <a
          className="text"
          href="https://github.com/dudzpedra"
          target="_blank"
          rel="noopener noreferrer"
          title="dev's github"
        >
          dudzpedra
        </a>
      </p>
      <p>
        <a
          href="https://www.flaticon.com/free-icons/dark"
          title="dark icons"
          className="text"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dark icons created by adriansyah - Flaticon
        </a>
      </p>
      <p>
        <a
          href="https://www.flaticon.com/free-icons/dark"
          title="dark icons"
          className="text"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dark icons created by Catalin Fertu - Flaticon
        </a>
      </p>
    </footer>
  );
};

export default Footer;
