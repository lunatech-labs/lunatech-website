import {
    github,
    linkedin,
    twitter,
    instagram,
    netherlandsIcon,
    franceIcon,
    ukIcon,
    sdvIcon,
    customSoftwareIcon,
    systemIntegrationIcon,
    legacyTransformationIcon
} from '@/assets'

export const navLinks = [
    {
        title: "navigation.home",
        url: "/",
        mouseEnterTitle: "home",
        mouseEnterDesc: "Return at the start",
        blank: false,
    },
    {
        title: "navigation.about",
        url: "/about",
        mouseEnterTitle: "about",
        mouseEnterDesc: "About us page",
        blank: false
    },
    {
        title: "Services",
        url: "/services",
        mouseEnterTitle: "services",
        mouseEnterDesc: "Services page",
        blank: false
    },
    {
        title: "Technologies",
        url: "/technologies",
        mouseEnterTitle: "technlogies",
        mouseEnterDesc: "Technologies page",
        blank: false
    },
    {
        title: "Blog",
        url: "https://blog.lunatech.com/",
        mouseEnterTitle: "blog",
        mouseEnterDesc: "Blog page",
        blank: true
    },
    {
        title: "navigation.careers",
        url: "https://recruitment.lunatech.com/",
        mouseEnterTitle: "careers",
        mouseEnterDesc: "Careers page",
        blank: true
    },
    {
        title: "Contact",
        url: "/contact",
        mouseEnterTitle: "contact",
        mouseEnterDesc: "Contact page",
        blank: false
    }
]

export const socialLinks = [
    {
        title: "Github",
        url: "https://github.com/lunatech-labs",
        mouseEnterTitle: "Github",
        mouseEnterDesc: "Take a look at our work.",
        blank: true,
        alt: "Github logo",
        icon: github
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/lunatech_nl/",
        mouseEnterTitle: "Instagram",
        mouseEnterDesc: "Follow our news.",
        blank: true,
        alt: "Instagram logo",
        icon: instagram
    },
    {
        title: "Linkedin",
        url: "https://www.linkedin.com/company/lunatech-research",
        mouseEnterTitle: "Linkedin",
        mouseEnterDesc: "Follow our news.",
        blank: true,
        alt: "Linkedin logo",
        icon: linkedin
    },
    {
        title: "X / Twitter",
        url: "https://twitter.com/lunatechlabs",
        mouseEnterTitle: "X / Twitter",
        mouseEnterDesc: "Follow our news.",
        blank: true,
        alt: "Twitter logo",
        icon: twitter
    }
]

export const officeBlock = [
    {
        country: "Netherlands",
        developers: 55,
        otherJobs: 6,
        email: "infos@lunatech.nl",
        careersEmail: 'employment@lunatech.nl',
        phone: "+31 10 750 2600",
        address: "Hofplein 20 - 3032 AC Rotterdam",
        icon: [
            {
                title: "Netherlands",
                imageUrl: netherlandsIcon,
            }
        ]
    },
    {
        country: "France",
        developers: 32,
        otherJobs: 2,
        email: "info@lunatech.fr",
        phone: "+33 1 85 08 57 00",
        address: "3 rue de la Galmy - 77700 Chessy",
        icon: [
            {
                title: "France",
                imageUrl: franceIcon,
            }
        ]
    },
    {
        country: "Newcastle",
        developers: 2,
        otherJobs: 0,
        email: "info@lunatech.uk",
        phone: "+44 191 338 7220",
        icon: [
            {
                title: "United Kingdom",
                imageUrl: ukIcon,
            }
        ]
    }
]

export const serviceBlock = [
    {
        title: "service.title",
        titleColor: "service.titleColor",
        subtitle: "service.subtitle",
        text: "service.text",
        cards: [
            {
                title: "Software Defined Vehicle",
                text: "We help you to build the future of mobility.",
                imageUrl: sdvIcon,
                url: "/services/software-defined-vehicle"
            },
            {
                title: "Custom Software Development",
                text: "We help you to build the future of mobility.",
                imageUrl: customSoftwareIcon,
                url: "/services/custom-software-development"
            },
            {
                title: "System Integration",
                text: "We help you to build the future of mobility.",
                imageUrl: systemIntegrationIcon,
                url: "/services/system-integration"
            },
            {
                title: "Legacy Transformation",
                text: "We help you to build the future of mobility.",
                imageUrl: legacyTransformationIcon,
                url: "/services/legacy-transformation"
            }
        ]
    }
]

export const aboutPage = [
    {
        title: "about.title",
        titleImp: "about.titleImp"
    }
]

export const timeline = [
    {
        year: 1980,
        title: "IBM PC",
    },
    {
        year: 1981,
        title: "MS DOS Client Apps",
    },
    {
        year: 1982,
        title: "Windows 3",
    },
    {
        year: 1983,
        title: "Desktop Apps",
    },
    {
        year: 1988,
        title: "World Wide Web",
    },
    {
        year: 1990,
        title: "Lunatech is born",
        text: "Opening of the first office in Rotterdam",
        icon: "buildings1.svg",
        lt: true
    },
    {
        year: 1993,
        title: "Lunatech is born",
        text: "Opening of the first office in Paris",
        icon: "buildings1.svg",
        lt: true
    },
    {
        year: 1995,
        title: "Lunatech conf",
    },
    {
        year: 1997,
        title: "Lunatech is born",
        text: "Opening of the first office in Amsterdam",
        icon: "buildings1.svg",
        lt: true
    }
]

export const contactPage = [
    {
        label: "contact.label.fullName",
        placeHolder: "contact.placeHolder.fullName",
        name: "fullName",
        type: "text",
        required: true
    },
    {
        label: "contact.label.email",
        placeHolder: "contact.placeHolder.email",
        name: "email",
        type: "email",
        required: true
    },
    {
        label: "contact.label.phone",
        placeHolder: "contact.placeHolder.phone",
        name: "phone",
        type: "tel"
    },
    {
        label: "contact.label.company",
        placeHolder: "contact.placeHolder.company",
        name: "company",
        type: "text"
    },
    {
        label: "contact.label.services",
        placeHolder: "contact.placeHolder.services",
        name: "services",
        type: "options",
        options: [
            "contact.options.softwareDefinedVehicle",
            "contact.options.customSoftwareDevelopment",
            "contact.options.systemIntegration",
            "contact.options.legacyTransformation",
            "contact.options.other"
        ]
    },
    {
        label: "contact.label.project",
        placeHolder: "contact.placeHolder.project",
        name: "projectDescription",
        type: "textarea"
    }
]

export const footerLinks = [
    {
        title: "footer.title1",
        links: [
            {
                title: "navigation.home",
                url: "/"
            },
            {
                title: "navigation.about",
                url: "/about"
            },
            {
                title: "Services",
                url: "/services"
            },
            {
                title: "Vision",
                url: "/vision"
            }
        ]
    },
    {
        title: "footer.title2",
        links: [
            {
                title: "footer.blog",
                url: "https://blog.lunatech.com/",
                target: "_blank"
            },
            {
                title: "footer.careers",
                url: "https://recruitment.lunatech.com/",
                target: "_blank"
            },
            {
                title: "footer.contact",
                url: "/contact"
            }
        ]
    }
]

export const contactInfos = [
    {
        title: "address.countryNL",
        subtitle: "address.subtitle1",
        subtitle2: "address.subtitle2",
        subtitle3: "address.subtitle3",
        email: "info@lunatech.nl",
        phone: "+31 10 750 2600",
        careersEmail: "employment@lunatech.nl",
        street: "Hofplein 20",
        city: "3032 AC Rotterdam"
    },
    {
        title: "address.countryFR",
        subtitle: "address.subtitle1",
        subtitle2: "address.subtitle2",
        subtitle3: "address.subtitle3",
        email: "info@lunatech.fr",
        phone: "+33 1 82 88 56 64",
        careersEmail: "employment@lunatech.fr",
        street: "3 rue de la Galmy",
        city: "77700 Chessy"
    },
    {
        title: "address.countryEN",
        subtitle: "address.subtitle1",
        email: "info@lunatech.uk",
        phone: "+44 (0) 7875 695 964",
    }
]