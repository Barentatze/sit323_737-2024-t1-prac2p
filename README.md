# Jifeng Chen's 2.1P: Node.js and Express

This is the Jifeng Chen's implementation of SIT323 2.1P

In 2.1P, we are required to develop a demo serving a simple HTML page by creating a web server with Node.js.

For this assignment, I crafted a personal introduction website. Users can engage with the backend program by inputting personal information directly on the website.

To utilize this demonstration, please follow the steps below:

1. **Firstly**, initiate the server by executing the following command:
    ```bash  
    node server.js
    ```
   This command will launch a Node.js process on the server, listening on port 3040.

2. **Next**, open your preferred web browser and navigate to the following address:  
   [http://localhost:3040/index.html](http://localhost:3040/index.html)  
   This action will prompt the server to retrieve the "/index.html" page, subsequently delivering the HTML, CSS, and image files to your browser.

3. **Then**, input your <b>name</b> and <b>email</b> information directly on the webpage, then press <b>"Submit"</b>. This information will be transmitted to the server via a "GET" action.

4. **Finally**, the server will respond with a personalized greeting message, displayed in a message box on the website.

