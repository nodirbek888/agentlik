import React, { useState } from "react";
import {
  Container,
  Header,
  LinkSection,
  Icon,
  Navlink,
  Cantacts,
  Navlogo,
  NavMenu,
  Wrapper,
  Xmenu,
} from "./style";
import { navbar } from "../../utils/navbar";
// import Button from "../../Generic/Button";
import { useNavigate, Outlet } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);

  const openMenu = () => {
    // document.body.style.overflow = menuOpen ? "hidden" : "auto";
    setmenuOpen((p) => !p);
  };
  const closeMenu = () => {
    document.body.style.overflow = "auto";
    setmenuOpen(false);
  };

  const goTo = (e, path) => {
    e.preventDefault();
    closeMenu();
    if (document.querySelector(path)) {
      document.documentElement.scrollTo({
        top:
          document.querySelector(path).getBoundingClientRect().top +
          window.scrollY -
          100,
        behavior: "smooth",
      });
    }
  };
  return (
    <Container>
      <Header>
        <Wrapper>
          {!menuOpen ? (
            <NavMenu onClick={openMenu} />
          ) : (
            <Xmenu onClick={openMenu} />
          )}
          <Navlogo/>
          <LinkSection>
            {/* <Navlogo2 onClick={() => navigate("/home")} /> */}
            <LinkSection.Body className={`${menuOpen ? "open" : ""}`}>
              {navbar.map(({ id, title, path }) => {
                return (
                  <div key={id}>
                    <Navlink onClick={(e) => goTo(e, path)} key={id}>
                      <p className="sub_title title_hover">{title}</p>
                    </Navlink>
                  </div>
                );
              })}
              <Icon>
                <a href="#">	
                  <Icon.Telegram />
                </a>
                <a href="#">
                  <Icon.Youtube />
                </a>
                <a href="#">
                  <Icon.Instagram />
                </a>
              </Icon>
            </LinkSection.Body>
          </LinkSection>
          <Cantacts>
          <span className="sub-title_white">
              Murojat qilish
          </span>
            <a className="tel sub-title_white" href="tel:+998123-12-32">
              +998 (90) 123-12-32
            </a>
          </Cantacts>
        </Wrapper>
      </Header>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Navbar;
