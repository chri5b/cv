'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myAppServices = angular.module('myApp.services', []).
    value('version', '0.1').
    value('localisation', {
        localise: function(locale,key) {
            switch (locale.toLowerCase())
            {
                case "en-gb":
                case "en-us":
                case "en":
                    return this.localiseToEnglish(key);
                    break;
                case "fr-fr":
                case "fr":
                    //return English if there's nothing defined for French
                    if (!this.french[key]) {
                        console.log("No french localisation for "+ key);
                        return this.localiseToEnglish(key);

                    } else {
                        return this.french[key];
                    }
                    break;
                default:
                    //if the language isn't one we recognise, return English
                    return this.localiseToEnglish(key);
                    break;
            }
        },
        french:{
            hello:"bonjour",
            summary:"Chef de Produit bilingue et expérimenté cherchant un nouveau défi",
            index_core_comp:"Compétences Clefs",
            index_exp:"Expérience Professionnelle",
            index_edu:"Education et Langues",
            index_other:"Autres Interêts",

            exp_to:"A",
            exp_from:"De",
            exp_company:"Entreprise",
            exp_location:"Endroit",
            exp_showHighlights:"Plus",
            exp_hideHighlights:"Moins",
            exp_search:"Recherche",
            exp_otherKeywords:"Autres Mots Clefs",

            edu_educationTitle:"Education et Langues",
            edu_languagesTitle:"Langues",
            edu_edu1_from:"Sep 1998",
            edu_edu1_to:"Dec 1999",
            edu_edu1_institution:"ESCP EAP",
            edu_edu1_course:"Master in European Business",
            edu_edu1_country:"France",
            edu_edu1_city:"Paris",
            edu_edu2_from:"Sep 1995",
            edu_edu2_to:"Jun 1998",
            edu_edu2_institution:"Balliol College, University d'Oxford",
            edu_edu2_course:"Licence en Politique, Philosophie and Economie",
            edu_edu2_country:"Royaume-Uni",
            edu_edu2_city:"Oxford",
            lang_lang1:"Anglais",
            lang_lang1_level:"Langue maternelle",
            lang_lang2:"Français",
            lang_lang2_level:"Courant",

            comp_translating_strategy:"Elaboration d’une stratégie produit et gestion de projet pour assurer sa mise en œuvre",
            comp_analysis_of_data: "Création de spécifications fonctionnelles détaillées qui atteignent efficacement le but recherché",
            comp_intelligently_balancing:"Gestion de priorités concurrentes et négociation de l’étendue des fonctions avec les acteurs concerné",
            comp_managing_relationships:"Expérience de méthodologies de développement traditionnelles et Agile",

            exp1_fromDate:"nov 2012",
            exp1_toDate:"Aujourd'hui",
            exp1_company:"Thomson Reuters",
            exp1_country:"France",
            exp1_city:"Paris",
            exp1_title:"Agile Product Owner",
            exp1_product:"Wealth Management App Store",
            exp1_problem:"Nos clients bancaires peinent à créer des outils d’investissement pour leurs investisseurs particuliers sur leurs sites web.",
            exp1_solution:"Le «App Store» permet aux éditeurs de logiciels externes de créer des Widgets HTML5 qui peuvent être facilement intégrés dans les sites web et mobile de nos clients.",

            exp2_fromDate:"Sep 2007",
            exp2_toDate:"Oct 2010",
            exp2_company:"Thomson Reuters",
            exp2_country:"Royaume-Uni",
            exp2_city:"Londres",
            exp2_title:"Chef de Produit",
            exp2_product:"Thomson Reuters Knowledge Direct API",
            exp2_problem:"600 banques dont le Crédit Agricole, Boursorama, BNP Paribas, Barclays et Charles Schwab qui publient des données financières pour les investisseurs particuliers utilisent cet API.",
            exp2_solution:"Le revenu annuel est de $120M et le produit répond à 500M requêtes par mois.",

            exp3_fromDate:"Sep 2005",
            exp3_toDate:"Sep 2007",
            exp3_company:"Riskclick",
            exp3_country:"Etats-Unis",
            exp3_city:"New York",
            exp3_title:"Chef de Produit",
            exp3_product:"Underwriting Process Manager",
            exp3_problem:" ",
            exp3_solution:"Le produit réduit les coûts et les erreurs dans les processus d’assurance commerciale en réduisant les recopiages de données et en rendant automatique certaines des étapes d’évaluation des risques.",

            exp4_fromDate:"Fev 2000",
            exp4_toDate:"Aug 2005",
            exp4_company:"Riskclick",
            exp4_country:"Royaume-Uni",
            exp4_city:"Londres",
            exp4_title:"Analyste des Spécifications Fonctionnelles",
            exp4_product:"VNAB Claims Module",
            exp4_problem:"La gestion de sinistres au sein de la bourse d’assurance hollandaise implique plusieurs entreprises et s’appuie essentiellement sur des documents physiques.",
            exp4_solution:"Le projet permet un traitement numérique des sinistres du début à la fin. 60 000 sinistres par an sont traités par le système et le projet a économisé plus de 800 000 Euro par an.",

            high1_description: "Gestion d’une équipe de 3 chef de produits junior afin d’établir et gérer le roadmap produit pour les 20 développeurs offshore",
            high2_description: "Négociation des ressources, de l’étendue des fonctions et du calendrier avec les acteurs concernés",
            high3_description: "Développement d’un modèle financier détaillé afin de justifier l’investissement dans le projet",
            high4_description: "Création d’un programme de partenariat pour engager les développeurs externes",
            high5_description: "Communication avec des clients comme E*TRADE, BNP Paribas et BBVA pour mieux comprendre les besoins du marché",
            high6_description: "Poursuite de discussions transversales portant sur notre stratégie de tarification ",
            high7_description: "Analyse de profitabilité des clients dans le but de recommander un changement de politique commerciale",
            high8_description: "Définition de la politique de tarification, et des processus de support pour des améliorations du produit",
            high9_description: "Géstion des activités de lancement de produit, création de supports marketing, formation des équipes de vente et de support technique",
            high10_description: "Création d’une équipe de 4 développeurs basés en Biélorussie pour aider les clients à la mise en œuvre du produit",
            high11_description: "Etroite collaboration avec les account managers afin de comprendre les frustrations des clients actuels",
            high12_description: "Création des spécifications fonctionnelles et conception de l’interface utilisateur pour un système de Business Process Management",
            high13_description: "Création des spécifications fonctionnelles et définition de priorités pour une équipe de développement de 12 personnes.",
            high14_description: "Conduite de réunions avec les clients afin de définir leurs besoins",
            high15_description: "Création des spécifications fonctionnelles, des modèles domaine UML et des organigrammes du processus",
            high16_description: "Travail étroit avec les groupes internes de développement pour assurer que les besoins fonctionnels et de performance seraient atteints",

            sk_agile:"Agile",
            sk_scrum:"SCRUM",
            sk_productOwner:"Product Owner",
            sk_projectManagement:"Gestion de projet",
            sk_stakeholderManagement:"Gestion des acteurs concernés",
            sk_expectationManagement:"Gestion de calendrier",
            sk_roiAnalysis:"Analyse de rentabilité",
            sk_excel:"Excel",
            sk_financialModelling:"Modélisation financière",
            sk_partnerProgram:"Programme de partenariat",
            sk_documentation:"Documentation",
            sk_relationshipManagement:"Gestion de partnariat",
            sk_presentationSkills:"Communication orale",
            sk_clientContact:"Contacte client",
            sk_requirementsGathering:"Analyse des besoins",
            sk_requirementsSpecification:"Rédaction des spécifications fonctionnelles",
            sk_pricingStrategy:"Stratégie de tarification",
            sk_crossFunctionalCollaboration:"Collaboration transversale",
            sk_profitabilityAnalysis:"Analyse de rentabilité",
            sk_orderToCashProcess:"Processus 'Order To Cash'",
            sk_releaseNotes:"Release Notes",
            sk_marketing:"Marketing",
            sk_commercialStrategy:"Stratégie commerciale",
            sk_productLaunch:"Lancement de produit",
            sk_salesSupport:"Soutien aux équipes de vente",
            sk_support:"Support",
            sk_peopleManagement:"Gestion des personnes",
            sk_productRoadmap: "Feuille de route produit",
            sk_prioritisation:"Prioritisation",
            sk_functionalDesign: "Conception Fonctionnelle",
            sk_brd:"Enoncé des exigeances fonctionelles",
            sk_mrd:"Enoncé des exigeances du marché",
            sk_userInterfaceDesign:"Conception des interfaces utilisateur",
            sk_offshoreDevelopment:"Développement Offshore",
            sk_userWorkshop:"Atelier pratique",
            sk_uml:"UML",
            sk_flowDiagrams:"Organigrammes du processus",
            sk_userAcceptanceTesting:"Essais d'acceptation des utilisateurs",
            sk_financialMarkets:"Marchés financiers",
            sk_wealthManagement:"Gestion de patrimoine",
            sk_exchangeData:"Données financiers",
            sk_crossSymbology:"Transcodification",
            sk_reuters:"Reuters",
            sk_timeSeries:"Données chronologiques",
            sk_fundamentals:"Données fondamentaux",
            sk_quoteData:"Quotation",
            sk_newsFeed:"Flux de dépèches",
            sk_css3:"CSS3",
            sk_html5:"HTML5",
            sk_responsiveDesign:"Responsive Design",
            sk_restfulApiDesign:"Conception de API basée sur l'architecture REST",
            sk_openSocial:"OpenSocial",
            sk_htmlWidget:"Widget HTML",
            sk_appStore:"App Store",
            sk_dataVisualisation:"Visualisation de données",
            sk_booksAndRecords:"Livres et Registres",
            sk_dataMashups:"Data Mashups",
            sk_soap:"SOAP",
            sk_webServices:"Services Web",
            sk_insurance:"Assurance",
            sk_claimsManagement:"Gestion de sinistres",
            sk_documentManagement:"Gestion de Documents",
            sk_bpm:"Business Process Re-engineering",
            sk_commercialInsurance:"Assurance Commerciale",
            sk_rulesEngine:"Rules engine",
            sk_acordDataStandards:"ACORD",
            sk_xml:"XML",
            sk_oracle:"Oracle",
            sk_workflow: "Flux de travail",
            sk_microsoftDotNet:"Microsoft .Net"
        },
        english:{
            hello:"hello",
            summary:"Bilingual product owner with 10 years experience looking for a position in the head office of a software company",
            index_core_comp:"Core Competencies",
            index_exp:"Experience",
            index_edu:"Education and Languages",
            index_other:"Other Interests",
            comp_translating_strategy:"Translating strategy into concrete actions and managing a team to execute against them.",
            comp_analysis_of_data: "Analysis of data to inform decisions",
            comp_intelligently_balancing:"Intelligently balancing competing priorities and producing requirements that are achievable and rapidly realise business value",
            comp_managing_relationships:"Managing relationships with external partners",

            exp_to:"To",
            exp_from:"From",
            exp_company:"Company",
            exp_location:"Location",
            exp_showHighlights:"Show",
            exp_hideHighlights:"Hide",
            exp_search:"Search",
            exp_otherKeywords:"Other Keywords",

            edu_educationTitle:"Education and Languages",
            edu_languagesTitle:"Languages",
            edu_edu1_from:"Sep 1998",
            edu_edu1_to:"Dec 1999",
            edu_edu1_institution:"ESCP EAP",
            edu_edu1_course:"Master in European Business",
            edu_edu1_country:"France",
            edu_edu1_city:"Paris",
            edu_edu2_from:"Sep 1995",
            edu_edu2_to:"Jun 1998",
            edu_edu2_institution:"Balliol College, University of Oxford",
            edu_edu2_course:"BA in Politics, Philosophy and Economics",
            edu_edu2_country:"England",
            edu_edu2_city:"Oxford",
            lang_lang1:"English",
            lang_lang1_level:"Mother tongue",
            lang_lang2:"French",
            lang_lang2_level:"Fluent",

            exp1_fromDate:"Nov 2012",
            exp1_toDate:"Present",
            exp1_company:"Thomson Reuters",
            exp1_country:"France",
            exp1_city:"Paris",
            exp1_title:"Product Owner",
            exp1_product:"Wealth Management App Store",
            exp1_problem:"The banks and online brokerages who are our clients struggle to create compelling investment tools for their retail investors.",
            exp1_solution:"The App Store enables third party developers to build HTML5 widgets for use in desktop and mobile browsers to solve this problem",

            exp2_fromDate:"Sep 2007",
            exp2_toDate:"Oct 2010",
            exp2_company:"Thomson Reuters",
            exp2_country:"England",
            exp2_city:"London",
            exp2_title:"Product Manager",
            exp2_product:"Thomson Reuters Knowledge Direct API",
            exp2_problem:"600 financial institutions globally, including Barclays, Credit Agricole and BNP Paribas, who publish market data on their websites use this SaaS solution.",
            exp2_solution:"Annual revenue is $120M and the product serves over 500M requests per month.",

            exp3_fromDate:"Sep 2005",
            exp3_toDate:"Sep 2007",
            exp3_company:"Riskclick",
            exp3_country:"United States",
            exp3_city:"New York",
            exp3_title:"Product Manager",
            exp3_product:"Underwriting Process Manager",
            exp3_problem:"Commercial insurance processes are highly manual, costly, and prone to errors, while at the same time requiring expert judgement from underwriters.",
            exp3_solution:"The product reduces manual re-entry of data, automates key risk screening steps and enables a structured exception handling workflow.",

            exp4_fromDate:"Feb 2000",
            exp4_toDate:"Aug 2005",
            exp4_company:"Riskclick",
            exp4_country:"England",
            exp4_city:"London",
            exp4_title:"Design Lead",
            exp4_product:"VNAB Claims Module",
            exp4_problem:"The product enables end-to-end online processing of claims for complex risks, replacing a costly paper-based process.",
            exp4_solution:"60,000 claims are processed using the system each year, saving the client over Euro 800K per year.",

            high1_description: "Managed a team of three product managers to define the agile backlog and direct the efforts of 20 offshore developers working on the project",
            high2_description: "Negotiated expectations on scope, timing and resource requirements with key stakeholders",
            high3_description: "Developed and refined a detailed financial model in Excel to support the ROI case for investment",
            high4_description: "Managed the creation of a partner program to engage 3rd party developers including StockTwits, eToro, Actiance",
            high5_description: "Presented to senior client decision-makers at E*Trade, Ameriprise, BNP Paribas, BBVA in order to obtain feedback",
            high6_description: "Drove cross-organisation discussions on pricing strategy",
            high7_description: "Conducted profitability analysis of client-base in order to determine how pricing structure should change",
            high8_description: "Defined pricing, support and order fulfilment processes for a number of product improvements",
            high9_description: "Managed product launch activities, creating marketing materials, training the global sales team and ensuring that support technicians were ready to field customer queries",
            high10_description: "Built and established method of working for a team of 4 offshore developers providing implementation support for new clients",
            high11_description: "Worked closely with account management to understand existing clients' issues with the product, and establishing product roadmap to meet these needs",
            high12_description: "Responsible for functional design, visual interface design of a highly customisable system to manage complex business processes",
            high13_description: "Defined functional specifications for and set priorities for 12 person offshore development team",
            high14_description: "Conducted extensive requirements gathering sessions with beta clients",
            high15_description: "Responsible for working with client to determine the specifications through workshops with user-groups. Cross-functional flow diagrams and UML class diagrams were used extensively",
            high16_description: "Worked with internal groups to ensure that the project would provide the necessary functionality and would meet KPQPs",

            sk_agile:"agile",
            sk_scrum:"SCRUM",
            sk_productOwner:"Product Owner",
            sk_projectManagement:"Project management",
            sk_stakeholderManagement:"Stakeholder Management",
            sk_expectationManagement:"Expectation Management",
            sk_roiAnalysis:"ROI analysis",
            sk_excel:"Excel",
            sk_financialModelling:"Financial modelling",
            sk_partnerProgram:"Partner program",
            sk_documentation:"Documentation",
            sk_relationshipManagement:"Relationship management",
            sk_presentationSkills:"Presentation skills",
            sk_clientContact:"Client contact",
            sk_requirementsGathering:"Requirements gathering",
            sk_requirementsSpecification:"Requirements specification",
            sk_pricingStrategy:"Pricing Strategy",
            sk_crossFunctionalCollaboration:"Cross-functional collaboration",
            sk_profitabilityAnalysis:"Profitability Analysis",
            sk_orderToCashProcess:"Order to Cash Process",
            sk_releaseNotes:"Release Notes",
            sk_marketing:"Marketing",
            sk_commercialStrategy:"Commercial Strategy",
            sk_productLaunch:"Product Launch",
            sk_salesSupport:"Sales support",
            sk_support:"Support",
            sk_peopleManagement:"People Management",
            sk_productRoadmap: "Product roadmap",
            sk_prioritisation:"Prioritisation",
            sk_functionalDesign: "Functional Design",
            sk_brd:"BRD",
            sk_mrd:"MRD",
            sk_userInterfaceDesign:"User Interface Design",
            sk_offshoreDevelopment:"Offshore Development",
            sk_userWorkshop:"User workshop",
            sk_uml:"UML",
            sk_flowDiagrams:"Flow diagrams",
            sk_userAcceptanceTesting:"User Acceptance Testing",
            sk_financialMarkets:"Financial Markets",
            sk_wealthManagement:"Wealth Management",
            sk_exchangeData:"Exchange Data",
            sk_crossSymbology:"Cross-symbology",
            sk_reuters:"Reuters",
            sk_timeSeries:"Time-Series",
            sk_fundamentals:"Fundamentals",
            sk_quoteData:"Quote",
            sk_newsFeed:"News",
            sk_css3:"CSS3",
            sk_html5:"HTML5",
            sk_responsiveDesign:"Responsive Design",
            sk_restfulApiDesign:"RESTful API Design",
            sk_openSocial:"OpenSocial",
            sk_htmlWidget:"HTML Widget",
            sk_appStore:"App Store",
            sk_dataVisualisation:"Data Visualisation",
            sk_booksAndRecords:"Books and Records",
            sk_dataMashups:"Data Mashups",
            sk_soap:"SOAP",
            sk_webServices:"Web services",
            sk_insurance:"Insurance",
            sk_claimsManagement:"Claims Management",
            sk_documentManagement:"Document Management",
            sk_bpm:"Business Process Re-engineering",
            sk_commercialInsurance:"Commercial insurance",
            sk_rulesEngine:"Rules engine",
            sk_workersCompensation:"Workers compensation",
            sk_acordDataStandards:"ACORD data standards",
            sk_xml:"XML",
            sk_oracle:"Oracle",
            sk_workflow: "Workflow",
            sk_microsoftDotNet:"Microsoft .Net"
        },
        localiseToEnglish: function(key) {
            var value = this.english[key];
            if (!value) {
                console.log("No english localisation for "+ key);
                return key;
            } else {
                return this.english[key];
            }
        }
    });

myAppServices.factory('myLocaleBroadcaster',function($rootScope) {
        var localeBroadcaster = {};
        localeBroadcaster.locale = "";

        localeBroadcaster.prepForBroadcast = function(locale) {
            this.locale = locale;
            this.broadcastLocale();
        };

        localeBroadcaster.broadcastLocale = function() {
            $rootScope.$broadcast('localeChanged');
        };

        return localeBroadcaster;
    });



