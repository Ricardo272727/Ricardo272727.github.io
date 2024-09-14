import { IntlProvider } from "react-intl";
import { Navbar } from "./components/Navbar";
import { messagesInEnglish } from "./translation/messages";
import "./index.css";
import { MainHeader } from "./components/MainHeader";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";

const navbarItems = [
  { label: "Acerca de", value: "#about" },
  { label: "Proyectos", value: "#projects" },
];
//TODO: Services section, to display skills, aws, api development, system design, cloud, databases, mobile apps, automate processes, server management
// TODO: Why choose us, add all the points that chat gpt said
//Contact
function App() {
  return (
    <IntlProvider messages={messagesInEnglish} locale="en" defaultLocale="en">
      <Navbar items={navbarItems} />
      <MainHeader />
      <About />
      <Projects />
      <Services />
      <Contact />
    </IntlProvider>
  );
}

export default App;
