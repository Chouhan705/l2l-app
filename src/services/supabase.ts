// Supabase Auth and Database Client Blueprint

export const supabaseAuthMock = {
  signInWithGoogle: async () => {
    // In production: supabase.auth.signInWithOAuth({ provider: 'google' })
    return { success: true, user: { id: 'usr_1', email: 'aditya@example.com' } };
  },
  signInWithApple: async () => {
    return { success: true, user: { id: 'usr_2', email: 'aditya@apple.com' } };
  },
  signInWithEmail: async (email: string) => {
    return { success: true, user: { id: 'usr_3', email } };
  },
  updateProfile: async (profile: { fullName: string; role: string; goal: string }) => {
    // In production: supabase.from('profiles').upsert(profile)
    return { success: true, profile };
  },
};