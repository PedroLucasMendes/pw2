
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image src="/next.svg" width={50} height={50} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} href="/product/create">
          Criar Produto
        </NavbarLink>
        <NavbarLink as={Link} href="/pricing">
          Pricing
        </NavbarLink>
        <NavbarLink as={Link} href="/contact">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
