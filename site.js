
$(function () {
   
    for (const [index] of Object.entries(data)) {

        $(".collaborator-list").append(`<li><button id="${index}" class="btn Raleway-Med-midLow">${data[index].username}</button></li>`)        
    }

    $(document).on('click', '.btn', function(){
        id = $(this).attr('id');

        setCurrentObejct(data[id].objectName, data[id].description, data[id].username);
    });
})

function buttonClick() {
    console.log('clicked')
}


function setCurrentObejct(title, description, handle){
    console.log(title);
    $(".object-title-text").html(title);
    $(".object-description-text").html(description);
    $(".object-handle-text").html(`Suggested by ${handle}`);
}