// У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
// Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.

// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

// // Реалізуйте Params так, 
// // щоб унеможливити поле 'errors' з типу Form
// type Params = Form;


type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };
  
  // Реалізуємо Params так, щоб унеможливити поле 'errors' з типу Form
  type Params = Omit<Form, 'errors'>;
  
  // Приклад використання
  const formParams: Params = {
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
  };
  