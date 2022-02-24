export interface ICategory {
  id: string;
  title: string;
}
export interface IPost {
  id: string;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: ICategory;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp extends ISignIn{
  firstName: string;
  lastName: string;
}