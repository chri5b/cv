'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myAppServices = angular.module('myApp.services', []).
    value('version', '0.1').
    value('experiences',
      [
        {
            experienceId:1,
            fromDate:"Nov 2012",
            toDate:"Dec 2013",
            company:"Thomson Reuters",
            location:
            {
                country:"France",
                city:"Paris"
            },
            title:"Product Owner",
            product:"Wealth Management App Store",
            problem:"The banks and online brokerages who are our clients struggle to create compelling investment tools for their retail investors.",
            solution:"The App Store enables third party developers to build HTML5 widgets for use in desktop and mobile browsers to solve this problem",
            highlightsVisible:false,
            highlights:
                [
                    {
                        id:"highlight1",
                        skills: [
                            {description:"Agile"},
                            {description:"SCRUM"},
                            {description:"Product Owner"
                              ,aspects:["Product Creation"]
                            },
                            {description:"People Management"
                              ,aspects:["People Management"]}
                        ],
                        description: "Managed a team of three product managers to define the agile backlog and direct the efforts of 20 offshore developers working on the project",
                        aspects:["People Management","Team Management"]
                    }
                ],
            otherSkills:
                [
                    {description:"Financial Markets"
                      ,aspects:["Business"]},
                    {description:"Wealth Management",aspects:["Business"]},
                    {description:"Exchange Data",aspects:["Business"]},
                    {description:"Market Data",aspects:["Business"]},
                    {description:"Cross Symbology",aspects:["Business"]},
                    {description:"Reuters",aspects:["Business"]},
                    {description:"Time Series",aspects:["Business"]},
                    {description:"Fundamentals",aspects:["Business"]},
                    {description:"Quote Data",aspects:["Business"]},
                    {description:"News Feed",aspects:["Business"]},
                    {description:"CSS3",aspects:["Technical","User Interface"]},
                    {description:"HTML5",aspects:["Technical","User Interface"]},
                    {description:"Responsive Design",aspects:["Technical","User Interface"]},
                    {description:"RESTful Api Design",aspects:["Technical","API"]},
                    {description:"OpenSocial",aspects:["Technical"]},
                    {description:"User Story",aspects:["Business"]},
                    {description:"HTML Widget",aspects:["Technical"]},
                    {description:"App Store",aspects:["Business"]},
                    {description:"Data Visualisation",aspects:["User Interface"]},
                    {description:"Books And Records",aspects:["API"]},
                    {description:"Data Mashups",aspects:["Technical","API"]},
                    {description:"Access",aspects:["Technical","Data Analysis"]},
                    {description:"SQL Server",aspects:["Technical","Data Analysis"]},
                    {description:"MVP",aspects:["Business"]}
                ]
            },
            {
                experienceId:2,
                fromDate:"Oct 2007",
                toDate:"Oct 2012",
                company:"Thomson Reuters",
                location:
                {
                    country:"England",
                    city:"London"
                },
                title:"Product Manager",
                product:"Thomson Reuters Knowledge Direct API",
                problem:"600 financial institutions globally, including Barclays, Credit Agricole and BNP Paribas, who publish market data on their websites use this SaaS solution.",
                solution:"Annual revenue is $120M and the product serves over 500M requests per month.",
                highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight7",
                            skills: [
                                {description:"Profitability Analysis",aspects:["Business","Data Analysis"]},
                                {description:"Pricing Strategy",aspects:["Business","Data Analysis"]}
                            ],
                            description: "Conducted profitability analysis of client-base in order to determine how to change the pricing structure"
                        },
                        {
                            id:"highlight8",
                            skills: [
                                {description:"Order to Cash Process",aspects:["Business"]},
                                {description:"Release Notes",aspects:["Business"]},
                                {description:"Marketing",aspects:["Business"]},
                                {description:"Commercial Strategy",aspects:["Business"]}
                            ],
                            description: "Defined pricing, support and order fulfilment processes for a number of product improvements"
                        },
                        {
                            id:"highlight9",
                            skills: [
                                {description:"Product Launch",aspects:["Business"]},
                                {description:"Cross Functional Collaboration",aspects:["Business"]},
                                {description:"Sales Support",aspects:["Business"]},
                                {description:"Support",aspects:["Business"]}
                            ],
                            description:"Managed global product launch activities, creating marketing materials, training the global sales team and ensuring that support technicians were ready to field customer queries"
                        },
                        {
                            id:"highlight10",
                            skills: [
                                {description:"People Management",aspects:["People Management","Business"]},
                                {description:"Relationship Management",aspects:["Relationship Management","Business"]}
                            ],
                            description: "Built and established method of working for a team of 4 offshore developers providing implementation support for new clients"
                        },
                        {
                            id:"highlight11",
                            skills: [
                                {description:"Product Roadmap",aspects:["Business"]},
                                {description:"Client Contact",aspects:["Business"]},
                                {description:"Use Cases",aspects:["Business"]},
                                {description:"Requirements Gathering",aspects:["Business"]},
                                {description:"Prioritisation",aspects:["Business"]}
                            ],
                            description: "Worked closely with account managers to understand existing clients' needs, and establishing the product roadmap to meet those needs"
                        }
                    ],
                otherSkills:
                    [
                        {description:"Financial Markets",aspects:["Business"]},
                        {description:"Wealth Management",aspects:["Business"]},
                        {description:"Exchange Data",aspects:["Business"]},
                        {description:"Cross Symbology",aspects:["Business"]},
                        {description:"Reuters",aspects:["Business"]},
                        {description:"Fundamentals",aspects:["Business"]},
                        {description:"Quote Data",aspects:["Business"]},
                        {description:"News Feed",aspects:["Business"]},
                        {description:"SOAP",aspects:["Technical","API"]},
                        {description:"Web Services",aspects:["Technical","API"]},
                        {description:"Access",aspects:["Technical","Data Analysis"]}
                    ]


            },
            {
                experienceId:3,
                fromDate:"Sep 2005",
                toDate:"Sep 2007",
                company:"Riskclick",
                location:
                {
                    country:"United States",
                    city:"New York"
                },
                title:"Product Manager",
                product:"Underwriting Process Manager",
                problem:"Commercial insurance processes are highly manual, costly, and prone to errors, while at the same time requiring expert judgement from underwriters",
                solution:"The product reduces manual re-entry of data, automates key risk screening steps and enables a structured exception handling workflow",
                highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight12",
                            skills: [
                                {description:"Functional Design",aspects:["Business","Product Creation"]},
                                {description:"BRD",aspects:["Business"]},
                                {description:"Use Cases",aspects:["Business"]},
                                {description:"MRD",aspects:["Business","Product Creation"]},
                                {description:"User Interface Design",aspects:["Technical","UI"]}
                            ],
                            description: "Responsible for functional design, visual interface design of a highly customisable system to manage complex business processes"
                        },
                        {
                            id:"highlight13",
                            skills: [
                                {description:"Offshore Development",aspects:["Relationship Management","Business","aspect_productCreation"]},
                                {description:"People Management",aspects:["People Management","Business"]},
                                {description:"Prioritisation",aspects:["Business","Product Creation","aspect_projectManagement"]}
                            ],
                            description: "Defined functional specifications for and set priorities for a 12 person offshore development team"
                        },
                        {
                            id:"highlight14",
                            skills: [
                                {description:"requirementsGathering",aspects:["Business","aspect_productCreation"]},
                                {description:"clientContact",aspects:["aspect_relationshipManagement","Business"]}
                            ],
                            description: "Conduted extensive requirements-gathering sessions with beta clients"
                        }
                    ],
                otherSkills:
                    [
                        {description:"Commercial Insurance",aspects:["Business"]},
                        {description:"Rules Engines",aspects:["Technical"]},
                        {description:"BPM",aspects:["Business"]},
                        {description:"ACORD Data Standards",aspects:["Technical"]},
                        {description:"XML",aspects:["Technical"]},
                        {description:"Oracle",aspects:["Technical"]},
                        {description:"Workflow",aspects:["Technical"]},
                        {description:"Microsoft .Net",aspects:["Technical"]}
                    ]
            },
            {
                experienceId:4,
                fromDate:"exp4_fromDate",
                toDate:"exp4_toDate",
                company:"exp4_company",
                location:
                {
                    country:"exp4_country",
                    city:"exp4_city"
                },
                title:"exp4_title",
                product:"exp4_product",
                problem:"exp4_problem",
                solution:"exp4_solution",
                highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight15",
                            skills: [
                                {description:"functionalDesign",aspects:["Business"]},
                                {description:"userWorkshop",aspects:["aspect_relationshipManagement","Business"]},
                                {description:"uml",aspects:["Business"]},
                                {description:"flowDiagrams",aspects:["Business"]},
                                {description:"uat",aspects:["Business"]}
                            ],

                            description: "high15_description"
                        },
                        {
                            id:"highlight16",
                            skills: [
                                {description:"requirementsSpecification",aspects:[]}
                            ],
                            description: "high16_description"
                        }
                    ],
                otherSkills:
                    [
                        {description:"insurance",aspects:["Business"]},
                        {description:"claimsManagement",aspects:["Business"]},
                        {description:"documentManagement",aspects:["Business"]},
                        {description:"bpm",aspects:["Business"]},
                        {description:"access",aspects:["Technical","aspect_dataAnalysis"]},
                        {description:"sqlServer",aspects:["Technical","aspect_dataAnalysis"]}

                    ]
            }
        ]
    ).
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
                        //console.log("No french localisation for "+ key);
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
            summary:"Chef de Produit expérimenté, basé à Paris, anglais courant",
            index_core_comp:"Compétences Clefs",
            index_exp:"Expérience",
            index_edu:"Education et Langues",
            index_other:"Autres Intérêts",
            index_professional:"Professionnelle",
            index_email:"Email",
            index_linkedIn:"Profil LinkedIn",
            comp_translating_strategy:"Elaboration d’une stratégie produit et gestion de projet pour assurer sa mise en œuvre",
            comp_analysis_of_data:"Création de spécifications fonctionnelles détaillées qui atteignent efficacement le but recherché",
            comp_intelligently_balancing:"Gestion de priorités concurrentes et négociation de l’étendue des fonctions avec les acteurs concerné",
            comp_managing_relationships:"Expérience de méthodologies de développement traditionnelles et Agile",
            comp_iam:"Je suis un chef de produit expérimenté avec de l'expérience en",
            comp_managingTeams:"Gestion d'équipe",
            comp_creatingProducts:"Création de produits informatiques",
            comp_fromScratch:" de A à Z qui atteignent le but voulu ",
            comp_managingRelationships:"Gestion de relations",
            comp_withExternal:"avec des partenaires externes",
            comp_clickOn:"Sélectionnez un lien pour voir l'expérience professionnelle pertinente",
            comp_iTake:"Je prends en charge des problèmes mal définis, et je dessine et gère la creation de produits qui les rėsolvent.",
            comp_imGood:"Je sais créer des modèles qui répondent aux questions telles que  'ce projet sera-t-il ",
            comp_imParticularly:"J'ai un talent particulier pour traduire entre les équipes ",
            comp_profitable:"profitable?'",
            comp_orWhat:"ou encore 'quelles ",
            comp_userStories:"Témoignages d'utilisateur",
            comp_wouldSolve:"résoudraient cette problématique métier?'",
            comp_technical:"Technique",
            comp_andthe:"et ",
            comp_business:"Métier",
            comp_teamsand:" afin de trouver le bon éilibre entre ce qui est voulu et ce qui est possible",
            comp_asyouwould:"Comme vous pouvez imaginer, je connais particulièrement bien",
            comp_functionalDesign:"Conception Fonctionnelle",
            comp_and:"et",
            comp_toName:"pour en nommer que certains.",
            comp_deBusiness:"Métier",
            comp_deTechnical:"Technique",
            comp_dePeopleManagement:"de Gestion d'Equipe",
            comp_deRelationshipManagement:"de Gestion de Partenariat",
            comp_deProjectManagement:"de Gestion de Projet",
            comp_deFunctionalDesign:"de Conception Fonctionnelle",
            comp_deDataAnalysis:"d'Analyse de Données",
            comp_deApi:"de API",
            comp_deUi:"de Conception d'Interface Utilisateur",
            comp_deProductCreation:"de Création de Produit",
            comp_agile:"Agile",
            comp_deAgile:"de Méthodologie Agile",
            comp_strengths:"Forces",
            comp_businessExperience:"Domaines métiers",
            comp_productFocus:"Domaines produits",
            comp_sdlc:"Cycle de vie du développement",
            comp_twelveYears:"Douze ans d'expérience de solutions B2B en mode SaaS",
            comp_complex:"Des produits complexes de ",
            comp_productsRequiring:"qui requièrent l'intégration",
            comp_highlyConfigurable:"Des solutions très paramètrables comprenant des ",
            comp_deWorkflow:"de Moteurs de Gestion de Flux de Travaux",
            comp_deRulesEngines:"de Moteurs de Règles",
            comp_deMrd:"d'Enoncés des exigences du marché",
            comp_deRequirementsGathering:"d'Analyse des besoins utilisateur",
            comp_deUserStories:"de 'User Stories'",
            mvp:"Minimal Viable Product",
            comp_deMvp:"du stratégie du 'minimal viable product'",
            useCases:"Cas d'utilisation",
            comp_deUseCases:"de cas d'utilisation",
            comp_dev:"Développement",
            comp_iterationFeedback:"Evaluation du produit",
            comp_testCaseReview:"Evaluation de Cas de Test",
            comp_preSales:"Aide à l'équipe de vente",
            comp_rootCause:"Identification de la cause racine",
            comp_processImprovement:"Amélioration de processus",
            uat:"Tests d'acceptation utilisateur",
            comp_supportTraining:"Formation de l'équipe de support technique",
            comp_salesTraining:"Formation de l'équipe de vente",
            comp_implementation:"Mise en oeuvre",
            comp_opsAndMaintenance:"Opérations et Maintenance",
            comp_obsolescence:"Obsolescence",
            comp_gapAnalysis:"Analyse des écarts",
            comp_revenueTracking:"Suivi du chiffre d'affaires",
            comp_planning:"Planification",
            comp_dePrioritisation:"de Prioritisation",
            comp_deUat:"de Tests d'acceptation utilisateur",
            comp_deMarketing:"de Marketing",
            exp_to:"A",
            exp_from:"De",
            exp_company:"Entreprise",
            exp_location:"Endroit",
            exp_showHighlights:"Plus",
            exp_hideHighlights:"Moins",
            exp_search:"Recherche",
            exp_otherKeywords:"Autres Mots Clefs",
            exp_showAll:"Enlever le filtre",
            Business:"Coté Métier",
            Technical:"Coté Technique",
            aspect_peopleManagement:"Gestion d'Equipe",
            aspect_relationshipManagement:"Gestion de Partenariat",
            aspect_projectManagement:"Gestion de Projet",
            aspect_dataAnalysis:"Analyse de Données",
            aspect_api:"API",
            aspect_ui:"Conception d'Interface Utilisateur",
            aspect_productCreation:"Création de Produit",
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
            edu_edu2_institution:"Balliol College, Université d'Oxford",
            edu_edu2_course:"Licence en Politique, Philosophie et Economie",
            edu_edu2_country:"Royaume-Uni",
            edu_edu2_city:"Oxford",
            lang_lang1:"Anglais",
            lang_lang1_level:"Langue maternelle",
            lang_lang2:"Français",
            lang_lang2_level:"Bilingue",
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
            exp3_solution:"Le produit réduit les coûts et les erreurs dans les processus d’assurance commerciale en réduisant les recopiages de données et en rendant automatiques certaines des étapes d’évaluation des risques.",
            exp4_fromDate:"Fev 2000",
            exp4_toDate:"Aug 2005",
            exp4_company:"Riskclick",
            exp4_country:"Royaume-Uni",
            exp4_city:"Londres",
            exp4_title:"Analyste des Spécifications Fonctionnelles",
            exp4_product:"VNAB Claims Module",
            exp4_problem:"La gestion de sinistres au sein de la bourse d’assurance hollandaise implique plusieurs entreprises et s’appuie essentiellement sur des documents physiques.",
            exp4_solution:"Le projet permet un traitement numérique des sinistres du début à la fin. 60 000 sinistres par an sont traités par le système et le projet a économisé plus de 800 000 Euro par an.",
            high1_description:"Gestion d’une équipe de 3 chef de produits junior afin d’établir et gérer le roadmap produit pour les 20 développeurs offshore",
            high2_description:"Négociation des ressources, de l’étendue des fonctions et du calendrier avec les acteurs concernés",
            high3_description:"Développement d’un modèle financier détaillé afin de justifier l’investissement dans le projet",
            high4_description:"Création d’un programme de partenariat pour engager les développeurs externes",
            high5_description:"Communication avec des clients comme E*TRADE, BNP Paribas et BBVA pour mieux comprendre les besoins du marché",
            high6_description:"Poursuite de discussions transversales portant sur notre stratégie de tarification",
            high7_description:"Analyse de profitabilité des clients dans le but de recommander un changement de politique commerciale",
            high8_description:"Définition de la politique de tarification, et des processus de support pour des améliorations du produit",
            high9_description:"Géstion des activités de lancement de produit, création de supports marketing, formation des équipes de vente et de support technique",
            high10_description:"Création d’une équipe de 4 développeurs basés en Biélorussie pour aider les clients à la mise en œuvre du produit",
            high11_description:"Etroite collaboration avec les account managers afin de comprendre les frustrations des clients actuels",
            high12_description:"Création des spécifications fonctionnelles et conception de l’interface utilisateur pour un système de Business Process Management",
            high13_description:"Création des spécifications fonctionnelles et définition de priorités pour une équipe de développement de 12 personnes.",
            high14_description:"Conduite de réunions avec les clients afin de définir leurs besoins",
            high15_description:"Création des spécifications fonctionnelles, des modèles domaine UML et des organigrammes du processus",
            high16_description:"Travail étroit avec les groupes internes de développement pour assurer que les besoins fonctionnels et de performance seraient atteints",
            agile:"Agile",
            scrum:"SCRUM",
            productOwner:"Product Owner",
            projectManagement:"Gestion de projet",
            stakeholderManagement:"Gestion des acteurs concernés",
            expectationManagement:"Gestion de calendrier",
            roiAnalysis:"Analyse de rentabilité",
            excel:"Excel",
            financialModelling:"Modélisation financière",
            partnerProgram:"Programme de partenariat",
            documentation:"Documentation",
            relationshipManagement:"Gestion de partnariat",
            presentationSkills:"Communication orale",
            clientContact:"Contact client",
            requirementsGathering:"Analyse des besoins",
            requirementsSpecification:"Rédaction des spécifications fonctionnelles",
            pricingStrategy:"Stratégie de tarification",
            crossFunctionalCollaboration:"Collaboration transversale",
            profitabilityAnalysis:"Analyse de rentabilité",
            orderToCashProcess:"Processus 'Order To Cash'",
            releaseNotes:"Release Notes",
            marketing:"Marketing",
            commercialStrategy:"Stratégie commerciale",
            productLaunch:"Lancement de produit",
            salesSupport:"Soutien aux équipes de vente",
            support:"Support",
            peopleManagement:"Gestion des personnes",
            productRoadmap:"Feuille de route produit",
            prioritisation:" ",
            functionalDesign:"Conception Fonctionnelle",
            brd:"Enoncé des exigences fonctionelles",
            mrd:"Enoncé des exigences du marché",
            userInterfaceDesign:"Conception des interfaces utilisateur",
            offshoreDevelopment:"Développement Offshore",
            userWorkshop:"Atelier pratique",
            uml:"UML",
            flowDiagrams:"Organigrammes du processus",
            userAcceptanceTesting:"Essais d'acceptation des utilisateurs",
            financialMarkets:"Marchés financiers",
            wealthManagement:"Gestion de patrimoine",
            exchangeData:"Données financières",
            crossSymbology:"Transcodification",
            reuters:"Reuters",
            timeSeries:"Données chronologiques",
            fundamentals:"Données fondamentaux",
            quoteData:"Quotation",
            newsFeed:"Flux de dépêches",
            css3:"CSS3",
            html5:"HTML5",
            responsiveDesign:"Responsive Design",
            restfulApiDesign:"Conception de API basée sur l'architecture REST",
            openSocial:"OpenSocial",
            htmlWidget:"Widget HTML",
            appStore:"App Store",
            dataVisualisation:"Visualisation de données",
            booksAndRecords:"Livres et Registres",
            dataMashups:"Data Mashups",
            soap:"SOAP",
            webServices:"Services Web",
            insurance:"Assurance",
            deInsurance:"d'Assurance",
            claimsManagement:"Gestion de sinistres",
            documentManagement:"Gestion de Documents",
            bpm:"Business Process Re-engineering",
            commercialInsurance:"Assurance Commerciale",
            rulesEngines:"Rules engines",
            acordDataStandards:"ACORD",
            xml:"XML",
            oracle:"Oracle",
            workflow:"Flux de travail",
            microsoftDotNet:"Microsoft .Net",
            access:"MS Access",
            sqlServer:"MS SQL Server",
            coInsurance:"Co-assurance",
            marketData:"Données financières",
            onlineInvestment:"Outils web pour aider les investisseurs",
            retailInvestors:"Investisseurs particuliers",
            selfDirected:"Investisseur autonome",
            api:"API",
            other_heading:"Autres Centres d'Intérêts",
            other_iHaveAn:"Je m'intéresse à la visualisation de données; dans mon temps de libre je crée des applications web telles que:",
            other_treemapVisualisation:"Visualisation en 'Treemap' des dernières dépêches publiées par le journal britannique ",
            other_workingExample:"Exemple interactif disponible",
            other_here:"ici",
            other_sourceCode:"Code source disponsible sur ",
            other_openSource:"Plugin Open Source pour",
            other_plugin:"qui visualise un document texte en utilisant une arborescence. Employé dans le service d'information juridique",
            other_asASearch:"comme outil de visualisation d'expressions cléfs"
        },
        english:{
            hello:"hello",
            summary:"Bilingual Head of Product Management based in Paris, France",
            index_core_comp:"Core Competencies",
            index_exp:"Experience",
            index_edu:"Education and Languages",
            index_other:"Other Interests",
            index_professional:"Professional",
            index_email:"Email",
            index_linkedIn:"LinkedIn Profile",

            comp_translating_strategy:"Translating strategy into concrete actions and managing a team to execute against them.",
            comp_analysis_of_data: "Analysis of data to inform decisions",
            comp_intelligently_balancing:"Intelligently balancing competing priorities and producing requirements that are achievable and rapidly realise business value",
            comp_managing_relationships:"Managing relationships with external partners",
            comp_iam:"I am a talented product manager with experience in",
            comp_managingTeams:"Managing teams",
            comp_creatingProducts:"Creating Products",
            comp_fromScratch:" from scratch which solve business problems",
            comp_managingRelationships:"Managing relationships",
            comp_withExternal:" with external partners",
            comp_clickOn:"Click on one of the items above to see more information on that experience",
            comp_iTake:"I take poorly defined problems, and I define and manage the delivery of highly focussed products which resolve them.",
            comp_imGood:"I'm good at building models that can answer questions like 'will this project be ",
            comp_imParticularly:"I'm particularly talented at translating between the",
            comp_profitable:"profitable?'",
            comp_orWhat:"or 'what ",
            comp_userStory:"User Story",
            comp_userStories:"user stories",
            comp_wouldSolve:"would solve this business problem?'",
            comp_technical:"Technical",
            comp_deTechnical:"Technical",
            comp_andthe:"and the ",
            comp_business:"Business",
            comp_deBusiness:"Business",
            comp_teamsand:" teams and at finding the right balance between the desirable and the possible",
            comp_asyouwould:"As you would expect, I have reams of experience of",
            comp_functionalDesign:"Functional Design",
            comp_and:"and",
            comp_toName:"to name but a few.",
            comp_dePeopleManagement:"People Management",
            comp_deRelationshipManagement:"Partner Management",
            comp_deProjectManagement:"Project Manager",
            comp_deFunctionalDesign:"Functional Design",
            comp_deDataAnalysis:"Data Analysis",
            comp_deApi:"API",
            comp_deUi:"UI Design",
            comp_deProductCreation:"Product Creation",
            comp_agile:"Agile",
            comp_deAgile:"Agile Methodology",
            comp_strengths:"Strengths",
            comp_businessExperience:"Business Experience",
            comp_productFocus:"Product Focus",
            comp_sdlc:"Software Development Lifecycle",

            comp_twelveYears:"12 years experience of subscription-based B2B SaaS products",
            comp_complex:"Complex",
            comp_productsRequiring:"products requiring integration",
            comp_highlyConfigurable:"Highly configurable solutions involving",
            comp_deWorkflow:"Workflow",
            comp_deRulesEngine:"Rules Engine",

            comp_deMrd:"Market Requirements Document",
            comp_deRequirementsGathering:"Requirements Gathering",
            comp_deUserStories:"User Story",
            mvp:"'Minimal Viable Product'",
            comp_deMvp:"Minimal Viable Product",
            useCases:"Use Case",
            comp_deUseCases:"Use Case",
            comp_dev:"Development",
            comp_iterationFeedback:"Iteration Feedback",
            comp_testCaseReview:"Test Case Review",
            comp_preSales:"Pre-sales Support",
            comp_rootCause:"Root Cause Analysis",
            comp_processImprovement:"Process Improvement",
            uat:"User Acceptance Testing",
            comp_supportTraining:"Technical Support team Training",
            comp_salesTraining:"Sales Team Training",
            comp_implementation:"Implementation",
            comp_opsAndMaintenance:"Operations and Maintenance",
            comp_obsolescence:"Obsolescence",
            comp_gapAnalysis:"Gap Analysis",
            comp_revenueTracking:"Revenue Tracking",
            comp_planning:"Planning",
            comp_dePrioritisation:"Prioritisation",
            comp_deUat:"UAT",
            comp_deMarketing:"Marketing",

            exp_to:"To",
            exp_from:"From",
            exp_company:"Company",
            exp_location:"Location",
            exp_showHighlights:"Show",
            exp_hideHighlights:"Hide",
            exp_search:"Search",
            exp_otherKeywords:"Other Keywords",
            exp_showAll:"Show all experience",

            Business:"Business",
            Technical:"Technical",
            aspect_peopleManagement:"People Management",
            aspect_relationshipManagement:"Relationship Management",
            aspect_projectManagement:"Project Management",
            aspect_dataAnalysis:"Data Analysis",
            aspect_api:"API",
            aspect_ui:"UI Design",
            aspect_productCreation:"Product Creation",
            aspect_deBusiness:"Business",
            aspect_deTechnical:"Technical",
            aspect_dePeopleManagement:"People Management",
            aspect_deRelationshipManagement:"Relationship Management",
            aspect_deProjectManagement:"Project Management",
            aspect_deDataAnalysis:"Data Analysis",
            aspect_deApi:"API",
            aspect_deUi:"UI Design",
            aspect_deProductCreation:"Product Creation",

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

            agile:"Agile",
            scrum:"SCRUM",
            productOwner:"Product Owner",
            projectManagement:"Project management",
            stakeholderManagement:"Stakeholder Management",
            expectationManagement:"Expectation Management",
            roiAnalysis:"ROI analysis",
            excel:"Excel",
            financialModelling:"Financial modelling",
            partnerProgram:"Partner program",
            documentation:"Documentation",
            relationshipManagement:"Relationship management",
            presentationSkills:"Presentation skills",
            clientContact:"Client contact",
            requirementsGathering:"Requirements gathering",
            requirementsSpecification:"Requirements specification",
            pricingStrategy:"Pricing Strategy",
            crossFunctionalCollaboration:"Cross-functional collaboration",
            profitabilityAnalysis:"Profitability Analysis",
            orderToCashProcess:"Order to Cash Process",
            releaseNotes:"Release Notes",
            marketing:"Marketing",
            commercialStrategy:"Commercial Strategy",
            productLaunch:"Product Launch",
            salesSupport:"Sales support",
            support:"Support",
            peopleManagement:"People Management",
            productRoadmap: "Product roadmap",
            prioritisation:"Prioritisation",
            functionalDesign: "Functional Design",
            brd:"BRD",
            mrd:"MRD",
            userInterfaceDesign:"User Interface Design",
            offshoreDevelopment:"Offshore Development",
            userWorkshop:"User workshop",
            uml:"UML",
            flowDiagrams:"Flow diagrams",
            userAcceptanceTesting:"User Acceptance Testing",
            financialMarkets:"Financial Markets",
            wealthManagement:"Wealth Management",
            exchangeData:"Exchange Data",
            crossSymbology:"Cross-symbology",
            reuters:"Reuters",
            timeSeries:"Time-Series",
            fundamentals:"Fundamentals",
            quoteData:"Quote",
            newsFeed:"News",
            css3:"CSS3",
            html5:"HTML5",
            responsiveDesign:"Responsive Design",
            restfulApiDesign:"RESTful API Design",
            openSocial:"OpenSocial",
            htmlWidget:"HTML Widget",
            appStore:"App Store",
            dataVisualisation:"Data Visualisation",
            booksAndRecords:"Books and Records",
            dataMashups:"Data Mashups",
            soap:"SOAP",
            webServices:"Web services",
            insurance:"Insurance",
            claimsManagement:"Claims Management",
            documentManagement:"Document Management",
            bpm:"Business Process Re-engineering",
            commercialInsurance:"Commercial insurance",
            rulesEngines:"Rules engines",
            workersCompensation:"Workers compensation",
            acordDataStandards:"ACORD data standards",
            xml:"XML",
            oracle:"Oracle",
            workflow: "Workflow",
            microsoftDotNet:"Microsoft .Net",
            access:"MS Access",
            sqlServer:"MS SQL Server",
            coInsurance:"Co-insurance",
            marketData:"Market Data",
            onlineInvestment:"Web-based investment tools",
            retailInvestors:"Retail investors",
            selfDirected:"Self-directed investors",
            api:"API",

            other_heading:"Other",
            other_iHaveAn:"I have an interest in data visualisation which I pursue in my spare time by writing web applications like the following:",
            other_treemapVisualisation:" Treemap visualisation of the latest stories published by the UK newspaper, ",
            other_workingExample:"Working example available",
            other_here:"here",
            other_sourceCode:" Source code available on ",
            other_openSource: "Open Source",
            other_plugin:"plugin which visualises text using a Word Tree. Used in",
            other_asASearch:" as a search term visualisation tool."
        },
        localiseToEnglish: function(key) {
            var value = this.english[key];
            if (!value) {
                //console.log("No english localisation for "+ key);
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

myAppServices.factory('myLocationBroadcaster',function($rootScope) {
    var locationBroadcaster = {};
    locationBroadcaster.location = "";

    locationBroadcaster.prepForBroadcast = function(location) {
        this.location = location;
        this.broadcastLocation();
    };

    locationBroadcaster.broadcastLocation = function() {
        $rootScope.$broadcast('locationChanged');
    }

    return locationBroadcaster;
});
