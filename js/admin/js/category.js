const BASE_URL = 'http://localhost/api/admin'

function get_category_list() {
    $.getJSON(BASE_URL + '/category/index.php', function (data) {
        let category_list = JSON.parse(data)
        render_category(category_list)
    })
}

function render_category(category_list) {
    let dom_category = document.getElementById('category_list')
    dom_category.innerHTML = '';

    category_list.forEach(category => {
        let category_node = create_category_node(category)
        dom_category.appendChild(category_node)
    });
}

function create_category_node(category) {
    let root = document.createElement('tr')

    let cat_id = document.createElement('td')
    cat_id.textContent = category.id
    root.appendChild(cat_id)

    let cat_name = document.createElement('td')
    cat_name.textContent = category.name
    root.appendChild(cat_name)

    let wrap_btn_edit = document.createElement('td')
    let btn_edit = document.createElement('button')
    btn_edit.innerText = "Edit"
    btn_edit.setAttribute("class", "btn-primary")

    btn_edit.onclick = function () {
        open_edit(category.id)
    }

    wrap_btn_edit.appendChild(btn_edit)

    root.appendChild(wrap_btn_edit)

    let wrap_btn_delete = document.createElement('td')
    let btn_delete = document.createElement('button')
    btn_delete.innerText = "Delete"
    btn_delete.setAttribute("class", "btn-danger")
    btn_delete.onclick = function () {
        delete_category(category.id)
    }
    wrap_btn_delete.appendChild(btn_delete)

    root.appendChild(wrap_btn_delete)

    return root
}

//Delete Category

function delete_category(id) {
    $.getJSON(BASE_URL + '/category/delete.php?id=' + id, function (data) {
        if (data.status == true) {
            location.reload();
        } else {
            alert('Failed delete')
        }
    })
}

//Edit Category

function open_edit(id) {
    window.location.href = 'edit.html?id=' + id
}

//Create Category

function doCreate() {
    let name = document.getElementById("name").value
    create_category(name)
}

function create_category(name) {
    let params = { 'name': name }
    $.post(BASE_URL + '/category/create.php', params, function(data){
        if (data.status == true) {
            window.location.href = 'index.html'
        } else {
            alert('Failed create')
        }
    })
}

function edit_category(id){
    $.getJSON(BASE_URL + '/category/show.php?id=' + id, function (res) {  
        let category = res.data      
        let dom_name = document.getElementById("name")
        dom_name.value = category.name

        let dom_id = document.getElementById("id")
        dom_id.value = category.id
    })
}

function doUpdate(){
    let name = document.getElementById("name").value
    let id = document.getElementById("id").value
    update_category(id, name)
}

function update_category(id, name){
    let params = { 'id': id, 'name': name }
    $.post(BASE_URL + '/category/update.php', params, function(data){
        if (data.status == true) {
            window.location.href = 'index.html'
        } else {
            alert('Failed create')
        }
    })
}