import {
    github,
    linkedin,
    twitter,
    instagram,
    bluesky,
    rotterdamOffice,
    parisOffice,
    visionIllustration,
    visionIllustrationOpen,
    awsLogo,
    azulLogo,
    cleverCloudLogo,
    cloudBeesLogo,
    googleCloudLogo,
    eclipseLogo,
    azureLogo,
    akkaLogo,
    redHatLogo,
    awsIcon,
    javaIcon,
    scalaIcon,
    angularIcon,
    kotlinIcon,
    typescriptIcon,
    googlecloudIcon,
    azureIcon,
    openshiftIcon,
    webapiIcon,
    akkaIcon,
    esbIcon,
    jwtIcon,
    gitlabIcon,
    cloudbeesIcon,
    jenkinsIcon,
    playframeworkIcon,
    springIcon,
    quarkusIcon,
    jakartaEEIcon,
    reactjsIcon,
    nextjsIcon,
    figmaIcon
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
        title: "navigation.about",
        url: "/about",
        mouseEnterTitle: "about",
        mouseEnterDesc: "navigation.dynamicText.aboutUs",
        blank: false
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
        mouseEnterTitle: "opensource",
        mouseEnterDesc: "navigation.dynamicText.opensource",
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
    },
    {
        title: "Bluesky",
        url: "https://bsky.app/profile/lunatech.com",
        mouseEnterTitle: "Bluesky",
        mouseEnterDesc: "navigation.dynamicText.bluesky",
        blank: true,
        alt: "Bluesky logo",
        icon: bluesky,
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
        number: 90
    },
    {
        title: "banner.fourth",
        number: 25
    }
]

export const partnerships = [
    {
        title: "partners.paragraphes[0].title",
        subtitle: "partners.paragraphes[0].subtitle",
        text: "partners.paragraphes[0].text",
        icon: redHatLogo,
    },
    {
        title: "partners.paragraphes[1].title",
        subtitle: "partners.paragraphes[1].subtitle",
        text: "partners.paragraphes[1].text",
        icon: awsLogo,
    },
    {
        title: "partners.paragraphes[2].title",
        subtitle: "partners.paragraphes[2].subtitle",
        text: "partners.paragraphes[2].text",
        icon: googleCloudLogo,
    },
    {
        title: "partners.paragraphes[3].title",
        subtitle: "partners.paragraphes[3].subtitle",
        text: "partners.paragraphes[3].text",
        icon: azureLogo,
    },
    {
        title: "partners.paragraphes[4].title",
        subtitle: "partners.paragraphes[4].subtitle",
        text: "partners.paragraphes[4].text",
        icon: eclipseLogo,
    },
    {
        title: "partners.paragraphes[5].title",
        subtitle: "partners.paragraphes[5].subtitle",
        text: "partners.paragraphes[5].text",
        icon: cleverCloudLogo,
    },
    {
        title: "partners.paragraphes[6].title",
        subtitle: "partners.paragraphes[6].subtitle",
        text: "partners.paragraphes[6].text",
        icon: azulLogo,
    },
    {
        title: "partners.paragraphes[7].title",
        subtitle: "partners.paragraphes[7].subtitle",
        text: "partners.paragraphes[7].text",
        icon: cloudBeesLogo,
    },
    {
        title: "partners.paragraphes[8].title",
        subtitle: "partners.paragraphes[8].subtitle",
        text: "partners.paragraphes[8].text",
        icon: akkaLogo,
    }
]

export const officeCard = [
    {
        country: "officeCard.netherlands.name",
        image: rotterdamOffice,
        email: "info@lunatech.nl",
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
            desc2: "about.firstBlock.desc2"
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

export const expertiseSoftwareProjectDelivery = {
    "paragraphes": [
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[0].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[0].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[1].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[1].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[2].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[2].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[3].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[3].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[4].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[4].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[5].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[5].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[6].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[6].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[7].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[7].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[8].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[8].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[9].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[9].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[10].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[10].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[11].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[11].text"
        },
        {
            "title": "expertiseSoftwareProjectDelivery.paragraphes[12].title",
            "text": "expertiseSoftwareProjectDelivery.paragraphes[12].text"
        },
    ]
}

export const expertiseSystemIntegration = {
    "paragraphes": [{
            "title": "expertiseSystemIntegration.paragraphes[0].title",
            "text": "expertiseSystemIntegration.paragraphes[0].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[1].title",
            "text": "expertiseSystemIntegration.paragraphes[1].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[2].title",
            "text": "expertiseSystemIntegration.paragraphes[2].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[3].title",
            "text": "expertiseSystemIntegration.paragraphes[3].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[4].title",
            "text": "expertiseSystemIntegration.paragraphes[4].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[5].title",
            "text": "expertiseSystemIntegration.paragraphes[5].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[6].title",
            "text": "expertiseSystemIntegration.paragraphes[6].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[7].title",
            "text": "expertiseSystemIntegration.paragraphes[7].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[8].title",
            "text": "expertiseSystemIntegration.paragraphes[8].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[9].title",
            "text": "expertiseSystemIntegration.paragraphes[9].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[10].title",
            "text": "expertiseSystemIntegration.paragraphes[10].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[11].title",
            "text": "expertiseSystemIntegration.paragraphes[11].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[12].title",
            "text": "expertiseSystemIntegration.paragraphes[12].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[13].title",
            "text": "expertiseSystemIntegration.paragraphes[13].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[14].title",
            "text": "expertiseSystemIntegration.paragraphes[14].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[15].title",
            "text": "expertiseSystemIntegration.paragraphes[15].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[16].title",
            "text": "expertiseSystemIntegration.paragraphes[16].text"
        },
        {
            "title": "expertiseSystemIntegration.paragraphes[17].title",
            "text": "expertiseSystemIntegration.paragraphes[17].text"
        }
    ]
}

export const expertiseStrategicExpertise = {

        "paragraphes" : [{
            "title" : "expertiseStrategicExpertise.paragraphes[0].title",
            "text1": "expertiseStrategicExpertise.paragraphes[0].text1",
            "text2" : "expertiseStrategicExpertise.paragraphes[0].text2"      
        },
        {
            "title" : "expertiseStrategicExpertise.paragraphes[1].title",
            "text1": "expertiseStrategicExpertise.paragraphes[1].text1",
            "text2" : "expertiseStrategicExpertise.paragraphes[1].text2"    
        },
        {
            "title" : "expertiseStrategicExpertise.paragraphes[2].title",
            "text1": "expertiseStrategicExpertise.paragraphes[2].text1",
            "text2" : "expertiseStrategicExpertise.paragraphes[2].text2"    
        },
        {
            "title" : "expertiseStrategicExpertise.paragraphes[3].title",
            "text1": "expertiseStrategicExpertise.paragraphes[3].text1",
            "text2" : "expertiseStrategicExpertise.paragraphes[3].text2"    
        }
    ]
}

export const expertiseLegacyModernisation = {
    "paragraphes" : [
        {
            "title" : "expertiseLegacyModernisation.paragraphes[0].title",
            "text" : "expertiseLegacyModernisation.paragraphes[0].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[1].title",
            "text" : "expertiseLegacyModernisation.paragraphes[1].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[2].title",
            "text" : "expertiseLegacyModernisation.paragraphes[2].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[3].title",
            "text" : "expertiseLegacyModernisation.paragraphes[3].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[4].title",
            "text" : "expertiseLegacyModernisation.paragraphes[4].text"
        },
        {
            "title" : "expertiseLegacyModernisation.conclusion",
            "text" : "expertiseLegacyModernisation.conclusion"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[5].title",
            "text" : "expertiseLegacyModernisation.paragraphes[5].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[6].title",
            "text" : "expertiseLegacyModernisation.paragraphes[6].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[7].title",
            "text" : "expertiseLegacyModernisation.paragraphes[7].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[8].title",
            "text" : "expertiseLegacyModernisation.paragraphes[8].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[9].title",
            "text" : "expertiseLegacyModernisation.paragraphes[9].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[10].title",
            "text" : "expertiseLegacyModernisation.paragraphes[10].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[11].title",
            "text" : "expertiseLegacyModernisation.paragraphes[11].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[12].title",
            "text" : "expertiseLegacyModernisation.paragraphes[12].text"
        },
        {
            "title" : "expertiseLegacyModernisation.paragraphes[13].title",
            "text" : "expertiseLegacyModernisation.paragraphes[13].text"
        }
    ]
}

export const softwareDefinedVehicule = {
    "title" : "softwareDefinedVehicule.title",
    "description" : "softwareDefinedVehicule.description",
    "title2" : "softwareDefinedVehicule.title2",
    "paragraphes" : [{
        "title" : "softwareDefinedVehicule.paragraphes[0].title",
        "text": "softwareDefinedVehicule.paragraphes[0].text"
    },
    {
        "title" : "softwareDefinedVehicule.paragraphes[1].title",
        "text" : "softwareDefinedVehicule.paragraphes[1].text"    
    },
    {
        "title" : "softwareDefinedVehicule.paragraphes[2].title",
        "text" : "softwareDefinedVehicule.paragraphes[2].text"    
    },
    {
        "title" : "softwareDefinedVehicule.paragraphes[3].title",
        "text" : "softwareDefinedVehicule.paragraphes[3].text"    
    },
    {
        "title" : "softwareDefinedVehicule.paragraphes[4].title",
        "text" : "softwareDefinedVehicule.paragraphes[4].text"    
    }
    ],
    "conclusion" : {
        "title" : "softwareDefinedVehicule.conclusion.title",
        "text" : "softwareDefinedVehicule.conclusion.text"
    }
}

export const advantages = {
    "title" : "advantages.title",
    "paragraphes" : [{
        "title" : "advantages.paragraphes[0].title",
        "text": "advantages.paragraphes[0].text"
    },
    {
        "title" : "advantages.paragraphes[1].title",
        "text": "advantages.paragraphes[1].text"
    },
    {
        "title" : "advantages.paragraphes[2].title",
        "text": "advantages.paragraphes[2].text"
    },
    {
        "title" : "advantages.paragraphes[3].title",
        "text": "advantages.paragraphes[3].text"
    },
    {
        "title" : "advantages.paragraphes[4].title",
        "text": "advantages.paragraphes[4].text"
    }
    ]
}

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
                title: "technologies.page.paragraphes[1].title",
                expertise: "technologies.page.paragraphes[1].expertise",
                technologies: "technologies.page.paragraphes[1].technologies",
                text: "technologies.page.paragraphes[1].text"
            },
            {
                title: "technologies.page.paragraphes[2].title",
                expertise: "technologies.page.paragraphes[2].expertise",
                technologies: "technologies.page.paragraphes[2].technologies",
                text: "technologies.page.paragraphes[2].text"
            },
            {
                title: "technologies.page.paragraphes[3].title",
                expertise: "technologies.page.paragraphes[3].expertise",
                technologies: "technologies.page.paragraphes[3].technologies",
                text: "technologies.page.paragraphes[3].text"
            },
            {
                title: "technologies.page.paragraphes[4].title",
                expertise: "technologies.page.paragraphes[4].expertise",
                technologies: "technologies.page.paragraphes[4].technologies",
                text: "technologies.page.paragraphes[4].text"
            },
            {
                title: "technologies.page.paragraphes[5].title",
                expertise: "technologies.page.paragraphes[5].expertise",
                technologies: "technologies.page.paragraphes[5].technologies",
                text: "technologies.page.paragraphes[5].text"
            },
            {
                title: "technologies.page.paragraphes[6].title",
                expertise: "technologies.page.paragraphes[6].expertise",
                technologies: "technologies.page.paragraphes[6].technologies",
                text: "technologies.page.paragraphes[6].text"
            },
            {
                title: "technologies.page.paragraphes[7].title",
                expertise: "technologies.page.paragraphes[7].expertise",
                technologies: "technologies.page.paragraphes[7].technologies",
                text: "technologies.page.paragraphes[7].text"
            },
            {
                title: "technologies.page.paragraphes[8].title",
                expertise: "technologies.page.paragraphes[8].expertise",
                technologies: "technologies.page.paragraphes[8].technologies",
                text: "technologies.page.paragraphes[8].text"
            },
            {
                title: "technologies.page.paragraphes[9].title",
                expertise: "technologies.page.paragraphes[9].expertise",
                technologies: "technologies.page.paragraphes[9].technologies",
                text: "technologies.page.paragraphes[9].text"
            }
        ],


        secondBlock: [
            {
                title: "technologies.page.secondBlock.scala.title",
                text: "technologies.page.secondBlock.scala.text",
                image: scalaIcon
            },
            {
                title: "technologies.page.secondBlock.java.title",
                text: "technologies.page.secondBlock.java.text",
                image: javaIcon
            },
            {
                title: "technologies.page.secondBlock.kotlin.title",
                text: "technologies.page.secondBlock.kotlin.text",
                image: kotlinIcon
            },
            {
                title: "technologies.page.secondBlock.typescript.title",
                text: "technologies.page.secondBlock.typescript.text",
                image: typescriptIcon
            },
            {
                title: "technologies.page.secondBlock.aws.title",
                text: "technologies.page.secondBlock.aws.text",
                image: awsIcon
            },
            {
                title: "technologies.page.secondBlock.googlecloud.title",
                text: "technologies.page.secondBlock.googlecloud.text",
                image: googlecloudIcon
            },
            {
                title: "technologies.page.secondBlock.azure.title",
                text: "technologies.page.secondBlock.azure.text",
                image: azureIcon
            },
            {
                title: "technologies.page.secondBlock.openshift.title",
                text: "technologies.page.secondBlock.openshift.text",
                image: openshiftIcon
            },
            {
                title: "technologies.page.secondBlock.webapi.title",
                text: "technologies.page.secondBlock.webapi.text",
                image: webapiIcon
            },
            {
                title: "technologies.page.secondBlock.akka.title",
                text: "technologies.page.secondBlock.akka.text",
                image: akkaIcon
            },
            {
                title: "technologies.page.secondBlock.esb.title",
                text: "technologies.page.secondBlock.esb.text",
                image: esbIcon
            },
            {
                title: "technologies.page.secondBlock.jwt.title",
                text: "technologies.page.secondBlock.jwt.text",
                image: jwtIcon
            },
            {
                title: "technologies.page.secondBlock.gitlab.title",
                text: "technologies.page.secondBlock.gitlab.text",
                image: gitlabIcon
            },
            {
                title: "technologies.page.secondBlock.cloudbees.title",
                text: "technologies.page.secondBlock.cloudbees.text",
                image: cloudbeesIcon
            },
            {
                title: "technologies.page.secondBlock.jenkins.title",
                text: "technologies.page.secondBlock.jenkins.text",
                image: jenkinsIcon
            },
            {
                title: "technologies.page.secondBlock.playframework.title",
                text: "technologies.page.secondBlock.playframework.text",
                image: playframeworkIcon
            },
            {
                title: "technologies.page.secondBlock.spring.title",
                text: "technologies.page.secondBlock.spring.text",
                image: springIcon
            },
            {
                title: "technologies.page.secondBlock.quarkus.title",
                text: "technologies.page.secondBlock.quarkus.text",
                image: quarkusIcon
            },
            {
                title: "technologies.page.secondBlock.jakartaee.title",
                text: "technologies.page.secondBlock.jakartaee.text",
                image: jakartaEEIcon
            },
            {
                title: "technologies.page.secondBlock.reactjs.title",
                text: "technologies.page.secondBlock.reactjs.text",
                image: reactjsIcon
            },
            {
                title: "technologies.page.secondBlock.nextjs.title",
                text: "technologies.page.secondBlock.nextjs.text",
                image: nextjsIcon
            },
            {
                title: "technologies.page.secondBlock.angularjs.title",
                text: "technologies.page.secondBlock.angularjs.text",
                image: angularIcon
            },
            {
                title: "technologies.page.secondBlock.figma.title",
                text: "technologies.page.secondBlock.figma.text",
                image: figmaIcon
            }
        ]
    }
]

export const expertisePage = [
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
]

export const openSourcePage = [
    {
        list: [
            {
                title: "opensource.list1.title",
                text: "opensource.list1.text"
            },
            {
                title: "opensource.list2.title",
                text: "opensource.list2.text"
            },
            {
                title: "opensource.list3.title",
                text: "opensource.list3.text"
            },
            {
                title: "opensource.list4.title",
                text: "opensource.list4.text"
            },
            {
                title: "opensource.list5.title",
                text: "opensource.list5.text"
            },
            {
                title: "opensource.list6.title",
                text: "opensource.list6.text"
            },
            {
                title: "opensource.list7.title",
                text: "opensource.list7.text"
            },
            {
                title: "opensource.list8.title",
                text: "opensource.list8.text"
            },
            {
                title: "opensource.list9.title",
                text: "opensource.list9.text"
            },
            {
                title: "opensource.list10.title",
                text: "opensource.list10.text"
            },
            {
                title: "opensource.list11.title",
                text: "opensource.list11.text"
            },
            {
                title: "opensource.list12.title",
                text: "opensource.list12.text"
            },
            {
                title: "opensource.list13.title",
                text: "opensource.list13.text"
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
