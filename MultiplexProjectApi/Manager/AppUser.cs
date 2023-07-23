namespace MultiplexProjectApi.Manager
{
    public class AppUser
    {
        public string Email { get; set; }
        public string Password { get; set; }

        public AppUser(string email, string password)
        {
            Email = email ?? throw new ArgumentNullException(nameof(email));
            Password = password ?? throw new ArgumentNullException(nameof(password));
        }
        public AppUser() { }
    }
}
