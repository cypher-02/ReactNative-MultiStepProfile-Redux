export interface Profile {
  id: string;
  fullName: string;
  email: string;
  age: number;
  city: string;
  state: string;
  country: string;
}

export interface ProfileState {
  profiles: Profile[];
  draft: Partial<Profile>;
}
