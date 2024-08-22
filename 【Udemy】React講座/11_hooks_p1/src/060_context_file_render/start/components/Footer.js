import { useTheme } from "../context/ThemeContext"

const Footer = () => {
  const theme = useTheme();

  console.log('Footer');
  return (
    <footer className={`content-${theme}`}>
      <div>フッター</div>
    </footer>
  );
};
export default Footer;
