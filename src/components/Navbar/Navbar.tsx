import { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useUser } from "../../contexts/UserContext";

export default function Component() {
  const navigate = useNavigate();
  const location = useLocation();
  const baseLinkClassName =
    "block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700";

  const linkClassName = (path: string) => {
    return `${baseLinkClassName} ${
      location.pathname === path
        ? "bg-gray-50 md:bg-transparent md:text-cyan-700"
        : ""
    }`;
  };
  interface Link {
    path: string;
    label: string;
  }
  const clientLinks = [
    { path: "/price-list", label: "Price List"},
    { path: "/trending", label: "Trends" },
    { path: "/appointment", label: "My Appointments" },
    { path: "/establishments", label: "Establishments" },
    { path: "/shop", label: "Shop" },
    { path: "/help", label: "Help" },
  ];

  const stylistLinks = [
    { path: "/price-list", label: "Price List"},
    { path: "/appointments", label: "Appointments" },
    { path: "/help", label: "Help" },
  ];
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const { user, logout } = useUser();

  const handleProfileClick = () => {
    if (user?.isClient) {
      navigate("/client");
    } else {
      navigate("/professional");
    }
  };

  function handleLogout() {
    logout();
    navigate("/");
  }

  const linkWithModal = (link: Link) => {
    if (link.path === '/appointment' && !user) {
      return (
        <div key={link.path}>
          <a
            href={link.path}
            className={linkClassName(link.path)}
            onClick={(e) => { e.preventDefault(); setOpenLoginModal(true); }}
          >
            {link.label}
          </a>
        </div>
      );
    } else {
      return (
        <Link
          key={link.path}
          to={link.path}
          className={linkClassName(link.path)}
        >
          {link.label}
        </Link>
      );
    }
  };
  return (
    <Navbar fluid rounded className="fixed top-0 w-full">
      <Link to="/" className="flex flex-row">
        <img
          src="/public/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Stylist Company Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Stylist Co.
        </span>
      </Link>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="/public/user.png" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.email.split("@")[0]}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleProfileClick}>Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <button className="w-20 h-10 border text-cyan-700 hover:text-white bg-white hover:bg-cyan-700 hover:shadow-lg font-medium rounded-lg text-sm
          transition-all duration-300 ease-in-out" onClick={() => setOpenLoginModal(true)}> 
              Login
          </button>
        )}
        <LoginModal openModal={openLoginModal} onCloseModal={() => setOpenLoginModal(false)} />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {(user && user.isClient) || !user ? (
          <>
            {clientLinks.map((link) => linkWithModal(link))}
          </>
        ) : (
          <>
              <i className="fa-solid fa-tag"></i><Link
                key="/price-list"
                to="/price-list"
                className={linkClassName("/price-list")}
              >
                Price List
              </Link>
              <Link
                key="/trending"
                to="/trending"
                className={linkClassName("/trending")}
              >
                Trends
              </Link>
              <Link
                key="/appointment"
                to="/appointment"
                className={linkClassName("/appointment")}
              >
                My Appointments
              </Link>
              <Link
                key="/establishments"
                to="/establishments"
                className={linkClassName("/establishments")}
              >
                Establishments
              </Link>
              <Link
                key="/shop"
                to="/shop"
                className={linkClassName("/shop")}
              >
                Shop
              </Link>
              <Link
                key="/help"
                to="/help"
                className={linkClassName("/help")}
              >
                Help
              </Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
