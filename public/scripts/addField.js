//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão executar uma ação
.addEventListener('click',cloneField)

// Executar uma ação
function cloneField()
{
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Limpar os campos
    const fields=newFieldContainer.querySelectorAll('input')
    //Para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value=""
    })

    //Colocar na página 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
