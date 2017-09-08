BO3-CLI
-------

![Imgur](http://i.imgur.com/cjeEGtL.jpg)


## How to Install

``` sh
npm install bo3-cli -g
```

## How to Use

Create your project folder and enter inside it

``` sh
$ mkdir ( project name )
$ cd ( project name )
```



### Init project

``` sh
$ bo3
$ bo3 init
```

### Generate page

``` sh
$ bo3 g page ( page name )

eg.: bo3 g page contacts
```
This will generate,
```
/pages/( page name ).php
/templates/( page name ).tpl
/site-assets/css/( page name ).css
/site-assets/js/( page name ).js

eg.:
/pages/contacts.php
/templates/contacts.tpl
/site-assets/css/contacts.css
/site-assets/js/contacts.js
```

### Generate page

``` sh
$ bo3 g page-e ( page element name )

eg.: bo3 g page-e slideshow
```
This will generate,
```
/templates-e/mod-( page element name )/index.html
/templates-e/mod-( page element name )/mod-( page element name ).tpl
/site-assets/css/mod-( page element name ).css

eg.:
/templates-e/mod-slideshow/index.html
/templates-e/mod-slideshow/mod-slideshow.tpl
/site-assets/css/mod-slideshow.css
```

### Generate favicon (not working yet)

``` sh
$ bo3 g favicon
```
This will generate based on /site-assets/favicon/favicon.png,
```
/site-assets/favicon/favicon_16.png
/site-assets/favicon/favicon_32.png
/site-assets/favicon/favicon_48.png
/site-assets/favicon/favicon_72.png
/site-assets/favicon/favicon_114.png
/site-assets/favicon/favicon_128.png
/site-assets/favicon/favicon_144.png
```

## License

Copyright (c) 2012-2014 GitHub, Inc. See the LICENSE file for license rights and
limitations (MIT).
