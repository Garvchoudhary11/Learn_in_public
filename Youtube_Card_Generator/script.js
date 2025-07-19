function createblock(title="title", cname="Channel", views="0", months="0", thumbnail=null) {
    let div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<div class="container">
        <div class="thumbnail" style="background-image: url(${thumbnail})" >
            <div class="tstamp">19:20</div>
            </div >
        <div class="right">
            <div class="title">
                <h2>${title}</h2>
            </div>
            <span class="channel">${cname}</span>
            <span class="seperator">-</span>
            <span class="views">${views} views</span>
            <span class="seperator">-</span>
            <span class="months">${months} months</span>


        </div>
        </div >`;

    document.body.appendChild(div);

}

let title = prompt("Enter Title");
let cname = prompt("Enter Channel Name");
let views = prompt("Enter Number of views");
let months = prompt("How many months old");
let thumbnail = prompt("Paste link of thumbnail");
let finalviews;

if(views>999999)
{
    finalviews=(views/1000000)
    finalviews=finalviews+"m";
}
else if (views > 999) {
    finalviews=(views/1000);
    finalviews=finalviews+"k";
    
}
createblock(title, cname, finalviews, months, thumbnail);



