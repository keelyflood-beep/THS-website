document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('linkedin-feed');
    if (!container) return;

    fetch('linkedin-posts.json')
        .then(res => res.json())
        .then(posts => {
            container.innerHTML = '';
            posts.forEach(post => {
                container.innerHTML += `
                    <div class="embed-container">
                        <iframe src="${post.embedUrl}" height="${post.height}" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
                `;
            });
        })
        .catch(() => {
            container.innerHTML = '<p class="text-muted">Unable to load posts. Please check back soon.</p>';
        });
});
