let request = new XMLHttpRequest();
    request.open("GET", "podaci.json", false);
    request.send(null);
    let niz = JSON.parse(request.responseText);

    console.log("molimTeBrzino");

    for (let i in niz.filmovi) {
        document.getElementsByClassName("glavnidiv").innerHTML = 
        '<div class="article">';
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '<div class="carddiv1">'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '<img src=' + niz.filmovi[i].naziv +  '.webp" height="200px">'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '</div>'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '<div class="carddiv">'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '<h5><img src="element_images/time.svg" width="16px" height="16px">' + niz.filmovi[i].datumRecenzije + '</h5>'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '<h2>' + niz.filmovi[i].naziv + '(' + niz.filmovi[i].datumFilma + ')</h2>'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '<p>' + niz.filmovi[i].recenzija + '</p>'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '<div class="pomjeraj">'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '<a href="review.html">Citajte Review</a>'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '</div>'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                    '</div>'
        document.getElementsByClassName("glavnidiv").innerHTML = 
                '</div>'
        document.getElementsByClassName("glavnidiv").innerHTML = 
            '</div>'
        console.log("kurac" + i);
    }