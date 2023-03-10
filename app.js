var products = [
    {
        name: "Naruto Classic",
        season: "Season 1",
        image: "https://i.ibb.co/q728mTk/index.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "Find the crimson four-leaf clover",
        image: "http://www2.hawaii.edu/~mitake/iloveics101section14/naruto6.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "the lost story mission protect the waterfall village",
        image: "https://m.media-amazon.com/images/M/MV5BNjEyMWZlZDItMDRjZi00ZDdhLWE5NDItYTA2YzAwM2Q5ZjYyXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "hidden leaf village grand sports festival",
        image: "https://m.media-amazon.com/images/M/MV5BODcwNzZkNjgtZTU0ZS00YTNiLTg5OTMtZjczOGVmMzFhYTgxXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_FMjpg_UX1000_.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "the movie ninja clash in the land of snow",
        image: "https://upload.wikimedia.org/wikipedia/en/d/de/Naruto_the_Movie_Ninja_Clash_in_the_Land_of_Snow.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "legend of the stone of gelel",
        image: "https://flxt.tmsimg.com/assets/p18324756_v_v8_aa.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "guardians of the crescent moon kingdom",
        image: "https://upload.wikimedia.org/wikipedia/en/f/ff/Naruto_the_Movie_-_Guardians_of_the_Crescent_Moon_Kingdom.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "Season 2",
        image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/01ec367b44f0a568430a957e042639af.jpe",
        link: "#"
    },
    {
        name: "Naruto",
        season: "shippuden the movie",
        image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Naruto_Shippuden_the_Movie.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "shippuden the movie bonds",
        image: "https://upload.wikimedia.org/wikipedia/en/0/04/Naruto_Shippuden_the_Movie_Bonds.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "hi no ishi o tsugu mono",
        image: "https://pics.filmaffinity.com/Naruto_Shipp_den_The_Movie_3_Inheritors_of_the_Will_of_Fire-918858306-large.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "the cross roads",
        image: "https://m.media-amazon.com/images/M/MV5BOGY3NjFlZjgtZjQwNy00ZGMxLWE1YzUtMDRmNDY5M2MzOGFkXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "soyokaze den",
        image: "https://cdn.myanimelist.net/images/anime/10/31573.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "shippuuden the lost tower",
        image: "http://screencritix.com/wp-content/uploads/2014/02/Naruto-Movie-The-Lost-Tower.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "shippuden blood prison",
        image: "https://m.media-amazon.com/images/I/81DyC95Yu8L._RI_.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "road to ninja",
        image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-1511624967.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "sunny side battle",
        image: "https://cdn.myanimelist.net/images/anime/1047/91638.jpg",
        link: "#"
    },
    {
        name: "Naruto",
        season: "the last movie",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/TheLastNarutomovie.jpg",
        link: "#"
    },
    {
        name: "Boruto",
        season: "Naruto the movie",
        image: "https://static.metacritic.com/images/products/movies/2/1ca391fc6b53d6c0751458396223510e.jpg",
        link: "#"
    },
    {
        name: "Boruto",
        season: "jump festa",
        image: "https://i0.wp.com/hero-club.com/wp-content/uploads/2016/12/boruto-naruto-next-generations-poster.png?fit=640%2C960&ssl=1",
        link: "#"
    },
    {
        name: "Baruto",
        season: "Season 3",
        image: "https://64.media.tumblr.com/ae3f2078e85e70973a274db424230ea0/tumblr_phpnidbVGg1wykgrro1_400.jpg",
        link: "#"
    }
]

for (var p = 0; p < products.length; p++) {
    var product = document.getElementById("cards");

    product.innerHTML += `
    <div class="cardf">
    <div class="card">
        <img src="${products[p].image}" alt="" class="card-img">
        <div class="text-box">
            <h3>${products[p].name}</h3>
            <p>${products[p].season}</p>
        </div>
        <div class="button-box">
            <a href="${products[p].link}" target="_blank">Watch Now</a>
        </div>
    </div>
    </div>
    `
}


$(document).ready(function () {
    $(".cardf").slice(0, 6).show();
    if ($(".cardf:hidden").length != 0) {
        $("#load").show();
    }
    $("#load").on("click", function (e) {
        e.preventDefault();
        $(".cardf:hidden").slice(0, 6).slideDown();
        if ($(".cardf:hidden").length == 0) {
            $("#load").text("END")
                .fadOut("slow");
        }
    });
})