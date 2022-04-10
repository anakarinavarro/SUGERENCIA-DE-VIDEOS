
class Multimedia{
    url;
    constructor(url){
        this.url = url;
    }

    setInicio(){}
}
    


class Reproductor extends Multimedia{
    constructor(id){
        super(`https://player.vimeo.com/video/${id}`)
        this.id = id;
    }
    playMultimedia(){
        iframeMusica.src = this.url;
        iframePelicula.src = this.url;
        iframeSerie.src = this.url;

    }
    setInicio(inicio){
        iframeMusica.src = (this.url + tiempo);
        iframePelicula.src = (this.url + tiempo);
        iframeSerie.src = (this.url + tiempo);
    }

}

const collapseOne = document.getElementById('btnMusica');
const collapseTwo = document.getElementById(`btnPeliculas`);
const collapseThree = document.getElementById(`btnSeries`);

const iframeMusica = document.getElementById('musica');
const iframePelicula = document.getElementById(`peliculas`);
const iframeSerie = document.getElementById(`series`);

const tiempo = "#t=60s";

collapseOne.addEventListener('click', ()=>{
    const reproductor = new Reproductor("6256094?h=97441ad019");
    reproductor.playMultimedia()
    reproductor.setInicio()
})

collapseTwo.addEventListener('click', ()=>{
    const reproductor = new Reproductor("300885856")
    reproductor.playMultimedia()
    reproductor.setInicio()
})

collapseThree.addEventListener('click', ()=>{
    const reproductor = new Reproductor("48363485?h=57d2679b75")
    reproductor.playMultimedia()
    reproductor.setInicio()
})
