# Hogwarts University Campus Event Guide

**Author:** Ayusha Thapa  
**Course:** CSC 372-01  
**Assignment:** Campus Event Guide

## Project Description

This website is a fictional campus event guide for Hogwarts University.
Its intended audience is students who want to explore campus activities,
meet other students, and participate in university traditions.

The home page includes an introduction, upcoming events, information
about, and useful links. The event details page features the
Yule Ball, including its schedule, participation information, registration, and related events.

The website uses HTML and CSS.

## Layout Decisions

### Flexbox

- **Navigation:** Flexbox arranges the navigation links in a centered row
  with consistent spacing.
- **Hero content:** A column Flexbox layout centers the introductory text
  and button beneath the home page image.
- **Event cards:** Flexbox stacks each card’s image and information
  vertically. An automatic top margin pushes the View Details links
  to the bottom, keeping them aligned across each row.
- **Related events:** Flexbox displays three compact cards and allows
  them to wrap onto additional rows when space is limited.
- **Footer links:** Flexbox centers the links and allows them to wrap.

### CSS Grid

- **Upcoming events:** Grid creates three equal columns on desktop,
  arranging the six event cards into two rows.
- **Event details:** Grid creates a two-column layout for the main content
  and sidebar. The main column uses 2fr, and the sidebar uses 1fr,
  giving the main content more room.

## Responsive Design

The pages include CSS media queries.

| Breakpoint | Changes |
| --- | --- |
| 900px and below | The upcoming events grid changes from three columns to two. |
| 800px and below | The home page hero image becomes 250px tall, the hero padding decreases, and its heading becomes smaller. The event details sidebar moves below the main content. |
| 600px and below | Navigation links stack vertically, and the website heading becomes smaller. The upcoming events grid becomes one column with automatic row heights. The event banner becomes 250px tall, and the event title becomes smaller. |

I tested both pages by maximizing the browser window and resizing it to smaller widths to check how the layout adjusted.

## Semantic HTML

- **header:** Contains the website logo, name, tagline, and shared navigation.
- **nav:** Identifies the main navigation links between pages and sections.
- **main:** Contains the primary content of each page.
- **section:** Groups related content, such as upcoming events, the About
  section, and related events.
- **article:** Represents an individual event card that can be understood
  independently.
- **aside:** Contains supporting event information, including the date,
  location, organizer, admission details, and registration link.
- **footer:** Contains the copyright statement, contact information,
  and additional links.


## Sources and Credits

### Images

The Hogwarts logo and Harry Potter-themed images are used for this
educational class project. Images were found through Google Images and Unsplash. 
All images belong to their respective creators, I did not create them.

### Fonts

Georgia is used for headings and the italic tagline. Helvetica is used
for body text and navigation.

### Content

The website theme, fictional locations, and tagline are based on the
Harry Potter universe. Event dates and campus event details are fictional
and were created for this assignment.

## Development History

I used Git commits to track the project as I completed each section:

1. Completed the homepage's navigation and hero section.
2. Completed the homepage.
3. Completed the event page's event introduction.
4. Added the event page’s main content, sidebar, and related events.
5. Completed the event page.
6. Completed the README.md.
7. Added JavaScript event handling for saving and removing events, highlighting saved cards, and updating the saved events summary.
