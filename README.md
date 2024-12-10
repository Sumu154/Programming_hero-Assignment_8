# Gadget Heaven
an e-commerce platform for GadgetHaven, a gadget-buying website,
based on a detailed Figma design. Key functionalities
include a shopping cart, a wishlist system, and product filtering.


Live link -> https://peaceful-elf-1dc7d7.netlify.app/



### Requirement Document
Here atteched the requirements for this project.View the requirements 
[here](https://drive.google.com/file/d/1UncgC65towqCYYf3W3aLypUF0huIY3dZ/view?usp=sharing)  




## React Fundamentals Used
This project demonstrates the use of the following React concepts:

1. **Components**: Functional components are used to build reusable UI elements such as `Categories`, `Products`, and `NavBar`.
2. **Props**: Passing data between parent and child components for dynamic rendering.
3. **State Management**: `useState` is used to manage local states like selected categories and other UI states.
4. **Routing**: `react-router-dom` is used for navigation and nested layouts.
5. **Effects**: `useEffect` is used for fetching data dynamically and updating UI accordingly.



## Data Handling and Management
- **Context API**: The project uses `React Context API` to manage shared data like cart items, wishlist, total cost, and comments across components.



## Features of GadgetHeaven✨

1. **Dynamic Product Filtering by Categories**  
   Sidebar categories allow users to filter and view products dynamically on the home page.

2. **Wishlist and Cart System**  
   Add items to the cart or wishlist with real-time updates and persistent data storage using Context API.

3. **Interactive Product Details Page**  
   Each product's details page displays all relevant information, including price, description, rating, and availability.

4. **Sorting and Management**  
   The dashboard includes sorting by price for cart items and options to manage wishlist and cart contents effectively.

5. **User Feedback with Toasts and Modals**  
   Visual feedback for adding items to the cart or wishlist using toasts, and a modal congratulates users on successful purchases.


