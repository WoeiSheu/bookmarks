function loadLinks(classification){
    $.ajax({
        type:"GET",
        url:"content.json",
        dataType:"json",
        success: function(data){
            for( var item in data[classification] ) {
                var link = "<tr><td>";
                link += item;
                link += "</td><td><p>";
                $.each( data[classification][item],function(k,v) {
                    link += ( '<a href="' + v + '">' + k + '</a>');
                });
                link += "</p></td></tr>";
                $('#links').append(link);
            }
        }
    });
}

function init() {
    loadLinks("all");
    $("div.main h2.sub-header").text("All Links");
}

init();

$("#allLinks").click(function() {
    $("div.main h2.sub-header").text("All Links");
    //$('#links').remove();   //删除选中元素
    $('#links').empty();    //删除选中元素的子元素
    loadLinks("all");
});

$("#commonLinks").click(function() {
    $("div.main h2.sub-header").text("Common Links");
    $('#links').empty();
    loadLinks("common");
});

$("#recentLinks").click(function() {
    $("div.main h2.sub-header").text("Recent Links");
    $('#links').empty();
    loadLinks("recent");
});