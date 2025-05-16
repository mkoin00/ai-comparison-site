
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('modelChart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['創造性', '正確性', '多言語対応', '会話継続力', 'コード生成'],
      datasets: [{
        label: 'ChatGPT',
        data: [9, 8, 7, 8, 9],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  });
});
