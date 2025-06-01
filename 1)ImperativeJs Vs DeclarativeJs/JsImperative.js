const div = document.createElement("div");

const heading = document.createElement("h1")
heading.textContent="Hello";
heading.className="header";

const para = document.createElement("p");
para.textContent = "Welcome to the session";
para.className = "para"

const btn = document.createElement("button");
btn.textContent = "Click";
btn.className = "btn";

btn.addEventListener("click", function () {
    let url = "https://www.google.com"
 //window.location.href = "https://www.google.com";
 window.location.assign(url);
 //window.open(url, "_blank");
});

div.append(heading);
div.append(para);
div.append(btn);

document.getElementById("root").append(div);

