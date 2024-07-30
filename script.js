function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    
    const mainContent = document.getElementById('main-content');
    const topBar = document.getElementById('top-bar');
    if (sidebar.classList.contains('open')) {
        mainContent.style.marginLeft = '250px';
        topBar.style.left = '250px';
    } else {
        mainContent.style.marginLeft = '0';
        topBar.style.left = '0';
    }
}
