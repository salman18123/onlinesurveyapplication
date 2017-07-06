var myapp=angular.module('surveyapp',['ngRoute','ngCookies']);
myapp.controller('allsurveycontroller',['surveyservice','$cookies','$location',function(surveyservice,$cookies,$location){
	var main=this;
	this.surveys=[];
	this.newdata=0;
	console.log(surveyservice.logindata);
	this.getsurveys=function(){
	surveyservice.getmeall().then(function successcallback(response){
		console.log(response);
		main.surveys=response.data.data;
		console.log(main.surveys);

    },function errorcallback(response){
    	console.log(response);
    	alert("check console");
    });
};

     console.log(surveyservice.logindata);
     this.newdata=$cookies.get('cookie');

     
     this.login=function(){		
		if(main.uname=='admin'&& main.pword=='admin'){
			
			$cookies.put('cookie',1);
			surveyservice.logindata=1;
			
			console.log(this.newdata);
			console.log(surveyservice.logindata);
			

		}
		else{
			$cookies.put('cookie',0);
			console.log(this.newdata);
		}
	}
	this.deletesurvey=function(surveyId){
		surveyservice.deletethissurvey(surveyId).then(function successcallback(response){
			
			$location.path('/');

		},function errorcallback(response){
			alert("checkconsole");
		}
		)
	}
this.getsurveys();
}]);

myapp.controller('singlesurveycontroller',['surveyservice','$routeParams','$cookies',function(surveyservice, $routeParams,$cookies){
	var main=this;
	this.allquestions=[];
	this.id=$routeParams.surveyId;
	console.log(this.id);
	this.formdata=$cookies.get('cook');
	this.bata=function(){
		 $cookies.put('cook',1);
	}
	this.singlesurvey=function(){
		surveyservice.getthissurvey(main.id).then(function successcallback(response){
			console.log(response);
			main.data=response.data.data;
			console.log(main.data);
		},function errorcallback(response){

		}
		)
	}
	this.allquestions=function(){
		surveyservice.getallquestions(main.id).then(function successcallback(response){
			console.log(response);
			main.allquestions=response.data.data;
			console.log(main.allquestions);
		},function errorcallback(response){
			alert("check console");
		}
		)
	}
	this.questionindex=0;
	this.newquestionindex=function(){
		main.questionindex+=1;
	};
	this.deletesurvey=function(){
		surveyservice.deletethissurvey(main.id).then(function successcallback(response){
			console.log("deleted");
		},function errorcallback(response){
			alert("check console");
		}
		)
	}
	this.createanswers=function(questionId,answer){
		var myData={
			selectedOptionNumber:answer
		}
		surveyservice.createanswer(questionId,myData).then(function successcallback(response){
			console.log(response);
		},function errorcallback(response){
			alert("checkconsole");
		}
		)
	}
	this.deleteallanswers=function(questionId){
		surveyservice.deleteanswers(questionId).then(function successcallback(response){
			console.log(response);

		},function errorcallback(response){
			alert("checkconsole");
		}
		)
	}
	this.skipquestion=function(questionId){
		var myData={
			selectedOptionNumber:'0'
		}
		surveyservice.createanswer(questionId,myData).then(function successcallback(response){
			console.log(response);
		},function errorcallback(response){
			alert("checkconsole");
		}
		)
	}
	this.newdata=$cookies.get('cooki');
	this.submitdata=function(){
		if(main.uname=='admin'&& main.pword=='admin'){
			$cookies.put('cooki',1);
			console.log(this.newdata);
		}
		else{
			$cookies.put('cooki',0);
			console.log(this.newdata);
		}

	}
	this.singlesurvey();
	this.allquestions();
}]);
myapp.controller('createsurveycontroller',['surveyservice','$location',function(surveyservice,$location){
	var main=this;
	this.createsurvey=function(){
		var myData={
			surveyTitle: main.surveyTitle,
			surveySubtitle: main.surveySubtitle,
			instructions: main.instructions
		}
		surveyservice.createsurvey(myData).then(function successcallback(response){
			console.log(response);
			$location.path('/');
			
		},function errorcallback(response){
			alert("check console");
		}
		)

	}
	
	


}]);
myapp.controller('editsurveycontroller',['surveyservice','$routeParams','$location',function(surveyservice,$routeParams,$location){
	var main=this;
	this.surveyId=$routeParams.surveyId;
	this.getthissurvey=function(){
		surveyservice.getthissurvey(main.surveyId).then(function successcallback(response){
			main.data=response.data.data;
			main.surveyTitle=main.data.surveyTitle;
			main.surveySubtitle=main.data.surveySubtitle;
			main.instructions=main.data.instructions;
		},function errorcallback(response){
			alert("check console");
		}
		)

	}
	this.getthissurvey();
	this.editsurvey=function(){
		var myData={
			surveyTitle : main.surveyTitle,
			surveySubtitle :main.surveySubtitle,
			instructions : main.instructions
		}
		surveyservice.editthissurvey(main.surveyId,myData).then(function successcallback(response){
			console.log("edited");
			$location.path('/');
		},function errorcallback(response){
			alert("check console");
		}
		)
	}
	


}])
myapp.controller('createquestioncontroller',['surveyservice','$routeParams','$location',function(surveyservice,$routeParams,$location){
	var main=this;
	this.surveyId=$routeParams.surveyId;
	this.createquestion=function(){
		var myData={
			questionText:main.questionText
		}
		surveyservice.createaquestion(main.surveyId,myData).then(function successcallback(response){
			console.log(response);
			$location.path('/');
		},function errorcallback(response){
			alert("checkconsole");
		}
		)
	}
}])
myapp.controller('editquestioncontroller',['surveyservice','$routeParams','$location',function(surveyservice,$routeParams,$location){
	var main=this;
	this.questionId=$routeParams.questionId;
	console.log(this.questionId);
	this.getaquestion=function(){
		surveyservice.getthisquestion(main.questionId).then(function successcallback(response){
			console.log(response);
			main.questionText=response.data.data.questionText;
		},function errorcallback(response){
			alert("check console");
		})
	}
	this.getaquestion();
	this.editthisquestion=function(){
		var myData={
			questionText :main.questionText
		}
		surveyservice.editaquestion( main.questionId,myData).then(function successcallback(response){
			console.log("edited");
			console.log(response);
			console.log(response.data.data.surveyId);
			

		},function errorcallback(response){
			alert("checkconsole");
		}
		)
	}
	this.deletequestion=function(){
		surveyservice.deleteaquestion(main.questionId).then(function successcallback(response){
			console.log("deleted");
			
			
		},function errorcallback(response){
			alert("check console");
		})
	}

}])
myapp.controller('createoptioncontroller',['surveyservice','$routeParams','$location',function(surveyservice,$routeParams,$location){
	var main=this;
	this.questionId=$routeParams.questionId;
	console.log(this.questionId);
	this.createoption=function(){
		var myData={
			optionText : main.optionText
		}
		surveyservice.createoption(main.questionId,myData).then(function successcallback(response){
			console.log(response);
			$location.path('/'+response.data.data.surveyId);
		},function errorcallback(response){
			alert("checkconsole");
		}
		)
	}
	this.deleteoptions=function(){
		surveyservice.deleteoptions(main.questionId).then(function successcallback(response){
			console.log("deleted");
		},function errorcallback(response){
			alert("checkconsole");
		}
		)
	}
	
}])

