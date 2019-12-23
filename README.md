# PRODUCE & HERB SUPPLY

## Description
Duration: weekend project

This project was conceived and built out to reinforce my current knowledge and to expand my skills with things not yet covered in class. The concept was an easy-to-use, universally-friendly app that a vendor at a farmer's market (or any other business type, really) could use to track their product volume and sales. No login is currently required.

To see the fully functional site, please visit: https://fierce-tor-83498.herokuapp.com

## Technologies Used
- Javascript (jQuery) https://jquery.com/download/
- Nodejs (express, pg) https://nodejs.org/en/download/
- PostgreSQL (Postico) https://www.postgresql.org/download/ || https://eggerapps.at/postico/
- Bootstrap https://getbootstrap.com/docs/4.3/getting-started/download/

## Installation
- Download and install necessary technologies listed above
- Initialize npm (npm init -y)
- Install node express and pg (npm install express pg)
- Create a database named "herb_stock", I recommend using Postico for this
- Start up server, visit localhost:5000 in browser

## Usage
A user will open the app and be prompted to log in with their credentials (no login credentials currently required). This will bring them to the main page where they can check over their stock. The user can add new products, delete old products, and/or update the price of products as needed. There are a variety of stock photos pre-loaded, but a user can also use a url to grab their product photo(s). Ideally, this would provide a quicker, easier way to track inventory and which items are generating the most money. It sure beats tallying on paper and then adding everything up by hand at the end of the day!

## Future Plans
Moving forward I want to create a functional login page, allow the user to actually track their product quantities and sales, make the database(s) unique to each user as per their needs, make the layout more friendly for small devices, possibly add a CUSTOMER login button (in addition to the current ADMIN login button) that would allow a customer can see what different vendors have in stock before heading to a market, and continue fine-tuning things as I become a more knowledgeable programmer.

Thanks to Prime Digital Academy who equipped me with this awesome new skillset to make this application a reality. BIG thank you to my instructors, Mary and Dev, and my whole cohort for their unwavering support.

If you have suggestions or concerns, please email me at awren.nuit@gmail.com
