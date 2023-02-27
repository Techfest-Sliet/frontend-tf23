export const routes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Workshops",
      link: "/under-construction"
    },
    {
      name: "About Us",
      link: "/about"
    },
    {
      name: "FAQ",
      link: "/faq"
    },
    {
      name: "Our Team",
      link: "/our-team"
    },
    {
      name: "Domains",
      link: "/domains",
  
      subRoutes: [
        {
          name: "Arambh",
          link: "/events/plexus",
        },
        {
          name: " Plexus",
          link: "/events/plexus",
        },
        {
          name: "Chemfor",
          link: "/events/chemfor",
        },
        {
          name: "Electrica",
          link: "/events/electrica",
        },
        {
          name: "Genesis",
          link: "/events/genesis",
        },
        {
          name: "Kermis",
          link: "/events/kermis",
        },
        {
          name: "Robozar",
          link: "/events/robozar",
        },
        {
          name: "Karyarachna",
          link: "/events/karyarachna",
        },
      ],
    },
    {
      name: "Dashboard",
      link: "/dashboard"
    },
  ];