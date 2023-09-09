$(document).ready(function(){
    let slide = 0;

    $('form button').click(function() {
        const task_empty = $('#tarefa').val();
        const btt = $('#add');

        if (slide === 0 && task_empty !== ""){
            $('input').slideUp(1000);
            $('#tarefa').removeAttr('required');
            
            const teste = setTimeout(mudarbtt, 1200);

            slide = 1;
        }
        
        else if (slide === 1){
            $('input').slideDown(1000)
            btt.text('Adicionar');
            $('#tarefa').attr('required', 'required');
            slide = 0;
        }

        function mudarbtt(){
            btt.text('Nova tarefa')
            clearTimeout(teste);
        }
    })
    
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        if (slide === 1){
            const input_task = $('#tarefa').val();
            const new_task = $(`<li>${input_task}</a></li>`);    
            $(new_task).appendTo('ul');
            $(new_task).fadeIn(2000);
            $('#tarefa').val("");
        }
    });
    
    $('ul').on('click', 'li', function done (){
        $(this).toggleClass('sublinhado');
    });

});


//quando l1 variavel click então variavel risco