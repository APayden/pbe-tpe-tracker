// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap
//= require datatables
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function () {
    $(document).ready(function () {
        Turbolinks.clearCache();
        $('#playerTable').DataTable({
            "order": [[4, "desc"]],
            columnDefs: [
                {type: "formatted-num", targets: 0}
            ]
        });

        $('.dataTables_length').addClass('bs-select');
    });
});

$(document).on('turbolinks:load', function () {
    $(document).ready(function () {
        Turbolinks.clearCache();
        $('#tpeTable').DataTable({
            "order": [[2, "desc"]]
        });

        $('.dataTables_length').addClass('bs-select');
    });
});

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "formatted-num-pre": function (a) {
        a = (a === "-" || a === "") ? 0 : a.replace(/[^\d\-\.]/g, "")
        return parseFloat(a)
    },

    "formatted-num-asc": function (a, b) {
        return a - b
    },

    "formatted-num-desc": function (a, b) {
        return b - a
    }
});
