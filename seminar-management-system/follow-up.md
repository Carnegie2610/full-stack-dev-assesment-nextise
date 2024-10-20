# Implementation

**Q) What libraries did you add to the frontend? What are they used for?**

**_A) libraries added : date-fns which is used for formating the date into an appropriate format for rendering_**

**Q) What libraries did you add to the backend? What are they used for?**  
(Explain any additional libraries or tools for backend functionality and what they are for.)<br>
**_A)commitzen which is a library which facilitates commits and speeds up the process_** <br>
**_B)mongoose which is the enables me to interact in a straight foward manner with mongodb_**<br>
**_c)next auth which is used to manage authentication_**<br>
**_D)node js mailer which is used to send emails_**<br>

**Q) How does the application handle the assignment of trainers and the email notification feature?**  
(Describe the implementation of the email functionality and how Mailhog was used for testing.)

**_1- to implement the email functionality node mailer was used and installed using _**

    npm install node mailer

**_2- a transorter was created and the function nodemailer.createTransprt was used to set up an smtp connection to the host and since i am using mailhog it does not require any authentication_**

    const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false,
    auth: { user: '', pass: '' }

});

**_3- once that was set up all i had to do was to define the email details and use transporter.ssendMail() to send the email_**

    const mailOptions = {
    from: '"Course Management" <no-reply@courseapp.com>',
    to: trainerEmail,
    subject: `Assigned to course: ${courseDetails.name}`,
    text: `Hello ${courseDetails.trainerName}, you have been assigned to the course.`,
    html: `<h1>Hello ${courseDetails.trainerName}</h1>`
    };
    await transporter.sendMail(mailOptions);

**_ NOTE: Mailhog captures emails for local testing at `http://localhost:8025`, so you can verify emails without sending them to real recipients._**

**_A)once you click on the assign trainer button a request is mæde to the database to embed the trainer informætion to the courses such the the trainer becomes part of the courses_**

**Q) What command do you use to start the application locally?**  
`(Provide the command, e.g., docker-compose up --buid , npm start)`
**_A) docker-compose up --watch: This starts all services using Docker Compose and watches for file changes, making the development process smoother._**

---

## General

**Q) If you had more time, what improvements or new features would you add?**  
(Discuss any potential enhancements, such as improved UI, new functionalities, etc.)

**_A)improve the ui of the application _**
**_A)improve the algorithm to assign a traiiner to maximize onthe cost and on the time _**

**Q) Which parts of the project are you most proud of? Why?**  
(Highlight the parts of the code that you think are most well-written or efficient.)

**_A)the to display and fetch the different couses from the mongo db database alse the part concerned with the mail_**

**Q) Which parts did you spend the most time on? What did you find most challenging?**  
(Describe any difficulties or complexities you encountered during development.)
**_A)I spent a lot of tim€ trying to implement the button to assign a trainer to a course was not the most easy to beacause of alot of errors_**

**Q) How did you find the test overall? Did you encounter any issues or difficulties completing it?**  
(Provide feedback on the test’s difficulty and any areas that could be clarified or improved.)

**_A)the test is an appropriate test to evaluate my skills on the front end side and on the backend side_**

**Q) Do you have any suggestions on how we can improve the test?**  
(We welcome suggestions to improve the interview process or the structure of the test.)

**_A)i think we can improve the test by increasing the time for the test_**
