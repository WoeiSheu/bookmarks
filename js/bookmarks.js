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
    loadLinks("common");
    $("div.main h2.sub-header").text("Common Links");
}

init();

$("#about").popover({
    trigger: "click",
    animation: "true",
    delay: { "show": 100, "hide": 100 },
    placement: "right",
    title: "About",
    content: "我既无未来，也无往昔。若我羁留于此，我便羁留于前行。若我前行，前路上即有我的羁留。惟爱与死能将其改变。"
});

$("#contact").popover({
    trigger: "click",
    animation: "true",
    placement: "right",
    title: "Contact",
    content: "Please contact me by xuweiiam@gmail.com."
});

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

$("#search").on('input',function() {
    console.log( this.value );
});