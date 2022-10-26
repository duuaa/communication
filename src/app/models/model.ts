export interface User{
  firstName: string;
  lastName: string;
}
export interface Profile{
  email: string;
  address: string;
}
export interface Info{
  profile: Profile;
  user: User;
}
