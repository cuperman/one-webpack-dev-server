import HelloAngular from './hello_angular';

const root = document.createElement('div');
root.setAttribute('ng-app', 'root');
document.body.appendChild(root);

root.appendChild(document.createElement('hello-angular'));
