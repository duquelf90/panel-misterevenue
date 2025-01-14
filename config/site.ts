export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portafolio",
  description: "Make beautiful websites regardless of your design experience.",

  navMenuItems: [
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

};
