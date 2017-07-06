myapp.service('surveyservice',function($http){
	var main=this;
	this.mainurl='https://projectsapi.edwisor.com/api/surveys';
	this.getmeall=function(){
		return $http.get(main.mainurl+'/');
	}
	this.createsurvey=function(mydata){
		return $http.post(main.mainurl+'/create',mydata);
	}
	this.getthissurvey=function(surveyid){
		return $http.get(main.mainurl+'/'+surveyid);
	}
	this.editthissurvey=function(surveyid,mydata ){
		return $http.put(main.mainurl+'/'+surveyid+'/edit',mydata);
	}
	this.deletethissurvey=function(surveyid){
		return $http.post(main.mainurl+'/'+surveyid+'/delete',null);
	}
	this.createaquestion=function(surveyid,questiondata){
		return $http.post(main.mainurl+'/'+surveyid+'/question/create', questiondata);
	}
	this.getallquestions=function(surveyid){
		return $http.get(main.mainurl+'/'+surveyid+'/questions/all');
	}
	this.editaquestion=function(questionid,mydata){
		return $http.put(main.mainurl+'/questions/'+questionid+'/edit',mydata);
	}
	this.deleteaquestion=function(questionid){
		return $http.post(main.mainurl+'/questions/'+questionid+'/delete',null);
	}
	this.createoption=function(questionid,mydata){
		return $http.post(main.mainurl+'/questions/'+questionid+'/options/create',mydata);
	}
	this.deleteoptions=function(questionid){
		return $http.post(main.mainurl+'/questions/'+questionid+'/options/delete',null);
	}
	this.createanswer=function(questionid,mydata){
		return  $http.post(main.mainurl+'/questions/'+questionid+'/answer/create',mydata);
	}
	this.deleteanswers=function(questionid){
		return $http.post(main.mainurl+'/questions/'+questionid+'/answers/delete',null);
	}
	this.getthisquestion=function(questionId){
		return $http.get(main.mainurl+'/questions/'+questionId);
	}
	this.logindata;

})