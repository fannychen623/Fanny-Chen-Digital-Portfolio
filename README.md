# Module 02 Challenge- Professional Portfolio

>**Application Link:** [Fanny Chen Digital Portfolio](https://fannychen623.github.io/Challenge-02-Fanny-Chen-Digital-Portfolio/)
>
>**View:** [Description](#description) / [Portfolio Details](#portfolio-details) / [Responsive Layout Example](#responsive-layout)
>
>**Site Preview:**
>
>![Fanny Chen Digital Portfolio](/assets/images/Fanny%20Chen%20Digital%20Portfolio.png "Fanny Chen Digital Portfolio")
## **DESCRIPTION**

> Topic Assessed: **Flexbox**, **Media Queries**, and **CSS Variables**
### **My Task**

*Professional Digital Portfolio* showcase skills and projects to employers looking to fill a part-time or full-time position.

> Create the web application from scratch. 
>
> Include sections on about me, the portfolio, and contact information.
> 
> Create a responsive layout that adjust to the viewport.
>
> Include projects that have active deployed sites.
>
> **Note**: Only includes projects completed in this class. 
>Last updated note included in the footer section.
> Currently do not have any personal projects that are activly deployed on the web.
## User Story

```
AS AN employer
I WANT to view a potential employee's deployed portfolio of work samples
SO THAT I can review samples of their work and assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```
GIVEN I need to sample a potential employee's previous work
WHEN I load their portfolio
THEN I am presented with the developer's name, a recent photo or avatar, and links to sections about them, their work, and how to contact them
WHEN I click one of the links in the navigation
THEN the UI scrolls to the corresponding section
WHEN I click on the link to the section about their work
THEN the UI scrolls to a section with titled images of the developer's applications
WHEN I am presented with the developer's first application
THEN that application's image should be larger in size than the others
WHEN I click on the images of the applications
THEN I am taken to that deployed application
WHEN I resize the page or view the site on various screens and devices
THEN I am presented with a responsive layout that adapts to my viewport
```

## **PORTFOLIO DETAILS**

### HTML Information
* **Header/Naviation**: Includes a navigation bar with 5 sections: `Home`, `About`, `Portfolio`, `Resume`, and `Contact`.
* **Hero Image**: Includes a hero image that has the developer's name as the focus.
* **About Section**: Includes a circle avatar with a small paragraph introduction.
* **Portfolio Section**: Includes deployed projects broken up into two sections. 
  * `Main Project Section`: Largest image in the portfolio section; links to this local page.
  * `Secondary Projects Section`: Identical styles for all projects in this section.
  * All projects are displayed as images that are linked to the active deployed project website.
  * All images have proper alt tags that correspond to the content of the image.
  * All projects have titles that are overlayed on-top of their respective images.
  * All project images zoom in upon hover for clear focus.
* **Resume Section**: Includes a PDF file of the resume. Uses a file viewer to display the PDF file.
* **Contact Section**: Includes contact information in list format with icons from refenced site in the `<head>` element.
* **Footer**: Includes creator detail and notes. Includes last updated detail.
* **Button**: Includes a button that functions to scroll to the top of the page. Linked javascript file for function.
* **Comments**: Added indicative comments before each section.

### CSS Information
* **Root**: Used `:root` to define repetitive varibles used throughout the sheet.
* **Header/Navigation**: Styled the header and navigation links so that they are inline.
* **Hero Image**: Styled the hero image so that it fills the page horizontally. Added top and bottom borders.
* **About Section**: Styled the avatar image to be a circle that floats to the left of the screen.
  * Styled the about paragraph to appear connected to the right of the image.
  * Adjust both items so that the avatar and the paragraph contents are aligned vertically.
* **Portfolio Section**: Styled images to be different sizes, inline, and have oerlaying captions.
  * Have one main image that is larger than the other images.
  * Have the other images appear underneath the main image and styled identically.
  * Include captions that overlay the lmages from the left side with borders on the top, bottom, and right of the caption.
  * Round the corners of each project image.
  * Include a transition when hovering over the project images to enlarge the image for a better focus.
    * Enlarge the main project by less than the secondary projects to better fit the viewport.
    * The transformation is performed over a 0.5s period.
    * When zoomed in, the order of items is sorted so that the zoomed in content is always in front.
* **Resume/Contact/Footer Section**: Added a background behind each section and centered the contents.
* **Button**: Positioned the 'scroll to top/home' button at the bottom right corner of the page.
  * Changed the color of the button upon hover.
* **Responsive Layout**: Use flex properties to wrap contents accordingly.
  * Set certain `font-size` properties to `auto`.
  * Set certain `width` and `height` properties to `fit-content`.
  * Adjust the layout when the screen size is below 768px.
    * Stack the items in the navigation bars vertically when viewport is too small.
    * Shrink the size of the hero image and the avatar.
    * Move the about section to the left to sit under the avatar.
    * Re-position the captions to the center of each project image.
* **Comments**: Added indicative comments before selectors.

### JavaScript Information
* **Scroll to Top Button**: Used javascript to add a function to the button so that it scrolls to the top of the page upon click.
  * Added funtion to display the button when scrolled past the top of the page.
* **Referenced Code**: [How to add 'scroll to top' with JavaScript](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)

## **RESPONSIVE LAYOUT**
### Screen Size: 750px
>![Responsive Layout 1](/assets/images/Fanny%20Chen%20Digital%20Portfolio%20Responsive%20Layout1.png "Responsive Layout 1")
