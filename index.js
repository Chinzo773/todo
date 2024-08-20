add_button = document.getElementById('add_style')

add_button.addEventListener('click', function(){
    add_list()
})

const email_element = document.getElementById('email')
const email = localStorage.getItem('email')
email_element.innerHTML = 'Hello ' + email

function add_list(){
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedTime = formatter.format(date);
    console.log(formattedTime)
    const list = document.getElementById('list')
    const button_loc = document.createElement('div')
    const text_span = document.createElement('div')
    const list_div = document.createElement('div')
    const input = document.getElementById('task_input') 
    const input_value = input.value
    const left = document.createElement('div')
    const time = document.createElement('div')
    time.innerHTML = formattedTime
    

    text_span.className = 'todo_text'
    text_span.innerHTML = input_value
    left.className = 'left_style'
    time.className = 'time_style'
    left.appendChild(time)
    left.appendChild(text_span)
    list_div.appendChild(left)


    if (input_value == ''){
        return
    }


    const delete_button = document.createElement('button');
    delete_button.className = 'delete_style';

    delete_button.addEventListener('click', function() {
        list_div.remove();
    });


    const edit_button = document.createElement('button')
    edit_button.className = 'edit_style'

    edit_button.addEventListener('click', function() {
        const edit_input = document.createElement('input')
        const confirm_button = document.createElement('button')
        edit_input.className = 'edit_input'

        edit_input.value = text_span.innerHTML

        let saved_text = text_span.innerHTML

        text_span.innerHTML = ''

        confirm_button.className = 'edit_style'

        confirm_button.addEventListener('click', function(){
            let edit_value = edit_input.value

            if (edit_value == ''){
                text_span.innerHTML = saved_text
            }else{
                text_span.innerHTML = edit_value
            }
        })

        text_span.appendChild(edit_input)
        text_span.appendChild(confirm_button)
    })

    button_loc.className = 'button_loc'

    button_loc.appendChild(edit_button)
    button_loc.appendChild(delete_button)
    list_div.appendChild(button_loc)

    list_div.className = 'inner_list'

    list.appendChild(list_div)
    input.value = ''
}


