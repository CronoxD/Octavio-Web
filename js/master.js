/**
 * Lee los eventos "swipe" para rotar la tarjeta de un proyecto
 * y poder leer su descripción
 */

const projects = document.getElementsByClassName('projects');
const projectDesc = document.getElementsByClassName('project-desc');

const project1 = document.getElementById('p1');
const project2 = document.getElementById('p2');
const project3 = document.getElementById('p3');

const hammer1 = new Hammer(projects[0]);
var band1;
const hammer2 = new Hammer(projects[1]);
const hammer3 = new Hammer(projects[2]);

hammer1.on('swipe', animar.bind(null,0));
hammer2.on('swipe', animar.bind(null,1));
hammer3.on('swipe', animar.bind(null,2));


function animar(element) {
    if(projects[element].style.transform == 'rotateY(180deg)') {
        projects[element].style.transform = 'rotateY(0)';
        projectDesc[element].style.display = 'none';
    }
    else {
        projects[element].style.transform = 'rotateY(180deg)';
        projectDesc[element].style.display = 'block';
    }
}
