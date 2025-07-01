const cart = []
let gottenIndex ;

if(cart.length == 0) {
    show.innerHTML = '<p class="text-center alert alert-danger">No items added yet</p>'
}

function addItem() {
    if (textInput.value == '') {
        alert('when you are not blind, fill in something joor')
    } else {
        // console.log(textInput.value);
        cart.push(textInput.value)
        textInput.value = ''
        console.log(cart);
        displayItems()
    }
}

function deleteItem() {
    cart.splice(gottenIndex, 1)
    console.log(cart);
    displayItems()
}

function editItem() {
    if (textEdit.value == '') {
        editError.style.cssText = "display: block; !important"
    } else {
        cart.splice(gottenIndex, 1, textEdit.value)
        textEdit.value = ''
        displayItems()
        editMsg.style.cssText = "display: block !important;"
    }
}

function getEditIndex(i) {
    gottenIndex = i
    textEdit.value = cart[i]
}

function getIndex(i) {
    gottenIndex = i
    console.log(gottenIndex);
} 

function displayItems() {
    if(cart.length == 0) {
        show.innerHTML = '<p class="text-center text-danger">No items added yet</p>'
    } else {
        show.innerHTML = ''
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            show.innerHTML += `
                    <div class="my-3">
                        <p>${index + 1}. ${element}</p>
                        <button onclick="getIndex(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger">Delete</button>
                        <button onclick="getEditIndex(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal2" class="btn btn-warning">Edit</button>
                    </div>
                `
        }
    }
}

// let dummy = ['cloth', 'wears', 'pen']

// for(i=0; i < 3;i++) {
//     0
//     1
//     2
// }

// 0
// 1
// 2

// n -> n-1