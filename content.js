
//manifest permissioned to Classroom since the indicator here is a class associated with the loaded text
//jquery package manifested for ease of use

$(document).ready(clickRecord());



function changeWords(){
   var checkContents = setInterval(function(){  //start poll for content load
       console.log('checking');
    if ($('.Era2ub.QRiHXd.uO32ac').length>0){ //element to indicate lazy content is loaded
        $('body :not(script)').contents().filter(function() { //grab HTML contnet that is not a script
            return this.nodeType === 3; //Node is a text type
          }).replaceWith(function() { //chain to the filter a replaceWith Array function
              return this.nodeValue.replace(/Teacher/gi, 'Facilitator').replace(/Student/gi, 'Learner'); //Replace the text value
          });
       clearInterval(checkContents) //element loaded. Clear the interval
    }
  },200); //interval milliseconds to wait/check
}


function clickRecord(){
    var checkContents = setInterval(function(){  //start poll for content load
       console.log('checking');
    if (document.querySelectorAll('[aria-label="Activities"]').length>0){ //found activities tab
        document.querySelector('[aria-label="Activities"]').click();
        //opened activities tab, now check for recording button
        var checkContents2 = setInterval(function(){
            console.log('checking for recording btn');
            if (document.querySelectorAll('[aria-label="Recording, Record meetings for on-demand viewing"]').length>0){
                document.querySelector('[aria-label="Recording, Record meetings for on-demand viewing"]').click();
                
                var checkContents3 = setInterval(function(){
                console.log('checking for start recording btn');
                if (document.querySelectorAll('[aria-label="Start recording"]').length>0){
                    document.querySelector('[aria-label="Start recording"]').click();
                    
                    var checkContents4 = setInterval(function(){
                    console.log('checking for start btn');
                    if (document.querySelectorAll('[data-mdc-dialog-action="ok"]').length>0){
                        document.querySelector('[data-mdc-dialog-action="ok"]').click();
                        clearInterval(checkContents4);
                    }
                    },200);
                    
                    
                    clearInterval(checkContents3);
                }
                },200);
                
                clearInterval(checkContents2);
            }
            },200);
            
       clearInterval(checkContents); //element loaded. Clear the interval
    }
  },200);
    
}


