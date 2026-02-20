let request = new XMLHttpRequest();
    request.open("GET", "podaci.json", false);
    request.send(null);
    let niz = JSON.parse(request.responseText);

    let gdiv = document.getElementsByClassName("glavnidiv");

    let tagovi = "";
    let imeSlike = "";

    localStorage.clear();

    let brojF = 0;

    console.log("molimTeBrzino");

    for (let i in niz.filmovi) {
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
        tagovi += '<a class="fudo" href="review.html">Citajte Review</a>';
        tagovi += '</div>';
        tagovi += '</div>';
        tagovi += '</div>';
        tagovi += '</div>';

        gdiv[0].innerHTML += tagovi;

        

        console.log("test" + i);
    }

    let nn = document.getElementsByClassName("fudo");

    for (let i = 0; i < nn.length; i++)
        {
        nn[i].addEventListener("click", function(){
            let imeFilma = niz.filmovi[i].naziv.replaceAll(" ", "");
            imeFilma = imeFilma.toLowerCase();
            localStorage.setItem("imeFilma", imeFilma);
                                
            console.log(localStorage.getItem("imeFilma"));

                                
            }); 
        }

                    