# Landing Page

The following was done for this landing page:

1. Used flexbox to ensure that the upper left hand image could take up two "box areas" and remain inline with the rest of the items. This was split into two main sections: left and right.

2. I wanted each box to remain the same size and have the same button, and created classed called "item" and "button" that could be reused throughout the html. Each box had its own image associated with it.

3. There needed to be space in between the form label and input, and therefore I added a bottom margin and set the display to block. A margin was added so that the form would be aligned with the content in the box above it. The form button also needed a seperate class since it had different text than the rest of the buttons.

4. I added an event listener to the form that displays the input from the form in the console.

5. The pictures were taken from pexels and unsplash, except for the handshake image.

For future work, I'd like to make this page mobile friendly. I'd also like to explore using gridbox would help keep all boxes aligned when changing the size of the screen. To keep the within DRY standards, perhaps each box could be a component rendered on the page using a framework/library. 
