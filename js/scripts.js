// Business Logic
function hitList(person) {
  this.person = person;
}

// capitalize(name) { barak obama
//   changes to lowerCase
//   var nameArray = name.split(" "); // ["barak", "obama"]
//   for each loop that capitalize first letter of each word in nameArray //
//   join the array back into a string
//   return string
// }

// User Interface Logic
$(document).ready(function() {
  $("#hitList").html(localStorage.getItem("hitItems"));
  $(".hitForms").submit(function(event) {

    event.preventDefault();

    var hitInput = $("input.killInput").val();
    // hitInput = capitalize(hitInput);
    var newHitList = new hitList(hitInput);

    if ((hitInput === "Saddam") || (hitInput === "saddam")) {
      $("ul#hitList").append("<li><input class='checkbox' type='checkbox'><span class='hit'>" + newHitList.person + "<img src='images/saddam.jpg'>" + "</span><a class='remove'>x</a><hr></li>");
    } else if ((hitInput === "bin Laden") || (hitInput === "Bin Laden") || (hitInput === "Osama") || (hitInput === "osama")) {
      $("ul#hitList").append("<li><input class='checkbox' type='checkbox'><span class='hit'>" + newHitList.person + "<img src='images/bin-laden.jpg'>" + "</span><a class='remove'>x</a><hr></li>");
    } else if ((hitInput === "Adolph") || (hitInput === "hitler") || (hitInput === "Hitler")) {
      $("ul#hitList").append("<li><input class='checkbox' type='checkbox'><span class='hit'>" + newHitList.person + "<img src='images/hitler.jpg'>" + "</span><a class='remove'>x</a><hr></li>");
    } else {
      $("ul#hitList").append("<li><input class='checkbox' type='checkbox'><span class='hit'>" + newHitList.person + "</span><a class='remove'>x</a><hr></li>");
    }

    $(".results").show();
  });

  // CHECKBOX TWEAKS
  $(document).on("change", ".checkbox", function() {
    if($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
    }
    $(this).parent().toggleClass("completed");

    localStorage.setItem("hitItems", $("#hitList").html());
  });

  $(document).on("click", ".remove", function() {
    $(this).parent().slideUp(200, function() {
      $(this).remove();

      localStorage.setItem("hitItems", $("#hitList").html());
    });
  });

});
