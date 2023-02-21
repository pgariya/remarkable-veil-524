<!-- All the folder structure information -->
=> Before you start:
   - I have already created all the folders which you will need during journey.

   - Dont use any other folder to make files if you are doing please inform the
     team members that you have created a folder with name.

   - I have already setup all the things related to `redux`, `.env`, `Chakra UI` and `react-router-dom` 
     You guys have to just start developments.

   - Also given you sample `Navbar` and `Footer` components so that you get 
     comfortable about folder components export.

   - You will get all the routing files in `routes` folder.

   - You can also use context-api if needed.

   - All the end-points and base-url should be in env files.

   - Use `assets` folder for images,pdf,video..etc
   - Use `components` folder for making components either in folder or without folder 
     just be sure naming should not match with other folder/file to avoid collision
   - Use `pages` folder to create all the pages
   - Use `routes`  folder to all the routing related stuffs
   - Use `scripts` folder for any js script you wanna write.(this folder helps you to 
     keep jsx and js folder separate)
   - Use `styles` folder to keep your all css files.
   - Use `constants` folder to create all the constants (Helps you reducing hard-coding)(Most recommended)

<!-- Cloning related and Getting started related stuffs -->
=> Clone the directory to start work `$git clone  https://github.com/pgariya/remarkable-veil-524.git`

=> Ok guys here are the some basic instruction before you start , If you are here you are successfully pulled the code and you are ready to type you first command in terminal.

Step-1- Navigate to proeject directory using `$cd remarkable-veil-524`

Step-2- install node_modules using `$cd npm install`

- It will install some common dependencies like :- <br />
    - `$npm install react-router-dom redux react-redux redux-thunk axios`<br />
    - `$npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion`

<!-- Git related stuffs -->
=> Some basic requirements(Mandatory):
       1- You have to work in daily branches manner, so you have to create
          new branch everyday . So you have make branch using your student_code 
          followed the day in which you working. below is the eg for my branches.

               - branch-naming style: fw21_XXXX_day-x

            -for day-2 branch name should be: fw21_1003_day-2
            -for day-3 branch name should be: fw21_1003_day-3
            -for day-4 branch name should be: fw21_1003_day-4
            -for day-5 branch name should be: fw21_1003_day-5

        2- How to create branches:
            - $git branch <branch-name> (without angle brackets)
        
        3- How to switch branches:
            -$git switch <branch-name>  (without angle brackets)
        
        4- How to pull:
            -$git pull origin <branch-name>    (without angle brackets)


=> Some helpful Tools during development :<br />
    - Chakra-UI - https://chakra-ui.com/<br />
    - Chakra-Templets - https://chakra-templates.dev/#<br />
    - String Builder - https://codebeautify.org/string-builder<br />
    - Chat-gpt - https://chat.openai.com/chat<br />
    - Your-Team-members- You can use Slack to communicate<br />

# DATABASE SCHEMAS

 # endpoints:-
GET/POST/PATCH/DELETE<br>

`/user`--->|POST<br>
         |---> `/user/register`<br>
         |---> `/user/login`<br>



|GET/POST<br>
`/products`--->|GET/PATCH/DELETE<br>
             |---> `/products/:id`<br>

             
|GET/POST  <br>           
`/cart`--->|GET/PATCH/DELETE <br>
         |---> `/cart/:id`<br>


|GET/POST<br>
`/orders`--->|GET/PATCH/DELETE<br>
           |---> `/orders/:id`<br>


|GET<br>
`/search`<br>

 # Middlewares
Authencator--> verify user

 # Querys:-
`/search?q=`<br>
`/products?`<size, price, category, style, color, material, fir, occasion, sleeves, neck, brand, gender> =<br>

 # user keys
name <br>
email<br>
password<br>
role<br>
phone<br>

 # Product keys
image<br>
title<br>
description<br>
price<br>
sizes<br>
category<br>
style<br>
color<br>
material<br>
fit<br>
occasion<br>
sleeves<br>
neck<br>
brand<br>
gender<br>

 # user schema
name:{type:String,required:true},<br>
email:{type:String,required:true},<br>
password:{type:String,required:true},<br>
role:{type:String,required:true},<br>
phone:title:{type:String,required:true},<br>



 # Product Schema<br>
_id:{type:String,required:true},<br>
image:{type:String,required:true},<br>
title:{type:String,required:true},<br>
description:{type:String,required:true},<br>
price:{type:Number,required:true},<br>
sizes:{type:String,required:true},<br>
category:{type:String,required:true},<br>
style:{type:String,required:true},<br>
color:{type:String,required:true},<br>
material:{type:String,required:true},<br>
fit:{type:String,required:true},<br>
occasion:{type:String,required:true},<br>
sleeves:{type:String,required:true},<br>
neck:{type:String,required:true},<br>
brand:{type:String,required:true},<br>
gender:{type:String,required:true}<br>

 # Cart Schema
_id:{type:String,required:true},<br>
image:{type:String,required:true},<br>
title:{type:String,required:true},<br>
description:{type:String,required:true},<br>
price:{type:Number,required:true},<br>
sizes:{type:String,required:true},<br>
category:{type:String,required:true},<br>
style:{type:String,required:true},<br>
color:{type:String,required:true},<br>
material:{type:String,required:true},<br>
fit:{type:String,required:true},<br>
occasion:{type:String,required:true},<br>
sleeves:{type:String,required:true},<br>
neck:{type:String,required:true},<br>
brand:{type:String,required:true},<br>
gender:{type:String,required:true},<br>
quantity:{type:Number,required:true},<br>
user:{type:String,required:true},<br>
pid:{type:String,required:true},<br>


 # Order Schema
image:{type:String,required:true},<br>
title:{type:String,required:true},<br>
description:{type:String,required:true},<br>
price:{type:Number,required:true},<br>
sizes:{type:String,required:true},<br>
category:{type:String,required:true},<br>
style:{type:String,required:true},<br>
color:{type:String,required:true},<br>
material:{type:String,required:true},<br>
fit:{type:String,required:true},<br>
occasion:{type:String,required:true},<br>
sleeves:{type:String,required:true},<br>
neck:{type:String,required:true},<br>
brand:{type:String,required:true},<br>
gender:{type:String,required:true},<br>
quantity:{type:Number,required:true},<br>
user:{type:String,required:true},<br>
status:{type:String,required:true},<br>
address:{type:String,required:true},<br>
pid:{type:String,required:true},<br>





