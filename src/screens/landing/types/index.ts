// Interface

export interface Todo {
   userId: number;
   id: number;
   title: string;
   completed: boolean;
}

export interface iProps {
   example: any;
}

export interface FormValues {
   email: tEmail;
   password: tPassword;
}

// Types
export type tEmail = string;
export type tPassword = string;

export type tKey = string;
export type tValue = string;
