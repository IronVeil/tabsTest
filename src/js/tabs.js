var tab1content = document.getElementById("tab1");
var tab2content = document.getElementById("tab2");
var currentTab = 1;

function hide() {
    document.querySelectorAll('.tab').forEach(div => {
        div.classList.add("hidden");
    });
}

function selectTab(tabNumber) {
    if (tabNumber == 1) {
        hide();
        tab1content.classList.remove("hidden");
    } else if (tabNumber == 2) {
        hide();
        tab2content.classList.remove("hidden");
    }
}