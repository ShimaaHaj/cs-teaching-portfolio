import { NavLink } from "react-router-dom";
import { FiUser, FiSearch } from "react-icons/fi";

import "../styles/sidebar.css";

function Sidebar() {
  return (
    <header className="topbar">
      <button className="menu-icon" aria-label="فتح القائمة">
        <span></span>
        <span></span>
      </button>

      <nav className="nav-links">
        <NavLink to="/">الرئيسية</NavLink>
        <NavLink to="/about">نبذة مهنية</NavLink>
        <NavLink to="/lesson-observations">مشاهدات صفية</NavLink>
        <NavLink to="/lesson-planning">تخطيط الدروس</NavLink>
        <NavLink to="/activities">أنشطة مدرسية</NavLink>
        <NavLink to="/learning-center">مركز التعلم</NavLink>
        <NavLink to="/gallery">رواق الصور</NavLink>
        <NavLink to="/feedback">التغذية الراجعة</NavLink>
        <NavLink to="/reflection">تأملات تربوية</NavLink>
        <NavLink to="/final-view">العام الدراسي</NavLink>
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