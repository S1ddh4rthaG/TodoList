let id = 1;

$taskArea = $("#new-item");
$todoListArea = $(".todo-list-items");
$todoListDone = $(".todo-list-items-done");

$todoListArea.on("click", "li input", function (event) {
  $elmt = $(event.target).parent();

  $elmt.children("span").addClass("completed");
  $todoListDone.hide().prepend($elmt.clone()).fadeIn("fast");

  $elmt.fadeOut("fast", function () {
    $(this).remove();
  });
});

$todoListDone.on("click", "li input", function (event) {
  $elmt = $(event.target).parent();

  $elmt.children("span").removeClass("completed");
  $todoListArea.append($elmt.clone());

  $elmt.fadeOut("fast", function () {
    $(this).remove();
  });
});

$("#add").on("click", function () {
  let value = $taskArea.val();

  $item = $(
    `<li class="list-group-item text-wrap" id="${"item" + id++}">\
        <input class="form-check-input me-1 p-2" type="checkbox">\
        <span class="p-2 align-middle">${value}</span>\
     </li>`
  );

  if (value !== "") {
    $todoListArea.prepend($item);
    $taskArea.val("");
  }
});
