<br />
<p align="center">
  <h1 align="center">Runway36</h1>

  <p align="center">
    An ecommerce website to purchase and save retail products.
    <br />
    <h3 align="center">
     <strong>Contributors »</strong>
    <br />
    <br />
    <a href="https://github.com/ppattamasaevi">Pongsak Pattamasaevi</a>
    ·
    <a href="https://github.com/amandaklein1">Amanda Klein</a>
     </h3>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#stack">Built With</a></li>
      </ul>
    </li>
    <li><a href="#product-detail---amanda-klein">Product Detail</a></li>
    <li><a href="#related-items-and-comparison---pongsak-pattamasaevi">Related Items and Comparison</a></li>
    <li>
     <a href="#workflow">Workflow</a>
     <ul>
      <li><a href="#trello">Trello</a></li>
      <li><a href="#version-control">Version Control</a></li>
     </ul>
    </li>
    <li>
     <a href="#development">Development</a>
     <ul>
      <li><a href="#repo">Repo</a></li>
      <li><a href="#install">Install</a></li>
      <li><a href="#start-scripts">Start Scripts</a></li>
     </ul>
    </li>
  </ol>
</details>

# About

The objective of the Runway36 website was to make a user friendly ecommerce site that provided detailed information of each product while also providing related products and saving capabilities. Our team of software engineers was given two weeks to create the application from a business requirements document. Product data was supplied to the team from a blackbox API. Our site is comprised of the features detailed below.

## Product Detail --[Amanda Klein](https://github.com/amandaklein1)

**Features:**

- _Nav Bar_: Customer can select the PEPMANDA logo to be redirected back to the original page.
- _Product Information_: When a customer selects on a product the page will show the name, category, original price / sale price, color option thumbnails, product description, and image carousel of the current selected colorway. To share global state throughout the site to have real time updates to the style selected we applied a Redux store.
- _Image Gallery_: The main colorway selected will have an image carousel of all images pertaining to that colorway. The customer can toggle between the images to decide if they would like to pruchase. This functionality was achieved using CSS. 
- _Style Selector_: Each product selected refreshes the color option thumbnails. The customer can then toggle between the colors to decide which one they like best.
- _Add To Cart_: Once the customer has chosen the product and color they would like to purchase, they can now add to cart. The cart functionality provides them with the option of quantities and sizes available. If the style or size is out of stock, it does not appear. The customer will be alerted when their item has been successfully added to their cart. To achieve this functionality I utilized React Hooks.

![](https://media.giphy.com/media/ddcbaosphwAbnJTmZA/giphy.gif)

## Related Items and Comparison --[Pongsak Pattamasaevi](https://github.com/ppattamasaevi)

**Features:**

- _Related Product List_ 
- _Your Outfit List_

![](https://media.giphy.com/media/rSVWYWFhOlDzV0ZPcq/giphy.gif)

# Stack

<table>
  <tbody>
    <tr>
      <th>Frontend Languages</th>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
         <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
         <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
        <img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Frameworks & Libraries</th>
      <td>
        <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
        <img alt="Redux" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Utilities</th>
      <td>
        <img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=%2361DAFB" />
        <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
        <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
     <tr>
      <th>Workflow</th>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
        <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/>
        <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
        <img alt="Zoom" src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Deployment</th>
      <td>
        <img alt="Docker" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>
        <img alt="AWS" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" />
      </td>
    </tr>
  </tbody>
</table>

# Workflow

Our team used Agile workflow for this sprint.

## Trello

A Trello board was used to create and track tickets. We held daily scrum meetings to discuss accomplishments, challenges, and upcoming tickets. To effectively collaborate remotely while allowing for quick communication if needed, we utilized Discord, Slack, and Zoom.

## Version Control

We implemented Git Feature Branch Workflow. All pull requests in Github were reviewed by another team member before being merged into the main branch.

# Development

## Repo

`git clone https://github.com/https-github-com-amandaklein1/fec_project_catwalk.git`

## Install

`npm install`

## Start Scripts

```
npm start
npm run build-prod
```

