$(function(){
$('#kpmg_remainingseats').prop('readonly',true);
$('#kpmg_totalseats').change(function(){
    var totalSeats = $('#kpmg_totalseats').val();
    $('#kpmg_remainingseats').next('.text-muted').remove();
    if(totalSeats ==0)
        $('#kpmg_remainingseats').val(null); 

    $('#kpmg_remainingseats').val(totalSeats); 
    
});

if (typeof (entityFormClientValidate) != 'undefined') {
         var originalValidationFunction = entityFormClientValidate;
         if (originalValidationFunction && typeof (originalValidationFunction) == "function") {
            entityFormClientValidate = function() {
               originalValidationFunction.apply(this, arguments);
               var lectures = JSON.parse(localStorage.getItem('lectures'));
               let startDate1 = new Date($('#kpmg_startdate').val());
               let endDate1 = new Date($('#kpmg_startdate').val());
               endDate1.addMinutes($('#kpmg_durationinhours').val());
               let isOverlapping = false;
               lectures.forEach(function(lecture){
                            let startDate2 = new Date(lecture.kpmg_startdate);
                            let endDate2 = new Date(lecture.kpmg_startdate);
                            endDate2.addMinutes(lecture.durationinhours);
                            if(startDate1 < endDate2 && endDate1 > startDate2)
                                isOverlapping = true;
                        });
               
                if(isOverlapping){
                    alert("You have other lectures overlapping with that date and time!");
                    return false;
                }
               return true;
            };
         }
      }
})
