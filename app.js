const buttonElement = document.querySelector('.inputSearch');
const inputElement = document.querySelector('.btn');
const form = document.getElementById('myForm');
const table = document.getElementById('table');



form.addEventListener('submit', function(e) {
    e.preventDefault()
    const country = buttonElement.value;
    var url = 'https://api.covid19api.com/total/dayone/country/' + country
    confirmed.innerHTML = ''
    recovered.innerHTML = ''
    deaths.innerHTML = ''
    fetch(url)

    .then((res) => res.json())
        .then((res) => {
            var length = res.length
            var i = length - 1
            var confirmed = document.getElementById('confirmed')
            var recovered = document.getElementById('recovered')
            var deaths = document.getElementById('deaths')

            confirmed.append(res[i].Confirmed)
            recovered.append(res[i].Recovered)
            deaths.append(res[i].Deaths)
        })
        .catch((error) => {

            console.log('error ', error)
        });

})
$(document).ready(function() {
    init()


    function init() {
        var url = 'https://api.covid19api.com/summary'

        $.get(url, function(data) {
            console.log(data);
            data = `
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalRecovered}</td>
            <td>${data.Global.TotalDeaths}</td>

            `
            $('#data').html(data)
        })
    }
})
$(document).ready(function() {
    init()


    function init() {
        var url = 'https://api.covid19api.com/summary'

        $.get(url, function(data) {
            console.log(data);
            data = `
            <td>${data.Global.NewConfirmed}</td>
            <td>${data.Global.NewRecovered}</td>
            <td>${data.Global.NewDeaths}</td>

            `
            $('#newData').html(data)

        })
        $.get(url, function(data) {
            console.log(data.Date);
            data = `
            <h5>${data.Date}</h5>
            `

            $('#date').html(data)

        })

    }
})