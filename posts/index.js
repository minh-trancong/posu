
fetch('https://minh-trancong.github.io/posu/posts/data/post_data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("post_title").innerText = data[1].id;
    })

