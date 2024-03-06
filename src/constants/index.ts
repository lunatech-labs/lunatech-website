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
        mouseEnterDesc: "navigation.dymanicText.home",
        blank: false,
    },
    {
        title: "navigation.about",
        url: "/about",
        mouseEnterTitle: "about",
        mouseEnterDesc: "navigation.dymanicText.aboutUs",
        blank: false
    },
    {
        title: "Services",
        url: "/services",
        mouseEnterTitle: "services",
        mouseEnterDesc: "navigation.dymanicText.services",
        blank: false
    },
    {
        title: "Technologies",
        url: "/technologies",
        mouseEnterTitle: "technlogies",
        mouseEnterDesc: "navigation.dymanicText.technologies",
        blank: false
    },
    {
        title: "Blog",
        url: "https://blog.lunatech.com/",
        mouseEnterTitle: "blog",
        mouseEnterDesc: "navigation.dymanicText.blog",
        blank: true
    },
    {
        title: "navigation.careers",
        url: "https://recruitment.lunatech.com/",
        mouseEnterTitle: "careers",
        mouseEnterDesc: "navigation.dymanicText.careers",
        blank: true
    },
    {
        title: "Contact",
        url: "/contact",
        mouseEnterTitle: "contact",
        mouseEnterDesc: "navigation.dymanicText.contact",
        blank: false
    }
]

export const socialLinks = [
    {
        title: "Github",
        url: "https://github.com/lunatech-labs",
        mouseEnterTitle: "Github",
        mouseEnterDesc: "navigation.dymanicText.github",
        blank: true,
        alt: "Github logo",
        icon: github,
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/lunatech_nl/",
        mouseEnterTitle: "Instagram",
        mouseEnterDesc: "navigation.dymanicText.instagram",
        blank: true,
        alt: "Instagram logo",
        icon: instagram,
    },
    {
        title: "Linkedin",
        url: "https://www.linkedin.com/company/lunatech-research",
        mouseEnterTitle: "Linkedin",
        mouseEnterDesc: "navigation.dymanicText.linkedin",
        blank: true,
        alt: "Linkedin logo",
        icon: linkedin,
    },
    {
        title: "X / Twitter",
        url: "https://twitter.com/lunatechlabs",
        mouseEnterTitle: "X / Twitter",
        mouseEnterDesc: "navigation.dymanicText.twitter",
        blank: true,
        alt: "Twitter logo",
        icon: twitter,
    }
]

export const homePage = [
    {
        aboutBlock : {
            title: "aboutBlock.title",
            titleImp: "aboutBlock.titleImp",
            desc: "aboutBlock.desc",
        },
    }
]

export const officeCard = [
    {
        country: "officeCard.netherlands.name",
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
        country: "officeCard.france.name",
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
        country: "officeCard.newcastle.name",
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
        breadcrumb: "service.breadcrumb",
        title: "service.title",
        titleImp: "service.titleImp",
        text: "service.text",
        cards: [
            {
                title: "service.cards.softwareDefinedVehicle.title",
                text: "service.cards.softwareDefinedVehicle.text",
                imageUrl: sdvIcon,
                url: "/services/software-defined-vehicle"
            },
            {
                title: "service.cards.customSoftwareDevelopment.title",
                text: "service.cards.customSoftwareDevelopment.text",
                imageUrl: customSoftwareIcon,
                url: "/services/custom-software-development"
            },
            {
                title: "service.cards.systemIntegration.title",
                text: "service.cards.systemIntegration.text",
                imageUrl: systemIntegrationIcon,
                url: "/services/system-integration"
            },
            {
                title: "service.cards.legacyTransformation.title",
                text: "service.cards.legacyTransformation.text",
                imageUrl: legacyTransformationIcon,
                url: "/services/legacy-transformation"
            }
        ]
    }
]

export const aboutPage = [
    {
        title: "about.title",
        titleImp: "about.titleImp",
        subtitle: "about.subtitle",
        subtitleImp: "about.subtitleImp",
        subtitle2: "about.title2",
        subtitleImp2: "about.titleImp2",
        desc2: "about.text3",
        firstBlock: {
            title: "about.firstBlock.title",
            titleImp: "about.firstBlock.titleImp",
            desc: "about.firstBlock.desc",
        },
        secondBlock: {
            title: "about.secondBlock.title",
            titleImp: "about.secondBlock.titleImp",
            desc: "about.secondBlock.desc"
        },
        thirdBlock: {
            title: "about.thirdBlock.title",
            titleImp: "about.thirdBlock.titleImp",
            title2: "about.thirdBlock.title2"
        },
        fourthBlock: {
            title: "about.fourthBlock.title",
            titleImp: "about.fourthBlock.titleImp",
            title2: "about.fourthBlock.title2"
        },
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

export const contactBtn = [
    {
        title: "contactBtn.title"
    }
]

export const contactBlock = [
    {
        title: "contactBlock.title",
        titleImp: "contactBlock.titleImp"
    }
]

export const servicesPage = [
    {
        title: "servicesPage.title",
        titleImp: "servicesPage.titleImp",
        firstBlock : {
            breadcrumb: "servicesPage.firstBlock.breadcrumb",
            title: "servicesPage.firstBlock.title",
            titleImp: "servicesPage.firstBlock.titleImp",
            advices : [
                {
                    title: "servicesPage.firstBlock.advices.technoPlanning.title",
                    text: "servicesPage.firstBlock.advices.technoPlanning.text"
                },
                {
                    title: "servicesPage.firstBlock.advices.riskManagement.title",
                    text: "servicesPage.firstBlock.advices.riskManagement.text"
                },
                {
                    title: "servicesPage.firstBlock.advices.innovation.title",
                    text: "servicesPage.firstBlock.advices.innovation.text"
                },
                {
                    title: "servicesPage.firstBlock.advices.dataManagement.title",
                    text: "servicesPage.firstBlock.advices.dataManagement.text"
                },
                {
                    title: "servicesPage.firstBlock.advices.changeManagement.title",
                    text: "servicesPage.firstBlock.advices.changeManagement.text"
                },
                {
                    title: "servicesPage.firstBlock.advices.digitalTransformation.title",
                    text: "servicesPage.firstBlock.advices.digitalTransformation.text"
                }
            ]
        },
        secondBlock: {
            breadcrumb: "servicesPage.secondBlock.breadcrumb",
            title: "servicesPage.secondBlock.title",
            titleImp: "servicesPage.secondBlock.titleImp",
            text: "servicesPage.secondBlock.text"
        }
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

export const notFound = {
    title: "404",
    subTitle: "Look like you're lost in",
    subTitleColor: "space!",
    text: "Oops the spaceship left without you... The page you requested could not be found.",
    button: "buttonHomePage"
}
