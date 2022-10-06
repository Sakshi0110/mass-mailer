document.getElementById("submitBtn").addEventListener("click", async function () {
    const emailCSVContents = await document.getElementById("fileBtn").files.item(0).text()
    const emailList = emailCSVContents.trim().split('\n')
    emailList.shift()
    let correctEmails = [];
    for (let emailId of emailList) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
            document.getElementById("valid").innerHTML += "<p>" + emailId + "</p>";
            correctEmails.push(emailId);
        }
        else {
            document.getElementById("invalid").innerHTML += "<p>" + emailId + "</p>";
        }
    }
    document.getElementById("continue").addEventListener("click", function () {
        window.open('mailto:' + correctEmails + '?subject=' + document.getElementById("subject").value + '&body=' +
            document.getElementById("msg").value, '_blank');
    })

})