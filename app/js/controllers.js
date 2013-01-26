'use strict';

/* Controllers */

function HeaderCtrl($scope,localisation,myLocaleBroadcaster) {
    $scope.FullName = "Chris Barrett";


    $scope.updateLabels = function() {
        $scope.Summary = localisation.localise($scope.locale,"summary");
        $scope.CoreCompetencies = localisation.localise($scope.locale,"index_core_comp");
        $scope.Experience = localisation.localise($scope.locale,"index_exp");
        $scope.Education = localisation.localise($scope.locale,"index_edu");
        $scope.OtherInterests = localisation.localise($scope.locale,"index_other");
    }

    $scope.updateLabels();

    $scope.changeLocale = function(locale) {
        console.log(locale);
        myLocaleBroadcaster.prepForBroadcast(locale);
    };

    $scope.$on('localeChanged', function() {
        $scope.locale = myLocaleBroadcaster.locale;
        $scope.updateLabels();
    })
}
HeaderCtrl.$inject = ['$scope','localisation','myLocaleBroadcaster'];

function CompetenciesCtrl($scope,localisation,myLocaleBroadcaster) {

    $scope.updateLabels = function() {
        $scope.CoreCompetencies = localisation.localise($scope.locale,"index_core_comp");
        $scope.competencies = [
            localisation.localise($scope.locale,"comp_translating_strategy"),
            localisation.localise($scope.locale,"comp_analysis_of_data"),
            localisation.localise($scope.locale,"comp_intelligently_balancing"),
            localisation.localise($scope.locale,"comp_managing_relationships")
        ];
        $scope.iam = localisation.localise($scope.locale,"comp_iam");
        $scope.managingTeams = localisation.localise($scope.locale,"aspect_peopleManagement");
        $scope.peopleManagement = localisation.localise($scope.locale,"aspect_peopleManagement");
        $scope.productCreation = localisation.localise($scope.locale,"aspect_productCreation");
        $scope.creatingProducts = localisation.localise($scope.locale,"comp_creatingProducts");
        $scope.fromScratch = localisation.localise($scope.locale,"comp_fromScratch");
        $scope.relationshipManagement = localisation.localise($scope.locale,"aspect_relationshipManagement");
        $scope.managingRelationships = localisation.localise($scope.locale,"comp_managingRelationships");
        $scope.withExternal = localisation.localise($scope.locale,"comp_withExternal");
        $scope.clickOn = localisation.localise($scope.locale,"comp_clickOn");
        $scope.itake = localisation.localise($scope.locale,"comp_iTake");
        $scope.imgood = localisation.localise($scope.locale,"comp_imGood");
        $scope.imparticularly = localisation.localise($scope.locale,"comp_imParticularly");
        $scope.profitable = localisation.localise($scope.locale,"comp_profitable");
        $scope.roi = localisation.localise($scope.locale,"aspect_deDataAnalysis");
        $scope.orwhat = localisation.localise($scope.locale,"comp_orWhat");
        $scope.userStories= localisation.localise($scope.locale,"comp_userStories");
        $scope.wouldSolve = localisation.localise($scope.locale,"comp_wouldSolve");
        $scope.technical = localisation.localise($scope.locale,"comp_technical");
        $scope.andthe = localisation.localise($scope.locale,"comp_andthe");
        $scope.business = localisation.localise($scope.locale,"comp_business");
        $scope.teamsand = localisation.localise($scope.locale,"comp_teamsand");
        $scope.asyouwould = localisation.localise($scope.locale,"comp_asyouwould");
        $scope.functionalDesign = localisation.localise($scope.locale,"comp_functionalDesign");
        $scope.projectManagement = localisation.localise($scope.locale,"aspect_projectManagement");
        $scope.and = localisation.localise($scope.locale,"comp_and");
        $scope.dataAnalysis = localisation.localise($scope.locale,"aspect_dataAnalysis");
        $scope.toname = localisation.localise($scope.locale,"comp_toName");
    };

    $scope.updateLabels();

    $scope.$on('localeChanged', function() {
        $scope.locale = myLocaleBroadcaster.locale;
        $scope.updateLabels();
    })
}
CompetenciesCtrl.$inject = ['$scope','localisation','myLocaleBroadcaster'];

function ExperienceCtrl($scope,localisation,myLocaleBroadcaster,$location) {

    $scope.query = $location.search().q || "";

    $scope.localeIsFrench = function() {
        return $scope.locale == "fr-fr";
    }

    $scope.updateLabels = function() {
        $scope.Experience = localisation.localise($scope.locale,"index_exp");
        $scope.Professional = localisation.localise($scope.locale,"index_professional");
        $scope.uiLabels = {
            to:localisation.localise($scope.locale,"exp_to"),
            from:localisation.localise($scope.locale,"exp_from"),
            company:localisation.localise($scope.locale,"exp_company"),
            location:localisation.localise($scope.locale,"exp_location"),
            showHighlights:localisation.localise($scope.locale,"exp_showHighlights"),
            hideHighlights:localisation.localise($scope.locale,"exp_hideHighlights"),
            search:localisation.localise($scope.locale,"exp_search"),
            otherKeywords:localisation.localise($scope.locale,"exp_otherKeywords")
        };
        $scope.experiences = [
            {
                experienceId:1,
                fromDate:localisation.localise($scope.locale,"exp1_fromDate"),
                toDate:localisation.localise($scope.locale,"exp1_toDate"),
                company:localisation.localise($scope.locale,"exp1_company"),
                location:
                {
                    country:localisation.localise($scope.locale,"exp1_country"),
                    city:localisation.localise($scope.locale,"exp1_city")
                },
                title:localisation.localise($scope.locale,"exp1_title"),
                product:localisation.localise($scope.locale,"exp1_product"),
                problem:localisation.localise($scope.locale,"exp1_problem"),
                solution:localisation.localise($scope.locale,"exp1_solution"),
                highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight1",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_agile"),aspects:[]},
                                {description:localisation.localise($scope.locale,"sk_scrum"),aspects:[]},
                                {description:localisation.localise($scope.locale,"sk_productOwner"),aspects:[localisation.localise($scope.locale,"aspect_productCreation")]},
                                {description:localisation.localise($scope.locale,"sk_peopleManagement"),aspects:[localisation.localise($scope.locale,"aspect_peopleManagement")]}
                            ],
                            description: localisation.localise($scope.locale,"high1_description"),
                            aspects:["People Management","Team Management"]
                        },
                        {
                            id:"highlight2",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_projectManagement"),aspects:[localisation.localise($scope.locale,"aspect_projectManagement"),localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_stakeholderManagement"),aspects:[localisation.localise($scope.locale,"aspect_projectManagement"),localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_expectationManagement"),aspects:[localisation.localise($scope.locale,"aspect_projectManagement"),localisation.localise($scope.locale,"aspect_business")]}
                            ],
                            description: localisation.localise($scope.locale,"high2_description")
                        },
                        {
                            id:"highlight3",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_roiAnalysis"),aspects:[localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_dataAnalysis")]},
                                {description:localisation.localise($scope.locale,"sk_excel"),aspects:[localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_dataAnalysis")]},
                                {description:localisation.localise($scope.locale,"sk_financialModelling"),aspects:[localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_dataAnalysis")]}
                            ],
                            description: localisation.localise($scope.locale,"high3_description")
                        },
                        {
                            id:"highlight4",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_partnerProgram"),aspects:[localisation.localise($scope.locale,"aspect_relationshipManagement"),localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_documentation"),aspects:[]},
                                {description:localisation.localise($scope.locale,"sk_relationshipManagement"),aspects:[localisation.localise($scope.locale,"aspect_relationshipManagement"),localisation.localise($scope.locale,"aspect_business")]}
                                ],
                            description: localisation.localise($scope.locale,"high4_description")
                        },
                        {
                            id:"highlight5",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_presentationSkills"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_clientContact"),aspects:[localisation.localise($scope.locale,"aspect_relationshipManagement"),localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_requirementsGathering"),aspects:[localisation.localise($scope.locale,"aspect_business")]}
                            ],
                            description: localisation.localise($scope.locale,"high5_description")
                        },
                        {
                            id:"highlight6",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_pricingStrategy"),aspects:[localisation.localise($scope.locale,"aspect_dataAnalysis"),localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_crossFunctionalCollaboration"),aspects:[localisation.localise($scope.locale,"aspect_business")]}
                                ],
                            description: localisation.localise($scope.locale,"high6_description")
                        }
                    ],
                otherSkills:
                    [
                        {description:localisation.localise($scope.locale,"sk_financialMarkets"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_wealthManagement"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_exchangeData"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_crossSymbology"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_reuters"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_timeSeries"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_fundamentals"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_quoteData"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_newsFeed"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_css3"),aspects:[localisation.localise($scope.locale,"aspect_technical"),localisation.localise($scope.locale,"aspect_ui")]},
                        {description:localisation.localise($scope.locale,"sk_html5"),aspects:[localisation.localise($scope.locale,"aspect_technical"),localisation.localise($scope.locale,"aspect_ui")]},
                        {description:localisation.localise($scope.locale,"sk_responsiveDesign"),aspects:[localisation.localise($scope.locale,"aspect_technical"),localisation.localise($scope.locale,"aspect_ui")]},
                        {description:localisation.localise($scope.locale,"sk_restfulApiDesign"),aspects:[localisation.localise($scope.locale,"aspect_technical"),localisation.localise($scope.locale,"aspect_api")]},
                        {description:localisation.localise($scope.locale,"sk_openSocial"),aspects:[localisation.localise($scope.locale,"aspect_technical")]},
                        {description:localisation.localise($scope.locale,"sk_htmlWidget"),aspects:[localisation.localise($scope.locale,"aspect_technical")]},
                        {description:localisation.localise($scope.locale,"sk_appStore"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_dataVisualisation"),aspects:[localisation.localise($scope.locale,"aspect_ui")]},
                        {description:localisation.localise($scope.locale,"sk_booksAndRecords"),aspects:[localisation.localise($scope.locale,"aspect_api")]},
                        {description:localisation.localise($scope.locale,"sk_dataMashups"),aspects:[localisation.localise($scope.locale,"aspect_technical"),localisation.localise($scope.locale,"aspect_api")]}
                    ]
            },
            {
                experienceId:2,
                fromDate:localisation.localise($scope.locale,"exp2_fromDate"),
                toDate:localisation.localise($scope.locale,"exp2_toDate"),
                company:localisation.localise($scope.locale,"exp2_company"),
                location:
                {
                    country:localisation.localise($scope.locale,"exp2_country"),
                    city:localisation.localise($scope.locale,"exp2_city")
                },
                title:localisation.localise($scope.locale,"exp2_title"),
                product:localisation.localise($scope.locale,"exp2_product"),
                problem:localisation.localise($scope.locale,"exp2_problem"),
                solution:localisation.localise($scope.locale,"exp2_solution"),
                highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight7",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_profitabilityAnalysis"),aspects:[localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_dataAnalysis")]},
                                {description:localisation.localise($scope.locale,"sk_pricingStrategy"),aspects:[localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_dataAnalysis")]}
                            ],
                            description: localisation.localise($scope.locale,"high7_description")
                        },
                        {
                            id:"highlight8",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_orderToCashProcess"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_releaseNotes"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_marketing"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_commercialStrategy"),aspects:[localisation.localise($scope.locale,"aspect_business")]}
                            ],
                            description: localisation.localise($scope.locale,"high8_description")
                        },
                        {
                            id:"highlight9",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_productLaunch"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_crossFunctionalCollaboration"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_salesSupport"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_support"),aspects:[localisation.localise($scope.locale,"aspect_business")]}
                            ],
                            description:localisation.localise($scope.locale,"high9_description")},
                        {
                            id:"highlight10",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_peopleManagement"),aspects:[localisation.localise($scope.locale,"aspect_peopleManagement"),localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_relationshipManagement"),aspects:[localisation.localise($scope.locale,"aspect_relationshipManagement"),localisation.localise($scope.locale,"aspect_business")]}
                            ],
                            description: localisation.localise($scope.locale,"high10_description")
                        },
                        {
                            id:"highlight11",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_productRoadmap"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_clientContact"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_requirementsGathering"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_prioritisation"),aspects:[localisation.localise($scope.locale,"aspect_business")]}
                            ],
                            description: localisation.localise($scope.locale,"high11_description")                    }
                    ],
                otherSkills:
                    [
                        {description:localisation.localise($scope.locale,"sk_financialMarkets"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_wealthManagement"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_exchangeData"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_crossSymbology"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_reuters"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_fundamentals"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_quoteData"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_newsFeed"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_soap"),aspects:[localisation.localise($scope.locale,"aspect_technical"),localisation.localise($scope.locale,"aspect_api")]},
                        {description:localisation.localise($scope.locale,"sk_webServices"),aspects:[localisation.localise($scope.locale,"aspect_technical"),localisation.localise($scope.locale,"aspect_api")]}
                    ]


            },
            {
                experienceId:3,
                fromDate:localisation.localise($scope.locale,"exp3_fromDate"),
                toDate:localisation.localise($scope.locale,"exp3_toDate"),
                company:localisation.localise($scope.locale,"exp3_company"),
                location:
                {
                    country:localisation.localise($scope.locale,"exp3_country"),
                    city:localisation.localise($scope.locale,"exp3_city")
                },
                title:localisation.localise($scope.locale,"exp3_title"),
                product:localisation.localise($scope.locale,"exp3_product"),
                problem:localisation.localise($scope.locale,"exp3_problem"),
                solution:localisation.localise($scope.locale,"exp3_solution"),
                highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight12",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_functionalDesign"),aspects:[localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_productCreation")]},
                                {description:localisation.localise($scope.locale,"sk_brd"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_mrd"),aspects:[localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_productCreation")]},
                                {description:localisation.localise($scope.locale,"sk_userInterfaceDesign"),aspects:[localisation.localise($scope.locale,"aspect_technical"),localisation.localise($scope.locale,"aspect_ui")]}
                            ],
                            description: localisation.localise($scope.locale,"high12_description")
                        },
                        {
                            id:"highlight13",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_offshoreDevelopment"),aspects:[localisation.localise($scope.locale,"aspect_relationshipManagement"),localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_productCreation")]},
                                {description:localisation.localise($scope.locale,"sk_peopleManagement"),aspects:[localisation.localise($scope.locale,"aspect_peopleManagement"),localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_prioritisation"),aspects:[localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_productCreation")]}
                            ],
                            description: localisation.localise($scope.locale,"high13_description")
                        },
                        {
                            id:"highlight14",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_requirementsGathering"),aspects:[localisation.localise($scope.locale,"aspect_business"),localisation.localise($scope.locale,"aspect_productCreation")]},
                                {description:localisation.localise($scope.locale,"sk_clientContact"),aspects:[localisation.localise($scope.locale,"aspect_relationshipManagement"),localisation.localise($scope.locale,"aspect_business")]}
                            ],
                            description: localisation.localise($scope.locale,"high14_description")
                        }
                    ],
                otherSkills:
                    [
                        {description:localisation.localise($scope.locale,"sk_commercialInsurance"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_rulesEngine"),aspects:[localisation.localise($scope.locale,"aspect_technical")]},
                        {description:localisation.localise($scope.locale,"sk_bpm"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_acordDataStandards"),aspects:[localisation.localise($scope.locale,"aspect_technical")]},
                        {description:localisation.localise($scope.locale,"sk_xml"),aspects:[localisation.localise($scope.locale,"aspect_technical")]},
                        {description:localisation.localise($scope.locale,"sk_oracle"),aspects:[localisation.localise($scope.locale,"aspect_technical")]},
                        {description:localisation.localise($scope.locale,"sk_workflow"),aspects:[localisation.localise($scope.locale,"aspect_technical")]},
                        {description:localisation.localise($scope.locale,"sk_microsoftDotNet"),aspects:[localisation.localise($scope.locale,"aspect_technical")]}
                    ]
            },
            {
                experienceId:4,
                fromDate:localisation.localise($scope.locale,"exp4_fromDate"),
                toDate:localisation.localise($scope.locale,"exp4_toDate"),
                company:localisation.localise($scope.locale,"exp4_company"),
                location:
                {
                    country:localisation.localise($scope.locale,"exp4_country"),
                    city:localisation.localise($scope.locale,"exp4_city")
                },
                title:localisation.localise($scope.locale,"exp4_title"),
                product:localisation.localise($scope.locale,"exp4_product"),
                problem:localisation.localise($scope.locale,"exp4_problem"),
                solution:localisation.localise($scope.locale,"exp4_solution"),
                highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight15",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_functionalDesign"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_userWorkshop"),aspects:[localisation.localise($scope.locale,"aspect_relationshipManagement"),localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_uml"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_flowDiagrams"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                                {description:localisation.localise($scope.locale,"sk_userAcceptanceTesting"),aspects:[localisation.localise($scope.locale,"aspect_business")]}
                            ],

                            description: localisation.localise($scope.locale,"high15_description")
                        },
                        {
                            id:"highlight16",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_requirementsSpecification"),aspects:[]}
                            ],
                            description: localisation.localise($scope.locale,"high16_description")
                        }
                    ],
                otherSkills:
                    [
                        {description:localisation.localise($scope.locale,"sk_insurance"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_claimsManagement"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_documentManagement"),aspects:[localisation.localise($scope.locale,"aspect_business")]},
                        {description:localisation.localise($scope.locale,"sk_bpm"),aspects:[localisation.localise($scope.locale,"aspect_business")]}
                    ]
            }
        ];
    }

    $scope.updateLabels();

    $scope.clearQuery = function() {
        $scope.query = "";
        $location.search("q","");
    }

    $scope.$on('localeChanged', function() {
        $scope.locale = myLocaleBroadcaster.locale;
        $scope.updateLabels();
    })


    $scope.toggleHighlights = function(experienceId) {
        for(var i = 0; i < $scope.experiences.length ; i++ ) {
            if($scope.experiences[i].experienceId == experienceId) {
                $scope.experiences[i].highlightsVisible = !$scope.experiences[i].highlightsVisible;
            }
        }

    }
}
ExperienceCtrl.$inject = ['$scope','localisation','myLocaleBroadcaster','$location'];

function EducationCtrl($scope,localisation,myLocaleBroadcaster) {
    $scope.updateLabels = function() {
        $scope.educationTitle = localisation.localise($scope.locale,"edu_educationTitle");
        $scope.languagesTitle = localisation.localise($scope.locale,"edu_languagesTitle");

        $scope.languages = [
            {
                name:localisation.localise($scope.locale,"lang_lang1"),
                level:localisation.localise($scope.locale,"lang_lang1_level")
            },
            {
                name:localisation.localise($scope.locale,"lang_lang2"),
                level:localisation.localise($scope.locale,"lang_lang2_level")
            }
        ];

        $scope.education = [
            {
                fromDate:localisation.localise($scope.locale,"edu_edu1_from"),
                toDate:localisation.localise($scope.locale,"edu_edu1_to"),
                institution:localisation.localise($scope.locale,"edu_edu1_institution"),
                course:localisation.localise($scope.locale,"edu_edu1_course"),
                location: {
                    country:localisation.localise($scope.locale,"edu_edu1_country"),
                    city:localisation.localise($scope.locale,"edu_edu1_city")
                }
            },
            {
                fromDate:localisation.localise($scope.locale,"edu_edu2_from"),
                toDate:localisation.localise($scope.locale,"edu_edu2_to"),
                institution:localisation.localise($scope.locale,"edu_edu2_institution"),
                course:localisation.localise($scope.locale,"edu_edu2_course"),
                location: {
                    country:localisation.localise($scope.locale,"edu_edu2_country"),
                    city:localisation.localise($scope.locale,"edu_edu2_city")
                }
            }
        ];
    };

    $scope.updateLabels();

    $scope.$on('localeChanged', function() {
        $scope.locale = myLocaleBroadcaster.locale;
        $scope.updateLabels();
    })

}
EducationCtrl.$inject = ['$scope','localisation','myLocaleBroadcaster'];