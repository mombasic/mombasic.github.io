let request = new XMLHttpRequest();
    request.open("GET", "podaci.json", false);
    request.send(null);
    let niz = JSON.parse(request.responseText);

    let gdiv = document.getElementsByClassName("glavnidivzaindividualnerecenzije");

    let tagovi = "";
    let imeSlike = "";

    let imeFilma = localStorage.getItem("imeFilma");

    console.log("molimTeBrzino");

    for (let i in niz.filmovi) {
        tagovi = "";

        if (niz.filmovi[i].nazivFilma === imeFilma){
            tagovi += '<div class="article">';

            tagovi += '<div class="carddiv1">';
            imeSlike = niz.filmovi[i].naziv.replaceAll(" ", "");
            imeSlike = imeSlike.toLowerCase();
            console.log(imeSlike);
            tagovi += '<img src="images\\' + imeSlike + '.webp"' + ' width="60%">';
            tagovi += '</div>';

            tagovi += '<div class="divicnekimali">';

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
            tagovi += '<img src="3-5stars.png"></img>';
            tagovi += '<img src="yesLike.png"></img>';
            tagovi += '</div>';

            tagovi += '</div>';

            tagovi += '</div>';

            gdiv[0].innerHTML += tagovi;
        }

        console.log("test" + i);
    }