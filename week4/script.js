$(()=>{
    // reserve form
    $('#reserveButton').click(()=>{
        $('#reserveForm').modal('show')
    })

    $('#closeButton').click(function(){
    $('#reserveForm').modal('hide');})

    // login form
    $('#loginButton').click(()=>{
        $('#loginModal').modal('show')
    })

    $('#closeButton').click(function(){
    $('#reserveForm').modal('hide');
})
 })
