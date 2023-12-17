confirm("Hello!\nWelcome to exercise-13");

function card_details(thumbnail,duration,title,channelName,views,monthold) {
    let views_count
    if(views<1000){
            views_count = views;
    }
    else if(views>1000000){
        views_count = views/1000000 +"M"
    }
    else{
        views_count = views/1000 +"K"

    };

    let card_html = `<div class="container">

                        <div class="img">
                            <img src="${thumbnail}" alt="Img">
                            <div class="duration-time">
                                <p>${duration}</p>
                            </div>
                        </div>

                        <div class="text">
                            <h1>${title}</h1>
                            <p>${channelName} ${views_count} views ${monthold} months ago</p>

                        </div>

                    </div>`;

document.querySelector(".card_container").innerHTML = document.querySelector(".card_container").innerHTML + card_html;
}

card_details("https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q","30:45","Installing VS Code & How Websites Work | Sigma WebDevelopment Course - Tutorial #1","CodeWithHarry",500,1);

card_details("https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q","30:45","Installing VS Code & How Websites Work | Sigma WebDevelopment Course - Tutorial #2","CodeWithHarry",5000,2);

card_details("https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q","30:45","Installing VS Code & How Websites Work | Sigma WebDevelopment Course - Tutorial #3","CodeWithHarry",500000,3);

card_details("https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q","30:45","Installing VS Code & How Websites Work | Sigma WebDevelopment Course - Tutorial #4","CodeWithHarry",50000000,4);

card_details("https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q","30:45","Installing VS Code & How Websites Work | Sigma WebDevelopment Course - Tutorial #5","CodeWithHarry",500000000,5);