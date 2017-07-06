myapp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/allsurveys.html',
		controller:'allsurveycontroller',
		controllerAs:'allsurveys'})
	
	.when('/create',{
		templateUrl:'views/createsurveyview.html',
		controller:'createsurveycontroller',
		controllerAs:'createsurvey'
	})
	.when('/:surveyId',{
		templateUrl:'views/singlesurvey.html',
		controller:'singlesurveycontroller',
		controllerAs:'singlesurvey'
	})
	.when('/:surveyId/edit',{
		templateUrl:'views/editsurvey.html',
		controller:'editsurveycontroller',
		controllerAs:'editsurvey'
	})
	.when('/:surveyId/question/create',{
		templateUrl : 'views/createquestion.html',
		controller :'createquestioncontroller',
		controllerAs :'createquestion'
	})
	.when('/questions/:questionId/edit',{
		templateUrl :'views/editquestion.html',
		controller : 'editquestioncontroller',
		controllerAs : 'editquestion'
	})
	.when('/questions/:questionId/options/create',{
		templateUrl : 'views/createoption.html',
		controller : 'createoptioncontroller',
		controllerAs :'createoption'
	})

}])