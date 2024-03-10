# crowdfunding_front_end
A repo to contain my She Codes Crowdfunding front end project
by: Roberta De Cecco

### Live website link: [EDUKidz](https://edukidz.netlify.app/)


## Planning: 
A repo to contain my She Codes Crowdfunding frontend project.
This project used:
* Django Rest framework to build the backbone of the website/APIs. 
* Insomnia to show the APIs/Endpoints functionalities
* Fly.io to deploy the backend live version
* REACT and JS for the frontend
* netlify.com to deploy the frontend live version


## Concept/Name
**'EDUKidz'** is a platform that empowers individuals to crowdfund initiatives for underprivileged children, enabling them to access education and pursue their dreams. These children, filled with aspirations for themselves, their families, and their communities, often face financial barriers or geographic limitations that prevent them from attending school. EDUKidz bridges this gap by providing the tools and resources they need to unlock their full potential.



## Intended Audience/User Stories
 
EDUKidz platform likely targets two main audiences:

**1. Potential donors:**

**- Individuals passionate about education and supporting underprivileged children:** This could include people who have themselves benefited from good education or who simply believe in its transformative power.
**- Parents and families:** Parents who value education and might be looking for ways to support children in need, potentially even families who have emigrated from similar situations.
**-Philanthropic organizations and foundations:** Groups seeking to support educational causes and empower underprivileged communities.

**2. Potential beneficiaries:**

**-Children in need of financial assistance for education:** This could include children from low-income families, orphans, or children living in remote areas with limited access to schools.
**- Schools and educational institutions:** These institutions could utilize the platform to raise funds for specific needs or projects, improving their facilities or resources for students.

It's important to note that EDUKidz might also target individuals who can raise awareness for the platform and its causes. This could include educators, social media influencers, or celebrities who can help spread the word and attract potential donors and beneficiaries.

## Project Requirements

This crowdfunding project must:
* [x] Be separated into two distinct projects: an API built using the Django RestFramework and a website built using React.
* [x] Have a cool name, bonus points if it includes a pun and/or missing vowels. See https://namelix.com/ for inspiration. (Bonus Points are meaningless)
* [x] Have a clear target audience.
* [x] Have user accounts. A user should have at least the following attributes:
    * [x] Username
    * [x] Email address
    * [x] Password
        * I also added:
            * First name
            * Last name

* [x] Ability to create a “project” to be crowdfunded which will include at least the following attributes:
    * [x] Title
    * [x] Owner (a user)
    * [x] Description
    I added the description on the back of each project card that flips and also on the project page. Sample images in the 'Imges' folder.
    [GitHub Crowdfunding Repo](https://github.com/RobyOneJ/crowdfunding_front_end/tree/main/src/assets/imges)

    * [x] Image
    * [x] Target amount to fundraise
    * [x] Whether it is currently open to accepting new supporters or not
    * [x] When the project was created
* [x] Ability to “pledge” to a project. A pledge should include at least the following attributes:
    *   [x] An amount
    *   [x] The project the pledge is for
    *   [x] The supporter/user (i.e. who created the pledge)
    *   [x] Whether the pledge is anonymous or not
    *   [x] A comment to go along with the pledge
    *   [x] Implement suitable update/delete functionality, e.g. should a project owner be allowed to update a project description?
Yes, I allowed to update project details and delete project based on user permission on whether it is the author. If not, he/she won't see the buttons.
* [x] Implement suitable permissions, e.g. who is allowed to delete a pledge? 
No one but I allowed to update Pledge details to the supporter user if logged in and if the creator. If not, he/she won't see the buttons.
* [x] Return the relevant status codes for both successful and unsuccessful requests to the API.
(Backend related but I implemented some alerts on screens when user forgets to type into fields or makes mistakes)
* [x] Handle failed requests gracefully (e.g. you should have a custom 404 pag erather than the default error page).
This was backend.
* [x] Use Token Authentication.
* [x] Implement responsive design.
Added media queries in the css files for mobile view.

## Submission requirements:

* [x] A link to the deployed project. 
    * Go to the top for the [Live Website link](#live-website-link-edukidz).
* [x] A screenshot of the homepage 
* [x] A screenshot of the project creation page
* [x] screenshot of the project creation form
* [x] A screenshot of a project with pledges
* [x] A screenshot of the resulting page when an unauthorized user attempts to edit a project (optional, depending on whether or not this functionality makes sense in your app!) - I developed it so if user is not the author, the 'Update project' button is not displayed and same for 'Delete project' and 'Update' pledge button. Also the project cannot pledge on its own project hence, button is not visible.

* See the 'Images' folder in my Repo: [GitHub Crowdfunding Repo](https://github.com/RobyOneJ/crowdfunding_front_end/tree/main/src/assets/imges) where you can also find images of extra pages/forms.

