
$(function(){
    let home=$('#home');
    let profile=$('#profile');
    let education=$('#education');
    let projects=$('#projects');
    let contact=$('#contact');

    $.get('/api/home',function(){
        $('#content').empty()
        $('#content').load('home.html')
    })


    home.click(function(){
        $.get('/api/home',function(){
            $('#content').empty()
            $('#content').load("home.html")
        })
    })

    profile.click(function(){
        $.get('/api/profile',function(){
            $('#content').empty()
            $('#content').load("profile.html")
        })
    })

    education.click(function(){
        $.get('/api/education',function(){
            $('#content').empty()
            $('#content').load("education.html")
        })
    })

    projects.click(function(){
        $.get('/api/projects',function(){
            $('#content').empty()
            $('#content').load("projects.html")
        })
    })
    
    contact.click(function(){
        $.get('/api/contact',function(){
            $('#content').empty()
            $('#content').load("contact.html",function(){
                $('#submit').click(function(){
                    let name=$('#name').val()
                    let email=$('#email').val()
                    let message=$('#message').val()
        
                    alert(name);
                    
                    $.ajax({
                        url:'/api/contact',
                        method:'post',
                        contentType:'application/json',
                        data:JSON.stringify({
                            name,
                            email,
                            message
                        }),
                        success:function(response){
                            console.log(response);
                        },
                        error:function(error){
                            console.log(error)
                        }
                    })




            })

           
    
        })
        })
    })
  
    /*$('#contact-form').on('submit',function(event){
        event.preventDefault();
        let name=$('#name').val()
        let email=$('#email').val()
        let message=$('#message').val()

        $.ajax({
            url:'/api/contact',
            method:'post',
            contentType:'application/json',
            data:JSON.stringify({
                name,
                email,
                message
            }),
            success:function(response){
                console.log(response);
            },
            error:function(error){
                console.log(error)
            }
        })
    })*/

    

    /*$.get("home.html",function(data,status){
        $('#content').empty()
        $('#content').html(data)
    }) 


    home.click(function(){
        $('#content').empty()
        $.get("home.html",function(data,status){
            $('#content').html(data)
        })
    })

    profile.click(function(){
        $('#content').empty()
        $.get("profile.html",function(data,status){
            $('#content').html(data)
        })
    })

    education.click(function(){
        $('#content').empty()
        $.get("education.html",function(data,status){
            $('#content').html(data)
        })
    })
    projects.click(function(){
        $('#content').empty()
        $.get("projects.html",function(data,status){
            $('#content').html(data)
        })
    })
    .click(function(){
        $('#content').empty()
        $.get("contact.html",function(data,status){
            $('#content').html(data)
        })
    })*/

})