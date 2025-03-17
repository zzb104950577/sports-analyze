document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderMatches(data.matches);
            setupEventListeners();
        });
});

function renderMatches(matches) {
    const container = document.getElementById('match-list');
    
    matches.forEach(match => {
        const matchHTML = `
            <div class="match-item" data-id="${match.id}">
                <div class="match-header">
                    <span>编号：${match.id}</span>
                    <span>${match.home} vs ${match.away}</span>
                </div>
                <div class="analysis-section">
                    <h3>深度分析</h3>
                    <div class="analysis-item">
                        <h4>胜平负分析</h4>
                        <p>${match.analysis.spf}</p>
                    </div>
                    <div class="analysis-item">
                        <h4>总进球预测</h4>
                        <p>${match.analysis.zjq}</p>
                    </div>
                    <div class="recommendation">
                        <p>推荐方案：${match.recommendation}</p>
                        <p>预期比分：${match.prediction.score}</p>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', matchHTML);
    });
}

function setupEventListeners() {
    document.querySelectorAll('.match-item').forEach(item => {
        item.addEventListener('click', () => {
            const analysis = item.querySelector('.analysis-section');
            analysis.classList.toggle('active');
        });
    });
}
