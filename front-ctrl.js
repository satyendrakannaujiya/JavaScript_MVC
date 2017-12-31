const _scope = {};

function navigationCtrl(fragmentContainerId) {
    console.log('hello');
    const container = document.querySelector('#' + fragmentContainerId);
    window.addEventListener('hashchange', function() {
        console.log('navigation ctrl -->');
        const urlHash = window.location.hash;
        const hashKey = urlHash.substr(1);
        const genFn = routes[hashKey].generatorFn;
        const ctrl = routes[hashKey].controller;


        ctrl(genFn, function(processedTemplate) {
            console.log('update view...');
            
            container.innerHTML = processedTemplate;
            container.classList.add('pre-animation');
            setTimeout(function() {
                container.classList.remove('pre-animation')
            }, 300)
        });
    });
}

navigationCtrl('container');