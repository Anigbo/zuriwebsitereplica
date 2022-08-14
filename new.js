let button = document.querySelector("#faq_btn1").value

function getButton1() {
    let button = document.querySelector("#faq_btn1")
    let para = document.createElement("p")
    deleteButton = document.createElement("button")
    
    para.textContent = "No, the program is completely free thanks to Ingressive For Good"
    deleteButton.textContent = ""
    button.appendChild(para)
    
      
    button.addEventListener("click", function() {
        button.removeChild(para)
        
    })


    
    para.style.fontSize = "12px"
    para.style.fontWeight = "0px"
    para.style.margin = "2px"

    para.addEventListener("click", function() {
        
       if(para.style.display = "none") {
        para.style.display = "block"
       }else{
        para.style.display = "none"
       }
    })


    
    }
    
    function getButton2() {
        let button = document.querySelector("#faq_btn2")
        let para = document.createElement("p")
        deleteButton = document.createElement("button")
        
        para.textContent = "You'll need a laptop, internet connection and the willingness to learn through collaboration and mentorship."
        deleteButton.textContent = ""
        button.appendChild(para)
        
        
        button.addEventListener("click", function() {
            button.removeChild(para)
        })
        para.style.fontSize = "12px"
        para.style.fontWeight = "0px"
        para.style.margin = "2px"
    }
    function getButton3() {
        let button = document.querySelector("#faq_btn3")
        let para = document.createElement("p")
        deleteButton = document.createElement("button")
        
        para.textContent = "Participants who join the program and stop engaging will be given the chance to catch up. You'll also be assigned a 'study-mate' and mentor to help you. However, there is the possibility of not being promoted to the next stage if you remain inactive for too long"
        deleteButton.textContent = ""
        button.appendChild(para)
        
        
        button.addEventListener("click", function() {
            button.removeChild(para)
        })

        para.style.fontSize = "12px"
        para.style.fontWeight = "0px"
        para.style.margin = "2px"
    }

    function getButton4() {
        let button = document.querySelector("#faq_btn4")
        let para = document.createElement("p")
        deleteButton = document.createElement("button")
        
        para.textContent = "Unfortunately, no, you cannot switch from part-time to full-time and vice-versa"
        deleteButton.textContent = ""
        button.appendChild(para)
        
        
        button.addEventListener("click", function() {
            button.removeChild(para)
        })
        para.style.fontSize = "12px"
        para.style.fontWeight = "0px"
        para.style.margin = "2px"
        
    }

    function getButton5() {
        let button = document.querySelector("#faq_btn5")
        let para = document.createElement("p")
        
        para.textContent = "We reward some participants who complete tasks early, however, this is not a weekly reward. All the work that will be done during the program are hypothetical."
        button.appendChild(para)
        
        
        button.addEventListener("click", function() {
            button.removeChild(para)
            
        })
         
        let rotate = document.querySelector(".first")
        
        rotate.addEventListener("click", function() {
            rotate.style.transition = "all 5s"
        rotate.style.tranform = "rotate(315deg)"
        })
        
        para.style.fontSize = "11px"
        para.style.fontWeight = "0px"
        para.style.margin = "2px"

        
        
    }

    
      
