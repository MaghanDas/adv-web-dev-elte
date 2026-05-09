The mental model first
React is just JavaScript functions that return UI. That's it. Instead of manually touching the DOM like you do in vanilla JS, you describe what the UI should look like, and React figures out how to update the DOM. Your JS knowledge transfers 100%

Key JSX rules vs HTML:

class → className
for → htmlFor
Self-closing tags must close: <img />, <input />
Return multiple elements? Wrap in <>...</> (Fragment — no extra DOM node)


3. Components — functions that return UI
Every piece of UI is a component. Just a function, starting with a capital letter:
Capital letter = component. Lowercase = native HTML element. React uses this to tell them apart.


4. Props — how you pass data into components
Props are to components what arguments are to functions. Read-only, always flow parent → child:


# Part- - 2 - useState, useEffect, evenet handling 

useState - reactive variables. 
in vanilla js , changing a variables doesn't update to the Dom.  IN react, useState create a variables that , when changed , tells react to re-render the component. 


