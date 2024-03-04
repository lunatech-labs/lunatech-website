import {
    github,
    linkedin,
    twitter,
    instagram,
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