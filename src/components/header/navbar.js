import {
    Navbar as NextUINavbar,
    Button, Link, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle
} from '@nextui-org/react'
import { ExitFilledIcon } from 'components/icons'
import { Logo } from 'components/logo'
import React from 'react'

const navMenuItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        label: "Perfil",
        href: "/profile",
    },
    {
        label: "Salir",
        href: "/logout",
    },
]

const Navbar = () => {
    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="sm:hidden">
                <NavbarMenuToggle />
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-3/5 sm:basis-full"
                justify="start"
            >
                <NavbarBrand className="mr-4">
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="md:flex">
                    <Button
                        className="text-sm font-normal text-default-600 bg-default-100"
                        startContent={<ExitFilledIcon className="text-danger" />}
                        variant="flat"
                    >
                        Salir
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index === navMenuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                }
                                href={item.href}
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    )
}

export default Navbar