function startTour1a() {
    const alreadySeen = localStorage.getItem('tourSeen');
    if (alreadySeen) {
        return; // If tour has already been seen, exit function
    }
    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            classes: 'shepherd-theme-custom',
            scrollTo: true
        }
    });
    const quitAction = () => {
        localStorage.setItem('tourSeen', true);
        tour.cancel();
    };
    const finishAction = () => {
        localStorage.setItem('tourSeen', true);
        tour.complete();
    };
    const quitButton = {
        text: 'Quit',
        action: quitAction,
        classes: 'shepherd-button'
    };
    const nextButton = {
        text: 'Next',
        action: tour.next,
        classes: 'shepherd-button'
    };
    const finishButton = {
        text: 'Finish',
        action: finishAction,
        classes: 'shepherd-button'
    };
    tour.addStep({
        id: 'step-1',
        text: 'Welcome to Nimbus-Weather!',
        attachTo: {
            element: 'div.hero-img > img',
            on: 'bottom'
        },
        buttons: [quitButton, nextButton]
    });
    tour.addStep({
        id: 'step-2',
        text: 'Your One Stop Solution for all Weather related Problems.',
        attachTo: {
            element: 'div.hero-img > img',
            on: 'bottom'
        },
        buttons: [quitButton, nextButton]
    });
    tour.addStep({
        id: 'step-3',
        text: 'Here are my socials to contact me.',
        attachTo: {
            element: 'a#github > i',
            on: 'right'
        },
        buttons: [quitButton, nextButton]
    });

    tour.addStep({
        id: 'step-4',
        text: 'Click here to check weather in your desired city or your own location.',
        attachTo: {
            element: 'li:nth-child(2) > a',
            on: 'bottom'
        },
        buttons: [quitButton, nextButton]
    });
    tour.start();
}

window.addEventListener('load', startTour1a);

function startTour1b() {
    
    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            classes: 'shepherd-theme-custom',
            scrollTo: true
        }
    });
    
    tour.addStep({
        id: 'step-1',
        text: 'Welcome to Nimbus-Weather!',
        attachTo: {
          element: 'div.hero-img > img',
          on: 'bottom'
        },
        buttons: [
          {
            text: 'Skip',
            action: tour.cancel
          },
          {
            text: 'Next ⏭️',
            action: tour.next
          }
        ]
      });
    tour.addStep({
        id: 'step-2',
        text: 'Your One Stop Solution for all Weather related Problems.',
        attachTo: {
          element: 'div.hero-img > img',
          on: 'bottom'
        },
        buttons: [
          {
            text: 'Skip',
            action: tour.cancel
          },
          {
            text: 'Next ⏭️',
            action: tour.next
          }
        ]
    });
    tour.addStep({
        id: 'step-3',
        text: 'Here are my socials to contact me.',
        attachTo: {
          element: 'a#github > i',
          on: 'right'
        },
        buttons: [
          {
            text: 'Skip',
            action: tour.cancel
          },
          {
            text: 'Next ⏭️',
            action: tour.next
          }
        ]
    });
    tour.addStep({
        id: 'step-4',
        text: 'Click here to check weather in your desired city or your own location.',
        attachTo: {
          element: 'li:nth-child(2) > a',
          on: 'bottom'
        },
        buttons: [
          {
            text: 'Skip',
            action: tour.cancel
          },
          {
            text: 'Next ⏭️',
            action: tour.next
          }
        ]
    });
    

    
    tour.start();
}

document.getElementById('start-tour-btn1').addEventListener('click', function() {
    startTour1b();
});
  



 