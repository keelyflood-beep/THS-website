document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('substack-feed');
    if (!container) return;

    const rssUrl = 'https://thehonestsalesperson.substack.com/feed';
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            container.innerHTML = '';
            data.items.slice(0, 3).forEach(post => {
                const pubDate = new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                const snippet = post.description.replace(/<[^>]*>?/gm, '').substring(0, 130) + '...';
                container.innerHTML += `
                    <div class="surface-box article-card">
                        <div>
                            <span class="article-date">${pubDate}</span>
                            <h3 class="article-title">
                                <a href="${post.link}" target="_blank">${post.title}</a>
                            </h3>
                            <p class="article-snippet">${snippet}</p>
                        </div>
                        <a href="${post.link}" target="_blank" class="article-link">
                            Read Article <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                `;
            });
        })
        .catch(() => {
            container.innerHTML = '<p class="text-center text-muted">Unable to load articles right now. Please visit the Substack directly.</p>';
        });
});
