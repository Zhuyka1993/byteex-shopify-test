# Byteex Shopify Developer Test

A responsive product landing page implemented as a practical test for the Byteex Shopify Developer position.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Sanity CMS
- Sanity Studio

## Features

- Responsive product landing page based on the provided Figma design
- Desktop, tablet, and mobile layouts
- Reusable React components
- Responsive product image gallery with navigation and thumbnails
- Responsive FAQ accordion
- Responsive navigation
- Mobile-specific layouts and content adjustments
- Responsive final call-to-action section

## Dynamic Content

Sanity CMS is used as a headless CMS to manage dynamic content across the page.

The following content is managed through Sanity:

- Customer reviews
- Featured customer review
- FAQ questions and answers
- Founder information
- User-generated content gallery images

Reviews are reused across different sections of the page, including the featured review and the User Generated Content section.

The User Generated Content section supports adding and managing gallery images through Sanity Studio.

The frontend retrieves CMS content through the Sanity API using GROQ queries.

## Project Structure

src/
├── components/
│   ├── AnnouncementBar/
│   ├── Header/
│   ├── CustomizeButton/
│   ├── Hero/
│   ├── HeroReview/
│   ├── AsSeenIn/
│   ├── DescribeTopBenefits/
│   ├── FounderBuildConnection/
│   ├── HowTheProductWorks/
│   ├── UserGeneratedContent/
│   ├── FAQ/
│   ├── FiveStarReviews/
│   ├── InfoBanner/
│   ├── ImageCollage/
│   ├── FinalCTA/
│   └── FinalCTAInfo/
├── sanity/
├── assets/
├── App.jsx
├── App.css
└── index.css

studio/
└── Sanity Studio configuration and schemas

## Getting Started

### Frontend

From the project root, install the dependencies:

    npm install

Start the development server:

    npm run dev

The frontend will be available at:

    http://localhost:5173

### Sanity Studio

The Sanity Studio is located in the `studio` directory.

From the project root:

    cd studio
    npm install
    npm run dev

The Sanity Studio will be available at:

    http://localhost:3333

## Sanity CMS

The project uses Sanity as a headless CMS.

Sanity Studio is included in the repository under:

    /studio

The frontend communicates with Sanity through the Sanity API.

The CMS is used for:

- Customer reviews
- Featured review content
- FAQ questions and answers
- Founder information
- User-generated content
- User-generated content gallery images

## Typography

The original Figma design uses Sofia Pro.

The Sofia Pro font files or license were not provided with the test task, so Poppins from Google Fonts was used as a visually similar alternative.

## Responsive Design

The page is optimized for:

- Desktop
- Tablet
- Mobile

The layout, image galleries, navigation, typography, content sections, FAQ, and call-to-action sections adapt to different screen sizes.

## Development

The project was developed using a feature branch with incremental commits to preserve the development history and demonstrate the implementation process.

## License

This project was created exclusively as a technical assessment for Byteex.