# Ram

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.




# Shree26 - Photography & Modelling Portfolio v1

Mobile-first Angular 18 application for photography and modelling portfolio.

## Structure
```
src/app/
├── components/header/    (Fixed top navigation - 20% height)
├── components/body/      (Image gallery - 60% height) 
├── components/footer/    (Auto-scroll testimonials - 20% height)
├── app.html
├── app.scss
└── app.ts
```

## Features

**Header (Fixed Top)**
- Photography, Modelling, Book slot buttons
- Transparent background
- Category filtering

**Body (Image Gallery)**  
- Single column layout
- Photography: 10 images, Modelling: 8 images
- Placeholder: "Image Not Found"
- Switches based on header selection

**Footer (Testimonial Carousel)**
- Auto-scrolls every 3 seconds
- Instagram links (@username)
- Star ratings (★★★★★)
- Category-filtered reviews
- Horizontal scroll with touch support

## Category System
- Photography button → Photography images + Photography testimonials
- Modelling button → Modelling images + Modelling testimonials
- Real-time filtering across components

## Sample Data
- 5 testimonials (3 photography, 2 modelling)
- Instagram usernames and profile links
- Star ratings and written reviews
- Easy to replace with real data

## Mobile Optimized
- Touch-friendly navigation
- Single column layout
- Fixed header for easy access
- Smooth auto-scrolling carousel
- Responsive spacing and sizing

## Tech Stack
Angular 18, SCSS, Standalone Components

## Ready For
- Real image integration
- Backend testimonial system  
- Booking functionality
- Easy content management

Version 1: Minimalistic, functional, expandable.
