const useAuth = () => {
  const { supabase  } = useSupabase();
  const router = useRouter();
  const user = useState("user", () => null);

  // listner to any change in Authentication
  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
  })
  
  // sign up
  const signUp = async ({ email, password, ...metaData }) => {
    const { userRigstered, error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      {
        data: metaData,
        redirectTo: `${window.location.origin}/profile?source=email`,
      }
      );
      
      if (error)
      throw error;
      // error ? throw error; : return userRigstered;;
      
      return userRigstered;
    };
    
    // sign in
    const signIn = async ({email, password}) => {
      const {userLogin ,error} = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error)
    throw error;

    return userLogin
  }
  
  // sign out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut(); 
    router.push("/")
    if (error)
    throw error;
  }

  // is user Logged In
  const isLoggedIn = () => {
    return !!user.value
  }

  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn,
  };
};

export default useAuth;
