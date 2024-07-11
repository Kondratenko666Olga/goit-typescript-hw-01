// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. 
// Використовуйте Generics для типізації повернутих даних.


import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// Приклад використання
interface UserData {
  id: number;
  name: string;
  email: string;
}

const url = 'https://api.example.com/user/1';

// Dзначаємо інтерфейс UserData і викликаємо fetchData з цим інтерфейсом, 
// щоб вказати тип даних, які ми очікуємо отримати від API

fetchData<UserData>(url)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
