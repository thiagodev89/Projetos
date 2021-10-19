<script>
    $('document').ready(function() {
        $("#cpf_cnpj").autocomplete({
            source: "<?php print $url; ?>",
            minLength: 3,
            select: function(event, ui) {
                $("#").val(ui.item.value);
                $("#").val(ui.item.label);
                return false;
            },
            focus: function(event, ui) {
                $("#").val(ui.item.value);

                return false;
            },
            change: function(event, ui) {

                let v = $("#").val();
                if () {
                    $("#").val(ui.item.value);
                    $("#").val(ui.item.label);
                } else {
                    $("#").val('');
                    $("#").val('');
                }
                return false;
            }
        }).data("autocomplete")._renderItem = function(ul, item) {
            return $("<li></li>")
                .data("item.autocomplete", item)
                .append("<a>" + item.label + "<br>" + item.value + "</a>")
                .appendTo(ul);
            }
    });
</script>