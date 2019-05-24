let taskLists = [
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];



function loadUI(){
  console.log("loaded");

  //rendering the previous data
  taskLists.map((task) => {
    $('.task-items').append(
      `      <li class="task-item">
              <p>${task.name} <span><small>${task.date}</small></span></p>
              <p>${task.assigned} <span class="remove">Remove</span></p>
            </li>`
    );
  })

}




$(document).ready(function() {



  $( "form" ).submit(function( event ) {

    var serialized = $(this).serializeArray();
        var emptyString = '';
        var data = {};
        for(emptyString in serialized){
            data[serialized[emptyString]['name']] = serialized[emptyString]['value']
        }

    var formData = JSON.stringify(data);
    taskLists.push(formData);

    let date = new Date(data.date);

    var formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    //adding the element as per the submitted data
    $('.task-items').append(
      `      <li class="task-item">
              <p>${data.name} <span><small>${formattedDate}</small></span></p>
              <p>${data.assigned} <span class="remove">Remove</span></p>
            </li>`
    );


    event.preventDefault();
  });

  $('.task-items').on('click', '.remove', function(){

      //finding the parent and removing it


        $(this).parent().parent().fadeOut( 400,()=> {
          $(this).parent().parent().remove();


        });
    });


});
