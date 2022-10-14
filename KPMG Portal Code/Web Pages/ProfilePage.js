$(document).ready(function() { 
    {% if user.roles contains 'Student' or user.roles contains 'Professor' %}
    $('#kpmg_usertype').prop('disabled',true);
    $('#kpmg_studentid').prop('disabled',true);
    $('#kpmg_professorid').prop('disabled',true);
    $('#kpmg_faculty').prop('disabled',true);
    {% endif %}
    var utypeselected= localStorage.getItem("utype"); 
    if(utypeselected != null && utypeselected != "")
    {
    if(utypeselected =="Professor")
    {
      document.getElementById("kpmg_usertype").value = 1;
    }
    else if(utypeselected =="Student")
    {
      document.getElementById("kpmg_usertype").value = 2;
    }
    else if(utypeselected =="Admin Staff")
    {
      document.getElementById("kpmg_usertype").value = 3;
    }  
    else if(utypeselected =="Lab Staff")
    {
      document.getElementById("kpmg_usertype").value = 4;
    }
    }

    
    var userType = document.getElementById("kpmg_usertype").value;
    switch(userType){
      case "1":
            $("#kpmg_faculty").closest("td").hide();
            $("#kpmg_studentid").closest("td").hide();
            var profId = localStorage.getItem("profId");
            if(profId != null && profId != "")
            {
              $("#kpmg_professorid").val(profId);
            }
            break;
      case "2":
            $("#kpmg_professorid").closest("td").hide();
            $("#kpmg_professorsrating").closest("td").hide();
               var faculty = localStorage.getItem("faculty");
    if(faculty != null && faculty != "")
    {
    if(faculty =="Engineering")
    {
      document.getElementById("kpmg_faculty").value = 1;
    }
    else if(faculty =="CS")
    {
      document.getElementById("kpmg_faculty").value = 2;
    }
    else if(faculty =="MassComm")
    {
      document.getElementById("kpmg_faculty").value = 3;
    }  
    else if(faculty =="Business")
    {
      document.getElementById("kpmg_faculty").value = 4;
    }
    }
               var studentId = localStorage.getItem("studentId");
            if(studentId != null && studentId != "")
            {
              $("#kpmg_studentid").val(studentId);
            }
            break;
      default:
            $("#kpmg_faculty").closest("td").hide();
            $("#kpmg_studentid").closest("td").hide();
            $("#kpmg_professorid").closest("td").hide();
            $("#kpmg_professorsrating").closest("td").hide();            
            break;


    }
    localStorage.clear();
$("#kpmg_usertype").change(function()
        {
            var uTypeVal = document.getElementById("kpmg_usertype").value;
            if(uTypeVal=="1")
            {
            $("#kpmg_studentid").closest("td").hide();
            $("#kpmg_faculty").closest("td").hide();
            $("#kpmg_professorid").closest("td").show();
                
            }
            else if(uTypeVal == "2")
            {
            $("#kpmg_professorid").closest("td").hide();
            $("#kpmg_professorsrating").closest("td").hide();            
            $("#kpmg_studentid").closest("td").show();
            $("#kpmg_faculty").closest("td").show();
            }
            else
            {
            $("#kpmg_professorid").closest("td").hide();
            $("#kpmg_professorsrating").closest("td").hide();            
            $("#kpmg_studentid").closest("td").hide();
            $("#kpmg_faculty").closest("td").hide();
            }
       });
}); 