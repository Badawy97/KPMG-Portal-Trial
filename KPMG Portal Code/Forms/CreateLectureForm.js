$(function(){
$('#kpmg_remainingseats').prop('readonly',true);
$('#kpmg_totalseats').change(function(){
    var totalSeats = $('#kpmg_totalseats').val();
    $('#kpmg_remainingseats').next('.text-muted').remove();
    if(totalSeats ==0)
        $('#kpmg_remainingseats').val(null); 

    $('#kpmg_remainingseats').val(totalSeats); 
    
})

})