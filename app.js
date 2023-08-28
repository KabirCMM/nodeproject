document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const addUserButton = document.getElementById('add-user');
    const updateUserButton = document.getElementById('update-user');
    const deleteUserButton = document.getElementById('delete-user');
    const userList = document.getElementById('user-list');
  

    addUserButton.addEventListener('click', async () => {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          age: parseInt(ageInput.value)
        })
      });
      const newUser = await response.json();
      displayUsers();
    });
  
    updateUserButton.addEventListener('click', async () => {
      displayUsers();
    });
  
    
    deleteUserButton.addEventListener('click', async () => {
      displayUsers();
    });
  
    async function displayUsers() {
      userList.innerHTML = ''; 
      const response = await fetch('/users');
      const users = await response.json();
      users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.innerHTML = `
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Age:</strong> ${user.age}</p>
          <hr>
        `;
        userList.appendChild(userItem);
      });
    }
 
    displayUsers();
  });
  