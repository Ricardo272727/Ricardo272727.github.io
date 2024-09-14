import { IntlProvider } from "react-intl";
import { Navbar } from "./components/Navbar";
import { messagesInEnglish } from "./translation/messages";
import './index.css'
import { MainHeader } from "./components/MainHeader";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

const navbarItems = [
  { label: "About me", value: "#about" },
  { label: "Projects", value: "#projects" },
  { label: "Contact", value: "#contact" },
];
//TODO: Services section, to display skills, aws, api development, system design, cloud, databases, mobile apps, automate processes, server management
// TODO: Why choose us, add all the points that chat gpt said
function App() {
  return (
    <IntlProvider messages={messagesInEnglish} locale="en" defaultLocale="en">
      <Navbar items={navbarItems} />
      <MainHeader/>      
      <About />
      <Projects/>
    </IntlProvider>
  );
}

export default App;
