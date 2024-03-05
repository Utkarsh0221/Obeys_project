
function loadingAnimation(){
    let t=gsap.timeline();
    t.from(".line h1",{
        y:150,
        stagger:0.2,
        duration:0.6,
        delay:0.3
    });
    t.from("#line-part1",{
        opacity:0,
        onStart:function(){
            let h5=document.querySelector("#line-part1 h5");
            let counter=0;
            setInterval(()=>{
            if(counter<100){
            counter++;
            h5.innerText=counter;
        }
        
    },30);
        }
    });
    t.to(".line h2",{
        animationName:"anime",
        opacity:1
    })
    
    
    t.to("#loader",{
        opacity:0,
        duration:0.4,
        delay:4
    })
    
    t.from("#page1",{
        delay:0.2,
        duration:0.5,
        opacity:0,
        y:1600,
        ease:Power4,
    })
    
    t.to("#loader",{
        display:"none",
    })
    t.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
        y:150,
        stagger:0.2
    })
};

loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove",(dets)=>{
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4" , {});
}

cursorAnimation();


