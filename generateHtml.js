
function generateHtml(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Document</title>
  </head>
  
  <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">My Team</h1>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${answers.managerName}</h5>
        <p class="card-text">Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.managerId}</li>
        <li class="list-group-item"><a href="mailto:${answers.email}">Email: izzy@email.com</a></li>
        <li class="list-group-item">Office number: ${answers.office}</li>
      </ul>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${answers.engName}</h5>
        <p class="card-text">Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.engId}</li>
        <li class="list-group-item"><a href="mailto:${answers.engEmail}">Email: Jimmy@email.com</a></li>
        <li class="list-group-item"><a href="https://github.com/${answers.github}">GitHub: https://github.com/imagallon</a></li>
      </ul>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${answers.internName}</h5>
        <p class="card-text">Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.internId}</li>
        <li class="list-group-item"><a href="mailto:${answers.internEmail}">Email: Sarah@email.com</a></li>
        <li class="list-group-item">School: UCSD</li>
      </ul>
    </div>
  
  
  
  
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
      crossorigin="anonymous"></script>
  </body>
  
  </html>
  `;
}

module.exports = generateHtml;