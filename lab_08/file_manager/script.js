document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', () => {
        const target = document.getElementById(folder.dataset.target);
        target.classList.toggle('hidden');
    });
});
