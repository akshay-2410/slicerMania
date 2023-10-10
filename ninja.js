let playing=false;
let trialsleft=3
let score = 0
let left
let random
let interval
const widthSize = window.matchMedia("(max-width: 950px)");





const jsMedia = (widthSize) =>{
    if(widthSize.matches){
        console.log("hello")
       
                $("#startreset").click(function(){
                
                    if(playing==true)
                        location.reload();
                    else
                    {
                        playing=true;
                    
                        $("#startreset").html("Reset Game");
                        lives()
                        choosefruit();
                        dropfruits(-20);


                    }
                
                    function choosefruit()
                    {  
                        $("#fruits").show(1)
                    
                        left = Math.random()*75+"vw";
                    
                        $("#container").css({"left":left})
                    
                        random = 1+Math.floor(Math.random()*5);
                    
                        console.log("random "+random)
                    
                        $("#fruits").attr({"src":"fruit"+random+".png"})
                    }
                
                
                    function lives()
                    {
                        $("#trials").html("")
                        for(let i=1;i<=trialsleft;i++)
                        $("#trials").append("<img src='hearts.png'>")
                    }
                
                
                function dropfruits(top1)
                {
                    interval = setInterval(function(){
                        $("#container").css({"top":top1})
                        top1=top1+Math.random()*score+1;
                        if( ( $("#container").position().top ) > ( $("#box").height() ) )
                        {
                            console.log("failed")
                            top1=0
                           failed()
                        }
                    },30)
                
                
                }
                $("#container").mouseover(function()
                {
                    top1=0
                    clearInterval(interval)
                    score++;
                    $("#score").html("Score = "+score)
                    $("#fruits").hide("explode", {pieces:4},200)


                    choosefruit()
                    dropfruits(-100)
                
                })
            
                function failed(){
                    clearInterval(interval)
                    trialsleft--;
                    lives()
                    if(trialsleft>0){
                    choosefruit()
                    dropfruits(-100)}
                    else{

                        $("#trials").css("display","none")
                        $("#score_board").css({"transform":"translateY(-700%)"})            
                    
                    }
                }   
            
                })//start-game
            
            

    }
    else{
       
            $("#startreset").click(function(){
            
                if(playing==true)
                    location.reload();
                else
                {
                    playing=true;
                
                    $("#startreset").html("Reset Game");
                    lives()
                    choosefruit();
                    dropfruits(-20);
                    
                    
                }
            
                function choosefruit()
                {  
                    $("#fruits").show(1)
                
                    left = Math.random()*40+"vw";
                
                    $("#container").css({"left":left})
                
                    random = 1+Math.floor(Math.random()*5);
                
                    console.log("random "+random)
                
                    $("#fruits").attr({"src":"fruit"+random+".png"})
                }
            
            
                function lives()
                {
                    $("#trials").html("")
                    for(let i=1;i<=trialsleft;i++)
                    $("#trials").append("<img src='hearts.png'>")
                }
            
            
            function dropfruits(top1)
            {
                interval = setInterval(function(){
                    $("#container").css({"top":top1})
                    top1=top1+Math.random()*score+1;
                    if( ( $("#container").position().top ) > ( $("#box").height() ) )
                    {
                        console.log("failed")
                        top1=0
                       failed()
                    }
                },30)
            
            
            }
            $("#container").mouseover(function()
            {
                top1=0
                clearInterval(interval)
                score++;
                $("#score").html("Score = "+score)
                $("#fruits").hide("explode", {pieces:4},200)
                 
                
                choosefruit()
                dropfruits(-100)
            
            })
        
            function failed(){
                clearInterval(interval)
                trialsleft--;
                lives()
                if(trialsleft>0){
                choosefruit()
                dropfruits(-100)}
                else{
                    
                    $("#trials").css("display","none")
                    $("#score_board").css({"transform":"translateY(-700%)"})            
                
                }
            }   
        
            })//start-game
        
       

    }
}


widthSize.addEventListener("change",jsMedia);
jsMedia(widthSize);