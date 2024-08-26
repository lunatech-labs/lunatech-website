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
import sdvIcon from '@/components/ExpertisesCard/Icons/sdvIcon'
import softwareProjectDeliveryIcon from '@/components/ExpertisesCard/Icons/softwareProjectDeliveryIcon'
import systemIntegrationIcon from '@/components/ExpertisesCard/Icons/systemIntegrationIcon'
import legacyModernisationIcon from '@/components/ExpertisesCard/Icons/legacyModernisationIcon'
import strategicExpertiseIcon from '@/components/ExpertisesCard/Icons/strategicExpertiseIcon'

export const navLinks = [
    {
        title: "navigation.home",
        url: "/",
        mouseEnterTitle: "home",
        mouseEnterDesc: "navigation.dynamicText.home",
        blank: false,
    },
    {
        title: "navigation.expertises",
        url: "/expertises",
        mouseEnterTitle: "expertises",
        mouseEnterDesc: "navigation.dynamicText.expertises",
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
        title: "navigation.opensource",
        url: "/open-source",
        mouseEnterTitle: "opensouce",
        mouseEnterDesc: "navigation.dynamicText.opensource",
        blank: false
    },
    {
        title: "navigation.partners",
        url: "/partners",
        mouseEnterTitle: "partners",
        mouseEnterDesc: "navigation.dynamicText.partners",
        blank: false
    },
    {
        title: "navigation.about",
        url: "/about",
        mouseEnterTitle: "about",
        mouseEnterDesc: "navigation.dynamicText.aboutUs",
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

export const expertiseBlock = [
    {
        breadcrumb: "expertise.breadcrumb",
        title: "expertise.title",
        titleImp: "expertise.titleImp",
        text: "expertise.text",
        cards: [
            {
                title: "expertise.cards.strategicExpertise.title",
                text: "expertise.cards.strategicExpertise.text",
                imageIcon: strategicExpertiseIcon,
                url: "/expertises/strategic-expertise"
            },
            {
                title: "expertise.cards.softwareDefinedVehicle.title",
                text: "expertise.cards.softwareDefinedVehicle.text",
                imageIcon: sdvIcon,
                url: "/expertises/software-defined-vehicle"
            },
            {
                title: "expertise.cards.softwareProjectDelivery.title",
                text: "expertise.cards.softwareProjectDelivery.text",
                imageIcon: softwareProjectDeliveryIcon,
                url: "/expertises/software-project-delivery"
            },
            {
                title: "expertise.cards.systemIntegration.title",
                text: "expertise.cards.systemIntegration.text",
                imageIcon: systemIntegrationIcon,
                url: "/expertises/system-integration"
            },
            {
                title: "expertise.cards.legacyModernisation.title",
                text: "expertise.cards.legacyModernisation.text",
                imageIcon: legacyModernisationIcon,
                url: "/expertises/legacy-modernisation"
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

export const expertisesPage = [
    {
        title: "expertisesPage.title",
        titleImp: "expertisesPage.titleImp",
        firstBlock : {
            breadcrumb: "expertisesPage.firstBlock.breadcrumb",
            title: "expertisesPage.firstBlock.title",
            titleImp: "sexpertisesPage.firstBlock.titleImp",
            advices : [
                {
                    title: "expertisesPage.firstBlock.advices.technoPlanning.title",
                    text: "expertisesPage.firstBlock.advices.technoPlanning.text"
                },
                {
                    title: "expertisesPage.firstBlock.advices.riskManagement.title",
                    text: "expertisesPage.firstBlock.advices.riskManagement.text"
                },
                {
                    title: "expertisesPage.firstBlock.advices.innovation.title",
                    text: "expertisesPage.firstBlock.advices.innovation.text"
                },
                {
                    title: "expertisesPage.firstBlock.advices.dataManagement.title",
                    text: "expertisesPage.firstBlock.advices.dataManagement.text"
                },
                {
                    title: "expertisesPage.firstBlock.advices.changeManagement.title",
                    text: "expertisesPage.firstBlock.advices.changeManagement.text"
                },
                {
                    title: "expertisesPage.firstBlock.advices.digitalTransformation.title",
                    text: "expertisesPage.firstBlock.advices.digitalTransformation.text"
                }
            ]
        },
        secondBlock: {
            breadcrumb: "expertisesPage.secondBlock.breadcrumb",
            title: "expertisesPage.secondBlock.title",
            titleImp: "expertisesPage.secondBlock.titleImp",
            text: "expertisesPage.secondBlock.text"
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
                title: "technologies.page.secondBlock.kotlin.title",
                text: "technologies.page.secondBlock.kotlin.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.typescript.title",
                text: "technologies.page.secondBlock.typescript.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.aws.title",
                text: "technologies.page.secondBlock.aws.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.googlecloud.title",
                text: "technologies.page.secondBlock.googlecloud.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.azure.title",
                text: "technologies.page.secondBlock.azure.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.openshift.title",
                text: "technologies.page.secondBlock.openshift.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.webapi.title",
                text: "technologies.page.secondBlock.webapi.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.akka.title",
                text: "technologies.page.secondBlock.akka.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.esb.title",
                text: "technologies.page.secondBlock.esb.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.jwt.title",
                text: "technologies.page.secondBlock.jwt.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.gitlab.title",
                text: "technologies.page.secondBlock.gitlab.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.cloudbees.title",
                text: "technologies.page.secondBlock.cloudbees.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.jenkins.title",
                text: "technologies.page.secondBlock.jenkins.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.playframework.title",
                text: "technologies.page.secondBlock.playframework.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.spring.title",
                text: "technologies.page.secondBlock.spring.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.quarkus.title",
                text: "technologies.page.secondBlock.quarkus.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.jakartaee.title",
                text: "technologies.page.secondBlock.jakartaee.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.reactjs.title",
                text: "technologies.page.secondBlock.reactjs.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.nextjs.title",
                text: "technologies.page.secondBlock.nextjs.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.angularjs.title",
                text: "technologies.page.secondBlock.angularjs.text",
                image: shieldIcon
            },
            {
                title: "technologies.page.secondBlock.figma.title",
                text: "technologies.page.secondBlock.figma.text",
                image: shieldIcon
            }
        ]
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
                title: "navigation.expertises",
                url: "/expertises"
            },
            {
                title: "navigation.technologies",
                url: "/technologies"
            },
            {
                title: "navigation.opensource",
                url: "/open-source"
            },
            {
                title: "navigation.partners",
                url: "/partners"
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
