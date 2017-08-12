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

$("#contact").popover({
  trigger: "click",
  animation: "true",
  placement: "right",
  title: "Contact",
  content: "Please contact me by xuweiiam@gmail.com."
});

$("#allLinks").click(function() {
  $("div.main h2.sub-header").text("All Links");
  toggleActive('#allLinks');
  //$('#links').remove();   //删除选中元素
  $('#links').empty();    //删除选中元素的子元素
  loadLinks("all");
});
$("#commonLinks").click(function() {
  $("div.main h2.sub-header").text("Common Links");
  toggleActive('#commonLinks');
  $('#links').empty();
  loadLinks("common");
});
$("#recentLinks").click(function() {
  $("div.main h2.sub-header").text("Recent Links");
  toggleActive('#recentLinks');
  $('#links').empty();
  loadLinks("recent");
});
function toggleActive(id) {
  $('#navbar ul li').removeClass('active');
  $(id).addClass('active');
};


$('#logo').click(function() {
  window.location.href = 'https://hypocrisy.info';
});


$("#search").on('input',function() {
  console.log( this.value );
});