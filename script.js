var result = $("#result")

function enteredN(take){
    
    var presentResult = result.val()

    result.val(presentResult + take)

}

function clearAll(){
    result.val('')
}

function answerN(){
    var answer = eval(result.val())
    result.val(answer)
}

function pm(){
    x = result.val();

    if(x > 0){
        a = - + x
    }
    else if (x < 0){
        a = - + x
    }
    else{
        a = 0
    }

    result.val(a);

}

function del(){
    x = result.val()

    x = x.slice(0,-1);

    result.val(x);
}