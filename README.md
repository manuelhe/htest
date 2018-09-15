# Huge Navigation Exercise

## Overview

This exercise will have the candidate build a responsive layout for a site navigation.

Here are the guidelines for this exercise, please follow closely:

* We'll be evaluating your markup and styling skills, however, you might use Javascript just for opening and closing menu.
* CSS Pre-Compilers are fine (LESS, SASS), but no mixin libraries (Compass, Bourbon, Neat, Foundation, etc.)
* Chrome compliance is all that's required, all functions and features available in Chrome are in play.
* Nav must be responsive.
* Code must run after the following command, please ensure your code runs as you expect it to from a fresh checkout with these commands before submission.
* Page should look good across all viewport sizes.
* ZIP file and contained folder must be YourName_HugeNavExercise.zip.
* Please do not include node_modules folder in the ZIP.
* Primary navigation items: Work, About, Careers, Ideas, News, Events, Contact
* Secondary navigation items under About: What we do, How we work, Leadership
* Secondary navigation items under Careers: Client Services, Creative, Motion & Media, Operations, People, Strategy, Technology, UX & Product Design
* Secondary navigation items under Ideas: Reports, Perspectives, Books, Videos.
* Secondary navigation items under Contact: Atlanta, Brooklyn, DC, London, Los Angeles, Oakland, Toronto.

```
$ npm i && npm start
```

Nice to haves (things that we look for):

* Adherence to accessibility standards
* Documentation

At a high level the navigation will have two main states:

* <768px: Mobile. Hamburger icon will display in the top-left of the page. Clicking the hamburger will cause a card to push in and move the main content to the right. The card will contain nav and sub-nav items like showed in design file.
* \>= 768px: Desktop. The nav will display as a horizontal nav. Top level nav items will display sub-nav items when clicked. No hamburger will be shown.

## Version
0.1.2

## Files

* Mockup - PDF file describing how the nav should behave

## Get Started

###Requirements
* Node.js and npm (You get both when you <a href="https://docs.npmjs.com/getting-started/installing-node">install Node.js</a>.)

###Install the exercise locally
```
git clone git@ github.com:hugeinc/NavExercise.git
cd NavExercise
npm install
npm start
```

## Design Specifications

### Typography

* **Primary Navigation** 21/48 HUGE Avant Garde Bold
* **Secondary Navigation** 16/48 Galaxie Copernicus Book
* **Headline (Desktop)** 120/132 HUGE Avant Garde Bold
* **Body Copy (Desktop)** 24/36 Galaxie Copernicus Book
* **Headline (Mobile)** 44/48 HUGE Avant Garde Bold
* **Body Copy (Mobile)** 14/24 Galaxie Copernicus Book
* **Copyright (Mobile)** 12/16 Helvetica Neue Regular

### Color

* **Magenta** #ec008c
* **Light Gray** #eee
* **Translucent Black** rgba(0, 0, 0, 0.5)

### Measurements

Measurements are specified in pixels. Dimensions are fluid unless specified.

### Interactions

#### Desktop

* On hover, Primary Navigation reverses color (white/magenta).
* On click, if item contains other items, Secondary Navigation appears (see Desktop, Secondary Navigation).
* Menu appears containing Secondary Navigation.
* Translucent mask appears over content, behind menu.
* On hover in, Secondary Navigation changes color (magenta/light gray).
* On click, Secondary the navigation should close and mask is hidden.
* On click outside of menu, menu and mask are hidden.

#### Mobile

* When a user clicks the open navigation icon (“hamburger”), the navigation should “push” from left to right.
* The HUGE logo and navigation toggle slide left to right.
* The open navigation icon should change to the close navigation icon (“x”).
* Translucent mask appears over content, right of navigation.
* The Primary Navigation should include link items and menu items.
* When a user hovers a Primary Navigation item, it should change color (magenta/light gray).
* When a user clicks a Primary Navigation menu item, the Secondary Navigation should “push” down, the chevron should rotate * 180°.
* When a user hovers a Secondary Navigation item, it should change color (magenta/light gray).
* When a user clicks a Secondary Navigation item the navigation should close and mask is hidden.
* When a user clicks outside of the navigation, the navigation should close.
* When the navigation closes:
  * the menu should “pull” from right to left
  * the logo and toggle button should “slide” from right to left
  * the close icon should change to the open icon
  * the mask should be hidden
