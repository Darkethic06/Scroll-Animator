# Scroll Animator

This Library helps to create an effect where elements are shown as the user scrolls down the web page. Scroll Animator does not effect your resposnive page behavior. 


## Documentation




Add this CSS link into your HTML File :

```bash
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Darkethic06/Scroll-Animator/style.min.css">
```
Next, Add this JS link into HTML File :

```bash
   <script src="https://cdn.jsdelivr.net/gh/Darkethic06/Scroll-Animator/script.min.js"></script
```

You can also Add This HTML Snippet :

```bash
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Scroll Animator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Darkethic06/Scroll-Animator/style.min.css">
  </head>
  <body>

    <script src="https://cdn.jsdelivr.net/gh/Darkethic06/Scroll-Animator/script.min.js"></script
  </body>
</html>
```
## Usage/Examples
Add this CSS to your ```<body>``` tag
```javascript
body{
    overflow-x: hidden;
}
```
For Left Side Animation :
```javascript
<div class="fromLeft" id="fromLeft">

  <h1>Animation From Left</h1>

</div>
```
For Right Side Animation :
```javascript
<div class="fromRight" id="fromRight">

  <h1>Animation From Right</h1>

</div>
```