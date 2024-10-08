export const NavbarList = [
  {
    navId: "nav1",
    navTitle: "terminology",
  },
  {
    navId: "nav2",
    navTitle: "elements",
  },
];

export const QuestionList = {
  nav1: [
    {
      question: "What is CSS ?",
      cardId: "headingOne",
      collapseId: "collapseOne",
      collapseTarget: "#collapseOne",
      answers: [
        "CSS stands for Cascading Style Sheets with an emphasis placed on “Style” and the latest version is CSS 3.",
        "While Hypertext Markup Language (HTML) is used to structure a web document (defining things like headlines and paragraphs, and allowing you to embed images, video, and other media), Cascading Style Sheet language comes through and specifies your document’s style — page layouts, colors, and fonts (shoutout to font-family and font-style!) are all determined with CSS syntax, meaning that CSS is one important language for you to master in terms of styling your web pages! Think of HTML as the foundation (every house has one), and Cascading Style Sheets as the aesthetic choices (there’s a big difference between a Victorian mansion and a mid-century modern home).",
        "You need both to create a web page and JavaScript to make it interactive.",
        "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of new features and additions, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.",
      ],
    },
    {
      question: "How does CSS actually work ?",
      cardId: "headingTwo",
      collapseId: "collapseTwo",
      collapseTarget: "#collapseTwo",
      answers: [
        "When a browser displays a document, it must combine the document's content with its style information. It processes the document in a number of stages, which we've listed below. Bear in mind that this is a very simplified version of what happens when a browser loads a webpage, and that different browsers will handle the process in different ways. But this is roughly what happens.",
        "1. The browser loads the HTML (e.g. receives it from the network).",
        "2. It converts the HTML into a DOM (Document Object Model). The DOM represents the document in the computer's memory.",
        "3. The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images, videos, and even linked CSS! JavaScript is handled a bit later on in the process, and we won't talk about it here to keep things simpler.",
        "4. The browser parses the fetched CSS, and sorts the different rules by their selector types into different 'buckets', e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required (this intermediate step is called a render tree).",
        "5. The render tree is laid out in the structure it should appear in after the rules have been applied to it.",
        "6. The visual display of the page is shown on the screen (this stage is called painting).",
      ],
      answerImg:
        "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg",
      answerImgAlt: "how-does-css-work",
    },
    {
      question: "How to add CSS to HTML page ?",
      cardId: "headingThree",
      collapseId: "collapseThree",
      collapseTarget: "#collapseThree",
      answers: [
        "1. Inline CSS - <p style=”color:red; font-size: 20px;”/>",
        "However, using inline styles is generally thought to be a bad idea. Because style rules are inserted directly into the HTML tag, the presentation of the document becomes intermingled with the content of the document, making the code difficult to maintain and defeating the purpose of CSS.",
        "2. Internal CSS - <head> <style > body {  background-color: grey;  }  h1 {  color: red;  margin-left: 75px;  }   </style>  </head>",
        "Internal CSS is one of the most popular CSS forms for updating, customizing, and modifying a single web pages unique styles. You can use the internal CSS by integrating the <style> element in the <head> section of a HTML web page. ",
        "3. External CSS - <link rel='stylesheet' href=mystyle.css>",
        "External CSS is one of the most often used CSS forms for updating, styling, and adjusting the different styles in a large number of HTML web pages at the same time. There are two ways to include an external style sheet in an HTML document. One method is to use the <link> tag in the HTML document head. Another option is to use a combination of external CSS functions and integrated CSS. ",
      ],
    },
    {
      question: "Styling React Using CSS",
      cardId: "headingFour",
      collapseId: "collapseFour",
      collapseTarget: "#collapseFour",
      answers: [
        "1. Inline Styling - h1 style={{color: 'red'}}>Hello Style!</h1>",
        "In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.",
        "Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax like backgroundColor.",
        "You can also create an object with styling information, and refer to it in the style attribute - <h1 style={mystyle}>Hello Style!</h1>",
        "2. CSS Stylesheet - import './App.css';",
        "You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application",
      ],
    },
    {
      question: "What is meant by Reset CSS ?",
      cardId: "headingFive",
      collapseId: "collapseFive",
      collapseTarget: "#collapseFive",
      answers: [
        "In the beginning, there was no standardisation on how styles worked, each browser implemented what it felt was right. One of the reasons you see so many questions about style errors in IE is because IE was the browser with the most dissimilarities from other browsers in terms of styling. Though IE has improved and so have other browsers they still apply their own borders, padding and margins, zoom, fonts to elements to give their own unique feel to pages. One example is, chrome gives its own yellow borders to text boxes. The 'reset' actually 'resets' all these styles to zero/none, so that you don't see any styles you haven't applied to your page.",
        "If these styles are not reset, you will see unwanted styles/effects and things breaking. Its generally recommended to reset the browser's styles.",
      ],
    },
    {
      question: "What is SASS?",
      cardId: "headingSix",
      collapseId: "collapseSix",
      collapseTarget: "#collapseSix",
      answers: [
        "SASS (Syntactically Awesome Stylesheets) is a CSS preprocessor that extends CSS with features like variables, nested rules, mixins, and functions, allowing for more efficient and maintainable stylesheets. It compiles into regular CSS, providing enhanced functionality and organization for complex projects.",
        "Features of SASS",
        "1. Variables: Store values like colors, fonts, or any CSS value, making styles reusable.",
        "2. Nesting: Nest CSS selectors in a way that follows the same visual hierarchy as your HTML.",
        "3. Partials: Use @import to include external Sass files, keeping styles modular and organized.",
        "4. Mixins: Define reusable chunks of code, allowing you to avoid repetitive styles.",
        "5. Inheritance: Use @extend to share a set of CSS properties from one selector to another, simplifying the style management.",
      ],
    },
    {
      question: "What is SCSS?",
      cardId: "headingSeven",
      collapseId: "collapseSeven",
      collapseTarget: "#collapseSeven",
      answers: [
        "SCSS (Sassy CSS) is a syntax of SASS, offering a more CSS-like syntax. It includes features like variables, nesting, mixins, and inheritance while maintaining full compatibility with standard CSS. SCSS files use the .scss extension and enhance CSS with advanced functionalities for easier and more maintainable styling.",
        "Features of SCSS",
        "1. Variables: Store reusable values like colors and fonts for consistent styling.",
        "2. Nesting: Nest CSS selectors in a hierarchical manner for better readability.",
        "3. Mixins: Create reusable chunks of styles, avoiding repetitive code.",
        "4. Inheritance: Use @extend to share styles between selectors, simplifying the codebase.",
        "5. Partials and Importing: Modularize CSS using @import, keeping styles organized and maintainable.",
      ],
    },
    {
      question: "Which type of CSS holds the highest priority?",
      cardId: "headingEight",
      collapseId: "collapseEight",
      collapseTarget: "#collapseEight",
      answers: [
        "1. As Inline has the highest priority, any styles that are defined in the internal and external style sheets are overridden by Inline styles.",
        "2. Internal or Embedded stands second in the priority list and overrides the styles in the external style sheet.",
        "3. External style sheets have the least priority. If there are no styles defined either in the inline or internal style sheet then external style sheet rules are applied for the HTML tags.",
      ],
    },
    {
      question: "Adaptive design and Responsive design ?",
      cardId: "headingNine",
      collapseId: "collapseNine",
      collapseTarget: "#collapseNine",
      answers: [
        "1. Adaptive Design:",
        "Main focus is to develop a website in multiple fixed layout sizes.",
        "Offers good control over the design to develop variation in screens.",
        "It is very time-consuming and takes a lot of effort to build the best possible adaptive design as examining it will need to go for many options with respect to the realities of the end user.",
        "There are six standard screen sizes for the appropriate layouts; they are 320px, 480px, 760px, 960px, 1200px, 1600px to design.",
        "2. Responsive Design",
        "Main focus is to show content with respect to browser space.",
        "Offers less control over the design.",
        "It takes less time to build the design and there is no screen size issue irrespective of content.",
        "It uses CSS media queries to design the screen layouts with respect to specific devices and property changes in the screen.",
      ],
    },
    {
      question: "Best CSS Frameworks ?",
      cardId: "headingTen",
      collapseId: "collapseTen",
      collapseTarget: "#collapseTen",
      answers: [
        "Bootstrap",
        "Foundation",
        "Bulma",
        "UIKit",
        "Semantic UI",
        "Materialize",
        "Pure",
        "Tailwind CSS",
      ],
    },
    // {
    //   question: "Cascading aspect in CSS",
    //   cardId: "headingFive",
    //   collapseId: "collapseFive",
    //   collapseTarget: "#collapseFive",
    //   answers: [
    //     "The cascading aspect of CSS plays a crucial role in determining how styles are applied to elements within a webpage. By following a hierarchical order, CSS allows more specific rules to override general ones. Styles cascade from parent to child elements, including rules from external stylesheets, embedded styles, and inline styles for the final appearance of webpage elements.",
    //     "Cascading refers to the process by which styles are applied to HTML elements. It involves a set of rules that dictate how conflicting styles are resolved.",
    //     "1. Hierarchy of Styles: Styles cascade from parent elements to child elements. External stylesheets, embedded styles, and inline styles all contribute to the final appearance of elements. When multiple conflicting styles exist, the one with higher specificity takes precedence.",
    //     "2. Specificity Explained: Specificity determines which style rule applies when there are conflicting selectors.Specificity is calculated based on the combination of selectors used.Inline styles have the highest specificity, followed by IDs, classes, and element selectors.",
    //   ],
    // },
  ],
  nav2: [
    {
      question: "CSS Simple Selectors",
      cardId: "headingOne",
      collapseId: "collapseOne",
      collapseTarget: "#collapseOne",
      answers: [
        "1. Element Selector - The element selector selects HTML elements based on the element name.",
        "Ex: p { text-align: center; color: red; }",
        "2. CSS id Selector - The id selector uses the id attribute of an HTML element to select a specific element.The id of an element is unique within a page, so the id selector is used to select one unique element!.To select an element with a specific id, write a hash (#) character, followed by the id of the element.",
        "Ex: #para1 { text-align: center; color: red; }",
        "3. CSS class Selector - The class selector selects HTML elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the class name.",
        "Ex: .center { text-align: center; color: red; }",
        "You can also specify that only specific HTML elements should be affected by a class.",
        "only <p> elements with class='center' will be red and center-aligned Ex: p.center { text-align: center; color: red; }",
        "4. Universal Selector - The universal selector (*) selects all HTML elements on the page.",
        "Ex: * { text-align: center; color: red; }",
        "5. Grouping Selector - To group selectors, separate each selector with a comma.",
        "Ex: h1,h2,p { text-align: center; color: red; }",
      ],
    },
    {
      question: "CSS Combinator Selectors ?",
      cardId: "headingTwo",
      collapseId: "collapseTwo",
      collapseTarget: "#collapseTwo",
      answers: [
        "1. Descendant Selector - The descendant selector matches all elements that are descendants of a specified element.",
        "Ex: div p {background-color: yellow; } - selects all <p> elements inside <div> elements",
        "2. Child Selector (>) - The child selector selects all elements that are the children of a specified element.",
        "Ex: div > p {background-color: yellow; } - selects all <p> elements that are children of a <div> element",
        "3. Adjacent Sibling Selector (+) - The adjacent sibling selector is used to select an element that is directly after another specific element.Sibling elements must have the same parent element, and 'adjacent' means 'immediately following'",
        "Ex: div + p {background-color: yellow; } - selects the first <p> element that are placed immediately after <div> elements",
        "4. General Sibling Selector (~) - The general sibling selector selects all elements that are next siblings of a specified element.",
        "Ex:  div + p {background-color: yellow; } - selects all <p> elements that are next siblings of <div> elements",
      ],
    },
    {
      question: "Pseudo-classes",
      cardId: "headingThree",
      collapseId: "collapseThree",
      collapseTarget: "#collapseThree",
      answers: [
        "A pseudo-class is used to define a special state of an element.",
        "1. Style an element when a user mouses over it",
        "2. Style visited and unvisited links differently",
        "3. Style an element when it gets focus",
        "Ex: a:link, a:visited, a:hover, a:active",
      ],
    },
    {
      question: "Pseudo-Elements",
      cardId: "headingFour",
      collapseId: "collapseFour",
      collapseTarget: "#collapseFour",
      answers: [
        "A CSS pseudo-element is used to style specified parts of an element.",
        "1. Style the first letter, or line, of an element",
        "2. Insert content before, or after, the content of an element",
        "Ex: p::first-line { color: #ff0000; font-variant: small-caps; }",
        "The double colon replaced the single-colon notation for pseudo-elements in CSS3. This was an attempt from W3C to distinguish between pseudo-classes and pseudo-elements.",
      ],
    },
    {
      question: "Positioning Properties in CSS ?",
      cardId: "headingFive",
      collapseId: "collapseFive",
      collapseTarget: "#collapseFive",
      answers: [
        "The position property in CSS tells about the method of positioning for an element or an HTML entity.",
        "1. Fixed: Any HTML element with position: fixed property will be positioned relative to the viewport. An element with fixed positioning allows it to remain at the same position even as we scroll the page. We can set the position of the element using the top, right, bottom, and left.",
        "2. Static: This method of positioning is set by default. If we don’t mention the method of positioning for any element, the element has the position: static method by default. By defining Static, the top, right, bottom and left will not have any control over the element. The element will be positioned with the normal flow of the page. The top, right, bottom, left, and z-index properties have no effect.",
        "3. Relative: An element with position: relative is positioned relatively with the other elements which are sitting at top of it. If we set its top, right, bottom, or left, other elements will not fill up the gap left by this element.",
        "4. Absolute: An element with position: absolute will be positioned with respect to its parent. The positioning of this element does not depend upon its siblings or the elements which are at the same level.",
        "5. Sticky: Element with position: sticky and top: 0 played a role between fixed & relative based on the position where it is placed. If the element is placed in the middle of the document then when the user scrolls the document, the sticky element starts scrolling until it touches the top. When it touches the top, it will be fixed at that place in spite of further scrolling. We can stick the element at the bottom, with the bottom property.",
      ],
    },
    {
      question: "What is CSS Box Model?",
      cardId: "headingSix",
      collapseId: "collapseSix",
      collapseTarget: "#collapseSix",
      answers: [
        "The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself. It is used to create the design and layout of web pages. It can be used as a toolkit for customizing the layout of different elements. The web browser renders every element as a rectangular box according to the CSS box model.",
        "1. Border Area: It is the area between the box’s padding and margin. Its dimensions are given by the width and height of the border.",
        "2. Margin Area: This area consists of space between border and margin. The dimensions of the Margin area are the margin-box width and the margin-box height. It is useful to separate the element from its neighbors.",
        "3. Padding Area: It includes the element’s padding. This area is actually the space around the content area and within the border box. Its dimensions are given by the width of the padding-box and the height of the padding-box.",
        "4. Content Area: This area consists of content like text, images, or other media content. It is bounded by the content edge and its dimensions are given by content box width and height.",
      ],
      answerImg:
        "https://media.geeksforgeeks.org/wp-content/uploads/box-model-1.png",
      answerImgAlt: "what-is-css-box-model",
    },
    {
      question:
        "What is the difference between display: none and visibility: hidden ?",
      cardId: "headingSeven",
      collapseId: "collapseSeven",
      collapseTarget: "#collapseSeven",
      answers: [
        "The visibility: “hidden”; property is used to specify whether an element is visible or not in a web document but the hidden elements take up space in the web document. The visibility is a property in CSS that specifies the visibility behavior of an element and display: “none” property is used to specify whether an element is exist or not on the website.",
        "Visibility property: visible| hidden | collapse | initial | inherit;",
        "Display property: none |  inline | block | inline-block;",
      ],
    },
    {
      question: "CSS Overflow",
      cardId: "headingEight",
      collapseId: "collapseEight",
      collapseTarget: "#collapseEight",
      answers: [
        "The CSS overflow controls the big content. It tells whether to clip content or to add scroll bars.",
        "1. Visible: The content is not clipped and is visible outside the element box.",
        "2. Hidden: The overflow is clipped and the rest of the content is invisible.",
        "3. Scroll: The overflow is clipped but a scrollbar is added to see the rest of the content. The scrollbar can be horizontal or vertical.",
        "4. Auto: It automatically adds a scrollbar whenever it is required.",
      ],
    },
    {
      question: "CSS Float",
      cardId: "headingNine",
      collapseId: "collapseNine",
      collapseTarget: "#collapseNine",
      answers: [
        "Float is a CSS property written in a CSS file or directly in the style of an element. The float property defines the flow of content.",
        "float: left -> Element floats on the left side of the container",
        "float: right -> Element floats on the right side of the container",
        "float: inherit -> The element inherits the floating property of its parent (div, table, etc…)",
        "float: none -> Element is displayed as it is (Default).",
      ],
    },
    {
      question:
        "What is the difference between Inline elements and block elements",
      cardId: "headingTen",
      collapseId: "collapseTen",
      collapseTarget: "#collapseTen",
      answers: [
        "Inline elements flow within the text content and do not start on a new line. They take up only as much width as their content requires. Width and height properties are not applicable to inline elemennts and would not impact their layout.",
        "Ex: <a>, <span>, <img>, <strong>",
        "Block elements start on a new line and occupy the full width available by default. They stack one on top of the other vertically",
        "Ex: <div>, <p>",
      ],
    },
    {
      question: "Difference b/w px, %, em, rem units",
      cardId: "headingEleven",
      collapseId: "collapseEleven",
      collapseTarget: "#collapseEleven",
      answers: [
        "1. px (pixels) - a px represents an absolute length or size. 1px is equal to one dot on the screen. The actual physical size of a pixel may vary depending on screen resolution.",
        "2. % (percetage) - Percentage values are relative to their parent element. They offer a more fluid and responsive approach to sizig elements",
        "3. em - The em unit is relative to the font size of the element itself or the nearest parent element with a specified font size",
        "4. rem - Similiar to em, the rem unit is relative to the font size. However, rem is always relative to the base (root) font size of the document",
      ],
    },
    {
      question: "Purpose of z-index property",
      cardId: "headingTwelve",
      collapseId: "collapseTwelve",
      collapseTarget: "#collapseTwelve",
      answers: [
        "The CSS z-index property is used to control the stacking order of elements on a web page. Elements with a higher z-index value will appear in front of elements with a lower value. It is commonly used to create overlays.",
      ],
    },
    {
      question: "How do you create a responsive layout using CSS ?",
      cardId: "headingThirteen",
      collapseId: "collapseThirteen",
      collapseTarget: "#collapseThirteen",
      answers: [
        "1. Using media queries",
        "2. Utilize flexible units - %, vw, vh",
        "3. Implement CSS Flexbox and CSS Grid",
        "4. Using max width property to prevent overflow",
      ],
    },
    {
      question: "What do you mean by gradients in CSS ?",
      cardId: "headingFourteen",
      collapseId: "collapseFourteen",
      collapseTarget: "#collapseFourteen",
      answers: [
        "1. Linear Gradients: It includes the smooth color transitions to going up, down, left, right, and diagonally. A minimum of two colors are required to create a linear gradient. More than two color elements can be possible in linear gradients. The starting point and the direction are needed for the gradient effect.",
        "Ex: background-image: linear-gradient(to right, red , yellow);",
        "2. CSS Radial Gradients: A radial gradient differs from a linear gradient. It starts at a single point and emanates outward. By default, the first color starts at the center position of the element and then fades to the end color towards the edge of the element. Fade happens at an equal rate until specified.",
        "Ex: background-image: radial-gradient(red 5%, yellow 15%, green 60%);",
      ],
    },
    {
      question: "2D and 3D transformations in CSS ?",
      cardId: "headingFifteen",
      collapseId: "collapseFifteen",
      collapseTarget: "#collapseFifteen",
      answers: [
        "1. 2D Transformations - It transforms the elements along the X-axis and Y-axis.",
        "Eg: translate() rotate() scale()",
        "2. 3D Transformations - In 3D transformation, the elements are rotated along the X-axis, Y-axis, and Z-axis.",
        "Eg: rotateX() rotateY() rotateZ()",
      ],
    },
    {
      question: "How can we animate using CSS ?",
      cardId: "headingSixteen",
      collapseId: "collapseSixteen",
      collapseTarget: "#collapseSixteen",
      answers: [
        "1. CSS Animations is a technique to change the appearance and behavior of various elements in web pages. It is used to control the elements by changing their motions or display. It has two parts, one which contains the CSS properties which describe the animation of the elements and the other contains certain keyframes which indicate the animation properties of the element and the specific time intervals at which those have to occur.",
        "The @keyframes rule: Keyframes are the foundations with the help of which CSS Animations works. They define the display of the animation at the respective stages of its whole duration.",
        "For example: In the following code, the paragraph changes its color with time. At 0% completion, it is red, at 50% completion it is of orange color and at full completion i.e. at 100%, it is brown.",
        "@keyframes color {  0% { background-color: red; } 50% { background-color: orange; } 100% { background-color: brown; } } ",
      ],
    },
    {
      question: "What does the CSS box-sizing property do ?",
      cardId: "headingSeventeen",
      collapseId: "collapseSeventeen",
      collapseTarget: "#collapseSeventeen",
      answers: [
        "The box-sizing CSS property defines how the user should calculate the total width and height of an element i.e. padding and borders, are to be included or not.",
        "box-sizing: content-box  |  border-box;",
        "1. content-box: This is the default value of the box-sizing property. In this mode, the width and height properties include only the content. Border and padding are not included in it i.e if we set an element’s width to 200 pixels, then the element’s content box will be 200 pixels wide, and the width of any border or padding will be added to the final rendered width.",
        "2: border-box: In this mode, the width and height properties include content, padding, and borders i.e if we set an element’s width to 200 pixels, that 200 pixels will include any border or padding we added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.",
      ],
    },
    {
      question: "CSS Grid vs. Flexbox ?",
      cardId: "headingEighteen",
      collapseId: "collapseEighteen",
      collapseTarget: "#collapseEighteen",
      answers: [
        "CSS Grid and Flexbox are layout models that share similarities and can even be used together. The main difference is that you can use CSS Grid to create two-dimensional layouts. In contrast, you can only use Flexbox to create one-dimensional layouts. That means you can place components along the X- and Y-axis in CSS Grid and only one axis in Flexbox.",
      ],
    },
    {
      question: "CSS Grid vs. Flexbox ?",
      cardId: "headingNineteen",
      collapseId: "collapseNineteen",
      collapseTarget: "#collapseNineteen",
      answers: [
        "CSS Grid and Flexbox are layout models that share similarities and can even be used together. The main difference is that you can use CSS Grid to create two-dimensional layouts. In contrast, you can only use Flexbox to create one-dimensional layouts. That means you can place components along the X- and Y-axis in CSS Grid and only one axis in Flexbox.",
      ],
    },
    {
      question: "Flexbox",
      cardId: "headingTwenty",
      collapseId: "collapseTwenty",
      collapseTarget: "#collapseTwenty",
      answers: [
        "The flex layout uses a method of arranging the web content in rows (main axis) or columns (perpendicular axis). This implies that it is a one-dimensional layout. The main axis can move in reverse order, from right to left.",
        "Using flexbox does not split the screen or content into equal parts. It is worthy to note that, flexbox doesn’t consider splitting content into equal columns across the row or stacking columns in the same alignment. Rather, it expands or shrinks the content to contain the available screen space.",
      ],
      answerImg:
        "https://miro.medium.com/v2/resize:fit:434/1*iigDGiNFBOUVJQ_07C1B2g.png",
      answerImgAlt: "flex-box",
    },
    {
      question: "When to use Flexbox ?",
      cardId: "headingTwentyA",
      collapseId: "collapseTwentyA",
      collapseTarget: "#collapseTwentyA",
      answers: [
        "CSS flex is popular for its order ability (row-reverse, column-reverse), which enables the developer to reorder content without having to change the HTML content manually. ",
        "Building One-dimensional Layouts: For web-pages or sections with a single layout, it is best to use flex as it helps in proper arrangement of the content.",
        "Alignment and Distribution of Content: Thanks to justify-content, align-self and other properties, alignment and distribution of content is made easy using flex.",
        "Displaying Columns in Equal heights: Using the align-items property and setting it to a value of stretch, that is: align-items:stretch, CSS flex ensures that columns within a flexbox are of equal heights. This implies that if there is a higher column, other columns will be stretched to meet up with the highest column. You can use CSS flex to display your columns in equal height irrespective of the height of the content.",
      ],
    },
    {
      question: "Grid system",
      cardId: "headingTwentyone",
      collapseId: "collapseTwentyone",
      collapseTarget: "#collapseTwentyone",
      answers: [
        "The grid layout, on the other hand, divides a web-page into 12 equal columns. These columns can be further split into the desired rows and columns.",
        "The entire screen (100%) divided into 12 gives about 3.33% per column. The screen can also be styled using the number of columns in multiples of 2. That is: 2,4,6,8,10 and 12 with each number specifying the number of columns or width the element is expected to occupy.",
      ],
      answerImg:
        "https://getflywheel-images.s3.us-east-2.amazonaws.com/uploads/2017/08/grid-sketch.jpg",
      answerImgAlt: "grid-system",
    },
    {
      question: "When to use Grid ?",
      cardId: "headingTwentyoneA",
      collapseId: "collapseTwentyoneA",
      collapseTarget: "#collapseTwentyoneA",
      answers: [
        "The grid layout is the most commonly used by frontend developers because it allows you to place elements on different sections of the browser page while maintaining proper alignment.",
        "Building a Responsive Design: Often times, user interfaces are developed to be adaptable to whatever screen they're being displayed on. In such cases, the grid layout is your best bet because it gives room to flexibility and resizing of the element.",
        "Control of whitespace: Unlike the flex display that leaves some white space at the extreme, the CSS grid controls white space by distributing elements equally along the row and also based on the allocated column space.",
        "Consistency in Design Layout: The CSS grid offers a consistent pattern in the structure of a web page. This arrangement of elements makes future editing of the page easier.",
      ],
    },
  ],
  nav3: [],
};
