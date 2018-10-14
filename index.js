$(document).ready(function(){
    $("#add-todo").click(function(){
        var todoBlock = $(this).closest("#new-block")
        var descript = todoBlock.find("#new-descript")
        var timeEstimate = todoBlock.find("new-estimate")
        
        $("ul").append("<li> <input type= 'checkbox'/>"+descript.val()+"<span class=new-estimate>"+timeEstimate.val()+
        "units</span></li>")
        
        descript.val("")
        timeEstimate.val("")
    })
})