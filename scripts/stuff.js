$(document).ready(function() {
    $(".dropdown").click(function(e) {
        e.stopPropagation();
        let dropdownContent = $(this).find(".dropdown-content");

        if (dropdownContent.is(":visible")) {
            dropdownContent.fadeOut(250);
        } else {
            dropdownContent.fadeIn(250);
        }
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $(".dropdown-content").fadeOut(250);
        }
    });
});