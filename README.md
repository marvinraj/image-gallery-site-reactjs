# Image Gallery Site - ReactJS

## About this project
It's a very simple image gallery that displays images just like pinterest/instagram. it consists of only one page.

## Why work on this project? 
    - practice reactjs
    - brush up on html, css, js
    - learn how to divide website ui into components

## Useful links
1. [how to break UI of website into react components](https://dev.to/efkumah/how-to-break-the-ui-of-any-website-into-react-components-10lc)
2. [pinterest - ui inspo](https://www.pinterest.com/marvinraj77/lofi/)
3. [another ui inspo](https://www.youtube.com/watch?v=vUe91uOx7R0)

## Components for the webapp
1. navbar --> logo (left), socials (right)
2. header --> title (middle), short text (middle, below title)
3. image cards --> display various images

## How I plan to execute this project
1. structure the entire project
2. create all components first
2. work on navbar component
3. work on header component
4. work on image card componentwfwqf

## My thought processes as I work on this project
1. how do i want this site to look like? ui inspo?
    - searched online and found pinterest and another yt vid for inspo.
2. now how do i divide the ui into components?
    - researched and found an article written by Emmanuel Fordjour Kumah.
3. ok now time to create each components' file and work on it one by one.  
4. started working on navbar and i already got stuck. how do i center a div? HAHAHAH
    - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    - https://developer.mozilla.org/en-US/docs/Web/CSS/flex
5. now i cant seem to work my head around flex (which i thought i knew). "justify-content: center;
  flex-direction: column;" --> this does not work together, why?
    - [using this link to help me out](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
    - [the previous link did not help, this did](https://blog.hubspot.com/website/center-div-css)
6. time to add in the fonts!!
    - fonts from google font
    - font familiy chosen --> lato and lora
7. now, lets work on the final component
    - first lets just display one image card
    - damn, didnt expect displaying an image to be confusing but i got it done with the help of [this link](https://medium.com/@viditkumar.au/display-images-in-react-628e6cd4f4d8)
    - now i need to find a way to display multiple images, i figured iterating a list/array of images would work best, this [link helped](https://www.shecodes.io/athena/38787-how-to-import-and-loop-through-local-images-in-a-react-component)
    - this [link](https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know) solidified my understanding on how to use .map()