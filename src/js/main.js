
// Alert window popup
function alertPopup(){
    const alert = document.getElementById("alert");
    alert.classList.toggle("change");
}


// Cookies plus counter
var count = 0;
function clickCounter(){
    function getCookie(name){
        var cookieArr = document.cookie.split(";");

        for(var i = 0; i < cookieArr.length ; i++) {
            var cookiePair = cookieArr[i].split("=");

            if(name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1])
            }
        }
        return null;
    }
    var counter = JSON.parse(getCookie('counter'))
    if(counter == undefined){
        counter = 1;
        console.log("Counter was created");
        document.cookie = 'counter=' + JSON.stringify(counter) + ";domain=;path=/";
    }
    else{
        counter += 1;
        document.cookie = 'counter=' + JSON.stringify(counter) + ";domain=;path=/";
    }
    var count = JSON.parse(getCookie('counter'));
    if(count >= 5){
        document.getElementById("reset-button").style.display = "block";
    }
    else{
        document.getElementById("reset-button").style.display = "none";
    }
    document.getElementById("counter").innerHTML = count;
}
function resetCounter(){
    document.cookie = 'counter=' + JSON.stringify(counter = 0) + ";domain=;path=/";
    alertPopup();
}

// Dynamic table
// W zadaniu ma się wyświetlić numer mieszkania, niestety w danej bazie nie ma takiej danej
var used = 0;
function getTableData(){
    var table = document.getElementById("table-data")
    var con=0;
    var array = "https://jsonplaceholder.typicode.com/users";
    const alert = document.getElementById("alert");
    alert.classList.toggle("animation-change");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        if(used == 0){
            used += 1;
            table.innerHTML+=`
                <tr class="table-title">
                    <td>Name Surname</td>
                    <td>E-mail</td>
                    <td>Address</td>
                    <td>Phone number</td>
                    <td>Company Name</td>
                </tr>
            `
            for (let index = 0; index < array.length; index++) {
                table.innerHTML+=`
                    <tr>
                        <td>${data[con].name}</td>
                        <td>${data[con].email}</td>
                        <td>${data[con].address.city}${data[con].address.zipcode}${data[con].address.street}</td>
                        <td>${data[con].phone}</td>
                        <td>${data[con].company.name}</td>
                    </tr>
                `
                con += 1;
            }
        }
        else{
            table.innerHTML = ``
            table.animation = ""
            used = 0;
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}