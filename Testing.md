# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | 
| --- | --- | --- | --- | 
|  | [404.html](https://github.com/Kearns55/Milestone-Project-2/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://kearns55.github.io/Milestone-Project-2/404.html) | ![screenshot](documentation/validation/404%20validation.PNG) |
|  | [index.html](https://github.com/Kearns55/Milestone-Project-2/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://kearns55.github.io/Milestone-Project-2/index.html) | ![screenshot](documentation/validation/index.html%20%20validation.PNG) |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | 
| --- | --- | --- | --- |
| assets | [style.css](https://github.com/Kearns55/Milestone-Project-2/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://kearns55.github.io/Milestone-Project-2) | ![screenshot](documentation/validation/css%20validation.PNG) |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | URL | Screenshot | 
| --- | --- | --- | --- | 
| assets | [questions.js](https://github.com/Kearns55/Milestone-Project-2/blob/main/assets/js/questions.js) |  | ![screenshot](documentation/validation/javascript%20validation.PNG) |
| assets | [script.js](https://github.com/Kearns55/Milestone-Project-2/blob/main/assets/js/script.js) |  | ![screenshot](documentation/validation/javascript%20validation.PNG) |

## Responsiveness

I've tested my deployed project to check for responsiveness issues.

| Page | Mobile | Tablet | Desktop | 
| --- | --- | --- | --- | 
| Home | ![screenshot](documentation/responsiveness/home-brave.png) | ![screenshot](documentation/responsiveness/home-safari.png) | ![screenshot](documentation/responsiveness/home-chrome.PNG) | Works as expected |
| Game | ![screenshot](documentation/responsiveness/quiz-brave.png) | ![screenshot](documentation/responsiveness/quiz-safari.png) | ![screenshot](documentation/responsiveness/quiz-chrome.PNG) | Works as expected |
| 404 | ![screenshot](documentation/responsiveness/404-brave.png) | ![screenshot](documentation/responsiveness/404-safari.png) | ![screenshot](documentation/responsiveness/404-chrome.png) | Works as expected |

## Browser Compatibility

- [Chrome](https://www.google.com/chrome)
- [Safari](https://support.apple.com/downloads/safari)
- [Brave](https://brave.com/download)

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Page | Chrome | Brave | Safari | 
| --- | --- | --- | --- | 
| Home | ![screenshot](documentation/responsiveness/home-chrome.PNG) | ![screenshot](documentation/responsiveness/home-brave.png) | ![screenshot](documentation/responsiveness/home-safari.png) | Works as expected |
| Game | ![screenshot](documentation/responsiveness/quiz-chrome.PNG) | ![screenshot](documentation/responsiveness/quiz-brave.png) | ![screenshot](documentation/responsiveness/quiz-safari.png) | Works as expected |
| 404 | ![screenshot](documentation/responsiveness/404-chrome.PNG) | ![screenshot](documentation/responsiveness/404-brave.png) | ![screenshot](documentation/responsiveness/404-safari.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse/mobile-home.png) | ![screenshot](documentation/lighthouse/desktop-home.png) |
| Game | ![screenshot](documentation/lighthouse/mobile-game.png) | ![screenshot](documentation/lighthouse/desktop-game.png) |
| 404 | ![screenshot](documentation/lighthouse/mobile-404.png) | ![screenshot](documentation/lighthouse/desktop-404.png) |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page/Feature | Expectation | Test | Result | Screenshot |
| --- | --- | --- | --- | --- |
| | Feature is expected to display buttons that are clear, large, and easy to select on all devices. | Verified button sizes and usability across multiple devices (mobile, tablet, desktop). | Buttons were accessible and easy to use on all tested devices. | ![screenshot](documentation/defensive/responsive.png) |
| | Feature is expected to use high-contrast colors and accessible fonts. | Checked contrast ratios using accessibility tools (e.g., Lighthouse, Wave). | Colors and fonts met accessibility standards. | ![screenshot](documentation/defensive/accessibility.png) |
| | Feature is expected to have clear labels and instructions for user guidance. | Reviewed labels and instructions for clarity and ease of use. | Labels and instructions were clear and intuitive. | ![screenshot](documentation/defensive/labels-instructions.png) |
| Instant Calculation | Feature is expected to calculate and display results instantly after selecting an operator. | Selected operators after entering two numbers. | Results were displayed instantly. | ![screenshot](documentation/defensive/calc-speed.png) |
| Error Handling | Feature is expected to display correct results even if an equation was input incorrectly. | Entered various incorrect equations and verified the results. | Correct results were displayed for all tested cases. | ![screenshot](documentation/defensive/error-handling.png) |
| Score Tracker | Feature is expected to track the number of correct and incorrect equations. | Performed multiple calculations (correct and incorrect) and checked the score tracker. | Score tracker updated correctly for all tested scenarios. | ![screenshot](documentation/defensive/score-tracker.png) |
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages. | Navigated to an invalid URL (e.g., `/test`) to test error handling. | A custom 404 error page was displayed as expected. | ![screenshot](documentation/defensive/404.png) |

## User Story Testing

⚠️ INSTRUCTIONS ⚠️

Testing User Stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **Features** should already align with the **User Stories**, so this should be as simple as creating a table with the User Story, matching with the re-used screenshot from the respective Feature.

⚠️ --- END --- ⚠️

| Target | Expectation | Outcome | Screenshot |
| --- | --- | --- | --- |
| As a user | I would like to input two numbers and select an operator (`+`, `-`, `*`, `/`) | so that I can calculate a result. | ![screenshot](documentation/features/feature01.png) |
| As a user | I would like the application to show me an error message if I enter empty input (`NaN`) | so that I understand what went wrong. | ![screenshot](documentation/features/feature02.png) |
| As a user | I would like the calculation to happen instantly after I select an operator | so that I get my result quickly without waiting. | ![screenshot](documentation/features/feature03.png) |
| As a user | I would like the application to have clear and large buttons for each operator | so that I can easily select the correct one on any device. | ![screenshot](documentation/features/feature04.png) |
| As a user | I would like the application to have high-contrast colors and accessible fonts | so that I can easily read and interact with it. | ![screenshot](documentation/features/feature05.png) |
| As a user | I would like clear labels and instructions | so that I understand how to use the app without confusion. | ![screenshot](documentation/features/feature06.png) |
| As a user | I would like the app to show me the correct result if my equation was incorrect | so that I understand how the answer was calculated. | ![screenshot](documentation/features/feature07.png) |
| As a user | I would like to see how many equations I get correct or incorrect | so I can push myself to improve my math skills. | ![screenshot](documentation/features/feature08.png) |
| As a user | I would like to see a 404 error page if I get lost | so that it's obvious that I've stumbled upon a page that doesn't exist. | ![screenshot](documentation/features/feature09.png) |

## Bugs

⚠️ INSTRUCTIONS ⚠️

Nobody likes bugs,... except the assessors! Projects seem more suspicious if a student doesn't properly track their bugs. If you're about to submit your project without any bugs listed below, you should ask yourself why you're doing this course in the first place, if you're able to build this entire application without running into any bugs. The best thing you can do for any project is to document your bugs! Not only does it show the true stages of development, but think of it as breadcrumbs for yourself in the future, should you encounter the same/similar bug again, it acts as a gentle reminder on what you did to fix the bug.

If/when you encounter bugs during the development stages of your project, you should document them here, ideally with a screenshot explaining what the issue was, and what you did to fix the bug.

Alternatively, an improved way to manage bugs is to use the built-in **[Issues](https://www.github.com/Kearns55/Milestone-Project-2/issues)** tracker on your GitHub repository. This can be found at the top of your repository, the tab called "Issues".

If using the Issues tracker for bug management, you can simplify the documentation process for testing. Issues allow you to directly paste screenshots into the issue page without having to first save the screenshot locally. You can add labels to your issues (e.g. `bug`), assign yourself as the owner, and add comments/updates as you progress with fixing the issue(s). Once you've solved the issue/bug, you should then "Close" it.

When showcasing your bug tracking for assessment, you can use the following examples below.

⚠️ --- END --- ⚠️

### Fixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/Kearns55/Milestone-Project-2?query=is%3Aissue%20is%3Aclosed%20label%3Abug&label=Fixed%20Bugs&color=green)](https://www.github.com/Kearns55/Milestone-Project-2/issues?q=is%3Aissue+is%3Aclosed+label%3Abug)

I've used [GitHub Issues](https://www.github.com/Kearns55/Milestone-Project-2/issues) to track and manage bugs and issues during the development stages of my project.

All previously closed/fixed bugs can be tracked [here](https://www.github.com/Kearns55/Milestone-Project-2/issues?q=is%3Aissue+is%3Aclosed+label%3Abug).

![screenshot](documentation/bugs/gh-issues-closed.png)

### Unfixed Bugs

⚠️ INSTRUCTIONS ⚠️

You will need to mention any unfixed bugs and why they are not fixed upon submission of your project. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. Where possible, you must fix all outstanding bugs, unless outside of your control.

If you've identified any unfixed bugs, no matter how small, be sure to list them here! It's better to be honest and list them, because if it's not documented and an assessor finds the issue, they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

⚠️ --- END --- ⚠️

[![GitHub issue custom search](https://img.shields.io/github/issues-search/Kearns55/Milestone-Project-2?query=is%3Aissue%2Bis%3Aopen%2Blabel%3Abug&label=Unfixed%20Bugs&color=red)](https://www.github.com/Kearns55/Milestone-Project-2/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

Any remaining open issues can be tracked [here](https://www.github.com/Kearns55/Milestone-Project-2/issues?q=is%3Aissue+is%3Aopen+label%3Abug).

![screenshot](documentation/bugs/gh-issues-open.png)

### Known Issues

| Issue | Screenshot |
| --- | --- |
| On devices smaller than 375px, the page starts to have horizontal `overflow-x` scrolling. | ![screenshot](documentation/issues/overflow.png) |
| When validating HTML with a semantic `<section>` element, the validator warns about lacking a header `h2-h6`. This is acceptable. | ![screenshot](documentation/issues/section-header.png) |

> [!IMPORTANT]  
> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot rule out the possibility.


