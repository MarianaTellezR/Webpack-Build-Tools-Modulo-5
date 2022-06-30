import _ from 'lodash';
import './estilo.css';
import Imagen from './cat.jpg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './estilo.scss';

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration =>{
            console.log("SW ha sido registrado",registration);
        }).catch(err=>{
            console.log('SW no ha sido registrado ',err);
        });
    });
}

function componente() {
    const elemento = document.createElement('div');
    elemento.innerHTML = _.join(['Hola', Datos[0][1]],' ');
    elemento.classList.add('hola');
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);

    console.log(Datos);
    return elemento;
}

console.log(yaml.title);
console.log(json5.owner.name);

document.body.appendChild(componente());
