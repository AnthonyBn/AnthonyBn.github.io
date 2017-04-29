/*$.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});*/
function RequeteApi(url, elementID) {
    

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj), null, 2);
            //document.getElementById(elementID).innerHTML = jsonPretty;
            output(syntaxHighlight(jsonPretty));
}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}
function homePageLoading() 
{
    var url = "https://bitcoin.mubiz.com/info";
    var elementID = "info";
    RequeteApi(url, elementID);
    url = "https://bitcoin.mubiz.com/blockchaininfo";
    elementID="blockchaininfo";
    RequeteApi(url,elementID);
    url = "https://bitcoin.mubiz.com/peerinfo";
    elementID="peerinfo";
    RequeteApi(url,elementID);
    url = "https://bitcoin.mubiz.com/mininginfo";
    elementID="mininginfo";
    RequeteApi(url,elementID);
//GET Adresse bitcoin URL https://bitcoin.mubiz.com/address/ bitcoin_address /
}
function RechercheAddress()
{
    var url = "https://bitcoin.mubiz.com/address/";
    var elementID = "Recherche";
    var address=document.getElementById("RechercheAddress").elements[0].value;
    var isOk = /^[0-9a-zA-Z]{34}$/.test(address);
    if(!isOk) {

        alert('invalid address');
    }
    else
        {
            
    url+=address;
            url+="/";
    RequeteApi(url, elementID);
            
        }
}
function RechercheTransaction()
{
    var url = "https://bitcoin.mubiz.com/transaction/";
    var elementID = "Recherche";
    var address=document.getElementById("RechercheTransaction").elements[0].value;
    var isOk  = /^[0-9a-fA-F]{64}$/.test(address);
    if(!isOk) {

        alert('invalid hash');
    }
    else
        {
            
    url+=address;
            url+="/";
    RequeteApi(url, elementID);
        }
}
function RechercheBlockHash()
{
    var url = "https://bitcoin.mubiz.com/block_hash/";
    var elementID = "Recherche";
    var address=document.getElementById("RechercheBlockHash").elements[0].value;
    var isOk  = /^[0-9a-fA-F]{64}$/.test(address);
    if(!isOk) {

        alert('invalid hash');
    }
    else if(address[0]!=address[1]!=address[2]!=address[3]!=address[4]!=address[5]!=address[6]!=address[7]!=0)
        {
            
        alert('invalid hash');
        }
    else
        {
            
    url+=address;
            url+="/";
    RequeteApi(url, elementID);
        }
}
function RechercheBlockIndex()
{
    var url = "https://bitcoin.mubiz.com/block_index/";
    var elementID = "Recherche";
    var address=document.getElementById("RechercheBlockIndex").elements[0].value;
    
   // var isOk  = /^[0-9]{}$/.test(address);
    if(isNaN(address)) {
        alert('invalid index');
    }
    else
        {
            
    url+=address;
            url+="/";
    RequeteApi(url, elementID);
        }
}
function output(inp) {
  //  var child= document.body.pre
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}


