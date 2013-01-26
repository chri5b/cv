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
    }

    $scope.updateLabels();

    $scope.$on('localeChanged', function() {
        $scope.locale = myLocaleBroadcaster.locale;
        $scope.updateLabels();
    })
}
CompetenciesCtrl.$inject = ['$scope','localisation','myLocaleBroadcaster'];

function ExperienceCtrl($scope,localisation,myLocaleBroadcaster) {

    $scope.query = "";

    $scope.updateLabels = function() {
        $scope.Experience = localisation.localise($scope.locale,"index_exp");
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
                highlightsVisible:$scope.experiences?$scope.experiences[0].highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight1",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_agile"),aspects:[]},
                                {description:localisation.localise($scope.locale,"sk_scrum"),aspects:[]},
                                {description:localisation.localise($scope.locale,"sk_productOwner"),aspects:[]}
                            ],
                            description: localisation.localise($scope.locale,"high1_description"),
                            aspects:["creatingProducts","managingTeams"]
                        },
                        {
                            id:"highlight2",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_projectManagement"),aspects:["managingProjects","business"]},
                                {description:localisation.localise($scope.locale,"sk_stakeholderManagement"),aspects:["managingProjects","business"]},
                                {description:localisation.localise($scope.locale,"sk_expectationManagement"),aspects:["managingProjects","business"]}
                            ],
                            description: localisation.localise($scope.locale,"high2_description")
                        },
                        {
                            id:"highlight3",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_roiAnalysis"),aspects:["business","analysingData"]},
                                {description:localisation.localise($scope.locale,"sk_excel"),aspects:["business","analysingData"]},
                                {description:localisation.localise($scope.locale,"sk_financialModelling"),aspects:["business","analysingData"]}
                            ],
                            description: localisation.localise($scope.locale,"high3_description")
                        },
                        {
                            id:"highlight4",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_partnerProgram"),aspects:["managingRelationships","business"]},
                                {description:localisation.localise($scope.locale,"sk_documentation"),aspects:[]},
                                {description:localisation.localise($scope.locale,"sk_relationshipManagement"),aspects:["managingRelationships","business"]}
                                ],
                            description: localisation.localise($scope.locale,"high4_description")
                        },
                        {
                            id:"highlight5",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_presentationSkills"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_clientContact"),aspects:["managingRelationships","business"]},
                                {description:localisation.localise($scope.locale,"sk_requirementsGathering"),aspects:["business"]}
                            ],
                            description: localisation.localise($scope.locale,"high5_description")
                        },
                        {
                            id:"highlight6",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_pricingStrategy"),aspects:["analysingData","business"]},
                                {description:localisation.localise($scope.locale,"sk_crossFunctionalCollaboration"),aspects:["business"]}
                                ],
                            description: localisation.localise($scope.locale,"high6_description")
                        }
                    ],
                otherSkills:
                    [
                        {description:localisation.localise($scope.locale,"sk_financialMarkets"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_wealthManagement"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_exchangeData"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_crossSymbology"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_reuters"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_timeSeries"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_fundamentals"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_quoteData"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_newsFeed"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_css3"),aspects:["technical","UI"]},
                        {description:localisation.localise($scope.locale,"sk_html5"),aspects:["technical","UI"]},
                        {description:localisation.localise($scope.locale,"sk_responsiveDesign"),aspects:["technical","UI"]},
                        {description:localisation.localise($scope.locale,"sk_restfulApiDesign"),aspects:["technical","API"]},
                        {description:localisation.localise($scope.locale,"sk_openSocial"),aspects:["technical"]},
                        {description:localisation.localise($scope.locale,"sk_htmlWidget"),aspects:["technical"]},
                        {description:localisation.localise($scope.locale,"sk_appStore"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_dataVisualisation"),aspects:["UI"]},
                        {description:localisation.localise($scope.locale,"sk_booksAndRecords"),aspects:["API"]},
                        {description:localisation.localise($scope.locale,"sk_dataMashups"),aspects:["technical","API"]}
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
                highlightsVisible:$scope.experiences?$scope.experiences[1].highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight7",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_profitabilityAnalysis"),aspects:["business","analysingData"]},
                                {description:localisation.localise($scope.locale,"sk_pricingStrategy"),aspects:["business","analysingData"]}
                            ],
                            description: localisation.localise($scope.locale,"high7_description")
                        },
                        {
                            id:"highlight8",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_orderToCashProcess"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_releaseNotes"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_marketing"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_commercialStrategy"),aspects:["business"]}
                            ],
                            description: localisation.localise($scope.locale,"high8_description")
                        },
                        {
                            id:"highlight9",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_productLaunch"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_crossFunctionalCollaboration"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_salesSupport"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_support"),aspects:["business"]}
                            ],
                            description:localisation.localise($scope.locale,"high9_description")},
                        {
                            id:"highlight10",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_peopleManagement"),aspects:["managingPeople","business"]},
                                {description:localisation.localise($scope.locale,"sk_relationshipManagement"),aspects:["managingRelationships","business"]}
                            ],
                            description: localisation.localise($scope.locale,"high10_description")
                        },
                        {
                            id:"highlight11",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_productRoadmap"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_clientContact"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_requirementsGathering"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_prioritisation"),aspects:["business"]}
                            ],
                            description: localisation.localise($scope.locale,"high11_description")                    }
                    ],
                otherSkills:
                    [
                        {description:localisation.localise($scope.locale,"sk_financialMarkets"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_wealthManagement"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_exchangeData"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_crossSymbology"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_reuters"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_fundamentals"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_quoteData"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_newsFeed"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_soap"),aspects:["technical","api"]},
                        {description:localisation.localise($scope.locale,"sk_webServices"),aspects:["technical","api"]}
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
                highlightsVisible:$scope.experiences?$scope.experiences[2].highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight12",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_functionalDesign"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_brd"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_mrd"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_userInterfaceDesign"),aspects:["technical","UI"]}
                            ],
                            description: localisation.localise($scope.locale,"high12_description")
                        },
                        {
                            id:"highlight13",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_offshoreDevelopment"),aspects:["managingRelationships","business"]},
                                {description:localisation.localise($scope.locale,"sk_peopleManagement"),aspects:["managingPeople","business"]},
                                {description:localisation.localise($scope.locale,"sk_prioritisation"),aspects:["business"]}
                            ],
                            description: localisation.localise($scope.locale,"high13_description")
                        },
                        {
                            id:"highlight14",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_requirementsGathering"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_clientContact"),aspects:["managingRelationships","business"]}
                            ],
                            description: localisation.localise($scope.locale,"high14_description")
                        }
                    ],
                otherSkills:
                    [
                        {description:localisation.localise($scope.locale,"sk_commercialInsurance"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_rulesEngine"),aspects:["technical"]},
                        {description:localisation.localise($scope.locale,"sk_bpm"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_acordDataStandards"),aspects:["technical"]},
                        {description:localisation.localise($scope.locale,"sk_xml"),aspects:["technical"]},
                        {description:localisation.localise($scope.locale,"sk_oracle"),aspects:["technical"]},
                        {description:localisation.localise($scope.locale,"sk_workflow"),aspects:["technical"]},
                        {description:localisation.localise($scope.locale,"sk_microsoftDotNet"),aspects:["technical"]}
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
                highlightsVisible:$scope.experiences?$scope.experiences[3].highlightsVisible:false,
                highlights:
                    [
                        {
                            id:"highlight15",
                            skills: [
                                {description:localisation.localise($scope.locale,"sk_functionalDesign"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_userWorkshop"),aspects:["managingRelationships","business"]},
                                {description:localisation.localise($scope.locale,"sk_uml"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_flowDiagrams"),aspects:["business"]},
                                {description:localisation.localise($scope.locale,"sk_userAcceptanceTesting"),aspects:["business"]}
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
                        {description:localisation.localise($scope.locale,"sk_insurance"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_claimsManagement"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_documentManagement"),aspects:["business"]},
                        {description:localisation.localise($scope.locale,"sk_bpm"),aspects:["business"]}
                    ]
            }
        ];
    }

    $scope.updateLabels();

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
ExperienceCtrl.$inject = ['$scope','localisation','myLocaleBroadcaster'];

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