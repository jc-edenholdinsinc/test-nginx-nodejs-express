$(function() {
    $("#subscribe-btn").on("click", function() {
        
        const collection = { email: $("#email").val() }

        $.ajax({
            url:  "http://localhost:5000/subscribe",
            type: 'POST',
            data: collection,
            dataType: 'json',
            success: function(data) { 
                console.log(data);
            }
        })
    });
});