$(document).ready(function () {

                 localStorage.setItem("lectureId", $('#EntityFormControl_EntityFormView_EntityID').val());
                 localStorage.setItem("lectureNumber", $('#kpmg_lecturenumber').val());
                 localStorage.setItem("lectureEntityName", "kpmg_lecture");

                 localStorage.setItem("professorId", $('#kpmg_professor').val());
                 localStorage.setItem("professorName", $('#kpmg_professor_name').val());
                 localStorage.setItem("professorEntityName", "contact");
                 var addBtn = localStorage.getItem('addBtn');
                 if(addBtn =="true")
                    $("#EntityFormPanel").eq(0).append("<button type='button' id='btnBookSeat' class='btn' style='color:#fff;background-color:#36f;border-color:36f;' onclick='bookSeat()'>Book Seat</button><br><br>");
                $('#subgrid_1 .entity-grid').on("loaded", function(){
                        var date = new Date($('#kpmg_startdate').val());
                        date.addMinutes($('#kpmg_durationinhours').val());
                        if(new Date()<date){
                            $('.input-group.pull-left').hide()
                        }
                    });
});




function bookSeat(){
                var lectureId = $('#EntityFormControl_EntityFormView_EntityID').val();
                json_data = {"lectureId": lectureId,
                "studentId":localStorage.getItem('userId')};

                    var req = new XMLHttpRequest();
                // Specify the generated URL from your canvas app here
                var url = "https://prod-50.westeurope.logic.azure.com:443/workflows/b59bb64cbec74005b69e33a45cd5f7ac/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=GIL6cTbP5tnhxzRvkClxv8ofbOs-vpwQ6g7dNBp0Xl8"
                // send HTTP Request to Power Automate Flow
                req.open("POST", url, true);
                req.onreadystatechange = function() {
                    if (req.readyState == XMLHttpRequest.DONE) {
                        alert(req.responseText);
                    }
                }

                req.setRequestHeader('Content-Type', 'application/json');
                req.send(JSON.stringify(json_data));

            }