import { IntlProvider } from "react-intl";
import { Navbar } from "./components/Navbar";
import { messagesInEnglish } from "./translation/messages";
import './index.css'
import { MainHeader } from "./components/MainHeader";
import { About } from "./components/About";

const navbarItems = [
  { label: "About me", value: "#about" },
  { label: "Projects", value: "#projects" },
  { label: "Contact", value: "#contact" },
];

function App() {
  return (
    <IntlProvider messages={messagesInEnglish} locale="en" defaultLocale="en">
      <Navbar items={navbarItems} />
      <MainHeader/>
      <About />
    </IntlProvider>
  );
}

export default App;
