document.getElementById("submitBtn").addEventListener("click", async function () {
    let emailCSVContents = await document.getElementById("fileBtn").files.item(0).text()
    emailCSVContents = emailCSVContents.replaceAll("\r", "")
    const emailList = emailCSVContents.trim().split('\n')
    emailList.shift()
    if (emailList.length !== 0) {
        document.getElementById("validInvalid").style.visibility = 'visible'
        document.getElementById("continue").style.visibility = 'visible'
    }
    let correctEmails = [];
    for (let emailId of emailList) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
            document.getElementById("valid").innerHTML += "<p>" + emailId + "</p>";
            if (correctEmails.length < 100)
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