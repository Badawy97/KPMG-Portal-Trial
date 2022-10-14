$(function(){

var professorId = localStorage.getItem('professorId');
var lectures = new Array();
    window.webapi.safeAjax({
                        type: "GET",
                        async: false,
                        url: "/_api/kpmg_lectures/?$filter=_kpmg_professor_value%20eq%20"+professorId+"&$select=kpmg_startdate,kpmg_durationinhours",
                        contentType: "application/json",
                        success: function (res) {
                            lectures = res.value;
                            localStorage.setItem('lectures', JSON.stringify(lectures));
                        }
                        });

});