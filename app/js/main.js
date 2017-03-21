// Client Chart
var areaChart = c3.generate({
    size: {
        height: 220,
    },
    bindto: '#clientchart',
    data: {
        columns: [
            ['data1', 14, 10, 17, 5, 20, 5],
            ['data2', 0, 5, 0, 5, 0, 5]
        ],
        names: {
            data1: 'Acute Client',
            data2: 'New Client'
        },
        types: {
            data1: 'area-spline',
            data2: 'area-spline'
        },
        colors: {
            data1: '#82bee9',
            data2: '#213f7a'
        },

    }
});

// Throughput Chart
var areaChart = c3.generate({
    size: {
        height: 220,
    },
    bindto: '#throughputchart',
    data: {
        columns: [
            ['data1', 15, 10, 15, 5, 20, 5],
            ['data2', 0, 5, 0, 5, 0, 5]
        ],
        names: {
            data1: 'Acute Client',
            data2: 'New Client'
        },
        types: {
            data1: 'area-spline',
            data2: 'area-spline'
        },
        colors: {
            data1: '#82bee9',
            data2: '#213f7a'
        }
    }
});

// OS Client Chart
var chart = c3.generate({
    size: {
        height: 220,
    },
    bindto: '#osclientscharts',
    data: {

        columns: [
            ['data1', 15],
            ['data2', 65],
            ['data3', 20],
        ],
        names: {
            data1: 'ANDROID',
            data2: 'WINDOWS',
            data3: 'IOS'
        },
        colors: {
            data1: '#217dc4',
            data2: '#63beac',
            data3: '#213f7a' 
        },
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});


// SNR Charts
var chart = c3.generate({
    size: {
        height: 220,
    },
     bindto: '#snrcharts',
    data: {
        columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 70, 80, 50, 60, 40, 50],
            
        ],
        type: 'bar',
        groups: [
            ['data1','data2']
        ],
        names: {
            data1: 'ANDROID',
            data2: 'WINDOWS'
        },
        colors: {
            data1: '#82bee9',
            data2: '#e5e3e3'
        },
    }
});


// Clients By Performance Charts
var chart = c3.generate({
    size: {
        height: 220,
    },
     bindto: '#performancecharts',
    data: {
        columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 70, 80, 50, 60, 40, 50],
            
        ],
        type: 'bar',
        groups: [
            ['data1','data2']
        ],
        names: {
            data1: 'ANDROID',
            data2: 'WINDOWS'
        },
        colors: {
            data1: '#82bee9',
            data2: '#e5e3e3'
        },
    }
});

// Clients By Radio Chart
var chart = c3.generate({
    size: {
        height: 220,
    },
    bindto: '#radiocharts',
    data: {

        columns: [
            ['data1', 35],
            ['data2', 60],
        ],
        names: {
            data1: '2.4GHz',
            data2: '5GHz'
        },
        colors: {
            data1: '#213f7a',
            data2: '#63beac'
        },
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});



