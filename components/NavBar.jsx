"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  color: var(--bg);
  border-radius: 50px;
  width: 80dvw;
  margin: 2em auto;

  ul {
    display: flex;
    gap: 2em;
  }
`;

const NavItem = styled.li`
  a {
    color: var(--bg);
    font-size: 1.1em;
    text-transform: capitalize;
    padding: 0.5em 1em;
    border-radius: 5px;

    ${(prop) =>
      prop.act === "true" &&
      css`
        background: var(--bg);
        color: var(--primary);
        border-radius: 50px;
      `};
    transition: background 0.3s;

    /* &:hover {
      background: rgba(0, 0, 0, 0.1);
    } */
  }
`;

export default function NavBar() {
  const path = usePathname();
//   console.log(path); 

  const paths = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/users", title: "Users" },
    { path: "/portfolio", title: "Portfolio" },
  ];

  const isPath = (value) => {
    const isActive = path.split("/").slice(1).includes(value?.slice(1));
    // console.log(isActive);
    return isActive;
  };

  return (
    <Nav>
      <h1>Logo</h1>
      <ul>
        {paths.map((p, i) => (
          <MyLink key={i} act={isPath(p.path)} path={p.path} title={p.title} />
          //   <MyLink key={i} act={path === p.path} path={p.path} title={p.title} />
        ))}
      </ul>
    </Nav>
  );
}

function MyLink({ act, path, title }) {
  return (
    <NavItem act={`${act}`}>
      <Link href={path}>{title}</Link>
    </NavItem>
  );
}
