'use strict'
var flag = 0;
var id=0;
var current_id;
var hover_flag = 0;

function getUsers(){
    $.ajax( {

        url:'http://localhost:5000/getUsers',
        error:function(){
            console.log("request incomplete");
        },
        success:function(data) {
            console.log(data);
            $.each( data, function( i,user ) {
                var userRecord = '<tr>';
                    userRecord += '<td class="uname">' + user.name +'</td>';
                    userRecord += '<td class="emailid">' + user.email +'</td>';
                    userRecord += '<td><button class="edit-button" data-id='+i+'>Edit Profile</button></td>';
                    $("#userData").append(userRecord);
            


            });
        }
     });
}

$(document).ready(function(){
    
    getUsers();
    if ($(window).width() < 600) {
        // alert('Less than 960');
        $(".sidebar-container").css({"margin-left": "-100%"});
     }

        $("#menuButton").click(function(){
            if(hover_flag == 0){
                $(".sidebar-container").css({"margin-left": "0", "transition": "0.3s"});
                hover_flag = 1;
            }
            else{
                if ($(window).width() < 600){
                    $(".sidebar-container").css({"margin-left": "-100%", "transition": "0.3s"});    
                }
                else{
                    $(".sidebar-container").css({"margin-left": "-200px", "transition": "0.3s"});
                }
                hover_flag = 0;

            }
            
        });

        // $( "#menuButton" ).(function() {
        //     $( "#book" ).animate({
        //       opacity: 0.25,
        //       left: "+=50",
        //       height: "toggle"
        //     }, 5000, function() {
        //       // Animation complete.
        //     });
        //   });

        

        $("#btnSave").click(function(){

            var name = $("#txtEmail").val();
            var email = $("#txtUsername").val();
            
            var data = {
                name:name,
                email:email,
                id:id
            };
        
            if(name !== "" || email !== ""){
               
                
                if(flag==0)
                {

                    $.ajax( {
                        type:'POST',
                        headers:{'Content-Type':'application/json'},
                        url:'http://localhost:5000/postUser',
                        error:function(){
                            console.log("request incomplete");
                        },
                        data:JSON.stringify(data),
                        success:function(response) {
                            console.log(response);
                            var userRecord = '<tr>';
                            userRecord += '<td class="uname">' + name +'</td>';
                            userRecord += '<td class="emailid">' + email +'</td>';
                            userRecord += '<td><button class="edit-button" data-id='+id+'>Edit Profile</button></td>';
                            id++;
                            $("#userData").append(userRecord);
                
                        }
                    });

                }
                
                else{
                    console.log(name+"-"+email);
                    $.ajax( {
                        type:'PUT',
                        headers:{'Content-Type':'application/json'},
                        url:'http://localhost:5000/updateUser/'+current_id,
                        error:function(){
                            console.log("request incomplete");
                        },
                        data:JSON.stringify({
                            id:current_id,
                            name:name,
                            email:email
                        }),
                        success:function(response) {
                            console.log(response);
                
                        }
                    });
                    $('button[data-id='+current_id+']').parent().siblings('.uname').html(name);
                    $('button[data-id='+current_id+']').parent().siblings('.emailid').html(email);
                    $("#txtUsername").val("");
                    $("#txtEmail").val(""); 
                    flag = 0;
                }
            }
            else{
                alert("Fields are empty");
            }
            
        });

  
        $("#userTable").on('click','.edit-button',function(){
            flag = 1;
            current_id = $(this).data("id");
            var username = $('button[data-id='+id+']').parent().siblings('.uname').text();
            var emailid = $('button[data-id = '+ id + ']').parent().siblings('.emailid').text();
            $("#txtUsername").val(username);
            $("#txtEmail").val(emailid);   
        }); 
});