var headerblock = document.getElementById('header-template').innerHTML;
var template = Handlebars.compile(headerblock);
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

document.getElementById('header-1').innerHTML += linksData;

Handlebars.registerHelper('isActive', function(element, options){
    if($(element).hasClass('active')){
         return options.fn(this);
    }
    return options.inverse(this);
  });





/*function handleNavItems(navItems) {
    return navItems.map(el => ({
      ...el,
      customClass: window.location.pathname.indexOf(el.activeLocation) !== -1 ? 'active' : '',
    }));
  }
  */