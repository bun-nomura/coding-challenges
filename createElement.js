let parentDiv1 = document.createElement("div");
let title1 = document.createElement("h2");
let p1 = document.createElement("p");
let p2 = document.createElement("p");

title1.innerHTML = "sport";
p1.innerHTML = "tennis";
p2.innerHTML = "baseball";

// title1.append(p1)のようにしない
// htmlのDOMツリーを意識する
parentDiv1.append(title1);
parentDiv1.append(p1);
parentDiv1.append(p2);

document.getElementById("target-container").append(parentDiv1);