const spin = document.getElementById(`loader`)

loader()
function loader() {
    let spinner = document.createElement(`div`);
    spinner.className = `lds-default`;
    spinner.innerHTML = `
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
    `;
    spin.append(spinner);
}

window.addEventListener("load", function () {
    setTimeout(loaded, 600)
})

function loaded() {
    document.getElementById("content").style.display = "flex"
    document.getElementById("loader").style.animation = "fade-out 500ms forwards"
    document.getElementById("loader").style.display = "none"
}