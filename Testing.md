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
| assets | [questions.js](https://github.com/Kearns55/Milestone-Project-2/blob/main/assets/js/questions.js) |  | ![screenshot](documentation/validation/questions-validation.PNG) |
| assets | [script.js](https://github.com/Kearns55/Milestone-Project-2/blob/main/assets/js/script.js) |  | ![screenshot](documentation/validation/script-validation.PNG) |

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
| Answer checking | Feature is expected to change the colour of the option buttons corresponding to the answer selected : Green being a correct answer and red being incorrect | Tested both correct and incorrect answers. | Correct results were displayed for both tested cases. | ![screenshot](documentation/defensive/error-handling.png) |
| Score Tracker | Feature is expected to track the number of correct and incorrect answers. |  Tested that the score tracker updates after correct answer is selected. | Score tracker updated correctly for all tested scenarios. | ![screenshot](documentation/defensive/score-tracker.png) |
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages. | Navigated to an invalid URL (e.g., `/404`) to test error handling. | A custom 404 error page was displayed as expected. | ![screenshot](documentation/defensive/404.png) |

## User Story Testing

| Target | Expectation | Outcome | Screenshot |
| --- | --- | --- | --- |
| As a learner | I want to take a quiz that tests my Irish-to-English vocabulary | so that I can practice speaking Irish everyday | ![screenshot](documentation/features/feature01.png) |
| As a quiz taker |  I want the questions to be multiple choice |  so that I can easily select an answer without typing. | ![screenshot](documentation/features/feature02.png) |
| As a learner | I want to see my score at the end of the quiz| so that I can track how well I did | ![screenshot](documentation/features/feature03.png) |
| As a user | I want to know immediately whether my answer is correct or incorrect | so that I can learn from my mistakes right away | ![screenshot](documentation/features/feature04.png) |
| As a user | I want the application to have high-contrast colors and accessible fonts | so that I can easily read and interact with it. | ![screenshot](documentation/features/feature05.png) |
| As a mobile user | I want the website to work well on my phone | so that I can take quizzes on the go. | ![screenshot](documentation/features/feature06.png) |
| As a user | I would like to see a 404 error page if I get lost | so that it's obvious that I've stumbled upon a page that doesn't exist. | ![screenshot](documentation/features/feature07.png) |

## Bugs

### Fixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/Kearns55/Milestone-Project-2?query=is%3Aissue%20is%3Aclosed%20label%3Abug&label=Fixed%20Bugs&color=green)](https://www.github.com/Kearns55/Milestone-Project-2/issues?q=is%3Aissue+is%3Aclosed+label%3Abug)

I've used [GitHub Issues](https://www.github.com/Kearns55/Milestone-Project-2/issues) to track and manage bugs and issues during the development stages of my project.

All previously closed/fixed bugs can be tracked [here](https://www.github.com/Kearns55/Milestone-Project-2/issues?q=is%3Aissue+is%3Aclosed+label%3Abug).

![screenshot](documentation/bugs/gh-issues-closed.png)

### Unfixed Bugs


[![GitHub issue custom search](https://img.shields.io/github/issues-search/Kearns55/Milestone-Project-2?query=is%3Aissue%2Bis%3Aopen%2Blabel%3Abug&label=Unfixed%20Bugs&color=red)](https://www.github.com/Kearns55/Milestone-Project-2/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

Any remaining open issues can be tracked [here](https://www.github.com/Kearns55/Milestone-Project-2/issues?q=is%3Aissue+is%3Aopen+label%3Abug).

![screenshot](documentation/bugs/gh-issues-open.png)

> [!IMPORTANT]  
> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot rule out the possibility.


