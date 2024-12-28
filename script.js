document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/json/catchphrase.json')
        .then(response => response.json())
        .then(data => {
            const catchphrases = data.catchphrases;
            const randomIndex = Math.floor(Math.random() * catchphrases.length);
            document.getElementById("catchphrase").innerHTML = catchphrases[randomIndex];
        })
        .catch(error => console.error('Error loading Stupid Catchphrase JSON:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/json/project.json')
        .then(response => response.json())
        .then(data => {
            const projects = data;
            console.log(projects);

            const container = document.getElementById('card-container');

            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'card';

                const icon = document.createElement('img');
                icon.src = project.ProjectIcon;
                icon.alt = project.ProjectName;

                const content = document.createElement('div');
                content.className = 'card-content';

                const name = document.createElement('h3');
                name.textContent = project.ProjectName;

                const description = document.createElement('p');
                description.textContent = project.ProjectSmallDescription;

                const link = document.createElement('a');
                link.href = project.ProjectLink;
                link.innerHTML = '<strong>></strong>';
                link.className = 'learn-more';

                content.appendChild(name);
                content.appendChild(description);
                content.appendChild(link);

                card.appendChild(icon);
                card.appendChild(content);

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});