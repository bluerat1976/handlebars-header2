
var headerblock = document.getElementById('header-1').innerHTML;
var templateHeader = Handlebars.compile(headerblock);
var linksData = template({
    data: [
        {
            href: 'index.html',
            link: 'Home',
            activeLocation: '/index.html',
        },
        {
            href: 'about-us.html',
            link: 'О нас',
            activeLocation: '/about-us.html',
        },
        {
            href: 'services.html',
            link: 'Сервисы',
            activeLocation: '/services.html',
        },
        
    ]
});

document.getElementById('header').innerHTML += linksData;









/*function handleNavItems(navItems) {
    return navItems.map(el => ({
      ...el,
      customClass: window.location.pathname.indexOf(el.activeLocation) !== -1 ? 'active' : '',
    }));
  }
  */