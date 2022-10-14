$(function(){
    $('#kpmg_lectureid_name').val(localStorage.getItem("lectureNumber"));
    $('#kpmg_lectureid').val(localStorage.getItem("lectureId"));
    $('#kpmg_lectureid_entityname').val(localStorage.getItem("lectureEntityName"));

    $('#kpmg_professorid_name').val(localStorage.getItem("professorName"));
    $('#kpmg_professorid').val(localStorage.getItem("professorId"));
    $('#kpmg_professorid_entityname').val(localStorage.getItem("professorEntityName"));

})