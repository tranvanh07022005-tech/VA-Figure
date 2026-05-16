const ctxSales = document.getElementById('chartSalesProduct').getContext('2d');

new Chart(ctxSales, {
    type: 'line',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 9', 'Tháng 11', 'Tháng 12'],
        datasets: [{
            label: 'Sản phẩm',
            data: [165, 260, 180, 182, 155, 152, 250, 290, 280, 288, 265, 288],
            borderColor: '#5db1e4', 
            backgroundColor: 'transparent',
            borderWidth: 3,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#5db1e4',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.4, 
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: { boxWidth: 40, padding: 20 }
            }
        },
        scales: {
            y: {
                min: 140,
                max: 300,
                ticks: { stepSize: 20 }
            },
            x: {
                grid: { display: false } 
            }
        }
    }
});

const ctxOrders = document.getElementById('chartOrdersTotal').getContext('2d');

new Chart(ctxOrders, {
    type: 'pie',
    data: {
        labels: ['Đơn hàng thành công', 'Đơn hàng bị huỷ'],
        datasets: [{
            data: [920, 80], 
            backgroundColor: [
                '#2ecc71', 
                '#ff7675'  
            ],
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: true,
                position: 'top', 
                labels: {
                    usePointStyle: true, 
                    padding: 20,
                    font: { size: 12 }
                }
            }
        },
        layout: {
            padding: 10
        }
    }
});

const ctxDaily = document.getElementById('chartSalesDaily').getContext('2d');

new Chart(ctxDaily, {
    type: 'bar',
    data: {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
        datasets: [{
            label: 'Sản phẩm',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: [
                'rgba(255, 182, 193, 0.6)', 
                'rgba(255, 204, 128, 0.6)', 
                'rgba(255, 249, 196, 0.6)', 
                'rgba(178, 223, 219, 0.6)', 
                'rgba(187, 222, 251, 0.6)', 
                'rgba(225, 190, 231, 0.6)'  
            ],
            borderColor: [
                '#ffb6c1', '#ffcc80', '#fff9c4', '#b2dfdb', '#bbdefb', '#e1bee7'
            ],
            borderWidth: 2,
            borderRadius: 5 
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: { usePointStyle: true, padding: 15 }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 50, 
                max: 90,
                ticks: { stepSize: 10 }
            },
            x: {
                grid: { display: false } 
            }
        }
    }
});

const ctxMonthly = document.getElementById('chartOrderMonthly').getContext('2d');

new Chart(ctxMonthly, {
    type: 'pie',
    data: {
        labels: ['Đơn hàng thành công', 'Đơn hàng bị huỷ'],
        datasets: [{
            data: [65, 4], 
            backgroundColor: [
                '#2ecc71', 
                '#ff7675'  
            ],
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 15,
                    font: { size: 12 }
                }
            }
        }
    }
});

const ctxProfit = document.getElementById('chartProfit').getContext('2d');

new Chart(ctxProfit, {
    type: 'line',
    data: {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
        datasets: [{
            label: 'VND',
            data: [1650000, 2600000, 1800000, 1820000, 1550000, 1550000],
            borderColor: '#2ecc71', 
            backgroundColor: 'transparent',
            borderWidth: 4, 
            pointBackgroundColor: '#fff',
            pointBorderColor: '#2ecc71',
            pointBorderWidth: 2,
            pointRadius: 6,
            tension: 0, 
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: { boxWidth: 40, padding: 20 }
            }
        },
        scales: {
            y: {
                min: 1500000,
                max: 3000000,
                ticks: { stepSize: 500000 }
            },
            x: {
                grid: { display: true } 
            }
        }
    }
});