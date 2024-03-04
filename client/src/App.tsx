import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Footer />
    </AuthProvider>
  );
}

export default App;
