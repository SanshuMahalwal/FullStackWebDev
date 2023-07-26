
function refreshList() {
    $('#list').empty();

    $.get('/todos', (data)=> {
        for (let todo of data) {
            $('#list').append(`<li>${todo}</li>`)
        }
    })  
}

$('#btn').on('click', ()=>{
    const todo = $('#inp').val();

    $.post('/todos', {todo}, ()=>{
        $('#inp').val('');
        refreshList();
    })

})

refreshList();