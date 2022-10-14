$(document).ready(function() {  
        // Code to add custom select
        $('#ContentContainer_MainContent_MainContent_ShowUserName').next().next().after('<div class="form-group id="userTypeGroup"><label class="col-sm-4 control-label required"><span id="ContentContainer_MainContent_MainContent_utype"><span class="xrm-editable-text xrm-attribute"><span class="xrm-attribute-value">User Type</span></span></span></label><div class="col-sm-8"><select name="utype" id="utypefield" class="form-control" aria-required="true"><option value ="null"></option><option value="Professor">Professor</option><option value="Student">Student</option><option value="AdminStaff">Admin Staff</option><option value="LabStaff">Lab Staff</option></select></div></div>');
        $('#SubmitButton').parent().parent().before('<div class="form-group id="studentIdGroup"><label class="col-sm-4 control-label required">Student ID</label><div class="col-sm-8"><input type="text" name="studentId" id="studentIdField" class="form-control" aria-required="true"></div></div>');
        $('#SubmitButton').parent().parent().before('<div class="form-group id="professorIdGroup"><label class="col-sm-4 control-label required">Professor ID</label><div class="col-sm-8"><input type="text" name="professorId" id="professorIdField" class="form-control" aria-required="true"></div></div>');
        $('#SubmitButton').parent().parent().before('<div class="form-group id="facultyGroup"><label class="col-sm-4 control-label required">Faculty</label><div class="col-sm-8"><select name="faculty" id="facultyField" class="form-control" aria-required="true"><option value="Engineering">Engineering</option><option value="CS">Computer Sciences and Informatics</option><option value="MassComm">Mass Communication</option><option value="Business">Business Administration</option></select></div></div>');
        
        //Code to Add Custom 'Register' Button
        $('#SubmitButton').after('<input type="submit" name="ctl00$ctl00$ContentContainer$MainContent$MainContent$mySubmitButton"  value="Register" id="mySubmitButton" class="btn btn-primary">');      
//Hide the original       
 $('#SubmitButton').hide();
 $('#professorIdField').parent().parent().hide();
 $('#studentIdField').parent().parent().hide();
 $('#facultyField').parent().parent().hide();


        $("#mySubmitButton").click(function()
        {
            var uTypeVal = document.getElementById("utypefield").value;
            localStorage.setItem("utype", uTypeVal);
            if(uTypeVal=="Professor"){
                    var profId = document.getElementById("professorIdField").value;
                    localStorage.setItem("profId", profId);
            }
            else if(uTypeVal == "Student"){
                    var studentId = document.getElementById("studentIdField").value;
                    localStorage.setItem("studentId", studentId);
                    var faculty = document.getElementById("facultyField").value;
                    localStorage.setItem("faculty", faculty);
            }
            $('#SubmitButton').click();    
            return false;
       });

       $("#utypefield").change(function()
        {
            var uTypeVal = document.getElementById("utypefield").value;
            if(uTypeVal=="Professor")
            {
                $('#studentIdField').parent().parent().hide();
                $('#facultyField').parent().parent().hide();
                $('#professorIdField').parent().parent().show();
                
            }
            else if(uTypeVal == "Student")
            {
                $('#professorIdField').parent().parent().hide();
                $('#studentIdField').parent().parent().show();
                $('#facultyField').parent().parent().show();
            }
            else
            {
                $('#professorIdField').parent().parent().hide();
                $('#studentIdField').parent().parent().hide();
                $('#facultyField').parent().parent().hide();
            }
       });
});