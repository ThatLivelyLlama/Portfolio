const about = document.querySelector('.aboutNav')

const experience = document.querySelector('.experienceNav')

const skills = document.querySelector('.skillsNav')

const projects = document.querySelector('.projectsNav')

const contact = document.querySelector('.contactNav')

const skillsPage = document.querySelector("#skillsPageTop")



about.addEventListener('click', function(){
    document.getElementById("aboutPageTop").scrollIntoView({behavior: 'smooth'});
})

experience.addEventListener('click', function(){
    document.getElementById("experiencePageTop").scrollIntoView({behavior: 'smooth'});
})

skills.addEventListener('click', function(){
    document.getElementById("skillsPageTop").scrollIntoView({behavior: 'smooth'});
})

projects.addEventListener('click', function(){
    document.getElementById("projectsPageTop").scrollIntoView({behavior: 'smooth'});
})

contact.addEventListener('click', function(){
    document.getElementById("contactPageTop").scrollIntoView({behavior: 'smooth'});
})



const counters = document.querySelectorAll('.counter');
const speed = 50; 



skills.addEventListener('click', function(){
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    

            const inc = target / speed;

    

            if (count < target) {

                counter.innerText = Math.ceil(count + inc);

                setTimeout(updateCount, 100);
            } else {
                counter.innerText = target;
            }
        };
    
        updateCount();
    });
});

skillsPage.addEventListener('mouseenter', function(){
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    

            const inc = target / speed;

            if (count < target) {

                counter.innerText = Math.ceil(count + inc);

                setTimeout(updateCount, 100);
            } else {
                counter.innerText = target;
            }
        };
    
        updateCount();
    });
});

