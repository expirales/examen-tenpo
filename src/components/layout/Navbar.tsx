import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import "./Navbar.scss";
import AvatarIcon from "../../assets/avatar.png";
type NavbarProps = {
  title?: string;
  icon?: string;
};
const Navbar = ({ title = "", icon }: NavbarProps) => {
  const {
    user: { token, email },
    logout,
  } = useAuthStore();
  console.log(token, email);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!token) return null;

  return (
    <nav className="cnt-navbar">
      <div className="cnt-brand">
        {icon && <img className="icon" alt="navbar-icon" src={icon} />}
        <h4 className="title">{title}</h4>
      </div>
      <div className="navbar-user">
        <img
          className="avatar-icon"
          alt="navbar-avatar-icon"
          src={AvatarIcon}
          width={32}
          height={32}
        />
        <span className="email">{email}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
