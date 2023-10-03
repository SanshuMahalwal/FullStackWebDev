const likeButtons = document.querySelectorAll('.like-btn');

async function likeButton(productid, heart) {

    try {
        const response = await axios({
            method: 'post',
            url: `/products/${productid}/like`,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        });
        console.log(response);
        // agar btn ke andar <i> ka class fas h toh regular karo
        // varna toh solid kardo
        if(heart.classList.contains('fa-solid')) {
            heart.classList.remove('fa-solid')
            heart.classList.add('fa-regular');
        }
        else {
            heart.classList.remove('fa-regular')
            heart.classList.add('fa-solid');
        }
    }
    catch(e) {
        window.location.replace('/login');
        console.log(e.message);
    }
    
}

for (let button of likeButtons) {
    button.addEventListener('click', () => {
        const productid = button.getAttribute('product-id');
        const heart = button.children[0];
        likeButton(productid, heart);
    })
}