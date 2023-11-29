document.addEventListener('DOMContentLoaded', function() {
    //sidenav intitialisation 
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

  //datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd, mmmm, yyyy",
      i18n: {done: "Select"}
    })