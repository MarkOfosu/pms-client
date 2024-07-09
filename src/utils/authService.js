// src/utils/authService.js


export const checkAuthStatus = async (login, logout) => {
    try {
      const response = await fetch(`/api/auth/validate`, {    
        credentials: 'include'
      });
  
      if (!response.ok) {
        // If the HTTP status code is not in the 200-299 range,
        // it indicates that the request was not successful.
        throw new Error('Not authenticated');
      }
  
      const userData = await response.json();
  
      if (userData.status === 200) {
        login(userData); // Assuming `login` function takes the entire user data object.
      } else {
        // If the API response contains a `success` property that is not true,
        // it indicates that the authentication check failed.
        throw new Error('Not authenticated');
      }
    } catch (error) {
      logout(); // Clear the auth context state
      console.error(error); // Log the error for debugging purposes.
    }
  };
  






  