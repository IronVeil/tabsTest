var tab1link = document.getElementById("tab1");
var tab1content = document.getElementById("content1");
var tab2link = document.getElementById("tab2");
var tab2content = document.getElementById("content2");
var currentTab = 1;

function hide(ifFirst) {
    document.querySelectorAll('.tab').forEach(div => {
        div.classList.add("hidden");
    });

    document.querySelectorAll('.link').forEach(a => {
        a.classList.remove("current");
    })

    if (ifFirst == 1) {
        tab1content.classList.remove("hidden");
        tab1link.classList.add("current");
    }
}

function selectTab(tabNumber) {
    if (tabNumber == 1) {
        hide();
        tab1content.classList.remove("hidden");
        tab1link.classList.add("current");
    } else if (tabNumber == 2) {
        hide();
        tab2content.classList.remove("hidden");
        tab2.classList.add("current");
    }
}