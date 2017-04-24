function ReminderSend() {
    var Name = $.trim($('txt_Name').val());
    var MobileNumber = $.trim($('txt_Mobile').val());
    var EmailID = $.trim($('txt_EmailID').val());
}
function GetApiLoggedInUser(Name, MobileNumber, EmailID) {

    var ApiLoggedInUser =
   {
       Name: Name,
       MobileNumber: MobileNumber,
       EmailID: EmailID,
   }
    return ApiLoggedInUser;
}
function ClearActiveClass() {
    if (document.getElementById('menu_home'))
        document.getElementById('menu_home').classList.remove("active");
    if (document.getElementById('menu_aboutus'))
        document.getElementById('menu_aboutus').classList.remove("active");
    if (document.getElementById('menu_industries'))
        document.getElementById('menu_industries').classList.remove("active");
    if (document.getElementById('menu_services'))
        document.getElementById('menu_services').classList.remove("active");
    if (document.getElementById('menu_careers'))
        document.getElementById('menu_careers').classList.remove("active");
    if (document.getElementById('menu_client'))
        document.getElementById('menu_client').classList.remove("active");
    if (document.getElementById('menu_contact'))
        document.getElementById('menu_contact').classList.remove("active");
    var pageUrl = '';
    var indexOf = window.location.href.toString().lastIndexOf('/');
    if (indexOf > 0)
        pageUrl = window.location.href.toString().substring(indexOf + 1);
    switch (pageUrl.toLowerCase()) {
        case "index.html":
            document.getElementById('menu_home').classList.add("active");
            break;
        case "aboutus.html":
            document.getElementById('menu_aboutus').classList.add("active");
            break;
        case "industries.html":
            document.getElementById('menu_industries').classList.add("active");
            break;
        case "services.html":
            document.getElementById('menu_services').classList.add("active");
            break;
        case "careers.html":
            document.getElementById('menu_careers').classList.add("active");
            break;
        case "contactus.html":
            document.getElementById('menu_contact').classList.add("active");
            break;
        case "ourclient.html":
            document.getElementById('menu_client').classList.add("active");
            break;            
        default:
            document.getElementById('menu_home').classList.add("active");
            break;
    }
}
ClearActiveClass();
