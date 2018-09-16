/**
 * Main app script
 * 
 * Mostly basic dom manipulations
 */

(function(document, window){

  //Elements
  const mainNavButton = document.getElementsByClassName('main_nav_button')[0];
  const mainNavLogo = document.getElementsByClassName('main-nav_logo')[0];
  const mainNavNavigation = document.getElementsByClassName('main-nav_navigation')[0];
  const backOverlay = document.getElementsByClassName('background-overlay')[0];
  const primaryNavItems = document.querySelectorAll('.main-nav_list>li');
  const secondaryNavItems = document.querySelectorAll('.main-nav_list>li li');
  const secondaryNavMenu = document.querySelectorAll('.main-nav_list>li ol');
  const mainNavListButtons = document.querySelectorAll('.main-nav_list_button');

  //Mobile nav interactions
  mainNavButton.addEventListener('click', () => {
    //If nav collapsed
    if (mainNavButton.classList.contains('icon-toggle-open')) {
      mainNavButton.classList.remove('icon-toggle-open');
      mainNavButton.classList.add('icon-toggle-close');
      mainNavLogo.classList.add('active');
      mainNavNavigation.classList.add('active');
      backOverlay.style.display= 'block';
    } else {
      collapseMobile();
    }
  });

  //Main nav interactions
  primaryNavItems.forEach(item => {

    //Attach event listener only to primary items with a submenu
    const subMenu = item.querySelectorAll('ol')[0];
    if (subMenu) {
      const mainNavListButton = item.querySelectorAll('.main-nav_list_button')[0];
      item.addEventListener('click', () => {

        //Switch between states
        //This works for both destop and mobile
        if (!item.classList.contains('active')) {
          resetActiveStates();
          //Add active states to current item and related elements
          item.classList.add('active');
          subMenu.classList.add('active');
          mainNavListButton.classList.remove('icon-chevron-down');
          mainNavListButton.classList.add('icon-chevron-up');
          backOverlay.style.display= 'block';
        } else {
          item.classList.remove('active');
          subMenu.classList.remove('active');
          mainNavListButton.classList.remove('icon-chevron-up');
          mainNavListButton.classList.add('icon-chevron-down');
          backOverlay.style.display= 'none';
        }

      });
    }
  });

  //Close menu on secondary item click
  secondaryNavItems.forEach(item => {
    item.addEventListener('click', (event) => {

      event.stopPropagation();
      //For mobile nav
      if (isMobile()) {
        collapseMobile();
      } else {
        collapseDesktop();
      }

    });
  });


  //Click on background overlay
  backOverlay.addEventListener('click', () => {
    if (isMobile()) {
      collapseMobile();
    } else {
      collapseDesktop();
    }
  });

  //Misc methods
  let isMobile = () => {
    return window.innerWidth < 768;
  }

  let collapseMobile = () => {
    resetActiveStates();
    mainNavButton.classList.remove('icon-toggle-close');
    mainNavButton.classList.add('icon-toggle-open');
    mainNavLogo.classList.remove('active');
    mainNavNavigation.classList.remove('active');
    backOverlay.style.display= 'none';
  };

  let collapseDesktop = () => {
    resetActiveStates();
    backOverlay.style.display= 'none';
  }

  //Remove all elements active states in order to keep
  //just only one submenu active 
  let resetActiveStates = () => {
    secondaryNavMenu.forEach(subItem => subItem.classList.remove('active'));
    primaryNavItems.forEach(subItem => subItem.classList.remove('active'));
    mainNavListButtons.forEach(subItem => {
      subItem.classList.remove('icon-chevron-up');
      subItem.classList.add('icon-chevron-down');
    });
  }
  

}(document, window));