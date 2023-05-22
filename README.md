<!DOCTYPE html>
<body>
  <h1>Boilerplate Nest.js with PostgreSQL and Prisma</h1>
  <h2>Features</h2>
  <ul>
    <li>Nest.js framework for building scalable and modular applications</li>
    <li>PostgreSQL as the relational database management system</li>
    <li>Prisma as the database toolkit for type-safe database access and migrations</li>
    <li>Fully configured for development and production environments</li>
    <li>Includes example code for creating users using controllers, services, and DTOs</li>
    <li>Docker Compose setup for easy deployment and containerization</li>
  </ul>
  <h2>Prerequisites</h2>
  <p>Before running the project, ensure that you have the following software installed on your machine:</p>
  <ul>
    <li>Docker and Docker Compose (for containerization)</li>
    <li>Node.js (version 14 or higher)</li>
    <li>PostgreSQL (optional, if you want to run the database locally instead of using Docker)</li>
  </ul>
  <h2>Getting Started</h2>
  <ol>
    <li>Clone the repository and navigate to the project directory.</li>
    <li>Create a <code>.env</code> file in the project root and set the necessary environment variables. Refer to the provided example in the README for the required variables.</li>
    <ul>
        <li><strong>There's a .env.example with example of required envs to start the project =)</strong></li>
    </ul>
    <li>Run <code>docker-compose up</code> to start the project with Docker, or manually start the PostgreSQL database and run the project locally using <code>npm run start:prod</code>.</li>
    <li>Access the application by visiting <a href="http://localhost:3000">http://localhost:3000</a> in your browser.</li>
  </ol>
  <h2>Project Structure</h2>
  <p>The project follows a structured folder hierarchy to maintain a clean and organized codebase. Here's an overview of the main directories:</p>
  <ul>
    <li><code>src/infra</code>: Contains infrastructure-related code, such as configuration files for Prisma.</li>
    <li><code>src/user</code>: Represents the user domain module, including application-specific code.</li>
    <li><code>src/user/application</code>: Contains the controllers and services related to user management.</li>
    <li><code>src/user/data</code>: Includes repositories and use cases for data access and business logic.</li>
    <li><code>src/domains</code>: Contains shared domain-related entities, interfaces, and repositories.</li>
    <li><code>src/dtos</code>: Contains Data Transfer Objects (DTOs) used for data validation and input/output.</li>
    <li><code>src/user.module.ts</code>: Defines the user module and its dependencies.</li>
    <li><code>src/app.module.ts</code>: Main module file that imports all the required modules and sets up the application.</li>
    <li><code>test/</code>: Contains test files and configurations.</li>
  </ul>
  <p>Feel free to modify the project structure according to your specific requirements.</p>

<ul>
  <li>prisma
    <ul>
      <li>migrations</li>
      <li>schema.prisma</li>
    </ul>
  </li>
  <li>src
    <ul>
      <li>infra
        <ul>
          <li>config
            <ul>
              <li>prisma.module</li>
              <li>prisma.service</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>user (context)
        <ul>
          <li>application
            <ul>
              <li>controllers</li>
              <li>services</li>
            </ul>
          </li>
          <li>data
            <ul>
              <li>repositories</li>
              <li>use-cases</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>domains
        <ul>
          <li>entities</li>
          <li>interfaces</li>
          <li>repositories</li>
        </ul>
      </li>
      <li>dtos</li>
      <li>user.module.ts</li>
    </ul>
  </li>
  <li>app.module.ts</li>
  <li>test</li>
</ul>
  <h2>Contributing</h2>
  <p>Contributions to this boilerplate project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.</p>
  <h2>License</h2>
  <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
  <h2>Authors</h2>
  <ul>
    <li><a href="https://github.com/psnavega">Patrick Navega</a></li>
  </ul>
  <p>Enjoy building amazing applications with Nest.js, PostgreSQL, and Prisma!</p>
</body>
</html>