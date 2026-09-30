document.addEventListener("DOMContentLoaded", function () {

    // Load Header D:\siddhicoaltrading.com\components\footer.html
    fetch("https://siddhicoaltrading.com/components/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to load header.html");
            }

            return response.text();
        })
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error("Header loading error:", error);
        });


    // Load Footer
    fetch("https://siddhicoaltrading.com/components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to load footer.html");
            }

            return response.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error("Footer loading error:", error);
        });

});