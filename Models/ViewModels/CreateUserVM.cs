namespace UserMvc.Models.ViewModels
{
    public class CreateUserVM
    {
        public string name { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public int Roleid { get; set; }

        public IFormFile Photo { get; set; }
    }
}
