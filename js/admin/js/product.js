const BASE_URL = 'http://localhost/api/admin'

function get_product_list() {
    $.getJSON(BASE_URL + '/product/index.php', function (data) {
        let product_list = JSON.parse(data)
        render_product(product_list)
    })
}
function render_product(product_list) {
    let dom_product = document.getElementById('product_list')
    dom_product.innerHTML = '';

    product_list.forEach(product => {
        let product_node = create_product_node(product)
        dom_product.appendChild(product_node)
    });
}
function create_product_node(product) {
    let root = document.createElement('tr')

    let cat_id = document.createElement('td')
    cat_id.textContent = product.id
    root.appendChild(cat_id)

    let cat_name = document.createElement('td')
    cat_name.textContent = product.name
    root.appendChild(cat_name)

    let cat_img = document.createElement('td')
    let cat_imge = document.createElement('img')
    cat_imge.setAttribute('class', 'product-imge')
    cat_img.setAttribute('class', 'product-img')
    cat_imge.src = product.img
    cat_img.appendChild(cat_imge)
    root.appendChild(cat_img)

    let cat_price = document.createElement('td')
    cat_price.textContent = product.price
    root.appendChild(cat_price)

    let wrap_btn_edit = document.createElement('td')
    let btn_edit = document.createElement('button')
    btn_edit.innerText = "Edit"
    btn_edit.setAttribute("class", "btn-primary")

    btn_edit.onclick = function () {
        open_edit(product.id)
    }

    wrap_btn_edit.appendChild(btn_edit)

    root.appendChild(wrap_btn_edit)

    let wrap_btn_delete = document.createElement('td')
    let btn_delete = document.createElement('button')
    btn_delete.innerText = "Delete"
    btn_delete.setAttribute("class", "btn-danger")
    btn_delete.onclick = function () {
        delete_products(product.id)
    }
    wrap_btn_delete.appendChild(btn_delete)

    root.appendChild(wrap_btn_delete)

    return root
}
function delete_products(id) {
    $.getJSON(BASE_URL + '/product/delete.php?id=' + id, function (data) {
        if (data.status == true) {
            location.reload();
        } else {
            alert('Failed delete')
        }
    })
}
function open_edit(id) {
    window.location.href = 'edit.html?id=' + id
}

//Create Category

function doCreate() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let cat_id = document.getElementById("category_id").value
    let img = document.getElementById("img").value
   
    create_products(name,price,img,cat_id)
}

function create_products(name,price,img,cat_id) {
    let params = { 'name': name, 'price':price,'img':img,'category_id':cat_id }
    $.post(BASE_URL + '/product/create.php', params, function(data){
        if (data.status == true) {
            window.location.href = 'index.html'
        } else {
            alert('Failed create')
        }
    })
}

function edit_products(id){
    $.getJSON(BASE_URL + '/product/show.php?id=' + id, function (res) {  
        let product = res.data      
        let dom_name = document.getElementById("name")
        dom_name.value = product.name

        let dom_img = document.getElementById("img")
        dom_img.value = product.img

        let dom_price = document.getElementById("price")
        dom_price.value = product.price

        let dom_id = document.getElementById("id")
        dom_id.value = product.id
    })
}

function doUpdate(){
    let name = document.getElementById("name").value
    let id = document.getElementById("id").value
    let price = document.getElementById("price").value
    let img = document.getElementById("img").value
    update_products(id, name,img,price)
}

function update_products(id, name,img,price){
    let params = {'id': id,
    'name': name,
    'img':img,
    'price':price
}
    $.post(BASE_URL + '/product/update.php', params, function(data){
        if (data.status == true) {
            window.location.href = 'index.html'
        } else {
            alert('Failed create')
        }
    })
}