let request = new XMLHttpRequest();
    request.open("GET", "podaci.json", false);
    request.send(null);
    let niz = JSON.parse(request.responseText);

    let nizDatuma = [];

    let gdiv = document.getElementsByClassName("leftcolumn");

    let tagovi = "";
    let imeSlike = "";

    console.log("molimTeBrzino");

    for (let i in niz.filmovi) {
        nizDatuma[i] = niz.filmovi[i].datumRecenzije;

        console.log("test" + i);
    }

if (nizDatuma.length > 1) 
    {
        nizDatuma.sort();

        let rec1 = nizDatuma[nizDatuma.length - 1];
        let rec2 = nizDatuma[nizDatuma.length - 2];

        for (let i in niz.filmovi) {
                if (niz.filmovi[i].datumRecenzije == rec1 || niz.filmovi[i].datumRecenzije == rec2) {
                    tagovi = "";

                    tagovi += '<div class="article">';
                    tagovi += '<div class="carddiv1">';
                    imeSlike = niz.filmovi[i].naziv.replaceAll(" ", "");
                    imeSlike = imeSlike.toLowerCase();
                    console.log(imeSlike);
                    tagovi += '<img src="images\\' + imeSlike + '.webp"' + ' height="200px">';
                    tagovi += '</div>';
                    tagovi += '<div class="carddiv">';
                    tagovi += '<h5><img src="element_images/time.svg" width="16px" height="16px">' + niz.filmovi[i].datumRecenzije + '</h5>';
                    tagovi += '<h2>' + niz.filmovi[i].naziv + '(' + niz.filmovi[i].godinaFilma.toString() + ')</h2>';
                    tagovi +=  '<p>' + niz.filmovi[i].plot + '</p>';
                    tagovi += '<div class="pomjeraj">';
                    tagovi += '<a href="review.html">Citajte Review</a>';
                    tagovi += '</div>';
                    tagovi += '</div>';
                    tagovi += '</div>';
                    tagovi += '</div>';

                    gdiv[0].innerHTML += tagovi;
                }
        }
    }

else if (nizDatuma.length == 1) 
    {
        let rec1 = nizDatuma[nizDatuma.length - 1];

        for (let i in niz.filmovi) {
                if (niz.filmovi[i].datumRecenzije == rec1) {
                    tagovi = "";

                    tagovi += '<div class="article">';
                    tagovi += '<div class="carddiv1">';
                    imeSlike = niz.filmovi[i].naziv.replaceAll(" ", "");
                    imeSlike = imeSlike.toLowerCase();
                    console.log(imeSlike);
                    tagovi += '<img src="images\\' + imeSlike + '.webp"' + ' height="200px">';
                    tagovi += '</div>';
                    tagovi += '<div class="carddiv">';
                    tagovi += '<h5><img src="element_images/time.svg" width="16px" height="16px">' + niz.filmovi[i].datumRecenzije + '</h5>';
                    tagovi += '<h2>' + niz.filmovi[i].naziv + '(' + niz.filmovi[i].godinaFilma.toString() + ')</h2>';
                    tagovi +=  '<p>' + niz.filmovi[i].plot + '</p>';
                    tagovi += '<div class="pomjeraj">';
                    tagovi += '<a href="review.html">Citajte Review</a>';
                    tagovi += '</div>';
                    tagovi += '</div>';
                    tagovi += '</div>';
                    tagovi += '</div>';

                    gdiv[0].innerHTML += tagovi;
                }
        }
    }

else 
    {
        tagovi = "";
        
        tagovi += '<div class="leftcolumn">'
        tagovi += 'Nemate recenzija!'
        tagovi += 'Pritisnite gumbičak da biste dodali svoju prvu recenziju!'

        tagovi += '<div class="gumbicak">'
        tagovi += '<a href="recenzije.html">'
        tagovi += '<img src="element_images/gumbic.png" width="200vw">'
        tagovi += '</div>'
        tagovi += '</a>'
        tagovi += '</div>'

        gdiv[0].innerHTML += tagovi;
    }