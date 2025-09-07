# 🛠 React Router Project

A comprehensive React project demonstrating **modern React Router (v6+)** features including:

- Nested routing  
- Layout with Navbar & Footer  
- Dynamic routes (`/user/:id`)  
- Loader for API data  
- Error boundaries (`ErrorPage`)  
- 404 NotFound handling  

This README explains the routing structure, components, and best practices used in this project.

---


- **components/**: Reusable components like Navbar, Footer, User profile card, Github card  
- **pages/**: Each page of the app (Home, About, Contact)  
- **Layout.jsx**: Parent route wrapper containing Navbar, Footer, and `<Outlet />`  
- **App.jsx**: Router setup using `createBrowserRouter`  
- **NotFound.jsx**: 404 page  
- **ErrorPage.jsx**: Loader/API error handling page  

---

Layout (Parent)
├── Navbar (Fixed)
├── <Outlet /> (Child page renders here)
│    ├── Home (/)
│    ├── About (/about)
│    ├── Contact (/contact)
│    ├── User (/user/:id)
│    ├── Github (/github) [Loader]
│    └── NotFound (*) [404]
└── Footer (Fixed)

Error Handling
├── Loader/API Fail → ErrorPage



