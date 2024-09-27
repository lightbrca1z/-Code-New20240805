const Example = () => {
  // 練習用
  type User = () => {
    name: string,
    age: number
  }


  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "woman" | "others";

  type UserProfile = {
    name: UserName,
    age: UserAge,
    gender: UserGender,
  }

  // const user: User = { name : 'Taro', age: 10 }

  const UserProfile: UserProfile = {
    name: 'Hanako',
    age: 21,
    gender: "woman"
  }
};

export default Example;
