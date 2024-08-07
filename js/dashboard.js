document.addEventListener("DOMContentLoaded", function() {
    const menuBar = document.getElementById("top-bar");
    const mainContent = document.getElementById('main-content');
    

    document.addEventListener("mousemove", function(event) {
        if (event.clientY < 50) {
            menuBar.classList.add("show-menu");
            mainContent.style.marginTop = '50px';
        } else {
            menuBar.classList.remove("show-menu");
            mainContent.style.marginTop = '0';
        }
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    
    const mainContent = document.getElementById('main-content');
    const topBar = document.getElementById('top-bar');
    if (sidebar.classList.contains('open')) {
        mainContent.style.marginLeft = '150px';
        topBar.style.left = '150px';
    } else {
        mainContent.style.marginLeft = '0';
        topBar.style.left = '0';
    }
}


