let request = new XMLHttpRequest();
    request.open("GET", "podaci.json", false);
    request.send(null);
    let niz = JSON.parse(request.responseText);

    let gdiv = document.getElementsByClassName("glavnidivzaindividualnerecenzije");

    let tagovi = "";
    let imeSlike = "";

    let imeFilma = localStorage.getItem("imeFilma");

    console.log(imeFilma);

    for (let i in niz.filmovi) {
        tagovi = "";

        let nazivporemecen = niz.filmovi[i].naziv.replaceAll(" ", "");
        nazivporemecen = nazivporemecen.toLowerCase();

        if (nazivporemecen == imeFilma){
            tagovi += '<div class="article">';

            console.log("odabran" + imeFilma);

            tagovi += '<div class="carddiv1" style="width:60%">';
            imeSlike = niz.filmovi[i].naziv.replaceAll(" ", "");
            imeSlike = imeSlike.toLowerCase();
            console.log(imeSlike);
            tagovi += '<img src="images\\' + imeSlike + '.webp"' + ' width="90%" height="90%">';
            tagovi += '</div>';

            tagovi += '<div class="divicnekimali" style="width:60%">';

            tagovi += '<div class="divjosmanji">RECENZIJA</div>';

            tagovi += '<p>' + niz.filmovi[i].recenzija + '</p>';

            tagovi += '</div>';

            tagovi += '</div>';

            tagovi += '<div class="article">';
            tagovi += '<div class="divicnekimali">';
            tagovi += '<div class="divjosmanji">PLOT</div>';
            tagovi +=  '<p>' + niz.filmovi[i].plot + '</p>';
            tagovi += '</div>';

            tagovi += '<div class="divicnekimali">';
            tagovi += '<div class="divjosmanji">FINALNA OCJENA</div>';
            tagovi += '<img src="element_images/' + niz.filmovi[i].rating + 'stars.png"></img>';

            if (niz.filmovi[i].like) tagovi += '<img src="element_images/yesLike.png"></img>';
            else tagovi += '<img src="element_images/noLike.png"></img>';

            tagovi += '</div>';

            tagovi += '</div>';

            tagovi += '</div>';

            gdiv[0].innerHTML += tagovi;
        }

        console.log("test" + i);
    }