function getAllMusic() {
    $(document).ready(function () { //function available after the document is loaded:
        $.ajax({
            url: 'http://www.devcodecampmusiclibrary.com/api/music',
            dataType: "json",
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                $('.table-body').html(''); //empties table
            }
        })
            .then(function (data) {
                $.each(data, function (index, value) { //.each ~loop for jQuery for each object, return key value pair
                    $('.table-body').append(
                        "<tr>" +
                        "<td>" + value.id + "</td>" +
                        "<td>" + value.title + "</td>" +
                        "<td>" + value.album + "</td>" +
                        "<td>" + value.artist + "</td>" +
                        "<td>" + value.genre + "</td>" +
                        "<td>" + value.releaseDate + "</td>" +
                        "</tr>"
                    );
                });
            });
        });
}

getAllMusic();