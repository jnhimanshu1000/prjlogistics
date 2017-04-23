function IsValidEmail(email) {
    if (email && email.length > 0) {
        if (!FindAllValidChars(email)) {  // check to make sure all characters are valid
            return false;
        }
        if (email.indexOf('@') < 1) { //  must contain @, and it must not be the first character
            return false;
        } else if (email.split('@').length > 2) { //  cannot contain more than one @
            return false;
        } else if (email.lastIndexOf('.') <= email.indexOf('@')) {  // last dot must be after the @
            return false;
        } else if (Math.max(email.indexOf('+'), email.indexOf('~')) >= email.indexOf('@')) {  // only the first part can have + ~
            return false;
        } else if (email.indexOf('@') == email.length) {  // @ must not be the last character
            return false;
        } else if (email.indexOf('..') >= 0) { // two periods in a row is not valid
            return false;
        } else if (email.charAt(email.length - 1).indexOf('.') >= 0 || email.indexOf('.') == 0) {  // . must not be the first or the last character
            return false;
        }
        return true;
    } else {
        return false;
    }
}
function checkValidation(name, city, emailid, contact, comment, address) {
    var validation = '';
    if (name == '')
        validation = 'Name';
    if (contact == '') {
        if (validation != '')
            validation += ', ';
        validation += 'Mobile No';
    }
    if (emailid == '') {
        if (validation != '')
            validation += ', ';
        validation += 'Email ID';
    }
    if (city != null && city == '') {
        if (validation != '')
            validation += ', ';
        validation += 'City';
    }
    if (address != null && address == '') {
        if (validation != '')
            validation += ', ';
        validation += 'Address';
    }
    if (comment != null && comment == '') {
        if (validation != '')
            validation += ', ';
        validation += 'Comments';
    }
    return validation;
}
function FindAllValidChars(email) {
    var parsed = true;
    var validMailchars = "abcdefghijklmnopqrstuvwxyz0123456789@.-_+~'";
    for (var i = 0; i < email.length; i++) {
        var letter = email.charAt(i).toLowerCase();
        if (validMailchars.indexOf(letter) != -1)
            continue;
        parsed = false;
        break;
    }
    return parsed;
}
function OnSaveClick() {
    var name;
    var city = null;
    var emailid;
    var contact;
    var comment;
    var address = null;
    if (document.getElementById('ContentPlaceHolder1_Common_txt_Name'))
        name = document.getElementById('ContentPlaceHolder1_Common_txt_Name').value;
    else
        name = document.getElementById('ContentPlaceHolder1_txt_Name').value;

    if (document.getElementById('ContentPlaceHolder1_Common_txt_EmailID'))
        emailid = document.getElementById('ContentPlaceHolder1_Common_txt_EmailID').value;
    else
        emailid = document.getElementById('ContentPlaceHolder1_txt_EmailID').value;

    if (document.getElementById('ContentPlaceHolder1_Common_txt_Mobile'))
        contact = document.getElementById('ContentPlaceHolder1_Common_txt_Mobile').value;
    else
        contact = document.getElementById('ContentPlaceHolder1_txt_Mobile').value;
    if (document.getElementById('ContentPlaceHolder1_Common_txt_Comment'))
        comment = document.getElementById('ContentPlaceHolder1_Common_txt_Comment').value;
    else
        comment = document.getElementById('ContentPlaceHolder1_txt_Comment').value;

    if (document.getElementById('ContentPlaceHolder1_txt_Address'))
        address = document.getElementById('ContentPlaceHolder1_txt_Address').value;
    if (document.getElementById('ContentPlaceHolder1_txt_City'))
        city = document.getElementById('ContentPlaceHolder1_txt_City').value;
    var validation = checkValidation(name, city, emailid, contact, comment, address);
    if (validation != '') {
        alert("Please enter " + validation);
        return false;
    }
    if (emailid != '') {
        if (!IsValidEmail(emailid)) {
            alert("Please enter valid Email-ID");
            return false;
        }
    }
    if (contact != '') {
        if (isNaN(contact) || contact.length != 10) {
            validation = 'contact';
            alert("Please enter 10 digit valid mobile number");
            return false;
        }
    }
    setTimeout("ClearData()", 1000);
}
function ClearData() {
    alert('Thank you For Writting us. We will contact you soon....');
}

$('#btnSave').click(function () {
    $.ajax({
        url: "/Email/GetData",
        type: "POST",
        data: JSON.stringify({ 'name': $('#name').val(), 'emailId': $('#emailId').val(), 'phone': $('#phone').val(), 'comments': $('#comments').val() }),
        dataType: "json",
        traditional: true,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            alert("We wll contact you shortly!!!");
        },
        error: function () {
            alert("We wll contact you shortly!!!");
        }
    });
});