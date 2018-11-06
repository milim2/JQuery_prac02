
$.ajax({
    dataType: "json",
    url: "as6_json.json",
    data: data,
    success: success
});

$.getJSON( "as6_json.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });