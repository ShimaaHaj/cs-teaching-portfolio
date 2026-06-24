import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiUser, FiSearch, FiX } from "react-icons/fi";

import "../styles/sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="topbar">
      <button
        className={`menu-icon ${isOpen ? "open" : ""}`}
        aria-label="فتح القائمة"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FiX />
        ) : (
          <>
            <span></span>
            <span></span>
          </>
        )}
      </button>

      <nav className={`nav-links ${isOpen ? "show" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>الرئيسية</NavLink>
        <NavLink to="/about" onClick={closeMenu}>نبذة مهنية</NavLink>
        <NavLink to="/lesson-observations" onClick={closeMenu}>مشاهدات صفية</NavLink>
        <NavLink to="/lesson-planning" onClick={closeMenu}>تخطيط الدروس</NavLink>
        <NavLink to="/activities" onClick={closeMenu}>أنشطة مدرسية</NavLink>
        <NavLink to="/learning-center" onClick={closeMenu}>مركز التعلم</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>رواق الصور</NavLink>
        <NavLink to="/feedback" onClick={closeMenu}>التغذية الراجعة</NavLink>
        <NavLink to="/reflection" onClick={closeMenu}>تأملات تربوية</NavLink>
        <NavLink to="/final-view" onClick={closeMenu}>العام الدراسي</NavLink>
      </nav>

      <div className="topbar-actions">
        <button className="topbar-action" aria-label="الملف الشخصي">
          <FiUser />
        </button>

        <button className="topbar-action" aria-label="البحث">
          <FiSearch />
        </button>
      </div>
    </header>
  );
}

export default Sidebar;