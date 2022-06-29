// variables

const connect = document.getElementById("connect"),
share = document.getElementById("share"),
integ = document.getElementById("integ"),
login = document.getElementById("login");

// login modal

const logModal = document.getElementById("log-modal");
const logBtn = document.getElementById("log-btn");
login.addEventListener("click", function(){
    logModal.classList.remove("d-none");
})
logBtn.addEventListener("click", function(){
    logModal.classList.add("d-none");
})

// integrations modal

const integModal = document.getElementById("integ-pop");
const save = document.getElementById("save");
const skip = document.getElementById("skip");
integ.addEventListener("click", function(){
    integModal.classList.remove("d-none");
})
skip.addEventListener("click", function(){
    integModal.classList.add("d-none");
})
save.addEventListener("click", function(){
    integModal.classList.add("d-none");
})

// connect modal popup

const conModal = document.getElementById("con-modal"),
btnsDown = document.querySelectorAll(".btns-down button");

btnsDown.forEach((btn) => {
    btn.addEventListener("click", function(){
        conModal.classList.add("d-none");
    })
})
connect.addEventListener("click", function(){
    conModal.classList.remove("d-none");
})

// copy btn

const nice = document.getElementById("nice");
const layer = document.getElementById("layer");
const copySpan = document.querySelector(".copy-span");
const mainBtn = document.getElementById("main-copy");
const inpContent = document.getElementById("inp-content");

mainBtn.addEventListener("click", function(){
    layer.classList.add("d-none");
    nice.classList.remove("d-none");
    copySpan.innerHTML = "Copied";
    var inp = document.createElement("input");
    document.body.appendChild(inp);
    inp.value = inpContent.value;
    inp.select();
    document.execCommand("copy");
    document.body.removeChild(inp);
    var setTime = setTimeout(() => {
        layer.classList.remove("d-none");
        nice.classList.add("d-none");
        copySpan.innerHTML = "Copier"
    }, 2000)
})

// share modal

const saveDiscard = document.querySelectorAll(".save-discard-btns button");
const shareModal = document.getElementById("share-modal");

saveDiscard.forEach((btn) => {
    btn.addEventListener("click", function(){
        shareModal.classList.add("d-none")
    })
})
share.addEventListener("click", function(){
    shareModal.classList.remove("d-none")
})

