################################################################
## Comments from developer
################################################################
## Technologies used:
* HTML,CSS3 (SASS preprocessor), Bootstrap 3 UI Framework
* Javascript (AngularJs) --> jQuery also included in order for bootstrap to work
* NodeJs v11.7.0.

## Information for running application:
-node_modules dependencies not included as requested so npm needs to be updated with 
#### `npm install` 
and after run the project 
#### `npm run api`

## Tasks that didnt met requirements from my side:
-I didn't do unit test on angular per component as requested because I never done that before but I will learn it, I did only some unit testing on backend in C#,
I am interested in learning it and it shouldn't take too much time

## ANSWERS TO YOUR QUESTIONS:
* Do you have a StackOverflow, GitHub, etc account that you'd like us to have a look at?

* https://github.com/bvasic/
* https://www.linkedin.com/in/bvasic/
* https://bojanvasic.me/

* Tell me about a technical book or article you read recently, why you liked it, and why I should read it.

Last book that I read was from O'Reilly - Learning Node
Reason for it is that I got very interested in node in last approx.2-3 years and find it very usefull for rapid development with limited human resources,
specially for startups, and its fast learning curve for anyone who is familiar with Javascript, and I find it also very good for building microservices

There was also an article about DevOps that I came across recently and definitely saw evidence of that happening in some environments where architecture, infrastructure and few other factors are not ready for it, 
**link is:** https://www.cloudcomputing-news.net/news/2019/feb/20/four-reasons-why-your-company-might-not-be-ready-devops-just-yet/

* Tell us about why you consider LetsGetChecked to be the right move for you.

Because when I heard about LetsGetChecked, first of all I saw big potential for massive expansion on the market because idea for giving people opportunity to test their health on their own in their home without visiting doctor is absolutely brilliant, and also its the first company that I encountered that came up with that business model.

After research on LinkedIn, Glassdoor and also heard from other people good words about it, and that person can expect very good healthy working environment with a good team, on a definitely interesting projects, and last but not least: its for the great cause. Human health!

Also, I think I still have plenty to learn although that I am working in this area of IT for many years, and I see myself being as an effective and productive member of the theam, with even possibility to advance my career in future in LetsGetChecked. I think learning is very important, on daily basis, specially in software engineering where new technologies and processes are coming and evolving so fast, so from what I have information, LetsGetChecked is perfect company and environment for motivated and eager to learn people.


I hope I answered all of your questions,
should you require anything else from my side,
please do not hesitate to contact me.

I'm looking forward to speak with you.

Thank you.

Kind regards,
Bojan Vasic
## ################################################################
## ################################################################








# LetsGetChecked front end challenge REST API
> Starter REST API for LetsGetChecked front end coding challenge

## Getting started

### Prerequisites

* [Node.js](https://nodejs.org/en/) v6 or higher

## What is required to complete the challenge

You are required to create a blog application that interfaces with the provided REST API. The application should have a home page that shows all blog posts, sorted by publish date. Users should be able to view individual posts in a separate page. Within that page they should be able to read comments and add a new comment.


### Business Requirements:

_We are looking for at least all of the requirements to be submitted.  This is your chance to impress us so feel free to add functionality or design_

* Blog feed should list all posts and associated title, author, date and description, sorted by publish date from newest first.
* Users can view individual blog posts in a separate page.
* Users can view comments for a blog post.
* Users can add a comment to a blog post.

### Technical Requirements

Depending the role please complete one of the following

#### Frontend Developer

Create a javascript application using a modern javascript framework which runs in the browser and satisifes the following requirements:

* Two or more distinct components demonstrating component hierarchy
* At least one service that interfaces with the REST API
* At least one unit test per component
* The use of a CSS pre-processing tool like SCSS/LESS
* Consideration of semantic markup, SEO and accessibility

*OR*

#### Android Developer

Create an android application which satisfies the following requirements:

* Built with Kotlin
* Multiple components which show the correct usage of Fragments and Activities
* The use of a ViewModel for persisting data
* The use of a Web Service that interfaces with the REST API
* At least one unit test per component

*OR*

#### iOS Developer

Create an iOS application which satisfies the following requirements:

* Built with Swift
* Multiple components which show the correct usage of MVC pattern
* The use of a client networking model that interfaces with the REST API
* At least three unit tests

## API

> This starter kit provides the basic API you will need to complete your coding challenge. See [Using the REST API](#using-the-rest-api) for more information.

### Quick start

#### 1. Run `npm install`

This will install all dependencies (listed in `package.json`) necessary to get the API up and running.

#### 2. Run `npm run api`

`npm run api` will start [json-server](https://github.com/typicode/json-server) to provide a stubbed out REST API through `localhost:9001`.

## Using the REST API

> Note: Ensure that you've started the API server with `npm run api`.

A REST API is provided with seed data for blog posts and comments.  The REST API returns and accepts JSON.  Changes made to the "database" will persist as long as the API is running on `localhost:9001`.

**Base path:** http://localhost:9001

**GET** `/posts` *List all blog posts*<br>
**GET** `/posts/{id}` *View single blog post*<br>
**GET** `/posts/{id}/comments` *List all comments for single blog post*<br>
**POST** `/posts/{id}/comments` *Add comment to single blog post*<br>
**PUT** `/comments/{id}` *Update single comment*<br>

## Delivering to LetsGetChecked

You may zip up your entire application directly and deliver the source code to LetsGetChecked. Ensure that extraneous folders, eg. `/node_modules`, are not included in the zip file. If you've initialized Git in the application directory locally, you may use [git clean](https://git-scm.com/docs/git-clean) to remove uncommitted and ignored files before compressing the project.

Alternatively you can provide a link to a git/bitbucket/etc repository which contains the application code.

If you wish to go a step further you may host the final product for demo purposes, eg. with AWS S3. However, this is not required for completion of the code challenge.

**Thank you, and enjoy the challenge!**
