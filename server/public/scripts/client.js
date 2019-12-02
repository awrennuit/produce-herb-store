$(document).ready(function() {
    getHerbs();
    $(`#add-herb-btn`).on(`click`, postHerb);
    $(`#all-herbs`).on(`click`, `.delete-btn`, deleteHerb);
    $(`#search-btn`).on(`click`, searchPage);
    $(`#reset`).on(`click`, getHerbs);
});

function choosePoundEach(type){
    switch(type){
        case type:
            return type;
    }
}

function deleteHerb(){
    let id = $(this).closest(`span`).data(`id`);
    let confirmation = confirm(`Are you sure you want to delete ${$(this).closest(`span`).data(`name`)}?`);
    if(confirmation){
        $.ajax({
            method: `DELETE`,
            url: `/herbs/${id}`
        }).then(function(response){
            getHerbs();
        }).catch(function(error){
        alert(`something went wrong`);
        console.log(error)
        });
    }
}

function getHerbs(){
    $.ajax({
        method: `GET`,
        url: `/herbs`
    }).then(function(response){
        renderHerbs(response);
    }).catch(function(error){
    alert(`something went wrong`);
    console.log(error)
    });
}

function postHerb(){
    let objectToSend = {
        name: $(`#herb-name-in`).val(),
        quantity: $(`#qty-in`).val(),
        price: $(`#price-in`).val(),
        per: choosePoundEach($(`#price-per-in`).val()),
        description: $(`#description-in`).val(),
        image_path: $(`#img-in`).val()
    }
    $.ajax({
        method: `POST`,
        url: `/herbs`,
        data: objectToSend
    }).then(function(response){
        getHerbs();
    }).catch(function(error){
    alert(`Error: input value(s) not accepted.`);
    console.log(error)
    });
}

function renderHerbs(herbs){
    $(`#all-herbs`).empty();
    if(herbs == ``){
        $(`#all-herbs`).append(`<h2>NO RESULTS</h2>`) 
    }
    else{
        for(let i=0; i<herbs.length; i++) {
            let item = herbs[i];
            let $span = $(`<span class="view-none"></span>`);
            $span.data(`id`, item.id);
            $span.data(`name`, item.name);
            if(item.image_path.includes(`http`)){
                $span.append(`<div><img class="herb-img" src="${item.image_path}" alt="${item.name}" /></div>`);
            }
            else{
                $span.append(`<div><img class="herb-img" src="./images/${item.image_path}" alt="${item.name}"/></div>`);
            }
            $span.append(`<div>${item.name}</div>`);
            $span.append(`<div>Quantity: ${item.quantity}</div>`);
            $span.append(`<div>Price: $${item.price}.00/${item.per}</div>`);
            $span.append(`<button class="edit-btn">EDIT</button>`);
            $span.append(`<button class="delete-btn">DELETE</button>`);
            $span.append(`<br style="display:none;">`);
            $span.append(`<input style="display:none;" class="edit-price-in" type="number" placeholder="edit price" />`);
            $span.append(`<br style="display:none;" />`);
            $span.append(`<button style="display:none;" class="edit-herb-btn">Update</button>`);
            $(`#all-herbs`).append($span);
            $(`.main-in`).val(``);
            $(`#herb-name-in`).focus();
        }
    }
}

function searchPage(){
    let objectToSend = {
        search: $(`#search-in`).val()
    }
    $.ajax({
        method: `POST`,
        url: `/herbs/search`,
        data: objectToSend
    }).then(function(response){
        $(`#search-in`).val(``);
        renderHerbs(response);
    }).catch(function(error){
    alert(`Error: search not working`);
    console.log(error)
    });
}



