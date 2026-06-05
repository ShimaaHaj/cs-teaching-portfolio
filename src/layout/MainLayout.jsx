import Sidebar from "../components/Sidebar";
import "../styles/layout.css";

function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="page-content">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;