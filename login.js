let email = document.getElementById('email')
let number = document.getElementById('number')
let pass = document.getElementById('pass')
let button = document.getElementById('button')
let pass_button = document.getElementById('pass_button')

let num_arr = [0, 1, 3, 4, 5, 6, 7, 8, 9]
let let_arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']



button.addEventListener('click', function (){
    email_checker()
    number_checker()
    pass_checker()
    if (conditioner == 4){
        window.location.assign('todo.html')
    }
})

pass_button.addEventListener('click', function(){
    pass_shower()
})



function email_checker(){
    let email_value = email.value

    if (email_value.includes('@') == true){
        console.log('Email is valid')
        localStorage.setItem('email', email_value)
        conditioner += 1
        // const email = localStorage.getItem('email')
    }else {
        console.log('Email doesnt have @')
    }
}

let conditioner = 0

function number_checker(){
    let number_length = number.value.length
    let number_value = number.value
    let number_dump = 0

    if (number_length == 8 ){
        for (let j = 0; j < let_arr.length; j++){
            if (number_value.includes(let_arr[j]) == true){
                console.log('shi has letter')
                break
            }else {
                number_dump += 1
                if (number_dump == 26){
                    console.log('Number is valid')
                    conditioner += 1
                    break
                }
            }
        }
    }else{
        console.log('number isnt 8 length')
    }   



    // if (number_length == 8 ){
    //     if(!isNaN(number_value)){
    //         console.log('number is valid')
    //     }else{
    //         console.log('number contains string')
    //     }
    // }else{
    //     console.log('number isnt 8 length')
    // }   
}



let dump = 0
let no_dump = 0

function pass_checker(){
    let pass_value = pass.value

    if (pass_value.length >= 8){
        for(let h=0; h < let_arr.length; h++){
            if (pass_value.includes(let_arr[h]) == true){
                for (let i=0; i < 10; i++){
                    if (pass_value.includes(i) == true){
                        console.log('pass is valid')
                        conditioner += 1
                        break
                    }else{
                        dump += 1
    
                        if (dump == 10){
                            console.log('shi has no numbers')
                            break
                        }
                    }
                }
            }
        }
    }else{
        console.log('pass not long')
    }

    

    // if (pass_value.length >= 8){
    //     if (isNaN(pass_value)){
    //         for (let i=0; i < 10; i++){
    //             if (pass_value.includes(i) == true){
    //                 console.log('pass is valid')
    //                 break
    //             }else{
    //                 dump += 1

    //                 if (dump == 10){
    //                     console.log('shi has no numbers')
    //                     break
    //                 }
    //             }
    //         }
    //     }else {
    //         console.log('no string')
    //     }
    // }else{
    //     console.log('pass not long')
    // }
}


function pass_shower(){
    if(pass.type == 'text'){
        pass.type = 'password'
    }else {
        pass.type = 'text'
    }
}

