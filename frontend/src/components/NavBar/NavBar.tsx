'use client'

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CounterContext } from "@/providers/CounterProvider/CounterProvider";
import { AuthContext } from "@/providers/AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";

export function NavBar() {
  
  const {increment} = useContext(CounterContext);
  const { user, logout } = useContext(AuthContext)
  const router = useRouter()

  const handleLogout = async () => {
    await logout();
    router.push("login")
  }

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
        <NavbarLink as={Link} href="/cart">
          Carrinho
        </NavbarLink>
        {!user && <NavbarLink as={Link} href="/login">
          Login
        </NavbarLink>}
        {user && <NavbarLink as={Link} href="#" onClick={handleLogout}>
          Logout
        </NavbarLink>}
      </NavbarCollapse>
    </Navbar>
  );
}
