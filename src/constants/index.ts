import {
    github,
    linkedin,
    twitter,
    instagram,
    rotterdamOffice,
    parisOffice,
    visionIllustration,
    visionIllustrationOpen,
    officeIcon,
    awsLogo,
    azulLogo,
    cleverCloudLogo,
    cloudBeesLogo,
    googleCloudLogo,
    lightbendLogo,
    redHatLogo,
} from '@/assets'

import carIcon from '@/components/BusinessCard/Icons/carIcon'
import buildingIcon from '@/components/BusinessCard/Icons/buildingIcon'
import bankIcon from '@/components/BusinessCard/Icons/bankIcon'
import shieldIcon from '@/components/BusinessCard/Icons/shieldIcon'
import netherlandIcon from '@/components/OfficeCard/Icons/netherlandIcon'
import parisIcon from '@/components/OfficeCard/Icons/parisIcon'
import sdvIcon from '@/components/ServiceCard/Icons/sdvIcon'
import customSoftwareIcon from '@/components/ServiceCard/Icons/customSoftwareIcon'
import systemIntegrationIcon from '@/components/ServiceCard/Icons/systemIntegrationIcon'
import legacyTransformationIcon from '@/components/ServiceCard/Icons/legacyTransformationIcon'

export const navLinks = [
    {
        title: "navigation.home",
        url: "/",
        mouseEnterTitle: "home",
        mouseEnterDesc: "navigation.dynamicText.home",
        blank: false,
    },
    {
        title: "navigation.about",
        url: "/about",
        mouseEnterTitle: "about",
        mouseEnterDesc: "navigation.dynamicText.aboutUs",
        blank: false
    },
    {
        title: "navigation.services",
        url: "/services",
        mouseEnterTitle: "services",
        mouseEnterDesc: "navigation.dynamicText.services",
        blank: false
    },
    {
        title: "navigation.technologies",
        url: "/technologies",
        mouseEnterTitle: "technlogies",
        mouseEnterDesc: "navigation.dynamicText.technologies",
        blank: false
    },
    {
        title: "navigation.careers",
        url: "https://recruitment.lunatech.com/",
        mouseEnterTitle: "careers",
        mouseEnterDesc: "navigation.dynamicText.careers",
        blank: true
    },
    {
        title: "navigation.contact",
        url: "/contact",
        mouseEnterTitle: "contact",
        mouseEnterDesc: "navigation.dynamicText.contact",
        blank: false
    }
]

export const socialLinks = [
    {
        title: "Github",
        url: "https://github.com/lunatech-labs",
        mouseEnterTitle: "Github",
        mouseEnterDesc: "navigation.dynamicText.github",
        blank: true,
        alt: "Github logo",
        icon: github,
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/lunatech_nl/",
        mouseEnterTitle: "Instagram",
        mouseEnterDesc: "navigation.dynamicText.instagram",
        blank: true,
        alt: "Instagram logo",
        icon: instagram,
    },
    {
        title: "Linkedin",
        url: "https://www.linkedin.com/company/lunatech-research",
        mouseEnterTitle: "Linkedin",
        mouseEnterDesc: "navigation.dynamicText.linkedin",
        blank: true,
        alt: "Linkedin logo",
        icon: linkedin,
    },
    {
        title: "X / Twitter",
        url: "https://twitter.com/lunatechlabs",
        mouseEnterTitle: "X / Twitter",
        mouseEnterDesc: "navigation.dynamicText.twitter",
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

export const valuesBanner = [
    {
        title: "banner.first",
        number: 30
    },
    {
        title: "banner.second",
        number: 100
    },
    {
        title: "banner.fourth",
        number: 25
    }
]

export const partnerships = [
    {
        icon: awsLogo,
    },
    {
        icon: azulLogo,
    },
    {
        icon: cleverCloudLogo,
    },
    {
        icon: cloudBeesLogo,
    },
    {
        icon: googleCloudLogo,
    },
    {
        icon: lightbendLogo,
    },
    {
        icon: redHatLogo,
    }
]

export const officeCard = [
    {
        country: "officeCard.netherlands.name",
        image: rotterdamOffice,
        email: "infos@lunatech.nl",
        careersEmail: 'employment@lunatech.nl',
        phone: "+31 10 750 2600",
        address: "Hofplein 20 - 3032 AC Rotterdam",
        icon: [
            {
                title: "Netherlands",
                imageUrl: netherlandIcon,
            }
        ]
    },
    {
        country: "officeCard.france.name",
        image: parisOffice,
        email: "info@lunatech.fr",
        phone: "+33 1 85 08 57 00",
        address: "3 rue de la Galmy - 77700 Chessy",
        icon: [
            {
                title: "France",
                imageUrl: parisIcon,
            }
        ]
    }
]

export const visionCards = [
    {
        id: 1,
        column: "left",
        text: "about.thirdBlock.visions.1",
    },
    {
        id: 2,
        column: "right",
        text: "about.thirdBlock.visions.2",
    },
    {
        id: 3,
        column: "left",
        text: "about.thirdBlock.visions.3",
    },
    {
        id: 4,
        column: "right",
        text: "about.thirdBlock.visions.4",
    },
];

export const serviceBlock = [
    {
        breadcrumb: "service.breadcrumb",
        title: "service.title",
        titleImp: "service.titleImp",
        text: "service.text",
        cards: [
            {
                title: "service.cards.strategicExpertise.title",
                text: "service.cards.strategicExpertise.text",
                imageIcon: sdvIcon,
                url: "/services/software-defined-vehicle"
            },
            {
                title: "service.cards.softwareDefinedVehicle.title",
                text: "service.cards.softwareDefinedVehicle.text",
                imageIcon: sdvIcon,
                url: "/services/software-defined-vehicle"
            },
            {
                title: "service.cards.customSoftware.title",
                text: "service.cards.customSoftware.text",
                imageIcon: customSoftwareIcon,
                url: "/services/custom-software-development"
            },
            {
                title: "service.cards.systemIntegration.title",
                text: "service.cards.systemIntegration.text",
                imageIcon: systemIntegrationIcon,
                url: "/services/system-integration"
            },
            {
                title: "service.cards.legacyTransformation.title",
                text: "service.cards.legacyTransformation.text",
                imageIcon: legacyTransformationIcon,
                url: "/services/legacy-transformation"
            },
            {
                title: "service.cards.technicalExpertise.title",
                text: "service.cards.technicalExpertise.text",
                imageIcon: sdvIcon,
                url: "/services/software-defined-vehicle"
            },
            {
                title: "service.cards.openSource.title",
                text: "service.cards.openSource.text",
                imageIcon: sdvIcon,
                url: "/services/software-defined-vehicle"
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
            title2: "about.thirdBlock.title2",
            img: visionIllustration,
            imgOpen: visionIllustrationOpen,
            vision: [
                {
                    text: "Notre travail se caractérise par un engagement profond en faveur de la qualité, souligné par une approche méthodique du développement de logiciels."
                },
                {
                    text: "Au cœur de l'éthique de Lunatech se trouve un penchant pour la simplicité et le pragmatisme."
                },
                {
                    text: "Cette conviction est ancrée dans la notion que les logiciels véritablement efficaces sont à la fois intuitifs et résistants, dépourvus de complexités superflues."
                },
                {
                    text: "Une telle approche permet non seulement de renforcer la fiabilité du logiciel, mais aussi d'améliorer son adaptabilité et sa maintenabilité."
                }
            ]
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
        icon: officeIcon,
        lt: true
    },
    {
        year: 1993,
        title: "Lunatech is born",
        text: "Opening of the first office in Paris",
        icon: officeIcon,
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
        icon: officeIcon,
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

export const technologiesPage = [
    {
        firstBlock: [
            {
                title: "technologies.page.firstBlock.automotive.title",
                text: "technologies.page.firstBlock.automotive.text",
                image: carIcon,
            },
            {
                title: "technologies.page.firstBlock.entertainment.title",
                text: "technologies.page.firstBlock.entertainment.text",
                image: buildingIcon,
            },
            {
                title: "technologies.page.firstBlock.finance.title",
                text: "technologies.page.firstBlock.finance.text",
                image: bankIcon,
            },
            {
                title: "technologies.page.firstBlock.insurance.title",
                text: "technologies.page.firstBlock.insurance.text",
                image: shieldIcon,
            }
        ],
        secondBlock: [
            {
                title: "technologies.page.secondBlock.devops.title",
                text: "technologies.page.secondBlock.devops.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.scala.title",
                text: "technologies.page.secondBlock.scala.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.java.title",
                text: "technologies.page.secondBlock.java.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.frontend.title",
                text: "technologies.page.secondBlock.frontend.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.bigData.title",
                text: "technologies.page.secondBlock.bigData.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.machineLearning.title",
                text: "technologies.page.secondBlock.machineLearning.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.uxUi.title",
                text: "technologies.page.secondBlock.uxUi.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.testAutomation.title",
                text: "technologies.page.secondBlock.testAutomation.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.agileMethodology.title",
                text: "technologies.page.secondBlock.agileMethodology.text",
                image: shieldIcon
            }
        ],
    }
]

export const contactPage = [
    {
        label: "contact.label.object",
        placeHolder: "contact.placeHolder.object",
        name: "object",
        type: "text",
        required: true
    },
    {
        label: "contact.label.message",
        placeHolder: "contact.placeHolder.message",
        name: "message",
        type: "textarea",
        required: true
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
                title: "navigation.services",
                url: "/services"
            },
            {
                title: "navigation.technologies",
                url: "/technologies"
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
        city: "3032 AC Rotterdam",
        mapUrl: "http://maps.apple.com/?q=51.925154,4.478120"
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
        city: "77700 Chessy",
        mapUrl: "http://maps.apple.com/?q=48.856190,2.771435"
    }
]

export const notFound = {
    title: "404",
    subTitle: "Look like you're lost in",
    subTitleColor: "space!",
    text: "Oops the spaceship left without you... The page you requested could not be found.",
    button: "buttonHomePage"
}
