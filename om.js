let request = new XMLHttpRequest();
    request.open("GET", "podaci.json", false);
    request.send(null);
    let niz = JSON.parse(request.responseText);

    let gdiv = document.getElementsByClassName("glavnidiv");

    console.log("molimTeBrzino");

    for (let i in niz.filmovi) {
        gdiv[0].innerHTML += 
        '<div class="article">'
        gdiv[0].innerHTML += 
                    '<div class="carddiv1">'
        gdiv[0].innerHTML += 
                    '<img src=images\\' + niz.filmovi[i].naziv.replaceAll(" ", ""); +  '.webp" height="200px">'
        gdiv[0].innerHTML += 
                    '</div>'
        gdiv[0].innerHTML += 
                    '<div class="carddiv">'
        gdiv[0].innerHTML += 
                    '<h5><img src="element_images/time.svg" width="16px" height="16px">' + niz.filmovi[i].datumRecenzije + '</h5>'
        gdiv[0].innerHTML += 
                    '<h2>' + niz.filmovi[i].naziv + '(' + niz.filmovi[i].godinaFilma.toString() + ')</h2>'
        gdiv[0].innerHTML += 
                    '<p>' + niz.filmovi[i].recenzija + '</p>'
        gdiv[0].innerHTML += 
                    '<div class="pomjeraj">'
        gdiv[0].innerHTML += 
                    '<a href="review.html">Citajte Review</a>'
        gdiv[0].innerHTML += 
                    '</div>'
        gdiv[0].innerHTML += 
                    '</div>'
        gdiv[0].innerHTML += 
                '</div>'
        gdiv[0].innerHTML += 
            '</div>'
        console.log("kurac" + i);
    }