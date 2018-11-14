// JSON3.js
$(document).on("pagebeforeshow", "#jsonOut", function() {
  $.getJSON("ex6.json", function(data) {
    $("#students").html("");
    console.log(data);
    var totalStuds = data.HOGWARTS.students.length;

    for (stud = 0; stud < totalStuds; stud++) {
      $("#students").append(
        '<li id="' +
          stud +
          '" class="ui-btn ui-icon-carat-r  ui-btn-icon-right">' +
          '<a href="#studDetail" data-transition="slide">' +
          data.HOGWARTS.students[stud].firstName +
          "</a></li>"
      );
    }

    $("#students").on("click", "li", function() {
      var sid = Number($(this).attr("id"));

      $("#fName").html("First Name: " + data.HOGWARTS.students[sid].firstName);
      $("#lName").html("Last Name : " + data.HOGWARTS.students[sid].lastName);
      $("#Email").html("Email : " + data.HOGWARTS.students[sid].email);

      var totalPhones = data.HOGWARTS.students[sid].phones.length;

      $("#Phone").html("");
      for (ph = 0; ph < totalPhones; ph++) {
        $("#Phone").append(
          "Phone " +
            [ph + 1] +
            " : " +
            data.HOGWARTS.students[sid].phones[ph] +
            "<br>"
        );
      }
    });
  });
});
