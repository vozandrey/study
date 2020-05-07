document.querySelector('.close-nav').onclick = closeNav;
document.querySelector('.show-nav').onclick = showNav;

function showNav() {
    document.querySelector('.site-nav').style.left = '0';
}

function closeNav() {
    document.querySelector('.site-nav').style.left = '-300';
}

function getCategoryList() {
    fetch('/get-category-list',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
    ).then(function(response){
        //console.log(response);
        return response.text();
        }
    ).then(function (body) {
        //console.log(body);
        showCategoryList(JSON.parse(body));
    });
}

function showCategoryList(data) {
    console.log(data);

    let out = '<ul class="category-list"><li><a href="/">Main</a></li>';
    data.forEach( cat => {
        out += `<li><a href="/cat?id=${cat.id}">${cat.category}</a></li>`;
    });
    out += '</ul>';
    document.querySelector('#category-list').innerHTML = out;
}

getCategoryList();